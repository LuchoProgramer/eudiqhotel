#!/usr/bin/env node

/**
 * Script ejecutable para generar posts GMB automáticamente
 * Ejecutar: node scripts/generar-posts-gmb.js
 */

const fs = require('fs');
const path = require('path');

// Simular el sistema de automatización (en producción sería importado)
class GMBPostGenerator {
  
  static templatesSemana = {
    lunes: {
      tema: 'Inicio de semana - Ubicación estratégica',
      template: '🌟 ¡Nueva semana, nuevas oportunidades! Eudiq Hotel te recibe con la mejor ubicación de Loja: diagonal al Terminal Terrestre y a pasos del Parque Jipiro. {cta}',
      hashtags: ['#LunesMotivacion', '#UbicacionPerfecta', '#EudiqHotel', '#LojaEcuador'],
      cta: 'Reserva tu habitación'
    },
    martes: {
      tema: 'Café Viviates - Producto estrella',
      template: '☕ Los martes saben mejor con café de especialidad. Café Viviates ofrece los mejores granos de altura de Loja, tostado artesanal y vista al Parque Jipiro. {cta}',
      hashtags: ['#MartesCafetero', '#CafeViviates', '#CafeEspecialidad', '#TostadoArtesanal'],
      cta: 'Ven y prueba'
    },
    miercoles: {
      tema: 'Servicios y comodidades',
      template: '🛏️ Mitad de semana, comodidad total. Habitaciones equipadas, WiFi gratis, desayuno incluido y la tranquilidad de estar en el mejor lugar de Loja. {cta}',
      hashtags: ['#MiercolesComodo', '#HabitacionesEquipadas', '#WifiGratis', '#DesayunoIncluido'],
      cta: 'Conoce nuestros servicios'
    },
    jueves: {
      tema: 'Atractivos cercanos',
      template: '🌳 Los jueves son perfectos para explorar. Desde Eudiq Hotel: Parque Jipiro a 200m, centro histórico a 5 min, Parque Nacional Podocarpus a 25 min. {cta}',
      hashtags: ['#JuevesExploracion', '#ParqueJipiro', '#CentroHistorico', '#PodocarpusNacional'],
      cta: 'Planifica tu recorrido'
    },
    viernes: {
      tema: 'Fin de semana y relajación',
      template: '🎉 ¡Viernes de relax! Termina la semana en Café Viviates con la mejor vista al atardecer. El lugar perfecto para desconectar y disfrutar Loja. {cta}',
      hashtags: ['#ViernesRelax', '#AtardecerLoja', '#CafeViviates', '#FinDeSemana'],
      cta: 'Reserva tu mesa'
    },
    sabado: {
      tema: 'Turismo y aventura',
      template: '🏔️ Sábados de aventura lojana. Eudiq Hotel: tu base perfecta para explorar cascadas, senderos ecológicos y la riqueza natural del sur de Ecuador. {cta}',
      hashtags: ['#SabadoAventura', '#TurismoLoja', '#NaturalezaEcuador', '#SurEcuador'],
      cta: 'Inicia tu aventura'
    },
    domingo: {
      tema: 'Descanso y gastronomía',
      template: '🍽️ Domingos de sabor lojano. Disfruta el desayuno tradicional: repe, cecina, quesillo y por supuesto, el mejor café de la región en Café Viviates. {cta}',
      hashtags: ['#DomingoGastronomico', '#DesayunoLojano', '#SaborTradicional', '#RepeLojan'],
      cta: 'Prueba nuestro desayuno'
    }
  };

  static eventosEspeciales = {
    graduacionesUTPL: {
      fechas: ['2025-03-15', '2025-07-20', '2025-11-10'],
      duracion: 14, // días de campaña
      template: '🎓 Temporada de graduaciones UTPL. Familias de todo Ecuador confían en Eudiq Hotel por nuestra ubicación estratégica y servicio personalizado. ¡Celebra el éxito con nosotros! {cta}',
      hashtags: ['#GraduacionesUTPL', '#HospedajeFamiliar', '#CelebracionExito', '#EudiqHotel']
    },
    festivalArtes: {
      fechas: ['2025-11-15'],
      duracion: 10,
      template: '🎭 Festival de las Artes Loja 2025. Hospédate en Eudiq Hotel y vive la cultura lojana de cerca. Arte, música y tradición a pasos de tu habitación. {cta}',
      hashtags: ['#FestivalArtes2025', '#CulturaLoja', '#ArteYMusica', '#TradicionLojana']
    }
  };

  static getDayTemplate(date) {
    const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const dayName = days[date.getDay()];
    return this.templatesSemana[dayName];
  }

  static checkSpecialEvents(date) {
    const dateStr = date.toISOString().split('T')[0];
    
    for (const [eventName, event] of Object.entries(this.eventosEspeciales)) {
      for (const eventDate of event.fechas) {
        const eventStart = new Date(eventDate);
        const eventEnd = new Date(eventStart.getTime() + (event.duracion * 24 * 60 * 60 * 1000));
        
        if (date >= eventStart && date <= eventEnd) {
          return { eventName, ...event };
        }
      }
    }
    return null;
  }

  static getCTARotativo() {
    const ctas = [
      'Reserva ahora: https://wa.me/593999999999',
      'Llámanos: +593 99 999 9999',
      'Más info: hoteleudiq.com',
      'WhatsApp: https://wa.me/593999999999',
      'Consulta disponibilidad'
    ];
    
    const index = Math.floor(Date.now() / (24 * 60 * 60 * 1000)) % ctas.length;
    return ctas[index];
  }

  static generatePost(date) {
    // Verificar eventos especiales primero
    const specialEvent = this.checkSpecialEvents(date);
    
    let template, hashtags, category;
    
    if (specialEvent) {
      template = specialEvent.template;
      hashtags = specialEvent.hashtags;
      category = specialEvent.eventName;
    } else {
      const dayTemplate = this.getDayTemplate(date);
      template = dayTemplate.template;
      hashtags = dayTemplate.hashtags;
      category = 'daily';
    }

    // Variables dinámicas
    const variables = {
      cta: this.getCTARotativo(),
      hotel: 'Eudiq Hotel',
      ubicacion: 'diagonal al Terminal Terrestre',
      parque: 'Parque Jipiro'
    };

    // Reemplazar variables en template
    let content = template;
    Object.entries(variables).forEach(([key, value]) => {
      content = content.replace(`{${key}}`, value);
    });

    // Agregar hashtags
    content += '\n\n' + hashtags.join(' ');

    return {
      id: `auto_${date.getTime()}`,
      content,
      scheduledDate: date.toISOString(),
      published: false,
      type: 'auto',
      category,
      dayOfWeek: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'][date.getDay()],
      optimalTime: this.getOptimalTime(date.getDay())
    };
  }

  static getOptimalTime(dayOfWeek) {
    const optimalTimes = {
      0: '09:00', // domingo
      1: '09:00', // lunes
      2: '10:30', // martes
      3: '09:30', // miércoles
      4: '11:00', // jueves
      5: '10:00', // viernes
      6: '11:30'  // sábado
    };
    return optimalTimes[dayOfWeek];
  }

  static generateMonthlyCalendar(days = 30) {
    const posts = [];
    const today = new Date();
    
    for (let i = 0; i < days; i++) {
      const postDate = new Date(today.getTime() + (i * 24 * 60 * 60 * 1000));
      
      // Publicar solo en días estratégicos (lunes, miércoles, viernes, domingo)
      if ([0, 1, 3, 5].includes(postDate.getDay())) {
        posts.push(this.generatePost(postDate));
      }
    }
    
    return posts;
  }
}

// Función principal
function main() {
  console.log('🚀 Generando posts GMB automáticamente...\n');
  
  try {
    // Generar posts para próximos 30 días
    const posts = GMBPostGenerator.generateMonthlyCalendar(30);
    
    // Crear directorio de salida si no existe
    const outputDir = path.join(__dirname, '..', 'output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Guardar posts completos en JSON
    const jsonPath = path.join(outputDir, `gmb-posts-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(posts, null, 2));

    // Crear CSV para fácil importación
    const csvPath = path.join(outputDir, `gmb-posts-${new Date().toISOString().split('T')[0]}.csv`);
    const csvContent = createCSV(posts);
    fs.writeFileSync(csvPath, csvContent);

    // Crear archivo de texto legible
    const txtPath = path.join(outputDir, `gmb-posts-${new Date().toISOString().split('T')[0]}.txt`);
    const txtContent = createReadableText(posts);
    fs.writeFileSync(txtPath, txtContent);

    // Mostrar resumen
    console.log('✅ Posts generados exitosamente!');
    console.log(`📊 Total de posts: ${posts.length}`);
    console.log(`📅 Período: ${posts[0]?.scheduledDate.split('T')[0]} a ${posts[posts.length-1]?.scheduledDate.split('T')[0]}`);
    console.log(`📁 Archivos guardados en: ${outputDir}`);
    console.log(`   • JSON completo: ${path.basename(jsonPath)}`);
    console.log(`   • CSV para importar: ${path.basename(csvPath)}`);
    console.log(`   • Texto legible: ${path.basename(txtPath)}`);
    
    // Mostrar próximos 3 posts como preview
    console.log('\n📝 Preview de próximos posts:');
    posts.slice(0, 3).forEach((post, index) => {
      const date = new Date(post.scheduledDate);
      console.log(`\n${index + 1}. ${post.dayOfWeek.toUpperCase()} ${date.toLocaleDateString('es-EC')}`);
      console.log(`   Horario sugerido: ${post.optimalTime}`);
      console.log(`   Contenido: ${post.content.substring(0, 100)}...`);
    });

    console.log('\n🎯 Próximos pasos:');
    console.log('   1. Revisar los posts generados');
    console.log('   2. Importar a tu herramienta de programación (Buffer, Hootsuite, etc.)');
    console.log('   3. Ajustar horarios según tu zona horaria');
    console.log('   4. Monitorear métricas semanalmente');

  } catch (error) {
    console.error('❌ Error al generar posts:', error.message);
    process.exit(1);
  }
}

// Función para crear CSV
function createCSV(posts) {
  const headers = 'Fecha,Hora,Día,Contenido,Categoría,Hashtags\n';
  const rows = posts.map(post => {
    const date = new Date(post.scheduledDate);
    const formattedDate = date.toLocaleDateString('es-EC');
    const content = post.content.replace(/"/g, '""'); // Escape quotes
    const hashtags = post.content.match(/#\w+/g)?.join(' ') || '';
    
    return `"${formattedDate}","${post.optimalTime}","${post.dayOfWeek}","${content}","${post.category}","${hashtags}"`;
  }).join('\n');
  
  return headers + rows;
}

// Función para crear texto legible
function createReadableText(posts) {
  let content = `CALENDARIO DE POSTS GMB - EUDIQ HOTEL\n`;
  content += `Generado: ${new Date().toLocaleDateString('es-EC')}\n`;
  content += `Total de posts: ${posts.length}\n`;
  content += `${'='.repeat(50)}\n\n`;

  posts.forEach((post, index) => {
    const date = new Date(post.scheduledDate);
    content += `POST #${index + 1}\n`;
    content += `Fecha: ${date.toLocaleDateString('es-EC')} (${post.dayOfWeek})\n`;
    content += `Hora sugerida: ${post.optimalTime}\n`;
    content += `Categoría: ${post.category}\n`;
    content += `Contenido:\n${post.content}\n`;
    content += `${'-'.repeat(30)}\n\n`;
  });

  return content;
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { GMBPostGenerator, main };