'use client'

import React, { useState } from 'react';
import { Coffee, Croissant, IceCream, Wine, Beer, Martini, ChefHat, Clock, Phone, MapPin, UtensilsCrossed, Search, Filter, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { CTAButton } from '@/components/ConversionOptimizer';
import Link from 'next/link';
import { useCafeAnalytics } from '@/hooks/useCafeAnalytics';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  id: string;
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  items: MenuItem[];
  color: string;
}

const MENU_DATA: MenuCategory[] = [
  {
    id: 'desayunos',
    name: 'Desayunos',
    Icon: Croissant,
    color: 'from-white to-[#F2F2F2]',
    items: [
      { name: 'Desayuno Americano', description: 'Huevos revueltos, tostadas con mantequilla y mermelada, tocino, bebida caliente y jugo', price: '$4.50' },
      { name: 'Desayuno Continental', description: 'Huevos revueltos, prensado de queso, bebida caliente y jugo', price: '$3.75' },
      { name: 'Desayuno Ligero', description: 'Ensalada de frutas, tostada con mermelada y bebida caliente', price: '$3.75' },
      { name: 'Desayuno Tradicional', description: 'Ensalada de frutas, Tamal o Humita, jugo y bebida caliente', price: '$4.50' },
    ]
  },
  {
    id: 'tradicional',
    name: 'Tradicional Lojano',
    Icon: ChefHat,
    color: 'from-[#A9BF04] to-[#8A9C03]',
    items: [
      { name: 'Tamal', description: 'Envuelto de masa de maíz aliñado con relleno de pollo (cocido al vapor)', price: '$1.75' },
      { name: 'Humita', description: 'Envuelto de masa de maíz choclo relleno de queso (cocido al vapor)', price: '$1.75' },
      { name: 'Quimbolito', description: 'Envuelto dulce a base de harina tipo pastelito (cocido al vapor)', price: '$1.75' },
      { name: 'Mote Pillo', description: 'Mote aliñado revuelto con huevo y queso', price: '$2.75' },
      { name: 'Mote Sucio', description: 'Mote aliñado con manteca negra y chicharrón', price: '$3.00' },
      { name: 'Tigrillo', description: 'Plátano verde majado y revuelto con queso y huevo', price: '$3.75' },
      { name: 'Tigrillo Mixto', description: 'Plátano verde majado revuelto con queso, chicharrón y huevo', price: '$4.00' },
      { name: 'Bolón de Verde o Maduro', description: 'Bolitas de plátano cocido y machacado', price: '$2.75' },
      { name: 'Bolón con Queso', price: '$2.75' },
      { name: 'Bolón con Chicharrón', price: '$3.00' },
      { name: 'Bolón Mixto', price: '$3.25' },
      { name: 'Empanada de Verde', description: 'Masa de plátano verde con relleno de pollo (fritas)', price: '$2.00' },
      { name: 'Empanada de Viento', description: 'Masa de harina con relleno de queso (fritas)', price: '$1.25' },
      { name: 'Sango', description: 'Plato cremoso a base de maíz tostado y queso, con huevo frito', price: '$3.50' },
      { name: 'Tortilla de Maduro y Mozarella', description: 'Tortilla de plátano maduro frito rellena de queso mozarella, con huevo frito', price: '$3.00' },
      { name: 'Ensalada de Pollo', description: 'Pollo a la plancha, maíz, lechuga, tomate, aguacate y salsa', price: '$5.00' },

    ]
  },
  {
    id: 'especial',
    name: 'Especiales',
    Icon: UtensilsCrossed,
    color: 'from-white to-[#F2F2F2]',
    items: [
      { name: 'Wafle Clásico', description: 'Acompañado de frutas y miel de maple', price: '$3.75' },
      { name: 'Wrap de Pollo', description: 'Tortilla de trigo, pechuga a la plancha, lechuga, tomate, aguacate, salsa mayonesa y papas chips', price: '$4.00' },
      { name: 'Hamburguesa', description: 'Pan, carne, queso, tocino, tomate, lechuga y papas fritas', price: '$4.00' },
      { name: 'Sándwich de Pollo', description: 'Pan, pechuga de pollo, lechuga, tomate y salsa', price: '$3.75' },
      { name: 'Sándwich Vegetal', description: 'Pan, vegetales frescos, lechuga, tomate y salsa', price: '$3.75' },
    ]
  },
  {
    id: 'postres',
    name: 'Postres',
    Icon: IceCream,
    color: 'from-[#A9BF04] to-[#8A9C03]',
    items: [
      { name: 'Cheesecake Capuchino', description: 'Postre frío de queso, crema y café', price: '$3.00' },
      { name: 'Cheesecake', description: 'Postre frío de queso con sirope de frutas', price: '$2.75' },
      { name: 'Bizcocho de la Casa', price: '$2.50' },
      { name: 'Tiramisu', description: 'Postre frío con biscotela, crema de leche y café', price: '$3.00' },
    ]
  },
  {
    id: 'calientes',
    name: 'Bebidas Calientes',
    Icon: Coffee,
    color: 'from-[#038C7F] to-[#026B61]',
    items: [
      { name: 'Café Filtrado', price: '$2.50' },
      { name: 'Americano', price: '$2.00' },
      { name: 'Americano Amaretto', price: '$2.50' },
      { name: 'Espresso', price: '$2.00' },
      { name: 'Capuchino', description: 'Café más leche con espuma', price: '$2.50' },
      { name: 'Capuchino Amaretto', description: 'Con licor de avellana', price: '$2.75' },
      { name: 'Mocachino', description: 'Café más leche más chocolate', price: '$2.75' },
      { name: 'Latte', description: 'Café más leche', price: '$2.25' },
      { name: 'Macchiato', description: 'Espresso doble con toque de leche', price: '$2.50' },
      { name: 'Chocolate', description: 'Chocolate con leche', price: '$2.25' },
      { name: 'Agua Aromática', description: 'Hierba luisa, cedrón, horchata, flor de jamaica', price: '$1.75' },
      { name: 'Té Natural de Frutos Rojos', price: '$2.00' },
      { name: 'V60 (Brew)', description: 'Método de extracción especial', price: '$3.00' },
      { name: 'Chemex (Brew)', description: 'Método de extracción especial', price: '$3.00' },
      { name: 'Aeropress (Brew)', description: 'Método de extracción especial', price: '$3.00' },
      { name: 'Prensa Francesa (Brew)', description: 'Método de extracción especial', price: '$3.00' },
    ]
  },
  {
    id: 'frias',
    name: 'Bebidas Frías',
    Icon: Coffee,
    color: 'from-[#A9BF04] to-[#8A9C03]',
    items: [
      { name: 'Ice Coffee', description: 'Café con hielo', price: '$2.00' },
      { name: 'Ice Latte', description: 'Café frío más leche fría', price: '$2.50' },
      { name: 'Ice Cream Coffee', description: 'Café frío, leche y helado de vainilla', price: '$3.25' },
      { name: 'Frappé Clásico', description: 'Café, leche, chocolate batido con hielo y crema chantilly', price: '$3.25' },
      { name: 'Frappé Amaretto', description: 'Frappé clásico con licor amaretto', price: '$3.50' },
      { name: 'Frappé de Fresa', description: 'Fresas, leche, sirope batido con hielo y crema chantilly', price: '$3.25' },
      { name: 'Frappé de Oreo', description: 'Galletas oreo, leche, helado de vainilla y crema chantilly', price: '$4.00' },
      { name: 'Limonada Natural', price: '$1.75' },
      { name: 'Limonada de Frutos Rojos', price: '$2.00' },
      { name: 'Limonada Imperial', price: '$2.00' },
      { name: 'Jugos Naturales', price: '$2.00' },
      { name: 'Batidos', price: '$2.50' },
      { name: 'Botella de Agua', price: '$1.00' },
      { name: 'Agua Mineral con Gas', price: '$1.50' },
    ]
  },
  {
    id: 'cocteles',
    name: 'Cocteles',
    Icon: Martini,
    color: 'from-[#038C7F] to-[#026B61]',
    items: [
      { name: 'Cuba Libre', description: 'Ron, coca cola, limón', price: '$6.00' },
      { name: 'Coctel de la Casa', description: 'Café frío, licor amaretto y gaseosa', price: '$6.00' },
      { name: 'Margarita', description: 'Tequila, jugo de limón, triple seco, sirope', price: '$6.00' },
      { name: 'Mojito', description: 'Ron, menta, sirope, limón, soda', price: '$6.00' },
      { name: 'Piña Colada', description: 'Piña, leche condensada, ron', price: '$6.50' },
    ]
  },
  {
    id: 'vinos',
    name: 'Vinos',
    Icon: Wine,
    color: 'from-[#A9BF04] to-[#8A9C03]',
    items: [
      { name: 'Copa de Vino', price: '$3.00' },
      { name: 'Sangría (Jarra)', price: '$17.00' },
      { name: 'Sangría (1/2 Jarra)', price: '$9.00' },
      { name: 'Vino Hervido (Jarra)', price: '$17.00' },
      { name: 'Vino Hervido (1/2 Jarra)', price: '$9.00' },
      { name: 'Vino Hervido (Copa)', price: '$3.00' },
    ]
  },
  {
    id: 'cervezas',
    name: 'Cervezas',
    Icon: Beer,
    color: 'from-[#038C7F] to-[#026B61]',
    items: [
      { name: 'Heineken', price: '$2.50' },
      { name: 'Club', price: '$2.50' },
      { name: 'Corona', price: '$3.00' },
    ]
  },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Analytics hook
  const {
    trackWhatsAppClick,
    trackPhoneClick,
    trackSocialClick,
    trackMenuInteraction,
    trackCafeEvent,
  } = useCafeAnalytics();

  // Track menu view on mount
  React.useEffect(() => {
    trackCafeEvent('cafe_menu_view', {
      cafe_section: 'menu_page',
    });
  }, [trackCafeEvent]);

  const filteredCategories = MENU_DATA.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false;
    if (searchTerm) {
      return category.items.some(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F2F2F2] via-white to-[#CBD95F]/10">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#F2F2F2] via-white to-[#CBD95F]/20 py-12 md:py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="h-10 w-10 md:h-12 md:w-12 text-[#038C7F]" />
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Menú Cafetería Viviates
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Café de especialidad, comida tradicional lojana y sabores internacionales
            </p>

            {/* Información de contacto */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#038C7F]" />
                <span>Av. 8 de Diciembre, diagonal al Terminal Terrestre</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#038C7F]" />
                <a href="tel:+593992499565" className="hover:underline">0992499565</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#038C7F]" />
                <span>Lunes a Sábado: Mañana 07:00 - 11:00 | Tarde 16:00 - 21:00. Domingos cerrado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros y búsqueda */}
      <section className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Búsqueda */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar en el menú..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  // Track search
                  if (e.target.value.length >= 3) {
                    trackMenuInteraction('search', { searchQuery: e.target.value });
                  }
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038C7F] focus:border-transparent"
              />
            </div>

            {/* Filtro de categorías */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-500 flex-shrink-0 hidden md:block" />
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === 'all'
                  ? 'bg-[#038C7F] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                Todo
              </button>
              {MENU_DATA.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    trackMenuInteraction('filter', {
                      category: category.name,
                      filter: category.id
                    });
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${selectedCategory === category.id
                    ? 'bg-[#038C7F] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                >
                  <category.Icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menú por categorías */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <Coffee className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No se encontraron resultados para "{searchTerm}"</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  {/* Título de categoría */}
                  <div className={`bg-gradient-to-r ${category.color} ${['desayunos', 'especial'].includes(category.id) ? 'text-gray-900 border border-gray-100' : 'text-white'} rounded-xl p-6 mb-6 shadow-lg`}>
                    <div className="flex items-center gap-3">
                      <category.Icon className="h-8 w-8" />
                      <h2 className="text-2xl md:text-3xl font-bold">{category.name}</h2>
                    </div>
                  </div>

                  {/* Items de la categoría */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items
                      .filter(item =>
                        !searchTerm ||
                        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                          <div className="flex justify-between items-start gap-3">
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 mb-1 text-lg">{item.name}</h3>
                              {item.description && (
                                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                              )}
                            </div>
                            <span className="text-[#038C7F] font-bold text-xl flex-shrink-0">{item.price}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Extras Info */}
      <section className="bg-amber-50 py-8 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Extras Disponibles</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="font-medium text-gray-900">Huevo frito</p>
              <p className="text-[#038C7F] font-bold">$1.00</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="font-medium text-gray-900">Tocino</p>
              <p className="text-[#038C7F] font-bold">$0.75</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="font-medium text-gray-900">Queso</p>
              <p className="text-[#038C7F] font-bold">$0.75</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="font-medium text-gray-900">Papas fritas</p>
              <p className="text-[#038C7F] font-bold">$1.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs y Contacto */}
      <section className="py-12 bg-gradient-to-br from-[#F2F2F2] via-white to-[#CBD95F]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              ¿Listo para disfrutar?
            </h2>
            <p className="text-lg text-gray-700">
              Haz tu pedido, reserva tu mesa o visítanos
            </p>
          </div>

          {/* Botones principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <CTAButton
              variant="secondary"
              size="large"
              href="https://api.whatsapp.com/send?phone=593961712106&text=Hola, quiero hacer un pedido en Cafeter%C3%ADa Viviates"
              section="menu_order_whatsapp"
              className="bg-[#038C7F] text-white hover:bg-[#026B61] flex items-center gap-2 font-bold"
              onClick={() => trackWhatsAppClick('order', 'menu_cta_primary', 'Pedido desde menú')}
            >
              <MessageCircle className="h-5 w-5" />
              Pedir por WhatsApp
            </CTAButton>

            <CTAButton
              variant="phone"
              size="large"
              href="tel:+593992354992"
              section="menu_call_primary"
              className="flex items-center gap-2 bg-[#A9BF04] hover:bg-[#8A9C03] border-0 font-bold"
              onClick={() => trackPhoneClick('menu_cta_primary')}
            >
              <Phone className="h-5 w-5" />
              Llamar: 0992499565
            </CTAButton>

            <CTAButton
              variant="secondary"
              size="large"
              href="https://api.whatsapp.com/send?phone=593961712106&text=Hola, quiero reservar una mesa en Cafeter%C3%ADa Viviates"
              onClick={() => trackWhatsAppClick('reservation', 'menu_cta_primary', 'Reserva desde menú')}
              section="menu_reserve_whatsapp"
              className="bg-white text-[#038C7F] border-2 border-[#038C7F] hover:bg-[#038C7F] hover:text-white flex items-center gap-2 font-bold"
            >
              <MessageCircle className="h-5 w-5" />
              Reservar Mesa
            </CTAButton>
          </div>

          {/* Info adicional */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <MapPin className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-medium">Av. 8 de Diciembre</p>
              <p className="text-xs text-gray-600">Diagonal al Terminal Terrestre</p>
              <p className="text-xs text-gray-600 mt-1">En el bajo de Hotel Eudiq</p>
              <div className="mt-3 rounded-lg overflow-hidden border border-[#038C7F]/30 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.2175373243026!2d-79.20703762477585!3d-3.9755893959981683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb479d7e88d4cf%3A0x462ba8b8785c5d1!2sCafeter%C3%ADa%20Caf%C3%A9%20Viviates%3A%20Caf%C3%A9%20Lojano%20(Hotel%20EUDIQ)!5e0!3m2!1sen!2sec!4v1763848213974!5m2!1sen!2sec"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Cafetería Viviates"
                />
              </div>
            </div>

            {/* Contacto */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Phone className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-medium mb-16">Contacto</p>
              <a
                href="tel:+593992354992"
                className="text-xs hover:underline block"
                onClick={() => trackPhoneClick('menu_contact_card')}
              >
                📞 0992499565
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=593961712106"
                className="text-xs hover:underline block mt-1"
                onClick={() => trackWhatsAppClick('info', 'menu_contact_card')}
              >
                💬 WhatsApp: 0961712106
              </a>
            </div>

            {/* Horario */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Clock className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-medium mb-16">Horario</p>
              <p className="text-xs text-gray-600">Lunes a Sábado</p>
              <p className="text-xs text-gray-700 font-bold text-center">
                07:00 - 11:00<br />
                16:00 - 21:00
              </p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-center text-sm mb-4">Síguenos en nuestras redes sociales</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/viviatescoffeeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
                onClick={() => trackSocialClick('instagram', '@viviatescoffeeshop', 'menu_footer')}
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@viviatescoffeeshop</span>
              </a>

              <a
                href="https://www.instagram.com/cafeviviates"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
                onClick={() => trackSocialClick('instagram', '@cafeviviates', 'menu_footer')}
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@cafeviviates</span>
              </a>

              <a
                href="https://www.instagram.com/hoteleudiq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
                onClick={() => trackSocialClick('instagram', '@hoteleudiq', 'menu_footer')}
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@hoteleudiq</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/cafe-viviates"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-[#038C7F] px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
            >
              ← Volver a Cafetería Viviates
            </Link>
          </div>
        </div>
      </section>

      {/* Nota precios */}
      <section className="py-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-600">
            * El menú puede variar según disponibilidad de productos.
          </p>
        </div>
      </section>
    </main>
  );
}
