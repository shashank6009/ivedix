'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Prevent scrolling during video playback
    document.body.style.overflow = 'hidden';
    document.body.classList.add('video-playing');

    const handleVideoEnd = () => {
      setVideoEnded(true);
      
      // Keep scrolling disabled
      document.body.style.overflow = 'hidden';
      
      // Smooth scroll to hero section
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        setTimeout(() => {
          heroSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 500); // Small delay for better UX
      }
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      document.body.style.overflow = 'auto';
      document.body.classList.remove('video-playing');
    };
  }, []);

  return (
    <section className={`hero-section ${videoEnded ? 'video-ended' : ''}`}>
      {/* Background Video */}
      <video 
        ref={videoRef}
        className="hero-video" 
        autoPlay 
        muted 
        playsInline
        loop
      >
        <source src="/assets/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient Overlay - gradual black fade */}
      <div className="hero-gradient-overlay"></div>
      
      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Your Dedicated Partner<br />
          In Business Transformation
        </h1>
        <p className="hero-description">
          Guiding You Towards Unprecedented Success with Proven Strategies
        </p>
      </div>
    </section>
  );
}
