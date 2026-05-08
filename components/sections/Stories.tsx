'use client';

import { SectionPanel } from '@/components/ui/SectionPanel';
import { orbitConfig } from '@/lib/orbitConfig';
import { Coffee, Heart, ShoppingBag, Building2, Home, GraduationCap, ArrowRight } from 'lucide-react';

interface Props {
  content?: { title: string; body: string } | null;
}

const INDUSTRIES = [
  { icon: Coffee, name: 'Cafes & Restaurants', line: 'Show your menu, vibe, and ambiance — interactively.' },
  { icon: Heart, name: 'Clinics & Healthcare', line: 'Build trust with patients before they even walk in.' },
  { icon: ShoppingBag, name: 'E-Commerce Stores', line: '3D product showcases that convert browsers into buyers.' },
  { icon: Building2, name: 'Consultants & Agencies', line: 'Signal expertise and premium quality instantly.' },
  { icon: Home, name: 'Real Estate', line: 'Virtual property tours that feel truly immersive.' },
  { icon: GraduationCap, name: 'Schools & Academies', line: 'Engage students and parents with a campus they can explore.' },
];

export function Stories({ content }: Props) {
  const title = content?.title ?? orbitConfig.sections.stories.title;

  return (
    <SectionPanel title={title}>
      {content?.body
        ? <p className="text-white/50 mb-8 leading-relaxed text-base">{content.body}</p>
        : <p className="text-white/50 mb-8 leading-relaxed text-base">Orbit works for any business that wants to stand out online. If you have customers visiting your website, Orbit turns passive visitors into active explorers.</p>
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {INDUSTRIES.map(({ icon: Icon, name, line }) => (
          <div
            key={name}
            className="group flex items-start gap-4 p-5 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-[var(--orbit-accent)]/30 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--orbit-accent)]/20 to-[var(--orbit-highlight)]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Icon size={22} className="text-[var(--orbit-accent)]" />
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-base mb-1 font-['Syne']">{name}</div>
              <div className="text-white/45 text-sm leading-relaxed">{line}</div>
            </div>
            <ArrowRight size={18} className="text-white/20 group-hover:text-[var(--orbit-accent)] group-hover:translate-x-1 transition-all shrink-0" />
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}