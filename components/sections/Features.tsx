'use client';

import { Globe, Bot, Gauge, Shield, Sparkles, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: Globe,
    title: '3D Orb Navigation',
    description: 'Immersive Three.js-powered cosmic sphere with smooth animations and interactive nodes.',
    colSpan: 'col-span-2',
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    icon: Bot,
    title: 'AI Assistant "Aria"',
    description: 'Neural-powered conversational interface trained on your enterprise data.',
    colSpan: 'col-span-1',
    color: '#bc00ff',
    gradient: 'from-purple-500/20 to-violet-500/10',
  },
  {
    icon: Gauge,
    title: 'Hyperspeed Load',
    description: 'Optimized 3D rendering with progressive enhancement and lazy loading.',
    colSpan: 'col-span-1',
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Secure Enclave',
    description: 'Military-grade encryption, GDPR compliance, and zero-trust architecture.',
    colSpan: 'col-span-2',
    color: '#bc00ff',
    gradient: 'from-purple-500/20 to-violet-500/10',
  },
  {
    icon: Sparkles,
    title: 'Neural Generation',
    description: 'AI-driven content synthesis with real-time optimization.',
    colSpan: 'col-span-1',
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    icon: Zap,
    title: 'Telemetry Dashboard',
    description: 'Real-time engagement metrics and conversion analytics.',
    colSpan: 'col-span-1',
    color: '#bc00ff',
    gradient: 'from-purple-500/20 to-violet-500/10',
  },
];

export function Features() {
  return (
    <section id="features" className="relative z-20 py-28 bg-[var(--orbit-void)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold tracking-widest text-[var(--orbit-accent)] uppercase mb-6 font-['Space_Grotesk']">
            <Sparkles size={14} className="text-[var(--orbit-accent)]" />
            System Modules
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk'] mb-5 tracking-tight">
            Command Center <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade components engineered for immersive digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, description, colSpan, color, gradient }, i) => (
            <div
              key={title}
              className={`group relative p-7 rounded-xl bg-[#0a0a1a]/60 border border-white/[0.06] hover:border-white/15 backdrop-blur-md transition-all duration-500 animate-fade-up ${colSpan}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div 
                  className="w-13 h-13 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                  style={{ border: `1px solid ${color}30` }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <h3 className="text-white font-semibold text-lg font-['Space_Grotesk'] mb-2.5 group-hover:text-white/90 transition-colors">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}