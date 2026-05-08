import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf-8');
const env: Record<string, string> = {};
envFile.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length) {
    env[key.trim()] = valueParts.join('=').trim().replace(/^"|"$/g, '');
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function addGreetings() {
  const content = [
    { content: "Hello! I'm Aria, Orbit's AI assistant. I can help you with questions about our services, pricing, timeline, and more. What would you like to know?", metadata: { source: "greeting" } },
    { content: "Hi! Welcome to Orbit. We build custom websites, e-commerce stores, agentic AI websites, web apps, and SaaS products. How can I help you today?", metadata: { source: "greeting" } },
    { content: "Hey! I can tell you about Orbit's services: websites from $499, custom builds, AI integration, and more. What questions do you have?", metadata: { source: "greeting" } },
  ];
  
  for (const item of content) {
    await supabase.from('knowledge_base').insert(item);
  }
  
  console.log('Greetings added!');
}

addGreetings();