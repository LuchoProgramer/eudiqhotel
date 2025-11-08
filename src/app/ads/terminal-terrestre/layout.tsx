import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Junto al Terminal Terrestre Loja | Reserva Directa | Eudiq Hotel',
  description: 'Hotel diagonal al Terminal Terrestre Loja. Desayuno incluido, WiFi gratis, estacionamiento. A 1 minuto caminando. Mejor precio garantizado reservando directo.',
  robots: 'noindex, nofollow', // Landing page de ads, no indexar
  alternates: {
    canonical: 'https://www.hoteleudiq.com/ads/terminal-terrestre',
  },
};

export default function TerminalTerrestreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}