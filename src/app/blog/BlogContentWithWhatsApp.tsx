"use client";
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton';
import CTAGraduacion from '@/components/CTAGraduacion';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, MapPin, Phone, Clock, Wifi, Car, Coffee, Users, Bed, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface BlogContentWithWhatsAppProps {
  post: {
    title: string;
    updatedAt: string;
    summary?: string;
    image?: string;
    slug: string;
    content?: string;
    author?: string;
    tags?: string[];
  };
}


// Componente para fechas de graduación
const GraduationDates = () => (
  <div className="grid md:grid-cols-3 gap-6 my-12">
    {[
      { mes: 'Marzo 2025', fechas: '15-20 Mar', limite: '1 Mar' },
      { mes: 'Julio 2025', fechas: '20-25 Jul', limite: '1 Jul' },
      { mes: 'Noviembre 2025', fechas: '15-20 Nov', limite: '1 Nov' }
    ].map((fecha, index) => (
      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-[#038C7F] mb-2">{fecha.mes}</h3>
        <p className="text-gray-600 mb-1">Ceremonias: {fecha.fechas}</p>
        <p className="text-sm text-gray-500 mb-4">Reservar antes: {fecha.limite}</p>
        <a
          href={`https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20para%20graduación%20${fecha.mes}`}
          className="w-full bg-[#038C7F] text-white py-2 px-4 rounded-lg text-center block hover:bg-[#027066] transition-colors"
        >
          Ver disponibilidad
        </a>
      </div>
    ))}
  </div>
);

// Componente para tipos de habitaciones
const RoomTypes = () => (
  <div className="grid md:grid-cols-3 gap-6 my-12">
    {[
      {
        tipo: 'Familiar',
        personas: '4 personas',
        camas: '2 matrimoniales',
        icon: Users,
        ideal: 'Padres y hermanos'
      },
      {
        tipo: 'Doble',
        personas: '2 personas',
        camas: '1 matrimonial',
        icon: Bed,
        ideal: 'Pareja o padres'
      },
      {
        tipo: 'Ejecutiva',
        personas: '2-3 personas',
        camas: '1 matrimonial + sofá',
        icon: Coffee,
        ideal: 'Servicios premium'
      }
    ].map((room, index) => {
      const IconComponent = room.icon;
      return (
        <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <IconComponent className="h-8 w-8 text-[#038C7F]" />
            <h3 className="text-xl font-bold text-gray-900">Habitación {room.tipo}</h3>
          </div>
          <div className="space-y-2 mb-4 text-gray-600">
            <p>✓ {room.personas}</p>
            <p>✓ {room.camas}</p>
            <p>✓ {room.ideal}</p>
            <p>✓ Desayuno incluido</p>
          </div>
        </div>
      );
    })}
  </div>
);

// Componente de datos rápidos (sidebar info)
const QuickInfo = () => (
  <div className="bg-gradient-to-br from-[#038C7F]/5 to-[#CBD95F]/5 rounded-xl p-6 sticky top-8">
    <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Datos rápidos</h3>
    <div className="space-y-3 text-sm">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-[#038C7F]" />
        <span>UTPL: 5 min en taxi</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-[#038C7F]" />
        <span>Terminal: 3 min a pie</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-[#038C7F]" />
        <span>Check-in a partir de las 13:00</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-[#038C7F]" />
        <span>Check-out a partir de las 00:00</span>
      </div>
      <hr className="my-4" />
      <a
        href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20necesito%20información%20para%20graduación%20UTPL"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#1ea952] transition-colors w-full justify-center"
      >
        <Phone className="h-4 w-4" />
        WhatsApp directo
      </a>
    </div>
  </div>
);

// Índice de contenidos
const TableOfContents = () => (
  <div className="bg-gray-50 rounded-xl p-6 mb-8">
    <h3 className="text-lg font-bold text-gray-900 mb-4">📚 Contenido de la guía</h3>
    <nav className="space-y-2 text-sm">
      <a href="#por-que-utpl" className="block text-[#038C7F] hover:underline">• Por qué alojarte cerca de UTPL</a>
      <a href="#fechas-graduacion" className="block text-[#038C7F] hover:underline">• Fechas de graduación 2025</a>
      <a href="#tipos-habitaciones" className="block text-[#038C7F] hover:underline">• Tipos de habitaciones para familias</a>
      <a href="#como-reservar" className="block text-[#038C7F] hover:underline">• Cómo reservar</a>
      <a href="#que-hacer-loja" className="block text-[#038C7F] hover:underline">• Qué hacer en Loja</a>
    </nav>
  </div>
);

interface InlineFormProps {
  formData: {
    nombre: string;
    fecha: string;
    personas: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    nombre: string;
    fecha: string;
    personas: string;
  }>>;
}

// Formulario inline
const InlineForm = ({ formData, setFormData }: InlineFormProps) => (
  <div className="bg-white border-2 border-[#038C7F]/20 rounded-xl p-6 my-8">
    <h3 className="text-xl font-bold text-gray-900 mb-4">💬 Consulta disponibilidad</h3>
    <div className="grid md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038C7F]"
      />
      <input
        type="date"
        value={formData.fecha}
        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038C7F]"
      />
      <select
        value={formData.personas}
        onChange={(e) => setFormData({ ...formData, personas: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038C7F]"
      >
        <option value="1">1 persona</option>
        <option value="2">2 personas</option>
        <option value="3">3 personas</option>
        <option value="4">4 personas</option>
      </select>
      <a
        href={`https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20soy%20${formData.nombre},%20necesito%20habitación%20para%20${formData.personas}%20personas%20el%20${formData.fecha}%20para%20graduación%20UTPL`}
        className="bg-[#038C7F] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#027066] transition-colors text-center"
      >
        Consultar
      </a>
    </div>
  </div>
);

export default function BlogContentWithWhatsApp({ post }: BlogContentWithWhatsAppProps) {
  const [showMoreServices, setShowMoreServices] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    personas: '2'
  });


  return (
    <>
      {/* Hero Section mejorado */}
      <div className="relative w-full h-[500px] md:h-[600px] bg-gray-900">
        <Image
          src={post.image || 'https://res.cloudinary.com/dltfsttr7/image/upload/v1764625179/WhatsApp_Image_2025-11-27_at_14.56.04_3_nsqxwv.jpg'}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Contenido del Hero */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Sello de ubicación */}
              <div className="inline-flex items-center gap-2 bg-[#038C7F] text-white px-4 py-2 rounded-full mb-6">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">Cerca de UTPL • Terminal Terrestre</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>

              {post.summary && (
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  {post.summary}
                </p>
              )}

              {/* CTA principal del hero */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20para%20graduación%20UTPL"
                  className="bg-[#25D366] hover:bg-[#1ea952] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 justify-center transition-colors shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  Reservar para graduación UTPL
                </a>
                <a
                  href="tel:+593961712106"
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center transition-colors backdrop-blur-sm"
                >
                  <Phone className="h-5 w-5" />
                  +593 96 171 2106
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-[#CBD95F] transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al blog</span>
          </Link>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Layout principal con sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Contenido principal */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "datePublished": post.updatedAt,
                    "dateModified": post.updatedAt,
                    "author": {
                      "@type": "Organization",
                      "name": post.author || "Eudiq Hotel Loja"
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": "Eudiq Hotel Loja",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://eudiqhotel.com/Eudiq.png"
                      }
                    },
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": `https://eudiqhotel.com/blog/${post.slug}`
                    },
                    "description": post.summary || `Artículo del blog de Eudiq Hotel Loja: ${post.title}`,
                    "image": post.image || undefined
                  })
                }}
              />

              {/* Subtítulo SEO mejorado */}
              <div className="mb-8">
                <h2 className="text-lg text-gray-600 font-medium">
                  Hotel cerca de UTPL para familias en graduación 2025 • Terminal Terrestre Loja • Habitaciones familiares
                </h2>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-[#038C7F]" />
                  <span className="text-sm">
                    Actualizado: {new Date(post.updatedAt).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                {post.author && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <User className="h-5 w-5 text-[#038C7F]" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#038C7F]/10 text-[#038C7F] rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Índice de contenidos */}
              <TableOfContents />

              {/* Content con ancho optimizado para lectura */}
              <div className="max-w-[700px] blog-content space-y-8">
                <style jsx>{`
                  /* Separación general entre elementos */
                  .blog-content > * + * {
                    margin-top: 1.75rem;
                  }
                  
                  /* Títulos H2 - Principales */
                  .blog-content h2 {
                    font-size: 1.875rem !important;
                    font-weight: 700 !important;
                    color: #1f2937 !important;
                    margin-top: 3.5rem !important;
                    margin-bottom: 1.5rem !important;
                    padding-bottom: 0.75rem !important;
                    border-bottom: 3px solid #038C7F !important;
                    line-height: 1.3 !important;
                    position: relative;
                  }
                  .blog-content h2:first-of-type {
                    margin-top: 1rem !important;
                  }
                  .blog-content h2:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -3px;
                    width: 60px;
                    height: 3px;
                    background-color: #CBD95F;
                  }
                  
                  /* Títulos H3 - Secundarios */
                  .blog-content h3 {
                    font-size: 1.375rem !important;
                    font-weight: 600 !important;
                    color: #038C7F !important;
                    margin-top: 2.5rem !important;
                    margin-bottom: 1rem !important;
                    line-height: 1.4 !important;
                    position: relative;
                    padding-left: 1rem;
                  }
                  .blog-content h3:before {
                    content: '▶';
                    position: absolute;
                    left: 0;
                    color: #CBD95F;
                    font-size: 0.875rem;
                    top: 0.125rem;
                  }
                  
                  /* Párrafos con mejor tipografía */
                  .blog-content p {
                    font-size: 1.125rem !important;
                    line-height: 1.8 !important;
                    color: #374151 !important;
                    margin-bottom: 1.5rem !important;
                    text-align: left;
                  }
                  
                  /* Primer párrafo como intro destacada */
                  .blog-content p:first-child {
                    font-size: 1.25rem !important;
                    color: #4b5563 !important;
                    line-height: 1.7 !important;
                    font-weight: 500 !important;
                    margin-bottom: 2rem !important;
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    border-left: 4px solid #038C7F;
                  }
                  
                  /* Texto en negrita mejorado */
                  .blog-content strong {
                    font-weight: 700 !important;
                    color: #111827 !important;
                    background: linear-gradient(120deg, #038C7F15 0%, #CBD95F15 100%);
                    padding: 0.1875rem 0.375rem !important;
                    border-radius: 0.375rem !important;
                    border: 1px solid #038C7F20;
                  }
                  
                  /* Listas limpias y modernas */
                  .blog-content ul, .blog-content ol {
                    margin: 1.5rem 0 !important;
                    padding-left: 1.5rem !important;
                  }
                  
                  .blog-content ul {
                    list-style: none;
                  }
                  
                  .blog-content li {
                    font-size: 1.125rem !important;
                    line-height: 1.8 !important;
                    color: #374151 !important;
                    margin-bottom: 0.75rem !important;
                    position: relative;
                    padding-left: 1.5rem !important;
                  }
                  
                  .blog-content ul li:before {
                    content: '•';
                    position: absolute;
                    left: 0;
                    color: #038C7F;
                    font-weight: bold;
                    font-size: 1.25rem;
                  }
                  
                  /* Enlaces más destacados */
                  .blog-content a {
                    color: #038C7F;
                    text-decoration: none;
                    font-weight: 500;
                    background-color: #038C7F08;
                    padding: 0.125rem 0.25rem;
                    border-radius: 0.25rem;
                    transition: all 0.2s ease;
                  }
                  .blog-content a:hover {
                    color: #027066;
                    background-color: #038C7F15;
                    text-decoration: underline;
                  }
                  
                  /* Blockquotes más elegantes */
                  .blog-content blockquote {
                    border-left: 4px solid #CBD95F;
                    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
                    padding: 2rem 2.5rem;
                    margin: 3rem 0;
                    border-radius: 0 0.75rem 0.75rem 0;
                    font-style: italic;
                    color: #6b7280;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                  }
                  .blog-content blockquote p {
                    margin-bottom: 0.5rem;
                    font-size: 1.0625rem;
                  }
                  .blog-content blockquote footer {
                    font-size: 0.875rem;
                    color: #9ca3af;
                    margin-top: 0.5rem;
                    font-weight: 500;
                  }
                  
                  /* Imágenes mejoradas */
                  .blog-content img {
                    border-radius: 0.75rem;
                    margin: 2.5rem 0;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    height: auto;
                  }
                  
                  /* Código inline mejorado */
                  .blog-content code {
                    background-color: #f3f4f6;
                    color: #038C7F;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                    font-weight: 500;
                    border: 1px solid #e5e7eb;
                  }
                  
                  /* Separadores visuales */
                  .blog-content hr {
                    border: none;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #038C7F40, transparent);
                    margin: 3rem 0;
                  }
                  
                  /* Tabla si existe */
                  .blog-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2.5rem 0;
                    background-color: white;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                  }
                  
                  .blog-content th, 
                  .blog-content td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #e5e7eb;
                  }
                  
                  .blog-content th {
                    background-color: #038C7F;
                    color: white;
                    font-weight: 600;
                  }
                `}</style>

                {/* Secciones específicas con IDs para navegación */}
                <section id="por-que-utpl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué alojarte cerca de la UTPL?</h2>
                  <div className="bg-gradient-to-r from-[#038C7F]/10 to-[#CBD95F]/10 rounded-xl p-6 mb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Car className="h-6 w-6 text-[#038C7F]" />
                        <span>5 min a UTPL en taxi</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-6 w-6 text-[#038C7F]" />
                        <span>3 min al Terminal a pie</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Wifi className="h-6 w-6 text-[#038C7F]" />
                        <span>WiFi gratis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Coffee className="h-6 w-6 text-[#038C7F]" />
                        <span>Desayuno incluido</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA intermedio */}
                <CTAGraduacion />

                <section id="fechas-graduacion">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Fechas clave de graduación UTPL 2025</h2>
                  <GraduationDates />
                </section>

                <InlineForm formData={formData} setFormData={setFormData} />

                <section id="tipos-habitaciones">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de habitaciones para familias</h2>
                  <RoomTypes />
                </section>

                {/* Servicios principales con acordeón */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Qué incluye tu estadía</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: Check, text: 'Desayuno completo incluido' },
                      { icon: Wifi, text: 'WiFi gratis' },
                      { icon: Car, text: 'Estacionamiento gratuito' },
                      { icon: Clock, text: 'Recepción 24 horas' }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <service.icon className="h-6 w-6 text-[#038C7F]" />
                        <span className="font-medium">{service.text}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowMoreServices(!showMoreServices)}
                    className="flex items-center gap-2 text-[#038C7F] hover:text-[#027066] font-medium"
                  >
                    {showMoreServices ? 'Ver menos servicios' : 'Ver más servicios'}
                    {showMoreServices ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  {showMoreServices && (
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      {[
                        'Cafetería Viviates en el hotel',
                        'Servicio de lavandería',
                        'Información turística',
                        'Coordinación de taxis',
                        'Custodia de equipaje',
                        'Servicio de despertador'
                      ].map((service, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-700">
                          <Check className="h-4 w-4 text-[#038C7F]" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                <div dangerouslySetInnerHTML={{ __html: post.content || '<p>Contenido no disponible</p>' }} />
              </div>

              {/* CTA final destacado */}
              <div className="mt-16 pt-8">
                <div className="bg-gradient-to-br from-[#038C7F] via-[#038C7F] to-[#027066] rounded-3xl p-10 text-center text-white shadow-2xl">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold mb-4">
                      Asegura tu lugar para la graduación UTPL
                    </h3>
                    <p className="text-xl opacity-90 mb-8 leading-relaxed">
                      Las fechas de graduación se llenan rápido. Reserva ahora tu habitación familiar
                      en el hotel más cerca de UTPL con desayuno incluido.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20habitación%20familiar%20para%20graduación%20UTPL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#1ea952] text-white px-8 py-4 rounded-xl text-lg font-bold inline-flex items-center gap-2 transition-colors shadow-lg"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Reservar por WhatsApp
                      </a>
                      <a
                        href="tel:+593961712106"
                        className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2 transition-colors backdrop-blur-sm"
                      >
                        <Phone className="h-5 w-5" />
                        Llamar ahora
                      </a>
                    </div>
                    <p className="text-sm opacity-75 mt-6">
                      📍 A 5 min de UTPL • 🅿️ Estacionamiento gratis
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              <QuickInfo />

              {/* Artículos relacionados mejorados */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">📚 También te puede interesar</h3>
                <div className="space-y-4">
                  <Link href="/blog/festival-artes-loja-2025-hospedaje" className="block group">
                    <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-gray-100 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#038C7F] mb-2">
                        Festival de las Artes Loja 2025
                      </h4>
                      <p className="text-sm text-gray-600">
                        Guía completa del evento cultural más importante del sur de Ecuador
                      </p>
                    </div>
                  </Link>

                  <Link href="/blog/donde-hospedarse-terminal-terrestre-loja" className="block group">
                    <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-gray-100 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#038C7F] mb-2">
                        Hoteles cerca del Terminal
                      </h4>
                      <p className="text-sm text-gray-600">
                        Por qué elegir hospedaje cerca del Terminal Terrestre de Loja
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="text-center mt-6">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#038C7F] hover:text-[#027066] font-semibold text-sm"
                  >
                    Ver todos los artículos
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Barra sticky móvil */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-xl z-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">Graduación UTPL</p>
            <p className="text-xs text-gray-600">Habitaciones familiares disponibles</p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20para%20graduación%20UTPL"
            className="bg-[#25D366] hover:bg-[#1ea952] text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Reservar
          </a>
        </div>
      </div>

      <WhatsAppFloatButton section="blog" />
    </>
  );
}
