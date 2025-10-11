'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categorias = ['Todas', 'Habitaciones', 'Café Viviates', 'Restaurante', 'Instalaciones'];

const galeriaFotos = [
  { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80', categoria: 'Habitaciones', alt: 'Habitación elegante' },
  { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80', categoria: 'Café Viviates', alt: 'Café Viviates' },
  { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', categoria: 'Habitaciones', alt: 'Suite premium' },
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80', categoria: 'Restaurante', alt: 'Restaurante' },
  { url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80', categoria: 'Habitaciones', alt: 'Habitación ejecutiva' },
  { url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=800&q=80', categoria: 'Instalaciones', alt: 'Recepción' },
  { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80', categoria: 'Instalaciones', alt: 'Lobby' },
  { url: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80', categoria: 'Café Viviates', alt: 'Preparación de café' },
  { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', categoria: 'Habitaciones', alt: 'Suite familiar' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', categoria: 'Restaurante', alt: 'Comedor elegante' },
  { url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80', categoria: 'Instalaciones', alt: 'Zona común' },
  { url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', categoria: 'Instalaciones', alt: 'Interior del hotel' },
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

  const siguiente = () => {
    setImagenActual((prev) => (prev + 1) % fotosFiltradas.length);
  };

  const anterior = () => {
    setImagenActual((prev) => (prev - 1 + fotosFiltradas.length) % fotosFiltradas.length);
  };

  useEffect(() => {
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
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
                <img
                  src={foto.url}
                  alt={foto.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
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
            href="#habitaciones"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#038C7F] to-[#A9BF04] text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
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
            <img
              src={fotosFiltradas[imagenActual]?.url}
              alt={fotosFiltradas[imagenActual]?.alt}
              className="w-full h-full object-contain rounded-lg"
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