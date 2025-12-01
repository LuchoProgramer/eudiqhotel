'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Check, MapPin, Wifi, Car, Coffee, Clock, Phone, MessageCircle } from 'lucide-react';

// Función para tracking de conversiones
function trackConversion(action: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      action_type: action,
      campaign: 'terminal_terrestre_ads',
      send_to: 'G-BETH1DLM8W'
    });
  }
}

export default function TerminalTerrestreLandingPage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30 });

  // Countdown timer para urgencia
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Actualiza cada minuto

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_click_ads');
    window.open('https://api.whatsapp.com/send?phone=593726141151&text=Hola,%20vi%20su%20anuncio.%20Quiero%20reservar%20habitación%20cerca%20del%20Terminal%20Terrestre', '_blank');
  };

  const handlePhoneClick = () => {
    trackConversion('phone_click_ads');
    window.location.href = 'tel:+593726141151';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con oferta urgente */}
      <div className="bg-[#038C7F] text-white py-2 text-center">
        <p className="text-sm font-medium">
          🔥 OFERTA LIMITADA: Mejor precio garantizado - Solo quedan {timeLeft.hours}h {timeLeft.minutes}m
        </p>
      </div>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="bg-[#CBD95F]/20 text-[#038C7F] px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                ⭐ HOTEL #1 CERCA DEL TERMINAL
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hotel Diagonal al <span className="text-[#038C7F]">Terminal Terrestre</span>
              </h1>

              <p className="text-xl text-gray-700 mb-6">
                Desayuno incluido • WiFi gratis • Estacionamiento • A 1 minuto caminando
              </p>

              {/* Beneficios principales */}
              <div className="space-y-3 mb-8">
                {[
                  '✅ A 1 minuto caminando del Terminal Terrestre',
                  '✅ Desayuno incluido',
                  '✅ WiFi gratis',
                  '✅ Estacionamiento sin costo adicional',
                  '✅ Recepción 24 horas para tu comodidad',
                  '✅ Mejor precio garantizado reservando directo'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-semibold hover:bg-[#25D366]/90 transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Reservar por WhatsApp
                </button>

                <button
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center gap-2 border-2 border-[#038C7F] text-[#038C7F] px-6 py-4 rounded-full font-semibold hover:bg-[#038C7F] hover:text-white transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_800,c_fill,g_center/v1761845419/EudiqHero_i4cxtc.webp"
                alt="Eudiq Hotel frente al Terminal Terrestre Loja"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />

              {/* Badge flotante */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-[#038C7F]" />
                  <span className="font-semibold">1 min al terminal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Todo incluido para tu <span className="text-[#038C7F]">comodidad</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Coffee className="w-8 h-8 text-[#A9BF04]" />,
                title: 'Desayuno Incluido',
                desc: 'Desayuno sin costo extra'
              },
              {
                icon: <Wifi className="w-8 h-8 text-[#038C7F]" />,
                title: 'WiFi',
                desc: 'Internet gratis en todo el hotel'
              },
              {
                icon: <Car className="w-8 h-8 text-[#A9BF04]" />,
                title: 'Parqueadero Gratis',
                desc: 'Estacionamiento seguro y vigilado 24h'
              },
              {
                icon: <Clock className="w-8 h-8 text-[#038C7F]" />,
                title: 'Recepción 24h',
                desc: 'Atención personalizada las 24 horas'
              }
            ].map((service, idx) => (
              <div key={idx} className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgencia y testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
            <h3 className="text-2xl font-bold text-red-800 mb-2">
              ⏰ Disponibilidad Limitada
            </h3>
            <p className="text-red-700">
              Solo quedan <strong>3 habitaciones disponibles</strong> para las próximas fechas.
              Reserva ahora y asegura el mejor precio.
            </p>
          </div>

          {/* Testimonios rápidos */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Perfecta ubicación junto al terminal. Llegamos en bus desde Cuenca y no tuvimos que caminar nada. Desayuno delicioso incluido.&rdquo;
              </p>
              <p className="font-semibold text-[#038C7F]">- María González, Cuenca</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Hotel limpio, cómodo y súper conveniente. El WiFi excelente y el estacionamiento gratis fue un plus. Lo recomiendo 100%.&rdquo;
              </p>
              <p className="font-semibold text-[#038C7F]">- Carlos Vásquez, Guayaquil</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-[#038C7F] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Listo para reservar la ubicación perfecta?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Mejor precio garantizado • Confirmación inmediata • Sin comisiones extra
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#25D366]/90 transition-all shadow-lg hover:shadow-xl"
            >
              💬 Reservar por WhatsApp
            </button>

            <button
              onClick={handlePhoneClick}
              className="bg-white text-[#038C7F] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all"
            >
              📞 Llamar +593 96 171 2106
            </button>
          </div>

          <p className="text-sm mt-4 text-white/80">
            🕒 Respuesta inmediata • Reserva en menos de 2 minutos
          </p>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Eudiq Hotel Loja. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}