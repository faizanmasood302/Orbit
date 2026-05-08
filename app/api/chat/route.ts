import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { retrieve } from '@/lib/rag/retrieve';

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY as string });

type ChatMessage = { role: 'user' | 'assistant'; content: string };

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = (body.messages ?? []).map((m: { role: string; content: string }) => ({
      role: m.role as ChatMessage['role'],
      content: m.content,
    }));

    const lastUserMessage = messages.filter(m => m.role === 'user').pop();
    console.log('[API] Message:', lastUserMessage?.content);
    
    let contextStr = 'No relevant information found.';
    
    if (lastUserMessage?.content) {
      const results = await retrieve(lastUserMessage.content, 5);
      console.log('[API] Results:', results?.length);

      // Sort results by similarity score (already sorted by retrieve.ts)
      if (results && results.length > 0) {
        // Use top 3 most relevant results
        const topResults = results.slice(0, 3).map((r: { content: string; similarity: number }) => r.content);
        contextStr = topResults.join('\n\n');
        console.log('[API] Context (sorted by similarity):', contextStr.substring(0, 100));
        console.log('[API] Similarity scores:', results.map((r: { content: string; similarity: number }) => r.similarity.toFixed(3)));
      } else {
        console.log('[API] No relevant results found (above similarity threshold)');
        contextStr = 'No relevant information found.';
      }
    }

    const system = `You are Aria, Orbit's AI assistant.
 
Use ONLY the knowledge below to answer. If the knowledge doesn't answer the question, say "I don't have that information" - do NOT make up answers.

KNOWLEDGE:
${contextStr}`;

    const result = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      system,
      messages,
    });

    return new Response(result.text, { headers: { 'Content-Type': 'text/plain' } });
  } catch (err) {
    console.error('[API ERROR]', err);
    return Response.json({ error: 'Error' }, { status: 500 });
  }
}