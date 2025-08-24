'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AugmentedIntelligencePage() {
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
    <div className="augmented-intelligence-page">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="augmented-hero-section">
        <div className="augmented-hero-background">
          <div className="augmented-hero-overlay"></div>
        </div>
        <div className="augmented-hero-content">
          <h1 className="augmented-hero-title">
            Augmented Intelligence
          </h1>
          <p className="augmented-hero-tagline">
            and the future of interactive data visualization
          </p>
          <p className="augmented-hero-description">
            Dashboards need to be alive, like us. They need to scream out the action when it's needed. They need to represent what might happen more prominently than what happened.
          </p>
          <button className="augmented-hero-cta">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Core Concepts Cards Section */}
      <section ref={cardsRef} className="augmented-cards-section">
        <div className="augmented-cards-container">
          <div className="section-header">
            <h2 className="section-title">Core Concepts</h2>
            <p className="section-subtitle">Intelligent data visualization that adapts to your needs</p>
          </div>
          
          <div className="augmented-cards-grid">
            <div className="augmented-card animate-on-scroll">
              <div className="augmented-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="augmented-card-title">Intuitive Interaction</h3>
              <p className="augmented-card-description">
                They need to answer questions when you interact with them intuitively. And yes, the information you need to act on needs to come to you instead of you having to look for it.
              </p>
            </div>

            <div className="augmented-card animate-on-scroll">
              <div className="augmented-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="augmented-card-title">Predictive Insights</h3>
              <p className="augmented-card-description">
                They need to represent what might happen more prominently than what happened. Our systems predict future trends and potential issues proactively.
              </p>
            </div>

            <div className="augmented-card animate-on-scroll">
              <div className="augmented-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="augmented-card-title">Actionable Intelligence</h3>
              <p className="augmented-card-description">
                They need to scream out the action when it's needed. Information is delivered directly to you, precisely when and where you need it.
              </p>
            </div>

            <div className="augmented-card animate-on-scroll">
              <div className="augmented-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9L12 6L16 10L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 5V9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="augmented-card-title">Mobile-First Design</h3>
              <p className="augmented-card-description">
                In today's world, it's not a matter of representation of mobile representation, it is the essence. Seamless access on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="augmented-content-section">
        <div className="augmented-content-container">
          <div className="augmented-content-grid">
            <div className="augmented-content-card animate-on-scroll">
              <h3 className="augmented-content-card-title">The iVEDiX Living Data Platform</h3>
              <p className="augmented-content-card-text">
                iVEDiX is the pioneer of mobile data visualization. The iVEDiX Living Data Platform isn't a data dump into a dashboard. The platform hooks into live streaming data from connected assets, sensors, and systems.
              </p>
            </div>

            <div className="augmented-content-card animate-on-scroll">
              <h3 className="augmented-content-card-title">Intelligent Data Processing</h3>
              <p className="augmented-content-card-text">
                It can listen and learn, notate and notify, visualize, analyze, aggregate, and interact. Our augmented intelligence transforms raw data into meaningful insights that drive real-time decision making.
              </p>
              <p className="augmented-content-card-text">
                The platform understands context, learns from user interactions, and adapts to provide the most relevant information at the right time, ensuring you never miss critical opportunities or threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoRef} className="augmented-video-section">
        <div className="augmented-video-container">
          <div className="augmented-video-content">
            <div className="augmented-video-text animate-on-scroll">
              <h3 className="augmented-video-title">See Augmented Intelligence in Action</h3>
              <p className="augmented-video-description">
                Experience how our living data platform transforms complex information into intuitive, actionable insights that adapt to your workflow and decision-making process.
              </p>
            </div>
            
            <div className="augmented-video-player animate-on-scroll">
              <div className="augmented-video-placeholder">
                <div className="augmented-video-overlay">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                  </svg>
                </div>
                <div className="augmented-video-info">
                  <span className="augmented-video-duration">02:15</span>
                  <span className="augmented-video-label">Augmented Intelligence Demo</span>
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
