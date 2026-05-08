import { updateSession } from '@/lib/supabase/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(30, '5 m'),
  analytics: true,
});

export async function proxy(request: NextRequest) {
  // Supabase session refresh
  const response = await updateSession(request);

  // Rate limiting on AI endpoint
  if (request.nextUrl.pathname.startsWith('/api/agent') ||
      request.nextUrl.pathname.startsWith('/api/chat')) {
    try {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
               || request.headers.get('x-real-ip')
               || 'anonymous';
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: 'Too many requests' },
          { status: 429 }
        );
      }
    } catch (e) {
      console.error('Rate limit error:', e);
    }
  }

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains'
  );
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://api.openai.com https://*.supabase.co",
      "worker-src 'self' blob:",
    ].join('; ')
  );

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
