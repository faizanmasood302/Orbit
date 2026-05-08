-- Enable pgcrypto for uuid (if not already enabled)
-- Supabase has this enabled by default

CREATE TABLE IF NOT EXISTS site_content (
  section    TEXT PRIMARY KEY,
  title      TEXT NOT NULL,
  body       TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Seed default content
INSERT INTO site_content (section, title, body) VALUES
  ('about',     'Our Story',       'Welcome to Acme Corp — we are dedicated to building innovative solutions that empower businesses worldwide. Founded in 2020, our team of 40+ experts spans 12 countries and has delivered over 200 projects.'),
  ('offerings', 'What We Offer',   'We offer end-to-end digital product development, AI integration, cloud infrastructure, and immersive 3D web experiences tailored for modern businesses.'),
  ('stories',   'Success Stories', 'Our work speaks for itself. From increasing conversion rates by 150% to automating operations that save 40 hours per week — we deliver measurable results.'),
  ('connect',   'Get in Touch',    'We would love to hear about your project. Send us a message and our team will get back to you within one business day.'),
  ('impact',    'Our Impact',      'The numbers behind our mission: reaching over 10,000 users, partnering with 50+ global brands, and generating over $12M in client revenue.')
ON CONFLICT (section) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public can read site_content"
  ON site_content FOR SELECT
  USING (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update site_content"
  ON site_content FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
