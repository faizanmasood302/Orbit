'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Chatbot } from '@/components/ui/Chatbot';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const bgExplorerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      observerOptions
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollPercent =
        scrolled / (document.documentElement.scrollHeight - viewportHeight);

      if (bgExplorerRef.current) {
        const scale = 1 + scrollPercent * 0.5;
        const opacity = Math.max(0.2, 1 - scrollPercent * 1.2);
        const rotate = scrollPercent * 45;
        const translateY = scrollPercent * 100;

        bgExplorerRef.current.style.transform = `translateY(${-translateY}px) scale(${scale}) rotate(${rotate}deg)`;
        bgExplorerRef.current.style.opacity = String(opacity);
      }

      const nav = document.querySelector('nav');
      if (nav) {
        if (scrolled > 50) {
          nav.classList.add('py-3', 'bg-[#121212]/80');
          nav.classList.remove('py-5', 'bg-[#121212]/40');
        } else {
          nav.classList.remove('py-3', 'bg-[#121212]/80');
          nav.classList.add('py-5', 'bg-[#121212]/40');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-black">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-[#121212]/40 backdrop-blur-[30px] border-b border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500 py-5">
        <div className="flex justify-between items-center px-8 md:px-16 max-w-[1440px] mx-auto">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]"
          >
            ORBIT
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              onClick={() => setActiveTab('about')}
              className={`font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold transition-all duration-300 ${
                activeTab === 'about' 
                  ? 'text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1' 
                  : 'text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]'
              }`}
            >
              About
            </Link>
            <Link
              href="/offerings"
              onClick={() => setActiveTab('offerings')}
              className={`font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold transition-all duration-300 ${
                activeTab === 'offerings' 
                  ? 'text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1' 
                  : 'text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]'
              }`}
            >
              Offerings
            </Link>
            <Link
              href="/stories"
              onClick={() => setActiveTab('stories')}
              className={`font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold transition-all duration-300 ${
                activeTab === 'stories' 
                  ? 'text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1' 
                  : 'text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]'
              }`}
            >
              Stories
            </Link>
            <Link
              href="/connect"
              onClick={() => setActiveTab('connect')}
              className={`font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold transition-all duration-300 ${
                activeTab === 'connect' 
                  ? 'text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1' 
                  : 'text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]'
              }`}
            >
              Connect
            </Link>
            <Link
              href="/impact"
              onClick={() => setActiveTab('impact')}
              className={`font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold transition-all duration-300 ${
                activeTab === 'impact' 
                  ? 'text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1' 
                  : 'text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]'
              }`}
            >
              Impact
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-[#00f2ff]">
            <button className="hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-all">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                language
              </span>
            </button>
            <button className="hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-all">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                settings
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Persistent Interactive Background Explorer */}
      <div
        ref={bgExplorerRef}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 bg-particles overflow-hidden"
        id="background-explorer"
      >
        <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-white/5 sphere-glow bg-surface-container-lowest/40 backdrop-blur-[2px] flex items-center justify-center">
          <div className="w-[70%] h-[70%] rounded-full border border-primary-container/10 border-dashed animate-spin [animation-duration:120s]" />
          <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5 animate-spin [animation-direction:reverse] [animation-duration:180s]" />

          <div className="absolute top-[15%] left-[-5%] group cursor-pointer flex items-center pointer-events-auto">
            <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_15px_#00f2ff]" />
            <div className="h-[1px] w-12 hotspot-line ml-2" />
            <div className="hidden md:block bg-[#121212]/40 backdrop-blur-[20px] border border-white/10 px-3 py-1 font-label-caps text-[10px] text-on-background group-hover:border-primary-container group-hover:text-primary-container transition-all ml-2">
              CORE_01
            </div>
          </div>

          <div className="absolute bottom-[20%] right-[-10%] group cursor-pointer flex items-center flex-row-reverse pointer-events-auto">
            <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_15px_#00f2ff]" />
            <div className="h-[1px] w-20 hotspot-line mr-2 rotate-180" />
            <div className="hidden md:block bg-[#121212]/40 backdrop-blur-[20px] border border-white/10 px-3 py-1 font-label-caps text-[10px] text-on-background group-hover:border-primary-container group-hover:text-primary-container transition-all mr-2">
              NODE_74
            </div>
          </div>

          <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col space-y-4 opacity-20 font-label-caps text-[10px] tracking-widest text-on-background">
            <p>LAT: 45.9281° N</p>
            <p>LON: 12.0934° E</p>
            <p>ALT: 324,000M</p>
            <p>SYS: OPERATIONAL</p>
          </div>

          <div className="absolute top-1/2 right-10 -translate-y-1/2 flex flex-col space-y-4 opacity-20 font-label-caps text-[10px] tracking-widest text-on-background text-right">
            <p>TEMP: -122°C</p>
            <p>RAD: LOW</p>
            <p>SIG: 98%</p>
            <p>VEL: 7.6 KM/S</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section
          className="h-screen flex flex-col items-center justify-center px-16 text-center"
          id="about"
        >
          <div className="reveal active">
            <p className="font-label-caps text-primary-container tracking-[0.4em] mb-4">
              FRONTIER EXPLORATION
            </p>
            <h1 className="font-h1 text-5xl md:text-8xl mb-6 tracking-tighter">
              BEYOND THE<br />
              VISIBLE SPECTRUM
            </h1>
            <p className="font-body-lg text-white/50 max-w-xl mx-auto mb-8">
              Deploying next-generation autonomous clusters to map the deep silence of the
              outer rim.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="px-8 py-3 bg-primary-container text-black font-label-caps text-xs tracking-widest hover:bg-white transition-all">
                INITIATE MISSION
              </button>
              <button className="px-8 py-3 border border-white/20 text-white font-label-caps text-xs tracking-widest hover:border-primary-container hover:text-primary-container transition-all backdrop-blur-md">
                VIEW TELEMETRY
              </button>
            </div>
          </div>
        </section>

        {/* Deep Space Mission Section */}
        <section
          className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-32"
          id="mission"
        >
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="reveal scroll-fade">
                <p className="font-label-caps text-primary-container tracking-[0.4em] mb-6">
                  01 // MISSION STATEMENT
                </p>
                <h2 className="font-h1 text-4xl md:text-7xl mb-8 leading-[1.1]">
                  ARCHITECTING THE<br />
                  NEBULA VOID.
                </h2>
                <p className="font-body-lg text-white/60 mb-10 leading-relaxed">
                  ORBIT is not just a mission; it&apos;s a permanent infrastructure
                  in the dark. We establish autonomous nodes that think, react, and
                  learn from the cosmos in real-time, providing unprecedented data
                  resolution from the edge of the known universe.
                </p>
                <div className="flex items-center space-x-12">
                  <div>
                    <p className="font-h3 text-primary-container">4.2M</p>
                    <p className="font-label-caps text-[10px] text-white/40">
                      LIGHT YEARS MAPPED
                    </p>
                  </div>
                  <div>
                    <p className="font-h3 text-primary-container">12k+</p>
                    <p className="font-label-caps text-[10px] text-white/40">
                      AUTONOMOUS NODES
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal scroll-fade stagger-1">
                <div className="aspect-square border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-transparent" />
                  <img
                    alt="Space"
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjOh_YEHswRHjRgliTVq3O3FDDrrkz9Y2zluuiL8OABzCZDbM78kfaakR52ko6K2LZiwARMGA9CBpHBFr-BjGvUoBaHiLoC_5VyjL9DFPcyRaOJfRFNkn8qgRfB7NeK9TE5R2yb5c9CLWPpiECZ8KLLVpEbFXmQp7YzAJLzNGN78Xxuas_QD3OPuoaaPvdWjnIrSgHEEGLgbin2AegMT9YR8R_9IB0Bvj_r_AcRfnoHhfBLolHujGg4NQFjYxVL7UfkTx5EvBWfU8"
                  />
                  <div className="absolute bottom-8 left-8">
                    <span className="font-label-caps text-[10px] px-3 py-1 bg-black/80 border border-primary-container/30">
                      IMG_REF: VOID_SCAN_001
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section
          className="min-h-screen py-32 px-8 md:px-16 bg-surface-container-lowest/30 backdrop-blur-sm"
          id="specs"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-20 reveal scroll-fade">
              <p className="font-label-caps text-primary-container tracking-[0.4em] mb-4">
                02 // TECHNICAL ARCHITECTURE
              </p>
              <h2 className="font-h2">CORE SPECIFICATIONS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Spec Card 1 */}
              <div className="glow-card p-10 flex flex-col justify-between aspect-square reveal scroll-fade">
                <div>
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-6">
                    memory
                  </span>
                  <h3 className="font-h3 mb-4">Quantum Processing</h3>
                  <p className="font-body-md text-white/50">
                    Next-gen qubit arrays for local data processing at sub-zero
                    temperatures.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 font-label-caps text-[10px] text-primary-container">
                  99.9% UPTIME
                </div>
              </div>

              {/* Spec Card 2 */}
              <div className="glow-card p-10 flex flex-col justify-between aspect-square reveal scroll-fade stagger-1">
                <div>
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-6">
                    sensors
                  </span>
                  <h3 className="font-h3 mb-4">Neural Sensing</h3>
                  <p className="font-body-md text-white/50">
                    Hyperspectral imaging clusters capable of detecting organic signatures
                    across light years.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 font-label-caps text-[10px] text-primary-container">
                    0.1ms LATENCY
                  </div>
              </div>

              {/* Spec Card 3 */}
              <div className="glow-card p-10 flex flex-col justify-between aspect-square reveal scroll-fade stagger-2">
                <div>
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-6">
                    shield
                  </span>
                  <h3 className="font-h3 mb-4">Hull Integrity</h3>
                  <p className="font-body-md text-white/50">
                    Graphene-infused plating engineered to withstand micrometeorite
                    impacts and solar flares.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 font-label-caps text-[10px] text-primary-container">
                  LEVEL 5 PROTECTION
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section
          className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-16 overflow-hidden"
          id="network"
        >
          <div className="max-w-[1440px] mx-auto w-full relative">
            <div className="reveal scroll-fade text-center mb-20">
              <p className="font-label-caps text-primary-container tracking-[0.4em] mb-4">
                03 // GLOBAL NETWORK
              </p>
              <h2 className="font-h1 text-4xl md:text-7xl">UNIFIED COMMAND.</h2>
            </div>

            <div className="relative h-[400px] border border-white/5 flex items-center justify-center reveal scroll-fade">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)]" />
              <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
                <div className="text-center group">
                  <p className="font-label-caps text-xs text-white/40 mb-2 group-hover:text-primary-container transition-colors">
                    OSLO_STATION
                  </p>
                  <p className="font-h2 text-2xl md:text-4xl">60.4° N</p>
                </div>
                <div className="text-center group">
                  <p className="font-label-caps text-xs text-white/40 mb-2 group-hover:text-primary-container transition-colors">
                    SYDNEY_ARRAY
                  </p>
                  <p className="font-h2 text-2xl md:text-4xl">33.8° S</p>
                </div>
                <div className="text-center group">
                  <p className="font-label-caps text-xs text-white/40 mb-2 group-hover:text-primary-container transition-colors">
                    MOJAVE_HUB
                  </p>
                  <p className="font-h2 text-2xl md:text-4xl">35.0° N</p>
                </div>
                <div className="text-center group">
                  <p className="font-label-caps text-xs text-white/40 mb-2 group-hover:text-primary-container transition-colors">
                    TOKYO_UPLINK
                  </p>
                  <p className="font-h2 text-2xl md:text-4xl">35.6° N</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section
          className="min-h-[60vh] flex flex-col items-center justify-center py-32 px-8"
          id="connect"
        >
          <div className="max-w-2xl text-center reveal scroll-fade">
            <h2 className="font-h2 mb-6">READY TO JOIN THE ORBIT?</h2>
            <p className="font-body-lg text-white/50 mb-10">
              Register for mission updates and access the real-time telemetry feed.
            </p>
            <form className="w-full flex flex-col md:flex-row gap-4">
              <input
                className="flex-1 bg-surface-container-high/50 border-white/10 focus:border-primary-container focus:ring-0 text-white font-label-caps py-4 px-6"
                placeholder="ENCRYPTED_EMAIL_ADDRESS"
                type="email"
              />
              <button
                className="bg-primary-container text-black font-label-caps px-10 py-4 hover:bg-white transition-all"
                type="submit"
              >
                ESTABLISH_LINK
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-[1440px] mx-auto gap-8">
          <span className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-[#00f2ff] transition-colors cursor-default">
            © 2024 ORBIT DEEP SPACE EXPLORATION
          </span>
          <div className="flex space-x-8">
            <Link
              href="#"
              className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors"
            >
              Mission Log
            </Link>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />

      <style jsx global>{`
        .sphere-glow {
          box-shadow: 0 0 100px rgba(0, 242, 255, 0.2),
            inset 0 0 50px rgba(0, 242, 255, 0.4);
        }
        .bg-particles {
          background-image: radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(0, 242, 255, 0.03) 0%, transparent 50%);
        }
        .hotspot-line {
          background: linear-gradient(
            90deg,
            rgba(0, 242, 255, 0.8) 0%,
            transparent 100%
          );
        }
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-1 {
          transition-delay: 0.1s;
        }
        .stagger-2 {
          transition-delay: 0.2s;
        }
        .stagger-3 {
          transition-delay: 0.3s;
        }
        .glow-card {
          background: rgba(18, 19, 26, 0.6);
          border: 1px solid rgba(0, 242, 255, 0.1);
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        .glow-card:hover {
          border-color: rgba(0, 242, 255, 0.5);
          box-shadow: 0 0 20px rgba(0, 242, 255, 0.1);
        }
        #background-explorer {
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.5s ease;
        }
      `}</style>
    </div>
  );
}