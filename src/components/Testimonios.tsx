'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonios } from '@/lib/data';

export default function Testimonios() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimoniosVisible, setTestimoniosVisible] = useState(3);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimoniosVisible(1);
      } else if (window.innerWidth < 1024) {
        setTestimoniosVisible(2);
      } else {
        setTestimoniosVisible(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const siguiente = () => {
    setCurrentIndex((prev) => 
      prev + testimoniosVisible >= testimonios.length ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonios.length - testimoniosVisible) : prev - 1
    );
  };

  const testimoniosVisibles = testimonios.slice(currentIndex, currentIndex + testimoniosVisible);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#CBD95F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#038C7F]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-[#038C7F] bg-[#CBD95F]/20 rounded-full">
            TESTIMONIOS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Lo Que Dicen <span className="text-[#038C7F]">Nuestros Huéspedes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Miles de viajeros han confiado en nosotros. Lee sus experiencias y 
            descubre por qué somos el hotel preferido en Loja.
          </p>
        </div>

        {/* Stats Banner */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center p-6 bg-gradient-to-br from-[#038C7F]/10 to-[#CBD95F]/10 rounded-2xl">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-[#CBD95F] fill-[#CBD95F]" size={24} />
              ))}
            </div>
            <p className="text-3xl font-bold text-gray-900">4.2</p>
            <p className="text-sm text-gray-600">Calificación</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#038C7F]/10 to-[#CBD95F]/10 rounded-2xl">
            <p className="text-3xl font-bold text-[#038C7F] mb-2">200+</p>
            <p className="text-sm text-gray-600">Reseñas</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#038C7F]/10 to-[#CBD95F]/10 rounded-2xl">
            <p className="text-3xl font-bold text-[#038C7F] mb-2">98%</p>
            <p className="text-sm text-gray-600">Recomiendan</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#038C7F]/10 to-[#CBD95F]/10 rounded-2xl">
            <p className="text-3xl font-bold text-[#038C7F] mb-2">10k+</p>
            <p className="text-sm text-gray-600">Huéspedes</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={anterior}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-[#038C7F] hover:text-white transition-all group"
            aria-label="Anterior"
          >
            <ChevronLeft className="group-hover:scale-110 transition-transform" size={24} />
          </button>

          <button
            onClick={siguiente}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-[#038C7F] hover:text-white transition-all group"
            aria-label="Siguiente"
          >
            <ChevronRight className="group-hover:scale-110 transition-transform" size={24} />
          </button>

          {/* Cards Container */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {testimoniosVisibles.map((testimonio, idx) => (
              <div
                key={idx}
                className="bg-[#F2F2F2] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('event', 'click_testimonio', { section: 'testimonios', nombre: testimonio.nombre, ubicacion: testimonio.ubicacion });
                  }
                }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="text-[#CBD95F] opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonio.calificacion)].map((_, i) => (
                    <Star key={i} className="text-[#CBD95F] fill-[#CBD95F]" size={16} />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                  &quot;{testimonio.comentario}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 truncate">{testimonio.nombre}</p>
                    <p className="text-sm text-gray-600 truncate">{testimonio.ubicacion}</p>
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    {testimonio.fecha}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex md:hidden justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonios.length / testimoniosVisible) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * testimoniosVisible)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / testimoniosVisible) === idx
                    ? 'bg-[#038C7F] w-6'
                    : 'bg-gray-300'
                }`}
                aria-label={`Ir a página ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className={`mt-16 p-8 bg-gradient-to-r from-[#038C7F]/10 to-[#CBD95F]/10 rounded-3xl border border-[#038C7F]/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas ayuda para elegir?</h3>
            <p className="text-gray-700 mb-6">
              Nuestro equipo está disponible 24/7 para ayudarte a encontrar la habitación perfecta 
              que se ajuste a tus necesidades y presupuesto.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#038C7F] text-white font-semibold rounded-full hover:bg-[#A9BF04] transition-all"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                  window.gtag('event', 'click_contacto_testimonios', { section: 'testimonios', method: 'contacto' });
                }
              }}
            >
              Contáctanos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}