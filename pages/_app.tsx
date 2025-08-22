import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { SplashScreen } from '../components/SplashScreen';
import { useSplash } from '../hooks/useSplash';
import '../styles/splash.css';

export default function App({ Component, pageProps }: AppProps) {
  const [appReady, setAppReady] = useState(false);
  
  // Simulate app ready state (replace with your actual logic)
  useEffect(() => {
    // Example: Wait for critical data or hydration
    const timer = setTimeout(() => {
      setAppReady(true);
    }, 1000); // Adjust based on your needs

    return () => clearTimeout(timer);
  }, []);

  const { isOpen, seconds, skip } = useSplash({
    minDurationMs: 3000,
    forceEveryVisit: false, // Set to true for demos/reviews
    appReady,
  });

  return (
    <>
      {/* Splash Screen */}
      <SplashScreen
        isOpen={isOpen}
        seconds={seconds}
        onSkip={skip}
        brandSrc="/assets/logo.png" // Adjust path to your logo
      />
      
      {/* Main App Content */}
      <main id="main" tabIndex={-1}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
