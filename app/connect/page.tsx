import Link from 'next/link';
import { Chatbot } from '@/components/ui/Chatbot';

export default function Connect() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col relative overflow-x-hidden">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#121212]/40 backdrop-blur-[30px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all cubic-bezier(0.4,0,0.2,1) duration-500">
        <div className="flex justify-between items-center px-16 h-20 max-w-[1440px] mx-auto">
          {/* Brand Logo */}
          <div className="font-['Space_Grotesk'] text-2xl font-black tracking-tighter text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]">
            <Link href="/">ORBIT</Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 h-full items-center">
            <Link href="/about" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              About
            </Link>
            <Link href="/offerings" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              Offerings
            </Link>
            <Link href="/stories" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              Stories
            </Link>
            <Link href="/connect" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1 h-full flex items-center">
              Connect
            </Link>
            <Link href="/impact" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              Impact
            </Link>
          </div>
          {/* Trailing Icons */}
          <div className="flex space-x-4">
            <span className="material-symbols-outlined text-white/60 hover:text-[#00f2ff] cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" data-icon="language">language</span>
            <span className="material-symbols-outlined text-white/60 hover:text-[#00f2ff] cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" data-icon="settings">settings</span>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center relative pt-20 pb-16 px-6">
        {/* Shrunken Globe Background Element (Bottom Left) */}
        <div className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] opacity-30 pointer-events-none z-0 mix-blend-screen">
          <img alt="Globe graphic" className="w-full h-full object-cover rounded-full filter contrast-125 saturate-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvuRrQ_HTQX-xcW5RUfZ5ivXzT7O-pNvUTXRsHtFkGPwEtkcAep5pF0ywgTXb2R0cZILDbCDmFXZhdH6lxY9YYjdM96x_Dn4T2CPG_pYxwZibA-nUHsYVKPLBoPS07cRLLJwlb5ebymg332MT8GY480oVUEQCkgGzQNy_sutVrkuPvSjKYswOi_yGGeV4A2k85_PjYiB0zNpa-Sf3VYbdws93zHkbAubYTSzjSDgVKC0rN5Lm0rFttfcxUKAjwkAFVAeEJniEIcgI"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background rounded-full"></div>
        </div>

        {/* Contact Form Container (Glassmorphism) */}
        <div className="glass-panel w-full max-w-[600px] p-12 md:p-16 z-10 relative mt-8">
          <div className="mb-12">
            <h1 className="font-h2 text-h2 text-on-surface mb-4">INITIALIZE COMM-LINK</h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">Transmit your coordinates and inquiry. Our orbital command team will intercept and respond.</p>
          </div>
          <form className="space-y-10">
            {/* Name Field */}
            <div className="input-group relative">
              <input className="block w-full bg-transparent border-0 border-b border-white/20 text-on-surface font-body-md py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors peer" id="designation" placeholder=" " required type="text"/>
              <label className="absolute top-2 left-0 font-label-caps text-label-caps text-white/40 uppercase transition-all duration-300 pointer-events-none" htmlFor="designation">Operator Designation (Name)</label>
            </div>
            {/* Email Field */}
            <div className="input-group relative">
              <input className="block w-full bg-transparent border-0 border-b border-white/20 text-on-surface font-body-md py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors peer" id="frequency" placeholder=" " required type="email"/>
              <label className="absolute top-2 left-0 font-label-caps text-label-caps text-white/40 uppercase transition-all duration-300 pointer-events-none" htmlFor="frequency">Comm Frequency (Email)</label>
            </div>
            {/* Message Field */}
            <div className="input-group relative">
              <textarea className="block w-full bg-transparent border-0 border-b border-white/20 text-on-surface font-body-md py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors peer resize-none" id="transmission" placeholder=" " required rows={3}></textarea>
              <label className="absolute top-2 left-0 font-label-caps text-label-caps text-white/40 uppercase transition-all duration-300 pointer-events-none" htmlFor="transmission">Transmission Payload (Message)</label>
            </div>
            {/* Submit Button */}
            <div className="pt-6">
              <button className="w-full bg-primary-container text-black font-label-caps text-label-caps py-4 px-8 tracking-widest hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] hover:bg-[#74f5ff] transition-all duration-300 flex items-center justify-center space-x-2" type="button">
                <span>TRANSMIT SIGNAL</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/5 bg-transparent opacity-50 hover:opacity-100 ease-in-out duration-300 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-[1440px] mx-auto">
          <div className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 md:mb-0">
            © 2024 ORBIT DEEP SPACE EXPLORATION
          </div>
          <div className="flex space-x-8">
            <a className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors" href="#">Mission Log</a>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}
