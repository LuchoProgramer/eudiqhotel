'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Wifi, Coffee, Users, Star, Timer, CheckCircle, X, ChevronLeft, ChevronRight, Calendar, Sunrise, Sunset, Croissant, Laptop, Palette, Utensils, Cookie, Sandwich, Cake, Wine } from 'lucide-react';
import { galeriaCafeViviates } from '@/lib/data';
import ConversionOptimizer, { CTAButton } from '@/components/ConversionOptimizer';
import { DynamicOffersSection } from '@/components/CafeDynamicOffers';

export default function CafeViviatesLanding() {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [imagenActual, setImagenActual] = React.useState(0);

  const fotosCafeteria = [
    { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847748/WhatsApp_Image_2025-10-29_at_19.40.30_1_qshs8i.jpg', alt: 'Cafetería Viviates - barra y ambiente moderno' },
    { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847734/WhatsApp_Image_2025-10-29_at_19.40.30_2_vyyw9k.jpg', alt: 'Cafetería Viviates - vista de la cafetería' },
    { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847772/WhatsApp_Image_2025-10-29_at_19.40.28_2_vo2mtv.jpg', alt: 'Cafetería Viviates - decoración y detalles' },
    { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847761/WhatsApp_Image_2025-10-29_at_19.40.29_1_hywgib.jpg', alt: 'Cafetería Viviates - café y postres' },
    { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847767/WhatsApp_Image_2025-10-29_at_19.40.29_dadbdl.jpg', alt: 'Cafetería Viviates - café servido' },
  ];

  const abrirLightbox = (index: number) => {
    setImagenActual(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const cerrarLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const siguiente = () => {
    setImagenActual((prev) => (prev + 1) % fotosCafeteria.length);
  };

  const anterior = () => {
    setImagenActual((prev) => (prev - 1 + fotosCafeteria.length) % fotosCafeteria.length);
  };

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') cerrarLightbox();
      if (e.key === 'ArrowRight') siguiente();
      if (e.key === 'ArrowLeft') anterior();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  return (
    <ConversionOptimizer>
      <div className="min-h-screen bg-[#F2F2F2]">
        
        {/* Hero Section - Optimizado para conversión */}
        <section className="relative py-16 bg-[#038C7F] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#A9BF04]/30"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Badge urgencia */}
                <div className="inline-flex items-center gap-2 bg-[#CBD95F] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 mt-2">
                  <Clock className="h-4 w-4" />
                  ABIERTO • L-S: 7AM-11AM y 4PM-9PM
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 flex items-start gap-3">
                  <Coffee className="h-10 w-10 text-[#CBD95F] flex-shrink-0 mt-1" />
                  <span><span className="text-[#CBD95F]">Cafetería Viviates</span><br/>
                  El Mejor Café de Loja</span>
                </h1>
                
                <p className="text-xl mb-8 text-white/90">
                  <strong>¡Desayuno desde las 7:00 AM!</strong> Café lojano premium, ambiente acogedor y la mejor ubicación del centro. Perfecto para viajeros, trabajadores y amantes del café.
                </p>

                {/* Beneficios clave */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="h-5 w-5 text-[#CBD95F]" />
                    <span className="font-medium">Abierto desde 7:00 AM</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="h-5 w-5 text-[#CBD95F]" />
                    <span className="font-medium">WiFi Premium Gratuito</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="h-5 w-5 text-[#CBD95F]" />
                    <span className="font-medium">Centro Histórico</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="h-5 w-5 text-[#CBD95F]" />
                    <span className="font-medium">Café Lojano 100%</span>
                  </div>
                </div>

                {/* Horarios destacados */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white/90">
                  <p className="font-semibold mb-2 flex items-center gap-2"><Calendar className="h-4 w-4" /> Horarios:</p>
                  <p className="flex items-center gap-2"><Sunrise className="h-4 w-4" /> Mañana: 7:00 AM - 11:00 AM</p>
                  <p className="flex items-center gap-2"><Sunset className="h-4 w-4" /> Tarde: 4:00 PM - 9:00 PM</p>
                  <p className="text-sm mt-2">Lunes a Sábado • Domingos cerrado</p>
                </div>
              </div>

              {/* Galería hero */}
              <div className="grid grid-cols-2 gap-4">
                {galeriaCafeViviates.slice(0, 4).map((img, index) => (
                  <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ofertas dinámicas removidas según feedback cliente */}

        {/* Menú Premium - Visual mejorado */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <Coffee className="h-8 w-8 text-[#038C7F]" /> Nuestro Menú Premium
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Café lojano de especialidad y comida casera que conquista corazones
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { Icon: Coffee, name: 'Café Lojano Premium', price: '$2.50', desc: 'Granos selectos de la región' },
                { Icon: Utensils, name: 'Tamal Tradicional', price: '$2.00', desc: 'Receta familiar auténtica' },
                { Icon: Cookie, name: 'Empanadas de Viento', price: '$1.50', desc: 'Crujientes y deliciosas' },
                { Icon: Sandwich, name: 'Sándwich Artesanal', price: '$4.50', desc: 'Ingredientes frescos diarios' },
                { Icon: Wine, name: 'Jugos Naturales', price: '$2.00', desc: 'Frutas de la región' },
                { Icon: Cake, name: 'Postres Caseros', price: '$3.00', desc: 'Dulces tradicionales' },
                { Icon: Croissant, name: 'Panadería Fresh', price: '$1.00', desc: 'Horneado cada mañana' },
                { Icon: Coffee, name: 'Té e Infusiones', price: '$2.00', desc: 'Hierbas medicinales locales' }
              ].map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#038C7F]/20">
                    <div className="flex justify-center mb-3">
                      <IconComponent className="h-10 w-10 text-[#038C7F]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 text-center">{item.name}</h3>
                    <p className="text-2xl font-bold text-[#038C7F] mb-2 text-center">{item.price}</p>
                    <p className="text-xs text-gray-600 text-center">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">Menú actualizado diariamente • Precios incluyen IVA</p>
              <Link
                href="/cafe-viviates/menu"
                className="inline-flex items-center gap-2 bg-[#038C7F] hover:bg-[#026B61] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md"
              >
                <Coffee className="h-5 w-5" />
                Ver Menú Completo
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonios removidos según feedback cliente - esperar reseñas reales */}

        {/* Galería de Cafetería Viviates */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-[#038C7F] bg-[#CBD95F]/20 rounded-full">
                GALERÍA
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Conoce <span className="text-[#038C7F]">Nuestro Espacio</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un ambiente acogedor diseñado para que disfrutes de cada momento
              </p>
            </div>

            {/* Grid de fotos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fotosCafeteria.map((foto, idx) => (
                <div
                  key={idx}
                  onClick={() => abrirLightbox(idx)}
                  className="relative group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl border border-[#038C7F] transition-all duration-300">
                    <Image
                      src={foto.url}
                      alt={foto.alt}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                      <p className="text-white text-sm">{foto.alt}</p>
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ubicación removida - no necesaria en sección de cafetería según cliente */}

        {/* CTA Final removido - no necesario apartado de reservas según cliente */}
        <section className="py-16 bg-gradient-to-r from-[#038C7F]/10 to-[#CBD95F]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-3">
              <Coffee className="h-8 w-8 text-[#038C7F]" /> Visítanos en Cafetería Viviates
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              <strong>Lunes a Sábado</strong> • 7AM-11AM y 4PM-9PM
            </p>
            <p className="text-gray-600 mb-4">
              Av. 8 de Diciembre y Juan José Flores • Diagonal a la Terminal Terrestre
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#038C7F]">
              <span className="flex items-center gap-2"><Coffee className="h-4 w-4" /> Café lojano premium</span>
              <span className="flex items-center gap-2"><Croissant className="h-4 w-4" /> Comida casera</span>
              <span className="flex items-center gap-2"><Laptop className="h-4 w-4" /> WiFi ultra rápido</span>
              <span className="flex items-center gap-2"><Palette className="h-4 w-4" /> Ambiente único</span>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={cerrarLightbox}
        >
          {/* Close button */}
          <button
            onClick={cerrarLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-50"
            aria-label="Cerrar"
          >
            <X className="text-white" size={24} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            {imagenActual + 1} / {fotosCafeteria.length}
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); anterior(); }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="text-white" size={28} />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={fotosCafeteria[imagenActual]?.url}
              alt={fotosCafeteria[imagenActual]?.alt}
              width={1200}
              height={900}
              className="w-full h-full object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 60vw"
              loading="eager"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-semibold">Cafetería Viviates</p>
              <p className="text-white/70 text-sm">{fotosCafeteria[imagenActual]?.alt}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); siguiente(); }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="text-white" size={28} />
          </button>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs">
            Usa las flechas del teclado o haz clic en los botones para navegar
          </div>
        </div>
      )}
    </ConversionOptimizer>
  );
}