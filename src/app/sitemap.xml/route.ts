import { NextResponse } from 'next/server';

import { BLOG_POSTS } from '@/data/blog-posts';

const SITE_URL = 'https://eudiqhotel.com';

export async function GET() {
  // Rutas estáticas principales
  const staticPages = [
    '',
    '/habitaciones',
    '/servicios',
    '/galeria',
    '/ubicacion',
    '/testimonios',
    '/contacto',
    // Agrega aquí más rutas si tienes
  ].map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : route === '/contacto' ? 0.9 : 0.7,
  }));

  // Rutas de blog dinámicas (ejemplo con borradores)
  const blogPages = BLOG_POSTS.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Unifica todas las rutas
  const allPages = [...staticPages, ...blogPages];

  // Genera el XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages
    .map(
      page => `<url>\n  <loc>${page.url}</loc>\n  <lastmod>${page.lastModified}</lastmod>\n  <changefreq>${page.changeFrequency}</changefreq>\n  <priority>${page.priority}</priority>\n</url>`
    )
    .join('\n')}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  });
}
