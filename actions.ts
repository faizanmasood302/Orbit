'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

// ── Schemas ──────────────────────────────────────────────────

const ContactSchema = z.object({
  name:     z.string().min(2).max(100),
  email:    z.string().email(),
  message:  z.string().min(10).max(2000),
  honeypot: z.string().max(0), // Must be empty
});

const BookingSchema = z.object({
  scheduledAt:  z.string().datetime(),
  durationMins: z.number().min(15).max(240),
  notes:        z.string().max(500).optional(),
});

const QuoteSchema = z.object({
  services: z.array(z.string()).min(1),
  budget:   z.number().positive().optional(),
});

// ── Helper: Get authenticated user ───────────────────────

async function requireAuth() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) throw new Error('Unauthorized');
  return { user, supabase };
}

// ── Actions ──────────────────────────────────────────────────

export async function submitContact(formData: unknown) {
  const parsed = ContactSchema.safeParse(formData);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { error } = await supabase.from('contacts').insert({
    ...parsed.data,
    user_id: user?.id || null,
  });

  if (error) return { error: 'Failed to save contact' };
  revalidatePath('/');
  return { success: true };
}

export async function createBooking(data: unknown) {
  const { user, supabase } = await requireAuth();
  const parsed = BookingSchema.safeParse(data);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }

  const { error, data: booking } = await supabase.from('bookings').insert({
    user_id: user.id,
    scheduled_at: parsed.data.scheduledAt,
    duration_mins: parsed.data.durationMins,
    notes: parsed.data.notes,
  }).select().single();

  if (error) return { error: 'Failed to create booking' };

  // Audit log
  await supabase.from('audit_log').insert({
    user_id: user.id,
    action: 'booking.created',
    resource: `booking:${booking.id}`,
    payload: { scheduledAt: parsed.data.scheduledAt },
  });

  revalidatePath('/');
  return { success: true, booking };
}

export async function saveQuote(data: unknown) {
  const { user, supabase } = await requireAuth();
  const parsed = QuoteSchema.safeParse(data);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }

  // Calculate price based on services
  const totalPrice = parsed.data.services.length * 1000; // Simple calc

  const { error, data: quote } = await supabase.from('quotes').insert({
    user_id: user.id,
    config: { services: parsed.data.services },
    total_price: totalPrice,
  }).select().single();

  if (error) return { error: 'Failed to save quote' };

  await supabase.from('audit_log').insert({
    user_id: user.id,
    action: 'quote.created',
    resource: `quote:${quote.id}`,
    payload: { services: parsed.data.services, totalPrice },
  });

  revalidatePath('/');
  return { success: true, quote: { ...quote, totalPrice, currency: 'USD' } };
}

export async function deleteMemory() {
  const { user, supabase } = await requireAuth();
  const { error } = await supabase
    .from('agent_memory')
    .delete()
    .eq('user_id', user.id);

  if (error) return { error: 'Failed to delete memory' };
  return { success: true };
}
