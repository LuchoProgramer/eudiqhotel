'use client'

import { trackWhatsappClick, trackConversion } from '../../components/ConversionOptimizer';

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
    nombre: 'Universidad Técnica Particular de Loja',
    distancia: '5 min en taxi',
    descripcion: 'Centro académico de referencia en la región.',
  },
  {
    nombre: 'Universidad Internacional del Ecuador (UIDE)',
    distancia: '3 min taxi',
    descripcion: 'Institución educativa de excelencia.',
  },
  {
    nombre: 'Teatro Benjamín Carrión',
    distancia: '7 min pie',
    descripcion: 'Centro cultural y de artes escénicas de Loja.',
  },
  {
    nombre: 'Conservatorio de Música Salvador Bustamante Celi',
    distancia: '5 min pie',
    descripcion: 'Referente musical de la ciudad.',
  },
  {
    nombre: 'Hospital de Solca',
    distancia: '3 min taxi',
    descripcion: 'Atención médica especializada.',
  },
  {
    nombre: 'Sendero orillas del Zamora',
    distancia: '10 min pie',
    descripcion: 'Recorrido natural junto al río Zamora.',
  },
  {
    nombre: 'Pista de karting',
    distancia: '10 min taxi',
    descripcion: 'Diversión y adrenalina para toda la familia.',
  },
  {
    nombre: 'Cafetería Viviates',
    distancia: 'Dentro del hotel',
    descripcion: 'Disfruta del mejor café lojano sin salir del hotel.',
  },
];

export default function UbicacionPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Ubicación</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Estamos diagonal a la terminal terrestre de Loja, con acceso rápido a los principales atractivos turísticos y servicios de la ciudad.</p>
      <div className="mb-10 flex flex-col items-center justify-center gap-6">
        <div
          style={{ width: '100%' }}
          className="rounded-xl overflow-hidden shadow-lg"
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

        <a
          href="https://maps.app.goo.gl/5dCMqMs8TNnuUAXU7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#038C7F] text-white font-bold rounded-full shadow-md hover:bg-[#026B61] transition-transform hover:scale-105"
          onClick={() => trackConversion({
            action: 'map_click',
            category: 'interaction',
            section: 'ubicacion_page',
            label: 'google_maps_cta'
          })}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          Abrir en Google Maps
        </a>
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Puntos de interés cercanos</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
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
          onClick={() => trackWhatsappClick('ubicacion_whatsapp')}
        >
          Solicita tu reserva por WhatsApp
        </a>
      </div>
    </main>
  );
}