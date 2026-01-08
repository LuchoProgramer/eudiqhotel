"use client";

import { Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { trackWhatsappClick } from '@/components/ConversionOptimizer';

export default function CTAGraduacion() {
    const h3Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        // Force white color after component mounts (client-side only)
        if (h3Ref.current) {
            h3Ref.current.style.color = '#ffffff';
        }
        if (pRef.current) {
            pRef.current.style.color = '#ffffff';
        }
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#038C7F] to-[#027066] rounded-2xl p-10 text-center my-12 shadow-2xl border-4 border-[#CBD95F] transform hover:scale-[1.02] transition-all">
            <h3
                ref={h3Ref}
                className="text-3xl font-bold mb-4 drop-shadow-lg text-white"
            >
                ¿Listo para reservar tu habitación para la graduación?
            </h3>
            <p
                ref={pRef}
                className="text-xl mb-8 font-medium drop-shadow text-white"
            >
                Ubicación perfecta • Desayuno incluido • WiFi gratis • Estacionamiento
            </p>
            <a
                href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20para%20graduación%20UTPL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#038C7F] hover:bg-[#CBD95F] hover:text-[#027066] px-10 py-5 rounded-xl font-bold text-xl inline-flex items-center gap-3 transition-all shadow-xl hover:shadow-2xl"
                onClick={() => trackWhatsappClick('blog_cta_graduacion')}
            >
                <Phone className="h-6 w-6" />
                Reservar por WhatsApp
            </a>
        </div>
    );
}
