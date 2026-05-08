import { createClient } from '@/lib/supabase/server';
import { embedText } from './embed';

/**
 * Perform a semantic search against the knowledge_base using vector similarity.
 * Returns the most relevant chunks with a real similarity score (0‑1).
 */
export interface KnowledgeResult {
  content: string;
  similarity: number;
}

export async function retrieve(query: string, limit = 5): Promise<KnowledgeResult[]> {
  try {
    const supabase = await createClient();
    console.log('[RAG] Query:', query);

    // Generate embedding for the user query
    const queryEmbedding = await embedText(query);
    console.log('[RAG] Generated embedding, length:', queryEmbedding.length);

    // Call Supabase RPC for vector similarity search
    const { data, error } = await supabase
      .rpc('match_knowledge', {
        query_embedding: queryEmbedding,
        match_count: limit
      })
      .select('*');

    console.log('[RAG] Vector search - data:', data?.length, 'error:', error);
    if (error) {
      console.error('[RAG] SEARCH ERROR:', error);
      return [];
    }

    if (!data || data.length === 0) {
      console.log('[RAG] No results found');
      return [];
    }

    // Map results with similarity scores
    const results = data.map((r: any) => ({
      content: r.content,
      similarity: r.similarity
    }));

    console.log('[RAG] Results with similarity:');
    results.forEach((r: KnowledgeResult, i: number) => {
      console.log(`  [${i}] ${(r.similarity * 100).toFixed(2)}% - ${r.content.substring(0, 50)}...`);
    });

    return results;
  } catch (e) {
    console.error('[RAG] EXCEPTION:', e);
    return [];
  }
}
