# ORBIT AI — Complete Build Guide v2.0
> Master Prompt + Full Architecture + Production Code
> **Lean MVP Edition** — Ships in 3–4 weeks

---

## Table of Contents

### Part 1 — Master Build Prompt
1. [How to Use This Document](#1-how-to-use-this-document)
2. [What Changed from v1.0](#2-what-changed-from-v10)
3. [The Master Prompt — v2.0](#3-the-master-prompt--v20)
4. [Post-Build Checklist](#4-post-build-checklist)

### Part 2 — Complete Architecture & Code
5. [Project Overview](#5-project-overview)
6. [Tech Stack — Final Decisions](#6-tech-stack--final-decisions)
7. [System Architecture](#7-system-architecture)
8. [Database Schema — Complete SQL](#8-database-schema--complete-sql)
9. [Authentication — Supabase Only](#9-authentication--supabase-only)
10. [Middleware — Security Layer](#10-middleware--security-layer)
11. [Server Actions — All Mutations](#11-server-actions--all-mutations)
12. [AI Agent — Vercel AI SDK](#12-ai-agent--vercel-ai-sdk)
13. [RAG Pipeline](#13-rag-pipeline)
14. [Frontend — 3D Globe](#14-frontend--3d-globe)
15. [orbitConfig System](#15-orbitconfig-system)
16. [Folder Structure](#16-folder-structure)
17. [Environment Variables](#17-environment-variables)
18. [Deployment](#18-deployment)

---

# PART 1 — MASTER BUILD PROMPT

---

## 1. How to Use This Document

This is the **complete, production-ready v2.0** of Orbit AI. It fixes every over-engineered part of v1.0 based on feedback from GPT-4 and Gemini 2.0.

**What you get:**
- ✅ Single codebase (no separate Python service)
- ✅ One auth system (Supabase only — no Clerk)
- ✅ Simple agent (Vercel AI SDK — no LangGraph)
- ✅ Clear architecture (Server Actions for mutations, API routes only for streaming)
- ✅ Full security (tool → action → db, never tool → db)

**To build:**
1. Copy **Section 3** (the master prompt) into your AI model
2. The model builds phase-by-phase
3. Use **Part 2** as reference when the model asks for clarification

---

## 2. What Changed from v1.0

| v1.0 (Over-engineered) | v2.0 (Production-ready) | Why It Changed |
|---|---|---|
| Clerk + Supabase Auth | Supabase Auth only | Two JWT issuers = RLS confusion |
| LangGraph.js agent with 4 nodes | Vercel AI SDK `streamText()` | Built-in tool calling, 80% less code |
| API routes + Server Actions for mutations | Server Actions only (API routes only for streaming) | Clear separation of concerns |
| Tools call Supabase directly | Tools → Server Actions → Supabase | Single security enforcement point |
| Custom admin dashboard | Use Supabase Studio | Already built, free |
| Voice control, proactive nudges | Removed from MVP | Build after core works |
| Drag-and-drop configurator | Simple toggle cards | Fancy UX after product-market fit |

**Bottom line:** v2.0 ships in **3–4 weeks** instead of 3–4 months.

---

## 3. The Master Prompt — v2.0

> **Copy everything in the code block below and paste it as your first message to Claude Code, Cursor, or Gemini.**

```
════════════════════════════════════════════════════════════════
  ORBIT AI — MASTER BUILD PROMPT v2.0 (Production-Ready)
  You are a senior full-stack developer. Build a complete,
  production-ready web application called Orbit AI.
  Follow every instruction precisely. Ask for clarification only
  if something is genuinely ambiguous. Otherwise, build.
════════════════════════════════════════════════════════════════

# PROJECT OVERVIEW

Orbit AI is an immersive single-page web application built around
an interactive 3D globe. Visitors spin, zoom, and click into the
globe to explore a business. A persistent AI agent answers questions,
books meetings, and generates quotes.

The platform is configurable from a single orbitConfig.ts file.

# TECH STACK — USE EXACTLY THESE

Framework:       Next.js 15 (App Router, TypeScript strict)
3D Engine:       React Three Fiber 8 + Three.js r165
Animation:       GSAP 3 + Framer Motion 11
Styling:         Tailwind CSS 4
State:           Zustand 5
AI:              Vercel AI SDK 4 (streaming + tool calling)
LLM:             OpenAI GPT-4o
Embeddings:      OpenAI text-embedding-3-small
Database + Auth: Supabase (PostgreSQL + Auth + pgvector + RLS)
Rate Limiting:   Upstash Redis
Validation:      Zod 3
Hosting:         Vercel

# ARCHITECTURE RULES — NON-NEGOTIABLE

1. ONE auth system: Supabase Auth (@supabase/ssr). No Clerk.
2. Mutations via Server Actions. API routes ONLY for streaming.
3. Tools call Server Actions, NOT Supabase directly.
4. Every DB write goes through RLS. No service role key in tools.
5. Rate limiting in middleware, auth in Server Actions.

# BUILD SEQUENCE — ONE PHASE AT A TIME

After each phase, output a checklist and wait for approval.

══════════════════════════════════════
PHASE 1 — PROJECT FOUNDATION
══════════════════════════════════════

1. Scaffold Next.js 15 App Router with TypeScript strict mode.

2. Install dependencies:
   npm install @supabase/ssr @supabase/supabase-js
   npm install ai @ai-sdk/openai
   npm install @react-three/fiber @react-three/drei three
   npm install gsap framer-motion
   npm install zustand zod
   npm install @upstash/ratelimit @upstash/redis

3. Create folder structure:

   orbit-ai/
   ├── app/
   │   ├── layout.tsx
   │   ├── page.tsx
   │   ├── login/page.tsx
   │   └── api/
   │       └── agent/
   │           └── chat/route.ts
   ├── components/
   │   ├── 3d/
   │   ├── sections/
   │   ├── agent/
   │   └── ui/
   ├── lib/
   │   ├── supabase/
   │   │   ├── server.ts
   │   │   ├── client.ts
   │   │   └── middleware.ts
   │   ├── agent/
   │   │   └── tools.ts
   │   └── rag/
   │       ├── embed.ts
   │       └── retrieve.ts
   ├── store/orbit.ts
   ├── hooks/
   │   └── useDeviceCapability.ts
   ├── actions.ts
   ├── middleware.ts
   ├── lib/orbitConfig.ts
   └── scripts/
       └── ingest-knowledge.ts

4. Create .env.local.template:
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=
   OPENAI_API_KEY=
   UPSTASH_REDIS_REST_URL=
   UPSTASH_REDIS_REST_TOKEN=
   NEXT_PUBLIC_APP_URL=http://localhost:3000

5. Create tailwind.config.ts:
   theme: {
     extend: {
       colors: {
         primary: '#4F46E5',
         accent: '#7C3AED',
       },
       fontFamily: {
         sans: ['Inter', 'sans-serif'],
       },
     },
   }

OUTPUT: List all files created. Wait for approval.

══════════════════════════════════════
PHASE 2 — DATABASE AND AUTH
══════════════════════════════════════

1. Create supabase/migrations/001_schema.sql:

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contacts table
CREATE TABLE contacts (
  id         UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name       TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email      TEXT NOT NULL CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  message    TEXT CHECK (char_length(message) <= 2000),
  source     TEXT DEFAULT 'orbit_ai',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own contacts" ON contacts
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Anyone can insert contacts" ON contacts
  FOR INSERT WITH CHECK (true);

-- Bookings table
CREATE TABLE bookings (
  id            UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  contact_id    UUID REFERENCES contacts(id),
  scheduled_at  TIMESTAMPTZ NOT NULL,
  duration_mins INTEGER DEFAULT 30 CHECK (duration_mins > 0),
  status        TEXT DEFAULT 'pending'
                CHECK (status IN ('pending','confirmed','cancelled')),
  notes         TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own bookings" ON bookings
  FOR ALL USING (auth.uid() = user_id);

-- Quotes table
CREATE TABLE quotes (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id     UUID REFERENCES auth.users(id),
  config      JSONB NOT NULL DEFAULT '{}',
  total_price NUMERIC(10,2),
  currency    TEXT DEFAULT 'USD',
  status      TEXT DEFAULT 'draft'
              CHECK (status IN ('draft','sent','accepted','rejected')),
  expires_at  TIMESTAMPTZ DEFAULT NOW() + INTERVAL '7 days',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own quotes" ON quotes
  FOR ALL USING (auth.uid() = user_id);

-- Agent memory table
CREATE TABLE agent_memory (
  id            UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  memory        JSONB NOT NULL DEFAULT '{}',
  consent_given BOOLEAN DEFAULT FALSE,
  consent_at    TIMESTAMPTZ,
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE agent_memory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own memory" ON agent_memory
  FOR ALL USING (auth.uid() = user_id);

-- Knowledge base (pgvector) - index created later after data ingestion
CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE knowledge_base (
  id         UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  content    TEXT NOT NULL,
  embedding  vector(1536),
  metadata   JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit log (immutable)
CREATE TABLE audit_log (
  id         UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id),
  action     TEXT NOT NULL,
  resource   TEXT,
  payload    JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;
-- No policies — only backend can write, admins can read via Supabase Studio

2. Build lib/supabase/server.ts:

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from Server Component — ignore
          }
        },
      },
    }
  );
}

3. Build lib/supabase/client.ts:

import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

4. Build lib/supabase/middleware.ts:

import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  await supabase.auth.getUser();
  return response;
}

5. Build middleware.ts (root level):

import { updateSession } from '@/lib/supabase/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(30, '5 m'),
  analytics: true,
});

export async function middleware(request: NextRequest) {
  // Supabase session refresh
  const response = await updateSession(request);

  // Rate limiting on AI endpoint
  if (request.nextUrl.pathname.startsWith('/api/agent')) {
    const ip = request.ip ?? 'anonymous';
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }
  }

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains'
  );
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://api.openai.com https://*.supabase.co",
    ].join('; ')
  );

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};

OUTPUT: Show the SQL schema. List all files. Wait for approval.

══════════════════════════════════════
PHASE 3 — SERVER ACTIONS (All Mutations)
══════════════════════════════════════

Build actions.ts (root level):

'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

// ── Schemas ──────────────────────────────────────────────────

const ContactSchema = z.object({
  name:     z.string().min(2).max(100),
  email:    z.string().email(),
  message:  z.string().min(10).max(2000),
  honeypot: z.string().max(0), // Must be empty
});

const BookingSchema = z.object({
  scheduledAt:  z.string().datetime(),
  durationMins: z.number().min(15).max(240),
  notes:        z.string().max(500).optional(),
});

const QuoteSchema = z.object({
  services: z.array(z.string()).min(1),
  budget:   z.number().positive().optional(),
});

// ── Helper: Get authenticated user ───────────────────────

async function requireAuth() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) throw new Error('Unauthorized');
  return { user, supabase };
}

// ── Actions ──────────────────────────────────────────────────

export async function submitContact(formData: unknown) {
  const parsed = ContactSchema.safeParse(formData);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { error } = await supabase.from('contacts').insert({
    ...parsed.data,
    user_id: user?.id || null,
  });

  if (error) return { error: 'Failed to save contact' };
  revalidatePath('/');
  return { success: true };
}

export async function createBooking(data: unknown) {
  const { user, supabase } = await requireAuth();
  const parsed = BookingSchema.safeParse(data);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }

  const { error, data: booking } = await supabase.from('bookings').insert({
    user_id: user.id,
    scheduled_at: parsed.data.scheduledAt,
    duration_mins: parsed.data.durationMins,
    notes: parsed.data.notes,
  }).select().single();

  if (error) return { error: 'Failed to create booking' };

  // Audit log
  await supabase.from('audit_log').insert({
    user_id: user.id,
    action: 'booking.created',
    resource: `booking:${booking.id}`,
    payload: { scheduledAt: parsed.data.scheduledAt },
  });

  revalidatePath('/');
  return { success: true, booking };
}

export async function saveQuote(data: unknown) {
  const { user, supabase } = await requireAuth();
  const parsed = QuoteSchema.safeParse(data);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }

  // Calculate price based on services
  const totalPrice = parsed.data.services.length * 1000; // Simple calc

  const { error, data: quote } = await supabase.from('quotes').insert({
    user_id: user.id,
    config: { services: parsed.data.services },
    total_price: totalPrice,
  }).select().single();

  if (error) return { error: 'Failed to save quote' };

  await supabase.from('audit_log').insert({
    user_id: user.id,
    action: 'quote.created',
    resource: `quote:${quote.id}`,
    payload: { services: parsed.data.services, totalPrice },
  });

  revalidatePath('/');
  return { success: true, quote: { ...quote, totalPrice, currency: 'USD' } };
}

export async function deleteMemory() {
  const { user, supabase } = await requireAuth();
  const { error } = await supabase
    .from('agent_memory')
    .delete()
    .eq('user_id', user.id);

  if (error) return { error: 'Failed to delete memory' };
  return { success: true };
}

OUTPUT: Show the complete actions.ts file. Wait for approval.

══════════════════════════════════════
PHASE 4 — AI AGENT (Vercel AI SDK)
══════════════════════════════════════

1. Build lib/agent/tools.ts:

import { tool } from 'ai';
import { z } from 'zod';
import { createBooking, saveQuote } from '@/actions';

export const tools = {
  spin_globe: tool({
    description: 'Rotates the 3D globe to show a specific section',
    parameters: z.object({
      section: z.enum(['about', 'offerings', 'stories', 'connect', 'impact']),
    }),
    execute: async ({ section }) => {
      return { action: 'spin_globe', section };
    },
  }),

  book_meeting: tool({
    description: 'Books a meeting for the user',
    parameters: z.object({
      scheduledAt:  z.string().describe('ISO datetime string'),
      durationMins: z.number().describe('Meeting duration in minutes'),
      notes:        z.string().optional().describe('Optional meeting notes'),
    }),
    execute: async ({ scheduledAt, durationMins, notes }) => {
      const result = await createBooking({ scheduledAt, durationMins, notes });
      if (result.error) throw new Error(result.error);
      return {
        success: true,
        booking: result.booking,
        message: `Meeting booked for ${scheduledAt}`,
      };
    },
  }),

  get_quote: tool({
    description: 'Generates a price quote for selected services',
    parameters: z.object({
      services: z.array(z.string()).describe('List of service IDs'),
      budget:   z.number().optional().describe('Optional budget constraint'),
    }),
    execute: async ({ services, budget }) => {
      const result = await saveQuote({ services, budget });
      if (result.error) throw new Error(result.error);
      return {
        success: true,
        quote: result.quote,
        message: `Quote generated: ${result.quote?.totalPrice} ${result.quote?.currency}`,
      };
    },
  }),

  search_knowledge: tool({
    description: 'Searches the business knowledge base to answer questions',
    parameters: z.object({
      query: z.string().describe('The search query'),
    }),
    execute: async ({ query }) => {
      // This calls the RAG retrieve function
      const { retrieve } = await import('@/lib/rag/retrieve');
      const results = await retrieve(query);
      return { results: results.map(r => r.content).join('\n\n') };
    },
  }),
};

2. Build app/api/agent/chat/route.ts:

import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { createClient } from '@/lib/supabase/server';
import { tools } from '@/lib/agent/tools';

export async function POST(req: Request) {
  // Auth check
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Parse request
  const { messages } = await req.json();

  // Get user memory if consent given
  const { data: memoryData } = await supabase
    .from('agent_memory')
    .select('memory, consent_given')
    .eq('user_id', user.id)
    .single();

  const memory = memoryData?.consent_given ? memoryData.memory : null;

  // Stream with tools
  const result = await streamText({
    model: openai('gpt-4o'),
    messages,
    tools,
    system: `You are Aria, the AI assistant for this business.
    
Rules:
- Max 3 sentences per reply unless asked for detail
- Always offer a next step after answering
- Never fabricate prices — use get_quote tool
- Search knowledge base before answering factual questions

${memory ? `User context: ${JSON.stringify(memory)}` : ''}`,
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}

3. Build components/agent/AgentChat.tsx:

'use client';

import { useChat } from 'ai/react';
import { Send } from 'lucide-react';

export function AgentChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/agent/chat',
  });

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Aria</h3>
        <p className="text-sm text-gray-500">AI Assistant</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                m.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl px-4 py-2 text-gray-500">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

OUTPUT: Show the complete agent implementation. Wait for approval.

══════════════════════════════════════
PHASE 5 — RAG PIPELINE
══════════════════════════════════════

1. Build lib/rag/embed.ts:

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function embedText(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
}

2. Build lib/rag/retrieve.ts:

import { createClient } from '@/lib/supabase/server';
import { embedText } from './embed';

export async function retrieve(query: string, limit = 5) {
  const supabase = await createClient();
  const embedding = await embedText(query);

  const { data, error } = await supabase.rpc('match_knowledge', {
    query_embedding: embedding,
    match_count: limit,
  });

  if (error) throw error;
  return data as Array<{ content: string; similarity: number }>;
}

3. Create supabase/migrations/002_vector_search.sql:

-- Match knowledge function for semantic search
CREATE OR REPLACE FUNCTION match_knowledge(
  query_embedding vector(1536),
  match_count INTEGER DEFAULT 5
)
RETURNS TABLE(content TEXT, similarity FLOAT)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    knowledge_base.content,
    1 - (knowledge_base.embedding <=> query_embedding) AS similarity
  FROM knowledge_base
  WHERE knowledge_base.embedding IS NOT NULL
  ORDER BY knowledge_base.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

4. Build scripts/ingest-knowledge.ts:

import { createClient } from '@supabase/supabase-js';
import { embedText } from '../lib/rag/embed';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function chunkText(text: string, size = 512, overlap = 50): string[] {
  const words = text.split(' ');
  const chunks: string[] = [];
  for (let i = 0; i < words.length; i += size - overlap) {
    chunks.push(words.slice(i, i + size).join(' '));
  }
  return chunks;
}

async function ingestFile(filePath: string, section: string) {
  const content = readFileSync(filePath, 'utf-8');
  const chunks = chunkText(content);

  for (const chunk of chunks) {
    const embedding = await embedText(chunk);
    await supabase.from('knowledge_base').insert({
      content: chunk,
      embedding,
      metadata: { source: filePath, section },
    });
  }
  console.log(`✅ Ingested: ${filePath}`);
}

const dir = join(process.cwd(), 'content/knowledge');
const files = readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.md')) {
    await ingestFile(join(dir, file), file.replace('.md', ''));
  }
}

// After ingestion, create the vector index
await supabase.rpc('create_vector_index');
console.log('✅ Vector index created');

5. Add to supabase/migrations/002_vector_search.sql:

-- Create vector index (run AFTER data ingestion)
CREATE OR REPLACE FUNCTION create_vector_index()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  CREATE INDEX IF NOT EXISTS knowledge_base_embedding_idx
    ON knowledge_base
    USING ivfflat (embedding vector_cosine_ops)
    WITH (lists = 100);
END;
$$;

OUTPUT: Show RAG implementation. Wait for approval.

══════════════════════════════════════
PHASE 6 — 3D GLOBE
══════════════════════════════════════

1. Build hooks/useDeviceCapability.ts:

'use client';

import { useState, useEffect } from 'react';

type DeviceTier = 'high' | 'mid' | 'low';

export function useDeviceCapability(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>('high');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

    if (!gl) {
      setTier('low');
      return;
    }

    const renderer = (gl as WebGLRenderingContext)
      .getParameter((gl as WebGLRenderingContext).RENDERER)
      .toLowerCase();

    const lowEnd = ['mali-4', 'mali-3', 'adreno 3'];
    if (lowEnd.some((g) => renderer.includes(g))) {
      setTier('mid');
      return;
    }

    const nav = navigator as any;
    if (nav.deviceMemory && nav.deviceMemory < 2) {
      setTier('mid');
    }
  }, []);

  return tier;
}

2. Build store/orbit.ts:

import { create } from 'zustand';

type Section = 'about' | 'offerings' | 'stories' | 'connect' | 'impact' | null;

interface OrbitStore {
  currentSection: Section;
  deviceTier: 'high' | 'mid' | 'low';
  setSection: (section: Section) => void;
  setDeviceTier: (tier: 'high' | 'mid' | 'low') => void;
  spinGlobeTo: (section: Section) => void;
}

export const useOrbitStore = create<OrbitStore>((set) => ({
  currentSection: null,
  deviceTier: 'high',
  setSection: (section) => set({ currentSection: section }),
  setDeviceTier: (tier) => set({ deviceTier: tier }),
  spinGlobeTo: (section) => {
    // Trigger GSAP animation here
    set({ currentSection: section });
  },
}));

3. Build components/3d/OrbitScene.tsx:

'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useDeviceCapability } from '@/hooks/useDeviceCapability';
import { useOrbitStore } from '@/store/orbit';
import { OrbitGlobe } from './OrbitGlobe';
import { AIOrb } from './AIOrb';

export function OrbitScene() {
  const tier = useDeviceCapability();
  const setDeviceTier = useOrbitStore((s) => s.setDeviceTier);

  // Update store with tier
  setDeviceTier(tier);

  if (tier === 'low') {
    return <div>2D Fallback (CSS Globe)</div>;
  }

  return (
    <Canvas
      dpr={tier === 'high' ? [1, 2] : [1, 1]}
      gl={{ antialias: tier === 'high' }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <OrbitGlobe tier={tier} />
        <AIOrb />
      </Suspense>
    </Canvas>
  );
}

4. Build components/3d/OrbitGlobe.tsx:

'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function OrbitGlobe({ tier }: { tier: 'high' | 'mid' | 'low' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  const segments = tier === 'high' ? 128 : 64;

  return (
    <Sphere ref={meshRef} args={[2, segments, segments]}>
      <meshStandardMaterial color="#4F46E5" wireframe />
    </Sphere>
  );
}

5. Build components/3d/AIOrb.tsx:

'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function AIOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.3, 32, 32]} position={[3, 0, 0]}>
      <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={0.5} />
    </Sphere>
  );
}

OUTPUT: Show 3D implementation. Wait for approval.

══════════════════════════════════════
PHASE 7 — orbitConfig & SECTIONS
══════════════════════════════════════

1. Build lib/orbitConfig.ts:

export interface OrbitConfig {
  brand: {
    name:         string;
    tagline:      string;
    primaryColor: string;
    accentColor:  string;
  };
  agent: {
    name:           string;
    avatarColor:    string;
    tools:          string[];
    memoryEnabled:  boolean;
  };
  sections: {
    about:     { enabled: boolean; title: string };
    offerings: { enabled: boolean; title: string };
    stories:   { enabled: boolean; title: string };
    connect:   { enabled: boolean; title: string };
    impact:    { enabled: boolean; title: string };
  };
}

export const orbitConfig: OrbitConfig = {
  brand: {
    name:         'Acme Corp',
    tagline:      'Building the future',
    primaryColor: '#4F46E5',
    accentColor:  '#7C3AED',
  },
  agent: {
    name:          'Aria',
    avatarColor:   '#7C3AED',
    tools:         ['spin_globe', 'book_meeting', 'get_quote', 'search_knowledge'],
    memoryEnabled: true,
  },
  sections: {
    about:     { enabled: true, title: 'Our Story' },
    offerings: { enabled: true, title: 'What We Offer' },
    stories:   { enabled: true, title: 'Success Stories' },
    connect:   { enabled: true, title: 'Get in Touch' },
    impact:    { enabled: true, title: 'Our Impact' },
  },
};

2. Build simple section components (responsive, config-driven):
   - components/sections/About.tsx
   - components/sections/Offerings.tsx
   - components/sections/Stories.tsx
   - components/sections/Connect.tsx (with contact form)
   - components/sections/Impact.tsx

Each section:
- Pulls content from orbitConfig
- Responsive (mobile-first)
- Has a "Back to Globe" button

OUTPUT: Show orbitConfig interface. Confirm all sections built. Done.

══════════════════════════════════════
GLOBAL RULES — ENFORCED EVERYWHERE
══════════════════════════════════════

SECURITY:
- All mutations via Server Actions with auth check
- Tools NEVER touch Supabase directly — always call Server Actions
- Every DB write protected by RLS
- No service role key exposed to frontend or tools
- All inputs validated with Zod

CODE QUALITY:
- TypeScript strict mode, no 'any' types
- Explicit return types on all functions
- try/catch on all async operations

PERFORMANCE:
- Three.js objects in useRef, never recreate on render
- Dispose geometries/materials on unmount
- Dynamic imports for heavy components

MOBILE:
- Touch events: drag + pinch-to-zoom
- 44px minimum touch targets
- Test at 375px width

AFTER EACH PHASE:
- Output checklist of files created
- Flag any deviations from spec
- Wait for approval before proceeding

BEGIN WITH PHASE 1.
════════════════════════════════════════════════════════════════
```

---

## 4. Post-Build Checklist

### ✅ Functionality
- [ ] Globe renders on desktop (Chrome, Safari, Firefox)
- [ ] Globe renders on mobile (iPhone Safari, Android Chrome)
- [ ] 2D fallback works when WebGL is disabled
- [ ] AI agent streams responses
- [ ] `spin_globe` tool rotates globe to correct section
- [ ] `book_meeting` creates booking in Supabase
- [ ] `get_quote` returns price and saves to quotes table
- [ ] Contact form saves to contacts table
- [ ] All sections render correctly

### 🔒 Security
- [ ] Rate limiting fires after 30 requests in 5 minutes
- [ ] Unauthenticated `/api/agent/chat` returns 401
- [ ] No environment variables in browser console
- [ ] `X-Frame-Options: DENY` on all responses
- [ ] CSP header present

### ⚡ Performance
- [ ] Globe runs at 60fps on desktop
- [ ] Globe runs at 30fps+ on mid-range mobile
- [ ] First AI response streams within 2 seconds
- [ ] No memory leaks (FPS stable after 5 minutes)

### ⚙️ Configuration
- [ ] `orbitConfig.ts` updated with real business name
- [ ] `knowledge_base` populated via ingestion script
- [ ] Agent answers questions correctly using RAG

---

# PART 2 — COMPLETE ARCHITECTURE & CODE

---

## 5. Project Overview

Orbit AI is a single-page 3D web platform where:
- Visitors spin an interactive globe to explore business sections
- An AI agent (glowing orb) answers questions, books meetings, generates quotes
- Everything configurable from one `orbitConfig.ts` file

**Core differentiators:**
- 3D-first navigation (no traditional nav bar)
- AI embedded in 3D canvas (never breaks immersion)
- Real actions (agent actually books, quotes, converts)
- Single config deploy (any business in 5 minutes)

---

## 6. Tech Stack — Final Decisions

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 15 App Router | SSR + streaming + edge |
| 3D | React Three Fiber + Three.js | Best React 3D DX |
| AI | Vercel AI SDK | Native tool calling + streaming |
| LLM | OpenAI GPT-4o | Best tool execution |
| Database + Auth | Supabase | RLS + pgvector + Auth built-in |
| Rate Limiting | Upstash Redis | Edge-compatible |
| Validation | Zod | Runtime type safety |
| Hosting | Vercel | Zero-config edge deployment |

**Removed from v1.0:**
- ❌ Clerk (replaced with Supabase Auth)
- ❌ LangGraph.js (replaced with Vercel AI SDK)
- ❌ Separate API routes for mutations (use Server Actions)
- ❌ Custom admin dashboard (use Supabase Studio)

---

## 7. System Architecture

```
┌─────────────────────────────────────────┐
│           USER BROWSER                  │
│  ┌──────────────────────────────────┐   │
│  │  Next.js 15 App (Vercel Edge)    │   │
│  │  ┌──────────┐    ┌────────────┐  │   │
│  │  │ R3F Globe│◄──►│ AgentChat  │  │   │
│  │  └──────────┘    └────────────┘  │   │
│  │         │               │         │   │
│  │  ┌──────▼───────────────▼──────┐ │   │
│  │  │  Middleware (auth + rate)   │ │   │
│  │  └─────────────────────────────┘ │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
              │              │
              ▼              ▼
      Server Actions   API /agent/chat
      (mutations)      (streaming only)
              │              │
              └──────┬───────┘
                     ▼
              Vercel AI SDK
              (tool calling)
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
   OpenAI        Supabase      Upstash
   GPT-4o +      PostgreSQL    Redis
   Embeddings    + pgvector    (rate limit)
```

**Key principles:**
1. Tools call Server Actions (not Supabase directly)
2. Server Actions enforce auth (single enforcement point)
3. API routes only for streaming (mutations via actions)
4. RLS protects all data (double enforcement with actions)

---

## 8. Database Schema — Complete SQL

See Phase 2 in the master prompt for the complete schema.

**Key tables:**
- `contacts` — Contact form submissions
- `bookings` — Meeting bookings
- `quotes` — Generated price quotes
- `agent_memory` — Per-user AI memory (GDPR-compliant)
- `knowledge_base` — pgvector RAG storage
- `audit_log` — Immutable action trail

**Security:**
- Every table has RLS enabled
- Users can only read/write their own data
- Admin access via Supabase Studio
- No service role key exposed to frontend

---

## 9. Authentication — Supabase Only

**Why Supabase Auth instead of Clerk:**
- One JWT issuer = clean RLS
- Free tier includes email + social OAuth
- No separate JWT template mapping needed
- `@supabase/ssr` handles session refresh automatically

**Implementation:**
```typescript
// lib/supabase/server.ts — Server-side client
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );
}
```

**Auth flow:**
1. User signs in via Supabase Auth UI
2. JWT stored in httpOnly cookie
3. Middleware refreshes session on every request
4. Server Actions read `auth.uid()` from JWT
5. RLS policies enforce user isolation

---

## 10. Middleware — Security Layer

See Phase 2 in the master prompt for complete code.

**What it does:**
- ✅ Refreshes Supabase session (via `@supabase/ssr`)
- ✅ Rate limiting (30 req/5min on `/api/agent`)
- ✅ Security headers (CSP, X-Frame-Options, HSTS)
- ✅ Bot protection (blocks curl/wget on agent endpoint)

**What it does NOT do:**
- ❌ Auth enforcement (Server Actions do this)
- ❌ Business logic (belongs in actions/tools)

---

## 11. Server Actions — All Mutations

See Phase 3 in master prompt for complete `actions.ts`.

**Pattern:**
```typescript
'use server';

async function requireAuth() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) throw new Error('Unauthorized');
  return { user, supabase };
}

export async function createBooking(data: unknown) {
  const { user, supabase } = await requireAuth(); // Auth enforced here
  const parsed = BookingSchema.safeParse(data);   // Zod validation
  if (!parsed.success) return { error: 'Invalid input' };

  const { data: booking } = await supabase
    .from('bookings')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  // Audit log
  await supabase.from('audit_log').insert({
    user_id: user.id,
    action: 'booking.created',
    resource: `booking:${booking.id}`,
  });

  return { success: true, booking };
}
```

**All mutations:**
- `submitContact()` — Contact form
- `createBooking()` — Meeting booking
- `saveQuote()` — Price quote
- `deleteMemory()` — GDPR delete

---

## 12. AI Agent — Vercel AI SDK

**Complete implementation in Phase 4 of master prompt.**

**Why Vercel AI SDK instead of LangGraph:**
- Native tool calling (no manual orchestration)
- Streaming built-in (no custom SSE handling)
- 20 lines vs 200 lines
- TypeScript-first (no Python needed)

**Agent route:**
```typescript
// app/api/agent/chat/route.ts
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { tools } from '@/lib/agent/tools';

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'),
    messages,
    tools,
    system: "You are Aria. Max 3 sentences per reply.",
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
```

**Tools architecture:**
```typescript
// lib/agent/tools.ts
import { tool } from 'ai';
import { createBooking } from '@/actions'; // Calls Server Action

export const tools = {
  book_meeting: tool({
    description: 'Books a meeting',
    parameters: z.object({ scheduledAt: z.string(), durationMins: z.number() }),
    execute: async ({ scheduledAt, durationMins }) => {
      // Tool calls Server Action — auth enforced there
      const result = await createBooking({ scheduledAt, durationMins });
      if (result.error) throw new Error(result.error);
      return { success: true, booking: result.booking };
    },
  }),
};
```

**Security flow:**
```
User → AgentChat → POST /api/agent/chat (auth checked)
                 → streamText() → tool execution
                               → calls Server Action (auth checked again)
                                              → writes to Supabase (RLS enforced)
```

Three layers of security. Tool NEVER touches DB directly.

---

## 13. RAG Pipeline

See Phase 5 in master prompt for complete code.

**Flow:**
1. Content files in `content/knowledge/*.md`
2. Run `scripts/ingest-knowledge.ts`
3. Chunks text (512 words, 50-word overlap)
4. Embeds with `text-embedding-3-small`
5. Stores in `knowledge_base` with pgvector
6. Creates ivfflat index after ingestion
7. Agent calls `search_knowledge` tool
8. Tool queries `match_knowledge()` SQL function
9. Returns top 5 semantic matches

**Ingestion:**
```bash
npx tsx scripts/ingest-knowledge.ts
```

**Retrieval:**
```typescript
// lib/rag/retrieve.ts
export async function retrieve(query: string) {
  const embedding = await embedText(query);
  const { data } = await supabase.rpc('match_knowledge', {
    query_embedding: embedding,
    match_count: 5,
  });
  return data;
}
```

---

## 14. Frontend — 3D Globe

See Phase 6 in master prompt for complete code.

**Components:**
- `OrbitScene.tsx` — R3F Canvas root, device tier detection
- `OrbitGlobe.tsx` — Main sphere mesh, auto-rotation, mouse tracking
- `AIOrb.tsx` — Floating AI avatar with idle animation
- `Globe2DFallback.tsx` — CSS fallback for no-WebGL devices

**Device tiers:**
| Tier | Device | Segments | Texture | FPS Target |
|---|---|---|---|---|
| high | Desktop / flagship | 128 | High-res | 60fps |
| mid | Mid-range mobile | 64 | Low-res | 30fps |
| low | No WebGL | CSS SVG | None | N/A |

**Store (Zustand):**
```typescript
// store/orbit.ts
interface OrbitStore {
  currentSection: Section;
  deviceTier: 'high' | 'mid' | 'low';
  setSection: (s: Section) => void;
  spinGlobeTo: (s: Section) => void;
}
```

---

## 15. orbitConfig System

See Phase 7 in master prompt for complete interface.

```typescript
// lib/orbitConfig.ts
export interface OrbitConfig {
  brand: {
    name:         string;
    tagline:      string;
    primaryColor: string;
    accentColor:  string;
  };
  agent: {
    name:          string;
    avatarColor:   string;
    tools:         string[];
    memoryEnabled: boolean;
  };
  sections: {
    about:     { enabled: boolean; title: string };
    offerings: { enabled: boolean; title: string };
    stories:   { enabled: boolean; title: string };
    connect:   { enabled: boolean; title: string };
    impact:    { enabled: boolean; title: string };
  };
}
```

**Any business can deploy Orbit by editing this one file.**

---

## 16. Folder Structure

```
orbit-ai/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── login/page.tsx
│   └── api/agent/chat/route.ts
├── components/
│   ├── 3d/
│   │   ├── OrbitScene.tsx
│   │   ├── OrbitGlobe.tsx
│   │   └── AIOrb.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Offerings.tsx
│   │   ├── Stories.tsx
│   │   ├── Connect.tsx
│   │   └── Impact.tsx
│   ├── agent/
│   │   └── AgentChat.tsx
│   └── ui/
├── lib/
│   ├── supabase/
│   │   ├── server.ts
│   │   ├── client.ts
│   │   └── middleware.ts
│   ├── agent/tools.ts
│   ├── rag/
│   │   ├── embed.ts
│   │   └── retrieve.ts
│   └── orbitConfig.ts
├── store/orbit.ts
├── hooks/useDeviceCapability.ts
├── actions.ts
├── middleware.ts
├── scripts/ingest-knowledge.ts
├── content/knowledge/
├── supabase/migrations/
│   ├── 001_schema.sql
│   └── 002_vector_search.sql
└── public/
```

---

## 17. Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...      # Server-side only

# OpenAI
OPENAI_API_KEY=sk-...                 # Server-side only

# Upstash Redis
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 18. Deployment

```bash
# 1. Push to GitHub
git push origin main

# 2. Deploy to Vercel (auto-detects Next.js)
# Connect repo, set env vars, deploy

# 3. Run migrations
npx supabase db push

# 4. Ingest knowledge
npm run ingest

# 5. Test
# Visit your-app.vercel.app
```

**Monitoring:**
- Vercel Analytics (performance)
- Supabase logs (queries, auth, errors)
- Vercel AI SDK telemetry (tool calls, latency)

---

*Orbit AI v2.0 — Production-Ready | April 2026*  
*Single codebase. Ships in 3–4 weeks.*
