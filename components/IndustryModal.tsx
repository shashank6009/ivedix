'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry: {
    title: string;
    subtitle: string;
    image: string | { src: string };
    content: {
      overview: string;
      trends: Array<{
        title: string;
        description: string;
        metrics?: Array<{
          label: string;
          value: string;
        }>;
      }>;
      detailedAnalysis: Array<{
        title: string;
        impact: string;
        benefits: string[];
        metrics: Array<{
          label: string;
          value: string;
        }>;
      }>;
    };
  };
}

export const IndustryModal: React.FC<IndustryModalProps> = ({
  isOpen,
  onClose,
  industry,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Animate modal in
      const tl = gsap.timeline();
      tl.set(modalRef.current, { scale: 0.8, opacity: 0 })
        .set(contentRef.current, { y: 50, opacity: 0 })
        .to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' })
        .to(modalRef.current, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' })
        .to(contentRef.current, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2');
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline();
    tl.to(contentRef.current, { y: 50, opacity: 0, duration: 0.3, ease: 'power2.in' })
      .to(modalRef.current, { scale: 0.8, opacity: 0, duration: 0.3, ease: 'power2.in' }, '-=0.2')
      .to(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in' }, '-=0.1')
      .call(() => onClose());
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const imgSrc = typeof industry.image === 'string' ? industry.image : (industry.image as any)?.src || '';

  return (
    <div
      ref={overlayRef}
      className="industry-modal-overlay"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="industry-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-title-section">
              <h2 className="modal-title">{industry.title}</h2>
              <p className="modal-subtitle">{industry.subtitle}</p>
            </div>
            <button className="modal-close-btn" onClick={handleClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="modal-content">
          {/* SVG Content for Manufacturing */}
          {(industry.title === 'Manufacturing' || industry.title === 'manufacturing' || industry.title?.toLowerCase().includes('manufacturing')) ? (
            <>
              <div className="svg-content-section">
                <div className="svg-container">
                  <img
                    src="/assets/manufacturing-diagram.svg?v=1"
                    alt="Manufacturing Process Diagram"
                    className="industry-svg"
                  />
                </div>
              </div>
              
              {/* RFID Future Content */}
              <div className="rfid-future-section">
                <h3 className="rfid-future-title">The Future of RFID in Manufacturing</h3>
                
                <div className="rfid-benefits-grid">
                  <div className="rfid-benefit-card">
                    <div className="benefit-header">
                      <span className="benefit-number">1.</span>
                      <h4 className="benefit-title">Real-Time Tracking</h4>
                    </div>
                    <p className="benefit-description">Track raw materials, WIP, and goods in real-time.</p>
                    <div className="benefit-metrics">
                      <span className="metric">📈 Lead time ↓ 10–30%</span>
                      <span className="metric">Accuracy ↑ 99%</span>
                    </div>
                  </div>

                  <div className="rfid-benefit-card">
                    <div className="benefit-header">
                      <span className="benefit-number">2.</span>
                      <h4 className="benefit-title">Quality Control</h4>
                    </div>
                    <p className="benefit-description">Automated data capture ensures traceability & compliance.</p>
                    <div className="benefit-metrics">
                      <span className="metric">📉 Defects ↓ 20–40%</span>
                      <span className="metric">Compliance ↑ 100%</span>
                    </div>
                  </div>

                  <div className="rfid-benefit-card">
                    <div className="benefit-header">
                      <span className="benefit-number">3.</span>
                      <h4 className="benefit-title">Smart Inventory</h4>
                    </div>
                    <p className="benefit-description">Automated stock management reduces errors & costs.</p>
                    <div className="benefit-metrics">
                      <span className="metric">📊 Accuracy ↑ 95–99%</span>
                      <span className="metric">Costs ↓ 10–20%</span>
                    </div>
                  </div>

                  <div className="rfid-benefit-card">
                    <div className="benefit-header">
                      <span className="benefit-number">4.</span>
                      <h4 className="benefit-title">Predictive Maintenance</h4>
                    </div>
                    <p className="benefit-description">RFID + IoT sensors enable proactive repairs.</p>
                    <div className="benefit-metrics">
                      <span className="metric">⚙️ Downtime ↓ 20–40%</span>
                      <span className="metric">OEE ↑ 5–15%</span>
                    </div>
                  </div>

                  <div className="rfid-benefit-card">
                    <div className="benefit-header">
                      <span className="benefit-number">5.</span>
                      <h4 className="benefit-title">Lean & Cost-Efficient</h4>
                    </div>
                    <p className="benefit-description">Streamlined workflows cut waste & improve flow.</p>
                    <div className="benefit-metrics">
                      <span className="metric">♻️ Waste ↓ 15–30%</span>
                      <span className="metric">Cycle efficiency ↑ 25%</span>
                    </div>
                  </div>

                  <div className="rfid-benefit-card">
                    <div className="benefit-header">
                      <span className="benefit-number">6.</span>
                      <h4 className="benefit-title">Industry 4.0 Ready</h4>
                    </div>
                    <p className="benefit-description">Seamless integration with IoT, AI & robotics.</p>
                    <div className="benefit-metrics">
                      <span className="metric">⚡ Decisions 50% faster</span>
                      <span className="metric">Data flow optimized</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Overview Section */}
              <div className="content-section">
                <h3 className="section-title">Overview</h3>
                <p className="overview-text">{industry.content.overview}</p>
              </div>

              {/* Key Trends */}
              <div className="content-section">
                <h3 className="section-title">Key Trends & Opportunities</h3>
                <div className="trends-grid">
                  {industry.content.trends.map((trend, index) => (
                    <div key={index} className="trend-card">
                      <h4 className="trend-title">{trend.title}</h4>
                      <p className="trend-description">{trend.description}</p>
                      {trend.metrics && (
                        <div className="trend-metrics">
                          {trend.metrics.map((metric, mIndex) => (
                            <div key={mIndex} className="metric">
                              <span className="metric-label">{metric.label}</span>
                              <span className="metric-value">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="content-section">
                <h3 className="section-title">Detailed Analysis</h3>
                <div className="analysis-list">
                  {industry.content.detailedAnalysis.map((analysis, index) => (
                    <div key={index} className="analysis-item">
                      <h4 className="analysis-title">{analysis.title}</h4>
                      <div className="analysis-content">
                        <div className="analysis-section">
                          <h5 className="analysis-subtitle">Impact</h5>
                          <p>{analysis.impact}</p>
                        </div>
                        <div className="analysis-section">
                          <h5 className="analysis-subtitle">Benefits</h5>
                          <ul className="benefits-list">
                            {analysis.benefits.map((benefit, bIndex) => (
                              <li key={bIndex}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="analysis-section">
                          <h5 className="analysis-subtitle">Metrics</h5>
                          <div className="metrics-grid">
                            {analysis.metrics.map((metric, mIndex) => (
                              <div key={mIndex} className="metric-card">
                                <span className="metric-card-label">{metric.label}</span>
                                <span className="metric-card-value">{metric.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustryModal;
