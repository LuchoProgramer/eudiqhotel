/**
 * Configuración centralizada del Hotel Eudiq
 * Todos los datos de contacto, precios y configuraciones
 * Actualizado: 21 de noviembre 2025
 */

export const HOTEL_CONFIG = {
  // Información de contacto
  contact: {
    phone: '+593961712106',
    phoneFormatted: '+593 96 171 2106',
    email: 'eudiqhotel@gmail.com',
    address: 'Avenida 8 de diciembre y Juan José Flores diagonal a la Terminal Terrestre',
    city: 'Loja',
    country: 'Ecuador',
    whatsappNumber: '593961712106',
    whatsappMessage: 'Hola, quiero información sobre Eudiq Hotel'
  },

  // Redes sociales
  social: {
    instagram: 'hoteleudiq',
    instagramUrl: 'https://www.instagram.com/hoteleudiq',
    facebook: 'hoteleudiq',
    facebookUrl: 'https://www.facebook.com/hoteleudiq'
  },

  // Ubicación
  location: {
    lat: -3.9756875,
    lng: -79.2044375,
    googleMapsUrl: 'https://maps.app.goo.gl/5dCMqMs8TNnuUAXU7',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.2170636793585!2d-79.2044375!3d-3.9756875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb4874ecd19be9%3A0xed2fb9939f45f4db!2sEUDIQ%20HOTEL!5e0!3m2!1sen!2sec!4v1760161127420!5m2!1sen!2sec'
  },

  // Horarios
  schedule: {
    reception: '24/7',
    checkIn: '13:00',
    checkOut: '00:00',
    breakfast: {
      start: '07:00',
      end: '09:00',
      included: true
    },
    cafeteria: {
      days: 'Lunes a Sábado',
      morning: {
        start: '07:00',
        end: '11:00'
      },
      afternoon: {
        start: '16:00',
        end: '21:00'
      },
      closed: 'Domingo'
    }
  },

  // Precios de habitaciones (en USD)
  prices: {
    individual: 25,
    matrimonial: 45,
    doble: 45,
    triple: 55,
    cuadruple: 20, // por persona
    familiar: 20 // por persona
  },

  // Políticas
  policies: {
    cancellation: {
      free: 48, // horas antes
      description: 'Cancelación gratuita hasta 48 horas antes del check-in'
    },
    parking: {
      included: true,
      description: 'Estacionamiento incluido para huéspedes'
    },
    pets: false,
    smoking: false
  },

  // Distancias y tiempos
  distances: {
    terminalTerrestre: {
      walking: '3 minutos',
      distance: '250 m'
    },
    utpl: {
      taxi: '5 minutos',
      distance: '3 km',
      hasPromotion: true
    },
    parqueJipiro: {
      walking: '4 minutos',
      distance: '300 m'
    },
    puertaCiudad: {
      taxi: '5 minutos',
      distance: '3 km'
    },
    aeropuerto: {
      taxi: '40 minutos',
      distance: '35 km'
    }
  },

  // Amenidades disponibles (correctas)
  amenities: {
    available: [
      'WiFi gratis',
      'TV Cable',
      'Baño privado',
      'Agua caliente',
      'Desayuno incluido',
      'Estacionamiento gratuito',
      'Recepción 24/7',
      'Servicio de limpieza',
      'Servicio a la habitación',
      'Cafetería'
    ],
    notAvailable: [
      'Aire acondicionado',
      'Juegos para niños',
      'Sala amplia',
      'Cocina pequeña',
      'Vista a la ciudad',
      'Caja fuerte',
      'Servicio de seguridad'
    ]
  },

  // Nombre de la cafetería (CORREGIDO)
  cafeteria: {
    name: 'Cafetería Viviates',
    oldName: 'Cafetería Viviates' // Para referencia de lo que hay que cambiar
  }
};

export default HOTEL_CONFIG;
