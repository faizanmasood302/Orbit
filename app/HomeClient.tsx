'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { About } from '@/components/sections/About';
import { Offerings } from '@/components/sections/Offerings';
import { Stories } from '@/components/sections/Stories';
import { Connect } from '@/components/sections/Connect';
import { Impact } from '@/components/sections/Impact';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/sections/Footer';
import { useOrbitStore } from '@/store/orbit';

const OrbitScene = dynamic(
  () => import('@/components/3d/OrbitScene').then((m) => m.OrbitScene),
  { ssr: false }
);

type Section = 'about' | 'offerings' | 'stories' | 'connect' | 'impact';

const NAV_ITEMS: { key: Section; label: string }[] = [
  { key: 'about',    label: 'About' },
  { key: 'offerings', label: 'Offerings' },
  { key: 'stories',   label: 'Stories' },
  { key: 'connect',   label: 'Connect' },
  { key: 'impact',    label: 'Impact' },
];

interface Props {
  content: Record<string, { title: string; body: string }>;
}

export default function HomeClient({ content }: Props) {
  const currentSection = useOrbitStore((s) => s.currentSection);
  const spinGlobeTo = useOrbitStore((s) => s.spinGlobeTo);
  const theme = useOrbitStore((s) => s.theme);
  
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
  }, [theme]);

  function handleNav(key: Section) {
    spinGlobeTo(currentSection === key ? null : key);
  }

  return (
    <div className="antialiased min-h-screen flex flex-col relative dark">
      {/* Nebula Background */}
      <div className="nebula-bg" />

      {/* TopAppBar (Web) */}
      <header className="hidden md:flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto absolute top-0 z-50 bg-black/40 backdrop-blur-[40px] border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="text-2xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]">ORBIT</div>
        <nav className="flex gap-8 font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold">
          {NAV_ITEMS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleNav(key)}
              className={`transition-all duration-300 hover:scale-105 ${
                currentSection === key
                  ? 'text-cyan-400 border-b border-cyan-400 pb-1'
                  : 'text-white/60 hover:text-white hover:text-cyan-300'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="flex gap-4 text-cyan-400">
          <button className="hover:scale-105 hover:text-cyan-300 transition-all duration-300">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
          </button>
        </div>
      </header>


      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center relative w-full h-screen overflow-hidden">
        {/* Hero Tagline (Background Parallax Layer) */}
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20 pointer-events-none">
          <h1 className="font-display-xl text-display-xl text-primary text-center leading-none tracking-tighter mix-blend-overlay">
            Spin to Discover.<br/>Click to Dive.
          </h1>
        </div>

        {/* The 3D Sphere Container */}
        <div className="relative w-[600px] h-[600px] rounded-full ambient-glow z-10 flex items-center justify-center group">
          {/* Rendered 3D Sphere (OrbitScene) */}
          <div className="w-full h-full rounded-full opacity-80 overflow-hidden">
            <OrbitScene />
          </div>

          {/* Glowing Inner Shadow / Volumetric Light Overlay */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_100px_rgba(0,245,255,0.2)] pointer-events-none" />

          {/* Hotspots */}
          {/* About Hotspot */}
          <div
            className="absolute top-[20%] left-[25%] flex flex-col items-center gap-2 group/hotspot cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            onClick={() => handleNav('about')}
          >
            <div className="w-3 h-3 bg-primary-container rounded-full hotspot-core relative">
              <div className="absolute inset-0 rounded-full border border-primary-container opacity-50 scale-150"></div>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 tracking-widest whitespace-nowrap drop-shadow-md">About</span>
          </div>

          {/* Offerings Hotspot */}
          <div
            className="absolute top-[40%] right-[15%] flex flex-col items-center gap-2 group/hotspot cursor-pointer transform translate-x-1/2 -translate-y-1/2"
            onClick={() => handleNav('offerings')}
          >
            <div className="w-3 h-3 bg-primary-container rounded-full hotspot-core relative">
              <div className="absolute inset-0 rounded-full border border-primary-container opacity-50 scale-150"></div>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 tracking-widest whitespace-nowrap drop-shadow-md">Offerings</span>
          </div>

          {/* Stories Hotspot */}
          <div
            className="absolute bottom-[30%] left-[10%] flex flex-col items-center gap-2 group/hotspot cursor-pointer transform -translate-x-1/2 translate-y-1/2"
            onClick={() => handleNav('stories')}
          >
            <div className="w-3 h-3 bg-primary-container rounded-full hotspot-core relative">
              <div className="absolute inset-0 rounded-full border border-primary-container opacity-50 scale-150"></div>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 tracking-widest whitespace-nowrap drop-shadow-md">Stories</span>
          </div>

          {/* Connect Hotspot */}
          <div
            className="absolute bottom-[20%] right-[30%] flex flex-col items-center gap-2 group/hotspot cursor-pointer transform translate-x-1/2 translate-y-1/2"
            onClick={() => handleNav('connect')}
          >
            <div className="w-3 h-3 bg-primary-container rounded-full hotspot-core relative">
              <div className="absolute inset-0 rounded-full border border-primary-container opacity-50 scale-150"></div>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 tracking-widest whitespace-nowrap drop-shadow-md">Connect</span>
          </div>

          {/* Impact Hotspot */}
          <div
            className="absolute top-[60%] left-[50%] flex flex-col items-center gap-2 group/hotspot cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-20"
            onClick={() => handleNav('impact')}
          >
            <div className="w-4 h-4 bg-primary rounded-full hotspot-core relative shadow-[0_0_30px_rgba(233,254,255,1)]">
              <div className="absolute inset-0 rounded-full border border-primary opacity-80 scale-150"></div>
              <div className="absolute inset-0 rounded-full border border-primary opacity-30 scale-200"></div>
            </div>
            <span className="font-label-caps text-label-caps text-primary opacity-100 tracking-widest whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">Impact</span>
          </div>
        </div>

        {/* Foreground Tagline (Clear, Interactive Layer) */}
        <div className="absolute bottom-16 w-full text-center z-20 pointer-events-none">
          <p className="font-headline-md text-headline-md text-on-surface opacity-80 tracking-wide drop-shadow-lg">
            Spin to Discover. Click to Dive.
          </p>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 mb-8 mx-auto w-fit px-6 py-3 rounded-full bg-white/5 backdrop-blur-[40px] border border-white/20 shadow-[0_0_30px_rgba(0,245,255,0.2)]">
        <ul className="flex gap-8 items-center">
          <li>
            <button
              className="flex items-center gap-2 text-cyan-400 animate-pulse hover:bg-white/10 hover:border-cyan-400/50 transition-all font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em]"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
              Hub
            </button>
          </li>
        </ul>
      </nav>

      {/* Section Overlays (Modal style) */}
      {currentSection === 'about' && <About content={content['about']} />}
      {currentSection === 'offerings' && <Offerings content={content['offerings']} />}
      {currentSection === 'stories' && <Stories content={content['stories']} />}
      {currentSection === 'connect' && <Connect content={content['connect']} />}
      {currentSection === 'impact' && <Impact content={content['impact']} />}

      {/* Page Content Below Hero (optional) */}
      <div className="relative z-20">
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}