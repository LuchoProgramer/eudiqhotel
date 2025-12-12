import { Metadata } from 'next';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
  title: 'Menú | Desayunos cerca del Terminal Terrestre Loja | Cafetería Viviates',
  description: '¿Buscas desayunos o tigrillo cerca del Terminal Terrestre de Loja? Cafetería Viviates en Hotel Eudiq ofrece comida tradicional, humitas y café de especialidad. ¡Mira nuestro menú y precios!',
  keywords: ['desayunos loja', 'comida cerca terminal terrestre loja', 'tigrillo loja', 'cafetería viviates menú', 'hotel eudiq restaurante', 'donde comer en loja'],
  openGraph: {
    title: 'Menú Cafetería Viviates | Desayunos y Café en Loja',
    description: 'El mejor desayuno y café de especialidad frente al Terminal Terrestre. Revisa nuestro menú completo aquí.',
    url: 'https://www.hoteleudiq.com/cafe-viviates/menu',
    siteName: 'Hotel Eudiq & Cafetería Viviates',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80', // Foto de café/postre genérica de alta calidad o la que usa el layout
        width: 800,
        height: 600,
        alt: 'Café de especialidad y desayunos en Loja',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.hoteleudiq.com/cafe-viviates/menu',
  },
};

export default function MenuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menú Cafetería Viviates",
    "description": "Menú de desayunos, platos tradicionales lojanos y café de especialidad.",
    "url": "https://www.hoteleudiq.com/cafe-viviates/menu",
    "mainEntityOfPage": "https://www.hoteleudiq.com/cafe-viviates/menu",
    "inLanguage": "es-EC",
    "provider": {
      "@type": "Restaurant",
      "name": "Cafetería Viviates",
      "parentOrganization": {
        "@type": "Hotel",
        "name": "Hotel Eudiq",
        "url": "https://www.hoteleudiq.com"
      },
      "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. 8 de Diciembre, diagonal al Terminal Terrestre",
        "addressLocality": "Loja",
        "addressRegion": "Loja",
        "postalCode": "110105",
        "addressCountry": "EC"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -3.975589,
        "longitude": -79.207037
      },
      "telephone": "+593992499565",
      "priceRange": "$$"
    },
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Desayunos",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Desayuno Americano",
            "description": "Huevos revueltos, tostadas, tocino",
            "offers": {
              "@type": "Offer",
              "price": "4.50",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Desayuno Tradicional",
            "description": "Tamal o Humita, jugo y café",
            "offers": {
              "@type": "Offer",
              "price": "4.50",
              "priceCurrency": "USD"
            }
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Tradicional Lojano",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Tigrillo",
            "description": "Plátano verde majado con queso y huevo",
            "offers": {
              "@type": "Offer",
              "price": "3.75",
              "priceCurrency": "USD"
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuClient />
    </>
  );
}
