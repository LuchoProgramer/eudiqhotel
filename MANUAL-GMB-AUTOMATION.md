# 🤖 MANUAL DE AUTOMATIZACIÓN GMB - EUDIQ HOTEL

## 📋 RESUMEN EJECUTIVO

El sistema de automatización GMB de Eudiq Hotel genera automáticamente contenido optimizado para Google My Business, aumentando la visibilidad local y engagement sin esfuerzo manual diario.

---

## 🚀 CÓMO USAR LA AUTOMATIZACIÓN

### **Opción 1: Generación Automática (Recomendada)**

```bash
# Generar posts para próximos 30 días
npm run gmb:generate

# Ver comandos disponibles  
npm run gmb:help
```

**Resultado:** 3 archivos generados en `/output/`:
- `📄 .txt` - Contenido legible para revisar
- `📊 .csv` - Para importar a herramientas (Buffer, Hootsuite)  
- `💾 .json` - Datos completos para desarrolladores

### **Opción 2: Configuración Manual**

1. **Abrir:** `/src/data/gmb-calendar.ts`
2. **Editar:** Templates por día de semana
3. **Ejecutar:** `npm run gmb:generate`
4. **Usar:** Archivos generados para programación

---

## 🎯 ESTRATEGIA DE CONTENIDO

### **Templates por Día de Semana**

| Día | Enfoque | CTA Principal |
|-----|---------|---------------|
| **Lunes** | Ubicación estratégica | Reserva tu habitación |
| **Martes** | Café Viviates | Ven y prueba |
| **Miércoles** | Servicios & comodidades | Conoce servicios |
| **Jueves** | Atractivos cercanos | Planifica recorrido |
| **Viernes** | Relajación fin de semana | Reserva tu mesa |
| **Sábado** | Turismo y aventura | Inicia aventura |
| **Domingo** | Gastronomía lojana | Prueba desayuno |

### **Eventos Especiales Automáticos**

- **🎓 Graduaciones UTPL:** Marzo, Julio, Noviembre (14 días c/u)
- **🎭 Festival de las Artes:** Noviembre (10 días)
- **🎊 Fin de Año:** Diciembre (7 días)

---

## ⚙️ CONFIGURACIÓN AVANZADA

### **Personalizar Templates**

```typescript
// Editar en /src/data/gmb-automation.ts
templatesSemana: {
  lunes: {
    template: '🌟 Tu mensaje personalizado aquí {cta}',
    hashtags: ['#TuHashtag', '#Personalizado'],
    cta: 'Tu llamada a acción'
  }
}
```

### **Agregar Nuevos Eventos**

```typescript
// En eventosEspeciales
tuEvento: {
  fechas: ['2025-12-25'], // Formato YYYY-MM-DD
  duracion: 3, // días
  template: '🎄 Tu mensaje de evento {cta}',
  hashtags: ['#TuEvento']
}
```

---

## 📱 OPCIONES DE IMPLEMENTACIÓN

### **🆓 Opción Gratuita (Manual)**
- ✅ **Tiempo:** 10 min/día
- ✅ **Costo:** $0
- ✅ **Setup:** Copiar contenido a GMB app
- ❌ **Limitación:** Requiere acción diaria

### **💡 Opción Semi-automática (Recomendada)**
- ✅ **Herramienta:** Zapier + Google Sheets  
- ✅ **Tiempo:** 1 hora/semana
- ✅ **Costo:** $20/mes
- ✅ **Beneficio:** Publicación automática

### **🚀 Opción Completamente Automática**
- ✅ **Herramienta:** Buffer/Hootsuite Pro
- ✅ **Tiempo:** 2 horas/mes  
- ✅ **Costo:** $50-100/mes
- ✅ **Beneficio:** Set & forget

---

## 🔧 SETUP ZAPIER (PASO A PASO)

### **Paso 1: Preparar Google Sheets**
1. Crear hoja: "GMB Posts Eudiq"
2. Columnas: Fecha | Hora | Contenido | Publicado
3. Copiar posts del CSV generado

### **Paso 2: Configurar Zap**
1. **Trigger:** "Schedule by Zapier" (diario 9:00 AM)
2. **Filter:** Solo posts de hoy
3. **Action:** "Google My Business - Create Post"
4. **Notification:** Slack/Email confirmación

### **Paso 3: Testing**
```
Test → Review → Activate → Monitor
```

---

## 📊 MONITOREO Y OPTIMIZACIÓN

### **KPIs a Seguir**

| Métrica | Objetivo Mensual | Herramienta |
|---------|------------------|-------------|
| **Vistas GMB** | 3,000+ | GMB Insights |
| **Clics web** | 200+ | Google Analytics |  
| **Llamadas** | 50+ | GMB Insights |
| **Engagement** | 5%+ | Posts analytics |

### **Optimización Continua**

```typescript
// El sistema aprende automáticamente
GMBOptimizer.analyzePerformance(metricas)
// Resultado: mejores días, horarios, contenido
```

---

## 🛠️ COMANDOS ÚTILES

```bash
# Generar posts
npm run gmb:generate

# Ver archivos generados
ls output/

# Limpiar archivos antiguos
rm output/gmb-posts-*

# Verificar configuración
node -e "console.log(require('./src/data/gmb-automation.ts'))"
```

---

## 🆘 TROUBLESHOOTING

### **Error: "Cannot find module"**
```bash
# Verificar estructura
ls src/data/
# Reinstalar dependencias  
npm install
```

### **Posts no relevantes**
1. Editar templates en `gmb-automation.ts`
2. Regenerar: `npm run gmb:generate`
3. Verificar eventos especiales activos

### **Horarios incorrectos**
1. Ajustar `horariosOptimos` en configuración
2. Considerar zona horaria Ecuador (GMT-5)

---

## 🎯 MEJORES PRÁCTICAS

### **✅ Hacer**
- Revisar posts generados antes de programar
- Monitorear métricas semanalmente  
- Ajustar templates según rendimiento
- Mantener consistencia de marca
- Usar imágenes locales cuando sea posible

### **❌ Evitar**
- Publicar sin revisar contenido
- Ignorar eventos locales importantes
- Usar siempre los mismos hashtags
- Publicar en horarios de baja audiencia
- Olvidar responder comentarios/reviews

---

## 📈 RESULTADOS ESPERADOS

### **Primeros 30 días:**
- 📈 +150% vistas GMB
- 📞 +80% llamadas desde GMB  
- 🌐 +120% clics a website
- ⭐ Mejor posicionamiento local

### **Primeros 90 días:**
- 🎯 Top 3 "hotel terminal terrestre loja"
- 📊 5,000+ vistas GMB mensuales
- 💰 ROI +300% en marketing local

---

## 🔄 MANTENIMIENTO

### **Semanal (10 min)**
- Revisar métricas GMB Insights
- Ajustar templates si es necesario
- Verificar publicaciones automáticas

### **Mensual (30 min)**  
- Generar reporte de rendimiento
- Optimizar horarios basado en datos
- Planificar eventos especiales próximos

### **Trimestral (2 horas)**
- Auditoría completa de contenido
- Actualizar eventos estacionales
- Revisar competencia local

---

## 📞 SOPORTE

**Configuración técnica:** revisar `/src/data/gmb-automation.ts`  
**Contenido:** editar templates en mismo archivo  
**Horarios:** ajustar `horariosOptimos`  
**Eventos:** agregar en `eventosEspeciales`

---

*Sistema creado para maximizar la presencia local de Eudiq Hotel con mínimo esfuerzo y máximos resultados* 🚀