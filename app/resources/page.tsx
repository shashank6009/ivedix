'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import industrybg from '../../assets/industrybg.png';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      <Header />

      {/* Hero */}
      <section className="resources-hero-section">
        <div
          className="resources-hero-background"
          style={{
            background: `url(${industrybg.src}) center center/cover no-repeat`,
          }}
        >
          <div className="resources-hero-overlay" />
        </div>
        <div className="resources-hero-content">
          <h1 className="resources-hero-title">
            Big ideas. Bigger impact.
          </h1>
          <p className="resources-hero-subtitle">
            We’re not just tracking trends — we’re shaping them. Explore insights, stories, and announcements that cut through noise and move the industry forward.
          </p>
        </div>
      </section>

      {/* Resource Icons */}
      <section className="resources-icons-section">
        <div className="resources-icons-container">
          <Link href="/library" className="resource-card">
            <div className="resource-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <path d="M4 3h8a3 3 0 013 3v15H7a3 3 0 01-3-3V3z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 3h8a3 3 0 013 3v15h-8V6a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="resource-title">Library</h3>
            <p className="resource-desc">Guides, deep-dives, and ideas worth saving.</p>
          </Link>

          <Link href="/press" className="resource-card">
            <div className="resource-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="2"/>
                <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2"/>
                <line x1="7" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="resource-title">Press</h3>
            <p className="resource-desc">News, announcements, and media resources.</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}


