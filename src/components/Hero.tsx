'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  images?: string[];
}

const defaultImages = [
  'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1600/v1760204829/IMG_4425-HDR_avmsry.webp',
  'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1600/v1760204433/IMG_4194-HDR_xjuzwj.jpg',
  'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1600/v1760204999/IMG_4183-HDR_gs5who.webp',
  'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1600/v1760204672/IMG_4453-HDR_sgomb0.webp',
];

export default function Hero({ images = defaultImages }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const total = images.length;

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total, setCurrent]);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Images con transición suave */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt={`Hotel ${idx + 1}`}
              fill
              sizes="100vw"
              className="w-full h-full object-cover"
              priority={idx === 0}
            />
            {/* Sutil overlay verde y gradiente */}
            <div className="absolute inset-0 bg-[#038C7F]/15" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
      </div>

      {/* Decorative animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#CBD95F]/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#038C7F]/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
        <div className={`max-w-5xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-[#CBD95F] text-2xl">★</span>
            <span className="text-white/90 text-sm font-medium tracking-wider">EXPERIENCIA PREMIUM EN LOJA</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
            Bienvenidos
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Un refugio de elegancia y confort en Av. Pablo Palacio, diagonal a la terminal terrestre, Loja 110105.
            Donde cada momento se convierte en un recuerdo inolvidable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#habitaciones"
              className="group relative px-8 py-4 bg-[#038C7F] text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#038C7F]/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar Habitaciones
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#038C7F] to-[#A9BF04] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="https://wa.me/593961712106?text=Hola,%20quiero%20reservar%20en%20Eudiq%20Hotel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 transition-all hover:bg-white/20 hover:border-[#CBD95F] hover:scale-105"
            >
              Reservar Ahora
            </a>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {['Wi-Fi Gratis', 'Desayuno Incluido', 'Estacionamiento', 'Diagonal a la Terminal Terrestre'].map((feature) => (
              <span
                key={feature}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm text-white/80 text-sm rounded-full border border-white/10"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm tracking-widest">DESCUBRE MÁS</span>
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 transition-all group"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6 text-white transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 transition-all group"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all ${
              idx === current
                ? 'w-8 h-2 bg-[#CBD95F]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            } rounded-full`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}