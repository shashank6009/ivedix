'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    console.log('Toggling dropdown:', dropdownName, 'Current:', activeDropdown);
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.nav-item')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo-container">
          <img 
            src="/assets/logo.png" 
            alt="iVedix Logo" 
            className="logo"
          />
        </div>
        
        {/* Navigation */}
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                onClick={() => toggleDropdown('industries')} 
                className="nav-link nav-button"
              >
                Industries
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'industries' ? 'active' : ''}`}>
                <div className="dropdown-content">
                  <div className="dropdown-grid">
                    <div className="dropdown-item">
                      <h4>Manufacturing</h4>
                      <p>Track materials, parts and inventory.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Supply Chain</h4>
                      <p>Real time visibility to the entire supply chain.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Warehouse & Logistics</h4>
                      <p>Instant visibility of assets and movement within your warehouse and beyond.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Government & Public Safety</h4>
                      <p>Integrated biometric, asset and fleet tracking solutions for government and civil entities.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>High Tech</h4>
                      <p>Complete traceability of components, materials, hardware and certification.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Retail</h4>
                      <p>Automated inventory tracking and real-time multi-channel fulfillment.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Health Care</h4>
                      <p>Delivering real-time reporting and location services to clinicians, patients and devices.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Energy & Utilities</h4>
                      <p>Integrated track and trace of tools, equipment, personnel and process life cycles.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Grocery Retail</h4>
                      <p>Inventory life cycle & excursion monitoring with sensors, notifications and compliance reporting.</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Facility Management</h4>
                      <p>Optimize equipment, fleet, people and process flow within a facility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => toggleDropdown('product')} 
                className="nav-link nav-button"
              >
                Product
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'product' ? 'active' : ''}`}>
                <div className="dropdown-content">
                  <div className="dropdown-grid">
                    <div className="dropdown-item">
                      <h4>Solutions</h4>
                      <p>Comprehensive RFID and RTLS solutions</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Components</h4>
                      <p>Hardware and software components</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Capabilities</h4>
                      <p>Real-time tracking and analytics</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>How It Works</h4>
                      <p>Understanding our technology platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => toggleDropdown('applications')} 
                className="nav-link nav-button"
              >
                Applications
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'applications' ? 'active' : ''}`}>
                <div className="dropdown-content">
                  <div className="dropdown-grid">
                    <div className="dropdown-item">
                      <h4>Inventory Management</h4>
                      <p>Real-time asset tracking and visibility</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Material Flow</h4>
                      <p>Optimize material movement and processes</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Personnel Flow</h4>
                      <p>Track and manage workforce efficiency</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Operational Efficiency</h4>
                      <p>Improve operational performance metrics</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Real Time Asset Tracking</h4>
                      <p>Live location and status monitoring</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Armory</h4>
                      <p>Secure asset and equipment management</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Security & Loss Prevention</h4>
                      <p>Protect valuable assets and inventory</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Preventative Maintenance</h4>
                      <p>Proactive equipment maintenance scheduling</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Compliance</h4>
                      <p>Regulatory compliance and reporting</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Linen Management</h4>
                      <p>Track and manage textile assets</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Tire Tracking</h4>
                      <p>Monitor tire usage and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => {}} 
                className="nav-link nav-button"
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => toggleDropdown('resources')} 
                className="nav-link nav-button"
              >
                Resources
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'resources' ? 'active' : ''}`}>
                <div className="dropdown-content">
                  <div className="dropdown-grid">
                    <div className="dropdown-item">
                      <h4>Library</h4>
                      <p>Documentation and technical resources</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Press</h4>
                      <p>Latest news and press releases</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Careers</h4>
                      <p>Join our growing team</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>Contact</h4>
                      <p>Get in touch with our experts</p>
                    </div>
                    <div className="dropdown-item">
                      <h4>About</h4>
                      <p>Learn more about iVEDiX</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        
        {/* Debug Info */}
        <div style={{color: 'white', fontSize: '12px', marginRight: '20px'}}>
          Active: {activeDropdown || 'none'}
        </div>
        
        {/* Social Media Buttons */}
        <div className="social-buttons">
          <a 
            href="https://www.instagram.com/ivedix?igsh=MXBmNGVvNXdnenlvaQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button instagram"
            aria-label="Follow us on Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://m.facebook.com/ivedix/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button facebook"
            aria-label="Follow us on Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/company/ivedix" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button linkedin"
            aria-label="Follow us on LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
