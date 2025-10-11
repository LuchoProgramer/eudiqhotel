'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, Car, Plane, Bus } from 'lucide-react';

const puntosInteres = [
  { nombre: 'Parque Central Jipiro', distancia: '2.5 km', tiempo: '5 min', icono: '🌳' },
  { nombre: 'Catedral de Loja', distancia: '1.2 km', tiempo: '3 min', icono: '⛪' },
  { nombre: 'Puerta de la Ciudad', distancia: '800 m', tiempo: '2 min', icono: '🏛️' },
  { nombre: 'Plaza de la Independencia', distancia: '1.0 km', tiempo: '3 min', icono: '🏰' },
  { nombre: 'Museo de la Cultura Lojana', distancia: '1.5 km', tiempo: '4 min', icono: '🎨' },
  { nombre: 'Parque Nacional Podocarpus', distancia: '15 km', tiempo: '25 min', icono: '🏞️' },
];

const comoLlegar = [
  {
    icon: Plane,
    titulo: 'Desde el Aeropuerto',
    descripcion: 'Aeropuerto Ciudad de Catamayo a 35 km (40 min en auto). Servicio de taxi disponible.',
  },
  {
    icon: Bus,
    titulo: 'Terminal Terrestre',
    descripcion: 'A solo 3 km del centro. Taxis y buses urbanos disponibles las 24 horas.',
  },
  {
    icon: Car,
    titulo: 'En Auto Particular',
    descripcion: 'Estacionamiento privado sin costo. Fácil acceso desde todas las vías principales.',
  },
];

export default function Ubicacion() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="ubicacion" ref={sectionRef} className="relative py-24 md:py-32 bg-[#F2F2F2] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#038C7F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CBD95F]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-[#038C7F] bg-white rounded-full shadow-sm">
            UBICACIÓN
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Encuéntranos en <span className="text-[#038C7F]">Loja</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estratégicamente ubicados en el corazón de la ciudad musical del Ecuador, 
            con acceso a los principales atractivos turísticos.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group">
              {/* Aquí va el mapa de Google Maps - reemplaza con tu ubicación real */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3584889537595!2d-79.19953!3d-3.99313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb4a7f8e3a8b6f%3A0x7f8e3a8b6f7f8e3a!2sLoja%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1234567890123!5m2!1ses!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              {/* Overlay badge */}
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <MapPin className="text-[#038C7F]" size={20} />
                <span className="font-semibold text-gray-900">Centro de Loja</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Información de Contacto</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-start gap-3 text-gray-700 hover:text-[#038C7F] transition-colors group">
                  <MapPin className="flex-shrink-0 mt-1 text-[#038C7F]" size={20} />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-sm text-gray-600">Calle Principal 123, Centro, Loja, Ecuador</p>
                  </div>
                </a>
                <a href="tel:+593987654321" className="flex items-start gap-3 text-gray-700 hover:text-[#038C7F] transition-colors group">
                  <Phone className="flex-shrink-0 mt-1 text-[#038C7F]" size={20} />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-gray-600">+593 9 8765 4321</p>
                  </div>
                </a>
                <a href="mailto:info@eudiqhotel.com" className="flex items-start gap-3 text-gray-700 hover:text-[#038C7F] transition-colors group">
                  <Mail className="flex-shrink-0 mt-1 text-[#038C7F]" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">info@eudiqhotel.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-gray-700">
                  <Clock className="flex-shrink-0 mt-1 text-[#038C7F]" size={20} />
                  <div>
                    <p className="font-medium">Recepción</p>
                    <p className="text-sm text-gray-600">Disponible 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Points of Interest */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Navigation className="text-[#038C7F]" size={28} />
                Lugares de Interés Cercanos
              </h3>
              <div className="space-y-4">
                {puntosInteres.map((punto, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-[#F2F2F2] rounded-xl hover:bg-[#038C7F]/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{punto.icono}</div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-[#038C7F] transition-colors">
                          {punto.nombre}
                        </p>
                        <p className="text-sm text-gray-600">{punto.distancia}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#038C7F]">{punto.tiempo}</p>
                      <p className="text-xs text-gray-500">en auto</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions */}
            <div className="bg-gradient-to-br from-[#038C7F] to-[#A9BF04] rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">¿Cómo Llegar?</h3>
              <div className="space-y-4">
                {comoLlegar.map((metodo, idx) => {
                  const Icon = metodo.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{metodo.titulo}</h4>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {metodo.descripcion}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas Ayuda con Direcciones?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está disponible para guiarte desde tu punto de partida. 
            También ofrecemos servicio de transporte desde el aeropuerto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#038C7F] to-[#A9BF04] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all"
            >
              <Navigation size={20} />
              Ver en Google Maps
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition-all"
            >
              <Phone size={20} />
              Solicitar Transporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}