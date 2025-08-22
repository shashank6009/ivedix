import { useEffect, useState, useCallback, useRef } from 'react';

export interface UseSplashArgs {
  minDurationMs?: number;
  forceEveryVisit?: boolean;
  appReady: boolean;
}

export interface UseSplashReturn {
  isOpen: boolean;
  seconds: number;
  skip: () => void;
}

const SESSION_STORAGE_KEY = 'ivedix_splash_shown';

export const useSplash = ({
  minDurationMs = 3000,
  forceEveryVisit = false,
  appReady,
}: UseSplashArgs): UseSplashReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const [startTime, setStartTime] = useState<number | null>(null);
  
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const minDurationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize splash - this runs once when the hook mounts
  useEffect(() => {
    console.log('🚀 useSplash: Hook mounted with forceEveryVisit:', forceEveryVisit);
    
    // Always show if forceEveryVisit is true
    if (forceEveryVisit) {
      console.log('✅ useSplash: Opening splash screen (forceEveryVisit)');
      setIsOpen(true);
      setStartTime(performance.now());
      setSeconds(3);
      return;
    }
    
    // Check session storage for regular visits
    try {
      const hasShown = sessionStorage.getItem(SESSION_STORAGE_KEY);
      console.log('🔍 useSplash: sessionStorage value:', hasShown);
      
      if (!hasShown) {
        console.log('✅ useSplash: Opening splash screen (first visit)');
        setIsOpen(true);
        setStartTime(performance.now());
        setSeconds(3);
      } else {
        console.log('❌ useSplash: Not opening splash screen (already shown)');
      }
    } catch (error) {
      console.log('⚠️ useSplash: sessionStorage error, showing splash:', error);
      setIsOpen(true);
      setStartTime(performance.now());
      setSeconds(3);
    }
  }, [forceEveryVisit]); // Only depend on forceEveryVisit

  // Handle countdown
  useEffect(() => {
    if (!isOpen || !startTime) return;

    console.log('⏰ useSplash: Starting countdown...');

    // Start countdown
    countdownIntervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup function
    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
    };
  }, [isOpen, startTime]);

  // Handle closing when app is ready and minimum time has passed
  useEffect(() => {
    if (!isOpen || !startTime || !appReady) return;

    const elapsed = performance.now() - startTime;
    console.log('⏱️ useSplash: App ready, elapsed time:', elapsed, 'ms');

    if (elapsed >= minDurationMs) {
      console.log('✅ useSplash: Closing splash screen (conditions met)');
      closeSplash();
    } else {
      // Wait for the remaining time
      const remainingTime = minDurationMs - elapsed;
      console.log('⏳ useSplash: Waiting', remainingTime, 'ms more...');
      
      minDurationTimeoutRef.current = setTimeout(() => {
        console.log('✅ useSplash: Closing splash screen (timer finished)');
        closeSplash();
      }, remainingTime);
    }

    // Cleanup function
    return () => {
      if (minDurationTimeoutRef.current) {
        clearTimeout(minDurationTimeoutRef.current);
        minDurationTimeoutRef.current = null;
      }
    };
  }, [isOpen, startTime, appReady, minDurationMs]);

  // Close splash screen
  const closeSplash = useCallback(() => {
    console.log('🔒 useSplash: Closing splash screen');
    setIsOpen(false);
    
    // Mark as shown in session storage
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, '1');
    } catch {
      // Silently fail if sessionStorage is not available
    }
    
    // Clear all timers
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
    if (minDurationTimeoutRef.current) {
      clearTimeout(minDurationTimeoutRef.current);
      minDurationTimeoutRef.current = null;
    }
  }, []);

  // Skip splash immediately
  const skip = useCallback(() => {
    console.log('⏭️ useSplash: Skip button clicked');
    closeSplash();
  }, [closeSplash]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      if (minDurationTimeoutRef.current) {
        clearTimeout(minDurationTimeoutRef.current);
      }
    };
  }, []);

  console.log('🔄 useSplash: Render - isOpen:', isOpen, 'seconds:', seconds, 'appReady:', appReady);

  return {
    isOpen,
    seconds,
    skip,
  };
};
