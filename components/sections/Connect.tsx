'use client';

import { useState } from 'react';
import { SectionPanel } from '@/components/ui/SectionPanel';
import { submitContact } from '@/actions';
import { orbitConfig } from '@/lib/orbitConfig';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface Props {
  content?: { title: string; body: string } | null;
}

const INDUSTRIES = [
  'Cafe / Restaurant', 'Clinic / Healthcare', 'E-Commerce', 'Consultant / Agency',
  'Real Estate', 'Gym / Fitness', 'School / Academy', 'Other',
];

export function Connect({ content }: Props) {
  const title = content?.title ?? orbitConfig.sections.connect.title;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const fd = new FormData(e.currentTarget);
    const industry = fd.get('industry') as string;
    const msg = `Industry: ${industry}\n\n${fd.get('message')}`;
    fd.set('message', msg);
    const result = await submitContact(Object.fromEntries(fd));
    setStatus(result.success ? 'success' : 'error');
  }

  return (
    <SectionPanel title={title}>
      {content?.body
        ? <p className="text-white/50 mb-8 leading-relaxed text-base">{content.body}</p>
        : <p className="text-white/50 mb-8 leading-relaxed text-base">Tell us about your business and what you want to achieve. We respond within one business day.</p>
      }

      {status === 'success' ? (
        <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl text-center">
          <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={28} className="text-green-400" />
          </div>
          <div className="text-white font-semibold text-lg font-['Syne'] mb-2">Message sent!</div>
          <div className="text-white/40 text-sm">We'll be in touch within 24 hours.</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/40 mb-2">Your Name</label>
              <input
                name="name" type="text" required
                placeholder="Jane Smith"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                           placeholder:text-white/25 focus:outline-none focus:border-[var(--orbit-accent)] focus:ring-2 focus:ring-[var(--orbit-accent)]/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/40 mb-2">Email Address</label>
              <input
                name="email" type="email" required
                placeholder="jane@company.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                           placeholder:text-white/25 focus:outline-none focus:border-[var(--orbit-accent)] focus:ring-2 focus:ring-[var(--orbit-accent)]/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-white/40 mb-2">Your Industry</label>
            <select
              name="industry"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                         focus:outline-none focus:border-[var(--orbit-accent)] focus:ring-2 focus:ring-[var(--orbit-accent)]/20 transition-all appearance-none cursor-pointer"
            >
              {INDUSTRIES.map((i) => <option key={i} value={i} className="bg-[#080814]">{i}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-white/40 mb-2">Tell us about your project</label>
            <textarea
              name="message" required rows={4} minLength={10}
              placeholder="What does your business do? What are you trying to achieve?"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                         placeholder:text-white/25 focus:outline-none focus:border-[var(--orbit-accent)] focus:ring-2 focus:ring-[var(--orbit-accent)]/20
                         transition-all resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 bg-gradient-to-r from-[var(--orbit-accent)] to-[#7c3aed] hover:opacity-90 text-white rounded-xl font-semibold
                       transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </SectionPanel>
  );
}