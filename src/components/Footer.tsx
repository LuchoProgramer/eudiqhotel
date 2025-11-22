'use client'

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

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10 mt-8 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="font-bold text-xl mb-2">Eudiq Hotel Loja</h2>
          <p>
            <span
              className="cursor-pointer hover:text-green-300"
              onClick={() => sendGAEvent('click_direccion_hotel', { section: 'footer', action: 'direccion' })}
            >
              Avenida 8 de diciembre y Juan José Flores diagonal a la Terminal Terrestre, Loja, Ecuador
            </span>
          </p>
          <p>
            Tel: <a
              href="tel:+593961712106"
              className="underline hover:text-green-300"
              onClick={() => sendGAEvent('click_llamar_hotel', { section: 'footer', action: 'telefono' })}
            >
              +593 96 171 2106
            </a>
          </p>
          <p>
            Email: <a
              href="mailto:eudiqhotel@gmail.com"
              className="underline hover:text-green-300"
              onClick={() => sendGAEvent('click_email_hotel', { section: 'footer', action: 'email' })}
            >
              eudiqhotel@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Enlaces útiles</h3>
          <ul className="space-y-1">
            <li><a href="/habitaciones" className="hover:underline hover:text-green-300">Habitaciones</a></li>
            <li><a href="/servicios" className="hover:underline hover:text-green-300">Servicios</a></li>
            <li><a href="/cafe-viviates" className="hover:underline hover:text-green-300">Cafetería Viviates</a></li>
            <li><a href="/ubicacion" className="hover:underline hover:text-green-300">Ubicación</a></li>
            <li><Link href="/blog" className="hover:underline hover:text-green-300">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contáctanos</h3>
          <a
            href="https://wa.me/593961712106"
            target="_blank"
            rel="noopener"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition mb-2"
            onClick={() => sendGAEvent('click_reserva_footer', { section: 'footer', method: 'whatsapp' })}
          >
            WhatsApp
          </a>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://www.facebook.com/eudiqhotel"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="hover:text-blue-400"
              onClick={() => sendGAEvent('click_red_social', { section: 'footer', network: 'facebook' })}
            >
              <svg width="24" height="24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
            </a>
            <a
              href="https://www.instagram.com/hoteleudiq"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="hover:text-pink-400"
              onClick={() => sendGAEvent('click_red_social', { section: 'footer', network: 'instagram' })}
            >
              <svg width="24" height="24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8 opacity-80 border-t border-neutral-800 pt-4">
        &copy; 2025 Eudiq Hotel Loja. Todos los derechos reservados.
      </div>
    </footer>
  )
}