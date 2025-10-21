
import { habitaciones } from '@/lib/data';
import Image from 'next/image';

// Función para enviar eventos a GA4
type GAEventParams = Record<string, any>;
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
function sendGAEvent(eventName: string, eventParams: GAEventParams = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}

export const metadata = {
  title: 'Habitaciones | Eudiq Hotel Loja',
  description: 'Descubre nuestras habitaciones de lujo, familiares y ejecutivas en Eudiq Hotel Loja. Wi-Fi premium, desayuno incluido y comodidad total cerca de la terminal terrestre.',
};

export default function HabitacionesPage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Habitaciones</h1>
  <p className="mb-8 text-center text-lg text-gray-600">Elige la habitación perfecta para tu estadía en Loja. Todas incluyen Wi-Fi premium, desayuno tipo buffet y acceso a Café Viviates.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {habitaciones.map((hab) => (
          <div key={hab.nombre} className="rounded-lg shadow-lg bg-white p-6 flex flex-col items-center">
            <Image src={hab.imagenes[0].url} alt={hab.imagenes[0].alt} width={400} height={250} className="rounded-md mb-4 object-cover" />
            <h2 className="text-2xl font-semibold mb-2">{hab.nombre}</h2>
            <p className="mb-2 text-gray-700">{hab.descripcion}</p>
            <p className="mb-2 font-bold text-primary">Desde ${hab.precio} USD</p>
            <ul className="mb-4 text-sm text-gray-500">
              {hab.amenidades.map((a) => (
                <li key={a}>• {a}</li>
              ))}
            </ul>
            <a
              href="https://wa.me/593961712106"
              target="_blank"
              rel="noopener"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
              onClick={() => sendGAEvent('click_reserva_habitacion', { section: 'habitaciones', method: 'whatsapp', room: hab.nombre })}
            >
              Reservar por WhatsApp
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
