import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

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

const content = [
  { content: "We offer custom websites starting at custom quote. Template websites from $499, delivered in 3-5 days. Monthly hosting from $49/month.", source: "pricing" },
  { content: "Our services include: Custom websites, E-commerce platforms, Agentic websites with AI integration, Web applications, SaaS products, Portfolio and business sites.", source: "services" },
  { content: "Common questions: How long does a website take? Template sites: 3-5 days. Custom sites: 2-4 weeks. What tech stack? Next.js, React, TypeScript, Tailwind CSS.", source: "faq" },
  { content: "We respond within 24 business hours. Contact at hello@orbit.com", source: "faq" },
  { content: "Payment terms: 50% upfront, 50% on completion. Monthly billing available.", source: "pricing" },
];

async function addContent() {
  console.log('Adding sample content...');
  
  for (const item of content) {
    const { error } = await supabase.from('knowledge_base').insert({
      content: item.content,
      metadata: { source: item.source },
    });
    
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Added:', item.source);
    }
  }
  
  console.log('Done!');
}

addContent();