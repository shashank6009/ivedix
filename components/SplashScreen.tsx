'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface SplashProps {
  isOpen: boolean;
  seconds: number;
  onSkip: () => void;
  brandSrc: string;
  className?: string;
}

export const SplashScreen: React.FC<SplashProps> = ({
  isOpen,
  seconds,
  onSkip,
  brandSrc,
  className = '',
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [videoMorphing, setVideoMorphing] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle the morphing transition sequence
  useEffect(() => {
    if (!isOpen) return;

    // Start morphing after countdown reaches 0
    if (seconds === 0 && !videoMorphing) {
      setVideoMorphing(true);
      
      // Show logo after video starts morphing
      setTimeout(() => {
        setShowLogo(true);
      }, 300);
      
      // Close splash after morphing completes
      setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          // This will trigger the parent to unmount
        }, 1000);
      }, 1200);
    }
  }, [isOpen, seconds, videoMorphing]);

  // Handle body overflow
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Debug: Always show for testing
  console.log('🎭 SplashScreen: Rendering with isOpen:', isOpen);
  
  if (!isOpen && !isClosing) {
    console.log('❌ SplashScreen: Not showing because isOpen is false');
    return null;
  }

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="splash-title"
      className={`splash-fullscreen flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isClosing ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        perspective: '1000px',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      {/* Video Background with Morphing Animation */}
      <div 
        className={`absolute video-morphing ${
          videoMorphing ? 'video-morphed' : 'video-fullscreen'
        }`}
        style={{
          transformOrigin: 'top left',
        }}
      >
        <video 
          className="w-full h-full object-contain bg-black" 
          autoPlay 
          loop 
          muted 
          playsInline
          onLoadedMetadata={(e) => {
            // Start video from middle timestamp
            const video = e.target as HTMLVideoElement;
            if (video.duration) {
              video.currentTime = video.duration / 2;
            }
          }}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 3D Overlay with Depth */}
      <div className={`absolute inset-0 z-10 bg-gradient-to-br from-black/60 via-black/40 to-transparent transition-opacity duration-1000 ${
        videoMorphing ? 'opacity-0' : 'opacity-100'
      }`}></div>
      
      {/* 3D Grid Effect */}
      <div className={`absolute inset-0 z-20 opacity-30 transition-opacity duration-1000 ${
        videoMorphing ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center bottom',
        }}></div>
      </div>

      {/* Main Content with 3D Effects */}
      <div className={`text-center space-y-12 relative z-30 transform-gpu transition-all duration-1000 ${
        videoMorphing ? 'opacity-0 scale-75 translate-y-8' : 'opacity-100 scale-100 translate-y-0'
      }`}>
        {/* Content removed for clean splash */}
      </div>

      {/* Morphing Logo - Appears after video morphs */}
      {showLogo && (
        <div className={`absolute top-2 left-10 z-50 transition-all duration-800 ease-out ${
          showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img
              src={brandSrc}
              alt="iVEDiX"
              className="w-40 h-40 transition-all duration-1000 ease-out drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(255,215,0,0.3))',
              }}
            />
          </div>
        </div>
      )}

      {/* Floating Particles */}
      {!prefersReducedMotion && !videoMorphing && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full opacity-60"
              style={{
                left: `${(i * 5.5) % 100}%`,
                top: `${(i * 7.3) % 100}%`,
                animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${(i % 3)}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* CSS Variables Fallback Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        /* Fallback for browsers without Tailwind */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};
