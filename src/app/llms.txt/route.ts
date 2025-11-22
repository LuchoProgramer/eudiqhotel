import { NextResponse } from 'next/server';
import { BLOG_POSTS } from '@/data/blog-posts';

const SITE_URL = 'https://eudiqhotel.com';

export async function GET() {
  // Datos principales
  const nombre = 'Eudiq Hotel Loja';
  const descripcion = 'Hotel en Loja, Ecuador, cerca de la terminal terrestre. Habitaciones confortables, Wi-Fi rápido, desayuno incluido y Café Viviates.';
  const publico = 'Viajeros, turistas, familias y ejecutivos que buscan comodidad y servicios completos en Loja.';
  const whatsapp = '[+593 961 712 106](https://wa.me/593961712106)';
  const direccion = '[Avenida 8 de diciembre y Juan José Flores diagonal a la Terminal Terrestre, Loja, Ecuador](https://maps.app.goo.gl/5dCMqMs8TNnuUAXU7)';
  const email = '[eudiqhotel@gmail.com](mailto:eudiqhotel@gmail.com)';

  // Servicios principales
  const servicios = [
  { nombre: 'Habitaciones', url: `${SITE_URL}/#habitaciones`, desc: 'Alojamiento cómodo y familiar.' },
    { nombre: 'Café Viviates', url: `${SITE_URL}/#servicios`, desc: 'Café de especialidad propio.' },
  { nombre: 'Wi-Fi', url: `${SITE_URL}/#servicios`, desc: 'Internet de alta velocidad.' },
    { nombre: 'Desayuno incluido', url: `${SITE_URL}/#servicios`, desc: 'Desayuno buffet todos los días.' },
    { nombre: 'Estacionamiento', url: `${SITE_URL}/#servicios`, desc: 'Parqueadero privado y seguro.' },
    { nombre: 'Ubicación', url: `${SITE_URL}/#ubicacion`, desc: 'Diagonal a la terminal terrestre.' },
    { nombre: 'Contacto', url: `${SITE_URL}/#contacto`, desc: 'Formulario y datos de contacto.' },
  ];

  // Blog
  const blog = BLOG_POSTS.map(post => `- [${post.title}](${SITE_URL}/blog/${post.slug}): Borrador de artículo.`).join('\n');

  // Markdown generado
  const markdown = `# ${nombre}
# Nota: Las URLs enlazadas son páginas HTML.

> ${descripcion}

${publico}

**WhatsApp:** ${whatsapp}
**Dirección:** ${direccion}
**Email:** ${email}

## Servicios
${servicios.map(s => `- [${s.nombre}](${s.url}): ${s.desc}`).join('\n')}

## Blog
${blog}

## Opcional
- [Ubicación](${SITE_URL}/#ubicacion): Mapa y puntos de interés cercanos.
- [Contacto](${SITE_URL}/#contacto): Formulario y datos de contacto.
`;

  return new NextResponse(markdown, {
    status: 200,
    headers: { 
      'Content-Type': 'text/markdown; charset=utf-8',  // ✅ Agregado charset=utf-8
    },
  });
}