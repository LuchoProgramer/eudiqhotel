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
      {/* Reseña Google verificada */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-4 flex items-center gap-4 max-w-xl w-full">
          {/* Logo Google SVG */}
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <g>
              <path d="M44.5 20H24V28.5H36.1C34.7 32.1 31.1 34.5 27 34.5C22.3 34.5 18.3 30.5 18.3 25.8C18.3 21.1 22.3 17.1 27 17.1C29.1 17.1 31.1 17.9 32.6 19.2L38.1 14.7C35.3 12.3 31.4 10.5 27 10.5C17.8 10.5 10 18.3 10 27.5C10 36.7 17.8 44.5 27 44.5C36.2 44.5 44 36.7 44 27.5C44 25.9 44.3 23.9 44.5 20Z" fill="#4285F4"/>
              <path d="M6.3 14.7L12.1 19.2C13.6 17.9 15.6 17.1 17.7 17.1C22.4 17.1 26.4 21.1 26.4 25.8C26.4 30.5 22.4 34.5 17.7 34.5C13.6 34.5 10 32.1 8.6 28.5H0V20H18.3V28.5H6.3C7.7 32.1 11.3 34.5 15.4 34.5C20.1 34.5 24.1 30.5 24.1 25.8C24.1 21.1 20.1 17.1 15.4 17.1C13.3 17.1 11.3 17.9 9.8 19.2L4.3 14.7C7.1 12.3 11 10.5 15.4 10.5C24.6 10.5 32.4 18.3 32.4 27.5C32.4 36.7 24.6 44.5 15.4 44.5C6.2 44.5 -1.6 36.7 -1.6 27.5C-1.6 25.9 -1.3 23.9 -1.1 20Z" fill="#34A853"/>
              <path d="M44.5 20H24V28.5H36.1C34.7 32.1 31.1 34.5 27 34.5C22.3 34.5 18.3 30.5 18.3 25.8C18.3 21.1 22.3 17.1 27 17.1C29.1 17.1 31.1 17.9 32.6 19.2L38.1 14.7C35.3 12.3 31.4 10.5 27 10.5C17.8 10.5 10 18.3 10 27.5C10 36.7 17.8 44.5 27 44.5C36.2 44.5 44 36.7 44 27.5C44 25.9 44.3 23.9 44.5 20Z" fill="#FBBC05"/>
              <path d="M6.3 14.7L12.1 19.2C13.6 17.9 15.6 17.1 17.7 17.1C22.4 17.1 26.4 21.1 26.4 25.8C26.4 30.5 22.4 34.5 17.7 34.5C13.6 34.5 10 32.1 8.6 28.5H0V20H18.3V28.5H6.3C7.7 32.1 11.3 34.5 15.4 34.5C20.1 34.5 24.1 30.5 24.1 25.8C24.1 21.1 20.1 17.1 15.4 17.1C13.3 17.1 11.3 17.9 9.8 19.2L4.3 14.7C7.1 12.3 11 10.5 15.4 10.5C24.6 10.5 32.4 18.3 32.4 27.5C32.4 36.7 24.6 44.5 15.4 44.5C6.2 44.5 -1.6 36.7 -1.6 27.5C-1.6 25.9 -1.3 23.9 -1.1 20Z" fill="#EA4335"/>
            </g>
          </svg>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-gray-900">Robert James Gilchrist</span>
              <span className="text-xs bg-primary text-white rounded px-2 py-0.5 font-bold">5/5</span>
              <span className="text-xs text-gray-500">Google Verificado</span>
            </div>
            <div className="text-gray-700 text-sm mb-1">“Very clean and quiet!”</div>
            <div className="text-xs text-gray-500">Rooms 5.0 · Service 5.0 · Location 5.0 · <span className="font-medium">2 meses atrás</span></div>
          </div>
        </div>
      </div>
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
          className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-primary-dark transition-colors"
          style={{ backgroundColor: '#038C7F' }}
          onClick={() => sendGAEvent('click_reserva_servicios', { section: 'servicios', method: 'whatsapp' })}
        >
          Solicita tu reserva por WhatsApp
        </a>
      </div>
    </main>
  );
}