"use client";
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Phone } from 'lucide-react';
import { trackWhatsappClick } from '@/components/ConversionOptimizer';

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

// Formulario simple de contacto
const SimpleContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: ''
  });

  const whatsappMessage = `Hola, soy ${formData.nombre || '[Tu nombre]'}. Necesito información para el ${formData.fecha || '[fecha]'}`;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 sticky top-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">💬 Consultar disponibilidad</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038C7F]"
        />
        <input
          type="date"
          value={formData.fecha}
          onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038C7F]"
        />
        <a
          href={`https://api.whatsapp.com/send?phone=593961712106&text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#1ea952] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
          onClick={() => trackWhatsappClick('blog_sidebar_form')}
        >
          <Phone className="h-5 w-5" />
          Enviar por WhatsApp
        </a>
      </div>
    </div>
  );
};

// Posts relacionados
const RelatedPosts = () => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mt-6">
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
);

export default function BlogContentWithWhatsApp({ post }: BlogContentWithWhatsAppProps) {
  return (
    <>
      {/* Hero Simple */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-900">
        <Image
          src={post.image || 'https://res.cloudinary.com/dltfsttr7/image/upload/v1764625179/WhatsApp_Image_2025-11-27_at_14.56.04_3_nsqxwv.jpg'}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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

        {/* Título */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
              {post.title}
            </h1>
            {post.summary && (
              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl">
                {post.summary}
              </p>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Contenido Principal */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-[#038C7F]" />
                  <span className="text-sm">
                    {new Date(post.updatedAt).toLocaleDateString('es-ES', {
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

              {/* Contenido del Blog */}
              <div className="prose prose-lg max-w-none blog-content">
                <style jsx global>{`
                  .blog-content h2 {
                    font-size: 1.875rem;
                    font-weight: 700;
                    color: #1f2937;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 3px solid #038C7F;
                    line-height: 1.3;
                  }
                  
                  .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #038C7F;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                  }
                  
                  .blog-content p {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: #374151;
                    margin-bottom: 1.5rem;
                  }
                  
                  .blog-content strong {
                    font-weight: 700;
                    color: #111827;
                  }
                  
                  .blog-content ul {
                    list-style: none;
                    margin: 1.5rem 0;
                    padding-left: 0;
                  }
                  
                  .blog-content li {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: #374151;
                    margin-bottom: 0.75rem;
                    padding-left: 1.5rem;
                    position: relative;
                  }
                  
                  .blog-content li:before {
                    content: '•';
                    position: absolute;
                    left: 0;
                    color: #038C7F;
                    font-weight: bold;
                    font-size: 1.25rem;
                  }
                  
                  .blog-content img {
                    border-radius: 0.75rem;
                    margin: 2.5rem 0;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    height: auto;
                  }
                  
                  .blog-content a {
                    color: #038C7F;
                    text-decoration: underline;
                    font-weight: 500;
                  }
                  
                  .blog-content a:hover {
                    color: #027066;
                  }
                `}</style>

                <div dangerouslySetInnerHTML={{ __html: post.content || '<p>Contenido no disponible</p>' }} />
              </div>

              {/* CTA Final */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-[#038C7F] to-[#027066] rounded-2xl p-8 text-center text-white">
                  <h3 className="text-2xl font-bold mb-3">
                    ¿Necesitas más información?
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Contáctanos por WhatsApp y te ayudamos con tu reserva
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=593961712106&text=Hola, necesito información sobre hospedaje"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg"
                    onClick={() => trackWhatsappClick('blog_footer_cta')}
                  >
                    <Phone className="h-5 w-5" />
                    Consultar disponibilidad
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <SimpleContactForm />
            <RelatedPosts />
          </div>
        </div>
      </main>

      <WhatsAppFloatButton section="blog" />
    </>
  );
}
