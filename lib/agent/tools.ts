import { dynamicTool } from 'ai';
import { z } from 'zod';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const memoryStore = new Map<string, Record<string, string>>();

const SpinGlobeSchema = z.object({
  section: z.string().describe('Section to navigate to'),
});

const BookMeetingSchema = z.object({
  email: z.string().describe('User email address'),
  date: z.string().describe('Date in YYYY-MM-DD format'),
  time: z.string().describe('Time in HH:MM format'),
});

const GetQuoteSchema = z.object({
  project_type: z.string().describe('Type of project: basic, business, ecommerce, or custom'),
  pages: z.number().optional().default(1).describe('Number of pages'),
  features: z.array(z.string()).optional().describe('List of requested features'),
});

const RememberSchema = z.object({
  key: z.string().describe('The fact name (e.g. "name", "preferred_style", "budget_range")'),
  value: z.string().describe('The fact value to remember'),
});

const RecallSchema = z.object({
  key: z.string().describe('The fact name to look up'),
});

type Input<T extends z.ZodSchema> = z.infer<T>;

export const spinGlobe = dynamicTool({
  description: 'Spin the 3D globe to a specific section of the website. Valid sections: home, about, impact, offerings, connect, stories.',
  inputSchema: SpinGlobeSchema,
  execute: (async (input: Input<typeof SpinGlobeSchema>) => {
    const valid = new Set(['home', 'about', 'impact', 'offerings', 'connect', 'stories']);
    const key = input.section.toLowerCase();
    if (!valid.has(key)) {
      return `Invalid section. Choose from: ${[...valid].sort().join(', ')}`;
    }
    return JSON.stringify({ action: 'spin_globe', section: key });
  }) as any,
});

export const bookMeeting = dynamicTool({
  description: 'Book a consultation meeting. ALL THREE args (email, date, time) are required — never call this without all three provided by the user. Ask the user for any missing fields one at a time.',
  inputSchema: BookMeetingSchema,
  execute: (async (input: Input<typeof BookMeetingSchema>) => {
    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: input.email,
          scheduled_at: `${input.date}T${input.time}:00`,
          duration_mins: 30,
          notes: `Booked via Aria by ${input.email}`,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: 'Booking failed' }));
        return `Booking failed: ${err.detail || 'unknown error'}`;
      }
      const data = await res.json();
      return JSON.stringify({
        action: 'book_meeting',
        booking_id: data.id,
        email: input.email,
        scheduled_at: `${input.date}T${input.time}:00`,
        status: 'pending',
      });
    } catch {
      return 'Booking failed: unable to connect to the server. Please try again later.';
    }
  }) as any,
});

export const getQuote = dynamicTool({
  description: 'Get a price quote for a website project. project_type (basic|business|ecommerce|custom) is required — never call this without it.',
  inputSchema: GetQuoteSchema,
  execute: (async (input: Input<typeof GetQuoteSchema>) => {
    try {
      const res = await fetch(`${API_URL}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_type: input.project_type,
          pages: input.pages,
          features: input.features || [],
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: 'Quote failed' }));
        return `Quote failed: ${err.detail || 'unknown error'}`;
      }
      const data = await res.json();
      return JSON.stringify({
        action: 'get_quote',
        quote_id: data.id,
        project_type: input.project_type,
        pages: input.pages,
        total_price: data.total_price,
        currency: data.currency || 'USD',
      });
    } catch {
      return 'Quote failed: unable to connect to the server. Please try again later.';
    }
  }) as any,
});

export const remember = dynamicTool({
  description: 'Save a fact about the user for future conversations. Use this when the user shares personal preferences, details, or context.',
  inputSchema: RememberSchema,
  execute: (async (input: Input<typeof RememberSchema>) => {
    const sessionKey = 'default';
    if (!memoryStore.has(sessionKey)) {
      memoryStore.set(sessionKey, {});
    }
    memoryStore.get(sessionKey)![input.key] = input.value;
    return `Remembered: ${input.key} = ${input.value}`;
  }) as any,
});

export const recall = dynamicTool({
  description: 'Retrieve a saved fact about the user from a previous conversation.',
  inputSchema: RecallSchema,
  execute: (async (input: Input<typeof RecallSchema>) => {
    const sessionKey = 'default';
    const memory = memoryStore.get(sessionKey);
    if (memory && input.key in memory) {
      return memory[input.key];
    }
    return `No memory found for key: ${input.key}`;
  }) as any,
});
