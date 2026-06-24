'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { api } from '@/lib/api';

const SECTIONS = [
  { key: 'about',     label: 'About'    },
  { key: 'offerings', label: 'Services' },
  { key: 'connect',   label: 'Contact'  },
] as const;

const CONTENT_FIELDS = ['title', 'body'] as const;

interface SectionData {
  id: string;
  title: string;
  body: string;
  updated_at?: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [sections, setSections] = useState<Record<string, SectionData>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    api.loadToken();
    if (!api['token']) {
      router.push('/login');
      return;
    }
    api.me()
      .then(setUser)
      .catch(() => router.push('/login'));
    api.getSiteContent()
      .then((rows) => {
        const map: Record<string, SectionData> = {};
        for (const row of rows) {
          const c = row.content as Record<string, string>;
          map[row.section] = {
            id: row.id,
            title: c.title || '',
            body: c.body || '',
          };
        }
        setSections(map);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [router]);

  async function saveSection(section: string) {
    const data = sections[section];
    if (!data) return;

    const form = document.querySelector(`form[data-section="${section}"]`) as HTMLFormElement;
    if (!form) return;
    const fd = new FormData(form);
    const title = (fd.get('title') as string)?.trim() || '';
    const body = (fd.get('body') as string)?.trim() || '';
    if (!title || !body) return;

    setSaving(section);
    try {
      await api.updateSiteContent(data.id, { title, body });
      setSections((prev) => ({
        ...prev,
        [section]: { ...prev[section], title, body, updated_at: new Date().toISOString() },
      }));
      toast.success(`${section} saved`);
    } catch {
      toast.error('Failed to save. Check your connection.');
    } finally {
      setSaving(null);
    }
  }

  async function handleSignOut() {
    api.setToken(null);
    router.push('/login');
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-on-surface-variant">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="border-b border-outline-variant/30 px-6 py-4 flex items-center justify-between bg-white/60 backdrop-blur-xl">
        <div>
          <h1 className="text-lg font-bold">Orbit Admin</h1>
          <p className="text-on-surface-variant text-xs">{user.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
            {'\u2190'} View Site
          </Link>
          <button
            onClick={handleSignOut}
            className="px-4 py-1.5 text-sm border border-outline-variant rounded-lg text-on-surface-variant
                       hover:border-primary hover:text-primary transition-all"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <p className="text-on-surface-variant text-sm">
          Edit the content below and click <strong className="text-on-surface">Save</strong> to update your site instantly.
        </p>

        {SECTIONS.map(({ key, label }) => {
          const c = sections[key];
          return (
            <form
              key={key}
              data-section={key}
              onSubmit={(e) => { e.preventDefault(); saveSection(key); }}
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              <h2 className="font-semibold text-on-surface">{label}</h2>

              {CONTENT_FIELDS.map((field) => (
                <div key={field}>
                  <label className="block text-xs text-on-surface-variant mb-1 uppercase tracking-wider">
                    {field}
                  </label>
                  {field === 'body' ? (
                    <textarea
                      name={field}
                      defaultValue={c?.[field] ?? ''}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white/60 border border-outline-variant rounded-lg text-on-surface text-sm
                                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  ) : (
                    <input
                      name={field}
                      defaultValue={c?.[field] ?? ''}
                      required
                      className="w-full px-3 py-2 bg-white/60 border border-outline-variant rounded-lg text-on-surface text-sm
                                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between">
                {c?.updated_at && (
                  <span className="text-on-surface-variant/50 text-xs">
                    Saved: {new Date(c.updated_at).toLocaleString()}
                  </span>
                )}
                <button
                  type="submit"
                  disabled={saving === key}
                  className="ml-auto px-5 py-2 bg-primary hover:opacity-90 disabled:opacity-50 text-on-primary
                             rounded-lg text-sm font-semibold transition-all"
                >
                  {saving === key ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          );
        })}
      </main>
    </div>
  );
}
