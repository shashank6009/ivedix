'use client';

import React, { useEffect, useRef, useState } from 'react';
import LightRays from './LightRays';

export interface OrbitItem {
  id?: string | number;
  name: string;
  img?: string;
  description?: string;
}

export interface OrbitNavProps {
  items: OrbitItem[];
  onSelect?: (index: number) => void;
  className?: string;
}

/**
 * OrbitNav renders an immersive, smooth orbit of service nodes.
 * - Uses CSS 3D for nodes + OGL LightRays background for depth.
 * - Animates with requestAnimationFrame. Respects prefers-reduced-motion.
 */
const OrbitNav: React.FC<OrbitNavProps> = ({ items, onSelect, className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const angleRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const nodesRef = useRef<Array<HTMLButtonElement | null>>([]);
  const pausedRef = useRef<boolean>(false);
  const [hovered, setHovered] = useState<number>(-1);
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const prevTimeRef = useRef<number>(0);
  const velocityRef = useRef<number>(0); // wheel-driven angular velocity
  const centerXRef = useRef<number>(0);
  const centerYRef = useRef<number>(0);
  const radiusXRef = useRef<number>(0);
  const radiusYRef = useRef<number>(0);
  const targetAngleRef = useRef<number | null>(null);
  const snappingRef = useRef<boolean>(false);

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      centerXRef.current = w * 0.5;
      centerYRef.current = h * 0.5;
      radiusXRef.current = Math.min(w, 1200) * 0.42;
      radiusYRef.current = Math.min(h, 900) * 0.33;
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)');
    const set = () => setIsReducedMotion(q.matches);
    set();
    q.addEventListener?.('change', set);
    return () => q.removeEventListener?.('change', set);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const animate = (t: number) => {
      if (!prevTimeRef.current) prevTimeRef.current = t;
      const dt = Math.min(64, t - prevTimeRef.current); // clamp delta to avoid jumps
      prevTimeRef.current = t;

      if (!centerXRef.current || !centerYRef.current) {
        if (containerRef.current) {
          centerXRef.current = containerRef.current.clientWidth * 0.5;
          centerYRef.current = containerRef.current.clientHeight * 0.5;
        }
      }
      const centerX = centerXRef.current;
      const centerY = centerYRef.current; // true center
      const radiusX = radiusXRef.current || Math.min(centerX * 2, 1000) * 0.35; // reduced for less clutter
      const radiusY = radiusYRef.current || Math.min(centerY * 2, 700) * 0.28; // smaller ellipse
      const base = angleRef.current;

      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        const t = base + (i / Math.max(1, items.length)) * Math.PI * 2;
        const x = centerX + Math.cos(t) * radiusX;
        const y = centerY + Math.sin(t) * radiusY;
        // fake depth by y position on ellipse
        const depth = (Math.sin(t) + 1) / 2; // 0 back, 1 front
        const focusBoost = hovered === i ? 1.35 : 1; // bold zoom on hover
        const scale = (0.85 + depth * 0.35) * focusBoost;
        const opacity = 0.55 + depth * 0.45; // use opacity instead of filter for perf
        const z = Math.floor(100 + depth * 100);
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        node.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`;
        node.style.opacity = String(opacity);
        node.style.zIndex = String(z);
        node.setAttribute('data-depth', depth.toFixed(2));
      });

      // integrate velocity only (stationary by default)
      if (!isReducedMotion && !pausedRef.current) {
        angleRef.current += velocityRef.current;
        velocityRef.current *= 0.965; // gentle friction
        if (Math.abs(velocityRef.current) < 0.00001) velocityRef.current = 0;

        // if user stopped interacting, snap to nearest card to front
        if (velocityRef.current === 0 && !snappingRef.current) {
          const step = (Math.PI * 2) / Math.max(1, items.length);
          const front = Math.PI / 2; // front-most angle (max depth)
          const approx = Math.round((front - angleRef.current) / step);
          targetAngleRef.current = front - approx * step;
          snappingRef.current = true;
        }

        if (snappingRef.current && targetAngleRef.current != null) {
          const diff = targetAngleRef.current - angleRef.current;
          angleRef.current += diff * 0.08; // ease
          if (Math.abs(diff) < 0.0005) {
            angleRef.current = targetAngleRef.current;
            snappingRef.current = false;
            targetAngleRef.current = null;
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [items.length, isReducedMotion]);

  const handleWheel = (e: React.WheelEvent) => {
    // Disable vertical page scroll impacting the stage; no wheel-based rotation now
    e.preventDefault();
  };

  return (
    <div
      ref={containerRef}
      className={`orbit-nav ${className}`.trim()}
      onWheel={handleWheel}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') { velocityRef.current += 0.01; }
        if (e.key === 'ArrowLeft') { velocityRef.current -= 0.01; }
      }}
    >
      {/* Subtle OGL rays for depth */}
      <LightRays
        className="orbit-bg"
        raysOrigin="left"
        raysColor="#ffffff"
        raysSpeed={0.4}
        lightSpread={1.2}
        rayLength={1.4}
        pulsating={false}
        fadeDistance={1.2}
        saturation={0.45}
        followMouse={true}
        mouseInfluence={0.06}
        noiseAmount={0.04}
        distortion={0.02}
      />

      <div className="orbit-center">
        <div className="orbit-title">Services</div>
        <div className="orbit-sub">Explore our capabilities</div>
      </div>

      {/* Hover scroll zones */}
      <button
        className="orbit-scroll orbit-scroll-left"
        type="button"
        onMouseEnter={() => { velocityRef.current = -0.018; snappingRef.current = false; targetAngleRef.current = null; }}
        onMouseLeave={() => { velocityRef.current = 0; }}
        aria-label="Scroll left"
      >
        hover to scroll left
      </button>
      <button
        className="orbit-scroll orbit-scroll-right"
        type="button"
        onMouseEnter={() => { velocityRef.current = 0.018; snappingRef.current = false; targetAngleRef.current = null; }}
        onMouseLeave={() => { velocityRef.current = 0; }}
        aria-label="Scroll right"
      >
        hover to scroll right
      </button>

      {items.map((item, i) => (
        <button
          key={item.id ?? i}
          ref={(el) => (nodesRef.current[i] = el)}
          className={`orbit-node${hovered === i ? ' is-hovered' : ''}`}
          type="button"
          onMouseEnter={() => {
            setHovered(i);
            pausedRef.current = true;
            document.body.classList.add('orbit-focus');
            if (containerRef.current) containerRef.current.classList.add('orbit-hovering');
          }}
          onMouseLeave={() => {
            setHovered(-1);
            pausedRef.current = false;
            document.body.classList.remove('orbit-focus');
            if (containerRef.current) containerRef.current.classList.remove('orbit-hovering');
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePos({ x, y });
          }}
          onClick={() => {
            setOpenIndex(i);
            pausedRef.current = true;
            document.body.classList.add('orbit-focus', 'orbit-modal-open');
            onSelect?.(i);
          }}
        >
          <div 
            className="orbit-card"
            style={{
              '--mouse-x': `${mousePos.x}%`,
              '--mouse-y': `${mousePos.y}%`,
            } as React.CSSProperties}
          >
            <div className="orbit-inner">
              <span>Service</span>
              <span>{item.name}</span>
            </div>
            <span className="glow"></span>
          </div>
        </button>
      ))}

      {/* Full detail overlay on click */}
      {openIndex >= 0 && (
        <div className="orbit-detail-overlay" onClick={() => {
          setOpenIndex(-1);
          pausedRef.current = false;
          document.body.classList.remove('orbit-modal-open');
        }}>
          <div className="orbit-detail" onClick={(e) => e.stopPropagation()}>
            <button className="orbit-detail-close" onClick={() => {
              setOpenIndex(-1);
              pausedRef.current = false;
              document.body.classList.remove('orbit-modal-open');
            }} aria-label="Close">×</button>
            {items[openIndex]?.img && (
              <div className="orbit-detail-media">
                <img src={items[openIndex]?.img as string} alt={items[openIndex]?.name} />
              </div>
            )}
            <div className="orbit-detail-body">
              <h2 className="orbit-detail-title">{items[openIndex]?.name}</h2>
              {items[openIndex]?.description && (
                <p className="orbit-detail-desc">{items[openIndex]?.description}</p>
              )}
              <div className="orbit-detail-cta">
                <button className="cta-primary">Get a demo</button>
                <button className="cta-ghost">See platform</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrbitNav;


