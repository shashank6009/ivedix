import React from 'react';
import type { Metadata } from 'next';
import PageTransition from '../components/PageTransition';
import './globals.css';

export const metadata: Metadata = {
  title: 'iVedix - Innovative Solutions',
  description: 'A stunning, modern website redesign featuring premium typography, smooth animations, and a sophisticated design system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-inter">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
