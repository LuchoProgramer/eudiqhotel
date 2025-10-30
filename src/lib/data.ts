// src/lib/data.ts

export const testimonios = [
  {
    nombre: 'María González',
    ubicacion: 'Quito, Ecuador',
    comentario: 'Excelente hotel en el centro de Loja. Las habitaciones son muy cómodas y limpias. El desayuno es delicioso, especialmente el café Viviates que tienen. El personal es muy amable y atento. Definitivamente volveré.',
    calificacion: 5,
    fecha: '2023-08-15',
  },
  {
    nombre: 'Carlos Pérez',
    ubicacion: 'Cuenca, Ecuador',
    comentario: 'La ubicación es perfecta, cerca de la terminal terrestre. El Wi-Fi es rápido y el desayuno variado. Muy recomendado para viajes de trabajo o familia.',
    calificacion: 4,
    fecha: '2023-07-10',
  },
  {
    nombre: 'Ana Torres',
    ubicacion: 'Guayaquil, Ecuador',
    comentario: 'Me encantó la atención personalizada y la limpieza. El café de especialidad es un plus. Volveré pronto.',
    calificacion: 5,
    fecha: '2023-06-22',
  },
  {
    nombre: 'Luis Martínez',
    ubicacion: 'Lima, Perú',
    comentario: 'Hotel impecable en todos los aspectos. Limpieza excelente, atención de primera, y el desayuno buffet es espectacular. La ubicación es perfecta para conocer Loja. Sin duda el mejor hotel de la ciudad.',
    calificacion: 5,
    fecha: '2023-05-30',
  },
  {
    nombre: 'Sofía Herrera',
    ubicacion: 'Machala, Ecuador',
    comentario: 'Habitaciones modernas, camas cómodas y excelente relación calidad-precio. El personal siempre dispuesto a ayudar.',
    calificacion: 4,
    fecha: '2023-04-18',
  },
  {
    nombre: 'Jorge Ramírez',
    ubicacion: 'Loja, Ecuador',
    comentario: 'El mejor hotel de Loja. El desayuno y el café son de primera. Muy recomendado.',
    calificacion: 5,
    fecha: '2023-03-12',
  },

];

export const galeriaCafeViviates = [
  {
    url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847748/WhatsApp_Image_2025-10-29_at_19.40.30_1_qshs8i.jpg',
    alt: 'Café Viviates - barra y ambiente moderno',
  },
  {
    url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847734/WhatsApp_Image_2025-10-29_at_19.40.30_2_vyyw9k.jpg',
    alt: 'Café Viviates - vista de la cafetería',
  },
  {
    url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847761/WhatsApp_Image_2025-10-29_at_19.40.29_1_hywgib.jpg',
    alt: 'Café Viviates - café y postres',
  },
  {
    url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847772/WhatsApp_Image_2025-10-29_at_19.40.28_2_vo2mtv.jpg',
    alt: 'Café Viviates - decoración y detalles',
  },
  {
    url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847772/WhatsApp_Image_2025-10-29_at_19.40.28_2_vo2mtv.jpg',
    alt: 'Café Viviates - decoración y detalles',
  },
  {
    url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847767/WhatsApp_Image_2025-10-29_at_19.40.29_dadbdl.jpg',
    alt: 'Café Viviates - café servido',
  },
  {
    url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847783/WhatsApp_Image_2025-10-29_at_19.40.28_hf3ysb.jpg',
    alt: 'Café Viviates - barra y mesas',
  },
  {
    url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761847778/WhatsApp_Image_2025-10-29_at_19.40.28_1_c3j7xm.jpg',
    alt: 'Café Viviates - ambiente general',
  },
];

export const habitaciones = [
  {
    id: 1,
    nombre: 'Individual',
    categoria: 'CONFORT',
    descripcion: 'Perfecta para viajeros solitarios que buscan comodidad y funcionalidad en un espacio acogedor. Incluye desayuno.',
    precio: 25,
    capacidad: '1 persona',
    cama: '1 cama individual',
    tamaño: '18 m²',
    imagenes: [
      {
        url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1760204466/IMG_4616_xg9lrj.jpg',
        alt: 'Habitación Individual en Eudiq Hotel Loja, cama individual, ambiente moderno y acogedor',
      },
    ],
    amenidades: ['Wi-Fi gratis', 'TV cable', 'Baño privado', 'Escritorio', 'Caja fuerte', 'Desayuno incluido'],
  },
  {
    id: 2,
    nombre: 'Matrimonial',
    categoria: 'POPULAR',
    descripcion: 'Espacio elegante para parejas. Incluye desayuno.',
    precio: 41,
    capacidad: '2 personas',
    cama: '1 cama matrimonial',
    tamaño: '25 m²',
    imagenes: [
      {
        url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761843578/Imagen_de_WhatsApp_2025-10-29_a_las_19.43.21_82a0d440_qmyzam.jpg',
        alt: 'Habitación Matrimonial en Eudiq Hotel Loja, cama matrimonial, decoración elegante',
      },
    ],
  amenidades: ['Wi-Fi gratis', 'TV Smart', 'Baño privado', 'Aire acondicionado', 'Vista a la ciudad', 'Desayuno incluido'],
  },
  {
    id: 3,
    nombre: 'Doble cama',
    categoria: 'DOBLE',
    descripcion: 'Habitación con dos camas. Incluye desayuno.',
    precio: 45,
    capacidad: '2 personas',
    cama: '2 camas individuales',
    tamaño: '25 m²',
    imagenes: [
      {
        url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761843579/Imagen_de_WhatsApp_2025-10-29_a_las_19.43.22_2904e769_vhu9hl.jpg',
        alt: 'Habitación Doble en Eudiq Hotel Loja, dos camas individuales, ideal para amigos o familia',
      },
    ],
  amenidades: ['Wi-Fi gratis', 'TV Smart', 'Baño privado', 'Aire acondicionado', 'Vista a la ciudad', 'Desayuno incluido'],
  },
  {
    id: 4,
    nombre: 'Triple',
    categoria: 'TRIPLE',
    descripcion: 'Habitación para tres personas. Incluye desayuno.',
    precio: 50,
    capacidad: '3 personas',
    cama: '3 camas individuales',
    tamaño: '30 m²',
    imagenes: [
      {
        url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1760204555/IMG_4600_q2teiy.jpg',
        alt: 'Habitación Triple en Eudiq Hotel Loja, tres camas individuales, espacio amplio',
      },
    ],
  amenidades: ['Wi-Fi gratis', 'TV Smart', 'Baño privado', 'Aire acondicionado', 'Desayuno incluido'],
  },
  {
    id: 5,
    nombre: 'Cuádruple',
    categoria: 'CUÁDRUPLE',
    descripcion: 'Habitación para cuatro personas. Incluye desayuno.',
    precio: 60,
    capacidad: '4 personas',
    cama: '4 camas individuales',
    tamaño: '35 m²',
    imagenes: [
      {
        url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1760204999/IMG_4183-HDR_gs5who.webp',
        alt: 'Habitación Cuádruple en Eudiq Hotel Loja, cuatro camas individuales, ideal para grupos',
      },
    ],
  amenidades: ['Wi-Fi gratis', 'TV Smart', 'Baño privado', 'Aire acondicionado', 'Desayuno incluido'],
  },
  {
    id: 6,
    nombre: 'Familiar',
    categoria: 'FAMILIA',
    descripcion: 'Habitación familiar. El precio es por persona ($15). Incluye desayuno.',
    precio: 15,
    capacidad: 'por persona',
    cama: 'Camas múltiples',
    tamaño: '45 m²',
    imagenes: [
      {
        url: 'https://res.cloudinary.com/dltfsttr7/image/upload/v1761843579/Imagen_de_WhatsApp_2025-10-29_a_las_19.43.18_70f5dd4a_pnpxgy.jpg',
        alt: 'Habitación Familiar en Eudiq Hotel Loja, espacio para familias, cocina y sala amplia',
      },
    ],
    amenidades: ['Wi-Fi gratis', '2 TV Smart', 'Cocina pequeña', 'Sala amplia', 'Desayuno incluido', 'Juegos para niños', 'Balcón privado'],
  },
];
