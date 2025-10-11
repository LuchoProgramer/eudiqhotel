'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ExperienciaUnica() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#F2F2F2]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CBD95F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#038C7F]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-[#038C7F] bg-[#CBD95F]/20 rounded-full">
            NUESTRA ESENCIA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Descubre <span className="text-[#038C7F]">Eudiq</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más que un hotel, somos el punto de encuentro entre la elegancia moderna 
            y la calidez tradicional de Loja
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dltfsttr7/image/upload/v1760204433/IMG_4194-HDR_xjuzwj.jpg"
                alt="Interior del hotel"
                width={1360}
                height={1020}
                className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#CBD95F]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#038C7F] to-[#A9BF04] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">★</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.2</p>
                    <p className="text-sm text-gray-600">Calificación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
              Un refugio de confort en el corazón de Loja
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              En Eudiq Hotel, cada detalle ha sido cuidadosamente pensado para ofrecerte 
              una experiencia inolvidable. Desde nuestras habitaciones elegantemente 
              diseñadas hasta nuestro servicio personalizado, todo está creado para que 
              te sientas como en casa.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ubicados estratégicamente en Loja, te ofrecemos acceso inmediato a los 
              principales atractivos de la ciudad, mientras disfrutas de un oasis de 
              tranquilidad y sofisticación.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '🏆', title: 'Excelencia', desc: 'Servicio premium' },
                { icon: '📍', title: 'Ubicación', desc: 'Centro de Loja' },
                { icon: '🛏️', title: 'Confort', desc: 'Habitaciones de lujo' },
                { icon: '🤝', title: 'Atención', desc: 'Personalizada 24/7' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 border border-gray-100"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6 md:px-12 bg-gradient-to-r from-[#038C7F] to-[#A9BF04] rounded-3xl shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {[
            { number: '15+', label: 'Años de Experiencia' },
            { number: '50+', label: 'Habitaciones Premium' },
            { number: '10k+', label: 'Huéspedes Felices' },
            { number: '4.9★', label: 'Calificación Promedio' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-white/90 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className={`mt-20 text-center max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <svg className="w-12 h-12 text-[#CBD95F] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            &quot;Donde la hospitalidad lojana se encuentra con la elegancia contemporánea, 
            creando experiencias que perduran en el corazón&quot;
          </blockquote>
          <p className="text-lg text-[#038C7F] font-semibold">
            — Equipo Eudiq Hotel
          </p>
        </div>
      </div>
    </section>
  );
}