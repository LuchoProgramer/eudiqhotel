/**
 * Componente de CTAs flotantes optimizado para conversiones
 * Botones fijos de WhatsApp y teléfono con tracking avanzado
 */

'use client';

import { useState, useEffect } from 'react';
import { trackConversion } from './ConversionOptimizer';
import { useBottomNavigation } from '@/hooks/useBottomNavigation';
import { Sparkles, MapPin, X } from 'lucide-react';

export default function FloatingCTAs() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isBottomNavActive, bottomNavHeight } = useBottomNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar después de 500px de scroll
      if (currentScrollY > 500) {
        setIsVisible(true);
      }

      // Auto-expandir si el usuario está scrolleando hacia abajo lentamente
      if (currentScrollY > lastScrollY && currentScrollY > 1000) {
        setIsExpanded(true);
        setTimeout(() => setIsExpanded(false), 3000);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    trackConversion({
      action: 'floating_whatsapp_click',
      category: 'conversion',
      section: 'floating_ctas'
    });
  };

  const handlePhoneClick = () => {
    trackConversion({
      action: 'floating_phone_click',
      category: 'conversion',
      section: 'floating_ctas'
    });
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed right-4 z-50 flex flex-col gap-3"
      style={{
        bottom: isBottomNavActive ? `${bottomNavHeight + 16}px` : '16px'
      }}
    >
      {/* WhatsApp Button */}
      <div className="relative group">
        <a
          href="https://wa.me/593961712106?text=Hola,%20quiero%20información%20sobre%20Eudiq%20Hotel"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
          </svg>
        </a>
        
        {/* Tooltip expandido */}
        <div className={`absolute right-16 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}>
          <div className="bg-[#25D366] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium">
            💬 ¡Reserva por WhatsApp!
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#25D366] border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* Phone Button */}
      <div className="relative group">
        <a
          href="tel:+593961712106"
          onClick={handlePhoneClick}
          className="flex items-center justify-center w-14 h-14 bg-[#4285F4] hover:bg-[#4285F4]/90 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="Llamar ahora"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#4285F4] text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
            📞 +593 96 171 2106
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-6 border-l-[#4285F4] border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* Pulse animation rings */}
      <div className="absolute top-0 left-0 w-14 h-14 rounded-full border-4 border-[#25D366]/30 animate-ping"></div>
      <div className="absolute top-0 left-0 w-14 h-14 rounded-full border-2 border-[#25D366]/20 animate-ping" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}

// Componente de barra de contacto superior
export function TopContactBar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    trackConversion({
      action: 'top_bar_whatsapp_click',
      category: 'conversion',
      section: 'top_bar'
    });
  };

  const handlePhoneClick = () => {
    trackConversion({
      action: 'top_bar_phone_click',
      category: 'conversion',
      section: 'top_bar'
    });
  };

  const handleClose = () => {
    setIsVisible(false);
    trackConversion({
      action: 'top_bar_close',
      category: 'user_interaction',
      section: 'top_bar'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#038C7F] to-[#CBD95F] text-white py-2 px-4 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm">
          <a
            href="tel:+593961712106"
            onClick={handlePhoneClick}
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +593 96 171 2106
          </a>
          
          <a
            href="https://wa.me/593961712106?text=Hola,%20quiero%20información%20sobre%20Eudiq%20Hotel"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            WhatsApp
          </a>
          
          <span className="text-white/80 text-xs flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            Diagonal al Terminal Terrestre
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs bg-white/20 px-2 py-1 rounded flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            Reserva directa, mejor precio
          </span>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Cerrar barra"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}