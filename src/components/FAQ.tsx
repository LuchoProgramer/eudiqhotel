'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    question: "¿Está incluido el desayuno en todas las habitaciones?",
    answer: "Sí, todas nuestras habitaciones incluyen desayuno sin costo adicional. Se sirve de 7:00 AM a 9:00 AM.",
    category: "servicios"
  },
  {
    question: "¿Cuánto cuesta el estacionamiento?",
    answer: "El estacionamiento está incluido para todos nuestros huéspedes sin costo adicional.",
    category: "servicios"
  },
  {
    question: "¿A qué distancia está el Terminal Terrestre?",
    answer: "Estamos ubicados diagonal al Terminal Terrestre de Loja, a solo 3 minutos caminando. Es la ubicación más conveniente para viajeros.",
    category: "ubicacion"
  },
  {
    question: "¿Tienen WiFi gratuito?",
    answer: "Sí, ofrecemos WiFi gratis en todas las habitaciones y áreas comunes del hotel, perfecto para trabajo y entretenimiento.",
    category: "servicios"
  },
  {
    question: "¿Cuál es el horario de check-in y check-out?",
    answer: "Check-in a partir de las 13:00. Check-out a partir de las 00:00. Ofrecemos flexibilidad en horarios especiales para graduaciones UTPL y eventos.",
    category: "politicas"
  },
  {
    question: "¿Está abierta Cafetería Viviates todos los días?",
    answer: "Cafetería Viviates está abierta de lunes a sábado. Horarios: Mañana 7:00 AM - 11:00 AM | Tarde 16:00 - 21:00. Domingos cerrado.",
    category: "cafe"
  },
  {
    question: "¿Cómo puedo hacer una reserva?",
    answer: "Puedes reservar por WhatsApp al +593 96 171 2106 o llamando directamente. Te confirmamos disponibilidad inmediatamente.",
    category: "reservas"
  },
  {
    question: "¿Ofrecen promociones para graduaciones UTPL?",
    answer: "Sí, tenemos promociones especiales para familias que vienen a graduaciones UTPL. Consulta disponibilidad y precios especiales por WhatsApp.",
    category: "reservas"
  },
  {
    question: "¿Qué tan lejos está la UTPL del hotel?",
    answer: "La Universidad Técnica Particular de Loja (UTPL) está a 5 minutos en taxi desde el hotel. Coordinamos transporte para graduaciones.",
    category: "ubicacion"
  },
  {
    question: "¿Tienen habitaciones familiares?",
    answer: "Sí, contamos con habitaciones familiares.",
    category: "habitaciones"
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-[#038C7F] bg-[#CBD95F]/20 rounded-full">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Tienes dudas sobre tu <span className="text-[#038C7F]">estadía</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, ubicación y reservas.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-[#038C7F] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#038C7F] flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20hotel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#038C7F] text-white font-semibold rounded-full hover:bg-[#038C7F]/90 transition-colors"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>

      {/* FAQ Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_DATA.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}