import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Orbit — Turn Your Website Into an Experience',
  description:
    'Orbit transforms any business website into a highly engaging, interactive 3D experience. Spin the globe, explore your brand, and convert more visitors — for cafes, clinics, agencies, and every industry in between.',
  keywords: ['3D website', 'interactive web design', 'WebGL', 'business website', 'Orbit'],
  openGraph: {
    title: 'Orbit — Turn Your Website Into an Experience',
    description: 'Interactive 3D websites that turn passive visitors into active explorers.',
    type: 'website',
  },
};

import ToasterProvider from '@/components/ToasterProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`} data-theme="light">
      <body className="h-full font-body-md text-on-surface bg-surface">{children}<ToasterProvider /></body>
    </html>
  );
}
