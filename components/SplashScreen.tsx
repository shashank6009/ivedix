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
  console.log('🎭 SplashScreen: Rendering with isOpen:', isOpen, 'videoMorphing:', videoMorphing, 'prefersReducedMotion:', prefersReducedMotion);
  
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
        isClosing ? 'opacity-0' : 'opacity-100'
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
          willChange: videoMorphing ? 'transform, width, height, top, left' : 'auto',
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

                   {/* Simple overlay */}
             <div className={`absolute inset-0 z-10 bg-black/40 transition-opacity duration-1000 ${
               videoMorphing ? 'opacity-0' : 'opacity-100'
             }`}></div>
      
      

      {/* Main Content - Hidden during morphing */}
      <div className={`text-center space-y-12 relative z-30 transition-opacity duration-1000 ${
        videoMorphing ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Content removed for clean splash */}
      </div>

                   {/* Enhanced Morphing Logo - Appears after video morphs */}
             {showLogo && (
               <div className={`absolute top-2 left-10 z-50 transition-all duration-1000 ease-out ${
                 showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
               }`}>
                 <div className="relative">
                   <img
                     src={brandSrc}
                     alt="iVEDiX"
                     className="w-40 h-40 transition-all duration-1000 ease-out"
                     style={{
                       filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                     }}
                   />
                 </div>
               </div>
             )}

      

      
    </div>
  );
};
