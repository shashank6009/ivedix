'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChromaGrid from '../../components/ChromaGrid';

export default function ApplicationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

  const applications = [
    {
      id: 1,
      title: 'Inventory Management',
      subtitle: 'Smart Inventory Control',
      description: 'Automated tracking and management of inventory levels with real-time updates and predictive analytics.',
      image: '/assets/inventory-placeholder.jpg',
      category: 'Management'
    },
    {
      id: 2,
      title: 'Material Flow',
      subtitle: 'Optimized Supply Chain',
      description: 'End-to-end material tracking from supplier to production with intelligent routing and bottleneck detection.',
      image: '/assets/material-placeholder.jpg',
      category: 'Operations'
    },
    {
      id: 3,
      title: 'Personnel Flow',
      subtitle: 'Workforce Optimization',
      description: 'Real-time personnel tracking and workflow optimization for improved productivity and safety.',
      image: '/assets/personnel-placeholder.jpg',
      category: 'Human Resources'
    },
    {
      id: 4,
      title: 'Operational Efficiency',
      subtitle: 'Performance Analytics',
      description: 'Comprehensive analytics platform for monitoring and improving operational efficiency across all processes.',
      image: '/assets/efficiency-placeholder.jpg',
      category: 'Analytics'
    },
    {
      id: 5,
      title: 'Real Time Asset Tracking',
      subtitle: 'Live Asset Monitoring',
      description: 'Real-time tracking of valuable assets with geofencing, alerts, and comprehensive reporting.',
      image: '/assets/tracking-placeholder.jpg',
      category: 'Asset Management'
    },
    {
      id: 6,
      title: 'Armory',
      subtitle: 'Security Asset Management',
      description: 'Specialized tracking and management system for security equipment, weapons, and tactical gear.',
      image: '/assets/armory-placeholder.jpg',
      category: 'Security'
    },
    {
      id: 7,
      title: 'Security & Loss Prevention',
      subtitle: 'Comprehensive Security',
      description: 'Advanced security monitoring and loss prevention with real-time alerts and incident response.',
      image: '/assets/security-placeholder.jpg',
      category: 'Security'
    },
    {
      id: 8,
      title: 'Preventative Maintenance',
      subtitle: 'Predictive Maintenance',
      description: 'IoT-driven maintenance scheduling and predictive analytics to prevent equipment failures.',
      image: '/assets/maintenance-placeholder.jpg',
      category: 'Maintenance'
    },
    {
      id: 9,
      title: 'Compliance',
      subtitle: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting for industry-specific regulations and standards.',
      image: '/assets/compliance-placeholder.jpg',
      category: 'Compliance'
    },
    {
      id: 10,
      title: 'Linen Management',
      subtitle: 'Hospitality Solutions',
      description: 'Specialized tracking system for hospitality industry linen and textile management.',
      image: '/assets/linen-placeholder.jpg',
      category: 'Hospitality'
    },
    {
      id: 11,
      title: 'Tire Tracking',
      subtitle: 'Fleet Management',
      description: 'Comprehensive tire tracking and management system for fleet operations and maintenance.',
      image: '/assets/tire-placeholder.jpg',
      category: 'Fleet Management'
    }
  ];

  return (
    <div className="applications-page">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="applications-hero-section">
        <div className="applications-hero-background" style={{ backgroundImage: 'url(/assets/application.png)' }}>
          <div className="applications-hero-overlay"></div>
        </div>
        <div className="applications-hero-content">
          <div className="breadcrumb">
            <span className="breadcrumb-text">Home &gt; Applications</span>
          </div>
          <h1 className="applications-hero-title">
            Applications
          </h1>
        </div>
      </section>



      {/* Applications Grid Section */}
      <section ref={gridRef} className="applications-grid-section">
        <div className="applications-grid-container">
          <ChromaGrid items={applications} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
