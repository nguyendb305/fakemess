import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

// Simple in-memory store for rate limiting
const ipRequests = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 50; // requests
const RATE_WINDOW = 60 * 1000; // 1 minute in milliseconds

// Create the i18n middleware
const i18nMiddleware = createMiddleware(routing);

// Combine middleware functions
export async function middleware(request: NextRequest) {
  // Skip rate limiting for static files and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/static') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return i18nMiddleware(request);
  }

  const ip = request.ip ?? '127.0.0.1';
  const now = Date.now();
  
  // Get or initialize rate limit data for this IP
  let rateData = ipRequests.get(ip);
  if (!rateData || now > rateData.resetTime) {
    rateData = { count: 0, resetTime: now + RATE_WINDOW };
    ipRequests.set(ip, rateData);
  }

  // Increment request count
  rateData.count++;

  // Check if rate limit exceeded
  if (rateData.count > RATE_LIMIT) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  // Clean up old entries periodically (every 5 minutes)
  if (Math.random() < 0.1) { // 10% chance to clean up on each request
    ipRequests.forEach((data, storedIp) => {
      if (now > data.resetTime) {
        ipRequests.delete(storedIp);
      }
    });
  }

  return i18nMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};