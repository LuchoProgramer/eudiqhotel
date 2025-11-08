import { ReactNode } from 'react';

export const metadata = {
  title: 'Ubicación Hotel Loja Terminal Terrestre | Eudiq Hotel Mapa y Rutas',
  description: 'Hotel en Loja ubicado estratégicamente junto al Terminal Terrestre. Cerca de UTPL, Parque Jipiro, centro histórico. Mapa, rutas y puntos turísticos.',
  alternates: {
    canonical: 'https://www.hoteleudiq.com/ubicacion',
  },
};

export default function UbicacionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}