'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categorias = ['Todas', 'Habitaciones', 'Instalaciones', 'Cafetería'];

const galeriaFotos = [
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1760204433/IMG_4194-HDR_xjuzwj.jpg', categoria: 'Instalaciones', alt: 'Sala Recepción' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761843579/Imagen_de_WhatsApp_2025-10-29_a_las_19.43.22_2904e769_vhu9hl.jpg', categoria: 'Habitaciones', alt: 'Habitación Doble' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1764625179/WhatsApp_Image_2025-11-27_at_14.56.04_4_niz763.jpg', categoria: 'Habitaciones', alt: 'Habitación Doble' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,g_center,z_0.8,h_900,w_506,q_auto,f_webp/v1760204829/IMG_4425-HDR_avmsry.webp', categoria: 'Instalaciones', alt: 'Fachada del Hotel' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1760204509/IMG_4605_q6bvol.jpg', categoria: 'Habitaciones', alt: 'Habitación Matrimonial' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1760204466/IMG_4616_xg9lrj.jpg', categoria: 'Habitaciones', alt: 'Habitación Individual' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1760204251/IMG_4163-HDR_ymaqov.webp', categoria: 'Habitaciones', alt: 'Habitación Familiar' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1760205152/IMG_4174-HDR_i429dy.webp', categoria: 'Habitaciones', alt: 'Habitación Familiar' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1760204555/IMG_4600_q2teiy.jpg', categoria: 'Habitaciones', alt: 'Habitación Triple' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_1200/v1760204753/IMG_4445-HDR_syndid.webp', categoria: 'Instalaciones', alt: 'Estacionamiento Privado' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847783/WhatsApp_Image_2025-10-29_at_19.40.28_hf3ysb.jpg', categoria: 'Instalaciones', alt: 'Instalaciones del Hotel' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1764625179/WhatsApp_Image_2025-11-27_at_14.56.04_3_nsqxwv.jpg', categoria: 'Instalaciones', alt: 'Recepción del Hotel' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847748/WhatsApp_Image_2025-10-29_at_19.40.30_1_qshs8i.jpg', categoria: 'Cafetería', alt: 'Cafetería Viviates - barra y ambiente moderno' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847734/WhatsApp_Image_2025-10-29_at_19.40.30_2_vyyw9k.jpg', categoria: 'Cafetería', alt: 'Cafetería Viviates - vista de la cafetería' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847761/WhatsApp_Image_2025-10-29_at_19.40.29_1_hywgib.jpg', categoria: 'Cafetería', alt: 'Cafetería Viviates - café y postres' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847772/WhatsApp_Image_2025-10-29_at_19.40.28_2_vo2mtv.jpg', categoria: 'Cafetería', alt: 'Cafetería Viviates - decoración y detalles' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847767/WhatsApp_Image_2025-10-29_at_19.40.29_dadbdl.jpg', categoria: 'Cafetería', alt: 'Cafetería Viviates - café servido' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1764625179/WhatsApp_Image_2025-11-27_at_14.56.04_1_nxu6qe.jpg', categoria: 'Cafetería', alt: 'Cafetería Viviates - ambiente y productos' },
  { url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1764625179/WhatsApp_Image_2025-11-27_at_14.56.04_emumaa.jpg', categoria: 'Cafetería', alt: 'Cafetería Viviates - espacio interior' },
];

export default function Galeria() {
  const [isVisible, setIsVisible] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imagenActual, setImagenActual] = useState(0);
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
  }, []);

  const fotosFiltradas = categoriaActiva === 'Todas' 
    ? galeriaFotos 
    : galeriaFotos.filter(foto => foto.categoria === categoriaActiva);

  const abrirLightbox = (index: number) => {
    setImagenActual(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const cerrarLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const siguiente = useCallback(() => {
    setImagenActual((prev) => (prev + 1) % fotosFiltradas.length);
  }, [fotosFiltradas.length]);

  const anterior = useCallback(() => {
    setImagenActual((prev) => (prev - 1 + fotosFiltradas.length) % fotosFiltradas.length);
  }, [fotosFiltradas.length]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') cerrarLightbox();
      if (e.key === 'ArrowRight') siguiente();
      if (e.key === 'ArrowLeft') anterior();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, siguiente, anterior]);

  return (
    <section id="galeria" ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CBD95F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#038C7F]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-[#038C7F] bg-[#CBD95F]/20 rounded-full">
            GALERÍA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Explora <span className="text-[#038C7F]">Eudiq</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una imagen vale más que mil palabras. Descubre cada rincón de nuestro hotel 
            a través de estas fotografías.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                categoriaActiva === cat
                  ? 'bg-gradient-to-r from-[#038C7F] to-[#A9BF04] text-white shadow-lg scale-105'
                  : 'bg-[#F2F2F2] text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {fotosFiltradas.map((foto, idx) => (
            <div
              key={idx}
              onClick={() => abrirLightbox(idx)}
              className={`relative group cursor-pointer break-inside-avoid transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl border border-[#038C7F] transition-all duration-300">
                <Image
                  src={foto.url}
                  alt={foto.alt}
                  width={800}
                  height={600}
                  className="w-full min-h-[220px] object-contain transition-transform duration-500 group-hover:scale-110 bg-white"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold mb-1">{foto.categoria}</p>
                    <p className="text-xs text-white/80">{foto.alt}</p>
                  </div>
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

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-6 text-lg">¿Te gustó lo que viste?</p>
          <a
            href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20en%20EUDIQ%20HOTEL.%20Vi%20la%20galería%20y%20me%20interesa%20reservar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#038C7F] text-white font-semibold rounded-full hover:bg-[#CBD95F] hover:text-[#222] hover:shadow-2xl hover:scale-105 transition-all"
            onClick={() => {
              if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                window.gtag('event', 'click_reserva_galeria', { section: 'galeria', method: 'whatsapp_estadia' });
              }
            }}
          >
            Reserva Tu Estadía
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
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
            {imagenActual + 1} / {fotosFiltradas.length}
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
              src={fotosFiltradas[imagenActual]?.url}
              alt={fotosFiltradas[imagenActual]?.alt}
              width={1200}
              height={900}
              className="w-full h-full object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 60vw"
              loading="eager"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-semibold">{fotosFiltradas[imagenActual]?.categoria}</p>
              <p className="text-white/70 text-sm">{fotosFiltradas[imagenActual]?.alt}</p>
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
    </section>
  );
}