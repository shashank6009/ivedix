'use client';

import React, { useEffect, useState } from 'react';
import { SplashScreen } from './SplashScreen';

export default function SplashWrapper() {
  const [isOpen, setIsOpen] = useState(true);
  const [seconds, setSeconds] = useState(1);
  
  console.log('🚀 SplashWrapper: Component mounted! isOpen:', isOpen);
  
  // Handle countdown and splash closing
  useEffect(() => {
    console.log('⏰ SplashWrapper: Starting countdown...');
    
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
    }, 3200); // 1s countdown + 1.2s video fade + 1s logo morphing

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(closeTimer);
    };
  }, []); // Remove isOpen dependency to run only once

  const handleSkip = () => {
    console.log('⏭️ SplashWrapper: Skip button clicked');
    setIsOpen(false);
  };

  console.log('🎬 SplashWrapper: Render - isOpen:', isOpen, 'seconds:', seconds);

  return (
    <SplashScreen
      isOpen={isOpen}
      seconds={seconds}
      onSkip={handleSkip}
      brandSrc="/assets/logo.png"
    />
  );
}
