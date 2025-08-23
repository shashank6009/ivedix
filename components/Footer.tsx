'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Footer Section - Contact & Socials */}
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-contact">
            {/* Logo */}
            <div className="footer-logo">
              <img 
                src="/assets/logo.png" 
                alt="iVEDIX Logo" 
                className="footer-logo-img"
              />
            </div>
            
            {/* Address */}
            <p className="footer-address">
              11 Schoen Place, Pittsford, NY 14534
            </p>
            
            {/* Social Media Icons */}
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.796-1.418-1.947-1.418-3.244s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                </svg>
              </a>
            </div>
            
            {/* Email */}
            <p className="footer-email">
              info@ivedix.com
            </p>
            
            {/* Copyright */}
            <p className="footer-copyright">
              Copyright © 2025 iVEDIX
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section - Categorized Links */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-links">
            {/* Column 1: Industries */}
            <div className="footer-column">
              <h4 className="footer-column-title">Industries</h4>
              <ul className="footer-link-list">
                <li><a href="#" className="footer-link">Manufacturing</a></li>
                <li><a href="#" className="footer-link">Supply Chain</a></li>
                <li><a href="#" className="footer-link">Warehouse & Logistics</a></li>
                <li><a href="#" className="footer-link">Government & Public Safety</a></li>
                <li><a href="#" className="footer-link">High Tech</a></li>
                <li><a href="#" className="footer-link">Retail</a></li>
                <li><a href="#" className="footer-link">Health Care</a></li>
                <li><a href="#" className="footer-link">Energy & Utilities</a></li>
                <li><a href="#" className="footer-link">Grocery Retail</a></li>
                <li><a href="#" className="footer-link">Facility Management</a></li>
              </ul>
            </div>

            {/* Column 2: Product */}
            <div className="footer-column">
              <h4 className="footer-column-title">Product</h4>
              <ul className="footer-link-list">
                <li><a href="#" className="footer-link">Solutions</a></li>
                <li><a href="#" className="footer-link">Components</a></li>
                <li><a href="#" className="footer-link">Capabilities</a></li>
                <li><a href="#" className="footer-link">How It Works</a></li>
              </ul>
            </div>

            {/* Column 3: Applications */}
            <div className="footer-column">
              <h4 className="footer-column-title">Applications</h4>
              <ul className="footer-link-list">
                <li><a href="#" className="footer-link">Armory</a></li>
                <li><a href="#" className="footer-link">Operational Efficiency</a></li>
                <li><a href="#" className="footer-link">Real Time Asset Tracking</a></li>
                <li><a href="#" className="footer-link">Personnel Flow</a></li>
                <li><a href="#" className="footer-link">Material Flow</a></li>
                <li><a href="#" className="footer-link">Compliance</a></li>
                <li><a href="#" className="footer-link">Preventative Maintenance</a></li>
                <li><a href="#" className="footer-link">Inventory Management</a></li>
                <li><a href="#" className="footer-link">Linen Management</a></li>
                <li><a href="#" className="footer-link">Security and Loss Prevention</a></li>
                <li><a href="#" className="footer-link">Tire Tracking</a></li>
              </ul>
            </div>

            {/* Column 4: Services */}
            <div className="footer-column">
              <h4 className="footer-column-title">Services</h4>
              <ul className="footer-link-list">
                <li><a href="#" className="footer-link">Industrial IOT Protocols</a></li>
                <li><a href="#" className="footer-link">Sensors and APIs</a></li>
                <li><a href="#" className="footer-link">Digitization</a></li>
                <li><a href="#" className="footer-link">Digital Twinning and 2D/3D Visualization</a></li>
                <li><a href="#" className="footer-link">Data Dimensionalization</a></li>
                <li><a href="#" className="footer-link">Custom Software Design and Configuration</a></li>
                <li><a href="#" className="footer-link">API Design and Development</a></li>
                <li><a href="#" className="footer-link">Advanced Analytics</a></li>
                <li><a href="#" className="footer-link">Data Visualization</a></li>
                <li><a href="#" className="footer-link">Augmented and Artificial Intelligence</a></li>
                <li><a href="#" className="footer-link">Site Surveys</a></li>
                <li><a href="#" className="footer-link">RFID and RTLS Solutioning</a></li>
                <li><a href="#" className="footer-link">Rapid Deployment</a></li>
                <li><a href="#" className="footer-link">Hosted and On Prem Models</a></li>
                <li><a href="#" className="footer-link">Ongoing Operational Support</a></li>
              </ul>
            </div>

            {/* Column 5: Resources */}
            <div className="footer-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-link-list">
                <li><a href="#" className="footer-link">Library</a></li>
                <li><a href="#" className="footer-link">Press</a></li>
                <li><a href="#" className="footer-link">Support</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">About</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="chat-button" aria-label="Chat with us">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      </button>
    </footer>
  );
}
