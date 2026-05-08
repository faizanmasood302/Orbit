import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@xenova/transformers';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read environment variables from .env.local
const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf-8');
const env: Record<string, string> = {};
envFile.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length) {
    const value = valueParts.join('=').trim();
    env[key.trim()] = value.replace(/^"|"$/g, '');
  }
});

console.log('SUPABASE_URL:', env.NEXT_PUBLIC_SUPABASE_URL ? 'exists' : 'missing');

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

const KNOWLEDGE_DIR = path.join(__dirname, '../content/knowledge');

// Local embedding model (384 dimensions)
let embedder: any = null;

async function getEmbedder() {
  if (!embedder) {
    console.log('[Ingest] Loading local embedding model (all-MiniLM-L6-v2)...');
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    console.log('[Ingest] Model loaded');
  }
  return embedder;
}

async function embedText(text: string): Promise<number[]> {
  const embedder = await getEmbedder();
  const output = await embedder(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

async function ingest() {
  console.log('Scanning knowledge directory...');

  if (!fs.existsSync(KNOWLEDGE_DIR)) {
    console.error('Knowledge directory not found:', KNOWLEDGE_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith('.md'));
  console.log('Found', files.length, 'markdown files');

  for (const file of files) {
    const filePath = path.join(KNOWLEDGE_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    // Split by Markdown headings (## ) to create semantic chunks
    const chunks = content.split(/(?=^## )/gm).filter(c => c.trim());

    console.log('Processing:', file, '(' + chunks.length + ' chunks)');

    for (const chunk of chunks) {
      const cleanChunk = chunk.trim();
      if (cleanChunk.length < 20) continue;

      try {
        const embedding = await embedText(cleanChunk);

        const { error } = await supabase.from('knowledge_base').insert({
          content: cleanChunk,
          embedding,
          metadata: { source: file },
        });

        if (error) {
          console.error('Insert error:', error.message);
        } else {
          console.log('  Inserted chunk');
        }
      } catch (err) {
        console.error('Embedding error:', err);
      }
    }
  }

  console.log('Done!');
}

ingest().catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
