'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import IndustriesSection from '../components/IndustriesSection';
import Footer from '../components/Footer';
import SplashWrapper from '../components/SplashWrapper';

export default function Home() {
  return (
    <>
      <SplashWrapper />
      <main id="main">
        <Header />
        <Hero />
        <AboutSection />
        <IndustriesSection />
        <Footer />
      </main>
    </>
  );
}
