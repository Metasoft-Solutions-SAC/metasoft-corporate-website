# ✅ Checklist Semana 3: Contenido y Schemas

**Fecha inicio:** [Tu fecha]  
**Fecha objetivo:** [+5 días]  
**Progreso:** 0% → 100%  
**Meta SEO:** 82/100 → 88/100 (+7%)

---

## 📋 FASE 1: Sección "Por Qué Elegirnos" (4 horas)

### Preparación
- [ ] Leer GUIA-WHY-CHOOSE.md
- [ ] Revisar plantilla: why-choose-section.html
- [ ] Verificar assets/css/why-choose.css existe

### Implementación HTML
- [ ] Abrir index.html línea ~428 (después de sección Nosotros)
- [ ] Copiar contenido de why-choose-section.html
- [ ] Pegar antes de `<section id="servicios">`
- [ ] Verificar indentación correcta
- [ ] Guardar archivo

### Implementación CSS
- [ ] Verificar why-choose.css en assets/css/
- [ ] Agregar link en <head> después de about.css:
  ```html
  <link rel="stylesheet" href="assets/css/why-choose.css">
  ```
- [ ] Guardar archivo

### Contenido - 6 Tarjetas
- [ ] Tarjeta 1: Tecnología Moderna (React, Node.js, Python, Flutter)
- [ ] Tarjeta 2: Metodología Ágil (Scrum, sprints 2 semanas)
- [ ] Tarjeta 3: Soporte Continuo (3 meses gratis, SLA 24h)
- [ ] Tarjeta 4: Código Limpio (Git, Swagger, tests)
- [ ] Tarjeta 5: Presupuesto Fijo (sin costos ocultos)
- [ ] Tarjeta 6: Resultados de Negocio (ROI medible)

### CTA
- [ ] Título: "¿Listo para Comenzar tu Proyecto de Software?"
- [ ] Texto: Consultoría gratuita 30 minutos
- [ ] Botón con data-scroll-to="contacto"

### Validación
- [ ] Preview en navegador (Live Server)
- [ ] Sección visible después de Nosotros
- [ ] 6 tarjetas en grid responsive
- [ ] Hover effects funcionan
- [ ] Botón CTA scroll a contacto
- [ ] Mobile responsive (320px+)
- [ ] Gradientes y colores correctos

**Tiempo:** ~4 horas  
**Palabras:** 400+

---

## 📋 FASE 2: Sección FAQ Completa (6 horas)

### Preparación
- [ ] Leer GUIA-FAQ.md
- [ ] Revisar plantilla: faq-section.html
- [ ] Verificar assets/css/faq.css existe
- [ ] Verificar assets/js/faq.js existe

### Implementación HTML
- [ ] Abrir index.html línea ~887 (antes de sección Contacto)
- [ ] Copiar contenido de faq-section.html
- [ ] Pegar antes de `<section id="contacto">`
- [ ] Verificar indentación correcta

### Implementación CSS
- [ ] Agregar link en <head> después de values.css:
  ```html
  <link rel="stylesheet" href="assets/css/faq.css">
  ```

### Implementación JavaScript
- [ ] Agregar script antes de main.js:
  ```html
  <script src="assets/js/faq.js"></script>
  ```

### FAQPage Schema
- [ ] Copiar Schema de faq-schema.json
- [ ] Pegar en <head> después de WebSite Schema
- [ ] Verificar formato JSON válido
- [ ] 6 preguntas con respuestas completas

### 6 Preguntas Frecuentes
- [ ] FAQ 1: ¿Cuánto cuesta desarrollar software a medida?
  - Respuesta: $3k-8k web, $5k-15k móvil, $10k-50k+ empresarial
- [ ] FAQ 2: ¿Cuánto tiempo toma un proyecto?
  - Respuesta: 2-4 sem landing, 6-12 sem web, 10-16 sem móvil
- [ ] FAQ 3: ¿Qué tecnologías utilizan?
  - Respuesta: React, Vue, Flutter, Node.js, Python, .NET
- [ ] FAQ 4: ¿Dan soporte después del lanzamiento?
  - Respuesta: 3 meses gratis, SLA 24h, planes desde $200/mes
- [ ] FAQ 5: ¿Cómo es el proceso de trabajo?
  - Respuesta: 6 fases - Descubrimiento, Diseño, Desarrollo, QA, Deploy, Soporte
- [ ] FAQ 6: ¿Puedo solicitar cambios durante desarrollo?
  - Respuesta: Sí, distinguimos sin costo vs con costo

### Funcionalidad Acordeón
- [ ] Click en pregunta abre/cierra respuesta
- [ ] aria-expanded cambia correctamente
- [ ] Iconos rotan (chevron down)
- [ ] Smooth scroll si FAQ fuera de vista
- [ ] Keyboard support (Enter/Space)
- [ ] Solo una FAQ abierta a la vez (opcional)

### Validación
- [ ] Preview en navegador
- [ ] 6 FAQs visibles antes de contacto
- [ ] Acordeón funciona (click)
- [ ] Keyboard navigation (Tab + Enter)
- [ ] Mobile responsive
- [ ] Schema válido: https://search.google.com/test/rich-results

**Tiempo:** ~6 horas  
**Palabras:** 800+

---

## 📋 FASE 3: Expandir Contenido Existente (2 horas)

### Sección About (Sobre Nosotros)
- [ ] Abrir index.html sección #nosotros
- [ ] Agregar párrafo adicional después del existente:
  ```
  "Metasoft Solutions es una empresa joven peruana fundada en 2025, 
  especializada en desarrollo de software personalizado para PyMEs y 
  startups. Trabajamos con tecnologías modernas como React, Vue.js, 
  Flutter, Node.js, Python y arquitecturas cloud..."
  ```
- [ ] Total: +200 palabras en About
- [ ] Verificar keywords: Perú, software personalizado, PyMEs, tecnologías modernas

### Sección Services (Servicios)
- [ ] Expandir Service 1 (Software a Medida): +50-80 palabras
  - Mencionar: React, Vue.js, arquitecturas modulares, escalabilidad
- [ ] Expandir Service 2 (Apps Móviles): +50-80 palabras
  - Mencionar: React Native, Flutter, iOS, Android, UX nativa
- [ ] Expandir Service 3 (Plataformas SaaS): +50-80 palabras
  - Mencionar: Multi-tenancy, subscripciones, APIs RESTful
- [ ] Expandir Service 4 (Desarrollo Web): +50-80 palabras
  - Mencionar: SEO, responsive, performance, hosting
- [ ] Expandir Service 5 (Consultoría IT): +50-80 palabras
  - Mencionar: Arquitectura, migración cloud, auditoría técnica
- [ ] Total: +400 palabras en Services

### Validación
- [ ] Total palabras página: >2,000 ✅
- [ ] Densidad keyword principal: 1-2%
- [ ] Keywords técnicas agregadas (React, Python, Flutter, etc)
- [ ] Lecturabilidad Flesch >60
- [ ] Sin keyword stuffing

**Tiempo:** ~2 horas  
**Palabras totales agregadas:** +600

---

## 📋 FASE 4: Service Schemas (4 horas)

### Preparación
- [ ] Leer GUIA-SERVICE-SCHEMAS.md
- [ ] Revisar plantillas: service-schemas.json

### Schema 1: Desarrollo Software a Medida
- [ ] Copiar template Service Schema
- [ ] serviceType: "Desarrollo de Software a Medida"
- [ ] description: "Software empresarial personalizado..."
- [ ] offers.price: "3000" USD
- [ ] hasOfferCatalog: Apps Web, Móviles, Software Empresarial
- [ ] Pegar en <head> después de FAQPage Schema
- [ ] Validar JSON

### Schema 2: Aplicaciones Móviles
- [ ] serviceType: "Desarrollo de Aplicaciones Móviles"
- [ ] description: "Apps nativas iOS/Android..."
- [ ] offers.price: "5000" USD
- [ ] itemOffered: React Native, Flutter, nativas
- [ ] Pegar después de Schema 1
- [ ] Validar JSON

### Schema 3: Plataformas SaaS
- [ ] serviceType: "Desarrollo de Plataformas SaaS"
- [ ] description: "Software como servicio en la nube..."
- [ ] offers.price: "10000" USD
- [ ] itemOffered: Multi-tenancy, APIs, subscripciones
- [ ] Pegar después de Schema 2
- [ ] Validar JSON

### Schema 4: Consultoría IT
- [ ] serviceType: "Consultoría IT y Transformación Digital"
- [ ] description: "Asesoría en arquitectura de software..."
- [ ] offers.priceSpecification: "Consultar"
- [ ] itemOffered: Arquitectura, migración cloud, auditoría
- [ ] Pegar después de Schema 3
- [ ] Validar JSON

### Validación Schemas
- [ ] 4 Service Schemas agregados
- [ ] JSON válido: https://jsonlint.com/
- [ ] Rich Results Test: https://search.google.com/test/rich-results
- [ ] Schemas detectados correctamente
- [ ] Sin errores ni warnings

**Tiempo:** ~4 horas (1h cada schema)

---

## 📋 FASE 5: BreadcrumbList Schema (2 horas)

### Implementación
- [ ] Copiar template de breadcrumb-schema.json
- [ ] Verificar 6 items:
  1. Inicio (https://metasoft.pe)
  2. Sobre Nosotros (#nosotros)
  3. Servicios (#servicios)
  4. Metodología (#metodologia)
  5. Valores (#valores)
  6. Contacto (#contacto)
- [ ] Pegar en <head> después de Service Schemas
- [ ] Validar JSON

### Validación
- [ ] JSON válido
- [ ] Rich Results Test detecta BreadcrumbList
- [ ] 6 items en orden correcto
- [ ] URLs correctas (https://metasoft.pe)

**Tiempo:** ~2 horas

---

## 📋 FASE 6: Testing y Validaciones (2 horas)

### Rich Results Testing
- [ ] Abrir: https://search.google.com/test/rich-results
- [ ] Ingresar URL: https://metasoft.pe
- [ ] Verificar detectados:
  - [ ] Organization Schema ✅
  - [ ] LocalBusiness Schema ✅
  - [ ] WebSite Schema ✅
  - [ ] FAQPage Schema ✅
  - [ ] Service Schema x4 ✅
  - [ ] BreadcrumbList Schema ✅
- [ ] Total: 10 schemas ✅
- [ ] Sin errores ni warnings

### Schema Validator
- [ ] Abrir: https://validator.schema.org/
- [ ] Validar cada schema individualmente
- [ ] Corregir errores si existen
- [ ] Todos válidos ✅

### Performance Check
- [ ] Lighthouse Desktop:
  - [ ] Performance >90
  - [ ] SEO >90
  - [ ] Accessibility >90
  - [ ] Best Practices >90
- [ ] PageSpeed Insights:
  - [ ] Mobile >85
  - [ ] Desktop >90
- [ ] GTmetrix:
  - [ ] Grade A
  - [ ] Performance >85%

### Content Check
- [ ] Word Counter: https://wordcounter.net/
  - [ ] Total palabras: >2,000 ✅
  - [ ] About: +200 palabras
  - [ ] Services: +400 palabras
  - [ ] Why Choose: +400 palabras
  - [ ] FAQ: +800 palabras
- [ ] Keyword Density:
  - [ ] "desarrollo software": 1-2%
  - [ ] "Perú": 0.5-1%
  - [ ] No keyword stuffing
- [ ] Readability:
  - [ ] Flesch Reading Ease >60
  - [ ] Párrafos <3 líneas
  - [ ] Listas y bullet points

### Accessibility
- [ ] WAVE Tool: https://wave.webaim.org/
  - [ ] Sin errores
  - [ ] Contraste WCAG AA
  - [ ] Headings jerárquicos
  - [ ] ARIA labels correctos
- [ ] Keyboard Navigation:
  - [ ] Tab order lógico
  - [ ] FAQ acordeón con Enter/Space
  - [ ] Skip to content funciona
  - [ ] Focus visible

### Mobile Testing
- [ ] Chrome DevTools responsive:
  - [ ] 320px (iPhone SE)
  - [ ] 375px (iPhone X)
  - [ ] 768px (iPad)
  - [ ] 1024px (iPad Pro)
- [ ] Todas las secciones responsive
- [ ] Texto legible sin zoom
- [ ] Botones táctiles >44px
- [ ] No scroll horizontal

**Tiempo:** ~2 horas

---

## 📊 Validación Final Semana 3

### SEO Score
- [ ] Lighthouse SEO ejecutado
- [ ] Score inicial: 82/100
- [ ] Score final: 88/100 ✅
- [ ] Mejora: +7% (+6 puntos)

### Contenido
- [ ] Total palabras: 2,000+ (antes: 1,200)
- [ ] Secciones nuevas: 2 (Why Choose, FAQ)
- [ ] Schemas totales: 10 (antes: 3)
- [ ] FAQs: 6 preguntas completas
- [ ] Service descriptions expandidas

### Technical SEO
- [ ] 10 Schema.org implementations ✅
- [ ] FAQPage eligible for rich snippets
- [ ] BreadcrumbList para navegación
- [ ] Service Schemas para ofertas
- [ ] Sin errores validación

### UX/UI
- [ ] FAQ acordeón funcional
- [ ] Why Choose cards con hover
- [ ] CTA claro y visible
- [ ] Mobile optimizado
- [ ] Keyboard accessible

---

## 🎯 Métricas Esperadas (Post-Semana 3)

### Antes (Pre-Semana 3)
```
SEO Score:           82/100
Total palabras:      1,200
Schemas:             3 (Organization, LocalBusiness, WebSite)
Rich Snippets:       0
Content sections:    5
```

### Después (Post-Semana 3)
```
SEO Score:           88/100 (+7%)
Total palabras:      2,000+ (+67%)
Schemas:             10 (+233%)
Rich Snippets:       FAQ eligible
Content sections:    7 (+2)
```

### Impacto Esperado (30 días)
```
CTR orgánico:        +15% (FAQs en SERPs)
Dwell time:          +30% (más contenido)
Bounce rate:         -10% (más engagement)
Páginas/sesión:      +20% (navegación interna)
Posición keywords:   +3-5 posiciones
Featured snippets:   1-2 FAQs aparecen
```

---

## 🆘 Si Algo Falla

### FAQ acordeón no funciona
- **Solución:** Verificar faq.js cargado después de HTML
- **Debug:** Abrir consola (F12) buscar errores JavaScript

### Schemas no validan
- **Solución:** Usar https://jsonlint.com/ verificar sintaxis
- **Común:** Comas faltantes, comillas mal cerradas

### Sección Why Choose sin estilos
- **Solución:** Verificar why-choose.css linkado en <head>
- **Verificar:** Ruta correcta `assets/css/why-choose.css`

### Performance bajó
- **Solución:** Lazy loading imágenes nuevas si agregas
- **Verificar:** CSS no bloquea render critical

---

## ✅ Criterio de Éxito

**Semana 3 completada cuando:**
- ✅ Sección Why Choose visible y funcional
- ✅ FAQ con 6 preguntas + acordeón JS
- ✅ FAQPage Schema validado
- ✅ 4 Service Schemas implementados
- ✅ BreadcrumbList Schema agregado
- ✅ Total >2,000 palabras
- ✅ Lighthouse SEO 88/100
- ✅ 10 schemas sin errores

---

## 🔗 Referencias Rápidas

**Rich Results Test:** https://search.google.com/test/rich-results  
**Schema Validator:** https://validator.schema.org/  
**JSON Lint:** https://jsonlint.com/  
**Word Counter:** https://wordcounter.net/  
**WAVE Accessibility:** https://wave.webaim.org/  
**Lighthouse:** Chrome DevTools → Lighthouse tab

---

**Paso anterior:** [Semana 2 - Google Tools](../semana-2/)  
**Próximo paso:** Semana 4 - Blog + Link Building

**Fecha inicio:** _______________  
**Fecha completado:** _______________  
**Tiempo total:** ~20 horas  
**Inversión:** $600-900  
**ROI esperado:** +20% tráfico orgánico en 30 días
