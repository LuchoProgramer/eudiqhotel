/**
 * Sistema completo de monitoreo y reportes SEO para Eudiq Hotel
 * Dashboard de métricas y KPIs para seguimiento de optimizaciones
 */

interface MetricasSEO {
  fecha: Date;
  organicTraffic: number;
  posicionPromedio: number;
  impresiones: number;
  clics: number;
  ctr: number;
  paginasIndexadas: number;
  errores404: number;
  tiempoCargaPromedio: number;
  scoreMovil: number;
  scoreEscritorio: number;
}

interface KPIObjetivo {
  metrica: string;
  valorActual: number;
  objetivo: number;
  fecha_objetivo: Date;
  progreso: number;
  status: 'on-track' | 'at-risk' | 'off-track';
}

interface CompetitorTracking {
  competidor: string;
  domain: string;
  posicionPromedio: number;
  trafficoEstimado: number;
  backlinks: number;
  palabrasClaveTop10: number;
  fechaActualizacion: Date;
}

// KPIs principales para los próximos 6 meses
export const objetivosSEO2025: KPIObjetivo[] = [
  {
    metrica: 'Tráfico Orgánico Mensual',
    valorActual: 650,
    objetivo: 2500,
    fecha_objetivo: new Date('2025-06-30'),
    progreso: 26,
    status: 'on-track'
  },
  {
    metrica: 'Posición Promedio Palabras Clave',
    valorActual: 45,
    objetivo: 15,
    fecha_objetivo: new Date('2025-06-30'),
    progreso: 35,
    status: 'on-track'
  },
  {
    metrica: 'Conversiones Orgánicas (Llamadas + WhatsApp)',
    valorActual: 8,
    objetivo: 40,
    fecha_objetivo: new Date('2025-06-30'),
    progreso: 20,
    status: 'at-risk'
  },
  {
    metrica: 'Páginas en Top 10',
    valorActual: 3,
    objetivo: 25,
    fecha_objetivo: new Date('2025-06-30'),
    progreso: 12,
    status: 'on-track'
  },
  {
    metrica: 'Domain Authority (Ahrefs)',
    valorActual: 8,
    objetivo: 25,
    fecha_objetivo: new Date('2025-12-31'),
    progreso: 15,
    status: 'on-track'
  },
  {
    metrica: 'Backlinks de Calidad',
    valorActual: 12,
    objetivo: 100,
    fecha_objetivo: new Date('2025-06-30'),
    progreso: 12,
    status: 'on-track'
  }
];

// Palabras clave principales para tracking
export const palabrasClaveTracking = [
  {
    keyword: 'hotel terminal terrestre loja',
    posicionActual: 8,
    posicionObjetivo: 1,
    volumenBusqueda: 320,
    dificultad: 25,
    prioridad: 'alta',
    url: 'https://hoteleudiq.com'
  },
  {
    keyword: 'hotel loja ecuador',
    posicionActual: 45,
    posicionObjetivo: 5,
    volumenBusqueda: 880,
    dificultad: 65,
    prioridad: 'alta',
    url: 'https://hoteleudiq.com'
  },
  {
    keyword: 'donde hospedar graduaciones utpl',
    posicionActual: 12,
    posicionObjetivo: 3,
    volumenBusqueda: 140,
    dificultad: 20,
    prioridad: 'alta',
    url: 'https://hoteleudiq.com/blog/graduaciones-utpl-donde-hospedarse'
  },
  {
    keyword: 'hotel parque jipiro loja',
    posicionActual: 6,
    posicionObjetivo: 1,
    volumenBusqueda: 95,
    dificultad: 15,
    prioridad: 'media',
    url: 'https://hoteleudiq.com'
  },
  {
    keyword: 'mejor cafe loja ecuador',
    posicionActual: 25,
    posicionObjetivo: 3,
    volumenBusqueda: 110,
    dificultad: 30,
    prioridad: 'media',
    url: 'https://hoteleudiq.com/cafe-viviates'
  },
  {
    keyword: 'festival artes loja hospedaje',
    posicionActual: 15,
    posicionObjetivo: 2,
    volumenBusqueda: 70,
    dificultad: 18,
    prioridad: 'alta',
    url: 'https://hoteleudiq.com/blog/festival-artes-loja-2025'
  },
  {
    keyword: 'que hacer en loja ecuador',
    posicionActual: 35,
    posicionObjetivo: 8,
    volumenBusqueda: 590,
    dificultad: 55,
    prioridad: 'media',
    url: 'https://hoteleudiq.com/blog/que-hacer-en-loja-guia-turistica-2025'
  }
];

// Competidores principales
export const competidoresTracking: CompetitorTracking[] = [
  {
    competidor: 'Hotel Libertador',
    domain: 'hotellibertadorloja.com',
    posicionPromedio: 25,
    trafficoEstimado: 850,
    backlinks: 45,
    palabrasClaveTop10: 8,
    fechaActualizacion: new Date()
  },
  {
    competidor: 'Gran Hotel Loja',
    domain: 'granhotelloja.com',
    posicionPromedio: 30,
    trafficoEstimado: 650,
    backlinks: 32,
    palabrasClaveTop10: 5,
    fechaActualizacion: new Date()
  },
  {
    competidor: 'Hotel Podocarpus',
    domain: 'hotelpodocarpus.com',
    posicionPromedio: 22,
    trafficoEstimado: 1200,
    backlinks: 68,
    palabrasClaveTop10: 12,
    fechaActualizacion: new Date()
  }
];

// Checklist semanal de SEO
export const checklistSemanalSEO = {
  lunes: [
    'Revisar posiciones en Google Search Console',
    'Analizar tráfico orgánico de la semana anterior',
    'Verificar errores de rastreo nuevos',
    'Revisar comentarios en Google My Business'
  ],
  martes: [
    'Crear nuevo post para Google My Business',
    'Verificar velocidad de carga de páginas principales',
    'Revisar menciones de marca en redes sociales',
    'Actualizar fotos en GMB si es necesario'
  ],
  miercoles: [
    'Publicar nuevo contenido de blog (semanal/quincenal)',
    'Optimizar metadescripciones de páginas con CTR bajo',
    'Revisar y responder reseñas en línea',
    'Verificar enlaces internos en contenido nuevo'
  ],
  jueves: [
    'Monitorear backlinks nuevos en Ahrefs/SEMrush',
    'Enviar outreach emails para link building',
    'Actualizar información NAP en directorios',
    'Revisar competidores en SERPs objetivo'
  ],
  viernes: [
    'Generar reporte semanal de métricas',
    'Planificar contenido para la próxima semana',
    'Revisar y optimizar anuncios de Google Ads',
    'Backup de datos de analytics'
  ]
};

// Template de reporte mensual
export const templateReporteMensual = {
  resumenEjecutivo: {
    traficoOrganico: '% cambio vs mes anterior',
    posicionesObjetivo: 'Número de keywords en top 10',
    conversiones: 'Llamadas + WhatsApp desde orgánico',
    incrementoVisibilidad: '% cambio en impresiones'
  },
  metricas_detalladas: {
    searchConsole: {
      clics: 0,
      impresiones: 0,
      ctr: 0,
      posicionPromedio: 0
    },
    analytics: {
      sesionesOrganicas: 0,
      duracionSesion: 0,
      paginasPorSesion: 0,
      tasaRebote: 0
    },
    coreWebVitals: {
      lcp: 0,
      fid: 0,
      cls: 0,
      scoreMovil: 0
    }
  },
  progreso_objetivos: 'Array de KPIs con progreso',
  contenido_creado: 'Lista de blog posts y optimizaciones',
  linkBuilding: 'Nuevos backlinks obtenidos',
  competencia: 'Análisis de movimientos competidores',
  recomendaciones: 'Próximas acciones prioritarias'
};

// Sistema de alertas automáticas
export const sistemAlertas = {
  alertasCriticas: [
    'Caída de tráfico orgánico >20% semanal',
    'Pérdida de posición >10 spots en keywords principales',
    'Errores 404 >5 en páginas importantes',
    'Core Web Vitals score <75',
    'Pérdida de backlinks importantes'
  ],
  alertasAdvertencia: [
    'CTR <2% en keywords principales',
    'Tiempo de carga >3 segundos',
    'Tasa de rebote >70%',
    'Caída GMB views >15%'
  ],
  configuracionAlertas: {
    frecuencia: 'diaria',
    canales: ['email', 'slack', 'dashboard'],
    umbrales: 'configurables por métrica'
  }
};

// Herramientas de monitoreo recomendadas
export const herramientasMonitoreo = {
  gratuitas: [
    'Google Search Console - Rendimiento orgánico',
    'Google Analytics 4 - Comportamiento usuarios',
    'Google PageSpeed Insights - Core Web Vitals',
    'Google My Business Insights - Performance local'
  ],
  premium: [
    'Ahrefs - Backlinks y keywords',
    'SEMrush - Competidores y oportunidades',
    'Screaming Frog - Auditorías técnicas',
    'Hotjar - Mapas de calor y grabaciones'
  ],
  especializadas: [
    'BrightLocal - Local SEO tracking',
    'Rank Tracker - Posiciones diarias',
    'Majestic - Análisis autoridad dominio'
  ]
};

// Fórmulas de cálculo importantes
export const formulasKPI = {
  roiSEO: '(Conversiones * Valor promedio - Inversión SEO) / Inversión SEO * 100',
  costoAdquisicion: 'Inversión SEO mensual / Nuevos clientes orgánicos',
  valorTrafico: 'Tráfico orgánico * CTR * Tasa conversión * Valor promedio',
  competitividadKeyword: '(Volumen * CPC * Dificultad) / 100',
  healthScore: '(Posiciones + Tráfico + Velocidad + UX) / 4'
};

// Metas trimestrales 2025
export const metasTrimestrales = {
  Q1: {
    traficoOrganico: 1200,
    keywordsTop10: 8,
    backlinksNuevos: 25,
    contenidoCreado: 12,
    conversionRate: 3.5
  },
  Q2: {
    traficoOrganico: 2000,
    keywordsTop10: 15,
    backlinksNuevos: 35,
    contenidoCreado: 15,
    conversionRate: 4.2
  },
  Q3: {
    traficoOrganico: 2800,
    keywordsTop10: 22,
    backlinksNuevos: 40,
    contenidoCreado: 18,
    conversionRate: 5.0
  },
  Q4: {
    traficoOrganico: 3500,
    keywordsTop10: 30,
    backlinksNuevos: 50,
    contenidoCreado: 20,
    conversionRate: 6.0
  }
};

export default {
  objetivosSEO2025,
  palabrasClaveTracking,
  competidoresTracking,
  checklistSemanalSEO,
  sistemAlertas,
  herramientasMonitoreo,
  metasTrimestrales
};