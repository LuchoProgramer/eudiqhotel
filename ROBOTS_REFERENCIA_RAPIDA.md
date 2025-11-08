# ⚡ Robots.txt - Referencia Rápida Eudiq Hotel

**Accesos rápidos para mantenimiento diario**

---

## 🔧 **Comandos Esenciales**

### **Validación Completa** 
```bash
node scripts/validate-robots.js
```

### **Probar URLs Críticas**
```bash
# URLs que DEBEN funcionar (conversión)
node scripts/validate-robots.js "/habitaciones/"
node scripts/validate-robots.js "/cafe-viviates/"  
node scripts/validate-robots.js "/contacto"

# URLs que DEBEN estar bloqueadas (seguridad)
node scripts/validate-robots.js "/api/"
node scripts/validate-robots.js "/admin"
```

### **Verificación en Producción**
```bash
curl https://www.hoteleudiq.com/robots.txt
curl https://www.hoteleudiq.com/sitemap.xml
```

---

## 📊 **Puntuación SEO Objetivo**

- **🎯 Meta**: 95+ puntos (SEO hotelero optimizado)
- **✅ Aceptable**: 80-94 puntos  
- **⚠️ Mejorar**: 60-79 puntos
- **❌ Crítico**: <60 puntos (requiere acción inmediata)

---

## 🏨 **URLs Críticas del Hotel**

### **✅ Conversión (deben estar permitidas)**
- `/` - Página principal
- `/habitaciones/` - Tipos de habitaciones  
- `/servicios/` - Servicios del hotel
- `/cafe-viviates/` - Cafetería (revenue)
- `/contacto` - Reservas y contacto
- `/ubicacion/` - Ubicación y mapas
- `/blog/` - Content marketing
- `/ads/` - Landing pages de Google Ads

### **❌ Seguridad (deben estar bloqueadas)**  
- `/api/` - APIs internas
- `/_next/` - Archivos de Next.js
- `/admin` - Panel administrativo
- `/dashboard` - Dashboard interno

---

## 🎯 **Checklist Rápido Semanal**

```bash
# 1. Validar robots.txt
node scripts/validate-robots.js

# 2. Verificar puntuación > 90
# Si sale <90, revisar errores mostrados

# 3. Probar 3 URLs críticas  
node scripts/validate-robots.js "/habitaciones/"
node scripts/validate-robots.js "/cafe-viviates/"
node scripts/validate-robots.js "/contacto"

# 4. Verificar en vivo
curl https://www.hoteleudiq.com/robots.txt
```

---

## 🚨 **Solución de Problemas Comunes**

### **Error: "URL de sitemap inválida"**
- ✅ Verificar que sitemap.xml existe y es accesible
- ✅ Comprobar formato correcto de URL

### **Error: "APIs no bloqueadas"**
- ⚠️ Revisar directivas `Disallow: /api/`
- ⚠️ Verificar sintaxis correcta

### **Puntuación SEO baja**  
- 🔍 Revisar que todas las rutas críticas estén en `Allow:`
- 🔍 Verificar optimización para Google Images
- 🔍 Comprobar crawlers de redes sociales

---

## 📱 **Contactos de Emergencia SEO**

Si la puntuación baja drásticamente:
1. **Ejecutar validador inmediatamente**
2. **Verificar URLs críticas una por una**  
3. **Comprobar acceso a sitemap.xml**
4. **Revisar Google Search Console**

---

*Referencia creada: 7 nov 2025 - Uso diario Eudiq Hotel* ⚡