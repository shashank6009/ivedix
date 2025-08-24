'use client';

import React from 'react';

interface IndustryIconProps {
  industry: string;
  className?: string;
}

export default function IndustryIcon({ industry, className = '' }: IndustryIconProps) {
  const getIcon = () => {
    switch (industry.toLowerCase()) {
      case 'energy':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        );
      case 'facility':
      case 'facilities':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16-.21 2-.3 3-.3s1.84.09 3 .3c5.16-1 9-5.45 9-11V7l-10-5z"/>
          </svg>
        );
      case 'government':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 1L3 5v6c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V5l-9-4z"/>
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
          </svg>
        );
      case 'grocery':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        );
      case 'healthcare':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
          </svg>
        );
      case 'hightech':
      case 'high tech':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
            <circle cx="12" cy="10" r="2"/>
          </svg>
        );
      case 'manufacturing':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
          </svg>
        );
      case 'retail':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
          </svg>
        );
      case 'supply':
      case 'supply chain':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            <path d="M1 1h4v4H1zm6 0h4v4H7zm6 0h4v4h-4zm6 0h4v4h-4z"/>
          </svg>
        );
      case 'warehouse':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M22 21V7L12 3 2 7v14h5v-9h10v9h5zm-11-2H9v-2h2v2zm0-3H9v-2h2v2zm4 3h-2v-2h2v2zm0-3h-2v-2h2v2z"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
    }
  };

  return getIcon();
}
