'use client';

import React, { useState } from 'react';
import ChromaGrid from '../../components/ChromaGrid';
import IndustryModal from '../../components/IndustryModal';
import { industriesData } from '../../data/industriesData';
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
      image: energy,
      title: 'Energy',
      subtitle: 'Power & Utilities',
      handle: '',
      borderColor: '#f97316',
      gradient: 'linear-gradient(145deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.energy);
        setIsModalOpen(true);
      }
    },
    {
      image: facility,
      title: 'Facilities',
      subtitle: 'Facility Management',
      handle: '',
      borderColor: '#22c55e',
      gradient: 'linear-gradient(210deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.facility);
        setIsModalOpen(true);
      }
    },
    {
      image: govt,
      title: 'Government',
      subtitle: 'Public Sector',
      handle: '',
      borderColor: '#3b82f6',
      gradient: 'linear-gradient(165deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.government);
        setIsModalOpen(true);
      }
    },
    {
      image: grocery,
      title: 'Grocery',
      subtitle: 'Retail Grocery',
      handle: '',
      borderColor: '#a855f7',
      gradient: 'linear-gradient(195deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.grocery);
        setIsModalOpen(true);
      }
    },
    {
      image: healthcare,
      title: 'Healthcare',
      subtitle: 'Health Systems',
      handle: '',
      borderColor: '#ef4444',
      gradient: 'linear-gradient(225deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.healthcare);
        setIsModalOpen(true);
      }
    },
    {
      image: hightech,
      title: 'High Tech',
      subtitle: 'Technology & Software',
      handle: '',
      borderColor: '#06b6d4',
      gradient: 'linear-gradient(135deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.highTech);
        setIsModalOpen(true);
      }
    },
    {
      image: manufacturing,
      title: 'Manufacturing',
      subtitle: 'Industrial & Process',
      handle: '',
      borderColor: '#fde047',
      gradient: 'linear-gradient(165deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.manufacturing);
        setIsModalOpen(true);
      }
    },
    {
      image: retail,
      title: 'Retail',
      subtitle: 'E-commerce & Stores',
      handle: '',
      borderColor: '#f59e0b',
      gradient: 'linear-gradient(145deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.retail);
        setIsModalOpen(true);
      }
    },
    {
      image: supply,
      title: 'Supply Chain',
      subtitle: 'Logistics & Transport',
      handle: '',
      borderColor: '#84cc16',
      gradient: 'linear-gradient(210deg, #0a0a0a, #111827)',
      url: '',
      onClick: () => {
        setSelectedIndustry(industryDataWithImages.supplyChain);
        setIsModalOpen(true);
      }
    },
    {
      image: warehouse,
      title: 'Warehouse',
      subtitle: 'Operations & Storage',
      handle: '',
      borderColor: '#22c55e',
      gradient: 'linear-gradient(225deg, #0a0a0a, #111827)',
      url: '',
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
    <main style={{ 
      background: '#000', 
      minHeight: '100vh', 
      width: '100vw',
      paddingTop: '120px',
      overflow: 'auto',
      position: 'relative'
    }}>
      {/* Page Title */}
      <div style={{
        position: 'absolute',
        top: '80px',
        left: '32px',
        zIndex: 1
      }}>
        <h1 style={{
          margin: 0,
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontSize: '2.5rem',
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}>industries</h1>
      </div>
      <section style={{
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',
        height: 'calc(100vh - 120px)', 
        width: '100%',
        paddingTop: '0px'
      }}>
        <div style={{ 
          height: '100%', 
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingLeft: '32px',
          paddingTop: '5px',
          boxSizing: 'border-box'
        }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.4}
            fadeOut={0.6}
            ease="power3.out"
            horizontal
            visible={6}
            onCardClick={handleCardClick}
          />
        </div>
      </section>

      {/* Industries Video Section */}
      <section style={{
        width: '100%',
        padding: '4rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          textAlign: 'center'
        }}>
          <video 
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
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
  );
}
