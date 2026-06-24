'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await api.login(email, password);
      api.setToken(res.access_token);
      router.push('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#050510] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 mb-4">
            <span className="text-indigo-400 text-xl">✦</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Orbit Admin</h1>
          <p className="text-white/40 text-sm mt-1">Sign in to manage your content</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/60 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-lg text-white
                           placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-indigo-500
                           focus:border-transparent transition-all"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/60 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-lg text-white
                           placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-indigo-500
                           focus:border-transparent transition-all"
                placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold
                         transition-colors disabled:opacity-50 mt-2"
            >
              {loading ? 'Signing in\u2026' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-white/25 text-xs mt-6">
           <Link href="/" className="hover:text-white/50 transition-colors">\u2190 Back to site</Link>
        </p>
      </div>
    </div>
  );
}
