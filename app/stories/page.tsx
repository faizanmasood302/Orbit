import Link from 'next/link';
import { Chatbot } from '@/components/ui/Chatbot';

const storiesStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #00f2ff;
    border-radius: 10px;
  }
`;

export default function Stories() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: storiesStyles }} />
      <div className="bg-[#050505] text-on-surface min-h-screen relative overflow-x-hidden flex flex-col">
        <div className="fixed inset-0 pointer-events-none z-[-2]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#121212] to-[#050505]" />
        </div>

        <nav className="fixed top-0 w-full z-50 bg-[#121212]/40 backdrop-blur-[30px] border-b border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
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
              <Link href="/stories" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-[#00f2ff] border-t-2 border-[#00f2ff] pt-1">
                Stories
              </Link>
              <Link href="/connect" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
                Connect
              </Link>
              <Link href="/impact" className="font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold text-white/60 hover:text-[#00f2ff] hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-colors duration-300">
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

        <main className="flex-grow relative z-10 pt-32 pb-40 px-16 max-w-[1440px] mx-auto min-h-screen custom-scrollbar">
          <header className="mb-20 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary-container"></div>
              <span className="font-label-caps text-primary-container">MISSION LOG ARCHIVES</span>
            </div>
            <h1 className="font-h1 text-h1 text-white max-w-3xl">
              Echoes from the <span className="text-primary-container">Frontier</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              First-hand accounts from those who dared to breach the horizon. Real data, real voices, real exploration.
            </p>
          </header>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <div className="break-inside-avoid glass-card p-10 group relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary-container select-none">format_quote</span>
              </div>
              <p className="font-h3 text-h3 text-white mb-8 leading-tight italic">
                "The silence of the Jovian clouds isn't empty. It's heavy with the weight of absolute eternity. Orbit made sure I felt safe while I was feeling small."
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-container/30">
                  <img className="w-full h-full object-cover" alt="Commander Vega" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1wSkIG9bu50lm2ahWIS5bH3GFMMfhnstJTVw7Ijtu-_uqoduQCx2ikSXxw_OkGz7sBVbhZ6A90I0KQv8s2B4OggAuIRJHB_ar-3ya82Cn2plPi4h8VKS9dHpkmSoNgFgIiNrtCt2ZDN5tk-KE2UwLuJjcSezIhTUHt2hFIi1PZHxNxFtGL4mLuCBQ6EDnXxGUujcQ613x4KQ7FoBhc5K_BaR2ubtIitwGzTZ57LGX1T27P2vyDlgGwhldi3Yli_wAA8lQx4IZcK4" />
                </div>
                <div>
                  <div className="font-label-caps text-white">COMMANDER VEGA</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-primary-container">EUROPA EXPEDITION VII</div>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid glass-card p-10 group relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary-container select-none">format_quote</span>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                "Navigating the Saturnian rings requires more than math; it requires intuition. The HUD interface on our Orbit vessels felt like an extension of my own nervous system. Precise. Predictable. Perfect."
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-container/30">
                  <img className="w-full h-full object-cover" alt="Dr. Elara Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3VwHlg6IixFbzbjlzwiUR81tnBwP0m_zCBqs-4r7mEjGox58Tayk-r0nZDvZOCTdmLHyuCFjyPdazgBhCbXb6IkwVS5suOTr5pO2jWBUwNVfAyzfhE4GbBeiqvjtHNs4Y9I6BZeYlA6UDPV3m2vyUGpFkb28JcOdRHtqe37BPzLUR_k1PeAMWR1jCbYUIrk_LDBL8lWoWRMnWTSX7S7TTXxQtaHk69x5p4MIYg4T9oaoe8ZiRx5KIG69WhaiXrXIJJeEMFq3zYnQ" />
                </div>
                <div>
                  <div className="font-label-caps text-white">DR. ELARA VANCE</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-primary-container">ASTROPHYSICS DIVISION</div>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid glass-card p-10 group relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary-container select-none">format_quote</span>
              </div>
              <p className="font-body-lg text-body-lg text-white mb-8">
                "They call it the Dead Zone for a reason. But with Orbit's life support redundancy, I spent six months in the void without a single alarm trigger. That's the luxury of trust."
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-container/30">
                  <img className="w-full h-full object-cover" alt="Captain Markos" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0WWsdX9zBcZNPyU2IORVG3gRXAcRNxyUn68rhklhRrz6NPskNDHLHCw4FVQ7vG_-lXSN8GZVJm0CR647bDNwlWFZnS3tsAoxhKgd89Cizg5RuGbtTmaVofXK0BRS5Z2DJhLPKStRxZPfyFE-318sORY5gne7dd5MEj18VQQ43MXr8yE10JFF81iPoQPm4yLwbk3_ynqvBqjPkZ9K6J7WcV1p7L0GtSajsO66j1xMT8aZ8ZUsKuHd-UeH8Bu1QpQ3ohKzDvUOpviQ" />
                </div>
                <div>
                  <div className="font-label-caps text-white">CAPTAIN MARKOS</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-primary-container">LONG-RANGE SCOUT</div>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid glass-card p-10 group relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary-container select-none">format_quote</span>
              </div>
              <p className="font-h3 text-h3 text-white mb-8 leading-tight">
                "We didn't just find water on Mars. We found home. Orbit made the transition seamless."
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-container/30">
                  <img className="w-full h-full object-cover" alt="Operative Kai" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOY1Zoesma7kIXXlhf2jTjLq7qf3Pu0Lb6L8xnEElmQnwVLxmPEgHu5Fzldphzda6gfWWwZAoeRcKNB27pLjUWUp12zi8M6Y18QZr3Fj2jF_8l9jv4C_WR2H3Hu4D0Ju2QlDO04IUWTo1mFqx9MM8YohNXvhihfvA4WvqPYsSn7eTFAO4SMFZ2x4DKCf0BMuwKYmSoDYjvFTuIRvneCMN5pcp9axApL9g9ovA9kcu6It6uZqrg7vF-zhPoBTcBR2dlTyYHa3XN6RY" />
                </div>
                <div>
                  <div className="font-label-caps text-white">OPERATIVE KAI</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-primary-container">COLONIZATION SPECIALIST</div>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid glass-card p-10 group relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary-container select-none">format_quote</span>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                "The view from the cupola at 40,000 km is something you can't describe. Orbit's optical shielding is so clear you forget there's a hull between you and the stars. It's terrifyingly beautiful."
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-container/30">
                  <img className="w-full h-full object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCraV4VszwIkg9k__o_AVkKl03tLWTnOgKoL_ElrmrgesaMh3WxJHHmbkXYzEFWTI02HOAG3nMsjx1fvLaRYGRqZG26KzbUXkIYvCTiuzZsEjOJnZfpVsAqEfoga79tfpdtc0FMEUbTxMn_y7a8vTR-3dMYFgUNKY4gwt0lMY2hTqZZr7jVg50856W1eP0v7KmRx1iW7pCAWd_0Gpl80XmFyxnin71YN6OcuB7_IFzU7YbdQRQpzRtnbSl8_O7JRpj5Y1SvDwkODag" />
                </div>
                <div>
                  <div className="font-label-caps text-white">SARAH JENKINS</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-primary-container">CIVILIAN PIONEER</div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-12 left-16 z-40 group cursor-pointer">
          <div className="relative w-20 h-20 rounded-full bg-[#121212]/80 backdrop-blur-xl border border-white/20 flex items-center justify-center overflow-hidden group-hover:border-[#00f2ff] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/20 to-transparent opacity-50"></div>
            <img className="w-16 h-16 rounded-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" alt="Mini globe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsEtbcEoLbEG8CXhETJhukpsPuOOj7yBGwRg3mKBSSOPcPx14T6uKDT049A1FlzE9tfUCpQG5I5B7dApr2jn0oA3Cy-6K74RgEy2bX3A9H_D1YhtvksdqAcVkk27kOQgkzeVDW1q95Lto0zpPE5Ri47c3KOKAPKHxfgigbOFDDBwLRXjdKyhP80NHXc7M1luULvHzYWt8ZHcx4ApYPOS0laalN9ul8bE2AZ0xkurepOtITaRruodcIK2Kn6aONT5rlT3J9uBM1Huo" />
            <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-full"></div>
          </div>
          <div className="absolute left-24 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-label-caps text-[10px] text-primary-container">RETURN TO HUB</span>
          </div>
        </div>

        <footer className="w-full py-8 border-t border-white/5 bg-transparent relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-[1440px] mx-auto opacity-50 hover:opacity-100 ease-in-out duration-300">
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