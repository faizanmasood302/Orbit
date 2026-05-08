'use client';

import { useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useOrbitStore } from '@/store/orbit';

export function ThemeToggle() {
  const theme       = useOrbitStore((s) => s.theme);
  const toggleTheme = useOrbitStore((s) => s.toggleTheme);

  // Sync data-theme attribute + localStorage on every change
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('orbit-theme', theme);
  }, [theme]);

  // Read persisted preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('orbit-theme') as 'dark' | 'light' | null;
    if (saved && saved !== theme) toggleTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-full border border-white/15 hover:border-white/30
                 text-white/70 hover:text-white transition-all"
    >
      {theme === 'dark'
        ? <Sun  size={16} strokeWidth={2} />
        : <Moon size={16} strokeWidth={2} />}
    </button>
  );
}
