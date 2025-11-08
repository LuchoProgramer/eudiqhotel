import React from 'react';
import Image from 'next/image';
import { Clock, MapPin, Wifi, Coffee, Users, Star, Timer, CheckCircle } from 'lucide-react';
import { galeriaCafeViviates } from '@/lib/data';
import ConversionOptimizer, { CTAButton } from '@/components/ConversionOptimizer';
import { DynamicOffersSection } from '@/components/CafeDynamicOffers';

export const metadata = {
  title: 'Café Viviates Loja | Abierto 5:30 AM | El Mejor Café de Especialidad',
  description: 'Café Viviates en Eudiq Hotel: abierto desde 5:30 AM, café lojano premium, desayunos express para viajeros, WiFi premium y ambiente profesional. Centro de Loja.',
  keywords: 'café loja, desayuno temprano, café especialidad, wifi loja, café viajeros, desayuno terminal terrestre'
};



export default function CafeViviatesLanding() {
  return (
    <ConversionOptimizer>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        
        {/* Hero Section - Optimizado para conversión */}
        <section className="relative py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Badge urgencia */}
                <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Clock className="h-4 w-4" />
                  ABIERTO AHORA • 5:30 AM - 10:00 PM
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  ☕ <span className="text-yellow-300">Café Viviates</span><br/>
                  El Mejor Café de Loja
                </h1>
                
                <p className="text-xl mb-8 text-amber-100">
                  <strong>¡Desayuno desde las 5:30 AM!</strong> Café lojano premium, ambiente profesional y la mejor ubicación del centro. Perfecto para viajeros, trabajadores y amantes del café.
                </p>

                {/* Beneficios clave */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-amber-100">
                    <CheckCircle className="h-5 w-5 text-yellow-300" />
                    <span className="font-medium">Abierto desde 5:30 AM</span>
                  </div>
                  <div className="flex items-center gap-3 text-amber-100">
                    <CheckCircle className="h-5 w-5 text-yellow-300" />
                    <span className="font-medium">WiFi Premium Gratuito</span>
                  </div>
                  <div className="flex items-center gap-3 text-amber-100">
                    <CheckCircle className="h-5 w-5 text-yellow-300" />
                    <span className="font-medium">Centro Histórico</span>
                  </div>
                  <div className="flex items-center gap-3 text-amber-100">
                    <CheckCircle className="h-5 w-5 text-yellow-300" />
                    <span className="font-medium">Café Lojano 100%</span>
                  </div>
                </div>

                {/* CTAs principales */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton
                    variant="whatsapp"
                    size="large"
                    href="https://wa.me/593961712106?text=Hola,%20quiero%20información%20del%20menú%20de%20Café%20Viviates%20-%20desayuno%20temprano"
                    section="cafe_hero"
                    className="flex items-center gap-2"
                  >
                    📱 Ver Menú por WhatsApp
                  </CTAButton>
                  
                  <CTAButton
                    variant="phone"
                    size="large" 
                    href="tel:+593961712106"
                    section="cafe_hero"
                    className="flex items-center gap-2"
                  >
                    📞 Llamar Ahora
                  </CTAButton>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-4 mt-6 text-amber-100">
                  <div className="flex text-yellow-300">⭐⭐⭐⭐⭐</div>
                  <span className="text-sm">Más de 200 reseñas positivas</span>
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

        {/* Ofertas dinámicas por horario - Estrategia del 1% */}
        <DynamicOffersSection />

        {/* Menú Premium - Visual mejorado */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ☕ Nuestro Menú Premium
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Café lojano de especialidad y comida casera que conquista corazones
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { emoji: '☕', name: 'Café Lojano Premium', price: '$2.50', desc: 'Granos selectos de la región' },
                { emoji: '🌽', name: 'Tamal Tradicional', price: '$2.00', desc: 'Receta familiar auténtica' },
                { emoji: '🥟', name: 'Empanadas de Viento', price: '$1.50', desc: 'Crujientes y deliciosas' },
                { emoji: '🥪', name: 'Sándwich Artesanal', price: '$4.50', desc: 'Ingredientes frescos diarios' },
                { emoji: '🍹', name: 'Jugos Naturales', price: '$2.00', desc: 'Frutas de la región' },
                { emoji: '🧁', name: 'Postres Caseros', price: '$3.00', desc: 'Dulces tradicionales' },
                { emoji: '🥐', name: 'Panadería Fresh', price: '$1.00', desc: 'Horneado cada mañana' },
                { emoji: '🍵', name: 'Té e Infusiones', price: '$2.00', desc: 'Hierbas medicinales locales' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-amber-200">
                  <div className="text-4xl mb-3 text-center">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900 mb-1 text-center">{item.name}</h3>
                  <p className="text-2xl font-bold text-orange-600 mb-2 text-center">{item.price}</p>
                  <p className="text-xs text-gray-600 text-center">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <CTAButton
                variant="whatsapp"
                size="large"
                href="https://wa.me/593961712106?text=Hola,%20quiero%20ver%20el%20menú%20completo%20de%20Café%20Viviates%20con%20precios"
                section="cafe_menu"
                className="mb-4"
              >
                📋 Ver Menú Completo por WhatsApp
              </CTAButton>
              <p className="text-sm text-gray-600">Menú actualizado diariamente • Precios incluyen IVA</p>
            </div>
          </div>
        </section>

        {/* Testimonios de clientes reales */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                💬 Lo que dicen nuestros clientes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-sm">
                <div className="flex text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Perfecto para trabajar temprano. El WiFi es súper rápido y el café lojano es el mejor que he probado. ¡Volveré todas las mañanas!"
                </p>
                <p className="font-semibold text-orange-600">- María Elena, Profesional</p>
                <p className="text-sm text-gray-500">Cliente habitual • 6:30 AM</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm">
                <div className="flex text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Llegué a las 5:45 AM antes de mi bus y me atendieron perfecto. El desayuno express me salvó el viaje. Súper recomendado."
                </p>
                <p className="font-semibold text-blue-600">- Carlos Mendoza, Viajero</p>
                <p className="text-sm text-gray-500">Guayaquil • Madrugador</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
                <div className="flex text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Ambiente perfecto para el Festival de Artes. Los postres artesanales y el café cultural son una experiencia única en Loja."
                </p>
                <p className="font-semibold text-purple-600">- Ana Torres, Artista</p>
                <p className="text-sm text-gray-500">Cuenca • Experiencia Cultural</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación estratégica */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  📍 Ubicación Privilegiada
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Centro Histórico de Loja</p>
                      <p className="text-sm text-gray-600">Av. 8 de Diciembre y Juan José Flores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Horarios Extendidos</p>
                      <p className="text-sm text-gray-600">Lunes a Domingo: 5:30 AM - 10:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Wifi className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WiFi Ultra Rápido</p>
                      <p className="text-sm text-gray-600">Perfecto para trabajo remoto y videollamadas</p>
                    </div>
                  </div>
                </div>

                <CTAButton
                  variant="secondary"
                  size="large"
                  href="https://maps.app.goo.gl/eudiqhotel"
                  section="cafe_ubicacion"
                  className="mb-4"
                >
                  🗺️ Ver en Google Maps
                </CTAButton>
              </div>

              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8174!2d-79.2!3d-4.0!2z!5e0!3m2!1ses!2sec!4v1699999999999!5m2!1ses!2sec"
                  width="100%"
                  height="400"
                  className="rounded-xl shadow-lg"
                  loading="lazy"
                  title="Ubicación Café Viviates - Eudiq Hotel Loja"
                />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-gray-900">🚶‍♂️ 2 min de la Terminal</p>
                  <p className="text-xs text-gray-600">🏛️ Centro histórico</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final - Urgencia */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ☕ ¿Listo para la mejor experiencia de café en Loja?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              <strong>Abierto desde las 5:30 AM</strong> • WiFi Premium • Ambiente profesional • Centro de Loja
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton
                variant="whatsapp"
                size="large"
                href="https://wa.me/593961712106?text=Hola,%20quiero%20reservar%20mesa%20en%20Café%20Viviates%20-%20horario%20y%20ofertas%20disponibles"
                section="cafe_final"
                className="flex items-center justify-center gap-2"
              >
                💬 Reservar Mesa por WhatsApp
              </CTAButton>
              
              <CTAButton
                variant="phone"
                size="large"
                href="tel:+593961712106"
                section="cafe_final"
                className="flex items-center justify-center gap-2"
              >
                📞 +593 96 171 2106
              </CTAButton>
            </div>

            <p className="text-sm text-orange-200">
              ☕ Café lojano premium • 🥐 Comida casera • 💻 WiFi ultra rápido • 🎨 Ambiente único
            </p>
          </div>
        </section>
      </div>
    </ConversionOptimizer>
  );
}