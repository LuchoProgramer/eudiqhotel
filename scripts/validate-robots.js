#!/usr/bin/env node

/**
 * 🤖 Validador de robots.txt para Eudiq Hotel Loja
 * Especializado en SEO hotelero y turístico
 * Fecha: 7 de noviembre de 2025
 */

const fs = require('fs');
const https = require('https');
const http = require('http');

class EudiqRobotsValidator {
  constructor(baseUrl = null) {
    this.errors = [];
    this.warnings = [];
    this.suggestions = [];
    this.seoScore = 0;
    this.hotelOptimizations = [];
    this.baseUrl = baseUrl || 'https://www.hoteleudiq.com';
  }

  /**
   * Valida el robots.txt específicamente para un hotel
   */
  async validateHotelRobots() {
    console.log('🏨 Validador de robots.txt - Eudiq Hotel Loja');
    console.log('==================================================');
    
    try {
      // Obtener robots.txt desde la URL
      const content = await this.fetchRobotsFromURL(`${this.baseUrl}/robots.txt`);
      
      // Validaciones específicas
      this.validateSyntax(content);
      this.validateHotelSEO(content);
      this.validateCrawlerOptimization(content);
      this.validateSecurityBlocks(content);
      
      // Generar reporte
      this.generateHotelReport();
      
      // Testing de URLs importantes
      await this.testHotelURLs(content);
      
    } catch (error) {
      console.error('❌ Error al validar robots.txt:', error.message);
      process.exit(1);
    }
  }

  /**
   * Obtiene robots.txt desde la URL (HTTP o HTTPS)
   */
  fetchRobotsFromURL(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https:') ? https : http;
      
      client.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode === 200) {
            resolve(data);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: No se pudo obtener robots.txt`));
          }
        });
        
      }).on('error', (err) => {
        reject(err);
      });
    });
  }

  /**
   * Validaciones de sintaxis básica
   */
  validateSyntax(content) {
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmedLine = line.trim();
      
      // Saltar líneas vacías y comentarios
      if (!trimmedLine || trimmedLine.startsWith('#')) return;
      
      // Validar que tenga formato correcto
      if (!trimmedLine.includes(':')) {
        this.errors.push(`Línea ${lineNum}: Sintaxis incorrecta - falta ':' en "${trimmedLine}"`);
        return;
      }
      
      const [directive, value] = trimmedLine.split(':', 2);
      const cleanDirective = directive.trim().toLowerCase();
      const cleanValue = value.trim();
      
      // Validar directivas conocidas
      const validDirectives = ['user-agent', 'disallow', 'allow', 'sitemap', 'crawl-delay'];
      if (!validDirectives.includes(cleanDirective)) {
        this.warnings.push(`Línea ${lineNum}: Directiva desconocida "${cleanDirective}"`);
      }
      
      // Validar URLs de sitemap
      if (cleanDirective === 'sitemap') {
        try {
          const url = new URL(cleanValue);
          if (!url.protocol.startsWith('http')) {
            this.errors.push(`Línea ${lineNum}: Sitemap debe usar protocolo HTTP/HTTPS`);
          }
          
          if (!url.pathname.endsWith('.xml')) {
            this.warnings.push(`Línea ${lineNum}: Sitemap debería ser un archivo .xml`);
          }
        } catch (error) {
          this.errors.push(`Línea ${lineNum}: URL de sitemap inválida - "${cleanValue}"`);
        }
      }
    });
  }

  /**
   * Validaciones específicas para SEO hotelero
   */
  validateHotelSEO(content) {
    const contentLower = content.toLowerCase();
    
    // URLs críticas para hoteles que deben estar permitidas
    const criticalHotelPaths = [
      '/habitaciones/',
      '/servicios/',
      '/ubicacion/',
      '/contacto',
      '/cafe-viviates/',
      '/blog/'
    ];
    
    // Verificar que las rutas importantes no estén bloqueadas
    criticalHotelPaths.forEach(path => {
      if (contentLower.includes(`disallow: ${path}`)) {
        this.errors.push(`❌ CRÍTICO: Ruta importante del hotel está bloqueada: ${path}`);
      } else {
        this.hotelOptimizations.push(`✅ Ruta crítica permitida: ${path}`);
        this.seoScore += 10;
      }
    });
    
    // Verificar optimizaciones para imágenes (importante para hoteles)
    if (contentLower.includes('googlebot-image')) {
      this.hotelOptimizations.push('✅ Optimizado para Google Images (fotos del hotel)');
      this.seoScore += 15;
    } else {
      this.suggestions.push('💡 Considera agregar User-agent: Googlebot-Image para optimizar fotos del hotel');
    }
    
    // Verificar crawlers de redes sociales
    const socialCrawlers = ['facebookexternalhit', 'twitterbot', 'linkedinbot'];
    socialCrawlers.forEach(crawler => {
      if (contentLower.includes(crawler.toLowerCase())) {
        this.hotelOptimizations.push(`✅ Optimizado para ${crawler} (marketing hotelero)`);
        this.seoScore += 5;
      }
    });
    
    // Verificar sitemap
    if (contentLower.includes('sitemap:')) {
      this.hotelOptimizations.push('✅ Sitemap configurado correctamente');
      this.seoScore += 10;
    } else {
      this.errors.push('❌ Falta la declaración del sitemap');
    }
    
    // Verificar crawl-delay (importante para no sobrecargar servidor del hotel)
    if (contentLower.includes('crawl-delay:')) {
      this.hotelOptimizations.push('✅ Crawl-delay configurado (protege el servidor)');
      this.seoScore += 5;
    }
  }

  /**
   * Validaciones de optimización de crawlers
   */
  validateCrawlerOptimization(content) {
    const contentLower = content.toLowerCase();
    
    // Verificar crawlers importantes para hoteles
    const importantCrawlers = {
      'googlebot': 'Google Search (esencial)',
      'bingbot': 'Bing Search',
      'googlebot-mobile': 'Google Mobile (turistas móviles)'
    };
    
    Object.entries(importantCrawlers).forEach(([crawler, description]) => {
      if (contentLower.includes(crawler)) {
        this.hotelOptimizations.push(`✅ Optimizado para ${description}`);
        this.seoScore += 8;
      }
    });
    
    // Verificar que no bloquee contenido importante por error
    const shouldNotBlock = [
      '/habitaciones',
      '/reservas',
      '/precios',
      '/ofertas',
      '/promociones'
    ];
    
    shouldNotBlock.forEach(path => {
      if (contentLower.includes(`disallow: ${path}`)) {
        this.warnings.push(`⚠️ Posible problema: Bloqueando ruta comercial ${path}`);
      }
    });
  }

  /**
   * Validaciones de seguridad
   */
  validateSecurityBlocks(content) {
    const contentLower = content.toLowerCase();
    
    // Rutas que deberían estar bloqueadas por seguridad
    const securityBlocks = [
      '/admin',
      '/dashboard',
      '/api/',
      '/_next/',
      '/login',
      '/wp-admin'
    ];
    
    securityBlocks.forEach(path => {
      if (contentLower.includes(`disallow: ${path}`)) {
        this.hotelOptimizations.push(`🔒 Ruta administrativa protegida: ${path}`);
        this.seoScore += 3;
      }
    });
    
    // Verificar que no exponga información sensible
    if (contentLower.includes('disallow: /api/')) {
      this.hotelOptimizations.push('🔒 APIs protegidas correctamente');
      this.seoScore += 5;
    }
  }

  /**
   * Genera reporte específico para hotel
   */
  generateHotelReport() {
    console.log('\n📊 REPORTE DE VALIDACIÓN - EUDIQ HOTEL');
    console.log('=====================================');
    
    // Calcular puntuación SEO
    const maxScore = 100;
    const percentage = Math.min(100, Math.round((this.seoScore / maxScore) * 100));
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ ¡Robots.txt es válido y está bien optimizado para hotel!');
    } else {
      console.log('⚠️ Se encontraron algunos problemas que requieren atención');
    }
    
    console.log(`\n🎯 PUNTUACIÓN SEO HOTELERA: ${percentage}% (${this.seoScore}/${maxScore} puntos)`);
    
    // Mostrar errores
    if (this.errors.length > 0) {
      console.log('\n❌ ERRORES CRÍTICOS:');
      this.errors.forEach(error => console.log(`   ${error}`));
    }
    
    // Mostrar advertencias
    if (this.warnings.length > 0) {
      console.log('\n⚠️ ADVERTENCIAS:');
      this.warnings.forEach(warning => console.log(`   ${warning}`));
    }
    
    // Mostrar optimizaciones implementadas
    if (this.hotelOptimizations.length > 0) {
      console.log('\n🏨 OPTIMIZACIONES HOTELERAS ACTIVAS:');
      this.hotelOptimizations.forEach(opt => console.log(`   ${opt}`));
    }
    
    // Mostrar sugerencias
    if (this.suggestions.length > 0) {
      console.log('\n💡 SUGERENCIAS DE MEJORA:');
      this.suggestions.forEach(suggestion => console.log(`   ${suggestion}`));
    }
    
    // Resumen final
    console.log('\n📈 RESUMEN:');
    console.log(`   • Errores: ${this.errors.length}`);
    console.log(`   • Advertencias: ${this.warnings.length}`);
    console.log(`   • Optimizaciones activas: ${this.hotelOptimizations.length}`);
    console.log(`   • Sugerencias: ${this.suggestions.length}`);
    
    const status = this.errors.length === 0 ? '✅ Válido para producción' : '❌ Requiere correcciones';
    console.log(`   • Estado: ${status}`);
  }

  /**
   * Prueba URLs importantes del hotel
   */
  async testHotelURLs(robotsContent) {
    console.log('\n🧪 TESTING DE URLs IMPORTANTES');
    console.log('===============================');
    
    const testUrls = [
      // URLs que DEBEN estar permitidas
      { url: '/', shouldAllow: true, description: 'Página principal' },
      { url: '/habitaciones/', shouldAllow: true, description: 'Habitaciones del hotel' },
      { url: '/habitaciones/individual', shouldAllow: true, description: 'Habitación específica' },
      { url: '/servicios/', shouldAllow: true, description: 'Servicios del hotel' },
      { url: '/cafe-viviates/', shouldAllow: true, description: 'Cafetería del hotel' },
      { url: '/blog/', shouldAllow: true, description: 'Blog del hotel' },
      { url: '/blog/tips-viajeros', shouldAllow: true, description: 'Artículo del blog' },
      { url: '/contacto', shouldAllow: true, description: 'Información de contacto' },
      { url: '/ubicacion/', shouldAllow: true, description: 'Ubicación del hotel' },
      { url: '/ads/terminal-terrestre', shouldAllow: true, description: 'Landing page ads' },
      
      // URLs que DEBEN estar bloqueadas
      { url: '/api/reservas', shouldAllow: false, description: 'API de reservas' },
      { url: '/_next/static/css/app.css', shouldAllow: false, description: 'Archivos Next.js' },
      { url: '/admin', shouldAllow: false, description: 'Panel administrativo' },
      { url: '/dashboard', shouldAllow: false, description: 'Dashboard interno' }
    ];
    
    testUrls.forEach(({ url, shouldAllow, description }) => {
      const isAllowed = this.testURL(robotsContent, url, '*');
      const status = isAllowed === shouldAllow ? '✅' : '❌';
      const allowText = isAllowed ? 'Permitida' : 'Bloqueada';
      const expectedText = shouldAllow ? '(debe estar permitida)' : '(debe estar bloqueada)';
      
      console.log(`   ${status} ${url} - ${allowText} ${expectedText} - ${description}`);
      
      if (isAllowed !== shouldAllow) {
        if (shouldAllow) {
          this.errors.push(`URL importante bloqueada: ${url} - ${description}`);
        } else {
          this.warnings.push(`URL sensible no bloqueada: ${url} - ${description}`);
        }
      }
    });
  }

  /**
   * Prueba si una URL específica está permitida o bloqueada
   */
  testURL(robotsContent, url, userAgent = '*') {
    const lines = robotsContent.split('\n');
    let currentAgent = null;
    let rules = [];
    
    // Procesar reglas por user-agent
    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith('#')) continue;
      
      const [directive, value] = line.split(':', 2);
      if (!directive || !value) continue;
      
      const cleanDirective = directive.trim().toLowerCase();
      const cleanValue = value.trim();
      
      if (cleanDirective === 'user-agent') {
        currentAgent = cleanValue;
        if (currentAgent === userAgent || currentAgent === '*') {
          rules = [];
        }
      } else if (currentAgent === userAgent || currentAgent === '*') {
        if (cleanDirective === 'disallow' || cleanDirective === 'allow') {
          rules.push({ type: cleanDirective, pattern: cleanValue });
        }
      }
    }
    
    // Evaluar reglas en orden (más específicas primero)
    rules.sort((a, b) => b.pattern.length - a.pattern.length);
    
    for (let rule of rules) {
      if (this.matchesPattern(url, rule.pattern)) {
        return rule.type === 'allow';
      }
    }
    
    // Por defecto, permitir acceso
    return true;
  }

  /**
   * Verifica si una URL coincide con un patrón
   */
  matchesPattern(url, pattern) {
    if (pattern === '/') return true;
    if (pattern === '') return true;
    
    // Convertir patrón a regex
    const regexPattern = pattern
      .replace(/\*/g, '.*')
      .replace(/\?/g, '\\?')
      .replace(/\./g, '\\.');
    
    const regex = new RegExp(`^${regexPattern}`);
    return regex.test(url);
  }
}

// Ejecutar validador si se llama directamente
if (require.main === module) {
  const validator = new EudiqRobotsValidator();
  
  // Verificar si se proporcionó una URL específica para probar
  const testUrl = process.argv[2];
  
  if (testUrl) {
    console.log(`🧪 Testing URL específica: ${testUrl}`);
    console.log('===============================');
    
    validator.fetchRobotsFromURL('https://www.hoteleudiq.com/robots.txt')
      .then(content => {
        const isAllowed = validator.testURL(content, testUrl, '*');
        console.log(`URL: ${testUrl}`);
        console.log(`Estado: ${isAllowed ? '✅ Permitida' : '❌ Bloqueada'}`);
        console.log(`User-agent: * (todos los crawlers)`);
      })
      .catch(error => {
        console.error('❌ Error:', error.message);
      });
  } else {
    // Ejecutar validación completa
    validator.validateHotelRobots();
  }
}

module.exports = EudiqRobotsValidator;