-- Fix: Add RLS policy for knowledge_base read access
ALTER TABLE knowledge_base ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow read access to knowledge_base for anon role"
ON knowledge_base
FOR SELECT
TO anon
USING (true);