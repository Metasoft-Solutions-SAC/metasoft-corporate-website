# 📁 Semana 2: Google Tools + Optimización Imágenes

**Duración:** 5 días  
**Tiempo estimado:** 20 horas  
**Inversión:** $600-900  
**Objetivo:** SEO 75/100 → 82/100 (+9%)

---

## 📄 Documentos en esta Carpeta

### 1. GUIA-GOOGLE-MY-BUSINESS.md (900+ líneas)
Configuración completa Google My Business:
- Creación cuenta y perfil empresarial
- Categorías: Empresa de software + 3 adicionales
- Descripción 750 caracteres optimizada
- 5 servicios con rangos de precios
- Estrategia de reseñas (objetivo: 3-5 primeras)
- 3 métodos de verificación
- Post-verificación: publicaciones, preguntas frecuentes

### 2. GUIA-GOOGLE-SEARCH-CONSOLE.md (800+ líneas)
Setup y configuración Google Search Console:
- Creación cuenta y verificación (5 métodos)
- Meta tag preparado en index.html
- Configuración y envío sitemap.xml
- Solicitud indexación manual
- Segmentación geográfica: Perú 🇵🇪
- Monitoreo métricas: Rendimiento, Cobertura, Core Web Vitals
- Vinculación bidireccional GSC ↔ GA4

### 3. GUIA-GOOGLE-ANALYTICS-4.md (1,000+ líneas)
Implementación completa Google Analytics 4:
- Creación cuenta y propiedad GA4
- Código gtag.js comentado en index.html (listo para activar)
- 3 eventos personalizados:
  * form_submit (formulario contacto)
  * cta_click (botones principales)
  * scroll (engagement 90%)
- Configuración conversiones y audiencias
- Informes personalizados (embudo, canales)
- Integración completa GSC + GA4

### 4. GUIA-OPTIMIZACION-IMAGENES.md (900+ líneas)
Optimización imágenes formato WebP:
- Descarga 8 imágenes Unsplash (keywords específicas)
- Conversión JPG → WebP con Squoosh.app
- Alternativa: Script PowerShell + ImageMagick
- Implementación elementos `<picture>` con fallback
- Lazy loading estratégico (eager para Hero)
- Reducción esperada: 3.2 MB → 1.3 MB (-60%)

### 5. SEMANA-2-CHECKLIST.md (500+ líneas)
Checklist exhaustivo 4 fases:
- Fase 1: Google My Business (6 horas)
- Fase 2: Google Search Console (4 horas)
- Fase 3: Google Analytics 4 (4 horas)
- Fase 4: Optimización Imágenes WebP (6 horas)
- Métricas esperadas antes/después
- Troubleshooting por servicio
- Criterios de éxito cuantificables

---

## 🔧 Código Preparado

### index.html

**Google Search Console (líneas 20-27):**
```html
<!-- Meta tag verificación GSC comentado -->
<!-- <meta name="google-site-verification" content="TU_CODIGO_AQUI" /> -->
```

**Google Analytics 4 (líneas 29-42):**
```html
<!-- Código gtag.js comentado -->
<!-- Reemplazar G-XXXXXXXXXX con tu ID real (2 ubicaciones) -->
```

### assets/js/main.js
```javascript
// Funciones tracking GA4 comentadas (listas para descomentar):
// - trackCTAClicks()
// - trackScrollDepth()
```

### assets/js/contact.js
```javascript
// Evento form_submit comentado (listo para descomentar)
```

---

## 📋 Tareas del Usuario

### 1. Google My Business (Prioridad: Alta)
- [ ] Crear cuenta: https://www.google.com/business/
- [ ] Seguir pasos GUIA-GOOGLE-MY-BUSINESS.md
- [ ] Verificar propiedad (5-7 días postal o 24-48h dominio)
- [ ] Solicitar 3-5 primeras reseñas
- **Impacto:** +30% visibilidad búsquedas locales

### 2. Google Search Console (Prioridad: Crítica)
- [ ] Crear cuenta: https://search.google.com/search-console
- [ ] Copiar código verificación
- [ ] Descomentar línea 27 index.html + reemplazar código
- [ ] Subir al servidor
- [ ] Enviar sitemap.xml
- [ ] Solicitar indexación manual
- **Impacto:** Control completo indexación Google

### 3. Google Analytics 4 (Prioridad: Crítica)
- [ ] Crear cuenta: https://analytics.google.com
- [ ] Obtener ID medición (G-XXXXXXXXXX)
- [ ] Descomentar líneas 29-42 index.html
- [ ] Reemplazar G-XXXXXXXXXX (2 ubicaciones)
- [ ] Descomentar funciones tracking en main.js y contact.js
- [ ] Subir al servidor
- [ ] Verificar en Tiempo Real
- **Impacto:** Medición completa ROI y conversiones

### 4. Optimización Imágenes (Prioridad: Alta)
- [ ] Descargar 8 imágenes Unsplash (ver keywords en guía)
- [ ] Convertir a WebP: https://squoosh.app/
- [ ] Mover a assets/images/
- [ ] Actualizar index.html con elementos `<picture>`
- [ ] Validar con Lighthouse
- **Impacto:** +7 puntos Performance, LCP <2.5s

---

## 📊 Resultados Esperados

### Performance Improvements
- **Performance Score:** 85/100 → 92/100 (+7)
- **LCP:** 3.2s → 2.4s (-25%, verde ✅)
- **Total Image Size:** 3.2 MB → 1.3 MB (-60%)
- **Page Load Time (3G):** 4.5s → 2.8s (-38%)

### SEO Improvements
- **SEO Score:** 75/100 → 82/100 (+9%)
- **Local SEO:** 0% → Activo (GMB profile)
- **Indexación:** Manual → Automatizada (GSC)
- **Conversiones:** No medibles → Totalmente rastreables (GA4)

### Expected Traffic (30 días)
```
Impresiones orgánicas:    500-1,000/mes
Clics orgánicos:          20-50/mes
CTR:                      4-5%
Vistas GMB:               200+/mes
Llamadas GMB:             10+/mes
Sesiones GA4:             150-300/mes
Conversiones (leads):     5-10/mes
Tasa conversión:          3-5%
```

---

## ✅ Criterio de Éxito

**Semana 2 completada cuando:**
- ✅ GMB verificado con 3+ reseñas
- ✅ GSC indexando 6 URLs correctamente
- ✅ GA4 rastreando 3+ eventos
- ✅ Lighthouse Performance >90
- ✅ SEO Score 82/100
- ✅ LCP <2.5s (verde)

---

## 🔗 Referencias Rápidas

**Google My Business:** https://www.google.com/business/  
**Google Search Console:** https://search.google.com/search-console  
**Google Analytics 4:** https://analytics.google.com  
**Squoosh (WebP):** https://squoosh.app/  
**Lighthouse:** Chrome DevTools → Lighthouse tab

---

**Paso anterior:** [Semana 1 - Fundamentos](../semana-1/)  
**Próximo paso:** Semana 3 - Content Marketing + Schema Enhancements
