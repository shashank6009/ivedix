'use client';

import React from 'react';
import ScrollStack, { ScrollStackItem } from '../../components/ScrollStack';

import img1 from '../../assets/services/1.png';
import img2 from '../../assets/services/2.png';
import img3 from '../../assets/services/3.png';
import img4 from '../../assets/services/4.png';
import img5 from '../../assets/services/5.png';
import img6 from '../../assets/services/6.png';
import img7 from '../../assets/services/7.png';
import img8 from '../../assets/services/8.png';
import img9 from '../../assets/services/9.png';
import img10 from '../../assets/services/10.png';
import img11 from '../../assets/services/11.png';
import img12 from '../../assets/services/12.png';
import img13 from '../../assets/services/13.png';
import img14 from '../../assets/services/14.png';
import img15 from '../../assets/services/15.png';

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
] as const;

export default function ServicesPage() {
  return (
    <main
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        width: '100vw',
        paddingTop: '120px',
        position: 'relative',
      }}
    >
      {/* Page Title */}
      <div style={{
        position: 'absolute',
        top: '80px',
        left: '32px',
        zIndex: 1,
      }}>
        <h1 style={{
          margin: 0,
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontSize: '2.5rem',
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        }}>services</h1>
      </div>
      <section
        style={{
          height: 'calc(100vh - 120px)',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          boxSizing: 'border-box',
        }}
      >
        <ScrollStack
          mode="parallax"
          orientation="horizontal"
          parallaxStrength={0.12}
          cascadeOffsetX={36}
          cascadeOffsetY={0}
          itemDistance={120}
          itemScale={0.03}
          itemStackDistance={36}
          stackPosition="22%"
          scaleEndPosition="12%"
          baseScale={0.86}
          rotationAmount={0}
          blurAmount={0}
        >
          {images.map((src, idx) => {
            const s = typeof src === 'string' ? src : (src as any)?.src || '';
            return (
              <ScrollStackItem key={idx}>
                <img src={s} alt={`Service ${idx + 1}`} loading="lazy" />
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </section>
    </main>
  );
}
