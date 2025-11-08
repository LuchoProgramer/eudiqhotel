/**
 * Sistema avanzado de optimización de conversiones para Eudiq Hotel
 * Incluye CTAs inteligentes, tracking de eventos y A/B testing
 */

'use client';

import { useState, useEffect } from 'react';

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
    const w = window as unknown as { clarity?: (...args: unknown[]) => void };
    if (w.clarity) {
      w.clarity('track', event.action, {
        category: event.category,
        label: event.label
      });
    }
  }

  // Console log para debugging
  console.log('🎯 Conversión tracked:', event);
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
    // Track conversion
    trackConversion({
      action: 'cta_click',
      category: 'conversion',
      label: children?.toString(),
      section: section,
      method: variant
    });

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
                href="https://wa.me/593961712106?text=Hola,%20quiero%20reservar%20directamente"
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

// Componente de proof social dinámico
export function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Excelente ubicación, justo frente al terminal. Muy limpio y cómodo.",
      author: "María G.",
      rating: 5,
      recent: true
    },
    {
      text: "El café Viviates es increíble. La mejor atención en Loja.",
      author: "Carlos M.",
      rating: 5,
      recent: true
    },
    {
      text: "Perfecto para graduaciones UTPL. Muy cerca de todo.",
      author: "Ana R.",
      rating: 5,
      recent: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex text-yellow-400">
          {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        {testimonials[currentTestimonial].recent && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
            Reciente
          </span>
        )}
      </div>
      <p className="text-white/90 text-sm italic mb-2">
        &ldquo;{testimonials[currentTestimonial].text}&rdquo;
      </p>
      <p className="text-white/70 text-xs">
        - {testimonials[currentTestimonial].author}
      </p>
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
              href="https://wa.me/593961712106?text=Hola,%20vi%20la%20oferta%20especial%20de%20descuento"
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
      <UrgencyBanner />
      <ExitIntentModal />
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
            📧 info@hoteleudiq.com
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