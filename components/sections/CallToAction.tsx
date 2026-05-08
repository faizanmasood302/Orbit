'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { useGlobeStore } from '@/store/orbit';

export function CallToAction() {
  const spinGlobeTo = useGlobeStore((s) => s.spinGlobeTo);

  return (
    <section className="relative z-20 py-24 bg-[var(--orbit-bg)] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--orbit-accent)] rounded-full opacity-10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--orbit-highlight)] rounded-full opacity-10 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[var(--orbit-accent)] mb-6">
          <Sparkles size={14} />
          Start Building
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white font-['Syne'] mb-6 leading-tight">
          Ready to transform your <span className="gradient-text">online presence</span>?
        </h2>
        
        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
          Join the future of web design. Get a custom 3D website that captures attention and drives results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => spinGlobeTo('connect')}
            className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
          >
            Get Started
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => spinGlobeTo('offerings')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white/70 hover:text-white text-base font-medium transition-colors"
          >
            View Pricing →
          </button>
        </div>
      </div>
    </section>
  );
}