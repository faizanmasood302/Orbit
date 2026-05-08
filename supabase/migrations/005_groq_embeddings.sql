-- Migration: Switch to local embeddings (all-MiniLM-L6-v2, 384 dimensions)

-- 1. Drop dependent objects (function and index)
DROP FUNCTION IF EXISTS match_knowledge(vector(1536), integer);
DROP INDEX IF EXISTS knowledge_base_embedding_idx;

-- 2. Drop old embedding column (this removes existing 1536-dim embeddings)
ALTER TABLE knowledge_base DROP COLUMN IF EXISTS embedding;

-- 3. Add new embedding column with 384 dimensions
ALTER TABLE knowledge_base ADD COLUMN embedding vector(384);

-- 4. Recreate the match_knowledge function with 384 dimensions
CREATE OR REPLACE FUNCTION match_knowledge(
  query_embedding vector(384),
  match_count INTEGER DEFAULT 5
)
RETURNS TABLE(content TEXT, similarity FLOAT)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    knowledge_base.content,
    1 - (knowledge_base.embedding <=> query_embedding) AS similarity
  FROM knowledge_base
  WHERE knowledge_base.embedding IS NOT NULL
  ORDER BY knowledge_base.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- 5. Create vector index for 384 dimensions (run after data ingestion)
CREATE OR REPLACE FUNCTION create_vector_index()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  DROP INDEX IF EXISTS knowledge_base_embedding_idx;
  CREATE INDEX IF NOT EXISTS knowledge_base_embedding_idx
    ON knowledge_base
    USING ivfflat (embedding vector_cosine_ops)
    WITH (lists = 100);
END;
$$;
