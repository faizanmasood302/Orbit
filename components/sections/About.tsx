'use client';

import { SectionPanel } from '@/components/ui/SectionPanel';
import { orbitConfig } from '@/lib/orbitConfig';
import { Globe2, Sparkles, Zap, Settings } from 'lucide-react';

interface Props {
  content?: { title: string; body: string } | null;
}

const PILLARS = [
  { icon: Globe2, heading: 'Born from a real problem', text: 'Static websites lose visitors in seconds. Orbit keeps them engaged for minutes.', color: '#a855f7' },
  { icon: Sparkles, heading: 'Interaction = attention', text: 'When visitors spin the globe and explore, they remember you. That\'s the Orbit difference.', color: '#22d3ee' },
  { icon: Zap, heading: 'Fast to launch', text: 'Template-based Orbit sites go live in days, not months — without sacrificing quality.', color: '#fb923c' },
  { icon: Settings, heading: 'You stay in control', text: 'Edit any section from your admin dashboard — no developer needed, ever.', color: '#a855f7' },
];

export function About({ content }: Props) {
  const title = content?.title ?? orbitConfig.sections.about.title;
  const body = content?.body ?? 'Most business websites today are boring, flat, and look the same. Orbit fixes that by turning your online presence into a highly engaging 3D experience visitors actually want to explore.';

  return (
    <SectionPanel title={title}>
      <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-2xl">{body}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PILLARS.map(({ icon: Icon, heading, text, color }, i) => (
          <div 
            key={heading} 
            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-500 hover:bg-white/[0.04]"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex gap-5">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)`, border: `1px solid ${color}30` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div>
                <div className="text-white font-semibold text-base mb-2 font-['Syne']">{heading}</div>
                <div className="text-white/45 text-sm leading-relaxed">{text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}