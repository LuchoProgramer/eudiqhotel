import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  // Cambia esto por tu dominio principal
  const primaryDomain = 'hoteleudiq.com';

  if (host && host.endsWith('.vercel.app')) {
    // Redirige a .com manteniendo el path y query
    const url = request.nextUrl;
    url.host = primaryDomain;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
