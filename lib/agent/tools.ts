import { tool } from 'ai';
import { z } from 'zod';
import { createBooking, saveQuote } from '@/actions';

export const tools = {
  spin_globe: tool({
    description: 'Rotates the 3D globe to show a specific section',
    inputSchema: z.object({
      section: z.enum(['about', 'offerings', 'stories', 'connect', 'impact'] as const),
    }),
    execute: async ({ section }) => {
      return { action: 'spin_globe', section };
    },
  }),

  book_meeting: tool({
    description: 'Books a meeting for the user',
    inputSchema: z.object({
      scheduledAt:  z.string().describe('ISO datetime string'),
      durationMins: z.number().describe('Meeting duration in minutes'),
      notes:        z.string().optional().describe('Optional meeting notes'),
    }),
    execute: async ({ scheduledAt, durationMins, notes }) => {
      const result = await createBooking({ scheduledAt, durationMins, notes });
      if (result.error) throw new Error(result.error as string);
      return {
        success: true,
        booking: result.booking,
        message: `Meeting booked for ${new Date(scheduledAt).toLocaleString()}`,
      };
    },
  }),

  get_quote: tool({
    description: 'Generates a price quote for selected services',
    inputSchema: z.object({
      services: z.array(z.string()).describe('List of service IDs'),
      budget:   z.number().optional().describe('Optional budget constraint'),
    }),
    execute: async ({ services, budget }) => {
      const result = await saveQuote({ services, budget });
      if (result.error) throw new Error(result.error as string);
      return {
        success: true,
        quote: result.quote,
        message: `Quote generated for: ${services.join(', ')}`,
      };
    },
  }),

  search_knowledge: tool({
    description: 'Searches the business knowledge base to answer questions',
    inputSchema: z.object({
      query: z.string().describe('The search query'),
    }),
    execute: async ({ query }) => {
      const { retrieve } = await import('@/lib/rag/retrieve');
      const results = await retrieve(query);
      return { 
        found: results.length > 0,
        summary: results.length > 0 
          ? `Found ${results.length} matching document(s)`
          : 'No matching documents found',
        results: results.map((r: { content: string }) => r.content).join('\n\n')
      };
    },
  }),

  web_search: tool({
    description: 'Searches the web for current information, trends, or general knowledge',
    inputSchema: z.object({
      query: z.string().describe('The search query'),
    }),
    execute: async ({ query }) => {
      try {
        const apiKey = process.env.EXA_API_KEY;
        if (!apiKey) {
          return { 
            error: 'Web search not configured',
            suggestion: 'Configure EXA_API_KEY in environment to enable web search'
          };
        }
        const response = await fetch('https://api.exa.ai/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            query,
            numResults: 5
          })
        });
        const data = await response.json();
        return {
          query,
          found: data.results?.length || 0,
          results: data.results?.slice(0, 3).map((r: { title: string; url: string }) => 
            `${r.title}: ${r.url}`
          ).join('\n\n') || 'No results found'
        };
      } catch (e) {
        return { error: 'Web search failed', details: String(e) };
      }
    },
  }),
};
