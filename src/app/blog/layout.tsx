import { ReactNode } from 'react';

export const metadata = {
  title: 'Blog Turismo Loja | Guías y Consejos | Eudiq Hotel',
  description: 'Blog de turismo en Loja: guías de viaje, qué hacer en Loja, mejores cafés, historia local. Consejos para tu estadía cerca del Terminal Terrestre.',
  alternates: {
    canonical: 'https://www.hoteleudiq.com/blog',
  },
  openGraph: {
    title: 'Blog Turismo Loja | Guías y Consejos | Eudiq Hotel',
    description: 'Descubre Loja con nuestras guías de viaje, consejos turísticos y recomendaciones locales. Blog del Eudiq Hotel.',
    url: 'https://www.hoteleudiq.com/blog',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Eudiq Hotel Loja",
            "description": "Blog de turismo y guías de viaje para Loja, Ecuador. Consejos, recomendaciones y cultura local.",
            "url": "https://www.hoteleudiq.com/blog",
            "inLanguage": "es-EC",
            "author": {
              "@type": "Organization",
              "name": "Eudiq Hotel Loja",
              "url": "https://www.hoteleudiq.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Eudiq Hotel Loja",
              "url": "https://www.hoteleudiq.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.hoteleudiq.com/Eudiq.png"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}