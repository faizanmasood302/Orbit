import Link from 'next/link';
import { Chatbot } from '@/components/ui/Chatbot';

const impactStyles = `
  @keyframes orbital-rotate {
    from { transform: rotate(45deg); }
    to { transform: rotate(405deg); }
  }
  @keyframes orbital-pulse {
    0%, 100% { opacity: 0.1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(1.05); }
  }
  .animate-orbital-rotate {
    animation: orbital-rotate 20s linear infinite;
  }
  .animate-orbital-pulse {
    animation: orbital-pulse 4s ease-in-out infinite;
  }
`;

export default function Impact() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: impactStyles }} />
      <div className="bg-background text-on-surface min-h-screen relative overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00f2ff]/15 via-background to-background" />

        <nav className="fixed top-0 w-full z-50 bg-[#121212]/40 backdrop-blur-[30px] border-b border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all cubic-bezier(0.4,0,0.2,1) duration-500">
          <div className="flex justify-between items-center px-16 h-20 max-w-[1440px] mx-auto">
            <Link href="/" className="text-2xl font-black tracking-tighter text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.8)] font-h1">
              ORBIT
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/about" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
                About
              </Link>
              <Link href="/offerings" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
                Offerings
              </Link>
<Link href="/stories" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
              Stories
            </Link>
            <Link href="/connect" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
                Connect
              </Link>
              <Link href="/impact" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1">
                Impact
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-[#00f2ff]">
              <button className="hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-all">
                <span className="material-symbols-outlined">language</span>
              </button>
              <button className="hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </nav>

        <main className="flex-grow relative z-10 pt-20">
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover opacity-20 mix-blend-screen grayscale" alt="Earth from deep space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY_L2kYRGHSN1LZguCYPVXgtKpYNFePJRdS1UU64pe5r-zuej2vym70E2ZXdXCEYb9FJo6nwXao3LnMWORMxYRbujIV8nKexUmg2JsW-yr1tSy3aO_94dUTor5FKUJVYRs2kd01yX_WbY5KnvTJ-QMoq4FIXiV3PO6_GBtcHLD0FDK7J9KzGUSJOyxPP4Mx4m2YJ8Nj-8mK9Oz_jBtwVoYx338rLbSOdmMnhl0YLrjI8BaeP0K9I4uQ-mnHVSZzU6M_72doq9r0ng"/>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[800px] h-[800px] border border-[#00f2ff]/20 rounded-full animate-orbital-pulse"></div>
                <div className="absolute w-[600px] h-[600px] border border-[#00f2ff]/10 rounded-full rotate-45 animate-orbital-rotate"></div>
              </div>
            </div>
            <div className="relative z-10 text-center px-16 max-w-[1440px]">
              <h1 className="font-h1 text-h1 text-on-surface mb-6 glow-accent uppercase tracking-tighter">Measuring Our Reach</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Deep space exploration isn't just about the destination; it's about the data that bridges worlds.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#00f2ff] text-black px-12 py-4 font-label-caps hover:shadow-[0_0_25px_rgba(0,242,255,0.8)] transition-all duration-300">
                  EXPLORE THE DATA
                </button>
              </div>
            </div>
          </section>

          <section className="py-32 px-16 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="glass-panel p-12 group hover:border-[#00f2ff] transition-all duration-500">
                <span className="font-label-caps text-[#00f2ff] mb-4 block">NETWORK VOLUME</span>
                <h2 className="font-h2 text-h2 text-on-surface mb-2">12.4B</h2>
                <p className="font-body-md text-on-surface-variant">Terabytes Processed via our quantum link relays across the inner rim.</p>
                <div className="h-1 w-0 group-hover:w-full bg-[#00f2ff] mt-8 transition-all duration-700"></div>
              </div>
              <div className="glass-panel p-12 mt-12 md:mt-24 group hover:border-[#00f2ff] transition-all duration-500">
                <span className="font-label-caps text-[#00f2ff] mb-4 block">TERRAFORMING STATUS</span>
                <h2 className="font-h2 text-h2 text-on-surface mb-2">42</h2>
                <p className="font-body-md text-on-surface-variant">Active Colonies currently maintaining life-support systems under ORBIT protocol.</p>
                <div className="h-1 w-0 group-hover:w-full bg-[#00f2ff] mt-8 transition-all duration-700"></div>
              </div>
              <div className="glass-panel p-12 group hover:border-[#00f2ff] transition-all duration-500">
                <span className="font-label-caps text-[#00f2ff] mb-4 block">SYSTEM RELIABILITY</span>
                <h2 className="font-h2 text-h2 text-on-surface mb-2">99.9%</h2>
                <p className="font-body-md text-on-surface-variant">Uptime across all critical deep-space communication channels.</p>
                <div className="h-1 w-0 group-hover:w-full bg-[#00f2ff] mt-8 transition-all duration-700"></div>
              </div>
            </div>
          </section>

          <section className="py-32 bg-surface-container-lowest/50">
            <div className="px-16 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4">
                <h2 className="font-h2 text-h2 text-on-surface mb-8">GLOBAL<br/>RESONANCE</h2>
                <p className="font-body-md text-on-surface-variant mb-8">
                  ORBIT's presence spans the terrestrial and the stellar. Our ground stations coordinate with 14 orbital hubs to ensure seamless data transmission regardless of atmospheric interference.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="font-label-caps">LUNAR ARCHIVE</span>
                    <span className="text-[#00f2ff] font-bold">ONLINE</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="font-label-caps">MARS NODE-7</span>
                    <span className="text-[#00f2ff] font-bold">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="font-label-caps">TITAN RELAY</span>
                    <span className="text-[#00f2ff]/40">CONNECTING</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 relative rounded-xl overflow-hidden glass-panel aspect-video">
                <img className="w-full h-full object-cover opacity-40 grayscale" alt="Global Command Center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5yjnKOZtY8PWUnFBDx063uJwt0bflxHHtltAQicCY2eKnZBZRCeuFr1u0mkUEFZAJF9aBLHcNNp7a5AZCEvHJ2H37t9yRY8F8a76KiCX6pyBiUaAokH7_Caeas9bBWiEZDBlmJ1f5ecBOnRVw2lgY4tSWP00EU9doAt4MjEaqkFEsP6tB9nU-xbYTB2-LzUWpodTJBqGa5zmpZoKXqFF3B5Pcec3I0-zVwJWew7c3CujEXjD-TqaOZsmfll-fpu-T5dSOqq1dpmg"/>
                <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-[#00f2ff] rounded-full animate-ping"></div>
                <div className="absolute top-[45%] left-[55%] w-3 h-3 bg-[#00f2ff] rounded-full animate-ping"></div>
                <div className="absolute top-[60%] left-[80%] w-5 h-5 bg-[#00f2ff] rounded-full animate-ping"></div>
              </div>
            </div>
          </section>

          <section className="py-32 px-16 max-w-[1440px] mx-auto">
            <h2 className="font-h2 text-h2 text-center mb-24 glow-accent">MISSION TIMELINE</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10"></div>
              <div className="space-y-32">
                <div className="flex items-center justify-between w-full">
                  <div className="w-5/12 text-right">
                    <span className="font-label-caps text-[#00f2ff] mb-2 block">2021.Q3</span>
                    <h3 className="font-h3 text-h3 text-on-surface mb-4">ORBIT Genesis</h3>
                    <p className="font-body-md text-on-surface-variant">The initial deployment of the quantum entanglement communication array in low Earth orbit.</p>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-[#00f2ff] rounded-full shadow-[0_0_15px_rgba(0,242,255,1)]"></div>
                  <div className="w-5/12"></div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-5/12"></div>
                  <div className="relative z-10 w-4 h-4 bg-[#00f2ff] rounded-full shadow-[0_0_15px_rgba(0,242,255,1)]"></div>
                  <div className="w-5/12 text-left">
                    <span className="font-label-caps text-[#00f2ff] mb-2 block">2022.Q1</span>
                    <h3 className="font-h3 text-h3 text-on-surface mb-4">Lunar Gateway</h3>
                    <p className="font-body-md text-on-surface-variant">Establishment of the permanent data relay station on the Shackleton Crater rim.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-5/12 text-right">
                    <span className="font-label-caps text-[#00f2ff] mb-2 block">2023.Q4</span>
                    <h3 className="font-h3 text-h3 text-on-surface mb-4">Deep Reach</h3>
                    <p className="font-body-md text-on-surface-variant">The first signal successfully echoed from the Jovian atmospheric probes to Earth in under 2 seconds.</p>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-[#00f2ff] rounded-full shadow-[0_0_15px_rgba(0,242,255,1)]"></div>
                  <div className="w-5/12"></div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full py-8 border-t border-white/5 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-[1440px] mx-auto">
            <div className="mb-4 md:mb-0">
              <p className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/40">
                © 2024 ORBIT DEEP SPACE EXPLORATION
              </p>
            </div>
            <div className="flex space-x-8">
              <Link href="#" className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-[#00f2ff]">Mission Log</Link>
            </div>
          </div>
        </footer>

        <Chatbot />
      </div>
    </>
  );
}