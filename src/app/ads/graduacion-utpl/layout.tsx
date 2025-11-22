import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Graduación UTPL Loja | Familias Bienvenidas | Eudiq Hotel',
  description: 'Hotel perfecto para graduación UTPL. Habitaciones familiares, desayuno incluido, a 5 min del campus. Tarifas especiales para grupos familiares.',
  robots: 'noindex, nofollow', // Landing page de ads, no indexar
  alternates: {
    canonical: 'https://www.hoteleudiq.com/ads/graduacion-utpl',
  },
};

export default function GraduacionUTPLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}