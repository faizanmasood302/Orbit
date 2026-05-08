'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_TABS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'mission', label: 'Mission', href: '#mission' },
  { id: 'specs', label: 'Specs', href: '#specs' },
  { id: 'network', label: 'Network', href: '#network' },
  { id: 'connect', label: 'Connect', href: '#connect' },
];

export function Navigation() {
  const [activeTab, setActiveTab] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#121212]/80 backdrop-blur-[30px] border-b border-white/[0.08]'
          : 'bg-[#121212]/40 backdrop-blur-[30px] border-b border-white/10'
      }`}
    >
      <div className="flex justify-between items-center px-16 h-20 max-w-[1440px] mx-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]"
        >
          ORBIT
        </Link>

        {/* Navigation Tabs */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_TABS.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              onClick={(e) => {
                setActiveTab(tab.id);
                scrollToSection(e, tab.href);
              }}
              className={`font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1'
                  : 'text-white/60 hover:text-white hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Trailing Icons */}
        <div className="flex items-center space-x-4">
          <button
            className="text-white/60 hover:text-[#00f2ff] transition-colors duration-300 focus:outline-none"
            aria-label="Language Settings"
          >
            <span className="material-symbols-outlined text-[20px]">language</span>
          </button>
          <button
            className="text-white/60 hover:text-[#00f2ff] transition-colors duration-300 focus:outline-none"
            aria-label="Settings"
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
        </div>
      </div>
    </nav>
  );
}