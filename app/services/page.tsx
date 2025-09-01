'use client';

import React, { useRef, useState } from 'react';
import Header from '../../components/Header';
import OrbitNav from '../../components/OrbitNav';
import Link from 'next/link';

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [peek, setPeek] = useState(false);

  const servicesData = [
    {
      id: 1,
      name: 'Industrial IoT Protocols',
      img: '/assets/services/2.png',
      description: 'Expert guidance in Industrial IoT (IIoT) hardware and protocols, including RFID, RTLS, LoRaWAN, and GPS. We assist businesses in designing and deploying tailored solutions through technology assessments, solution design, seamless integration, and data-driven post-deployment optimization.'
    },
    {
      id: 2,
      name: 'Sensors and APIs',
      img: '/assets/services/3.png',
      description: 'Advanced expertise in IoT sensors and custom APIs, offering end-to-end solutions for seamless data collection, integration, and analysis. We guide clients in selecting and deploying sensor technologies for various use cases, from environmental monitoring to smart manufacturing.'
    },
    {
      id: 3,
      name: 'Digitization',
      img: '/assets/services/4.png',
      description: 'Transform physical assets into digital representations using advanced IIoT technologies. We specialize in high-precision asset tracking, integrating hardware with robust communication protocols and custom APIs for seamless data flow and operational visibility.'
    },
    {
      id: 4,
      name: 'Digital Twinning',
      img: '/assets/services/5.png',
      description: 'Create virtual replicas of physical assets and environments with real-time data integration. Our digital twinning solutions combine high-fidelity sensors, RFID, and RTLS to provide dynamic, accurate representations for predictive maintenance and operational optimization.'
    },
    {
      id: 5,
      name: 'Data Dimensionalization',
      img: '/assets/services/6.png',
      description: 'Transform raw data into structured, multi-dimensional formats that enable comprehensive analysis across various axes. Our expertise enhances the value of platform-based digital twin implementations by creating actionable insights from complex datasets.'
    },
    {
      id: 6,
      name: 'Custom Software Design',
      img: '/assets/services/7.png',
      description: 'Bespoke software design and configuration services tailored to unique business requirements. Our platform is designed for custom extensions and integrations, delivering flexible solutions that adapt to your specific operational needs.'
    },
    {
      id: 7,
      name: 'API Design and Development',
      img: '/assets/services/8.png',
      description: 'Create secure, scalable, and well-documented interfaces that enable seamless communication between diverse systems and devices. Our expertise spans multiple modern API protocols, ensuring robust integration capabilities for your IoT ecosystem.'
    },
    {
      id: 8,
      name: 'Advanced Analytics',
      img: '/assets/services/9.png',
      description: 'Derive actionable insights from complex data sets using machine learning models, predictive analytics, and statistical methods. Our advanced analytics capabilities, built into our platform, empower data-driven decision making.'
    },
    {
      id: 9,
      name: 'Data Visualization',
      img: '/assets/services/10.png',
      description: 'Create real-time, interactive representations of complex data through intuitive dashboarding and graphical tools. We pioneered interactive data visualization to make complex information accessible and actionable for all stakeholders.'
    },
    {
      id: 10,
      name: 'AI and Machine Learning',
      img: '/assets/services/11.png',
      description: 'Integrate augmented and artificial intelligence driven insights to enhance automation and predictive capabilities within IoT ecosystems. We employ machine learning, natural language processing, and computer vision to optimize operations.'
    },
    {
      id: 11,
      name: 'Site Surveys',
      img: '/assets/services/12.png',
      description: 'Comprehensive on-site assessments to evaluate environmental conditions, infrastructure readiness, and technology requirements. Our site surveys are crucial for successful platform deployment and ensure optimal system performance.'
    },
    {
      id: 12,
      name: 'RFID and RTLS',
      img: '/assets/services/13.png',
      description: 'End-to-end RFID and RTLS solutions including technology selection, system design, hardware deployment, and integration. Our platform guarantees solutions that enable real-time asset tracking with high accuracy and reliability.'
    },
    {
      id: 13,
      name: 'Rapid Deployment',
      img: '/assets/services/14.png',
      description: 'Minimize downtime and accelerate time-to-value with pre-configured hardware and modular software components. Our rapid deployment services are configurable to customer needs on the ground for immediate operational impact.'
    },
    {
      id: 14,
      name: 'Hosted and On-Prem',
      img: '/assets/services/15.png',
      description: 'Flexible deployment models including both hosted and on-premise options to meet varying client preferences and compliance requirements. Our hosted solutions provide cloud-based scalability and remote accessibility.'
    },
    {
      id: 15,
      name: 'Operational Support',
      img: '/assets/services/1.png',
      description: 'Continuous monitoring, maintenance, and optimization of deployed systems to ensure peak performance. Our operational support teams offer proactive issue resolution and ongoing system improvements.'
    }
  ];

  // Orbit-only hero; deep details are shown inline on hover/click

  return (
    <div className={`services-page${peek ? ' peek' : ''}`} onMouseMove={(e) => {
      setPeek(e.clientY <= 24);
    }}>
      <Header />
      
      {/* Orbit Navigator Hero */}
      <section className="services-orbit-hero">
        <OrbitNav
          items={servicesData.map((s) => ({ id: s.id, name: s.name, img: s.img, description: s.description }))}
          onSelect={() => { /* click handled inside orbit hero for now */ }}
        />
      </section>

      {/* Orbit-only layout (bottom section removed) */}

    </div>
  );
}
