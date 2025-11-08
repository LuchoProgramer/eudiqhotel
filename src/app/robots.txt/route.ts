import { NextResponse } from 'next/server';

export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://www.hoteleudiq.com/sitemap.xml\n`;
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
