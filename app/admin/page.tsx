import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

const SECTIONS = [
  { key: 'about',     label: 'About'    },
  { key: 'offerings', label: 'Services' },
  { key: 'stories',   label: 'Stories'  },
  { key: 'connect',   label: 'Contact'  },
  { key: 'impact',    label: 'Impact'   },
] as const;

async function saveSection(formData: FormData) {
  'use server';
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const section = String(formData.get('section'));
  const title   = String(formData.get('title')).trim();
  const body    = String(formData.get('body')).trim();

  if (!title || !body) return;

  await supabase.from('site_content').upsert({
    section, title, body, updated_at: new Date().toISOString(),
  }, { onConflict: 'section' });

  revalidatePath('/');
  revalidatePath('/admin');
}

async function signOut() {
  'use server';
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: rows } = await supabase.from('site_content').select('*');
  const content = Object.fromEntries((rows ?? []).map((r) => [r.section, r]));

  return (
    <div className="min-h-screen bg-[#050510] text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">Orbit Admin</h1>
          <p className="text-white/40 text-xs">{user.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
            ← View Site
           </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="px-4 py-1.5 text-sm border border-white/15 rounded-lg text-white/60
                         hover:border-white/30 hover:text-white transition-all"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <p className="text-white/40 text-sm">
          Edit the content below and click <strong className="text-white/70">Save</strong> to update your site instantly.
        </p>

        {SECTIONS.map(({ key, label }) => {
          const c = content[key];
          return (
            <form key={key} action={saveSection} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <input type="hidden" name="section" value={key} />
              <h2 className="font-semibold text-white/80">{label}</h2>

              <div>
                <label className="block text-xs text-white/40 mb-1">Title</label>
                <input
                  name="title"
                  defaultValue={c?.title ?? ''}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/15 rounded-lg text-white text-sm
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1">Body</label>
                <textarea
                  name="body"
                  defaultValue={c?.body ?? ''}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-white/5 border border-white/15 rounded-lg text-white text-sm
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex items-center justify-between">
                {c?.updated_at && (
                  <span className="text-white/25 text-xs">
                    Last saved: {new Date(c.updated_at).toLocaleString()}
                  </span>
                )}
                <button
                  type="submit"
                  className="ml-auto px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm
                             font-semibold transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          );
        })}
      </main>
    </div>
  );
}
