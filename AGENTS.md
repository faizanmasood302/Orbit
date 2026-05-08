<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Orbit

AI-powered 3D interactive website builder with an embedded assistant ("Aria").

## Stack & Versions (all matter)

| Tool | Version | Gotcha |
|---|---|---|
| Next.js | 16.2.4 | Breaking changes from v14 — check docs in `node_modules/next/dist/docs/` |
| React | 19.2.4 | Server Components default, `use client` required for interactivity |
| Vercel AI SDK | `ai` v6 | `streamText`, `convertToModelMessages`, `toUIMessageStreamResponse` |
| Zod | v4 | Schema API differs from v3 |
| Tailwind CSS | v4 | Config format changed from v3 |
| Three.js + R3F + Drei | latest | 3D globe rendering |
| Supabase | `@supabase/ssr` | SSR cookie-based auth |
| Upstash Redis | `@upstash/ratelimit` | Sliding window rate limiter on `/api/agent` and `/api/chat` |
| Groq | `@ai-sdk/groq` | LLM: `llama-3.3-70b-versatile` |
| OpenAI | embeddings only | `text-embedding-3-small` for RAG |

## Commands

```
npm run dev      # dev server
npm run build    # production build
npm run lint     # eslint (flat config)
```

No test framework is configured. Do not invent one without asking.

## Architecture

```
proxy.ts                  → middleware: Supabase session + rate limiting + CSP headers
actions.ts                → server actions: submitContact, createBooking, saveQuote, deleteMemory
app/page.tsx              → fetches site_content from Supabase, renders HomeClient
app/api/chat/route.ts     → AI chat POST (Groq LLM + tools, maxSteps: 5) — used by AgentChat.tsx frontend
app/api/agent/chat/route.ts → identical to /api/chat with same tools — both are live
app/login/page.tsx        → auth login
app/admin/page.tsx        → admin dashboard
lib/supabase/             → client.ts (browser), server.ts (server), middleware.ts (session refresh)
lib/agent/tools.ts        → AI tools: spin_globe, book_meeting, get_quote, search_knowledge
lib/rag/                  → embed.ts (OpenAI), retrieve.ts (Supabase pgvector RPC)
store/orbit.ts            → Zustand: section navigation, camera targets, theme
lib/orbitConfig.ts        → brand/agent/section config constants
scripts/ingest-knowledge.ts → RAG ingestion from content/knowledge/*.md
```

## Key Patterns

**Supabase SSR auth** uses cookie-based sessions. `lib/supabase/server.ts` creates the server client; `lib/supabase/middleware.ts` refreshes sessions in `proxy.ts`. Always use `await createClient()` on the server.

**Server actions** in `actions.ts` use Zod schemas for validation. Auth-required actions call `requireAuth()`. All mutate Supabase tables and call `revalidatePath('/')`.

**RAG pipeline**: `scripts/ingest-knowledge.ts` reads `content/knowledge/*.md`, chunks text, generates OpenAI embeddings, stores in `knowledge_base` table (pgvector). Retrieval uses `match_knowledge` RPC function. Vector index is created via `create_vector_index` RPC *after* ingestion.

**Zustand store** (`store/orbit.ts`) drives the 3D globe. Sections map to camera positions. `spinGlobeTo()` triggers transitions with a 1.5s animation timeout.

**Rate limiting**: 30 requests per 5 min sliding window on `/api/agent*` and `/api/chat` paths via Upstash Redis.

## Database

Migrations in `supabase/migrations/`:
- `001_schema.sql` — contacts, bookings, quotes, agent_memory, knowledge_base, audit_log tables + RLS policies
- `002_vector_search.sql` — `match_knowledge()` and `create_vector_index()` functions
- `003_content.sql` / `004_seed_content.sql` — site content seed data

Tables: `contacts`, `bookings`, `quotes`, `agent_memory`, `knowledge_base` (pgvector 1536-dim), `audit_log`, `site_content`. All have RLS enabled.

## Env Variables Required

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (for ingestion script)
- `GROQ_API_KEY`
- `OPENAI_API_KEY` (for RAG embeddings only)
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`
- `NEXT_PUBLIC_APP_URL`

⚠️ `.env.local` currently contains **live API keys**. Never commit or reference these values. Use `process.env` references only.

## Gotchas

- `app/api/chat/route.ts` and `app/api/agent/chat/route.ts` are identical — one is likely dead code, but keep both until you verify which one the frontend uses
- `reactCompiler` is in devDependencies but set to `false` in `next.config.ts`
- `three` requires `transpilePackages` in Next.js config
- RAG ingestion expects `content/knowledge/` directory with `.md` files — does not exist by default
- ESLint uses flat config (`eslint.config.mjs`), not `.eslintrc`
- `honeypot` field in contact form must be empty (anti-spam)
- Chat route returns `toUIMessageStreamResponse()` (AI SDK v6), not `toTextStreamResponse()`
