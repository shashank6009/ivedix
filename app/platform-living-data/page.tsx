'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PlatformLivingDataPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="platform-living-data-page">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="platform-hero-section">
        <div className="platform-hero-background">
          <div className="platform-hero-overlay"></div>
        </div>
        <div className="platform-hero-content">
          <h1 className="platform-hero-title">
            The Platform Built for Living Data
          </h1>
          <p className="platform-hero-tagline">
            Analyzing, configuring, and curating the living data that drives your business
          </p>
          <p className="platform-hero-description">
            From IoT to intelligent collaboration and sensor-driven smart facilities, technology has created a data ecosystem that is growing, changing, and moving at unprecedented speeds - a landscape of living data that shapes business today.
          </p>
          <button className="platform-hero-cta">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Platform Layers Cards Section */}
      <section ref={cardsRef} className="platform-layers-section">
        <div className="platform-layers-container">
          <div className="section-header">
            <h2 className="section-title">Platform Architecture</h2>
            <p className="section-subtitle">Three powerful layers working in harmony</p>
          </div>
          
          <div className="platform-layers-grid">
            <div className="platform-layer-card animate-on-scroll">
              <div className="platform-layer-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="platform-layer-number">1</div>
              <h3 className="platform-layer-title">Glass</h3>
              <p className="platform-layer-subtitle">Visualization</p>
              <p className="platform-layer-description">
                A unique visualization platform centered around human-centric design, Glass feels like the devices you love and use every day while supporting the heavy lifting that enterprise-level data demands.
              </p>
              <div className="platform-layer-features">
                <span className="platform-feature">Magnifying Glass</span>
                <span className="platform-feature">Eye</span>
                <span className="platform-feature">Shield</span>
                <span className="platform-feature">Graph</span>
              </div>
            </div>

            <div className="platform-layer-card animate-on-scroll">
              <div className="platform-layer-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="platform-layer-number">2</div>
              <h3 className="platform-layer-title">Studio</h3>
              <p className="platform-layer-subtitle">Configuration</p>
              <p className="platform-layer-description">
                The graphical user interface (GUI) that sits on top of the Core. Studio powers rapid configuration of everything from user groups and assets to security, metadata and even custom themes.
              </p>
              <div className="platform-layer-features">
                <span className="platform-feature">Windows</span>
                <span className="platform-feature">Profiles</span>
                <span className="platform-feature">Security</span>
                <span className="platform-feature">Location</span>
              </div>
            </div>

            <div className="platform-layer-card animate-on-scroll">
              <div className="platform-layer-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="platform-layer-number">3</div>
              <h3 className="platform-layer-title">Core</h3>
              <p className="platform-layer-subtitle">Core Engine Modules</p>
              <p className="platform-layer-description">
                As modular as it is flexible, the Core engine tightly integrates customizable asset tracking solutions with advanced analytics designed for the next wave of mobile and connected devices.
              </p>
              <div className="platform-layer-features">
                <span className="platform-feature">API</span>
                <span className="platform-feature">Browser</span>
                <span className="platform-feature">Mobile</span>
                <span className="platform-feature">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="platform-content-section">
        <div className="platform-content-container">
          <div className="platform-content-grid">
            <div className="platform-content-card animate-on-scroll">
              <h3 className="platform-content-card-title">Living Data Ecosystem</h3>
              <p className="platform-content-card-text">
                From IoT to intelligent collaboration and sensor-driven smart facilities, technology has created a data ecosystem that is growing, changing, and moving at unprecedented speeds - a landscape of living data that shapes business today. Helping you harness it, understand it, and use it to define your future is the iVEDiX digital platform.
              </p>
            </div>

            <div className="platform-content-card animate-on-scroll">
              <h3 className="platform-content-card-title">Highly Configurable IoT Engine</h3>
              <p className="platform-content-card-text">
                Built at its core on a highly configurable IoT engine, the iVEDiX platform adds advanced analytics, powerful configuration tools and a brilliantly visual, human-centric interface to offer a highly curated and personalized experience. This is your living data at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoRef} className="platform-video-section">
        <div className="platform-video-container">
          <div className="platform-video-content">
            <div className="platform-video-text animate-on-scroll">
              <h3 className="platform-video-title">Experience the Living Data Platform</h3>
              <p className="platform-video-description">
                See how our three-layer architecture - Glass, Studio, and Core - works together to transform your data into actionable insights that drive real-time decision making across your organization.
              </p>
            </div>
            
            <div className="platform-video-player animate-on-scroll">
              <div className="platform-video-placeholder">
                <div className="platform-video-overlay">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                  </svg>
                </div>
                <div className="platform-video-info">
                  <span className="platform-video-duration">03:45</span>
                  <span className="platform-video-label">Platform Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
