'use client'

const puntosInteres = [
  {
    nombre: 'Terminal Terrestre Loja',
    distancia: '1 min a pie',
    descripcion: 'Ideal para viajeros, a solo unos pasos del hotel.',
  },
  {
    nombre: 'Parque Central de Loja',
    distancia: '10 min en taxi',
    descripcion: 'El corazón de la ciudad, rodeado de historia y cultura.',
  },
  {
    nombre: 'Puerta de la Ciudad',
    distancia: '8 min en taxi',
    descripcion: 'Icono arquitectónico y punto turístico imperdible.',
  },
  {
    nombre: 'Universidad Nacional de Loja',
    distancia: '5 min en taxi',
    descripcion: 'Centro académico de referencia en la región.',
  },
  {
    nombre: 'Café Viviates',
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
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Ubicación</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Estamos diagonal a la terminal terrestre de Loja, con acceso rápido a los principales atractivos turísticos y servicios de la ciudad.</p>
      <div className="mb-10 flex justify-center">
        <div
          style={{ width: '100%' }}
          onClick={() => sendGAEvent('click_mapa_ubicacion', { section: 'ubicacion', method: 'mapa_google' })}
        >
          <iframe
            title="Mapa Eudiq Hotel Loja"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.726964073019!2d-79.205123!3d-3.993123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd131b2e2e2e2b%3A0x123456789abcdef!2sEudiq%20Hotel!5e0!3m2!1ses-419!2sec!4v1697840000000!5m2!1ses-419!2sec"
            width="100%"
            height="350"
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
              href="tel:+59372614151"
              className="text-primary underline hover:text-primary-dark"
              onClick={() => sendGAEvent('click_telefono_ubicacion', { section: 'ubicacion', method: 'telefono' })}
            >
              +593 7 261-4151
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
          href="https://wa.me/593961712106"
          target="_blank"
          rel="noopener"
          className="bg-primary text-white px-6 py-3 rounded text-lg font-bold hover:bg-primary-dark transition"
          onClick={() => sendGAEvent('click_reserva_ubicacion', { section: 'ubicacion', method: 'whatsapp' })}
        >
          Solicita tu reserva por WhatsApp
        </a>
        <a
          href="tel:+59372614151"
          className="bg-[#038C7F] text-white px-6 py-3 rounded text-lg font-bold hover:bg-[#CBD95F] hover:text-[#222] transition"
          onClick={() => sendGAEvent('click_transporte_ubicacion', { section: 'ubicacion', method: 'telefono_transporte' })}
        >
          Solicitar transporte (llamar)
        </a>
      </div>
    </main>
  );
}