'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/social', label: 'Social' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/20 shadow-sm shadow-primary/5">
      <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link href="/" className="font-display-lg text-headline-md font-extrabold text-primary tracking-tighter">
          Orbit
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-body-md text-body-md transition-colors ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex font-label-md text-label-md px-6 py-2.5 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-all active:scale-95"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="font-label-md text-label-md px-6 py-2.5 rounded-full bg-primary text-on-primary shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
