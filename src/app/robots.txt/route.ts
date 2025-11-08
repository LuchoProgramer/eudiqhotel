import { NextResponse } from 'next/server';

export async function GET() {
  const body = `# Robots.txt para Eudiq Hotel Loja - Hotel cerca del Terminal Terrestre
# Actualizado: 7 noviembre 2025
# Optimizado para: Turismo, Hospedaje, Reservas

# Permitir acceso a todos los robots de búsqueda
User-agent: *
Allow: /

# Bloquear acceso a archivos y directorios técnicos
Disallow: /api/
Disallow: /_next/
Disallow: /admin
Disallow: /dashboard

# Permitir explícitamente contenido importante para SEO hotelero
Allow: /habitaciones/
Allow: /servicios/
Allow: /cafe-viviates/
Allow: /blog/
Allow: /ubicacion/
Allow: /contacto
Allow: /ads/

# Crawler específico de Google (prioritario para hoteles)
User-agent: Googlebot
Allow: /
# Permitir imágenes de habitaciones y hotel
Allow: /images/
Allow: /*.jpg
Allow: /*.png
Allow: /*.webp

# Crawler específico de Bing
User-agent: Bingbot
Allow: /

# Google Images (importante para hoteles)
User-agent: Googlebot-Image
Allow: /

# Crawlers de redes sociales (marketing hotelero)
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Crawlers de mapas y ubicación (crucial para hoteles)
User-agent: Googlebot-Mobile
Allow: /

# Sitemap principal
Sitemap: https://www.hoteleudiq.com/sitemap.xml

# Crawl delay para evitar sobrecarga del servidor
Crawl-delay: 1
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache por 24 horas
    },
  });
}
