'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span>iVEDiX</span>
        </h1>
        <p className="hero-description">
          Your innovative solutions partner for asset tracking, inventory management, and cutting-edge technology solutions
        </p>
        <div className="hero-buttons">
          <button className="hero-button-primary">
            Explore Solutions
          </button>
          <button className="hero-button-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
