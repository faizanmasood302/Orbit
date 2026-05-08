import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} data-theme="dark">
      <body className="h-full font-sans">{children}</body>
    </html>
  );
}
