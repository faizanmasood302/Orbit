-- =============================================
-- FULL ORBIT SCHEMA with RLS
-- =============================================

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";

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
CREATE POLICY "Users read own contacts" ON contacts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Anyone can insert contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Bookings table
CREATE TABLE bookings (
  id            UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  contact_id    UUID REFERENCES contacts(id),
  scheduled_at  TIMESTAMPTZ NOT NULL,
  duration_mins INTEGER DEFAULT 30 CHECK (duration_mins > 0),
  status        TEXT DEFAULT 'pending' CHECK (status IN ('pending','confirmed','cancelled')),
  notes         TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own bookings" ON bookings FOR ALL USING (auth.uid() = user_id);

-- Quotes table
CREATE TABLE quotes (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id     UUID REFERENCES auth.users(id),
  config      JSONB NOT NULL DEFAULT '{}',
  total_price NUMERIC(10,2),
  currency    TEXT DEFAULT 'USD',
  status      TEXT DEFAULT 'draft' CHECK (status IN ('draft','sent','accepted','rejected')),
  expires_at  TIMESTAMPTZ DEFAULT NOW() + INTERVAL '7 days',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own quotes" ON quotes FOR ALL USING (auth.uid() = user_id);

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
CREATE POLICY "Users manage own memory" ON agent_memory FOR ALL USING (auth.uid() = user_id);

-- Knowledge base (pgvector)
CREATE TABLE knowledge_base (
  id         UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  content    TEXT NOT NULL,
  embedding  vector(1536),
  metadata   JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit log
CREATE TABLE audit_log (
  id         UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id),
  action     TEXT NOT NULL,
  resource   TEXT,
  payload    JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Sample content for knowledge_base (without embeddings for now)
INSERT INTO knowledge_base (content, metadata) VALUES
('We offer custom websites starting at custom quote. Template websites from $499, delivered in 3-5 days. Monthly hosting from $49/month.', '{"source": "pricing"}'),
('Our services include: Custom websites, E-commerce platforms, Agentic websites with AI integration, Web applications, SaaS products, Portfolio and business sites.', '{"source": "services"}'),
('How long does a website take? Template sites: 3-5 days. Custom sites: 2-4 weeks. What tech stack? Next.js, React, TypeScript, Tailwind CSS.', '{"source": "faq"}'),
('We respond within 24 business hours. Contact at hello@orbit.com', '{"source": "faq"}'),
('Payment terms: 50% upfront, 50% on completion. Monthly billing available.', '{"source": "pricing"}');

-- Create vector search function
CREATE OR REPLACE FUNCTION match_knowledge(query_embedding vector(1536), match_count INTEGER DEFAULT 5)
RETURNS TABLE(content TEXT, similarity FLOAT)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT kb.content, 1 - (kb.embedding <=> query_embedding) AS similarity
  FROM knowledge_base kb
  WHERE kb.embedding IS NOT NULL
  ORDER BY kb.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;