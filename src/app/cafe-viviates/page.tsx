import React from 'react';
import Image from 'next/image';
import { Clock, MapPin, Wifi, Coffee, Users, Star, Timer, CheckCircle } from 'lucide-react';
import { galeriaCafeViviates } from '@/lib/data';
import ConversionOptimizer, { CTAButton } from '@/components/ConversionOptimizer';
import { DynamicOffersSection } from '@/components/CafeDynamicOffers';

export const metadata = {
  title: 'Cafetería Viviates Loja | Abierto 7:00 AM | El Mejor Café de Especialidad',
  description: 'Cafetería Viviates en Eudiq Hotel: abierto desde 7:00 AM, café lojano premium, desayunos y cafetería especializada. Lunes a Sábado. Centro de Loja.',
  keywords: 'cafetería loja, desayuno, café especialidad, wifi loja, café viajeros, desayuno terminal terrestre'
};



export default function CafeViviatesLanding() {
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
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  ☕ <span className="text-[#CBD95F]">Cafetería Viviates</span><br/>
                  El Mejor Café de Loja
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
                  <p className="font-semibold mb-2">📅 Horarios:</p>
                  <p>🌅 Mañana: 7:00 AM - 11:00 AM</p>
                  <p>🌆 Tarde: 4:00 PM - 9:00 PM</p>
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
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#038C7F]/20">
                  <div className="text-4xl mb-3 text-center">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900 mb-1 text-center">{item.name}</h3>
                  <p className="text-2xl font-bold text-[#038C7F] mb-2 text-center">{item.price}</p>
                  <p className="text-xs text-gray-600 text-center">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600">Menú actualizado diariamente • Precios incluyen IVA</p>
            </div>
          </div>
        </section>

        {/* Testimonios removidos según feedback cliente - esperar reseñas reales */}

        {/* Ubicación removida - no necesaria en sección de cafetería según cliente */}

        {/* CTA Final removido - no necesario apartado de reservas según cliente */}
        <section className="py-16 bg-gradient-to-r from-[#038C7F]/10 to-[#CBD95F]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              ☕ Visítanos en Cafetería Viviates
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              <strong>Lunes a Sábado</strong> • 7AM-11AM y 4PM-9PM
            </p>
            <p className="text-gray-600 mb-4">
              Av. 8 de Diciembre y Juan José Flores • Diagonal a la Terminal Terrestre
            </p>

            <p className="text-sm text-[#038C7F]">
              ☕ Café lojano premium • 🥐 Comida casera • 💻 WiFi ultra rápido • 🎨 Ambiente único
            </p>
          </div>
        </section>
      </div>
    </ConversionOptimizer>
  );
}