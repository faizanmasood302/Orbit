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

async function addMoreContent() {
  console.log('Adding more content to knowledge base...');
  
  const content = [
    // Services
    { content: "Orbit offers custom websites - fully bespoke, scalable, fast, and SEO-optimized websites tailored to your business needs.", metadata: { source: "services" } },
    { content: "Orbit builds e-commerce platforms with payment integration, inventory management, and analytics.", metadata: { source: "services" } },
    { content: "Orbit creates agentic websites integrated with AI agents for automation and intelligent interactions.", metadata: { source: "services" } },
    { content: "Orbit develops web applications with user authentication, dashboards, and real-time features.", metadata: { source: "services" } },
    { content: "Orbit builds SaaS products with subscriptions and user management capabilities.", metadata: { source: "services" } },
    { content: "Orbit creates portfolio and business sites - professional websites showcasing work or business.", metadata: { source: "services" } },
    
    // Pricing
    { content: "Orbit template websites start at $499 and are delivered in 3-5 days.", metadata: { source: "pricing" } },
    { content: "Orbit custom websites are priced per project - get a custom quote by contacting hello@orbit.com", metadata: { source: "pricing" } },
    { content: "Orbit monthly hosting and updates start at $49 per month.", metadata: { source: "pricing" } },
    { content: "Orbit payment terms: 50% upfront, 50% on completion. Monthly billing available.", metadata: { source: "pricing" } },
    
    // FAQ / General
    { content: "You can reach Orbit at hello@orbit.com - we respond within 24 business hours.", metadata: { source: "contact" } },
    { content: "Orbit timeline: Template websites take 3-5 days. Custom websites take 2-4 weeks depending on complexity.", metadata: { source: "timeline" } },
    { content: "Orbit tech stack: Next.js, React, TypeScript, Tailwind CSS, Supabase, Three.js for 3D elements.", metadata: { source: "tech" } },
    { content: "Orbit is a premium web design and development agency building modern websites and applications.", metadata: { source: "about" } },
    
    // What AI can help with
    { content: "I can answer questions about Orbit's services, pricing, timeline, and technologies. I can also help you get started with a project.", metadata: { source: "capabilities" } },
    { content: "I can help with: service inquiries, pricing questions, project timeline, and general guidance about Orbit's offerings.", metadata: { source: "capabilities" } },
  ];
  
  for (const item of content) {
    const { error } = await supabase.from('knowledge_base').insert(item);
    if (error) {
      console.log('Error:', error.message);
    } else {
      console.log('Added:', item.metadata.source, '-', item.content.substring(0, 50) + '...');
    }
  }
  
  console.log('Done! Knowledge base updated.');
}

addMoreContent();