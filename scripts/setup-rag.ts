import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf-8');
const env: Record<string, string> = {};
envFile.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length) {
    const value = valueParts.join('=').trim();
    env[key.trim()] = value.replace(/^"|"$/g, '');
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function checkAndCreateTable() {
  // Check if table exists
  const { data, error } = await supabase.from('knowledge_base').select('*').limit(1);
  
  if (error) {
    console.log('Table error:', error.message);
    
    // Try creating the table via SQL
    console.log('Creating knowledge_base table...');
    
    const { error: createError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE EXTENSION IF NOT EXISTS vector;
        CREATE TABLE IF NOT EXISTS knowledge_base (
          id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          content    TEXT NOT NULL,
          embedding  vector(1536),
          metadata   JSONB DEFAULT '{}',
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `
    });
    
    if (createError) {
      console.log('Could not create table. Run this in Supabase SQL Editor:');
      console.log(`
-- Enable vector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create knowledge_base table
CREATE TABLE IF NOT EXISTS knowledge_base (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content    TEXT NOT NULL,
  embedding  vector(1536),
  metadata   JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
      `);
      return;
    }
  }
  
  console.log('Table exists! Adding sample content...');
  
  const content = [
    { content: "We offer custom websites starting at custom quote. Template websites from $499, delivered in 3-5 days. Monthly hosting from $49/month.", metadata: { source: "pricing" } },
    { content: "Our services include: Custom websites, E-commerce platforms, Agentic websites with AI integration, Web applications, SaaS products, Portfolio and business sites.", metadata: { source: "services" } },
    { content: "How long does a website take? Template sites: 3-5 days. Custom sites: 2-4 weeks. What tech stack? Next.js, React, TypeScript, Tailwind CSS.", metadata: { source: "faq" } },
    { content: "We respond within 24 business hours. Contact at hello@orbit.com", metadata: { source: "faq" } },
    { content: "Payment terms: 50% upfront, 50% on completion. Monthly billing available.", metadata: { source: "pricing" } },
  ];
  
  for (const item of content) {
    const { error: insertError } = await supabase.from('knowledge_base').insert(item);
    if (insertError) {
      console.log('Insert error:', insertError.message);
    } else {
      console.log('Added:', item.metadata.source);
    }
  }
  
  console.log('Done!');
}

checkAndCreateTable();