'use client'

import { Wifi, UtensilsCrossed, Car, Coffee, Shirt, Handshake } from 'lucide-react';
import { trackWhatsappClick } from '../../components/ConversionOptimizer';

const servicios = [
  {
    nombre: 'Wi-Fi',
    descripcion: 'Internet gratis en todas las áreas del hotel, ideal para trabajo y entretenimiento.',
    Icono: Wifi,
  },
  {
    nombre: 'Desayuno incluido',
    descripcion: 'Incluido en tu estadía. Variedad de opciones frescas y café de especialidad cada mañana.',
    Icono: UtensilsCrossed,
  },
  {
    nombre: 'Estacionamiento Privado',
    descripcion: 'Parqueadero seguro y gratuito para huéspedes, con acceso directo al hotel.',
    Icono: Car,
  },
  {
    nombre: 'Cafetería Viviates',
    descripcion: 'Disfruta de nuestro café de especialidad 100% lojano en el lobby o en tu habitación.',
    Icono: Coffee,
  },
  {
    nombre: 'Lavandería',
    descripcion: 'Servicio de lavado y planchado disponible para estancias largas o viajes de negocios.',
    Icono: Shirt,
  },
  {
    nombre: 'Atención personalizada',
    descripcion: 'Nuestro equipo está siempre disponible para ayudarte y hacer tu estadía inolvidable.',
    Icono: Handshake,
  },
];

// Función para enviar eventos a GA4
type GAEventParams = Record<string, unknown>;
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
function sendGAEvent(eventName: string, eventParams: GAEventParams = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}

export default function ServiciosPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Servicios</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Descubre todos los servicios que hacen de Eudiq Hotel Loja la mejor opción para tu viaje.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {servicios.map((serv) => {
          const IconoComponent = serv.Icono;
          return (
            <div key={serv.nombre} className="rounded-lg shadow-lg bg-white p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <IconoComponent className="w-12 h-12 mb-4 text-[#038C7F]" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold mb-2">{serv.nombre}</h2>
              <p className="text-gray-700 mb-2 text-center">{serv.descripcion}</p>
            </div>
          )
        })}
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://api.whatsapp.com/send?phone=593961712106"
          target="_blank"
          rel="noopener"
          className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-primary-dark transition-colors"
          style={{ backgroundColor: '#038C7F' }}
          onClick={() => trackWhatsappClick('servicios_whatsapp')}
        >
          Solicita tu reserva por WhatsApp
        </a>
      </div>
    </main>
  );
}