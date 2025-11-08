/**
 * Estrategia completa de Link Building para Eudiq Hotel
 * Plan estructurado para construir autoridad de dominio
 */

interface LinkOpportunity {
  id: string;
  website: string;
  domain: string;
  da: number; // Domain Authority
  tipo: 'directorio' | 'blog' | 'periodico' | 'turismo' | 'local' | 'educativo' | 'gobierno';
  dificultad: 'facil' | 'media' | 'dificil';
  metodo: 'envio-directo' | 'guest-post' | 'mencion' | 'intercambio' | 'pago';
  costo: 'gratis' | 'bajo' | 'medio' | 'alto';
  status: 'pendiente' | 'contactado' | 'aprobado' | 'rechazado' | 'activo';
  prioridad: number; // 1-10
  fechaContacto?: Date;
  fechaAprobacion?: Date;
  urlObjetivo: string;
  textoAncla: string;
  notas: string;
}

interface CampanaLinkBuilding {
  fase: string;
  duracion: string;
  objetivos: string[];
  metricas: {
    linksObjetivo: number;
    daPromedio: number;
    linksDofollow: number;
    diversidadDominios: number;
  };
  opportunities: LinkOpportunity[];
}

export const estrategiaLinkBuilding2025: CampanaLinkBuilding[] = [
  {
    fase: 'Fase 1: Fundaciones Locales y Directorios',
    duracion: 'Semanas 1-2',
    objetivos: [
      'Establecer presencia en directorios locales',
      'Crear menciones NAP consistentes',
      'Links de alta calidad y fácil obtención'
    ],
    metricas: {
      linksObjetivo: 25,
      daPromedio: 35,
      linksDofollow: 20,
      diversidadDominios: 25
    },
    opportunities: [
      {
        id: 'DIR001',
        website: 'Google My Business',
        domain: 'google.com',
        da: 100,
        tipo: 'directorio',
        dificultad: 'facil',
        metodo: 'envio-directo',
        costo: 'gratis',
        status: 'activo',
        prioridad: 10,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'Eudiq Hotel Loja',
        notas: 'Ya optimizado con fotos y posts regulares'
      },
      {
        id: 'DIR002',
        website: 'TripAdvisor',
        domain: 'tripadvisor.com',
        da: 93,
        tipo: 'turismo',
        dificultad: 'facil',
        metodo: 'envio-directo',
        costo: 'gratis',
        status: 'pendiente',
        prioridad: 9,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'Hotel cerca Terminal Terrestre Loja',
        notas: 'Crear perfil completo con fotos y reviews'
      },
      {
        id: 'DIR003',
        website: 'Booking.com',
        domain: 'booking.com',
        da: 91,
        tipo: 'turismo',
        dificultad: 'media',
        metodo: 'envio-directo',
        costo: 'medio',
        status: 'pendiente',
        prioridad: 9,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'Eudiq Hotel Terminal Terrestre',
        notas: 'Requiere comisiones pero alto tráfico'
      },
      {
        id: 'DIR004',
        website: 'Directorio Turístico Ecuador',
        domain: 'ecuador.travel',
        da: 65,
        tipo: 'gobierno',
        dificultad: 'facil',
        metodo: 'envio-directo',
        costo: 'gratis',
        status: 'pendiente',
        prioridad: 8,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'Hotel Loja Terminal Terrestre',
        notas: 'Sitio oficial de turismo del Ecuador'
      },
      {
        id: 'LOC001',
        website: 'Cámara de Turismo Loja',
        domain: 'camaraturismoloja.com',
        da: 25,
        tipo: 'local',
        dificultad: 'facil',
        metodo: 'mencion',
        costo: 'gratis',
        status: 'pendiente',
        prioridad: 7,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'Eudiq Hotel',
        notas: 'Asociarse como miembro activo'
      },
      {
        id: 'LOC002',
        website: 'Municipio de Loja',
        domain: 'loja.gob.ec',
        da: 45,
        tipo: 'gobierno',
        dificultad: 'media',
        metodo: 'mencion',
        costo: 'gratis',
        status: 'pendiente',
        prioridad: 8,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'Hotel Terminal Terrestre Loja',
        notas: 'Aparecer en directorio de servicios turísticos'
      }
    ]
  },
  {
    fase: 'Fase 2: Medios Locales y Contenido Editorial',
    duracion: 'Semanas 3-6',
    objetivos: [
      'Obtener cobertura en medios locales',
      'Crear contenido editorial valioso',
      'Establecer Eudiq como autoridad local'
    ],
    metricas: {
      linksObjetivo: 15,
      daPromedio: 50,
      linksDofollow: 12,
      diversidadDominios: 15
    },
    opportunities: [
      {
        id: 'MED001',
        website: 'La Hora Loja',
        domain: 'lahora.com.ec',
        da: 67,
        tipo: 'periodico',
        dificultad: 'media',
        metodo: 'guest-post',
        costo: 'bajo',
        status: 'pendiente',
        prioridad: 9,
        urlObjetivo: 'https://hoteleudiq.com/blog/festival-artes-loja-2025',
        textoAncla: 'hospedaje Festival de las Artes Loja',
        notas: 'Artículo sobre turismo durante Festival de las Artes'
      },
      {
        id: 'MED002',
        website: 'Crónica de Loja',
        domain: 'cronica.com.ec',
        da: 45,
        tipo: 'periodico',
        dificultad: 'media',
        metodo: 'guest-post',
        costo: 'bajo',
        status: 'pendiente',
        prioridad: 7,
        urlObjetivo: 'https://hoteleudiq.com/blog/graduaciones-utpl-donde-hospedarse',
        textoAncla: 'hotel para graduaciones UTPL',
        notas: 'Artículo sobre servicios para familias de graduados'
      },
      {
        id: 'BLOG001',
        website: 'Ecuador Travel Blog',
        domain: 'ecuadortravel.blog',
        da: 35,
        tipo: 'blog',
        dificultad: 'media',
        metodo: 'guest-post',
        costo: 'bajo',
        status: 'pendiente',
        prioridad: 6,
        urlObjetivo: 'https://hoteleudiq.com/cafe-viviates',
        textoAncla: 'mejor café de Loja',
        notas: 'Post sobre ruta del café en el sur de Ecuador'
      },
      {
        id: 'EDU001',
        website: 'UTPL Noticias',
        domain: 'utpl.edu.ec',
        da: 71,
        tipo: 'educativo',
        dificultad: 'dificil',
        metodo: 'mencion',
        costo: 'gratis',
        status: 'pendiente',
        prioridad: 10,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'alojamiento recomendado graduaciones',
        notas: 'Aparecer en directorio de servicios recomendados para graduaciones'
      }
    ]
  },
  {
    fase: 'Fase 3: Turismo Nacional y Blogs de Viajes',
    duracion: 'Semanas 7-10',
    objetivos: [
      'Captar audiencia nacional de turismo',
      'Links desde blogs de viajes establecidos',
      'Menciones en guías de Ecuador'
    ],
    metricas: {
      linksObjetivo: 20,
      daPromedio: 45,
      linksDofollow: 15,
      diversidadDominios: 20
    },
    opportunities: [
      {
        id: 'TUR001',
        website: 'All You Need Is Ecuador',
        domain: 'allyouneedisecuador.com',
        da: 55,
        tipo: 'turismo',
        dificultad: 'media',
        metodo: 'guest-post',
        costo: 'medio',
        status: 'pendiente',
        prioridad: 8,
        urlObjetivo: 'https://hoteleudiq.com/blog/que-hacer-en-loja-guia-turistica-2025',
        textoAncla: 'dónde hospedarse en Loja Ecuador',
        notas: 'Guía completa de Loja con mención destacada de ubicación'
      },
      {
        id: 'TUR002',
        website: 'Ecuador Infinito',
        domain: 'ecuadorinfinito.com',
        da: 42,
        tipo: 'blog',
        dificultad: 'media',
        metodo: 'intercambio',
        costo: 'gratis',
        status: 'pendiente',
        prioridad: 6,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'hotel Terminal Terrestre Loja',
        notas: 'Intercambio de menciones con otros hoteles boutique'
      },
      {
        id: 'TUR003',
        website: 'Viajandox Ecuador',
        domain: 'viajandox.com',
        da: 48,
        tipo: 'turismo',
        dificultad: 'facil',
        metodo: 'envio-directo',
        costo: 'gratis',
        status: 'pendiente',
        prioridad: 7,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'Eudiq Hotel Loja',
        notas: 'Directorio consolidado de turismo Ecuador'
      }
    ]
  },
  {
    fase: 'Fase 4: Link Building Avanzado y Relaciones Públicas',
    duracion: 'Semanas 11-12',
    objetivos: [
      'Links de alta autoridad',
      'Menciones en medios nacionales',
      'Partnerships estratégicos'
    ],
    metricas: {
      linksObjetivo: 10,
      daPromedio: 70,
      linksDofollow: 8,
      diversidadDominios: 10
    },
    opportunities: [
      {
        id: 'NAC001',
        website: 'El Universo',
        domain: 'eluniverso.com',
        da: 78,
        tipo: 'periodico',
        dificultad: 'dificil',
        metodo: 'guest-post',
        costo: 'alto',
        status: 'pendiente',
        prioridad: 10,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'turismo sostenible Loja',
        notas: 'Artículo sobre turismo sostenible en el sur de Ecuador'
      },
      {
        id: 'GOV001',
        website: 'Ministerio de Turismo Ecuador',
        domain: 'turismo.gob.ec',
        da: 72,
        tipo: 'gobierno',
        dificultad: 'dificil',
        metodo: 'mencion',
        costo: 'gratis',
        status: 'pendiente',
        prioridad: 9,
        urlObjetivo: 'https://hoteleudiq.com',
        textoAncla: 'alojamiento certificado Loja',
        notas: 'Certificación Q de calidad turística'
      }
    ]
  }
];

// Templates de outreach
export const templatesOutreach = {
  mediosLocales: {
    asunto: 'Historia local: El café que está transformando Loja',
    cuerpo: `
Estimados,

Soy [Nombre] de Eudiq Hotel, ubicado diagonal al Terminal Terrestre de Loja.

Nos hemos convertido en un punto de referencia para visitantes que llegan a nuestra ciudad, especialmente durante las graduaciones de UTPL y el Festival de las Artes. 

Me gustaría compartir la historia de cómo nuestro Café Viviates está revitalizando la cultura cafetera lojana, sirviendo café de altura de productores locales.

¿Estarían interesados en una historia sobre turismo gastronómico local?

Saludos,
[Firma]
    `
  },

  blogsViaje: {
    asunto: 'Guest Post: Guía completa de Loja desde la perspectiva local',
    cuerpo: `
Hola [Nombre],

Admiro mucho el contenido que publican sobre destinos únicos en Ecuador.

Como propietarios de Eudiq Hotel en Loja, hemos sido testigos de cómo la ciudad ha evolucionado como destino turístico. Tenemos una perspectiva única sobre:

- Los mejores lugares para hospedarse según diferentes tipos de viaje
- Rutas gastronómicas incluyendo café de especialidad
- Eventos culturales como el Festival de las Artes
- Acceso a Parque Nacional Podocarpus

¿Les interesaría un guest post con información insider sobre Loja?

Saludos,
[Firma]
    `
  },

  directoriosTurismo: {
    asunto: 'Inclusión en directorio - Eudiq Hotel Loja',
    cuerpo: `
Estimados,

Representamos a Eudiq Hotel, ubicado estratégicamente diagonal al Terminal Terrestre de Loja, Ecuador.

Nos especializamos en brindar hospedaje a:
- Familias durante graduaciones UTPL
- Turistas que exploran el sur de Ecuador
- Visitantes del Festival de las Artes

Información de contacto:
- Dirección: [Dirección completa]
- Teléfono: [Teléfono]
- Web: https://hoteleudiq.com

¿Podrían incluirnos en su directorio?

Saludos,
[Firma]
    `
  }
};

// Métricas de seguimiento
export interface MetricasLinkBuilding {
  totalLinks: number;
  linksDofollow: number;
  linksNofollow: number;
  daPromedio: number;
  diversidadDominios: number;
  traficoReferido: number;
  posicionesPromedio: number;
  fechaMedicion: Date;
}

// Herramientas recomendadas
export const herramientasRecomendadas = {
  analisis: [
    'Ahrefs - Análisis de backlinks competencia',
    'SEMrush - Oportunidades de link building',
    'Moz Link Explorer - Métricas DA/PA'
  ],
  outreach: [
    'Hunter.io - Encontrar emails de contacto',
    'BuzzSumo - Identificar influencers locales',
    'Pitchbox - Gestión de campañas outreach'
  ],
  monitoring: [
    'Google Search Console - Links detectados',
    'Ahrefs Alerts - Nuevas menciones',
    'Brand24 - Monitoreo de marca'
  ]
};

// Cronograma semanal
export const cronogramaSemanal = {
  lunes: 'Investigación de nuevas oportunidades',
  martes: 'Creación de contenido para guest posts',
  miercoles: 'Envío de emails de outreach',
  jueves: 'Seguimiento a contactos previos',
  viernes: 'Análisis de métricas y ajustes',
  sabado: 'Creación de contenido social',
  domingo: 'Planificación semana siguiente'
};

export default estrategiaLinkBuilding2025;