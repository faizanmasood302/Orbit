import Link from 'next/link';
import { Chatbot } from '@/components/ui/Chatbot';

const SERVICES = [
  {
    icon: 'rocket_launch',
    title: 'Payload Deployment',
    description: 'Precision insertion into Low Earth Orbit (LEO) and beyond. Accommodating delicate scientific instruments and commercial satellites.',
    action: 'Initialize sequence',
  },
  {
    icon: 'radar',
    title: 'Telemetry Tracking',
    description: 'Continuous deep-space network monitoring providing real-time positional data, thermal status, and systems health.',
    action: 'Access relay',
  },
  {
    icon: 'satellite_alt',
    title: 'Habitation Modules',
    description: 'Modular, scalable orbital structures designed for extended human occupation or automated manufacturing. Equipped with advanced closed-loop life support systems and reinforced micrometeoroid shielding.',
    action: 'View schematics',
    wide: true,
  },
  {
    icon: 'memory',
    title: 'AI Flight Systems',
    description: 'Autonomous navigation and collision avoidance protocols powered by quantum processing cores.',
    action: 'Compile code',
  },
  {
    icon: 'solar_power',
    title: 'Energy Capture',
    description: 'High-efficiency photovoltaic arrays and microwave beaming technologies for sustained power generation in vacuum.',
    action: 'Monitor grid',
  },
];

export default function Offerings() {
  return (
    <div className="bg-[#050505] text-on-background min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-[-2]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#121212] to-[#050505]" />
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      </div>
      
      <div className="fixed bottom-0 left-0 w-96 h-96 -translate-x-1/4 translate-y-1/4 z-[-1] opacity-60 mix-blend-screen pointer-events-none">
        <img 
          alt="Globe" 
          className="w-full h-full object-cover rounded-full drop-shadow-[0_0_40px_rgba(0,242,255,0.3)]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuABJTX-l06LfgTg50Nz6MNWRHmmLQz1YtuTQSGeuhMAs2bDE5w91QFJB4wB6RPnuBXzl-JJjClFU0eZckeva6zv0ImzxXizTCuusNkJ5iT2FeDRcC6j612n6LRD8C3dNJ1cp2GtiF1hptC4lMl4vQBz_XccQ0S0-f53wrY0ojr9ZWwXdgBPMQoNciwKRShMIP0jzzWEG01APXgIjGpkvfapsieVOzglZHq_BjoKOY4G-rECTdlqsEiNwvfnfDctULE2rmGU8m5ga-U"
        />
      </div>

      <nav className="fixed top-0 w-full z-50 bg-[#121212]/40 backdrop-blur-[30px] border-b border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all cubic-bezier(0.4,0,0.2,1) duration-500">
        <div className="flex justify-between items-center px-16 h-20 max-w-[1440px] mx-auto hidden md:flex">
          <Link href="/" className="text-2xl font-black tracking-tighter text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]">
            ORBIT
          </Link>
          <div className="flex space-x-8">
            <Link href="/about" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] flex flex-col justify-center h-20">
              About
            </Link>
            <Link href="/offerings" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1 flex flex-col justify-center h-20 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              Offerings
            </Link>
            <Link href="/stories" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] flex flex-col justify-center h-20">
              Stories
            </Link>
            <Link href="/connect" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] flex flex-col justify-center h-20">
              Connect
            </Link>
            <Link href="#" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] flex flex-col justify-center h-20">
              Impact
            </Link>
          </div>
          <div className="flex space-x-4">
            <button className="text-white/60 hover:text-[#00f2ff] transition-colors duration-300 focus:outline-none">
              <span className="material-symbols-outlined text-[20px]">language</span>
            </button>
            <button className="text-white/60 hover:text-[#00f2ff] transition-colors duration-300 focus:outline-none">
              <span className="material-symbols-outlined text-[20px]">settings</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center px-6 h-20 md:hidden border-b border-white/5">
          <Link href="/" className="text-2xl font-black tracking-tighter text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]">
            ORBIT
          </Link>
          <button className="text-white/60 hover:text-[#00f2ff] transition-colors duration-300 focus:outline-none">
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-24 px-6 md:px-margin max-w-container-max mx-auto w-full relative z-10 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex flex-col justify-start pt-12 md:sticky md:top-32 h-fit">
          <h1 className="font-h1 text-h1 text-white mb-6 leading-tight">
            Orbital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-surface-tint">Services</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mb-8">
            Access our constellation of deep space capabilities. Designed for precision, speed, and absolute reliability in zero-gravity environments.
          </p>
          <div className="h-px w-16 bg-primary-container/30 mb-8 hidden md:block" />
        </div>

        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-[#121212]/40 backdrop-blur-[20px] border border-white/10 rounded-DEFAULT p-8 transition-all duration-500 hover:border-primary-container hover:bg-[#121212]/60 overflow-hidden cursor-pointer ${
                  service.wide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/5 transition-colors duration-500 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-container/10 rounded-full blur-[40px] group-hover:bg-primary-container/20 transition-colors duration-700 pointer-events-none" />
                {service.wide && (
                  <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[60px] group-hover:bg-primary-container/10 transition-colors duration-700 pointer-events-none transform -translate-y-1/2" />
                )}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 flex items-center justify-center rounded-DEFAULT bg-white/5 border border-white/10 mb-6 group-hover:border-primary-container/50 group-hover:bg-primary-container/10 transition-all duration-300">
                    <span className="material-symbols-outlined text-white/80 group-hover:text-primary-container transition-colors duration-300">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-white mb-3 group-hover:text-primary-container transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center text-primary-container opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="font-label-caps text-label-caps uppercase mr-2 tracking-widest">
                      {service.action}
                    </span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="w-full py-8 bg-transparent border-t border-white/5 mt-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-[1440px] mx-auto opacity-50 hover:opacity-100 ease-in-out duration-300">
          <div className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 md:mb-0">
            © 2024 ORBIT DEEP SPACE EXPLORATION
          </div>
          <div className="flex space-x-6">
            <a className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors" href="#">Mission Log</a>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}