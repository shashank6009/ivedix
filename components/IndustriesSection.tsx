'use client';

import React from 'react';

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      {/* Section Title */}
      <div className="section-header">
        <h2 className="section-title">WHAT WE DO</h2>
      </div>
      
      <div className="zigzag-container">
        {/* Card 1 - Augmented Intelligence */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Card 2 - Connected Assets */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Card 3 - Platform Built for Living Data */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
