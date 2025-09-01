'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left side - Image */}
        <div className="about-image">
          <div className="about-img-placeholder">
            <Image
              src="/assets/building.png"
              alt="Office Building View"
              width={500}
              height={400}
              className="about-building-image"
              priority
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="about-content">
          <h2 className="about-title">Who We Are</h2>
          <p className="about-description">
            At iVEDiX, we bring together innovation, technology, and data to transform the way organizations track, manage, and optimize their assets. With expertise in RFID, RTLS, and IoT solutions, we empower businesses across industries to gain real-time visibility, improve efficiency, and make smarter decisions. Our mission is simple—deliver insights that drive action and create measurable impact.
          </p>
          <button className="about-cta-button">
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
}
