'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle page transitions
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) : 0;
      setScrollProgress(progress);
      
      // Update CSS variable for parallax effects
      document.documentElement.style.setProperty('--scroll-y', `${scrolled}px`);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Handle scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-scale, .reveal-slide-left, .reveal-slide-right');
    
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

    return () => {
      revealElements.forEach(element => {
        revealObserver.unobserve(element);
      });
    };
  }, [pathname]);

  // Handle magnetic hover effect
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.magnetic-hover');
    
    const handleMouseMove = (e: MouseEvent) => {
      const element = e.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const element = e.currentTarget as HTMLElement;
      element.style.transform = 'translate(0, 0)';
    };

    magneticElements.forEach(element => {
      element.addEventListener('mousemove', handleMouseMove as EventListener);
      element.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      magneticElements.forEach(element => {
        element.removeEventListener('mousemove', handleMouseMove as EventListener);
        element.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      
      {/* Page Content with Transition */}
      <div className={`page-content ${isTransitioning ? 'page-transition-enter' : 'page-transition-enter-active'}`}>
        {children}
      </div>
    </>
  );
}
