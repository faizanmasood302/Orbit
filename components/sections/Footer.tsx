'use client';

import Link from 'next/link';
import { orbitConfig } from '@/lib/orbitConfig';
import { Code2, MessageSquare, Link2, Mail, ArrowUp } from 'lucide-react';

const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#offerings' },
    { label: 'Templates', href: '#stories' },
    { label: 'Showcase', href: '#impact' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#testimonials' },
    { label: 'Careers', href: '#contact' },
    { label: 'Contact', href: '#connect' },
  ],
  Resources: [
    { label: 'Documentation', href: '#features' },
    { label: 'API Reference', href: '#features' },
    { label: 'Status', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
  ],
};

const SOCIALS = [
  { icon: Code2, href: 'https://github.com', label: 'GitHub' },
  { icon: MessageSquare, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Link2, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@orbitai.io', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-[var(--orbit-bg)] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✦</span>
              <span className="text-white font-bold text-lg font-['Syne']">{orbitConfig.brand.name}</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered 3D interactive websites that turn visitors into customers.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm font-['Syne'] mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-white/35 text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm">
            © {currentYear} {orbitConfig.brand.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}