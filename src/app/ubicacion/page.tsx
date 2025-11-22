'use client'

const puntosInteres = [
  {
    nombre: 'Terminal Terrestre Loja',
    distancia: '3 min a pie',
    descripcion: 'Ideal para viajeros, a solo unos pasos del hotel.',
  },
  {
    nombre: 'Parque Jipiro',
    distancia: '4 min caminando',
    descripcion: 'Hermoso parque recreacional con actividades para toda la familia.',
  },
  {
    nombre: 'Puerta de la Ciudad',
    distancia: '5 min en taxi',
    descripcion: 'Icono arquitectónico y punto turístico imperdible.',
  },
  {
    nombre: 'Universidad Nacional de Loja',
    distancia: '5 min en taxi',
    descripcion: 'Centro académico de referencia en la región.',
  },
  {
    nombre: 'Cafetería Viviates',
    distancia: 'Dentro del hotel',
    descripcion: 'Disfruta del mejor café lojano sin salir del hotel.',
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

export default function UbicacionPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Ubicación</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Estamos diagonal a la terminal terrestre de Loja, con acceso rápido a los principales atractivos turísticos y servicios de la ciudad.</p>
      <div className="mb-10 flex justify-center">
        <div
          style={{ width: '100%' }}
          onClick={() => sendGAEvent('click_mapa_ubicacion', { section: 'ubicacion', method: 'mapa_google' })}
        >
          <iframe
            title="Mapa Eudiq Hotel Loja"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.2170636793585!2d-79.2044375!3d-3.9756875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb4874ecd19be9%3A0xed2fb9939f45f4db!2sEUDIQ%20HOTEL!5e0!3m2!1sen!2sec!4v1760161127420!5m2!1sen!2sec"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Puntos de interés cercanos</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Teléfono</strong>:{' '}
            <a
              href="tel:+593961712106"
              className="text-primary underline hover:text-primary-dark"
              onClick={() => sendGAEvent('click_telefono_ubicacion', { section: 'ubicacion', method: 'telefono' })}
            >
              +593 96 171 2106
            </a>
            {' '} (Llama para reservas o información)
          </li>
          {puntosInteres.map((p) => (
            <li key={p.nombre}>
              <strong>{p.nombre}</strong> ({p.distancia}): {p.descripcion}
            </li>
          ))}
        </ul>
      </section>
      <div className="text-center mt-8 flex flex-col gap-4 items-center">
        <a
          href="https://api.whatsapp.com/send?phone=593961712106"
          target="_blank"
          rel="noopener"
          className="bg-primary text-white px-6 py-3 rounded text-lg font-bold hover:bg-primary-dark transition"
          onClick={() => sendGAEvent('click_reserva_ubicacion', { section: 'ubicacion', method: 'whatsapp' })}
        >
          Solicita tu reserva por WhatsApp
        </a>
      </div>
    </main>
  );
}