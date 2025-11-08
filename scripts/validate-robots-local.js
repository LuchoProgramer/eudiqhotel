#!/usr/bin/env node

/**
 * 🧪 Validador Local de robots.txt - Eudiq Hotel
 * Para usar mientras el servidor de desarrollo está corriendo
 * Uso: node scripts/validate-robots-local.js
 */

const http = require('http');

class LocalRobotsValidator {
  constructor() {
    this.localUrl = 'http://localhost:3000';
  }

  /**
   * Prueba si el servidor local está corriendo
   */
  async isServerRunning() {
    return new Promise((resolve) => {
      const req = http.get(`${this.localUrl}/robots.txt`, (res) => {
        resolve(true);
      });
      
      req.on('error', () => {
        resolve(false);
      });
      
      req.setTimeout(3000, () => {
        req.destroy();
        resolve(false);
      });
    });
  }

  /**
   * Obtiene robots.txt del servidor local
   */
  async fetchLocalRobots() {
    return new Promise((resolve, reject) => {
      http.get(`${this.localUrl}/robots.txt`, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          resolve(data);
        });
      }).on('error', (err) => {
        reject(err);
      });
    });
  }

  /**
   * Valida robots.txt local
   */
  async validateLocal() {
    console.log('🧪 Validador Local - Eudiq Hotel robots.txt');
    console.log('==========================================');
    
    // Verificar si servidor está corriendo
    const serverRunning = await this.isServerRunning();
    
    if (!serverRunning) {
      console.log('❌ Servidor local no está corriendo en http://localhost:3000');
      console.log('');
      console.log('💡 Para iniciarlo:');
      console.log('   npm run dev');
      console.log('');
      console.log('⚠️  Luego ejecuta este script en otra terminal');
      return;
    }

    try {
      console.log('✅ Servidor local detectado en http://localhost:3000');
      console.log('');
      
      // Obtener contenido
      const content = await this.fetchLocalRobots();
      
      console.log('📄 CONTENIDO DEL ROBOTS.TXT LOCAL:');
      console.log('=====================================');
      console.log(content);
      console.log('');
      
      // Análisis rápido
      this.analyzeContent(content);
      
    } catch (error) {
      console.error('❌ Error:', error.message);
    }
  }

  /**
   * Análisis rápido del contenido
   */
  analyzeContent(content) {
    console.log('🔍 ANÁLISIS RÁPIDO:');
    console.log('==================');
    
    const lines = content.split('\n');
    let allowCount = 0;
    let disallowCount = 0;
    let hasSitemap = false;
    
    lines.forEach(line => {
      if (line.startsWith('Allow:')) allowCount++;
      if (line.startsWith('Disallow:')) disallowCount++;
      if (line.startsWith('Sitemap:')) hasSitemap = true;
    });
    
    console.log(`✅ Directivas Allow: ${allowCount}`);
    console.log(`🚫 Directivas Disallow: ${disallowCount}`);
    console.log(`🗺️  Sitemap: ${hasSitemap ? 'Configurado' : 'No encontrado'}`);
    console.log('');
    
    // Verificaciones críticas
    const hasApiBlock = content.includes('Disallow: /api/');
    const hasNextBlock = content.includes('Disallow: /_next/');
    const hasAdminBlock = content.includes('Disallow: /admin');
    
    console.log('🔒 VERIFICACIONES DE SEGURIDAD:');
    console.log(`   APIs bloqueadas: ${hasApiBlock ? '✅' : '❌'}`);
    console.log(`   Archivos Next.js bloqueados: ${hasNextBlock ? '✅' : '❌'}`);
    console.log(`   Admin bloqueado: ${hasAdminBlock ? '✅' : '❌'}`);
    console.log('');
    
    // Optimizaciones hoteleras
    const hasHabitaciones = content.includes('Allow: /habitaciones/');
    const hasCafe = content.includes('Allow: /cafe-viviates/');
    const hasServicios = content.includes('Allow: /servicios/');
    
    console.log('🏨 OPTIMIZACIONES HOTELERAS:');
    console.log(`   Habitaciones permitidas: ${hasHabitaciones ? '✅' : '❌'}`);
    console.log(`   Cafetería permitida: ${hasCafe ? '✅' : '❌'}`);
    console.log(`   Servicios permitidos: ${hasServicios ? '✅' : '❌'}`);
    
    if (hasApiBlock && hasNextBlock && hasAdminBlock && hasHabitaciones && hasCafe) {
      console.log('');
      console.log('🎉 ¡Configuración local óptima!');
    }
  }

  /**
   * Prueba URLs específicas
   */
  async testURL(path) {
    console.log(`🧪 Testing: ${path}`);
    
    const isServerRunning = await this.isServerRunning();
    if (!isServerRunning) {
      console.log('❌ Servidor no está corriendo');
      return;
    }

    try {
      const content = await this.fetchLocalRobots();
      
      // Análisis simple de robots.txt
      const lines = content.split('\n');
      let currentUserAgent = '*';
      let allowed = true;
      
      for (const line of lines) {
        const trimmed = line.trim();
        
        if (trimmed.startsWith('User-agent:')) {
          currentUserAgent = trimmed.split(':')[1].trim();
        }
        
        if (trimmed.startsWith('Disallow:') && currentUserAgent === '*') {
          const disallowPath = trimmed.split(':')[1].trim();
          if (path.startsWith(disallowPath)) {
            allowed = false;
            break;
          }
        }
        
        if (trimmed.startsWith('Allow:') && currentUserAgent === '*') {
          const allowPath = trimmed.split(':')[1].trim();
          if (path.startsWith(allowPath)) {
            allowed = true;
          }
        }
      }
      
      console.log(`   ${allowed ? '✅ Permitida' : '❌ Bloqueada'}`);
      
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  const validator = new LocalRobotsValidator();
  
  // Si hay argumentos, probar URL específica
  if (process.argv[2]) {
    validator.testURL(process.argv[2]);
  } else {
    // Validación completa
    validator.validateLocal();
  }
}

module.exports = LocalRobotsValidator;