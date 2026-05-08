'use client';

import { useRef, useEffect, type ReactNode } from 'react';
import { useGlobeStore } from '@/store/orbit';
import { X } from 'lucide-react';

interface SectionPanelProps {
  title: string;
  onBack?: () => void;
  children: ReactNode;
}

export function SectionPanel({ title, onBack, children }: SectionPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const setSection = useGlobeStore((s) => s.spinGlobeTo);

  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.style.opacity = '0';
      panelRef.current.style.transform = 'translateY(30px) scale(0.95)';
      requestAnimationFrame(() => {
        panelRef.current?.animate(
          [
            { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' },
          ],
          { duration: 400, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' }
        );
      });
    }
  }, []);

  function handleBack() {
    setSection(null);
    onBack?.();
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg" onClick={handleBack} />

      <div
        ref={panelRef}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-2xl p-8 md:p-10 border border-white/[0.08]"
        style={{ background: 'linear-gradient(180deg, rgba(20, 20, 35, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--orbit-accent)] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--orbit-highlight)] to-transparent opacity-50 blur-sm" />
        
        <button
          onClick={handleBack}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/40 hover:text-white transition-all duration-300 hover:rotate-90"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight font-['Syne'] tracking-tight">
          {title}
        </h2>
        
        <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--orbit-accent)] via-[var(--orbit-highlight)] to-[var(--orbit-warm)] rounded-full mb-8" />

        {children}
      </div>
    </div>
  );
}