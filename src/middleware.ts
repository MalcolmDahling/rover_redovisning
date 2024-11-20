import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const response = NextResponse.next();
  response.headers.set('Accept-Ranges', 'none');
  return response;
}
