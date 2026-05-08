-- Match knowledge function for semantic search
CREATE OR REPLACE FUNCTION match_knowledge(
  query_embedding vector(1536),
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

-- Create vector index (run AFTER data ingestion)
CREATE OR REPLACE FUNCTION create_vector_index()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  CREATE INDEX IF NOT EXISTS knowledge_base_embedding_idx
    ON knowledge_base
    USING ivfflat (embedding vector_cosine_ops)
    WITH (lists = 100);
END;
$$;
