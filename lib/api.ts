const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

class OrbitAPI {
  private token: string | null = null;

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('orbit_token', token);
    } else {
      localStorage.removeItem('orbit_token');
    }
  }

  loadToken() {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('orbit_token');
    }
  }

  private headers(): Record<string, string> {
    const h: Record<string, string> = { 'Content-Type': 'application/json' };
    if (this.token) h['Authorization'] = 'Bearer ' + this.token;
    return h;
  }

  private async request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const res = await fetch(API_URL + path, {
      method,
      headers: this.headers(),
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: res.statusText }));
      throw new Error(err.detail || 'API error');
    }
    return res.json();
  }

  get<T>(path: string) { return this.request<T>('GET', path); }
  post<T>(path: string, body?: unknown) { return this.request<T>('POST', path, body); }
  put<T>(path: string, body?: unknown) { return this.request<T>('PUT', path, body); }

  register(email: string, password: string, name?: string) {
    return this.post<{ access_token: string; user: { id: string; email: string; name: string | null } }>(
      '/api/auth/register', { email, password, name }
    );
  }

  login(email: string, password: string) {
    return this.post<{ access_token: string; user: { id: string; email: string; name: string | null } }>(
      '/api/auth/login', { email, password }
    );
  }

  me() { return this.get<{ id: string; email: string; name: string | null }>('/api/auth/me'); }

  chat(messages: { role: string; content: string }[]) {
    return this.post<{ response: string; session_id: string }>('/api/chat', { messages });
  }

  async *chatStream(messages: { role: string; content: string }[]): AsyncGenerator<{ t?: string; type?: string; name?: string; session_id?: string }> {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const text = decoder.decode(value, { stream: true });
      if (text) yield { t: text };
    }
  }

  getSiteContent(page?: string) {
    const qs = page ? '?page=' + encodeURIComponent(page) : '';
    return this.get<{ id: string; page: string; section: string; content: unknown }[]>(
      '/api/site-content' + qs
    );
  }

  updateSiteContent(id: string, content: Record<string, unknown>) {
    return this.put<{ id: string }>('/api/site-content/' + id, { content });
  }

  submitContact(name: string, email: string, message?: string) {
    return this.post<{ id: string }>('/api/contacts', { name, email, message });
  }
}

export const api = new OrbitAPI();
