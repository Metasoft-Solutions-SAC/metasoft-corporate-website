# 📁 Semana 3: Contenido y Schemas

**Duración:** 5 días  
**Tiempo estimado:** 20 horas  
**Inversión:** $600-900  
**Objetivo:** SEO 82/100 → 88/100 (+7%)

---

## 📄 Archivos en esta Carpeta

### 1. SEMANA-3-CHECKLIST.md (Checklist completo con 6 fases)
Lista exhaustiva de tareas divididas en fases:
- **Fase 1:** Sección "Por Qué Elegirnos" (4 horas)
- **Fase 2:** Sección FAQ completa con Schema (6 horas)
- **Fase 3:** Expandir contenido existente (2 horas)
- **Fase 4:** 4 Service Schemas (4 horas)
- **Fase 5:** BreadcrumbList Schema (2 horas)
- **Fase 6:** Testing y validaciones (2 horas)

### 2. GUIA-WHY-CHOOSE.md
Guía de implementación sección "Por Qué Elegirnos":
- Estructura HTML detallada
- 6 beneficios con contenido completo
- Estilos CSS why-choose.css
- CTA final con consultoría gratuita
- Responsive design y accesibilidad

### 3. why-choose-section.html (Plantilla HTML)
Código HTML completo listo para copiar/pegar:
- 6 tarjetas de beneficios
- Grid responsive
- CTA con botón scroll
- Semántica HTML5 correcta

### 4. faq-schema.json (Schema FAQPage)
Schema.org FAQPage con 6 preguntas:
- Costos de desarrollo
- Tiempos de proyecto
- Tecnologías utilizadas
- Soporte post-lanzamiento
- Proceso de trabajo
- Cambios durante desarrollo

### 5. Archivos CSS Creados
- **assets/css/why-choose.css:** Estilos sección "Por Qué Elegirnos"
- **assets/css/faq.css:** Estilos sección FAQ con acordeón

### 6. Archivos JavaScript Creados
- **assets/js/faq.js:** Funcionalidad acordeón FAQ con accesibilidad

---

## 🎯 Tareas Principales

### ✅ Completado

1. **CSS y JS Creados:**
   - [assets/css/why-choose.css](../assets/css/why-choose.css) ✅
   - [assets/css/faq.css](../assets/css/faq.css) ✅
   - [assets/js/faq.js](../assets/js/faq.js) ✅

2. **Documentación:**
   - [SEMANA-3-CHECKLIST.md](SEMANA-3-CHECKLIST.md) ✅
   - [GUIA-WHY-CHOOSE.md](GUIA-WHY-CHOOSE.md) ✅
   - [why-choose-section.html](why-choose-section.html) ✅
   - [faq-schema.json](faq-schema.json) ✅

3. **Carpeta semana-3/ organizada** ✅

### ⚠️ Pendiente (Requiere acción manual)

Los siguientes pasos deben ser completados por el usuario debido a la extensión del contenido:

#### 1. Agregar Sección "Por Qué Elegirnos"
**Archivo:** index.html  
**Ubicación:** Después de `</section><!-- #nosotros -->` (línea ~428)

**Pasos:**
1. Abrir [why-choose-section.html](why-choose-section.html)
2. Copiar todo el contenido
3. Abrir index.html línea ~428
4. Pegar antes de `<section id="servicios">`
5. Guardar archivo

**Agregar CSS en <head>:**
```html
<!-- Después de about.css -->
<link rel="stylesheet" href="assets/css/why-choose.css">
```

#### 2. Agregar Sección FAQ
**Ubicación:** Antes de `<section id="contacto">` (línea ~887)

**Contenido a agregar:** Ver SEMANA-3-CHECKLIST.md Fase 2 para HTML completo

**Agregar CSS en <head>:**
```html
<!-- Después de values.css -->
<link rel="stylesheet" href="assets/css/faq.css">
```

**Agregar JS antes de </body>:**
```html
<!-- Antes de main.js -->
<script src="assets/js/faq.js"></script>
```

**Agregar FAQPage Schema en <head>:**
1. Abrir [faq-schema.json](faq-schema.json)
2. Copiar contenido
3. Envolver en `<script type="application/ld+json">...</script>`
4. Pegar después de WebSite Schema en index.html

#### 3. Expandir Contenido Existente
**About (+200 palabras):**
- Agregar en sección #nosotros después del texto existente
- Mencionar: empresa joven peruana fundada 2025, PyMEs, startups, tecnologías modernas

**Services (+400 palabras):**
- Expandir cada servicio con 50-80 palabras adicionales
- Agregar keywords técnicas: React, Vue.js, Flutter, Node.js, Python, etc.

#### 4. Service Schemas (4 unidades)
Ver SEMANA-3-CHECKLIST.md Fase 4 para templates completos de:
- Schema 1: Desarrollo Software a Medida
- Schema 2: Aplicaciones Móviles
- Schema 3: Plataformas SaaS
- Schema 4: Consultoría IT

#### 5. BreadcrumbList Schema
Ver SEMANA-3-CHECKLIST.md Fase 5 para template completo

---

## 📊 Resultado Esperado

### Contenido Agregado
```
Sección Why Choose:      400 palabras
Sección FAQ:             800 palabras
About expandido:         +200 palabras
Services expandidos:     +400 palabras
-----------------------------------
TOTAL:                   1,800+ palabras nuevas
```

### Schemas Implementados
```
Existentes:              3 (Organization, LocalBusiness, WebSite)
Nuevos Semana 3:         7 (FAQPage, 4 Service, BreadcrumbList)
-----------------------------------
TOTAL:                   10 schemas ✅
```

### SEO Improvements
```
SEO Score:               82/100 → 88/100 (+7%)
Total palabras:          1,200 → 2,000+ (+67%)
Rich Snippets:           FAQ eligible
Schemas totales:         3 → 10 (+233%)
Secciones contenido:     5 → 7 (+2)
```

### Performance
```
Lighthouse Performance:  92/100 (mantener)
Lighthouse SEO:          88/100 (+6 puntos)
Lighthouse Accessibility: 95/100 (mantener)
Page Load Time:          <3s
LCP:                     <2.5s
```

---

## 🔗 Flujo de Implementación

```
1. Revisar SEMANA-3-CHECKLIST.md
   ↓
2. Crear/verificar CSS y JS (✅ COMPLETADO)
   ↓
3. Copiar why-choose-section.html → index.html
   ↓
4. Agregar why-choose.css link en <head>
   ↓
5. Crear sección FAQ en index.html (ver checklist)
   ↓
6. Agregar faq.css y faq.js
   ↓
7. Agregar FAQPage Schema de faq-schema.json
   ↓
8. Expandir About (+200 palabras)
   ↓
9. Expandir Services (+400 palabras)
   ↓
10. Agregar 4 Service Schemas (ver checklist)
   ↓
11. Agregar BreadcrumbList Schema
   ↓
12. Validar con Rich Results Test
   ↓
13. Performance check con Lighthouse
   ↓
14. ✅ Semana 3 completada
```

---

## 🧪 Validación

### Herramientas de Testing
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org/
- **JSON Lint:** https://jsonlint.com/
- **Lighthouse:** Chrome DevTools
- **Word Counter:** https://wordcounter.net/
- **WAVE Accessibility:** https://wave.webaim.org/

### Checklist de Validación
- [ ] 10 schemas detectados sin errores
- [ ] FAQ acordeón funciona (click + keyboard)
- [ ] Why Choose cards responsive
- [ ] Total >2,000 palabras
- [ ] Lighthouse SEO 88/100
- [ ] Performance >90/100
- [ ] Accessibility >90/100
- [ ] Mobile responsive 320px+

---

## 📈 Impacto Esperado (30 días)

### Tráfico Orgánico
```
Impresiones:             1,000 → 1,500 (+50%)
Clics:                   50 → 80 (+60%)
CTR:                     5% → 5.3% (+6%)
Posición promedio:       15 → 10-12 (+3-5 posiciones)
```

### Engagement
```
Dwell time:              2min → 2.6min (+30%)
Bounce rate:             55% → 50% (-9%)
Páginas/sesión:          2.5 → 3 (+20%)
```

### Rich Snippets
```
FAQs en SERPs:           1-2 preguntas aparecen
Featured Snippets:       Candidato para 6 queries
People Also Ask:         Mayor probabilidad de aparecer
```

---

## 🆘 Soporte

**Problemas comunes:**
- FAQ no funciona → Verificar faq.js cargado
- Schemas no validan → Usar jsonlint.com
- Estilos no aparecen → Verificar rutas CSS
- Performance bajó → Verificar lazy loading

**Contacto:** Ver SEMANA-3-CHECKLIST.md sección "Si Algo Falla"

---

**Paso anterior:** [Semana 2 - Google Tools](../semana-2/)  
**Próximo paso:** Semana 4 - Blog + Link Building

**Estado:** 🟡 CSS/JS creados, HTML pendiente de integración  
**Progreso:** 30% completado (archivos base), 70% pendiente (integración HTML)
