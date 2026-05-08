import Link from 'next/link';
import { Chatbot } from '@/components/ui/Chatbot';

export default function About() {
  return (
    <div className="bg-background text-on-background min-h-screen relative overflow-hidden flex flex-col">
      {/* Ambient Space Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00f2ff]/5 via-background to-background" />

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#121212]/40 backdrop-blur-[30px] border-b border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all cubic-bezier(0.4,0,0.2,1) duration-500">
        <div className="flex justify-between items-center px-16 h-20 max-w-[1440px] mx-auto">
          <Link href="/" className="text-2xl font-black tracking-tighter text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.8)] font-h1">
            ORBIT
          </Link>
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/about" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
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
            <Link href="/impact" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
              Impact
            </Link>
            <Link href="#" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
              Impact
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-[#00f2ff]">
            <button className="hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
              <span className="material-symbols-outlined">language</span>
            </button>
            <button className="hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 pt-32 pb-24 px-margin max-w-container-max mx-auto w-full flex flex-col justify-center min-h-screen">
        {/* Shrunken Globe Visualization */}
        <div className="absolute bottom-12 left-12 w-64 h-64 rounded-full border border-white/5 bg-[#121212]/40 backdrop-blur-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden z-0 hidden lg:block opacity-50">
          <img 
            alt="Globe graphic" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQMODG1Ptmwytxpell-RGON4ij5Q7zpl89ayLwGO80dYfhNJOxZ5VCQ2yJXyS0Rg-JLh-kVzOaNdGQUN8W5NaBAseZl6IwMhV5oWXpMJMxwRLVZzW4nurFaiiKqMSUAJEUg7j8uxwDxOAqDXSVL1B3X26_WMfBCHBQeNIQRWuf2QaUPcWbHFdkov01gL2EZ-kWp0Jjx3z7KsojWQathm9kEffa3OJHpO83huKrK9jCTsZhqHyQjWGzCuKMkb13YKfIz6dbh-x4gb8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10 items-center">
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-5 lg:col-start-2 z-10 mb-12 lg:mb-0">
            <div className="inline-flex flex-col">
              <span className="font-label-caps text-label-caps text-primary-container mb-6 tracking-[0.2em] opacity-80 uppercase relative">
                <span className="absolute -left-8 top-1/2 w-4 h-px bg-primary-container"></span>
                Mission Directive
              </span>
              <h1 className="font-h1 text-h1 text-on-background uppercase relative">
                OUR<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background to-surface-variant">COSMOS</span>
              </h1>
            </div>
          </div>

          {/* Right Column: Sleek Paragraph */}
          <div className="lg:col-span-5 lg:col-start-7 z-10">
            <div className="bg-[#121212]/40 backdrop-blur-[20px] border border-white/10 rounded-DEFAULT p-10 hover:border-primary-container transition-colors duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.8)] group">
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                We are charting the unknown, moving beyond the boundaries of standard atmosphere to pioneer deep space ecosystems. Our mission is not merely exploration, but the establishment of permanent, sustainable infrastructure in the void.
              </p>
              <p className="font-body-md text-body-md text-on-secondary-container mb-10 opacity-70">
                Leveraging next-generation propulsion and zero-gravity architectural frameworks, ORBIT connects humanity to the stars, engineering a future where distance is no longer a barrier.
              </p>
              <button className="bg-primary-container text-[#050505] font-label-caps text-label-caps px-8 py-4 rounded-DEFAULT uppercase hover:shadow-[0_0_15px_rgba(0,242,255,0.8)] transition-shadow duration-300 inline-flex items-center space-x-3">
                <span>Explore Blueprint</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-transparent border-t border-white/5 opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-300 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-[1440px] mx-auto">
          <div className="mb-4 md:mb-0">
            <p className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/40">
              © 2024 ORBIT DEEP SPACE EXPLORATION
            </p>
          </div>
          <div className="flex space-x-8">
            <Link href="#" className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[#00f2ff] transition-colors duration-300">Mission Log</Link>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}