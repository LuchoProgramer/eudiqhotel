// Datos centralizados para Google My Business y SEO Local
export const GMB_DATA = {
  // Información básica del hotel
  name: 'Eudiq Hotel Loja',
  description: 'Hotel en Loja cerca del Terminal Terrestre. Habitaciones confortables, desayuno incluido, WiFi gratis, estacionamiento. Ideal para graduaciones UTPL y turismo.',
  
  // Contacto (formato exacto para GMB)
  phone: '+593726141151',
  phoneFormatted: '+593 96 171 2106',
  email: 'info@hoteleudiq.com',
  website: 'https://www.hoteleudiq.com',
  
  // Dirección (exacta para NAP consistency)
  address: {
    street: 'Avenida 8 de diciembre y Juan José Flores',
    complement: 'diagonal a la Terminal Terrestre',
    city: 'Loja',
    state: 'Loja',
    postalCode: '110105',
    country: 'Ecuador',
    countryCode: 'EC',
    full: 'Avenida 8 de diciembre y Juan José Flores diagonal a la Terminal Terrestre, Loja 110105, Ecuador'
  },
  
  // Coordenadas GPS
  coordinates: {
    lat: -4.0039,
    lng: -79.2089
  },
  
  // Horarios (formato GMB)
  hours: {
    checkin: '12:00',
    checkout: '12:00',
    reception: '24 horas',
    cafe: 'Mo-Su 06:00-12:00'
  },
  
  // Servicios principales (para GMB attributes)
  services: [
    'WiFi gratuito',
    'Desayuno incluido',
    'Estacionamiento gratuito',
    'Recepción 24 horas',
    'Servicio a la habitación',
    'Almacenamiento de equipaje',
    'Servicio de taxi',
    'Información turística',
    'Café especializado'
  ],
  
  // Amenidades para Schema.org
  amenities: [
    {
      '@type': 'LocationFeatureSpecification',
      'name': 'Free WiFi',
      'value': true
    },
    {
      '@type': 'LocationFeatureSpecification', 
      'name': 'Breakfast',
      'value': true
    },
    {
      '@type': 'LocationFeatureSpecification',
      'name': 'Free Parking',
      'value': true
    },
    {
      '@type': 'LocationFeatureSpecification',
      'name': 'Coffee Shop',
      'value': true
    },
    {
      '@type': 'LocationFeatureSpecification',
      'name': '24-hour Reception',
      'value': true
    }
  ],
  
  // Keywords principales para GMB posts
  keywords: [
    'hotel loja',
    'hotel terminal terrestre loja',
    'hospedaje loja ecuador',
    'graduacion utpl',
    'hotel economico loja',
    'desayuno incluido',
    'wifi gratis',
    'estacionamiento gratuito',
    'cafeteria viviates',
    'turismo loja'
  ],
  
  // Eventos/Temporadas para GMB posts
  events: [
    {
      name: 'Graduaciones UTPL',
      months: ['marzo', 'julio', 'noviembre'],
      description: 'Hospedaje ideal para familias en graduaciones UTPL'
    },
    {
      name: 'Caminata del Cisne',
      months: ['agosto', 'septiembre'],
      description: 'Punto de partida para peregrinos del Cisne'
    },
    {
      name: 'Festival de las Artes',
      months: ['noviembre'],
      description: 'Ubicación perfecta para disfrutar el festival'
    }
  ],
  
  // Datos para rich snippets
  rating: {
    value: '4.2',
    count: '218',
    bestRating: '5',
    worstRating: '1'
  },
  
  // Precios aproximados (para Schema)
  priceRange: '$$',
  
  // Categorías GMB
  categories: [
    'Hotel',
    'Alojamiento',
    'Hospedaje',
    'Cafetería'
  ],
  
  // Social media
  social: {
    facebook: 'https://facebook.com/eudiqhotel',
    instagram: 'https://instagram.com/eudiqhotel',
    whatsapp: 'https://api.whatsapp.com/send?phone=593961712106'
  }
};

// Posts sugeridos para GMB (actualizaciones semanales)
export const GMB_POSTS_SUGGESTIONS = [
  {
    type: 'offer',
    title: 'Desayuno Incluido Gratis',
    description: 'Todas nuestras habitaciones incluyen desayuno. ¡Reserva ahora!',
    cta: 'Reservar por WhatsApp'
  },
  {
    type: 'event',
    title: 'Graduaciones UTPL 2025',
    description: 'Hotel ideal para familias. A 5 minutos del campus UTPL. Reservas anticipadas disponibles.',
    cta: 'Información'
  },
  {
    type: 'update',
    title: 'WiFi de Alta Velocidad',
    description: 'Internet gratuito en todas las habitaciones y áreas comunes. Perfecto para trabajo y estudios.',
    cta: 'Más información'
  },
  {
    type: 'offer',
    title: 'Estacionamiento Gratuito',
    description: 'Tu vehículo seguro mientras disfrutas tu estadía. Sin costo adicional.',
    cta: 'Ver habitaciones'
  }
];

export default GMB_DATA;