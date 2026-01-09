'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Coffee, Users, Star, Timer, CheckCircle, X, ChevronLeft, ChevronRight, Calendar, Sunrise, Sunset, Laptop, Palette, Utensils, Cookie, Sandwich, Cake, Wine, Phone, MessageCircle, Instagram } from 'lucide-react';
import { galeriaCafeViviates } from '@/lib/data';
import ConversionOptimizer, { CTAButton, trackConversion } from '@/components/ConversionOptimizer';
import { useCafeAnalytics } from '@/hooks/useCafeAnalytics';

export default function CafeHomeClient() {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [imagenActual, setImagenActual] = React.useState(0);

    // Analytics hook
    const {
        trackWhatsAppClick,
        trackPhoneClick,
        trackSocialClick,
        trackGalleryInteraction,
    } = useCafeAnalytics();

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

        // Track gallery interaction
        trackGalleryInteraction('lightbox', index, fotosCafeteria[index].alt);
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
                <section className="relative py-16 bg-gradient-to-br from-[#F2F2F2] via-white to-[#CBD95F]/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#CBD95F]/10"></div>
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                {/* Badge urgencia */}
                                <div className="inline-flex items-center gap-2 bg-[#038C7F] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 mt-2">
                                    <Clock className="h-4 w-4" />
                                    ABIERTO • L-S: 07:00 - 11:00 y 16:00 - 21:00
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 flex items-start gap-3 text-gray-900">
                                    <Coffee className="h-10 w-10 text-[#038C7F] flex-shrink-0 mt-1" />
                                    <span><span className="text-[#038C7F]">Cafetería Viviates</span><br />
                                        El Mejor Café de Loja</span>
                                </h1>

                                <p className="text-xl mb-8 text-gray-700">
                                    <strong>¡Desayuno desde las 07:00!</strong> Café lojano, ambiente acogedor y la mejor atención. Perfecto para viajeros, trabajadores y amantes del café.
                                </p>

                                {/* Beneficios clave */}
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-[#038C7F]" />
                                        <span className="font-medium">Abierto desde 07:00</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-[#038C7F]" />
                                        <span className="font-medium">WiFi Gratuito</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-[#038C7F]" />
                                        <span className="font-medium">Cerca del Terminal Terrestre</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-[#038C7F]" />
                                        <span className="font-medium">Café Lojano 100%</span>
                                    </div>
                                </div>

                                {/* Horarios destacados */}
                                <div className="bg-white border border-gray-200 rounded-lg p-4 text-gray-700 shadow-sm">
                                    <p className="font-semibold mb-2 flex items-center gap-2 text-gray-900"><Calendar className="h-4 w-4" /> Horarios:</p>
                                    <p className="flex items-center gap-2"><Sunrise className="h-4 w-4" /> Mañana: 07:00 - 11:00</p>
                                    <p className="flex items-center gap-2"><Sunset className="h-4 w-4" /> Tarde: 16:00 - 21:00</p>
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

                {/* Menú - Visual mejorado */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                                <Coffee className="h-8 w-8 text-[#038C7F]" /> Nuestro Menú
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Café lojano de especialidad y comida casera que conquista corazones
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {[
                                { Icon: Coffee, name: 'Café Lojano', price: '$2.50', desc: 'Granos selectos de la región' },
                                { Icon: Utensils, name: 'Tamal Tradicional', price: '$1.75', desc: 'Receta familiar auténtica' },
                                { Icon: Cookie, name: 'Empanadas de Viento', price: '$1.25', desc: 'Crujientes y deliciosas' },
                                { Icon: Sandwich, name: 'Sándwich de Pollo', price: '$3.75', desc: 'Ingredientes frescos diarios' },
                                { Icon: Sandwich, name: 'Sándwich Vegetal', price: '$3.75', desc: 'Opción vegetariana' },
                                { Icon: Wine, name: 'Jugos Naturales', price: '$2.00', desc: 'Frutas de la región' },
                                { Icon: Cake, name: 'Postres Caseros', price: '$3.00', desc: 'Dulces tradicionales' },
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
                            <p className="text-gray-600 mb-6">Menú actualizado diariamente</p>
                            <Link
                                href="/cafe-viviates/menu"
                                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#038C7F] border-2 border-[#038C7F] px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md"
                            >
                                <Coffee className="h-5 w-5" />
                                Ver Menú Completo
                            </Link>
                        </div>
                    </div>
                </section>

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

                {/* CTA Final y Contacto */}
                <section className="py-16 bg-gradient-to-br from-[#F2F2F2] via-white to-[#CBD95F]/20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-gray-900">
                                <Coffee className="h-8 w-8 text-[#038C7F]" /> Visítanos en Cafetería Viviates
                            </h2>
                            <p className="text-xl text-gray-700 mb-2">
                                <strong>Lunes a Sábado</strong> • Mañana 07:00 - 11:00 | Tarde 16:00 - 21:00<br />Domingos cerrado
                            </p>
                            <p className="text-gray-600 mb-6">
                                Av. 8 de Diciembre • Diagonal al Terminal Terrestre • En el bajo de Hotel Eudiq
                            </p>

                            {/* Botones CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                <CTAButton
                                    variant="secondary"
                                    size="large"
                                    href="https://api.whatsapp.com/send?phone=593961712106&text=Hola, quiero reservar una mesa en Cafetería Viviates"
                                    section="cafe_order_whatsapp"
                                    className="bg-[#038C7F] text-white hover:bg-[#026B61] flex items-center gap-2 font-bold"
                                    onClick={() => trackWhatsAppClick('order', 'cta_section', 'Reserva Cafetería Viviates')}
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Reservar por WhatsApp
                                </CTAButton>

                                <CTAButton
                                    variant="phone"
                                    size="large"
                                    href="tel:+593992354992"
                                    onClick={() => trackPhoneClick('cta_section')}
                                    section="cafe_call_primary"
                                    className="flex items-center gap-2 bg-[#A9BF04] hover:bg-[#8A9C03] border-0 font-bold"
                                >
                                    <Phone className="h-5 w-5" />
                                    Llamar: 0992499565
                                </CTAButton>

                                <Link
                                    href="/cafe-viviates/menu"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#038C7F] border-2 border-[#038C7F] px-6 py-3 rounded-lg font-bold transition-all"
                                >
                                    <Coffee className="h-5 w-5" />
                                    Ver Menú Completo
                                </Link>
                            </div>
                        </div>

                        {/* Grid de información */}
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            {/* Información de contacto */}
                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
                                        <Phone className="h-5 w-5" />
                                        Contacto
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <a
                                            href="tel:+593992354992"
                                            className="block hover:underline"
                                            onClick={() => trackPhoneClick('contact_card')}
                                        >
                                            📞 Reservas: 0992499565
                                        </a>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=593961712106"
                                            className="block hover:underline"
                                            onClick={() => trackWhatsAppClick('info', 'contact_card')}
                                        >
                                            💬 WhatsApp: 0961712106
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
                                        <Coffee className="h-5 w-5 text-[#038C7F]" />
                                        Características
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <Coffee className="h-4 w-4" />
                                            Café
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Utensils className="h-4 w-4" />
                                            Comida casera
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Laptop className="h-4 w-4" />
                                            Wifi
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Palette className="h-4 w-4" />
                                            Ambiente único
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mapa de Google */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
                                    <MapPin className="h-5 w-5" />
                                    Encuéntranos
                                </h3>
                                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-4">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.2175373243026!2d-79.20703762477585!3d-3.9755893959981683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb479d7e88d4cf%3A0x462ba8b8785c5d1!2sCafeter%C3%ADa%20Caf%C3%A9%20Viviates%3A%20Caf%C3%A9%20Lojano%20(Hotel%20EUDIQ)!5e0!3m2!1sen!2sec!4v1763848213974!5m2!1sen!2sec"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="text-center">
                                    <a
                                        href="https://maps.google.com/?cid=315998679412151009"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#038C7F] font-bold hover:underline"
                                        onClick={() => trackConversion({
                                            action: 'map_click',
                                            category: 'interaction',
                                            section: 'cafe_home',
                                            label: 'google_maps_cta'
                                        })}
                                    >
                                        <MapPin className="h-4 w-4" />
                                        Abrir en Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Redes sociales */}
                        <div className="border-t border-gray-200 pt-8">
                            <p className="text-center text-sm mb-4 text-gray-700">Síguenos en nuestras redes sociales</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://www.instagram.com/viviatescoffeeshop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all text-gray-900"
                                    onClick={() => trackSocialClick('instagram', '@viviatescoffeeshop', 'footer_social')}
                                >
                                    <Instagram className="h-5 w-5" />
                                    <span className="text-sm">@viviatescoffeeshop</span>
                                </a>

                                <a
                                    href="https://www.instagram.com/cafeviviates"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all text-gray-900"
                                    onClick={() => trackSocialClick('instagram', '@cafeviviates', 'footer_social')}
                                >
                                    <Instagram className="h-5 w-5" />
                                    <span className="text-sm">@cafeviviates</span>
                                </a>

                                <a
                                    href="https://www.instagram.com/hoteleudiq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all text-gray-900"
                                    onClick={() => trackSocialClick('instagram', '@hoteleudiq', 'footer_social')}
                                >
                                    <Instagram className="h-5 w-5" />
                                    <span className="text-sm">@hoteleudiq</span>
                                </a>
                            </div>
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

                    {/* Image Container with natural aspect ratio */}
                    <div className="relative flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={fotosCafeteria[imagenActual]?.url}
                            alt={fotosCafeteria[imagenActual]?.alt}
                            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
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
