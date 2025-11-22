'use client'

import { useEffect, useCallback } from 'react';

// Tipos de eventos para la cafetería
export type CafeEventName =
  // Navegación
  | 'cafe_page_view'
  | 'cafe_menu_view'
  | 'cafe_menu_search'
  | 'cafe_category_filter'
  
  // Interacciones con menú
  | 'cafe_item_view'
  | 'cafe_item_expand'
  
  // CTAs y conversiones
  | 'cafe_whatsapp_click'
  | 'cafe_phone_click'
  | 'cafe_order_intent'
  | 'cafe_reservation_intent'
  | 'cafe_menu_download'
  
  // Social Media
  | 'cafe_instagram_click'
  | 'cafe_facebook_click'
  | 'cafe_social_share'
  
  // Ofertas y promociones
  | 'cafe_offer_view'
  | 'cafe_offer_click'
  | 'cafe_special_view'
  
  // Galería
  | 'cafe_gallery_view'
  | 'cafe_image_click'
  | 'cafe_lightbox_open'
  
  // Ubicación y mapas
  | 'cafe_map_view'
  | 'cafe_directions_click'
  | 'cafe_location_click'
  
  // Tiempo en página
  | 'cafe_time_spent'
  | 'cafe_scroll_depth';

export interface CafeEventParams {
  // Parámetros generales
  cafe_section?: string;
  cafe_action?: string;
  cafe_value?: string | number;
  
  // Menú específico
  menu_category?: string;
  menu_item?: string;
  menu_price?: string;
  search_query?: string;
  filter_applied?: string;
  
  // Ofertas
  offer_name?: string;
  offer_time?: string;
  offer_type?: string;
  
  // Conversión
  cta_type?: 'whatsapp' | 'phone' | 'reservation' | 'order';
  cta_location?: string;
  message_text?: string;
  
  // Social
  social_platform?: 'instagram' | 'facebook' | 'whatsapp';
  social_account?: string;
  
  // Galería
  image_index?: number;
  image_alt?: string;
  
  // Engagement
  scroll_depth?: number;
  time_spent?: number;
  
  // Metadata
  timestamp?: string;
  page_path?: string;
}

// Declarar gtag global para TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Hook personalizado para tracking de analytics de la cafetería
 * Funciona con Google Analytics 4 y permite tracking personalizado
 */
export function useCafeAnalytics() {
  
  /**
   * Envía un evento de analytics específico de la cafetería
   */
  const trackCafeEvent = useCallback((
    eventName: CafeEventName,
    params?: CafeEventParams
  ) => {
    try {
      // Agregar timestamp y path automáticamente
      const enrichedParams: CafeEventParams = {
        ...params,
        timestamp: new Date().toISOString(),
        page_path: window.location.pathname,
      };

      // Google Analytics 4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
          ...enrichedParams,
          event_category: 'cafe_viviates',
          event_label: params?.cafe_section || 'general',
        });
      }

      // Consola en desarrollo para debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('🔔 Cafe Analytics Event:', {
          event: eventName,
          params: enrichedParams,
        });
      }

      // Aquí puedes agregar más plataformas de analytics si necesitas
      // Ejemplo: Facebook Pixel, Hotjar, Mixpanel, etc.
      
    } catch (error) {
      console.error('Error tracking cafe event:', error);
    }
  }, []);

  /**
   * Tracking automático de tiempo en página
   */
  useEffect(() => {
    const startTime = Date.now();

    // Enviar evento de vista de página
    trackCafeEvent('cafe_page_view', {
      cafe_section: 'main',
      page_path: window.location.pathname,
    });

    // Tracking de scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = Math.round((window.scrollY / scrollHeight) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Eventos en hitos de scroll (25%, 50%, 75%, 100%)
        if ([25, 50, 75, 100].includes(scrollDepth)) {
          trackCafeEvent('cafe_scroll_depth', {
            scroll_depth: scrollDepth,
            cafe_section: 'scroll_milestone',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Al salir de la página, enviar tiempo total
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000); // en segundos
      
      trackCafeEvent('cafe_time_spent', {
        time_spent: timeSpent,
        scroll_depth: maxScrollDepth,
        cafe_section: 'session_end',
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [trackCafeEvent]);

  /**
   * Helper específicos para acciones comunes
   */
  const trackWhatsAppClick = useCallback((
    type: 'order' | 'reservation' | 'info',
    location: string,
    messageText?: string
  ) => {
    trackCafeEvent('cafe_whatsapp_click', {
      cta_type: type === 'order' ? 'order' : type === 'reservation' ? 'reservation' : 'whatsapp',
      cta_location: location,
      message_text: messageText,
      cafe_section: 'cta',
    });
  }, [trackCafeEvent]);

  const trackPhoneClick = useCallback((location: string) => {
    trackCafeEvent('cafe_phone_click', {
      cta_type: 'phone',
      cta_location: location,
      cafe_section: 'cta',
    });
  }, [trackCafeEvent]);

  const trackMenuInteraction = useCallback((
    action: 'search' | 'filter' | 'item_view',
    details: {
      category?: string;
      item?: string;
      price?: string;
      searchQuery?: string;
      filter?: string;
    }
  ) => {
    const eventMap = {
      search: 'cafe_menu_search',
      filter: 'cafe_category_filter',
      item_view: 'cafe_item_view',
    } as const;

    trackCafeEvent(eventMap[action], {
      cafe_section: 'menu',
      menu_category: details.category,
      menu_item: details.item,
      menu_price: details.price,
      search_query: details.searchQuery,
      filter_applied: details.filter,
    });
  }, [trackCafeEvent]);

  const trackOfferInteraction = useCallback((
    action: 'view' | 'click',
    offerName: string,
    offerTime?: string
  ) => {
    trackCafeEvent(action === 'view' ? 'cafe_offer_view' : 'cafe_offer_click', {
      cafe_section: 'offers',
      offer_name: offerName,
      offer_time: offerTime,
    });
  }, [trackCafeEvent]);

  const trackSocialClick = useCallback((
    platform: 'instagram' | 'facebook' | 'whatsapp',
    account?: string,
    location?: string
  ) => {
    trackCafeEvent('cafe_instagram_click', {
      social_platform: platform,
      social_account: account,
      cta_location: location,
      cafe_section: 'social',
    });
  }, [trackCafeEvent]);

  const trackGalleryInteraction = useCallback((
    action: 'view' | 'click' | 'lightbox',
    imageIndex?: number,
    imageAlt?: string
  ) => {
    const eventMap = {
      view: 'cafe_gallery_view',
      click: 'cafe_image_click',
      lightbox: 'cafe_lightbox_open',
    } as const;

    trackCafeEvent(eventMap[action], {
      cafe_section: 'gallery',
      image_index: imageIndex,
      image_alt: imageAlt,
    });
  }, [trackCafeEvent]);

  return {
    // Función general
    trackCafeEvent,
    
    // Helpers específicos
    trackWhatsAppClick,
    trackPhoneClick,
    trackMenuInteraction,
    trackOfferInteraction,
    trackSocialClick,
    trackGalleryInteraction,
  };
}
