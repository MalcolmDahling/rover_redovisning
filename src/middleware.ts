import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';
  if (userAgent.includes('facebookexternalhit')) {
    const response = NextResponse.next();
    // Disable caching for Facebook scraper requests
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Accept-Ranges', 'none');
    return response;
  }
  return NextResponse.next();
}
