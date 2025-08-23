'use client';

import React, { useLayoutEffect, useRef, useCallback, ReactNode, useState } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

export interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number; // not currently used but kept for API parity
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
  mode?: 'stack' | 'parallax';
  parallaxStrength?: number; // 0.12 means 12% of scroll delta
  cascadeOffsetX?: number; // px per index
  cascadeOffsetY?: number; // px per index (horizontal mode)
  showProgress?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
  mode = 'parallax',
  parallaxStrength = 0.12,
  cascadeOffsetX = 28,
  cascadeOffsetY = 0,
  showProgress = true,
  orientation = 'horizontal',
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<any>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lastTransformsRef = useRef<Map<number, { translateY: number; scale: number; rotation: number; blur: number }>>(new Map());
  const isUpdatingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const snapTimeoutRef = useRef<number | null>(null);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return typeof value === 'number' ? value : parseFloat(String(value));
  }, []);

  const updateCardTransforms = useCallback(() => {
    const scroller = scrollerRef.current as HTMLDivElement | null;
    if (!scroller || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = scroller.scrollTop;
    const containerHeight = scroller.clientHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElement = scroller.querySelector('.scroll-stack-end') as HTMLElement | null;
    const endElementTop = endElement ? endElement.offsetTop : 0;

    // Horizontal metrics
    const scrollLeft = scroller.scrollLeft;
    const containerWidth = scroller.clientWidth;
    const anchorX = parsePercentage(stackPosition, containerWidth);

    // Determine current top card index for styling (both orientations)
    let currentTopIndex = 0;
    if (orientation === 'horizontal') {
      const viewportCenter = scrollLeft + containerWidth / 2;
      let bestDist = Infinity;
      cardsRef.current.forEach((el, idx) => {
        const left = (el as HTMLElement).offsetLeft;
        const center = left + (el as HTMLElement).offsetWidth / 2;
        const d = Math.abs(center - viewportCenter);
        if (d < bestDist) { bestDist = d; currentTopIndex = idx; }
      });
    } else {
      for (let j = 0; j < cardsRef.current.length; j++) {
        const jCardTop = cardsRef.current[j].offsetTop;
        const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
        if (scrollTop >= jTriggerStart) currentTopIndex = j;
      }
    }
    if (currentTopIndex !== activeIndex) setActiveIndex(currentTopIndex);

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // HORIZONTAL PARALLAX CASCADE MODE
      if (orientation === 'horizontal' && mode === 'parallax') {
        const cardLeft = (card as HTMLElement).offsetLeft;
        const delta = scrollLeft + anchorX - cardLeft;
        const factor = parallaxStrength * (1 + i * 0.06);
        const translateX = -delta * factor + i * cascadeOffsetX;
        const translateY = i * cascadeOffsetY;
        const opacity = Math.max(0.25, 1 - Math.max(0, Math.abs(i - currentTopIndex)) * 0.12);

        const transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        (card as HTMLElement).style.transform = transform;
        (card as HTMLElement).style.filter = '';
        (card as HTMLElement).style.opacity = String(opacity);

        if (i === currentTopIndex) {
          (card as HTMLElement).classList.add('is-top');
        } else {
          (card as HTMLElement).classList.remove('is-top');
        }
        return;
      }

      // PARALLAX CASCADE MODE
      if (mode === 'parallax') {
        const cardTop = card.offsetTop;
        const viewport = containerHeight;
        const delta = scrollTop + stackPositionPx - cardTop; // positive when card passes anchor
        const factor = parallaxStrength * (1 + i * 0.06);
        const translateY = -delta * factor;
        const translateX = i * cascadeOffsetX;
        const opacity = Math.max(0.35, 1 - Math.max(0, (i - currentTopIndex)) * 0.08);

        const transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        (card as HTMLElement).style.transform = transform;
        (card as HTMLElement).style.filter = '';
        (card as HTMLElement).style.opacity = String(opacity);

        if (i === currentTopIndex) {
          (card as HTMLElement).classList.add('is-top');
        } else {
          (card as HTMLElement).classList.remove('is-top');
        }
        return;
      }

      // STACK MODE (original)
      const cardTop = card.offsetTop;
      const cardHeight = (card as HTMLElement).offsetHeight;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;
      // Keep the pinned card fully visible: ensure bottom never cuts
      const safeVisible = Math.max(containerHeight - stackPositionPx, cardHeight);
      const pinEnd = endElementTop - safeVisible + stackPositionPx - 20;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        if (i < currentTopIndex) {
          const depthInStack = currentTopIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';
        (card as HTMLElement).style.transform = transform;
        (card as HTMLElement).style.filter = filter;
        lastTransformsRef.current.set(i, newTransform);
      }

      // Toggle top-card class for premium styling
      if (i === currentTopIndex) {
        (card as HTMLElement).classList.add('is-top');
      } else {
        (card as HTMLElement).classList.remove('is-top');
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // In horizontal mode, skip Lenis (vertical smooth scroll). We'll implement wheel→horizontal mapping instead.
    if (orientation === 'horizontal') {
      const onWheel = (e: WheelEvent) => {
        const absY = Math.abs(e.deltaY);
        const absX = Math.abs(e.deltaX);
        if (absY > absX) {
          e.preventDefault();
          scroller.scrollLeft += e.deltaY;
        }
      };
      scroller.addEventListener('wheel', onWheel, { passive: false });
      return () => {
        scroller.removeEventListener('wheel', onWheel);
      };
    }

    const lenis = new Lenis({
      wrapper: scroller as any,
      content: (scroller as HTMLElement).querySelector('.scroll-stack-inner') as HTMLElement,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      gestureOrientationHandler: true as any,
      normalizeWheel: true,
      wheelMultiplier: 1,
      touchInertiaMultiplier: 35,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchInertia: 0.6,
    } as any);

    lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card')) as HTMLDivElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        (card as HTMLElement).style.marginBottom = `${itemDistance}px`;
      }
      (card as HTMLElement).style.willChange = 'transform, filter';
      (card as HTMLElement).style.transformOrigin = 'top center';
      (card as HTMLElement).style.backfaceVisibility = 'hidden';
      (card as HTMLElement).style.transform = 'translateZ(0)';
      (card as HTMLElement).style.webkitTransform = 'translateZ(0)';
      (card as HTMLElement).style.perspective = '1000px';
      (card as HTMLElement).style.webkitPerspective = '1000px';
    });

    const disposer = setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      if (typeof disposer === 'function') (disposer as any)();
      stackCompletedRef.current = false;
      cardsRef.current = [] as any;
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${orientation === 'horizontal' ? 'horizontal' : ''} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className={`scroll-stack-inner ${orientation === 'horizontal' ? 'horizontal' : ''}`.trim()}>
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
