/**
 * Landing page optimizada para Google Ads - Festival de Artes Loja
 * Targeting: Turistas culturales, artistas, amantes del arte
 * Seasonal: Octubre-Noviembre
 */

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CTAButton } from '@/components/ConversionOptimizer';
import { MapPin, Coffee, Wifi, Music, Car, Theater, Palette, Phone, CheckCircle2, PersonStanding } from 'lucide-react';

export default function FestivalArtesPage() {
  const [eventDay, setEventDay] = useState(0);

  useEffect(() => {
    // Calcular días hasta el Festival Internacional de Artes Vivas Loja 2025
    const festivalStart = new Date('2025-11-13'); // Fecha oficial: 13 noviembre
    const today = new Date();
    const diffTime = festivalStart.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setEventDay(diffDays > 0 ? diffDays : 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* Background artístico */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-30 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido principal */}
            <div className="text-center lg:text-left">
              {/* Badge del evento */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[#038C7F]/10 to-[#CBD95F]/10 rounded-full">
                <Palette className="h-4 w-4 text-[#038C7F]" />
                <span className="text-[#038C7F] text-sm font-semibold">FESTIVAL INT. ARTES VIVAS • 13-23 NOV</span>
              </div>

              {/* Headline principal */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Tu base perfecta para el<br />
                <span className="bg-gradient-to-r from-[#038C7F] to-[#CBD95F] bg-clip-text text-transparent">
                  Festival Int. de Artes Vivas
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                <strong>Décima edición</strong> • 116 elencos • 17 países • Chile país invitado de honor • +4,000 artistas
              </p>

              {/* Countdown del festival */}
              {eventDay > 0 && (
                <div className="bg-gradient-to-r from-[#038C7F] to-[#CBD95F] text-white p-4 rounded-lg mb-8 text-center">
                  <p className="text-sm font-medium">Festival Internacional Artes Vivas (Chile país invitado) comienza en:</p>
                  <p className="text-3xl font-bold">{eventDay} días</p>
                  <p className="text-sm">13-23 Noviembre • +300 actividades culturales</p>
                </div>
              )})

              {/* Stats del festival */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-[#038C7F]">116</div>
                  <div className="text-xs text-gray-600">Elencos</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-[#038C7F]">17</div>
                  <div className="text-xs text-gray-600">Países</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-[#CBD95F]">125</div>
                  <div className="text-xs text-gray-600">Obras</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-[#CBD95F]">4K</div>
                  <div className="text-xs text-gray-600">Artistas</div>
                </div>
              </div>

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <CTAButton
                  variant="primary"
                  size="large"
                  href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20para%20el%20Festival%20de%20Artes%20en%20Eudiq%20Hotel"
                  section="festival_hero"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#038C7F] to-[#038C7F] hover:from-[#027066] hover:to-[#027066]"
                >
                  <Palette className="h-5 w-5" />
                  Reservar para el Festival
                </CTAButton>

                <CTAButton
                  variant="phone"
                  size="large"
                  href="tel:+593961712106"
                  section="festival_hero"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Llamar Ahora
                </CTAButton>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span>Recomendado por artistas y visitantes culturales</span>
              </div>
            </div>

            {/* Imagen hero */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 via-emerald-100 to-yellow-100 rounded-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_600,c_fill,g_center,ar_1:1/v1760204999/IMG_4183-HDR_gs5who.webp"
                  alt="Habitación artística en Eudiq Hotel durante Festival de Artes Loja"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 border-l-4 border-[#038C7F]">
                <p className="text-sm font-semibold text-gray-900">A 5 min</p>
                <p className="text-xs text-gray-600">del Centro Histórico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios para artistas y visitantes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué Eudiq Hotel para el Festival Internacional de Artes Vivas?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>Décima edición</strong> del evento cultural más importante de Ecuador. Más de <strong>300 actividades</strong> en Loja y 13 parroquias rurales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: Theater,
                title: 'Centro de Todo',
                description: 'En el corazón del centro histórico. Acceso inmediato a Teatro Benjamín Carrión y Parque Jipiro.'
              },
              {
                Icon: MapPin,
                title: 'Caminable',
                description: 'Puedes caminar a teatros, galerías y espacios culturales. Sin necesidad de transporte.'
              },
              {
                Icon: Coffee,
                title: 'Cafetería Viviates',
                description: 'El mejor café artesanal de Loja en nuestro hotel. Punto de encuentro de artistas.'
              },
              {
                Icon: Wifi,
                title: 'WiFi Premium',
                description: 'Internet gratis para compartir tu experiencia y trabajar en proyectos.'
              },
              {
                Icon: Music,
                title: 'Información Diaria',
                description: 'Actualizaciones diarias de la programación y eventos especiales del festival.'
              },
              {
                Icon: Car,
                title: 'Base Perfecta',
                description: 'Fácil acceso a todos los venues del festival y estacionamiento seguro.'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.Icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border hover:shadow-lg transition-all hover:scale-105">
                  {typeof IconComponent === 'string' ? (
                    <span className="text-4xl mb-4 block">{IconComponent}</span>
                  ) : (
                    <IconComponent className="h-10 w-10 text-[#038C7F] mb-4" />
                  )}
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mapa de eventos cercanos */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Eventos del Festival cerca del hotel
            </h2>
            <p className="text-gray-600">Todo a pocos minutos caminando desde Eudiq Hotel</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                venue: 'Teatro Benjamín Carrión',
                distance: '2 min',
                events: 'Obras principales, Chile invitado',
                color: 'bg-teal-100 text-teal-700'
              },
              {
                venue: 'Parque Jipiro',
                distance: '5 min',
                events: 'Espectáculos al aire libre',
                color: 'bg-emerald-100 text-emerald-700'
              },
              {
                venue: 'Centro Histórico',
                distance: '1 min',
                events: 'Arte urbano, performances',
                color: 'bg-yellow-100 text-yellow-700'
              },
              {
                venue: 'Casa de la Cultura',
                distance: '3 min',
                events: 'Talleres, encuentros artísticos',
                color: 'bg-amber-100 text-amber-700'
              }
            ].map((venue, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#038C7F]">
                <h3 className="font-bold text-gray-900 mb-2">{venue.venue}</h3>
                <p className={`text-sm font-medium mb-1 ${venue.color.split(' ')[1]} flex items-center gap-1`}>
                  <PersonStanding className="h-4 w-4" />
                  {venue.distance} caminando
                </p>
                <p className="text-xs text-gray-600">{venue.events}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios de artistas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lo que dicen los artistas y visitantes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Perfecto para el festival. Pude caminar a todos los eventos, el café del hotel es espectacular y conocí otros artistas en el lobby.&rdquo;
              </p>
              <p className="font-semibold text-[#038C7F]">- Sandra Maldonado</p>
              <p className="text-sm text-gray-500">Artista visual, Quito</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;La ubicación es inmejorable. Desde el hotel podíamos escuchar la música de la plaza y llegar caminando a todo. Excelente experiencia.&rdquo;
              </p>
              <p className="font-semibold text-[#038C7F]">- Miguel y Carmen Torres</p>
              <p className="text-sm text-gray-500">Visitantes culturales, Guayaquil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paquete especial Festival */}
      <section className="py-16 bg-gradient-to-r from-[#038C7F] to-[#027066] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Palette className="h-8 w-8" />
                Paquete Festival Internacional de Artes Vivas
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-300" />
                  <span>Habitación con vista al centro histórico</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-300" />
                  <span>Desayuno artístico con café premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-300" />
                  <span>Mapa personalizado de eventos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-300" />
                  <span>WiFi premium para artistas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-300" />
                  <span>Late check-out gratuito</span>
                </div>
              </div>

              <div className="bg-white/10 p-4 rounded-lg mb-6">
                <p className="font-bold text-yellow-300 mb-1">Precio especial:</p>
                <p className="text-2xl font-bold">$45 USD/noche</p>
                <p className="text-sm opacity-90">Incluye todos los beneficios del paquete</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Reserva tu experiencia cultural
                </h3>
                <p className="mb-6 opacity-90">
                  Cupos limitados durante el festival. ¡No te quedes sin tu lugar!
                </p>

                <CTAButton
                  variant="secondary"
                  size="large"
                  href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20informaci%C3%B3n%20del%20Paquete%20Festival%20Internacional%20de%20Artes%20Vivas%202025"
                  section="festival_package"
                  className="w-full justify-center mb-4 bg-white text-[#038C7F] hover:bg-gray-100"
                >
                  <Phone className="h-5 w-5" />
                  Reservar Paquete Festival
                </CTAButton>

                <p className="text-sm opacity-75">
                  Respuesta inmediata por WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vive el Festival Internacional de Artes Vivas desde el centro de Loja
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            <strong>116 elencos</strong> de <strong>17 países</strong> • <strong>Chile</strong> país invitado de honor • <strong>4,000 artistas</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CTAButton
              variant="whatsapp"
              size="large"
              href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20para%20el%20Festival%20Internacional%20de%20Artes%20Vivas%202025%20-%20centro%20de%20Loja"
              section="festival_final"
              className="flex items-center justify-center gap-2"
            >
              💬 Reservar por WhatsApp
            </CTAButton>

            <CTAButton
              variant="phone"
              size="large"
              href="tel:+593961712106"
              section="festival_final"
              className="flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              +593 96 171 2106
            </CTAButton>
          </div>

          <p className="text-sm text-gray-400 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Palette className="h-4 w-4" />
              Experiencia cultural garantizada
            </span>
            <span className="flex items-center gap-1">
              <Coffee className="h-4 w-4" />
              El mejor café de Loja
            </span>
            <span className="flex items-center gap-1">
              <PersonStanding className="h-4 w-4" />
              Todo a pasos del hotel
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}