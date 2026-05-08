'use client';

import { SectionPanel } from '@/components/ui/SectionPanel';
import { orbitConfig } from '@/lib/orbitConfig';
import { TrendingUp, Users, Zap, Clock } from 'lucide-react';

interface Props {
  content?: { title: string; body: string } | null;
}

const STATS = [
  { icon: TrendingUp, value: '3×', label: 'Longer on-site', sub: 'vs. static websites', color: 'var(--orbit-accent)' },
  { icon: Users, value: '60%', label: 'More shares', sub: 'memorable = viral', color: 'var(--orbit-highlight)' },
  { icon: Zap, value: '2×', label: 'Higher conversions', sub: 'engagement → action', color: 'var(--orbit-accent)' },
  { icon: Clock, value: '< 3s', label: 'Load time', sub: 'fast on any device', color: 'var(--orbit-warm)' },
];

export function Impact({ content }: Props) {
  const title = content?.title ?? orbitConfig.sections.impact.title;

  return (
    <SectionPanel title={title}>
      {content?.body
        ? <p className="text-white/50 mb-8 leading-relaxed text-base">{content.body}</p>
        : <p className="text-white/50 mb-8 leading-relaxed text-base">Interactive websites drive dramatically better results. When visitors are genuinely engaged, they stay longer, share more, and convert at a higher rate.</p>
      }
      <div className="grid grid-cols-2 gap-4">
        {STATS.map(({ icon: Icon, value, label, sub, color }, i) => (
          <div
            key={label}
            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--orbit-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--orbit-accent)]/20 to-[var(--orbit-highlight)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon size={20} style={{ color }} />
              </div>
              <div className="text-4xl font-black mb-2 font-['Syne']" style={{ color }}>{value}</div>
              <div className="text-white text-sm font-semibold font-['Syne']">{label}</div>
              <div className="text-white/40 text-xs mt-1">{sub}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-white/25 text-xs mt-6">
        Figures based on industry data on interactive vs. static web experiences.
      </p>
    </SectionPanel>
  );
}