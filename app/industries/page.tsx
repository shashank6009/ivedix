'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NeuralGrid from '../../components/NeuralGrid';
import IndustryModal from '../../components/IndustryModal';
import { industriesData } from '../../data/industriesData';
import industrybg from '../../assets/industrybg.png';
import energy from '../../assets/energy.png';
import facility from '../../assets/facility.png';
import govt from '../../assets/govt.png';
import grocery from '../../assets/grocery.png';
import healthcare from '../../assets/healthcare.png';
import hightech from '../../assets/hightech.png';
import manufacturing from '../../assets/manufacturing.png';
import retail from '../../assets/retail.png';
import supply from '../../assets/supply.png';
import warehouse from '../../assets/warehouse.png';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set images for each industry
  const industryDataWithImages = {
    ...industriesData,
    manufacturing: { ...industriesData.manufacturing, image: manufacturing },
    supplyChain: { ...industriesData.supplyChain, image: supply },
    energy: { ...industriesData.energy, image: energy },
    facility: { ...industriesData.facility, image: facility },
    government: { ...industriesData.government, image: govt },
    grocery: { ...industriesData.grocery, image: grocery },
    healthcare: { ...industriesData.healthcare, image: healthcare },
    highTech: { ...industriesData.highTech, image: hightech },
    retail: { ...industriesData.retail, image: retail },
    warehouse: { ...industriesData.warehouse, image: warehouse }
  };

  const items = [
    {
      id: 'energy',
      image: energy,
      title: 'Energy',
      subtitle: 'Power & Utilities',
      borderColor: '#f97316',
      gradient: 'linear-gradient(145deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.energy);
        setIsModalOpen(true);
      }
    },
    {
      id: 'facility',
      image: facility,
      title: 'Facilities',
      subtitle: 'Facility Management',
      borderColor: '#22c55e',
      gradient: 'linear-gradient(210deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.facility);
        setIsModalOpen(true);
      }
    },
    {
      id: 'government',
      image: govt,
      title: 'Government',
      subtitle: 'Public Sector',
      borderColor: '#3b82f6',
      gradient: 'linear-gradient(165deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.government);
        setIsModalOpen(true);
      }
    },
    {
      id: 'grocery',
      image: grocery,
      title: 'Grocery',
      subtitle: 'Retail Grocery',
      borderColor: '#a855f7',
      gradient: 'linear-gradient(195deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.grocery);
        setIsModalOpen(true);
      }
    },
    {
      id: 'healthcare',
      image: healthcare,
      title: 'Healthcare',
      subtitle: 'Health Systems',
      borderColor: '#ef4444',
      gradient: 'linear-gradient(225deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.healthcare);
        setIsModalOpen(true);
      }
    },
    {
      id: 'hightech',
      image: hightech,
      title: 'High Tech',
      subtitle: 'Technology & Software',
      borderColor: '#06b6d4',
      gradient: 'linear-gradient(135deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.highTech);
        setIsModalOpen(true);
      }
    },
    {
      id: 'manufacturing',
      image: manufacturing,
      title: 'Manufacturing',
      subtitle: 'Industrial & Process',
      borderColor: '#fde047',
      gradient: 'linear-gradient(165deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.manufacturing);
        setIsModalOpen(true);
      }
    },
    {
      id: 'retail',
      image: retail,
      title: 'Retail',
      subtitle: 'E-commerce & Stores',
      borderColor: '#f59e0b',
      gradient: 'linear-gradient(145deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.retail);
        setIsModalOpen(true);
      }
    },
    {
      id: 'supply',
      image: supply,
      title: 'Supply Chain',
      subtitle: 'Logistics & Transport',
      borderColor: '#84cc16',
      gradient: 'linear-gradient(210deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.supplyChain);
        setIsModalOpen(true);
      }
    },
    {
      id: 'warehouse',
      image: warehouse,
      title: 'Warehouse',
      subtitle: 'Operations & Storage',
      borderColor: '#22c55e',
      gradient: 'linear-gradient(225deg, #0a0a0a, #111827)',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.warehouse);
        setIsModalOpen(true);
      }
    },
  ];

  const handleCardClick = (item: any) => {
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <>
      <Header />
      <main className="industries-hero-section">
        {/* Hero Section with Background */}
        <section className="industries-hero">
          <div 
            className="industries-hero-background"
            style={{
              background: `url(${industrybg.src}) center center/cover no-repeat`
            }}
          >
            <div className="industries-hero-overlay"></div>
          </div>
          
          {/* Hero Content */}
          <div className="industries-hero-content">
            <h1 className="industries-hero-title">
              Industries We Serve
            </h1>
            <p className="industries-hero-subtitle">
              Transforming businesses across sectors with cutting-edge technology solutions
            </p>
          </div>
        </section>
        
        {/* Neural Network Grid Section */}
        <NeuralGrid 
          items={items}
          onCardClick={handleCardClick}
        />

        {/* Industries Video Section */}
        <section className="industries-video-section">
          <div className="industries-video-container">
            <video 
              className="industries-video"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/industries_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Industry Modal */}
        <IndustryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          industry={selectedIndustry}
        />
      </main>
      <Footer />
    </>
  );
}
