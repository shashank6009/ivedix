'use client';

import React, { useEffect, useRef, useState } from 'react';
import IndustryIcon from './IndustryIcon';

interface NeuralGridItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
  borderColor: string;
  gradient: string;
  onClick: () => void;
}

interface NeuralGridProps {
  items: NeuralGridItem[];
  onCardClick: (item: NeuralGridItem) => void;
}

export default function NeuralGrid({ items, onCardClick }: NeuralGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('mousemove', handleMouseMove);
      return () => gridElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={gridRef}
      className={`neural-grid ${isVisible ? 'visible' : ''}`}
    >
      {/* Neural Connection Lines */}
      <svg className="neural-connections" width="100%" height="100%">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
          </linearGradient>
        </defs>
        
        {/* Connection lines between related industries */}
        <path 
          d="M 20% 25% Q 50% 10% 80% 25%" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          className="connection-line"
        />
        <path 
          d="M 20% 50% Q 50% 35% 80% 50%" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          className="connection-line"
        />
        <path 
          d="M 20% 75% Q 50% 90% 80% 75%" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          className="connection-line"
        />
      </svg>

      {/* Grid Items */}
      <div className="neural-grid-container">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`neural-card neural-card-${index + 1}`}
            style={{
              '--border-color': item.borderColor,
              '--gradient': item.gradient,
              '--animation-delay': `${index * 0.1}s`
            } as React.CSSProperties}
            onMouseMove={handleCardMove}
            onClick={() => onCardClick(item)}
          >
            {/* Card Background with Morphing Effect */}
            <div className="neural-card-background"></div>
            
            {/* Magnetic Field Effect */}
            <div className="magnetic-field"></div>
            
            {/* Card Content */}
            <div className="neural-card-content">
              <div className="neural-card-image">
                <img 
                  src={typeof item.image === 'string' ? item.image : item.image?.src || item.image} 
                  alt={item.title}
                  loading="lazy"
                />
                <div className="image-overlay"></div>
                
                {/* Industry Icon Overlay */}
                <div className="industry-icon-overlay">
                  <IndustryIcon 
                    industry={item.title} 
                    className="industry-icon"
                  />
                </div>
              </div>
              
              <div className="neural-card-info">
                <h3 className="neural-card-title">{item.title}</h3>
                <p className="neural-card-subtitle">{item.subtitle}</p>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="neural-glow"></div>
            
            {/* Particle Effects */}
            <div className="neural-particles">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`particle particle-${i + 1}`}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
