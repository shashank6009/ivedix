'use client';

import React, { useEffect, useState } from 'react';
import { SplashScreen } from './SplashScreen';

export default function SplashWrapper() {
  const [isOpen, setIsOpen] = useState(false); // Start closed by default
  const [seconds, setSeconds] = useState(1);
  
  console.log('🚀 SplashWrapper: Component mounted! isOpen:', isOpen);
  
  // Check if user has seen splash screen before
  useEffect(() => {
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    
    if (!hasSeenSplash) {
      console.log('👋 SplashWrapper: First time visitor, showing splash screen');
      setIsOpen(true);
      
      // Handle countdown and splash closing
      const countdownInterval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Close splash after full animation sequence completes
      const closeTimer = setTimeout(() => {
        console.log('✅ SplashWrapper: Closing splash screen');
        setIsOpen(false);
        // Mark that user has seen the splash screen
        localStorage.setItem('hasSeenSplash', 'true');
      }, 3200); // 1s countdown + 1.2s video fade + 1s logo morphing

      return () => {
        clearInterval(countdownInterval);
        clearTimeout(closeTimer);
      };
    } else {
      console.log('🔄 SplashWrapper: Returning visitor, skipping splash screen');
    }
  }, []); // Run only once on mount

  const handleSkip = () => {
    console.log('⏭️ SplashWrapper: Skip button clicked');
    setIsOpen(false);
    // Mark that user has seen the splash screen even if they skip
    localStorage.setItem('hasSeenSplash', 'true');
  };

  console.log('🎬 SplashWrapper: Render - isOpen:', isOpen, 'seconds:', seconds);

  // Don't render anything if splash is not open
  if (!isOpen) {
    return null;
  }

  return (
    <SplashScreen
      isOpen={isOpen}
      seconds={seconds}
      onSkip={handleSkip}
      brandSrc="/assets/logo.png"
    />
  );
}
