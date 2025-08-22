'use client';

import React from 'react';

export default function Header() {
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
            <li><a href="#industries" className="nav-link">Industries</a></li>
            <li><a href="#product" className="nav-link">Product</a></li>
            <li><a href="#applications" className="nav-link">Applications</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#resources" className="nav-link">Resources</a></li>
          </ul>
        </nav>
        
        {/* CTA Button */}
        <button className="cta-button">
          <span>Ping Us!</span>
        </button>
      </div>
    </header>
  );
}
