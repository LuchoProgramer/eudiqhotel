import { ReactNode } from 'react';

export const metadata = {
  title: 'Servicios Hotel Loja | WiFi Gratis, Desayuno Incluido | Eudiq Hotel',
  description: 'Servicios del hotel en Loja: WiFi gratis, desayuno incluido, estacionamiento gratuito, Café Viviates, lavandería. Hotel cerca Terminal Terrestre.',
  alternates: {
    canonical: 'https://www.hoteleudiq.com/servicios',
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}