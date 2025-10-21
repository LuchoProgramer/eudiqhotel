"use client";


// Función para enviar eventos a GA4
type GAEventParams = Record<string, unknown>;
function sendGAEvent(eventName: string, eventParams: GAEventParams = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}


import { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contacto() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionRef]);


  const contactInfo = [
    {
      icon: Phone,
      titulo: 'Teléfono',
  info: '+593 7 261-4151',
  link: 'tel:+59372614151',
    },
    {
      icon: Mail,
      titulo: 'Email',
      info: 'info@eudiqhotel.com',
      link: 'mailto:info@eudiqhotel.com',
    },
    {
      icon: MapPin,
      titulo: 'Dirección',
  info: 'Av. Pablo Palacio, diagonal a la terminal terrestre, Loja 110105',
      link: 'https://maps.app.goo.gl/yZUqhkbKqHijRYVB8',
    },
    {
      icon: Clock,
      titulo: 'Horario',
      info: 'Recepción 24/7',
      link: null,
    },
  ];

  return (
    <section id="contacto" ref={sectionRef} className="relative py-24 md:py-32 bg-[#F2F2F2] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#038C7F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CBD95F]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-[#038C7F] bg-white rounded-full shadow-sm">
            CONTACTO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Reserva tu <span className="text-[#038C7F]">Estadía</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Completa el formulario o contáctanos directamente. 
            Tu próxima experiencia inolvidable comienza aquí.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#038C7F] to-[#A9BF04] rounded-xl flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Solicita tu Reserva</h3>
                  <p className="text-sm text-gray-600">Te responderemos en menos de 24 horas</p>
                </div>
              </div>

              {/* Botón directo a WhatsApp para reservar */}
              <a
                href="https://wa.me/593961712106?text=Hola,%20quiero%20reservar%20en%20EUDIQ%20HOTEL.%20Por%20favor%20ayúdame%20con%20la%20reserva."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 bg-gradient-to-r from-[#038C7F] to-[#A9BF04] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:scale-105"
                onClick={() => sendGAEvent('click_reserva_contacto', { section: 'contacto', method: 'whatsapp_estadia' })}
              >
                <Send size={20} />Reserva tu estadía por WhatsApp
              </a>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                const eventMap: Record<string, { event: string; method: string }> = {
                  'Teléfono': { event: 'click_telefono_contacto', method: 'telefono' },
                  'Email': { event: 'click_email_contacto', method: 'email' },
                  'Dirección': { event: 'click_direccion_contacto', method: 'direccion' },
                };
                const content = (
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#038C7F] to-[#A9BF04] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{item.titulo}</h4>
                      <p className="text-gray-700 group-hover:text-[#038C7F] transition-colors">{item.info}</p>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a
                    key={idx}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => {
                      const event = eventMap[item.titulo];
                      if (event && typeof window !== 'undefined' && typeof window.gtag === 'function') {
                        window.gtag('event', event.event, { section: 'contacto', method: event.method });
                      }
                    }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={idx}>{content}</div>
                );
              })}
            </div>

            <div className="bg-[#25D366]/90 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <MessageCircle size={24} />¿Prefieres WhatsApp?
              </h3>
              <p className="text-white/90 mb-4">
                Chatea con nosotros directamente y resuelve tus dudas al instante.
              </p>
              <a
                href="https://wa.me/593961712106"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#25D366] font-semibold rounded-full hover:bg-green-50 transition-all"
                onClick={() => sendGAEvent('click_whatsapp_contacto', { section: 'contacto', method: 'whatsapp_secundario' })}
              >
                <MessageCircle size={20} />Abrir WhatsApp
              </a>
            </div>

            <div className="bg-[#038C7F]/90 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-3">Políticas de Reserva</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Check-in: 14:00 hrs | Check-out: 12:00 hrs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Cancelación gratuita hasta 24h antes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Desayuno incluido en todas las habitaciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Wi-Fi y estacionamiento sin costo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}