import { Metadata } from 'next';
import CafeHomeClient from './CafeHomeClient';

export const metadata: Metadata = {
  title: 'Mejor Cafetería en Loja | Desayunos & Café de Especialidad | Cafetería Viviates',
  description: 'Disfruta del auténtico café lojano y desayunos deliciosos en Cafetería Viviates. Ubicados frente al Terminal Terrestre de Loja, en el Hotel Eudiq. Abierto desde las 07:00.',
  keywords: ['cafetería en loja', 'mejor café de loja', 'desayunos loja', 'cafetería cerca del terminal terrestre', 'hotel eudiq cafetería', 'donde tomar café en loja'],
  openGraph: {
    title: 'Cafetería Viviates | El Mejor Café y Desayunos de Loja',
    description: 'Empieza tu día con el mejor café de especialidad y desayunos tradicionales. Ambiente acogedor frente al Terminal Terrestre.',
    url: 'https://www.hoteleudiq.com/cafe-viviates',
    siteName: 'Hotel Eudiq & Cafetería Viviates',
    images: [
      {
        url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847748/WhatsApp_Image_2025-10-29_at_19.40.30_1_qshs8i.jpg',
        width: 1200,
        height: 630,
        alt: 'Ambiente moderno Cafetería Viviates Loja',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.hoteleudiq.com/cafe-viviates',
  },
};

export default function CafeViviatesLanding() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Cafetería Viviates",
    "image": [
      "https://res.cloudinary.com/dltfsttr7/image/upload/v1761847748/WhatsApp_Image_2025-10-29_at_19.40.30_1_qshs8i.jpg",
      "https://res.cloudinary.com/dltfsttr7/image/upload/v1761847761/WhatsApp_Image_2025-10-29_at_19.40.29_1_hywgib.jpg"
    ],
    "description": "Cafetería de especialidad y desayunos tradicionales lojanos ubicada en el Hotel Eudiq, frente al Terminal Terrestre de Loja.",
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
    "url": "https://www.hoteleudiq.com/cafe-viviates",
    "telephone": "+593992499565",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "07:00",
        "closes": "11:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "16:00",
        "closes": "21:00"
      }
    ],
    "servesCuisine": [
      "Desayuno",
      "Café",
      "Tradicional Lojana"
    ],
    "priceRange": "$$",
    "parentOrganization": {
      "@type": "Hotel",
      "name": "Hotel Eudiq",
      "url": "https://www.hoteleudiq.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CafeHomeClient />
    </>
  );
}