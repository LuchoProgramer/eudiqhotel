# 📊 Guía de Analytics para Cafetería Viviates

## 🎯 Descripción General

Sistema de tracking completo y diferenciado para **Cafetería Viviates** que permite analizar el comportamiento de los usuarios, optimizar conversiones y tomar decisiones basadas en datos.

## ✅ ¿Qué está trackeado?

### 🏠 Página Principal (`/cafe-viviates`)
- ✅ Vista de página
- ✅ Tiempo de permanencia
- ✅ Profundidad de scroll (25%, 50%, 75%, 100%)
- ✅ Clicks en galería de fotos
- ✅ Apertura de lightbox de imágenes
- ✅ Clicks en botones de WhatsApp (pedidos)
- ✅ Clicks en botones de llamada
- ✅ Clicks en redes sociales (Instagram)
- ✅ Navegación entre imágenes

### 📋 Página de Menú (`/cafe-viviates/menu`)
- ✅ Vista de página del menú
- ✅ Búsqueda de items (cuando tiene 3+ caracteres)
- ✅ Filtrado por categorías
- ✅ Clicks en WhatsApp (pedidos y reservas)
- ✅ Clicks en llamadas telefónicas
- ✅ Clicks en redes sociales
- ✅ Tiempo de permanencia
- ✅ Profundidad de scroll

## 📈 Eventos Personalizados Registrados

### Navegación y Páginas
| Evento | Descripción | Cuándo se dispara |
|--------|-------------|-------------------|
| `cafe_page_view` | Vista general de la página | Al cargar la página principal |
| `cafe_menu_view` | Vista del menú | Al cargar la página del menú |
| `cafe_time_spent` | Tiempo total en página | Al salir de la página |
| `cafe_scroll_depth` | Profundidad de scroll | En hitos: 25%, 50%, 75%, 100% |

### Interacciones con Menú
| Evento | Descripción | Parámetros |
|--------|-------------|------------|
| `cafe_menu_search` | Búsqueda en el menú | `search_query` |
| `cafe_category_filter` | Filtro por categoría | `category`, `filter` |
| `cafe_item_view` | Vista de item específico | `menu_item`, `menu_category`, `menu_price` |

### CTAs y Conversiones
| Evento | Descripción | Parámetros |
|--------|-------------|------------|
| `cafe_whatsapp_click` | Click en WhatsApp | `cta_type` (order/reservation/info), `cta_location`, `message_text` |
| `cafe_phone_click` | Click en teléfono | `cta_location` |

### Redes Sociales
| Evento | Descripción | Parámetros |
|--------|-------------|------------|
| `cafe_instagram_click` | Click en Instagram | `social_platform`, `social_account`, `cta_location` |

### Galería
| Evento | Descripción | Parámetros |
|--------|-------------|------------|
| `cafe_gallery_view` | Vista de galería | `cafe_section` |
| `cafe_image_click` | Click en imagen | `image_index`, `image_alt` |
| `cafe_lightbox_open` | Apertura de lightbox | `image_index`, `image_alt` |

## 🔧 Cómo Ver los Datos

### Google Analytics 4

1. **Accede a tu cuenta de GA4**
2. Ve a **Informes** > **Engagement** > **Eventos**
3. Busca eventos que empiecen con `cafe_`

### Eventos Principales a Monitorear

```
📊 Conversión
├── cafe_whatsapp_click (tipo: order, reservation)
├── cafe_phone_click
└── cafe_menu_view

📱 Engagement
├── cafe_time_spent
├── cafe_scroll_depth
├── cafe_menu_search
└── cafe_category_filter

🌐 Social Media
└── cafe_instagram_click

🖼️ Galería
├── cafe_gallery_view
├── cafe_image_click
└── cafe_lightbox_open
```

## 📊 Métricas Clave Recomendadas

### KPIs de Conversión
- **Tasa de pedidos**: `cafe_whatsapp_click` (type=order) / `cafe_menu_view`
- **Tasa de reservas**: `cafe_whatsapp_click` (type=reservation) / `cafe_page_view`
- **Tasa de llamadas**: `cafe_phone_click` / `cafe_page_view`

### KPIs de Engagement
- **Tiempo promedio en página**: AVG(`cafe_time_spent`)
- **Profundidad de scroll promedio**: AVG(`scroll_depth`)
- **Búsquedas por sesión**: COUNT(`cafe_menu_search`) / sessions
- **Items más buscados**: TOP(`search_query`)

### KPIs de Navegación
- **Categorías más populares**: COUNT(`cafe_category_filter`) by `category`
- **Imágenes más vistas**: COUNT(`cafe_image_click`) by `image_index`

## 🎨 Dashboards Recomendados

### Dashboard 1: Conversión
```
┌─────────────────────────────────────┐
│ Pedidos WhatsApp (hoy)        │ 45  │
│ Reservas WhatsApp (hoy)       │ 23  │
│ Llamadas (hoy)                │ 12  │
│ Tasa de conversión            │ 8%  │
└─────────────────────────────────────┘
```

### Dashboard 2: Comportamiento del Usuario
```
┌─────────────────────────────────────┐
│ Tiempo promedio en página     │ 3m  │
│ Scroll promedio               │ 68% │
│ Búsquedas totales             │ 234 │
│ Categoría más vista           │ Tradicional Lojano │
└─────────────────────────────────────┘
```

### Dashboard 3: Engagement Social
```
┌─────────────────────────────────────┐
│ Clicks Instagram (total)      │ 156 │
│ @viviatescoffeeshop          │ 78  │
│ @cafeviviates                │ 45  │
│ @hoteleudiq                  │ 33  │
└─────────────────────────────────────┘
```

## 🔍 Filtros y Segmentos Útiles

### Por Ubicación del CTA
```javascript
// Ejemplo: Ver qué ubicación de WhatsApp convierte más
cta_location = 'menu_cta_primary'    // Botón principal del menú
cta_location = 'cta_section'         // Sección CTA
cta_location = 'contact_card'        // Tarjeta de contacto
cta_location = 'menu_contact_card'   // Tarjeta del menú
```

### Por Tipo de Acción
```javascript
cta_type = 'order'        // Pedidos
cta_type = 'reservation'  // Reservas
cta_type = 'phone'        // Llamadas
cta_type = 'whatsapp'     // WhatsApp genérico
```

### Por Sección de la Cafetería
```javascript
cafe_section = 'menu_page'      // Página del menú
cafe_section = 'main'           // Página principal
cafe_section = 'gallery'        // Galería
cafe_section = 'cta'            // Sección de CTAs
cafe_section = 'social'         // Redes sociales
```

## 📱 Integraciones Disponibles

### Actualmente Activas
- ✅ **Google Analytics 4** - Todos los eventos
- ✅ **Console Logging** (desarrollo) - Debugging

### Fáciles de Agregar (código preparado)
- 🔲 **Facebook Pixel**
- 🔲 **Hotjar**
- 🔲 **Mixpanel**
- 🔲 **Segment**

Para agregar más plataformas, edita: `/src/hooks/useCafeAnalytics.ts` línea ~108

## 💡 Insights Accionables

### Optimización de Conversión
```
SI cafe_whatsapp_click (location=X) > promedio
ENTONCES: Duplicar ese tipo de CTA en más lugares

SI cafe_menu_search (query='desayuno') es alta
ENTONCES: Destacar sección de desayunos

SI cafe_scroll_depth < 50% en promedio
ENTONCES: Mejorar contenido "above the fold"
```

### Optimización de Menú
```
SI cafe_category_filter (category=X) es alta
ENTONCES: Ampliar esa categoría de productos

SI cafe_menu_search sin resultados
ENTONCES: Agregar esos items al menú
```

## 🚀 Próximos Pasos

1. **Configurar Google Analytics 4** si no está configurado
2. **Crear audiencias personalizadas** en GA4 basadas en eventos
3. **Configurar conversiones** para `cafe_whatsapp_click` y `cafe_phone_click`
4. **Crear reportes automáticos** semanales
5. **A/B Testing** basado en datos de eventos

## 🛠️ Mantenimiento

### Agregar Nuevos Eventos
```typescript
// En useCafeAnalytics.ts
trackCafeEvent('nuevo_evento_cafe', {
  cafe_section: 'seccion',
  custom_param: 'valor',
});
```

### Debugging
```bash
# En desarrollo, abre la consola del navegador
# Verás logs como:
🔔 Cafe Analytics Event: {
  event: 'cafe_menu_search',
  params: { search_query: 'tamal' }
}
```

## 📞 Soporte

Para cualquier duda sobre analytics de la cafetería:
- Revisa la consola del navegador en modo desarrollo
- Verifica que Google Analytics esté configurado
- Todos los eventos incluyen `timestamp` y `page_path` automáticamente

---

**Última actualización**: 22 de noviembre de 2025
**Versión**: 1.0
**Eventos activos**: 15+
**Parámetros rastreados**: 20+
