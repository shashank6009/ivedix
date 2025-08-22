'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SplashWrapper from '../components/SplashWrapper';

export default function Home() {
  return (
    <>
      <SplashWrapper />
      <main id="main">
        <Header />
        <Hero />
      </main>
    </>
  );
}
