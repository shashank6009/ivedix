'use client';

import React, { useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  // Track which service card is closest to viewport center to sync summary
  React.useEffect(() => {
    const updateActiveTop = () => {
      if (!listRef.current) return;
      const container = listRef.current;
      const containerRect = container.getBoundingClientRect();
      const cards = Array.from(container.querySelectorAll<HTMLElement>('.service-card'));
      if (cards.length === 0) return;

      let bestIdx = 0;
      let bestDelta = Number.POSITIVE_INFINITY;
      for (let i = 0; i < cards.length; i++) {
        const r = cards[i].getBoundingClientRect();
        const delta = Math.abs(r.top - containerRect.top - 16); // 16px offset padding
        if (r.bottom > containerRect.top + 16 && r.top < window.innerHeight) {
          if (delta < bestDelta) { bestDelta = delta; bestIdx = i; }
        }
      }
      setActiveCardIndex(bestIdx);
    };

    const onScroll = () => requestAnimationFrame(updateActiveTop);
    updateActiveTop();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveTop);
    return () => {
      window.removeEventListener('scroll', onScroll as any);
      window.removeEventListener('resize', updateActiveTop as any);
    };
  }, []);

  const servicesData = [
    {
      id: 1,
      name: 'Industrial IoT Protocols',
      img: '/assets/services/1.png',
      description: 'In-house experts provide advanced guidance in Industrial IoT (IIoT) hardware and protocols, including RFID, RTLS, LoRaWAN, and GPS. We assist businesses in designing and deploying tailored solutions through technology assessments, solution design, seamless integration, and data-driven post-deployment optimization.'
    },
    {
      id: 2,
      name: 'Sensors and APIs',
      img: '/assets/services/2.png',
      description: 'Advanced expertise in IoT sensors and custom APIs, offering end-to-end solutions for seamless data collection, integration, and analysis. We guide clients in selecting and deploying sensor technologies for various use cases, from environmental monitoring to smart manufacturing.'
    },
    {
      id: 3,
      name: 'Digitization',
      img: '/assets/services/3.png',
      description: 'Expert guidance on digitizing physical assets using advanced IIoT technologies, including RFID, RTLS, and IoT sensors. We specialize in high-precision asset tracking, integrating hardware with robust communication protocols and custom APIs for seamless data flow.'
    },
    {
      id: 4,
      name: 'Digital Twinning',
      img: '/assets/services/4.png',
      description: 'IoT Studio offers advanced Digital Twinning solutions, creating virtual replicas of physical assets and environments. We integrate high-fidelity sensors, RFID, and RTLS to feed real-time data into dynamic twins.'
    },
    {
      id: 5,
      name: 'Data Dimensionalization',
      img: '/assets/services/5.png',
      description: 'Expertise in data dimensionalization enhances the value of platform-based digital twin implementations by transforming raw data into structured, multi-dimensional formats. This enables comprehensive analysis across various axes.'
    },
    {
      id: 6,
      name: 'Custom Software Design',
      img: '/assets/services/6.png',
      description: 'Customization is embraced due to unique business requirements. Bespoke design and configuration services are delivered through a platform designed for custom extensions and integrations.'
    },
    {
      id: 7,
      name: 'API Design and Development',
      img: '/assets/services/7.png',
      description: 'The iVEDIX platform facilitates the creation of secure, scalable, and well-documented interfaces that enable seamless communication between diverse systems and devices. Our expertise spans multiple modern API protocols.'
    },
    {
      id: 8,
      name: 'Advanced Analytics',
      img: '/assets/services/8.png',
      description: 'Our advanced analytics capabilities, built into our platform, empower clients to derive actionable insights from complex data sets. By employing machine learning models, predictive analytics, and statistical methods.'
    },
    {
      id: 9,
      name: 'Data Visualization',
      img: '/assets/services/9.png',
      description: 'We pioneered interactive data visualization by leveraging our platform\'s intuitive dashboarding and graphical tools to create real-time, interactive representations of complex data.'
    },
    {
      id: 10,
      name: 'AI and Machine Learning',
      img: '/assets/services/10.png',
      description: 'Our platform integrates augmented and artificial intelligence driven insights, enhancing automation and predictive capabilities within IoT ecosystems. By employing machine learning, natural language processing, and computer vision.'
    },
    {
      id: 11,
      name: 'Site Surveys',
      img: '/assets/services/11.png',
      description: 'Site surveys conducted as part of our consulting services are crucial for successful platform deployment. We perform thorough on-site assessments to evaluate environmental conditions, infrastructure readiness, and technology requirements.'
    },
    {
      id: 12,
      name: 'RFID and RTLS',
      img: '/assets/services/12.png',
      description: 'In RFID and RTLS solutioning, we provide end-to-end services that include technology selection, system design, hardware deployment, and integration. Our platform guarantees solutions that enable real-time asset tracking.'
    },
    {
      id: 13,
      name: 'Rapid Deployment',
      img: '/assets/services/13.png',
      description: 'Our rapid deployment services focus on minimizing downtime and accelerating time-to-value. The hardware is pre-configured and ready to go with modular software components that are configurable to customer needs on the ground.'
    },
    {
      id: 14,
      name: 'Hosted and On-Prem',
      img: '/assets/services/14.png',
      description: 'We offer rapid and flexible deployment models, including both hosted and on-premise options, to meet varying client preferences and compliance requirements. Our hosted solutions provide cloud-based scalability and remote accessibility.'
    },
    {
      id: 15,
      name: 'Operational Support',
      img: '/assets/services/15.png',
      description: 'Ongoing operational support is a cornerstone of our services. We provide continuous monitoring, maintenance, and optimization of deployed systems to ensure peak performance. Our support teams offer proactive issue resolution.'
    }
  ];

  // Display order: increment by 1 so last card moves to the first position
  const displayedServices = React.useMemo(() => {
    const arr = [...servicesData];
    if (arr.length === 0) return arr;
    const last = arr[arr.length - 1];
    return [last, ...arr.slice(0, arr.length - 1)];
  }, [servicesData]);

  // Rotate summary: show next-in-order relative to currently focused displayed card
  const rotatedIndex = (activeCardIndex + 1) % displayedServices.length;

  return (
    <div className="services-page">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="services-hero-section">
        <div className="services-hero-background" style={{ backgroundImage: 'url(/assets/services.png)' }}>
          <div className="services-hero-overlay"></div>
        </div>
        <div className="services-hero-content">
          <div className="breadcrumb">
            <span className="breadcrumb-text">Home &gt; Services</span>
          </div>
          <h1 className="services-hero-title">
            Services
          </h1>
          <p className="services-hero-subtitle">
            Comprehensive IoT solutions and expertise to transform your business
          </p>
        </div>
      </section>

      {/* Services Split Layout */}
      <section className="services-split-section">
        <div className="services-split-container">
          {/* Left: Sticky Summary */}
          <aside className="services-sticky-summary">
            <div className="summary-inner">
              <div className="summary-breadcrumb">Services</div>
              <h2 className="summary-title">{displayedServices[rotatedIndex]?.name}</h2>
              <p className="summary-subtitle">{displayedServices[rotatedIndex]?.description}</p>
              <div className="summary-cta">
                <button className="cta-primary">Get a demo</button>
                <button className="cta-ghost">See platform</button>
              </div>
            </div>
          </aside>

          {/* Right: Vertical Showcase */}
          <div ref={listRef} className="services-vertical">
            {displayedServices.map((svc, idx) => (
              <article key={svc.id} className="service-card" data-index={idx}>
                <div className="service-card-media">
                  <img src={svc.img} alt={svc.name} loading="lazy" />
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{svc.name}</h3>
                  <p className="service-card-desc">{svc.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
