'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const ContactSchema = z.object({
  name:     z.string().min(2).max(100),
  email:    z.string().email(),
  message:  z.string().min(10).max(2000),
  honeypot: z.string().max(0),
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

async function apiPost(path: string, body: unknown) {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || 'API error');
  }
  return res.json();
}

export async function submitContact(formData: unknown) {
  const parsed = ContactSchema.safeParse(formData);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }
  try {
    await apiPost('/api/contacts', {
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
    });
    revalidatePath('/');
    return { success: true };
    } catch {
    return { error: 'Failed to save contact' };
  }
}

export async function createBooking(data: unknown) {
  const parsed = BookingSchema.safeParse(data);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }
  try {
    await apiPost('/api/bookings', {
      scheduled_at: parsed.data.scheduledAt,
      duration_mins: parsed.data.durationMins,
      notes: parsed.data.notes,
    });
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to create booking' };
  }
}

export async function saveQuote(data: unknown) {
  const parsed = QuoteSchema.safeParse(data);
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error.flatten() };
  }
  try {
    const totalPrice = parsed.data.services.length * 1000;
    await apiPost('/api/quotes', {
      config: { services: parsed.data.services },
    });
    revalidatePath('/');
    return { success: true, quote: { totalPrice, currency: 'USD' } };
  } catch {
    return { error: 'Failed to save quote' };
  }
}

export async function deleteMemory() {
  return { success: true };
}
