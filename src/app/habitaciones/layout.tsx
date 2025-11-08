import { ReactNode } from 'react';
import { habitaciones } from '@/lib/data';

type HabitacionImagen = {
  url: string;
  alt: string;
};

type Habitacion = {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  capacidad: string;
  cama: string;
  tamaño: string;
  imagenes: HabitacionImagen[];
  amenidades?: string[];
};

export const metadata = {
  title: 'Habitaciones Hotel Loja | Eudiq Hotel Terminal Terrestre',
  description: 'Habitaciones confortables en Loja cerca del Terminal Terrestre. Familiares, dobles y ejecutivas con desayuno incluido, WiFi gratis. Reservas para graduación UTPL.',
  alternates: {
    canonical: 'https://www.hoteleudiq.com/habitaciones',
  },
  openGraph: {
    title: 'Habitaciones Hotel Loja | Eudiq Hotel Terminal Terrestre',
    description: 'Habitaciones confortables cerca del Terminal Terrestre Loja. Familiares, dobles y ejecutivas con desayuno incluido, WiFi gratis.',
    url: 'https://www.hoteleudiq.com/habitaciones',
    images: ['https://res.cloudinary.com/dltfsttr7/image/upload/v1761845419/EudiqHero_i4cxtc.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habitaciones Hotel Loja | Eudiq Hotel Terminal Terrestre',
    description: 'Habitaciones confortables en Loja cerca del Terminal Terrestre. Desayuno incluido, WiFi gratis. Ideal para graduación UTPL.',
    images: ['https://res.cloudinary.com/dltfsttr7/image/upload/v1761845419/EudiqHero_i4cxtc.webp'],
  },
};

export default function HabitacionesLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Generar datos estructurados para habitaciones
  const roomsJsonLd = {
    '@context': 'https://schema.org',
  '@graph': (habitaciones as Habitacion[]).map((hab) => ({
      '@type': 'HotelRoom',
      'name': hab.nombre,
      'description': hab.descripcion,
      'bed': {
        '@type': 'BedDetails',
        'typeOfBed': hab.cama,
      },
      'occupancy': {
        '@type': 'QuantitativeValue',
        'value': Number((hab.capacidad.match(/\d+/) || [1])[0]),
        'unitText': 'personas',
      },
      ...(hab.amenidades && hab.amenidades.length > 0 && {
        'amenityFeature': hab.amenidades.map((a) => ({
          '@type': 'LocationFeatureSpecification',
          'name': a,
          'value': true,
        })),
      }),
      ...(hab.imagenes && hab.imagenes.length > 0 && {
        'image': hab.imagenes.map((img) => img.url),
      }),
      'offers': {
        '@type': 'Offer',
        'price': String(hab.precio),
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock',
        'url': `https://www.hoteleudiq.com/habitaciones#${hab.nombre.toLowerCase().replace(/\s+/g, '-')}`,
      },
    })),
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomsJsonLd) }} 
      />
      {children}
    </>
  );
}