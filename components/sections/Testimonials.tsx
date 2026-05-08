'use client';

import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Our bounce rate dropped by 60% after launching Orbit. Visitors now spend 3x longer on our site exploring the 3D globe.",
    author: "Sarah Chen",
    role: "CEO, Coffee Collective",
    avatar: "SC",
  },
  {
    quote: "Aria, the AI assistant, handles 80% of our customer inquiries automatically. It's like having a 24/7 team member.",
    author: "Michael Torres",
    role: "Founder, DentalCare Plus",
    avatar: "MT",
  },
  {
    quote: "We went from generic website to award-winning. The 3D experience immediately communicated our premium positioning.",
    author: "Emma Richardson",
    role: "Director, Luxe Properties",
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="relative z-20 py-24 bg-[var(--orbit-bg)] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-['Syne'] mb-4">
            Loved by <span className="gradient-text">businesses</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            See what our customers have to say about their Orbit experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, author, role, avatar }, i) => (
            <div
              key={author}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[var(--orbit-accent)]/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--orbit-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <Quote size={32} className="text-[var(--orbit-accent)] mb-4 opacity-50" />
                <p className="text-white/70 text-base leading-relaxed mb-6">{quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--orbit-accent)] to-[var(--orbit-highlight)] flex items-center justify-center text-white text-sm font-semibold">
                    {avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm font-['Syne']">{author}</div>
                    <div className="text-white/40 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}