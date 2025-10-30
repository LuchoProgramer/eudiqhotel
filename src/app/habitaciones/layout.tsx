import { ReactNode } from 'react';
import { habitaciones } from '@/lib/data';

export const metadata = {
  title: 'Habitaciones | Eudiq Hotel Loja',
  description: 'Descubre nuestras habitaciones familiares y ejecutivas en Eudiq Hotel Loja. Wi-Fi rápido, desayuno incluido y comodidad total cerca de la terminal terrestre.',
  openGraph: {
    title: 'Habitaciones | Eudiq Hotel Loja',
    description: 'Elige entre habitaciones familiares, dobles y ejecutivas en Eudiq Hotel Loja. Wi-Fi, desayuno y comodidad total cerca de la terminal terrestre.',
    url: 'https://eudiqhotel.com/habitaciones',
    images: ['https://res.cloudinary.com/dltfsttr7/image/upload/v1761845419/EudiqHero_i4cxtc.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habitaciones | Eudiq Hotel Loja',
    description: 'Descubre nuestras habitaciones familiares y ejecutivas en Eudiq Hotel Loja. Wi-Fi rápido, desayuno incluido y comodidad total cerca de la terminal terrestre.',
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
  '@graph': habitaciones.map((hab: any) => ({
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
        'amenityFeature': hab.amenidades.map((a: any) => ({
          '@type': 'LocationFeatureSpecification',
          'name': a,
          'value': true,
        })),
      }),
      ...(hab.imagenes && hab.imagenes.length > 0 && {
        'image': hab.imagenes.map((img: any) => img.url),
      }),
      'offers': {
        '@type': 'Offer',
        'price': String(hab.precio),
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock',
        'url': `https://eudiqhotel.com/habitaciones#${hab.nombre.toLowerCase().replace(/\s+/g, '-')}`,
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