'use client';

import { useState, useEffect, useRef } from 'react';

const habitaciones = [
  {
    id: 1,
    nombre: 'Habitación Individual',
    categoria: 'CONFORT',
    descripcion: 'Perfecta para viajeros solitarios que buscan comodidad y funcionalidad en un espacio acogedor.',
    precio: 45,
    capacidad: '1 persona',
    cama: '1 cama individual',
    tamaño: '18 m²',
    imagenes: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    ],
    amenidades: ['Wi-Fi gratis', 'TV cable', 'Baño privado', 'Escritorio', 'Caja fuerte'],
  },
  {
    id: 2,
    nombre: 'Habitación Doble',
    categoria: 'POPULAR',
    descripcion: 'Espacio amplio y elegante diseñado para parejas o amigos que buscan una estancia confortable.',
    precio: 65,
    capacidad: '2 personas',
    cama: '1 cama matrimonial',
    tamaño: '25 m²',
    imagenes: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    ],
    amenidades: ['Wi-Fi gratis', 'TV Smart', 'Baño privado', 'Mini bar', 'Aire acondicionado', 'Vista a la ciudad'],
  },
  {
    id: 3,
    nombre: 'Suite Ejecutiva',
    categoria: 'PREMIUM',
    descripcion: 'Lujo y sofisticación en cada detalle. Ideal para ejecutivos y viajeros que aprecian lo excepcional.',
    precio: 95,
    capacidad: '2-3 personas',
    cama: '1 cama king size',
    tamaño: '35 m²',
    imagenes: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
    ],
    amenidades: ['Wi-Fi premium', 'TV Smart 55"', 'Jacuzzi', 'Sala de estar', 'Desayuno incluido', 'Room service 24/7', 'Vista panorámica'],
  },
  {
    id: 4,
    nombre: 'Suite Familiar',
    categoria: 'FAMILIA',
    descripcion: 'Diseñada para familias que buscan espacio, comodidad y momentos inolvidables juntos.',
    precio: 120,
    capacidad: '4-5 personas',
    cama: '2 camas matrimoniales',
    tamaño: '45 m²',
    imagenes: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    ],
    amenidades: ['Wi-Fi gratis', '2 TV Smart', 'Cocina pequeña', 'Sala amplia', 'Desayuno incluido', 'Juegos para niños', 'Balcón privado'],
  },
];

export default function Habitaciones() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState<{ [key: number]: number }>({});
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

  const nextImage = (roomId: number, totalImages: number) => {
    setActiveImage(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (roomId: number, totalImages: number) => {
    setActiveImage(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section id="habitaciones" ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#CBD95F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#038C7F]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-[#038C7F] bg-[#CBD95F]/20 rounded-full">
            ALOJAMIENTO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Nuestras <span className="text-[#038C7F]">Habitaciones</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Espacios diseñados pensando en tu comodidad y descanso. 
            Cada habitación es un refugio de elegancia y confort.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {habitaciones.map((hab, idx) => {
            const currentImg = activeImage[hab.id] || 0;
            return (
              <div
                key={hab.id}
                className={`group bg-[#F2F2F2] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Image Gallery */}
                <div className="relative h-72 overflow-hidden">
                  {hab.imagenes.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={`${hab.nombre} ${imgIdx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        imgIdx === currentImg ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#038C7F] text-white text-xs font-bold tracking-wider rounded-full">
                    {hab.categoria}
                  </div>

                  {/* Gallery Navigation */}
                  {hab.imagenes.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(hab.id, hab.imagenes.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => nextImage(hab.id, hab.imagenes.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {hab.imagenes.map((_, dotIdx) => (
                          <div
                            key={dotIdx}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              dotIdx === currentImg ? 'bg-white w-4' : 'bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{fontFamily: 'Playfair Display, serif'}}>
                      {hab.nombre}
                    </h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#038C7F]">${hab.precio}</div>
                      <div className="text-sm text-gray-500">por noche</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {hab.descripcion}
                  </p>

                  {/* Room Info */}
                  <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-gray-300">
                    <div className="text-center">
                      <div className="text-2xl mb-1">👤</div>
                      <div className="text-xs text-gray-600">{hab.capacidad}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">🛏️</div>
                      <div className="text-xs text-gray-600">{hab.cama}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">📐</div>
                      <div className="text-xs text-gray-600">{hab.tamaño}</div>
                    </div>
                  </div>

                  {/* Amenidades */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">AMENIDADES</h4>
                    <div className="flex flex-wrap gap-2">
                      {hab.amenidades.map((amenidad, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white text-gray-700 text-xs rounded-full border border-gray-200"
                        >
                          {amenidad}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-[#038C7F] to-[#A9BF04] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                    Reservar Ahora
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 p-8 bg-gradient-to-r from-[#038C7F]/10 to-[#CBD95F]/10 rounded-3xl border border-[#038C7F]/20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas ayuda para elegir?</h3>
            <p className="text-gray-700 mb-6">
              Nuestro equipo está disponible 24/7 para ayudarte a encontrar la habitación perfecta 
              que se ajuste a tus necesidades y presupuesto.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#038C7F] text-white font-semibold rounded-full hover:bg-[#A9BF04] transition-all"
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