'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

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
    <div className="product-page">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="product-hero-section">
        <div className="product-hero-background">
          <div className="product-hero-overlay"></div>
        </div>
        <div className="product-hero-content">
          <h1 className="product-hero-title">
            Product
          </h1>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <section ref={solutionsRef} className="solutions-section">
        <div className="solutions-container">
          <div className="solutions-grid">
            <Link href="/connected-assets" className="solution-card-link">
              <div className="solution-card animate-on-scroll">
                <div className="solution-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="solution-title">Connected Assets</h3>
                <p className="solution-subtitle">Connect. Capture. Analyze.</p>
              </div>
            </Link>

            <Link href="/augmented-intelligence" className="solution-card-link">
              <div className="solution-card animate-on-scroll">
                <div className="solution-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="solution-title">Augmented Intelligence</h3>
                <p className="solution-subtitle">Device to Dashboard</p>
              </div>
            </Link>

            <div className="solution-card animate-on-scroll">
              <div className="solution-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                  <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="solution-title">Sustainable Development</h3>
              <p className="solution-subtitle">UNAIDS - Champion Data Partner</p>
            </div>

            <div className="solution-card animate-on-scroll">
              <div className="solution-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                  <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" fill="currentColor"/>
                  <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="solution-title">Custom Solutions</h3>
              <p className="solution-subtitle">Unique Challenges. Bespoke Solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Glass SVG Section */}
      <section ref={platformRef} className="glass-svg-section">
        <div className="glass-svg-container">
          <div className="glass-svg-content">
            <h2 className="glass-svg-title">Platform Architecture</h2>
            <div className="glass-svg-wrapper">
              <img src="/assets/glass.svg" alt="Glass Platform Architecture" className="glass-svg-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="capabilities-section">
        <div className="capabilities-container">
          <div className="capabilities-intro">
            <p className="intro-text">
              From IoT to intelligent collaboration and sensor-driven smart facilities, technology has created a data ecosystem that is growing, changing, and moving at unprecedented speeds - a landscape of living data that shapes business today. Helping you harness it, understand it, and use it to define your future is the iVEDIX digital platform.
            </p>
            <p className="intro-text">
              Built at its core on a highly configurable IoT engine, the iVEDIX platform adds advanced analytics, powerful configuration tools and a brilliantly visual, human-centric interface to offer a highly curated and personalized experience. This is your living data at your fingertips.
            </p>
          </div>
          
          <div className="capabilities-table-section">
            <h2 className="capabilities-title">Capabilities</h2>
            <div className="capabilities-table">
              <div className="table-header">
                <div className="header-cell component">Components</div>
                <div className="header-cell">iVEDIX</div>
                <div className="header-cell">Other Tools</div>
                <div className="header-cell">Analytics Tools</div>
              </div>
              
              <div className="table-body">
                {/* GLASS Section */}
                <div className="table-row section-header">
                  <div className="component-cell">GLASS: Interactive visualization and analytics platform</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Native (iOS, Android, Windows 10) and Web2</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Auto-deploy across all platforms</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Supports basic and advanced visualization charts, grids, maps, and floor plans</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Supports native and custom animation / gestures</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Offline capabilities</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                {/* STUDIO Section */}
                <div className="table-row section-header">
                  <div className="component-cell">STUDIO: Configuration GUI</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Dynamic analytics configuration</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Metadata configuration module</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Augmented Security module</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Support for multi-dimensional and relational databases</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Cross-DB Joins</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Localization</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Client configuration</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                {/* CONSUME/SUPPLY Section */}
                <div className="table-row section-header">
                  <div className="component-cell">CONSUME: Inbound support for external APIs</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row section-header">
                  <div className="component-cell">SUPPLY: Outbound support for external APIs</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Asset tracking studio: Web-based interface for asset configuration</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                {/* CORE Section */}
                <div className="table-row section-header">
                  <div className="component-cell">CORE: Data gathering, processing, classification and aggregation engine</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">IoT engine</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">IoT asset configuration - data processing and configuration module</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Edge server - processes IoT data (e.g., RFID, sensors, GPS)</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Notifications engine - uses rules and profiles to send proactive notifications</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Alert engine - uses workflow and thresholds to send alerts</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Custom storage</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Rules engine</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Profile awareness</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Augmented intelligence module</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">Cloud / On-premise or hybrid deployments</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell supported">●</div>
                </div>
                
                {/* SECURITY Section */}
                <div className="table-row section-header">
                  <div className="component-cell">SECURITY: Multi-tiered</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">1. Tiered data-level Security</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">2. Report-level security</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">3. Profile (role-based) authentication</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">4. Application-level security</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">5. Device authentication - C2C</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">6. User-device pairing</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">7. Encrypted communication - SSL 1024</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
                </div>
                
                <div className="table-row">
                  <div className="component-cell">8. Zero footprint</div>
                  <div className="support-cell supported">●</div>
                  <div className="support-cell not-supported">○</div>
                  <div className="support-cell not-supported">○</div>
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
