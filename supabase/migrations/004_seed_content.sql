-- Orbit site content seed (real copy)
-- Run this in your Supabase SQL editor AFTER 003_content.sql

INSERT INTO site_content (section, title, body) VALUES

  ('about',
   'What is Orbit?',
   'Most business websites today are boring, flat, and look exactly the same. Orbit solves this by turning any company''s online presence into a highly engaging, memorable 3D experience — where visitors can spin a globe, explore your brand in real time, and actually enjoy the journey. We make the web feel alive again.'),

  ('offerings',
   'Our Packages',
   'We offer three ways to get your Orbit site — from fully custom builds to affordable templates and flexible monthly subscriptions for hosting and updates. Every package includes your 3D globe, AI chat assistant, and a client admin panel so you can update content without a developer.'),

  ('stories',
   'Who It''s For',
   'Orbit works for any business that wants to stand out — cafes, clinics, e-commerce stores, consultants, real estate agencies, gyms, schools, and more. If you have customers visiting your website, Orbit turns those passive visitors into active participants who stay longer, explore more, and convert better.'),

  ('connect',
   'Start a Project',
   'Ready to turn your website into an experience? Tell us about your business and what you''re trying to achieve. We''ll get back to you within one business day with a plan and a quote.'),

  ('impact',
   'Why It Works',
   'Interactive websites drive dramatically better results than static pages. Visitors stay 3× longer, share memorable experiences with their networks, and convert at a higher rate when they''re genuinely engaged. Orbit is the fastest way to give your brand that premium, modern edge.')

ON CONFLICT (section) DO UPDATE
  SET title = EXCLUDED.title,
      body  = EXCLUDED.body,
      updated_at = now();
