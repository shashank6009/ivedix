'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ConnectedAssetsPage() {
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
    <div className="connected-assets-page">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="connected-hero-section">
        <div className="connected-hero-background">
          <div className="connected-hero-overlay"></div>
        </div>
        <div className="connected-hero-content">
          <h1 className="connected-hero-title">
            Connected Assets
          </h1>
          <p className="connected-hero-tagline">
            Transforming Data into Real-Time Decisions
          </p>
          <p className="connected-hero-description">
            Harness the power of IoT to connect, monitor, and optimize your assets in real-time
          </p>
          <button className="connected-hero-cta">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Process Cards Section */}
      <section ref={cardsRef} className="process-cards-section">
        <div className="process-cards-container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">Streamlined workflow for maximum efficiency</p>
          </div>
          
          <div className="process-cards-grid">
            <div className="process-card animate-on-scroll">
              <div className="process-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="process-card-number">1</div>
              <h3 className="process-card-title">Connect</h3>
              <p className="process-card-description">Installed readers</p>
            </div>

            <div className="process-card animate-on-scroll">
              <div className="process-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="process-card-number">2</div>
              <h3 className="process-card-title">Configure</h3>
              <p className="process-card-description">Rules and Alerts</p>
            </div>

            <div className="process-card animate-on-scroll">
              <div className="process-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="process-card-number">3</div>
              <h3 className="process-card-title">Capture</h3>
              <p className="process-card-description">Data</p>
            </div>

            <div className="process-card animate-on-scroll">
              <div className="process-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9L12 6L16 10L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 5V9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="process-card-number">4</div>
              <h3 className="process-card-title">Monitor</h3>
              <p className="process-card-description">Metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="content-section">
        <div className="content-container">
          <div className="content-grid">
            <div className="content-card animate-on-scroll">
              <h3 className="content-card-title">Transform Your Data Experience</h3>
              <p className="content-card-text">
                iVEDiX transforms the experience of collecting, aggregating, visualizing, and analyzing data from connected assets, sensors, and systems.
              </p>
            </div>

            <div className="content-card animate-on-scroll">
              <h3 className="content-card-title">Real-Time Data Processing</h3>
              <p className="content-card-text">
                Tags and Sensors produce billions of data points from location information to temperature and vibration readings constantly. Our software has the ability to read this data as soon as it's generated using any one of the multiple protocols that are part of the IoT industry-standard today (GPS, RFID, Bluetooth, LORA, etc). The iVEDiX platform can blend tag/sensor data with traditional streams of data (ERP, MES, DWH, etc.) on the fly, in real-time, to provide incredibly powerful insight on how your business is really operating vs perception.
              </p>
              <p className="content-card-text">
                The CORE part of the Platform has the ability to consume this data/information and tag it with rules, thresholds, workflows, and exceptions. Notification parameters can then be configured to transmit exceptions to the rules via text, email, app-badges, or reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoRef} className="video-section">
        <div className="video-container">
          <div className="video-content">
            <div className="video-text animate-on-scroll">
              <h3 className="video-title">Visualizing IoT Data in Real-Time</h3>
              <p className="video-description">
                Visualizing IoT data in real-time and in aggregation, then marrying that granular detail with your over-arching business goals. Tying your entire workflow together. Putting digital transformation into action, from the shop floor to the C-suite. That's the power of iVEDiX.
              </p>
            </div>
            
            <div className="video-player animate-on-scroll">
              <div className="video-placeholder">
                <div className="video-overlay">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                  </svg>
                </div>
                <div className="video-info">
                  <span className="video-duration">01:09</span>
                  <span className="video-label">Connected Assets Demo</span>
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
