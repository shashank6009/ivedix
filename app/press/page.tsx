'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import industrybg from '../../assets/industrybg.png';

interface PressItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

const itemsTop: PressItem[] = [
  { id: 1, title: 'iVEDiX Inc. Extends Alliance with insightsoftware to... ', excerpt: 'Information technology and services provider, iVEDiX, has been selected by insightsoftware to provide subject...', image: '/assets/press/press01.png' },
  { id: 2, title: 'Machfu and iVEDiX Partner to Offer Asset to Alert Capabilities...', excerpt: 'Asset to Alert Capabilities on a Single Platform for Industrial Enterprises Connecting devices to dashboards...', image: '/assets/press/press02.png' },
  { id: 3, title: 'Aragon Reveals the Aragon Research Globe™ for Digital...', excerpt: 'PALO ALTO, Calif., March 12, 2020 (PRNewswire/PRWeb) — Aragon Research identifies sixteen major...', image: '/assets/press/press03.png' },
];

const itemsMid: PressItem[] = [
  { id: 4, title: 'Variance Is The Challenge', excerpt: 'With RFID, Merck is aiming for 100 percent control of special containers for Performance Materials. By RFID ...', image: '/assets/press/press04.png' },
  { id: 5, title: 'UNAIDS, iVEDiX & Google Maps team up to fight HIV in...', excerpt: 'In 2015, the Joint United Nations Programme on HIV/AIDS (UNAIDS) and mobile analytics solutions...', image: '/assets/press/press05.png' },
  { id: 6, title: 'Consortium of Int’l banks, Papersoft & iVEDiX in a...', excerpt: 'Groundbreaking partnership to forge a Blockchain powerhouse, fund and empower millions of entrepreneurs...', image: '/assets/press/press06.png' },
];

const itemsBottom: PressItem[] = [
  { id: 7, title: 'iVEDiX Awarded GSA Certification; Provides...', excerpt: 'iVEDiX has been awarded GSA approved certification, allowing the company to sell to the United States...', image: '/assets/press/press07.png' },
  { id: 8, title: 'iVEDiX Partners with Omni-ID Combining Industrial Internet ...', excerpt: 'The combination of the two technologies improves present-sense visibility, safety, and efficiency for...', image: '/assets/press/press08.png' },
  { id: 9, title: 'Unlocking the Value of Healthcare Information', excerpt: 'Today, more than 85% of physicians use EMRs but many are unhappy and frustrated in their daily interaction...', image: '/assets/press/press09.png' },
  { id: 10, title: 'End HIV by 2030: Tackling an epidemic with data...', excerpt: 'The HIV/AIDS epidemic plays a significant role in the lives of all people in Kenya. Most people know...', image: '/assets/press/press10.png' },
  { id: 11, title: 'Pittsford firm’s product selected for United Nations...', excerpt: 'Pittsford-based iVEDiX makes solutions that integrate existing data infrastructure...', image: '/assets/press/press11.png' },
  { id: 12, title: 'United Nations Chooses iVEDiX to Help End HIV/AID...', excerpt: 'mVIEDiX Solution Allows for Collaboration to Offer Better Programs and Informed Decision...', image: '/assets/press/press12.png' },
  { id: 13, title: 'Viva Bahrain joins hands with iVEDiX', excerpt: 'Published 20 September 2012 — 6:46 a.m by: Clayton Vallabhan Viva Bahrain has teamed up with iVEDiX...', image: '/assets/press/press13.png' },
  { id: 14, title: 'Focus on tech tools drives growth at iVedix', excerpt: 'Business intelligence company iVedix Inc. has been around for just over four years but already has gotten the attention...', image: '/assets/press/press14.png' },
  { id: 15, title: 'iVEDiX and Arcplan Join Forces to Offer Comprehensive BI...', excerpt: 'May 17, 2011 08:49 AM Eastern Daylight Time ROCHESTER, N.Y.–( BUSINESS WIRE )–iVEDiX (...', image: '/assets/press/press15.png' },
  { id: 16, title: 'BI Tool Reaps Dividends for Wegmans', excerpt: 'NEW YORK: One produce manager at a Wegmans store increased sales of berries by 30% by tracking invento...', image: '/assets/press/press16.png' },
];

export default function PressPage() {
  return (
    <div className="press-page">
      <Header />
      {/* Hero */}
      <section className="press-hero-section">
        <div
          className="press-hero-background"
          style={{
            background: `url(${industrybg.src}) center center/cover no-repeat`,
          }}
        >
          <div className="press-hero-overlay" />
        </div>
        <div className="press-hero-content">
          <h1 className="press-hero-title">Press</h1>
          <p className="press-hero-subtitle">
            Announcements, partnerships, and media coverage from iVEDiX.
          </p>
        </div>
      </section>

      <main className="press-main">
        <div className="press-container">
          <div className="press-grid">
            {itemsTop.map((it) => (
              <article key={it.id} className="press-card">
                <div className="press-thumb"><img src={it.image} alt="" /></div>
                <h3 className="press-card-title">{it.title}</h3>
                <p className="press-card-excerpt">{it.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="press-grid">
            {itemsMid.map((it) => (
              <article key={it.id} className="press-card">
                <div className="press-thumb"><img src={it.image} alt="" /></div>
                <h3 className="press-card-title">{it.title}</h3>
                <p className="press-card-excerpt">{it.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="press-grid">
            {itemsBottom.map((it) => (
              <article key={it.id} className="press-card">
                <div className="press-thumb"><img src={it.image} alt="" /></div>
                <h3 className="press-card-title">{it.title}</h3>
                <p className="press-card-excerpt">{it.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


