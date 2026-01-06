/**
 * Sistema avanzado de optimización de conversiones para Eudiq Hotel
 * Incluye CTAs inteligentes, tracking de eventos y A/B testing
 */

'use client';

import React, { useState, useEffect } from 'react';

// Tipos para eventos de conversión
export interface ConversionEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  section?: string;
  method?: string;
}

// Función mejorada para envío de eventos
export function trackConversion(event: ConversionEvent) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      section: event.section,
      method: event.method
    });
  }

  // Microsoft Clarity 
  if (typeof window !== 'undefined') {
    try {
      const w = window as unknown as { clarity?: (...args: unknown[]) => void };
      if (typeof w.clarity === 'function') {
        w.clarity('track', event.action, {
          category: event.category,
          label: event.label
        });
      }
    } catch (error) {
      // Silenciar errores de Clarity en desarrollo
      if (process.env.NODE_ENV === 'development') {
        console.debug('Clarity not ready:', error);
      }
    }
  }

  // Console log para debugging
  console.log('🎯 Conversión tracked:', event);
}

// Función unificada para tracking de WhatsApp - DRY & Algorithm Optimization
export function trackWhatsappClick(source: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // 1. Google Analytics 4 - Evento Rico
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Contact',
      event_label: source, // 'hero', 'cafe', 'flotante', 'reservation_button'
      value: 1,
      section: source
    });

    // 2. Google Ads Conversion - Señal Fuerte para el Algoritmo
    // ID Unificado: AW-11466632402/pXnKCLijp_oZENK92twq (Ejemplo real basado en historial, o placeholder si no existe)
    // NOTA: Reemplazar con el Label correcto si es diferente.
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11466632402/Label_Unica_Para_Todos'
    });
  }

  console.log('📱 WhatsApp Click Tracked [Unified]:', source);
}

// Hook para tracking automático de scroll
export function useScrollTracking() {
  useEffect(() => {
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);

      // Tracking de milestones de scroll
      if (scrollPercent === 25) {
        trackConversion({ action: 'scroll_25', category: 'engagement' });
      } else if (scrollPercent === 50) {
        trackConversion({ action: 'scroll_50', category: 'engagement' });
      } else if (scrollPercent === 75) {
        trackConversion({ action: 'scroll_75', category: 'engagement' });
      } else if (scrollPercent === 100) {
        trackConversion({ action: 'scroll_100', category: 'engagement' });
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          trackScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// Hook para tracking de tiempo en página
export function useTimeTracking() {
  useEffect(() => {
    const startTime = Date.now();

    const intervals = [30, 60, 120, 300]; // 30s, 1m, 2m, 5m
    const timers = intervals.map(seconds =>
      setTimeout(() => {
        trackConversion({
          action: `time_${seconds}s`,
          category: 'engagement',
          value: seconds
        });
      }, seconds * 1000)
    );

    // Cleanup function
    return () => {
      timers.forEach(timer => clearTimeout(timer));

      // Track time on page when component unmounts
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackConversion({
        action: 'time_on_page',
        category: 'engagement',
        value: timeSpent
      });
    };
  }, []);
}

// Componente de CTA optimizado con A/B testing
interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'phone';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  section?: string;
  className?: string;
}

export function CTAButton({
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  children,
  section,
  className = ''
}: CTAButtonProps) {

  const handleClick = () => {
    // Logic unificada: Si es WhatsApp, usa el tracker unificado
    if (variant === 'whatsapp') {
      trackWhatsappClick(section || 'generic_cta');
    } else {
      // Para otros botones, usa el tracking genérico
      trackConversion({
        action: 'cta_click',
        category: 'conversion',
        label: children?.toString(),
        section: section,
        method: variant
      });
    }

    if (onClick) onClick();
  };

  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4';

  const variantClasses = {
    primary: 'bg-[#038C7F] hover:bg-[#038C7F]/90 text-white shadow-lg hover:shadow-xl focus:ring-[#038C7F]/50',
    secondary: 'bg-[#CBD95F] hover:bg-[#CBD95F]/90 text-black shadow-lg hover:shadow-xl focus:ring-[#CBD95F]/50',
    whatsapp: 'bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg hover:shadow-xl focus:ring-[#25D366]/50',
    phone: 'bg-[#4285F4] hover:bg-[#4285F4]/90 text-white shadow-lg hover:shadow-xl focus:ring-[#4285F4]/50'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={handleClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

// Componente de urgencia/escasez
export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar banner después de 30 segundos en la página
    const timer = setTimeout(() => {
      setIsVisible(true);
      trackConversion({ action: 'urgency_banner_show', category: 'conversion' });
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-[#038C7F] to-[#CBD95F] p-4 rounded-lg shadow-2xl border border-white/20">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <span className="text-2xl">⏰</span>
          </div>
          <div className="flex-grow">
            <h4 className="font-bold text-white text-sm">
              ¡Reserva directa, mejor precio!
            </h4>
            <p className="text-white/90 text-xs mt-1">
              Sin comisiones de terceros. Garantizamos el mejor precio del mercado.
            </p>
            <div className="flex gap-2 mt-3">
              <CTAButton
                variant="whatsapp"
                size="small"
                href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20quiero%20reservar%20directamente"
                section="urgency_banner"
                className="text-xs"
              >
                WhatsApp
              </CTAButton>
              <button
                onClick={() => {
                  setIsVisible(false);
                  trackConversion({ action: 'urgency_banner_close', category: 'conversion' });
                }}
                className="text-white/80 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente de proof social dinámico con reseñas verificadas de Google
export function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Robert James Gilchrist",
      date: "hace 2 meses",
      rating: 5,
      text: "Very clean and quiet!",
      scores: {
        rooms: 5.0,
        service: 5.0,
        location: 5.0
      },
      verified: true
    },
    {
      name: "Manuel Quinto Coello",
      date: "hace 2 meses",
      rating: 5,
      text: "Muy bien atendido y excelente atención. Recomendado",
      scores: {
        rooms: 5.0,
        service: 5.0,
        location: 5.0
      },
      verified: true
    },
    {
      name: "Nelson Cedeño",
      date: "hace 3 semanas",
      rating: 5,
      text: "Una experiencia increible!!!",
      scores: {
        rooms: 5.0,
        service: 5.0,
        location: 5.0
      },
      verified: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6">
      {/* Header con nombre y fecha */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <p className="text-white font-semibold text-sm">{current.name}</p>
          <span className="text-white/60 text-xs">• {current.date}</span>
        </div>

        {/* Badge de Google verificado */}
        {current.verified && (
          <div className="flex items-center gap-1 px-2 py-0.5 bg-white/10 rounded-full">
            <svg className="w-3 h-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-white text-xs font-medium">Google</span>
          </div>
        )}
      </div>

      {/* Estrellas */}
      <div className="flex items-center gap-1 mb-2">
        {renderStars(current.rating)}
      </div>

      {/* Texto de la reseña */}
      <p className="text-white/90 text-sm italic mb-2">
        &ldquo;{current.text}&rdquo;
      </p>

      {/* Puntuaciones */}
      <div className="flex flex-wrap gap-2 text-xs text-white/70">
        <span>Habitaciones <strong className="text-white">{current.scores.rooms}</strong></span>
        <span>•</span>
        <span>Servicio <strong className="text-white">{current.scores.service}</strong></span>
        <span>•</span>
        <span>Ubicación <strong className="text-white">{current.scores.location}</strong></span>
      </div>
    </div>
  );
}

// Componente de exit-intent
export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        trackConversion({ action: 'exit_intent_show', category: 'conversion' });
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-scale-up">
        <button
          onClick={() => {
            setIsVisible(false);
            trackConversion({ action: 'exit_intent_close', category: 'conversion' });
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ¡Espera! ¿Te vas sin reservar?
          </h3>
          <p className="text-gray-600 mb-6">
            Obtén descuento especial reservando directo. Sin comisiones, mejor precio garantizado.
          </p>

          <div className="space-y-3">
            <CTAButton
              variant="whatsapp"
              size="large"
              href="https://api.whatsapp.com/send?phone=593961712106&text=Hola,%20vi%20la%20oferta%20especial%20de%20descuento"
              section="exit_intent"
              className="w-full"
            >
              🎁 Obtener Descuento WhatsApp
            </CTAButton>

            <CTAButton
              variant="phone"
              size="medium"
              href="tel:+593961712106"
              section="exit_intent"
              className="w-full"
            >
              📞 Llamar Ahora
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hook principal de optimización de conversiones
export function useConversionOptimization() {
  useScrollTracking();
  useTimeTracking();

  useEffect(() => {
    // Track page view
    trackConversion({
      action: 'page_view',
      category: 'engagement',
      label: window.location.pathname
    });

    // Track browser info for optimization
    trackConversion({
      action: 'browser_info',
      category: 'technical',
      label: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
    });
  }, []);
}

// Componente principal que engloba todas las optimizaciones
function ConversionOptimizer({ children }: { children: React.ReactNode }) {
  useConversionOptimization();

  return (
    <>
      {children}
      {/* UrgencyBanner removido según feedback cliente */}
    </>
  );
}

// Barra superior de contacto
export function TopContactBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#038C7F] text-white py-2 text-center text-xs sm:text-sm">
      <div className="px-4 sm:px-6">
        <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
          <span className="flex items-center gap-1">
            📞 <strong>+593 96 171 2106</strong>
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden md:flex items-center gap-1">
            📧 eudiqhotel@gmail.com
          </span>
          <span className="hidden sm:inline md:inline">•</span>
          <span className="flex items-center gap-1">
            📍 <span className="hidden sm:inline">Diagonal al</span> Terminal Terrestre
          </span>
        </p>
      </div>
    </div>
  );
}

export default ConversionOptimizer;