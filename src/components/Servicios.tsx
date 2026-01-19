'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Utensils, Wifi, Car, Coffee, Sparkles, Clock, MapPin, PawPrint } from 'lucide-react';

const servicios = [
  {
    icon: Coffee,
    titulo: 'Cafetería Viviates',
    descripcion: 'Nuestra marca propia de café. Disfruta de los mejores granos de la región en cada taza.',
    destacado: true,
  },
  {
    icon: Wifi,
    titulo: 'Wi-Fi',
    descripcion: 'Internet gratis en todas las áreas. Ideal para trabajo remoto y entretenimiento.',
    destacado: false,
  },
  {
    icon: Car,
    titulo: 'Estacionamiento',
    descripcion: 'Parqueadero privado y seguro sin costo adicional.',
    destacado: false,
  },
  {
    icon: PawPrint,
    titulo: 'Pet Friendly',
    descripcion: 'Tus mascotas son bienvenidas. Ofrecemos un ambiente cómodo para que viajes con tu compañero peludo.',
    destacado: true,
  },
  {
    icon: Sparkles,
    titulo: 'Servicio de Limpieza',
    descripcion: 'Housekeeping diario con productos de calidad. Servicio de lavandería y planchado disponible.',
    destacado: false,
  },
  {
    icon: Clock,
    titulo: 'Recepción 24/7',
    descripcion: 'Nuestro equipo está disponible las 24 horas para asistirte en lo que necesites. Check-in flexible.',
    destacado: false,
  },
  {
    icon: MapPin,
    titulo: 'Tours & Actividades',
    descripcion: 'Te ayudamos a organizar tours por Loja y sus alrededores. Conoce lo mejor de la ciudad musical.',
    destacado: true,
  },
];

export default function Servicios() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section id="servicios" ref={sectionRef} className="relative py-24 md:py-32 bg-[#F2F2F2] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#CBD95F]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-primary bg-white rounded-full shadow-sm">
            SERVICIOS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Todo lo que <span className="text-primary">Necesitas</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Servicios pensados para hacer de tu estadía una experiencia completa y memorable.
            Tu comodidad es nuestra prioridad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {servicios.map((servicio, idx) => {
            const Icon = servicio.icon;
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-xs ${servicio.destacado ? 'ring-2 ring-[#CBD95F]' : ''
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${idx * 80}ms`,
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
                }}
              >
                {/* Destacado badge */}
                {servicio.destacado && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#CBD95F] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">★</span>
                  </div>
                )}

                {/* Icon container */}
                <div className={`relative mb-4 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${isHovered
                  ? 'bg-gradient-to-br from-primary to-[#A9BF04] scale-110'
                  : 'bg-primary/10'
                  }`}>
                  <Icon
                    className={`transition-all duration-500 ${isHovered ? 'text-white' : 'text-primary'
                      }`}
                    size={28}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {servicio.descripcion}
                </p>

                {/* ...eliminado el indicador 'Saber más'... */}
              </div>
            );
          })}
        </div>

        {/* Featured: Cafetería Viviates */}
        <div className={`bg-gradient-to-r from-[#038C7F] to-[#026A5E] rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Coffee className="text-white" size={20} />
                <span className="text-white font-semibold text-sm">NUESTRA MARCA PROPIA</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Cafetería Viviates
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Nos enorgullece presentar nuestra cafetería, resultado de años de pasión por el café de altura lojano, seleccionando los mejores granos de la región para ofrecerte una experiencia única en cada taza.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Granos 100% lojanos de altura',
                  'Disponible en nuestro restaurante',
                  'También puedes llevarlo a casa',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <svg className="w-6 h-6 text-[#CBD95F] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/cafe-viviates"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-[#CBD95F] hover:text-gray-900 transition-all shadow-lg"
              >
                Pruébalo Ahora
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dltfsttr7/image/upload/v1761847761/WhatsApp_Image_2025-10-29_at_19.40.29_1_hywgib.jpg"
                alt="Cafetería Viviates - café y postres"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Image src="/Logocafe.svg" alt="Logo Café" width={32} height={32} className="h-8 w-auto" style={{ height: 32 }} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Lojano</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra amenities */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-6">También incluimos</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Servicio a la habitación', 'Almacenamiento de equipaje', 'Servicio de taxi', 'Información turística'].map((extra, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full shadow-sm border border-gray-200"
              >
                {extra}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}