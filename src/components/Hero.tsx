
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CTAButton, SocialProof } from '@/components/ConversionOptimizer';
import { useABTestContent, ABTestComponent } from '@/components/ABTesting';

interface HeroProps {
  images?: string[];
}

const defaultImages = [
  // Imagen principal optimizada para LCP
  'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1920,c_fill,g_center,ar_16:9/v1761845419/EudiqHero_i4cxtc.webp',
  'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1920,c_fill,g_center,ar_16:9/v1760204829/IMG_4425-HDR_avmsry.webp',
  'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1920,c_fill,g_center,ar_16:9/v1760204433/IMG_4194-HDR_xjuzwj.jpg',
  'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1920,c_fill,g_center,ar_16:9/v1760204999/IMG_4183-HDR_gs5who.webp',
];

export default function Hero({ images = defaultImages }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const total = images.length;

  // A/B Test content
  const heroSubtitle = useABTestContent('hero_subtitle');
  const ctaButtonText = useABTestContent('cta_button_text');
  const whatsappCTAText = useABTestContent('whatsapp_cta_text');

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
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={img}
              alt={`Eudiq Hotel Loja - Vista ${idx + 1}`}
              fill
              sizes="100vw"
              className="w-full h-full object-cover"
              priority={idx === 0}
              loading={idx === 0 ? 'eager' : 'lazy'}
              fetchPriority={idx === 0 ? 'high' : 'low'}
            />
            {/* Sutil overlay verde y gradiente */}
            <div className="absolute inset-0 bg-[#038C7F]/15" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
      </div>

      {/* Decorative animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#CBD95F]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#038C7F]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 pt-20 pb-4 text-center z-10">
        <div className={`max-w-5xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white/90 text-sm font-medium tracking-wider">TU DESCANSO ES NUESTRA PRIORIDAD</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bienvenidos
          </h1>

          {/* Subtitle con A/B Testing */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {heroSubtitle}
          </p>

          {/* Social Proof */}
          <div className="mb-8">
            <SocialProof />
          </div>

          {/* CTA Buttons Optimizados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-16">
            <CTAButton
              variant="primary"
              size="large"
              href="/habitaciones"
              section="hero"
              className="group relative overflow-hidden shadow-2xl"
            >
              <span className="flex items-center gap-2">
                {ctaButtonText}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </CTAButton>

            <CTAButton
              variant="whatsapp"
              size="large"
              href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20en%20Eudiq%20Hotel"
              section="hero"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
              </svg>
              {whatsappCTAText}
            </CTAButton>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {['Wi-Fi Gratis', 'Desayuno Incluido', 'Estacionamiento', 'Pet Friendly 🐾', 'Diagonal a la Terminal Terrestre'].map((feature) => (
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
        <div className="absolute bottom-18 md:bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
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
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all ${idx === current
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