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

async function testSearch(query: string) {
  const queryLower = query.toLowerCase().trim();
  
  console.log('Testing query:', query);
  
  if (queryLower.length < 5) {
    const { data } = await supabase.from('knowledge_base').select('content').limit(3);
    console.log('Short query - results:', data?.length);
    return data;
  }
  
  const words = queryLower.split(' ').filter(w => w.length > 2);
  const orFilter = words.map(w => `content.ilike.*${w}*`).join(',');
  
  console.log('Search filter:', orFilter);
  
  const { data, error } = await supabase
    .from('knowledge_base')
    .select('content')
    .or(orFilter)
    .limit(5);
  
  console.log('Results:', data?.length, 'error:', error);
  return data;
}

const query = process.argv[2] || 'hello';

testSearch(query).then(d => {
  console.log('\n--- Results ---');
  d?.forEach((r, i) => console.log(i+1, r.content.substring(0, 80)));
});