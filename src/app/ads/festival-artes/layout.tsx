import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Festival de Artes Loja 2025 | Ubicación Estratégica | Eudiq Hotel',
  description: 'Tu base perfecta para el Festival de Artes Loja 2025. A 5 min del centro histórico, WiFi premium, café especial. Reserva tu experiencia cultural.',
  robots: 'noindex, nofollow', // Landing page de ads, no indexar
  alternates: {
    canonical: 'https://www.hoteleudiq.com/ads/festival-artes',
  },
};

export default function FestivalArtesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}