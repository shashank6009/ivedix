'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export interface ChromaItem {
  image: string | { src: string };
  title: string;
  subtitle?: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  onClick?: () => void;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  horizontal?: boolean;
  visible?: number; // number of visible cards in horizontal mode
  onCardClick?: (item: ChromaItem) => void;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
  horizontal = false,
  visible = 3,
  onCardClick,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<HTMLDivElement | null>(null);
  const setX = useRef<((value: number) => void) | null>(null);
  const setY = useRef<((value: number) => void) | null>(null);
  const pos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const demo: ChromaItem[] = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: 'https://github.com/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg, #10B981, #000)',
      url: 'https://linkedin.com/in/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Morgan Blake',
      subtitle: 'UI/UX Designer',
      handle: '@morganblake',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg, #F59E0B, #000)',
      url: 'https://dribbble.com/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=16',
      title: 'Casey Park',
      subtitle: 'Data Scientist',
      handle: '@caseypark',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg, #EF4444, #000)',
      url: 'https://kaggle.com/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=25',
      title: 'Sam Kim',
      subtitle: 'Mobile Developer',
      handle: '@thesamkim',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
      url: 'https://github.com/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=60',
      title: 'Tyler Rodriguez',
      subtitle: 'Cloud Architect',
      handle: '@tylerrod',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: 'https://aws.amazon.com/',
    },
  ];
  const data = items?.length ? items : demo;
  const dataToShow = horizontal ? data : data;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as (value: number) => void;
    setY.current = gsap.quickSetter(el, '--y', 'px') as (value: number) => void;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  // Simple horizontal scroll without infinite loop
  useEffect(() => {
    if (!horizontal) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    // Ensure we start at the very beginning and can scroll to see all cards
    scroller.scrollLeft = 0;
    
    // Force a reflow to ensure proper scroll width calculation
    setTimeout(() => {
      scroller.scrollLeft = 0;
    }, 100);
  }, [horizontal, dataToShow.length]);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = rootRef.current?.getBoundingClientRect();
    if (!r) return;
    moveTo(e.clientX - r.left, e.clientY - r.top);
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
    }
  };

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  if (horizontal) {
    return (
      <div
        ref={rootRef}
        className={className}
        style={{
          // @ts-expect-error CSS custom properties
          '--r': `${radius}px`,
        }}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        <div
          ref={scrollerRef}
          className="chroma-row"
          style={{
            // keep var for compatibility but we'll use fixed card widths for stability
            // @ts-expect-error CSS custom properties
            '--visible': visible,
          }}
        >
          {dataToShow.map((c, i) => {
            const imgSrc = typeof c.image === 'string' ? c.image : (c.image as any)?.src || '';
            return (
              <article
                key={`h-${i}`}
                className="chroma-card"
                onMouseMove={handleCardMove}
                onClick={() => {
                  if (c.onClick) {
                    c.onClick();
                  } else if (onCardClick) {
                    onCardClick(c);
                  }
                }}
                style={{
                  '--card-border': c.borderColor || 'transparent',
                  '--card-gradient': c.gradient,
                  cursor: (c.onClick || c.url || onCardClick) ? 'pointer' : 'default',
                  flex: '0 0 320px',
                  maxWidth: '320px',
                } as React.CSSProperties}
              >
                <div className="chroma-img-wrapper">
                  <img src={imgSrc} alt={c.title} loading="lazy" />
                </div>
                <footer className="chroma-info">
                  <h3 className="name">{c.title}</h3>
                  {c.handle && <span className="handle">{c.handle}</span>}
                  {c.subtitle && <p className="role">{c.subtitle}</p>}
                  {c.location && <span className="location">{c.location}</span>}
                </footer>
              </article>
            );
          })}
          <div className="chroma-overlay" />
          <div ref={fadeRef} className="chroma-fade" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns,
        '--rows': rows,
      } as React.CSSProperties}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => {
        const imgSrc = typeof c.image === 'string' ? c.image : (c.image as any)?.src || '';
        return (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => {
            if (c.onClick) {
              c.onClick();
            } else if (onCardClick) {
              onCardClick(c);
            }
          }}
          style={{
            '--card-border': c.borderColor || 'transparent',
            '--card-gradient': c.gradient,
            cursor: (c.onClick || c.url || onCardClick) ? 'pointer' : 'default',
          } as React.CSSProperties}
        >
          <div className="chroma-img-wrapper">
            <img src={imgSrc} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            {c.subtitle && <p className="role">{c.subtitle}</p>}
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
        );
      })}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;


