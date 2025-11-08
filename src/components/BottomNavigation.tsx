'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Bed, Coffee, Phone, MapPin, MessageCircle } from 'lucide-react';
import { trackConversion } from '@/components/ConversionOptimizer';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  activeColor: string;
  bgColor: string;
  isExternal?: boolean;
  trackingSection: string;
}

// Configuración de navegación optimizada para conversión
const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    href: '/',
    icon: Home,
    activeColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    trackingSection: 'bottom_nav_home'
  },
  {
    id: 'habitaciones',
    label: 'Habitaciones',
    href: '/habitaciones',
    icon: Bed,
    activeColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    trackingSection: 'bottom_nav_rooms'
  },
  {
    id: 'cafe',
    label: 'Café',
    href: '/cafe-viviates',
    icon: Coffee,
    activeColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    trackingSection: 'bottom_nav_cafe'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/593961712106?text=Hola,%20quiero%20información%20de%20Eudiq%20Hotel',
    icon: MessageCircle,
    activeColor: 'text-green-600',
    bgColor: 'bg-green-50',
    isExternal: true,
    trackingSection: 'bottom_nav_whatsapp'
  },
  {
    id: 'ubicacion',
    label: 'Ubicación',
    href: '/ubicacion',
    icon: MapPin,
    activeColor: 'text-red-600',
    bgColor: 'bg-red-50',
    trackingSection: 'bottom_nav_location'
  }
];

// Hook para detectar dispositivo móvil
function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Componente individual de botón de navegación
function NavButton({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const handleClick = () => {
    // Tracking de conversión por botón
    trackConversion({
      action: 'click',
      category: 'bottom_navigation',
      label: item.label.toLowerCase(),
      section: item.trackingSection,
      method: item.isExternal ? 'external_link' : 'internal_navigation'
    });
  };

  const IconComponent = item.icon;
  
  const buttonContent = (
    <div 
      className={`
        flex flex-col items-center justify-center py-2 px-1 rounded-lg
        transition-all duration-200 ease-out
        ${isActive 
          ? `${item.activeColor} ${item.bgColor} scale-110 shadow-lg` 
          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        }
        active:scale-95 touch-manipulation
      `}
      onClick={handleClick}
    >
      {/* Ícono con animación */}
      <div className={`
        transition-all duration-200
        ${isActive ? 'transform -translate-y-1' : ''}
      `}>
        <IconComponent className={`
          h-5 w-5 mb-1
          ${isActive ? 'animate-pulse' : ''}
        `} />
      </div>
      
      {/* Label con tipografía optimizada */}
      <span className={`
        text-xs font-medium leading-tight
        ${isActive ? 'font-semibold' : ''}
      `}>
        {item.label}
      </span>
      
      {/* Indicador activo */}
      {isActive && (
        <div className={`
          absolute -top-1 left-1/2 transform -translate-x-1/2
          w-1 h-1 rounded-full ${item.activeColor.replace('text-', 'bg-')}
          animate-pulse
        `} />
      )}
      
      {/* Badge especial para WhatsApp */}
      {item.id === 'whatsapp' && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
      )}
    </div>
  );

  if (item.isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex-1 max-w-[80px]"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={item.href} className="relative flex-1 max-w-[80px]">
      {buttonContent}
    </Link>
  );
}

// Componente principal de navegación inferior
export default function BottomNavigation() {
  const pathname = usePathname();
  const isMobile = useMobileDetection();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hide en scroll hacia abajo (UX avanzada)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Solo mostrar en móviles
  if (!isMobile) return null;

  return (
    <>
      {/* Spacer para evitar overlap con contenido */}
      <div className="h-20" />
      
      {/* Bottom Navigation */}
      <nav className={`
        fixed bottom-0 left-0 right-0 z-50
        bg-white border-t border-gray-200
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        safe-area-inset-bottom
      `}>
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-lg" />
        
        {/* Navigation content */}
        <div className="relative px-4 py-2">
          <div className="flex justify-around items-center max-w-md mx-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <NavButton 
                  key={item.id} 
                  item={item} 
                  isActive={isActive} 
                />
              );
            })}
          </div>
        </div>
        
        {/* iPhone home indicator space */}
        <div className="h-safe-area-inset-bottom bg-white" />
      </nav>
    </>
  );
}

// Hook para componentes que necesiten saber si bottom nav está activo
export function useBottomNavigation() {
  const isMobile = useMobileDetection();
  
  return {
    isActive: isMobile,
    paddingBottom: isMobile ? 'pb-20' : 'pb-0'
  };
}