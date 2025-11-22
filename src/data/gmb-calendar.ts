/**
 * Sistema automatizado de contenido para Google My Business
 * Calendario de publicaciones estratégicas para Eudiq Hotel
 */

interface GMBPost {
  id: string;
  title: string;
  content: string;
  type: 'evento' | 'oferta' | 'producto' | 'actualización';
  cta: string;
  ctaUrl?: string;
  hashtags: string[];
  image?: string;
  fechaPublicacion: Date;
  prioridad: 'alta' | 'media' | 'baja';
}

interface CalendarioMensual {
  mes: string;
  año: number;
  tema: string;
  publicaciones: GMBPost[];
  objetivos: string[];
}

export const calendarioGMB2025: CalendarioMensual[] = [
  {
    mes: 'enero',
    año: 2025,
    tema: 'Nuevo Año, Nuevas Experiencias',
    objetivos: [
      'Capturar turismo de año nuevo',
      'Promocionar café de especialidad', 
      'Destacar ubicación estratégica'
    ],
    publicaciones: [
      {
        id: 'enero-01',
        title: 'Bienvenido 2025 en Eudiq Hotel',
        content: '🎉 Empezamos el 2025 con la mejor ubicación de Loja. A solo pasos del Terminal Terrestre y frente al Parque Jipiro. ¡Tu estadía perfecta comienza aquí!',
        type: 'actualización',
        cta: 'Reservar ahora',
        ctaUrl: 'https://api.whatsapp.com/send?phone=593999999999',
        hashtags: ['#EudiqHotel', '#Loja2025', '#TerminalTerrestre', '#PerfectaUbicacion'],
        fechaPublicacion: new Date('2025-01-02T08:00:00'),
        prioridad: 'media'
      },
      {
        id: 'enero-02',
        title: 'Cafetería Viviates: Despierta tus sentidos',
        content: '☕ Descubre el mejor café de especialidad de Loja en nuestra Cafetería Viviates. Granos de altura, tostado artesanal y la vista perfecta al Parque Jipiro. ¡Ven y prueba la diferencia!',
        type: 'producto',
        cta: 'Ver menú',
        hashtags: ['#CafeViviates', '#CafeEspecialidad', '#LojaEcuador', '#MejorCafe'],
        image: 'https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_800/v1760204433/cafe-viviates.jpg',
        fechaPublicacion: new Date('2025-01-08T09:30:00'),
        prioridad: 'alta'
      },
      {
        id: 'enero-03',
        title: 'Ubicación estratégica incomparable',
        content: '📍 ¿Sabías que estamos diagonal al Terminal Terrestre? Llegar a Eudiq Hotel es súper fácil desde cualquier ciudad. Además, el Parque Jipiro está a solo 200 metros. ¡Ubicación perfecta!',
        type: 'actualización',
        cta: 'Ver ubicación',
        hashtags: ['#UbicacionPerfecta', '#TerminalTerrestreLoja', '#ParqueJipiro', '#FacilAcceso'],
        fechaPublicacion: new Date('2025-01-15T11:00:00'),
        prioridad: 'alta'
      }
    ]
  },
  {
    mes: 'febrero',
    año: 2025,
    tema: 'San Valentín y Experiencias Románticas',
    objetivos: [
      'Capturar turismo romántico',
      'Promocionar café para parejas',
      'Destacar ambiente acogedor'
    ],
    publicaciones: [
      {
        id: 'febrero-01',
        title: 'San Valentín en Cafetería Viviates',
        content: '💕 Este 14 de febrero, sorprende a tu pareja con una cita especial en Cafetería Viviates. Ambiente romántico, el mejor café de Loja y vista al Parque Jipiro. ¡Reserva tu mesa!',
        type: 'evento',
        cta: 'Reservar mesa',
        ctaUrl: 'https://api.whatsapp.com/send?phone=593999999999',
        hashtags: ['#SanValentin', '#CitaRomantica', '#CafeViviates', '#LojaTurismo'],
        fechaPublicacion: new Date('2025-02-01T10:00:00'),
        prioridad: 'alta'
      },
      {
        id: 'febrero-02',
        title: 'Habitaciones cómodas para parejas',
        content: '🛏️ Nuestras habitaciones ofrecen el confort perfecto para tu estadía romántica. Ubicación céntrica, ambiente tranquilo y servicios de calidad. ¡Tu escapada perfecta en Loja!',
        type: 'producto',
        cta: 'Ver habitaciones',
        hashtags: ['#HabitacionesEudiq', '#EscapadaRomantica', '#ConfortTotal', '#HotelLoja'],
        fechaPublicacion: new Date('2025-02-10T15:00:00'),
        prioridad: 'media'
      },
      {
        id: 'febrero-03',
        title: 'A pasos del Parque Jipiro',
        content: '🌳 ¿Plan romántico? El Parque Jipiro está a solo 200 metros. Caminen por sus senderos, disfruten la laguna y las réplicas de monumentos mundiales. ¡Hospédense cerca de la diversión!',
        type: 'actualización',
        cta: 'Conocer más',
        hashtags: ['#ParqueJipiro', '#PaseoRomantico', '#CercaDelParque', '#LojaEcuador'],
        fechaPublicacion: new Date('2025-02-20T12:00:00'),
        prioridad: 'media'
      }
    ]
  },
  {
    mes: 'marzo',
    año: 2025,
    tema: 'Temporada de Graduaciones UTPL',
    objetivos: [
      'Capturar familias de graduados',
      'Promocionar ubicación para eventos familiares',
      'Destacar servicios para grupos'
    ],
    publicaciones: [
      {
        id: 'marzo-01',
        title: 'Graduaciones UTPL - Hospedaje familiar',
        content: '🎓 ¡Temporada de graduaciones! Familias de todo Ecuador nos eligen por nuestra ubicación estratégica y servicio personalizado. Fácil acceso desde el Terminal y cerca de todos los servicios.',
        type: 'evento',
        cta: 'Reservar para familia',
        ctaUrl: 'https://api.whatsapp.com/send?phone=593999999999',
        hashtags: ['#GraduacionesUTPL', '#HospedajeFamiliar', '#Loja2025', '#EudiqHotel'],
        fechaPublicacion: new Date('2025-03-01T08:00:00'),
        prioridad: 'alta'
      },
      {
        id: 'marzo-02',
        title: 'Celebra el logro con el mejor café',
        content: '☕ Después de la graduación, celebren en Cafetería Viviates. El lugar perfecto para brindar por el éxito de su graduado. ¡Café excepcional para momentos especiales!',
        type: 'producto',
        cta: 'Ver menú especial',
        hashtags: ['#CelebracionGraduacion', '#CafeViviates', '#MomentoEspecial', '#FamiliaReunida'],
        fechaPublicacion: new Date('2025-03-10T11:00:00'),
        prioridad: 'alta'
      },
      {
        id: 'marzo-03',
        title: 'Transporte fácil para toda la familia',
        content: '🚌 Lleguen directo del Terminal Terrestre. Estamos diagonal, súper fácil de encontrar. Sin complicaciones de transporte para las familias que vienen de fuera. ¡Comodidad garantizada!',
        type: 'actualización',
        cta: 'Ver cómo llegar',
        hashtags: ['#FacilAcceso', '#TerminalTerrestre', '#TransporteFamiliar', '#SinComplicaciones'],
        fechaPublicacion: new Date('2025-03-20T14:00:00'),
        prioridad: 'media'
      }
    ]
  },
  {
    mes: 'abril',
    año: 2025,
    tema: 'Turismo Nacional - Feriados de Abril',
    objetivos: [
      'Capturar turismo nacional',
      'Promocionar atractivos cercanos',
      'Destacar como base para explorar Loja'
    ],
    publicaciones: [
      {
        id: 'abril-01',
        title: 'Feriados de abril en Loja',
        content: '🌄 Aprovecha los feriados para conocer Loja. Eudiq Hotel es tu base perfecta: cerca del centro histórico, Parque Nacional Podocarpus y todos los atractivos. ¡Reserva ya!',
        type: 'oferta',
        cta: 'Reservar feriado',
        ctaUrl: 'https://api.whatsapp.com/send?phone=593999999999',
        hashtags: ['#FeriadosAbril', '#TurismoLoja', '#BaseExploracion', '#LojaEcuador'],
        fechaPublicacion: new Date('2025-04-01T09:00:00'),
        prioridad: 'alta'
      },
      {
        id: 'abril-02',
        title: 'A minutos del Parque Nacional Podocarpus',
        content: '🦋 Desde Eudiq Hotel puedes llegar al Parque Nacional Podocarpus en solo 25 minutos. Biodiversidad única, senderos increíbles y naturaleza pura. ¡Tu aventura comienza aquí!',
        type: 'actualización',
        cta: 'Planificar excursión',
        hashtags: ['#PodocarpusNacional', '#Naturaleza', '#Biodiversidad', '#AventuraLoja'],
        fechaPublicacion: new Date('2025-04-10T07:30:00'),
        prioridad: 'media'
      },
      {
        id: 'abril-03',
        title: 'Centro histórico de Loja',
        content: '🏛️ El centro histórico está súper cerca. Arquitectura colonial, museos, la Catedral y mucho más. Hospédate en Eudiq y explora la historia lojana fácilmente.',
        type: 'actualización',
        cta: 'Conocer atractivos',
        hashtags: ['#CentroHistorico', '#ArquitecturaColonial', '#CulturaLoja', '#PatrimonioEcuador'],
        fechaPublicacion: new Date('2025-04-20T13:00:00'),
        prioridad: 'media'
      }
    ]
  }
];

// Templates para diferentes tipos de posts
export const templatesGMB = {
  bienvenida: {
    estructura: '🏨 [Saludo] [Beneficio principal] [Ubicación] [CTA]',
    ejemplo: '🏨 ¡Bienvenidos a Eudiq Hotel! La mejor ubicación de Loja diagonal al Terminal Terrestre. ¡Reserva ya!'
  },
  
  cafe: {
    estructura: '☕ [Descripción del café] [Ambiente/Vista] [Diferenciador] [CTA]',
    ejemplo: '☕ Café de altura en Cafetería Viviates. Tostado artesanal con vista al Parque Jipiro. ¡Ven y prueba!'
  },
  
  ubicacion: {
    estructura: '📍 [Beneficio ubicación] [Distancias] [Facilidades] [CTA]',
    ejemplo: '📍 Diagonal al Terminal Terrestre, a 200m del Parque Jipiro. Fácil acceso desde cualquier ciudad.'
  },
  
  evento: {
    estructura: '🎉 [Evento/Fecha] [Cómo participamos] [Beneficio huésped] [CTA]',
    ejemplo: '🎉 Festival de las Artes 2025. Hospédate en Eudiq y vive la cultura lojana de cerca.'
  }
};

// Métricas para tracking
export interface MetricasGMB {
  vistas: number;
  clics: number;
  llamadas: number;
  solicitudesUbicacion: number;
  visitasWeb: number;
  interacciones: number;
  fechaMedicion: Date;
}

// KPIs objetivo mensuales
export const objetivosGMB2025 = {
  enero: {
    vistas: 2500,
    clics: 150,
    llamadas: 45,
    solicitudesUbicacion: 200,
    visitasWeb: 300
  },
  febrero: {
    vistas: 2800,
    clics: 170,
    llamadas: 55,
    solicitudesUbicacion: 230,
    visitasWeb: 350
  },
  marzo: {
    vistas: 4000,
    clics: 250,
    llamadas: 85,
    solicitudesUbicacion: 350,
    visitasWeb: 500
  },
  abril: {
    vistas: 3500,
    clics: 200,
    llamadas: 70,
    solicitudesUbicacion: 300,
    visitasWeb: 400
  }
};

// Horarios optimizados para publicar
export const horariosOptimos = {
  lunes: ['08:00', '12:00', '17:00'],
  martes: ['09:00', '13:00', '18:00'],
  miercoles: ['08:30', '12:30', '17:30'],
  jueves: ['09:00', '13:00', '18:00'],
  viernes: ['08:00', '12:00', '16:00'],
  sabado: ['10:00', '14:00', '19:00'],
  domingo: ['09:00', '13:00', '17:00']
};

// Hashtags estratégicos por categoría
export const hashtagsEstrategicos = {
  ubicacion: ['#TerminalTerrestreLoja', '#ParqueJipiro', '#CentroLoja', '#UbicacionPerfecta'],
  servicios: ['#CafeViviates', '#HabitacionesComfortables', '#ServicioPersonalizado', '#WifiGratis'],
  eventos: ['#GraduacionesUTPL', '#FestivalArtes', '#EventosLoja', '#TurismoEventos'],
  turismo: ['#LojaEcuador', '#TurismoLoja', '#HotelLoja', '#SurEcuador'],
  experiencia: ['#ExperienciaUnica', '#HospitalidadLojana', '#CalidadServicio', '#AtencionPersonalizada']
};