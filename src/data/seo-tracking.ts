// Configuración centralizada para tracking y monitoreo SEO
export const SEO_TRACKING_CONFIG = {
  // Keywords principales a monitorear
  primaryKeywords: [
    {
      keyword: 'hotel loja terminal terrestre',
      volume: 70,
      difficulty: 'Baja',
      priority: 'Alta',
      targetPage: '/',
      currentPosition: null, // Se actualizará manualmente
    },
    {
      keyword: 'graduacion utpl hospedaje',
      volume: 40,
      difficulty: 'Muy Baja',
      priority: 'Alta',
      targetPage: '/blog/graduacion-utpl-donde-hospedarse-loja',
      currentPosition: null,
    },
    {
      keyword: 'festival artes loja hotel',
      volume: 25,
      difficulty: 'Muy Baja',
      priority: 'Alta',
      targetPage: '/blog/festival-artes-loja-2025-hospedaje',
      currentPosition: null,
    },
    {
      keyword: 'hotel economico loja',
      volume: 480,
      difficulty: 'Media',
      priority: 'Media',
      targetPage: '/',
      currentPosition: null,
    },
    {
      keyword: 'donde hospedarse loja',
      volume: 110,
      difficulty: 'Baja',
      priority: 'Alta',
      targetPage: '/blog/donde-hospedarse-terminal-terrestre-loja',
      currentPosition: null,
    }
  ],

  // Long-tail keywords (menor volumen, mayor conversión)
  longTailKeywords: [
    'hotel cerca utpl loja',
    'hospedaje graduacion utpl',
    'hotel terminal terrestre loja económico',
    'donde dormir loja ecuador',
    'hotel con desayuno incluido loja',
    'hospedaje festival artes loja',
    'hotel parqueadero gratis loja',
    'hotel wifi gratis loja'
  ],

  // Métricas de conversión a trackear
  conversionEvents: [
    {
      name: 'whatsapp_click_hero',
      description: 'Click en WhatsApp desde Hero',
      goal: 'reservation_intent'
    },
    {
      name: 'habitaciones_page_visit',
      description: 'Visita a página de habitaciones',
      goal: 'product_interest'
    },
    {
      name: 'phone_click',
      description: 'Click en número de teléfono',
      goal: 'direct_contact'
    },
    {
      name: 'blog_to_reservation',
      description: 'De blog post a intento de reserva',
      goal: 'blog_conversion'
    },
    {
      name: 'faq_engagement',
      description: 'Interacción con FAQ',
      goal: 'info_seeking'
    }
  ],

  // Páginas críticas para monitorear
  criticalPages: [
    {
      url: '/',
      type: 'homepage',
      priority: 'Critical',
      targetKeywords: ['hotel loja', 'hotel terminal terrestre']
    },
    {
      url: '/habitaciones',
      type: 'product',
      priority: 'High',
      targetKeywords: ['habitaciones loja', 'precios hotel loja']
    },
    {
      url: '/blog/graduacion-utpl-donde-hospedarse-loja',
      type: 'content',
      priority: 'High',
      targetKeywords: ['graduacion utpl', 'hospedaje utpl']
    },
    {
      url: '/blog/festival-artes-loja-2025-hospedaje',
      type: 'content',
      priority: 'High',
      targetKeywords: ['festival artes loja']
    },
    {
      url: '/ubicacion',
      type: 'local',
      priority: 'Medium',
      targetKeywords: ['ubicacion hotel loja']
    },
    {
      url: '/cafe-viviates',
      type: 'service',
      priority: 'Medium',
      targetKeywords: ['cafe loja', 'desayuno loja']
    }
  ],

  // Competidores a monitorear
  competitors: [
    {
      name: 'Hotel Loja Bella',
      domain: 'lojabella.com',
      type: 'Direct',
      strengths: ['Ubicación centro', 'Precio'],
      weaknesses: ['Website básico', 'Pocos servicios']
    },
    {
      name: 'Hotel Virgen del Cisne',
      domain: null,
      type: 'Direct',
      strengths: ['Tradición local'],
      weaknesses: ['Sin website profesional', 'Marketing limitado']
    },
    {
      name: 'Sonesta Hotel Loja',
      domain: 'sonesta.com',
      type: 'Indirect',
      strengths: ['Brand recognition', 'Servicios premium'],
      weaknesses: ['Precio alto', 'Ubicación menos conveniente']
    }
  ],

  // Métricas objetivo por mes
  monthlyTargets: {
    november: {
      organicTraffic: 200,
      blogTraffic: 100,
      avgPosition: 8.0,
      conversions: 15,
      newKeywords: 5
    },
    december: {
      organicTraffic: 350,
      blogTraffic: 180,
      avgPosition: 6.5,
      conversions: 25,
      newKeywords: 8
    },
    january: {
      organicTraffic: 500,
      blogTraffic: 250,
      avgPosition: 5.0,
      conversions: 35,
      newKeywords: 12
    }
  }
};

// Templates para reportes manuales
export const REPORTING_TEMPLATES = {
  weeklyChecklist: [
    '📊 Revisar Google Search Console - nuevas queries',
    '📈 Verificar posiciones de keywords principales',
    '🔍 Analizar CTR de páginas principales',
    '📝 Crear 1 post de GMB',
    '🔗 Buscar 1 oportunidad de link building',
    '📱 Responder reviews en GMB',
    '⚡ Verificar PageSpeed (si hay cambios)',
    '📞 Revisar conversiones WhatsApp/teléfono'
  ],

  monthlyReport: {
    traffic: 'Tráfico orgánico vs mes anterior',
    keywords: 'Nuevas keywords en top 10',
    content: 'Performance de blog posts',
    technical: 'Issues técnicos detectados',
    conversions: 'Reservas atribuibles a SEO',
    nextMonth: 'Prioridades próximo mes'
  }
};

export default SEO_TRACKING_CONFIG;