// Configuración de Google Ads Campaign para Eudiq Hotel
export const GOOGLE_ADS_CONFIG = {
  // Estructura de campañas recomendada
  campaigns: [
    {
      name: 'Hotel Loja - Terminal Terrestre',
      type: 'Search',
      budget: '$8-12 USD/día',
      targetCPC: '$0.09 USD',
      keywords: [
        {
          keyword: 'hoteles en loja cerca del terminal terrestre',
          matchType: 'Exact',
          bid: '$0.12',
          quality: 'High',
          volume: 70,
          landingPage: '/ads/terminal-terrestre'
        },
        {
          keyword: 'hotel terminal terrestre loja',
          matchType: 'Phrase',
          bid: '$0.10',
          quality: 'High',
          volume: 45,
          landingPage: '/ads/terminal-terrestre'
        },
        {
          keyword: 'hospedaje cerca terminal loja',
          matchType: 'Modified Broad',
          bid: '$0.08',
          quality: 'Medium',
          volume: 25,
          landingPage: '/ads/terminal-terrestre'
        }
      ]
    },
    {
      name: 'Graduación UTPL',
      type: 'Search',
      budget: '$5-8 USD/día',
      seasonal: true,
      activeMonths: ['febrero', 'junio', 'octubre'],
      keywords: [
        {
          keyword: 'hotel graduacion utpl',
          matchType: 'Exact',
          bid: '$0.15',
          quality: 'High',
          volume: 40,
          landingPage: '/ads/graduacion-utpl'
        },
        {
          keyword: 'hospedaje graduacion loja',
          matchType: 'Phrase',
          bid: '$0.12',
          quality: 'High',
          volume: 30,
          landingPage: '/ads/graduacion-utpl'
        }
      ]
    },
    {
      name: 'Festival de Artes',
      type: 'Search',
      budget: '$4-6 USD/día',
      seasonal: true,
      activeMonths: ['octubre', 'noviembre'],
      keywords: [
        {
          keyword: 'hotel festival artes loja',
          matchType: 'Exact',
          bid: '$0.18',
          quality: 'High',
          volume: 25,
          landingPage: '/ads/festival-artes'
        }
      ]
    }
  ],

  // Landing pages a crear
  landingPages: [
    {
      url: '/ads/terminal-terrestre',
      title: 'Hotel Junto al Terminal Terrestre Loja | Reserva Directa',
      headline: 'Hotel Diagonal al Terminal Terrestre',
      subheadline: 'Desayuno incluido • WiFi gratis • Estacionamiento',
      benefits: [
        '✅ A 1 minuto caminando del Terminal Terrestre',
        '✅ Desayuno tradicional lojano incluido',
        '✅ WiFi de alta velocidad gratuito',
        '✅ Estacionamiento sin costo adicional',
        '✅ Recepción 24 horas para tu comodidad',
        '✅ Mejor precio garantizado reservando directo'
      ],
      cta: 'Reservar por WhatsApp Ahora',
      urgency: 'Disponibilidad limitada - Reserva hoy'
    },
    {
      url: '/ads/graduacion-utpl',
      title: 'Hotel Graduación UTPL | Familias Bienvenidas | Eudiq Hotel',
      headline: 'Hotel Perfecto para Graduación UTPL',
      subheadline: 'Habitaciones familiares • Ubicación ideal • Precios justos',
      benefits: [
        '✅ Habitaciones espaciosas para toda la familia',
        '✅ A 15 minutos del campus UTPL',
        '✅ Desayuno incluido para energizar el día especial',
        '✅ Fácil acceso desde cualquier ciudad del Ecuador',
        '✅ Personal experto en eventos de graduación',
        '✅ Tarifas especiales para grupos familiares'
      ],
      cta: 'Reservar para Graduación',
      urgency: 'Fechas de graduación se agotan rápido'
    },
    {
      url: '/ads/festival-artes',
      title: 'Hotel Festival de Artes Loja | Ubicación Estratégica',
      headline: 'Tu Base para el Festival de Artes 2025',
      subheadline: 'Ubicación perfecta • Servicios especiales • Arte y cultura',
      benefits: [
        '✅ A 5 minutos del centro histórico y eventos',
        '✅ Información diaria de programación del festival',
        '✅ Transporte coordinado a venues principales',
        '✅ WiFi premium para compartir experiencias',
        '✅ Café Viviates: el mejor café para artistas',
        '✅ Ambiente acogedor para creativos y visitantes'
      ],
      cta: 'Reservar para el Festival',
      urgency: 'Festival de Artes - Reservas limitadas'
    }
  ],

  // Ad Copy Templates
  adCopyTemplates: {
    terminal: {
      headlines: [
        'Hotel Diagonal Terminal Terrestre Loja',
        'Hospedaje Junto al Terminal Loja',
        'Hotel Terminal Loja - Desayuno Incluido',
        'Mejor Hotel Cerca Terminal Terrestre'
      ],
      descriptions: [
        'Desayuno incluido, WiFi gratis, estacionamiento. A 1 minuto del terminal. Reserva directa.',
        'Habitaciones confortables a pasos del Terminal Terrestre. Mejor precio garantizado.',
        'Hotel familiar con todos los servicios. Ubicación perfecta para viajeros.'
      ]
    },
    utpl: {
      headlines: [
        'Hotel Graduación UTPL - Familias',
        'Hospedaje Graduación Loja UTPL',
        'Hotel Familias Graduación UTPL 2025',
        'Mejor Hotel para Graduación UTPL'
      ],
      descriptions: [
        'Habitaciones familiares, desayuno incluido. Perfecto para graduaciones UTPL.',
        'A 15 min de UTPL. Tarifas especiales familias. Reserva tu fecha especial.',
        'Hotel recomendado por familias graduandas. Servicios completos.'
      ]
    }
  },

  // Configuración de conversiones
  conversionTracking: {
    whatsappClick: {
      action: 'WhatsApp Click',
      category: 'Lead Generation',
      value: 5
    },
    phoneCall: {
      action: 'Phone Call',
      category: 'Lead Generation', 
      value: 8
    },
    formSubmit: {
      action: 'Contact Form',
      category: 'Lead Generation',
      value: 3
    }
  },

  // Audiencias objetivo
  targetAudiences: [
    {
      name: 'Viajeros Terminal Terrestre',
      demographics: 'Adultos 25-55',
      interests: ['Viajes', 'Hoteles económicos'],
      location: 'Ecuador, Colombia, Perú',
      devices: 'Móvil principalmente'
    },
    {
      name: 'Familias Graduación',
      demographics: 'Adultos 40-65',
      interests: ['Educación', 'Eventos familiares'],
      location: 'Ecuador nacional',
      seasonal: 'Marzo, Julio, Noviembre'
    },
    {
      name: 'Turistas Culturales',
      demographics: 'Adultos 30-60',
      interests: ['Arte', 'Cultura', 'Festivales'],
      location: 'Nacional e internacional',
      seasonal: 'Noviembre'
    }
  ],

  // Presupuesto recomendado
  budgetAllocation: {
    daily: {
      terminal: '$8-12 USD',
      utpl: '$5-8 USD (solo meses activos)',
      festival: '$4-6 USD (octubre-noviembre)',
      total: '$17-26 USD/día promedio'
    },
    monthly: {
      low: '$350 USD',
      medium: '$500 USD',
      high: '$650 USD'
    }
  },

  // KPIs y métricas objetivo
  targetMetrics: {
    CTR: '4-6%',
    CPC: '$0.08-0.15',
    ConversionRate: '8-12%',
    CostPerConversion: '$1.50-3.00',
    QualityScore: '7-10',
    ImpressionShare: '60-80%'
  }
};

export default GOOGLE_ADS_CONFIG;