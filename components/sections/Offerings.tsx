'use client';

import { SectionPanel } from '@/components/ui/SectionPanel';
import { orbitConfig } from '@/lib/orbitConfig';
import { Check } from 'lucide-react';

interface Props {
  content?: { title: string; body: string } | null;
}

const PACKAGES = [
  {
    name: 'Custom',
    badge: 'Premium',
    price: 'Custom quote',
    color: 'var(--orbit-accent)',
    desc: 'Fully bespoke 3D website designed from scratch around your brand identity and goals.',
    items: ['Custom 3D globe design', 'AI agent (Aria) trained on your content', 'Unlimited sections', 'Priority support'],
  },
  {
    name: 'Template',
    badge: 'Affordable',
    price: 'From $499',
    color: 'var(--orbit-highlight)',
    desc: 'Launch a beautiful Orbit site in days using our proven templates — fast, polished, and ready to go.',
    items: ['Pre-built globe & sections', 'Your logo, colors & copy', 'Admin dashboard', '30-day support'],
  },
  {
    name: 'Subscription',
    badge: 'Flexible',
    price: 'From $49/mo',
    color: 'var(--orbit-warm)',
    desc: 'Hosting, updates, and ongoing improvements — we keep your Orbit site running perfectly, every month.',
    items: ['Managed hosting', 'Monthly content updates', 'Performance monitoring', 'Cancel anytime'],
  },
];

export function Offerings({ content }: Props) {
  const title = content?.title ?? orbitConfig.sections.offerings.title;

  return (
    <SectionPanel title={title}>
      {content?.body && <p className="text-white/50 mb-8 leading-relaxed text-base">{content.body}</p>}
      <div className="space-y-4">
        {PACKAGES.map(({ name, badge, price, color, desc, items }) => (
          <div
            key={name}
            className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--orbit-accent)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg text-white font-['Syne']">{name}</span>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: `${color}20`, color }}
                  >
                    {badge}
                  </span>
                </div>
                <span className="text-lg font-semibold font-['Syne']" style={{ color }}>{price}</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-xs text-white/40 bg-white/5 px-2.5 py-1 rounded-lg">
                    <Check size={12} style={{ color }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}