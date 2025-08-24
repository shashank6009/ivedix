'use client';

import React from 'react';
import Link from 'next/link';

export default function IndustriesSection() {
  return (
    <>
      <section className="industries-section">
      {/* Section Title */}
      <div className="section-header">
        <h2 className="section-title">WHAT WE DO</h2>
      </div>
      
      <div className="zigzag-container">
        {/* Card 1 - Augmented Intelligence */}
        <Link href="/augmented-intelligence" className="zigzag-card-link">
          <div className="zigzag-card card-1">
            <div className="zigzag-image">
              <img 
                className="card-img" 
                src="/assets/augumented.png" 
                alt="Augmented Intelligence"
              />
            </div>
            <div className="zigzag-content">
              <h3 className="zigzag-title">AUGMENTED INTELLIGENCE</h3>
              <p className="zigzag-description">
                Dashboards need to be alive, like us. They need to scream out the action when it's needed. They need to represent what might happen more prominently than what happened. They need to answer questions when you interact with them intuitively. And yes, the information you need to act on needs to come to you instead of you having to look for it. In today's world, it's not a matter of representation of mobile representation, it is the essence.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 2 - Connected Assets */}
        <Link href="/connected-assets" className="zigzag-card-link">
          <div className="zigzag-card card-2">
            <div className="zigzag-image">
              <img 
                className="card-img" 
                src="/assets/connected.png" 
                alt="Connected Assets"
              />
            </div>
            <div className="zigzag-content">
              <h3 className="zigzag-title">CONNECTED ASSETS</h3>
              <p className="zigzag-description">
                iVEDiX transforms the experience of collecting, aggregating, visualizing, and analyzing data from connected assets, sensors, and systems. Tags and Sensors produce billions of data points from location information to temperature and vibration readings constantly. Our software has the ability to read this data as soon as it's generated using any one of the multiple protocols that are part of the IoT industry-standard today (GPS, RFID, Bluetooth, LORA, etc). The iVEDiX platform can blend tag/sensor data with traditional streams of data (ERP, MES, DWH, etc.) on the fly, in real-time, to provide incredibly powerful insight on how your business is really operating vs perception.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 3 - Platform Built for Living Data */}
        <Link href="/platform-living-data" className="zigzag-card-link">
          <div className="zigzag-card card-3">
            <div className="zigzag-image">
              <img 
                className="card-img" 
                src="/assets/platform.png" 
                alt="Platform Built for Living Data"
              />
            </div>
            <div className="zigzag-content">
              <h3 className="zigzag-title">THE PLATFORM BUILT FOR LIVING DATA</h3>
              <p className="zigzag-description">
                From IoT to intelligent collaboration and sensor-driven smart facilities, technology has created a data ecosystem that is growing, changing, and moving at unprecedented speeds - a landscape of living data that shapes business today. Helping you harness it, understand it, and use it to define your future is the iVEDiX digital platform. Built at its core on a highly configurable IoT engine, the iVEDiX platform adds advanced analytics, powerful configuration tools and a brilliantly visual, human-centric interface to offer a highly curated and personalized experience. This is your living data at your fingertips.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>

    {/* Why iVEDiX Section */}
    <section className="why-ivedix-section">
      <div className="why-ivedix-container">
        <div className="why-ivedix-header">
          <h2 className="why-ivedix-title">Why iVEDiX</h2>
          <p className="why-ivedix-intro">
            We built iVEDIX GLASS on a hunch that we can bring our sensitivity to data on the EDGE and our mastery of living data to transform human asset interaction.
          </p>
        </div>
        
        <div className="why-ivedix-cards">
          <div className="why-ivedix-card">
            <div className="quote-icon quote-top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="why-ivedix-card-content">
              <h3 className="why-ivedix-card-title">
                iVEDiX is an innovator in this space.
              </h3>
              <p className="why-ivedix-card-text">
                iVEDIX offers a Digital Platform that features a workbench-like experience, a flexible data structure and inclusion of new knowledge, information and data related to the actual workflow being managed
              </p>
              
                              <div className="why-ivedix-source">
                  <div className="source-logo aragon">
                    <div className="logo-placeholder">
                      <div className="logo-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="play-overlay">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                            <polygon points="8,5 16,12 8,19" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                      <div className="logo-text">
                        <span className="logo-primary">Aragon</span>
                        <span className="logo-secondary">Research</span>
                      </div>
                    </div>
                  </div>
                  <span className="source-text">Aragon Research</span>
                </div>
            </div>
            
            <div className="quote-icon quote-bottom">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <div className="why-ivedix-card">
            <div className="quote-icon quote-top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="why-ivedix-card-content">
              <h3 className="why-ivedix-card-title">
                iVEDiX had built today's modern Digital Innovation Studio.
              </h3>
              <p className="why-ivedix-card-text">
                iVEDIX is allowing enterprises to reimagine the user experience, reimagine IT, and reimagine their workflows in today's digital age
              </p>
              
                              <div className="why-ivedix-source">
                  <div className="source-logo gartner">
                    <div className="logo-placeholder">
                      <div className="logo-text gartner-text">
                        <span className="logo-primary">Gartner</span>
                      </div>
                    </div>
                  </div>
                  <span className="source-text">Gartner</span>
                </div>
            </div>
            
            <div className="quote-icon quote-bottom">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
             </div>
     </section>
     </>
   );
 }
