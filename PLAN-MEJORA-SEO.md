# 📋 Plan de Mejora SEO - Metasoft Solutions
**Roadmap de Implementación: 12 Semanas**  
**Objetivo:** De 58/100 a 92/100 en SEO Score

---

## 🎯 OBJETIVOS SMART

### Mes 1 (Semanas 1-4)
- ✅ 100% páginas indexadas con rich snippets
- ✅ Posición 25-30 para 3 keywords principales
- ✅ +25% CTR orgánico
- ✅ 200 visitas orgánicas/mes
- ✅ 4-6 leads orgánicos

### Mes 2 (Semanas 5-8)
- ✅ Posición 15-20 para keywords principales
- ✅ +300 visitas orgánicas/mes
- ✅ 8-12 leads orgánicos
- ✅ Google My Business con 10+ reseñas

### Mes 3 (Semanas 9-12)
- ✅ Posición 8-12 (página 1) para keywords principales
- ✅ +600 visitas orgánicas/mes
- ✅ 15-20 leads orgánicos
- ✅ Blog con 12 artículos publicados
- ✅ 20+ backlinks de calidad

---

## ⚡ SEMANA 1: Fundamentos Críticos (40 horas)

### 🎯 Objetivo: SEO 58/100 → 75/100

---

### Día 1-2: Meta Tags Core (5 horas)

#### 1. Title Tag (30 min)
```html
<!-- index.html línea 30 -->

ACTUAL:
<title>Metasoft Solutions</title>

CAMBIAR A:
<title>Desarrollo de Software a Medida en Perú | Apps Web y Móviles | Metasoft</title>
```

**Verificación:**
- [x] 58 caracteres (óptimo 50-60)
- [x] Incluye keyword principal "desarrollo software"
- [x] Incluye ubicación "Perú"
- [x] Incluye diferenciador "a medida"
- [x] Incluye marca "Metasoft" al final

---

#### 2. Meta Description (30 min)
```html
ACTUAL (85 caracteres):
<meta name="description" content="Metasoft Solutions - Software personalizado que simplifica procesos y hace crecer tu negocio">

CAMBIAR A (155 caracteres):
<meta name="description" content="Desarrollo de software personalizado en Perú. Aplicaciones web, móviles y empresariales con tecnología moderna. +100% compromiso con calidad. ¡Cotiza gratis!">
```

**Verificación:**
- [x] 155 caracteres (óptimo 150-160)
- [x] Incluye ubicación "Perú"
- [x] Lista servicios principales
- [x] Menciona beneficio "tecnología moderna"
- [x] CTA "¡Cotiza gratis!"

---

#### 3. Canonical URL (15 min)
```html
<!-- Agregar después de línea 8 -->
<link rel="canonical" href="https://metasoft.pe/">
```

---

#### 4. Preconnect y DNS-prefetch (15 min)
```html
<!-- Agregar después de canonical -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://images.unsplash.com">
```

---

#### 5. Keywords Meta Tag Actualizado (15 min)
```html
ACTUAL:
<meta name="keywords" content="software a medida, desarrollo web, aplicaciones móviles, soluciones digitales, automatización">

CAMBIAR A:
<meta name="keywords" content="desarrollo software peru, software a medida lima, desarrollo web empresarial, aplicaciones moviles peru, transformacion digital, software empresarial peru, desarrollo apps, consultoria it peru, software personalizado pymes">
```

---

### Día 2-3: Schema.org JSON-LD (6 horas)

#### 1. Organization Schema (2 horas)
```html
<!-- Agregar antes de </head> -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Metasoft Solutions SAC",
  "alternateName": "Metasoft",
  "url": "https://metasoft.pe",
  "logo": "https://metasoft.pe/assets/images/logo.png",
  "description": "Desarrollo de software personalizado en Perú. Apps web, móviles y empresariales.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lima",
    "addressRegion": "Lima",
    "addressCountry": "PE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+51-992-016-075",
    "contactType": "sales",
    "email": "contacto@metasoft.pe",
    "availableLanguage": ["Spanish", "English"],
    "areaServed": "PE"
  },
  "sameAs": [
    "https://www.linkedin.com/company/metasoft-solutions",
    "https://twitter.com/metasoft_pe",
    "https://github.com/metasoft-solutions"
  ],
  "founder": {
    "@type": "Organization",
    "name": "Metasoft Founders"
  },
  "foundingDate": "2025",
  "slogan": "Tecnología que impulsa tus metas",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "2-5"
  },
  "knowsAbout": [
    "Desarrollo de Software",
    "Desarrollo Web",
    "Aplicaciones Móviles",
    "Cloud Computing",
    "Transformación Digital",
    "Metodologías Ágiles"
  ]
}
</script>
```

---

#### 2. LocalBusiness Schema (2 horas)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Metasoft Solutions",
  "image": "https://metasoft.pe/assets/images/logo.png",
  "@id": "https://metasoft.pe",
  "url": "https://metasoft.pe",
  "telephone": "+51-992-016-075",
  "email": "contacto@metasoft.pe",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lima",
    "addressLocality": "Lima",
    "addressRegion": "Lima",
    "postalCode": "15000",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -12.0464,
    "longitude": -77.0428
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "PEN, USD",
  "description": "Empresa joven peruana especializada en desarrollo de software personalizado con tecnología moderna"
}
</script>
```

---

#### 3. WebSite Schema con SearchAction (1 hora)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Metasoft Solutions",
  "url": "https://metasoft.pe",
  "description": "Desarrollo de software personalizado en Perú",
  "publisher": {
    "@type": "Organization",
    "name": "Metasoft Solutions SAC"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://metasoft.pe/buscar?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "es-PE"
}
</script>
```

**Validación:**
1. Ir a: https://search.google.com/test/rich-results
2. Pegar URL: https://metasoft.pe
3. Verificar que detecta los 3 schemas
4. Corregir errores si hay

**Tiempo total:** 6 horas

---

### Día 3-4: Open Graph y Twitter Cards (2 horas)

#### 1. Open Graph Completo (1 hora)
```html
<!-- Reemplazar las 3 líneas actuales por estas 11 -->

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://metasoft.pe/">
<meta property="og:title" content="Desarrollo de Software a Medida en Perú | Metasoft">
<meta property="og:description" content="Software personalizado: apps web, móviles y empresariales. Tecnología moderna, soporte continuo y metodología ágil.">
<meta property="og:image" content="https://metasoft.pe/assets/images/og-image.jpg">
<meta property="og:image:secure_url" content="https://metasoft.pe/assets/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Metasoft Solutions - Desarrollo de Software Empresarial en Perú">
<meta property="og:site_name" content="Metasoft Solutions">
<meta property="og:locale" content="es_PE">
<meta property="og:locale:alternate" content="en_US">
```

---

#### 2. Twitter Cards (30 min)
```html
<!-- Agregar después de Open Graph -->

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@metasoft_pe">
<meta name="twitter:creator" content="@metasoft_pe">
<meta name="twitter:title" content="Desarrollo de Software a Medida en Perú">
<meta name="twitter:description" content="Software personalizado: apps web, móviles y empresariales. Tecnología moderna y soporte continuo.">
<meta name="twitter:image" content="https://metasoft.pe/assets/images/twitter-card.jpg">
<meta name="twitter:image:alt" content="Metasoft Solutions - Desarrollo Software Perú">
```

**Validación:**
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: Share en perfil personal y verificar preview

---

### Día 4-5: Imágenes Social Media (3 horas)

#### 1. Crear og-image.jpg (2 horas)
**Especificaciones:**
- Dimensiones: 1200x630px
- Formato: JPG (optimizado <300KB)
- Colores: Azul corporativo (#1A6BC2, #4BBBEC)

**Contenido:**
- Logo Metasoft (centrado superior)
- Texto principal: "Desarrollo de Software a Medida"
- Subtexto: "Tecnología Moderna | Perú"
- Fondo: Gradiente azul con elementos geométricos sutiles

**Herramientas:**
- Canva: https://www.canva.com/templates/EAEoeKBCbs4
- Figma: Plantilla OG Image
- Photoshop: Template 1200x630

**Ubicación:** `/assets/images/og-image.jpg`

---

#### 2. Crear twitter-card.jpg (1 hora)
**Especificaciones:**
- Dimensiones: 1200x600px
- Formato: JPG (<5MB, optimizar a <1MB)
- Similar a og-image pero aspecto 2:1

**Ubicación:** `/assets/images/twitter-card.jpg`

---

### Día 5: Optimización H1 y H2 (2 horas)

#### 1. H1 Principal (15 min)
```html
<!-- index.html línea ~113 -->

ACTUAL:
<h1>Tecnología que impulsa <span class="gradient-text"> tus metas</span></h1>

CAMBIAR A:
<h1>Desarrollo de Software a Medida en <span class="gradient-text">Perú</span></h1>

O ALTERNATIVA:
<h1>Software Empresarial Personalizado | <span class="gradient-text">Metasoft Solutions</span></h1>
```

---

#### 2. H2 Optimizados con Keywords (1.5 horas)

```html
<!-- Sección Nosotros (línea ~169) -->
ACTUAL: <h2>Software que impulsa el crecimiento de tu negocio</h2>
CAMBIAR: <h2>Desarrollo de Software Personalizado para Empresas en Perú</h2>

<!-- Sección Servicios (línea ~254) -->
ACTUAL: <h2>Soluciones completas para tu transformación digital</h2>
CAMBIAR: <h2>Servicios de Desarrollo de Software y Transformación Digital</h2>

<!-- Sección Metodología (línea ~402) -->
ACTUAL: <h2>Nuestro proceso de trabajo</h2>
CAMBIAR: <h2>Metodología Ágil de Desarrollo de Software</h2>

<!-- Sección Valores (línea ~563) -->
ACTUAL: <h2>Los principios que guían nuestro trabajo</h2>
CAMBIAR: <h2>Valores y Compromiso en Desarrollo de Software Empresarial</h2>

<!-- Sección Contacto (línea ~723) -->
ACTUAL: <h2>Iniciemos tu proyecto juntos</h2>
CAMBIAR: <h2>Solicita Cotización para tu Proyecto de Software</h2>
```

---

### Día 6: robots.txt y Validaciones (2 horas)

#### 1. Corregir robots.txt (15 min)
```plaintext
# robots.txt actualizado

User-agent: *
Allow: /

# Permitir crawling general
Disallow: /admin/
Disallow: /private/

# CRÍTICO: Permitir parámetros UTM para tracking
Allow: /*?utm_*
Allow: /*?ref=*
Allow: /*?source=*
Allow: /*?fbclid=*
Allow: /*?gclid=*

# Permitir assets
Allow: /assets/css/
Allow: /assets/js/
Allow: /assets/images/

# Bloquear archivos innecesarios
Disallow: /*.md$

# Sitemap
Sitemap: https://metasoft.pe/sitemap.xml

# Crawl-delay (opcional, solo si servidor es lento)
# Crawl-delay: 1
```

---

#### 2. Validaciones Finales (1.5 horas)

**a) Schema.org Rich Results Test**
- URL: https://search.google.com/test/rich-results
- Verificar: Organization, LocalBusiness, WebSite schemas detectados
- Captura: Guardar PDF del resultado

**b) Open Graph Debugger**
- Facebook: https://developers.facebook.com/tools/debug/
- Verificar: Imagen preview, título, descripción
- Refrescar caché si es necesario

**c) Twitter Card Validator**
- URL: https://cards-dev.twitter.com/validator
- Verificar: Summary large image, preview correcto

**d) Google Mobile-Friendly Test**
- URL: https://search.google.com/test/mobile-friendly
- Verificar: 100% mobile-friendly

**e) PageSpeed Insights**
- URL: https://pagespeed.web.dev/
- Verificar: Performance 85+, SEO 90+

---

### Día 7: Alt Text y Optimizaciones Menores (2 horas)

#### 1. Optimizar Alt Text (1 hora)
```html
<!-- Hero Background -->
ACTUAL: alt="Technology Background"
CAMBIAR: alt="Desarrollo de software empresarial en Perú - Tecnología moderna Metasoft Solutions"

<!-- About Image -->
ACTUAL: alt="Equipo de desarrollo de software..."
MEJORAR: alt="Equipo desarrollo software Metasoft Solutions Lima Perú trabajando proyectos transformación digital empresarial"

<!-- Service 1 -->
ACTUAL: alt="Desarrollo de software a medida..."
MEJORAR: alt="Desarrollo software a medida personalizado empresas PyMEs Perú - Metasoft Solutions"

<!-- Service 2 -->
ACTUAL: alt="Desarrollo de aplicaciones móviles..."
MEJORAR: alt="Desarrollo aplicaciones móviles iOS Android empresas Lima Perú - Apps nativas híbridas"

<!-- Service 3 -->
ACTUAL: alt="Desarrollo de plataformas SaaS..."
MEJORAR: alt="Desarrollo plataformas SaaS cloud software como servicio Perú - Metasoft"

<!-- Service 4 -->
ACTUAL: alt="Desarrollo web corporativo..."
MEJORAR: alt="Desarrollo web corporativo landing pages empresariales Perú - Diseño responsive"

<!-- Service 5 -->
ACTUAL: alt="Consultoría IT transformación digital..."
MEJORAR: alt="Consultoría IT transformación digital empresas Perú Lima - Asesoría tecnológica"
```

---

#### 2. Lang Attributes (30 min)
```html
<!-- Verificar en <html> tag -->
<html lang="es">

<!-- Agregar hreflang si hay versión en inglés (futuro) -->
<link rel="alternate" hreflang="es-pe" href="https://metasoft.pe/" />
<link rel="alternate" hreflang="en" href="https://metasoft.pe/en/" />
<link rel="alternate" hreflang="x-default" href="https://metasoft.pe/" />
```

---

### Checklist Final Semana 1

- [ ] Title tag optimizado (58 caracteres)
- [ ] Meta description optimizada (155 caracteres)
- [ ] Canonical URL agregado
- [ ] Preconnect y DNS-prefetch
- [ ] Keywords meta tag actualizado
- [ ] Organization Schema implementado
- [ ] LocalBusiness Schema implementado
- [ ] WebSite Schema implementado
- [ ] Open Graph 11/11 tags completos
- [ ] Twitter Cards 7/7 tags completos
- [ ] og-image.jpg creado y subido
- [ ] twitter-card.jpg creado y subido
- [ ] H1 optimizado con keyword
- [ ] 5 H2 optimizados
- [ ] robots.txt corregido
- [ ] Alt text optimizado (8 imágenes)
- [ ] Schema.org validado (Rich Results Test)
- [ ] Open Graph validado (Facebook Debugger)
- [ ] Twitter Cards validado
- [ ] Mobile-friendly verificado
- [ ] PageSpeed 85+ verificado

**Resultado esperado:** SEO 58/100 → 75/100 (+29%)

---

## 🔥 SEMANA 2: Google Tools y Optimización (20 horas)

### 🎯 Objetivo: SEO 75/100 → 82/100

---

### Día 8-9: Google My Business (6 horas)

#### 1. Crear Perfil GMB (2 horas)
1. Ir a: https://business.google.com
2. Crear cuenta con: contacto@metasoft.pe
3. Agregar negocio: "Metasoft Solutions SAC"
4. Categoría principal: "Empresa de software"
5. Categorías secundarias:
   - Desarrollador de aplicaciones móviles
   - Diseñador de páginas web
   - Consultor informático

---

#### 2. Completar Información (2 horas)
**Datos básicos:**
- Nombre: Metasoft Solutions SAC
- Dirección: Lima, Perú (específica si tienes oficina)
- Teléfono: +51 992 016 075
- Sitio web: https://metasoft.pe
- Horario: Lun-Vie 9:00-18:00

**Descripción (750 caracteres max):**
```
Metasoft Solutions es una empresa joven peruana especializada en desarrollo 
de software personalizado. Ofrecemos soluciones de transformación digital para 
empresas y startups: desarrollo de aplicaciones web y móviles, software 
empresarial a medida, plataformas SaaS y consultoría IT.

Trabajamos con tecnología moderna (React, Node.js, Python, Flutter) y 
metodología ágil, garantizando software escalable, seguro y de calidad 
profesional. Acompañamos cada proyecto desde el descubrimiento hasta el 
soporte continuo post-lanzamiento.

Servicios:
✓ Desarrollo de software a medida
✓ Aplicaciones móviles (iOS/Android)
✓ Desarrollo web corporativo y landing pages
✓ Plataformas SaaS en la nube
✓ Consultoría y transformación digital

Solicita tu cotización gratuita. ¡Hablemos de tu proyecto!
```

**Atributos:**
- [x] Propiedad de mujeres
- [x] Identificación LGBTQ+
- [x] Asistencia en idiomas: Español, Inglés
- [x] Abierto a todas las identidades de género

---

#### 3. Agregar Fotos (1 hora)
**Requeridas:**
- Logo (mín. 250x250px)
- Foto portada (mín. 1080x608px)
- 10 fotos adicionales:
  - Equipo trabajando (3)
  - Oficina/espacio trabajo (2)
  - Proyectos en pantalla (3)
  - Logo/branding (2)

**Fuentes:**
- Unsplash: https://unsplash.com/s/photos/software-team
- Pexels: https://www.pexels.com/search/office/
- Fotos propias (si existen)

---

#### 4. Verificación (1 hora)
- Método: Postal (5-7 días)
- Alternativo: Llamada telefónica (si disponible)
- Verificar dominio web (más rápido)

---

### Día 9-10: Google Search Console (4 horas)

#### 1. Verificar Propiedad (1 hora)
**Método HTML Tag (recomendado):**
```html
<!-- Agregar en <head> de index.html -->
<meta name="google-site-verification" content="CÓDIGO_GOOGLE" />
```

**Pasos:**
1. https://search.google.com/search-console
2. Agregar propiedad: https://metasoft.pe
3. Método: Etiqueta HTML
4. Copiar código
5. Pegar en index.html <head>
6. Desplegar sitio
7. Verificar

---

#### 2. Enviar Sitemap (30 min)
1. Ir a: Sitemaps
2. Agregar: https://metasoft.pe/sitemap.xml
3. Enviar
4. Esperar indexación (24-48 horas)

---

#### 3. Solicitar Indexación Manual (30 min)
1. Herramienta de inspección de URLs
2. Ingresar: https://metasoft.pe
3. "Solicitar indexación"
4. Esperar: 1-7 días

---

#### 4. Configurar Alertas (1 hora)
- Errores de cobertura
- Problemas de seguridad
- Mejoras de rendimiento
- Correo: contacto@metasoft.pe

---

#### 5. Enviar Enlace a GMB (30 min)
En Search Console:
1. Configuración → Asociaciones
2. Asociar con Google My Business
3. Vincular perfil GMB

---

### Día 10-11: Google Analytics 4 (4 horas)

#### 1. Crear Cuenta GA4 (1 hora)
1. https://analytics.google.com
2. Crear cuenta: "Metasoft Solutions"
3. Propiedad: "Metasoft Corporate Website"
4. Zona horaria: (GMT-5) Lima
5. Moneda: PEN - Nuevo Sol Peruano

---

#### 2. Instalar gtag.js (30 min)
```html
<!-- Agregar en <head> ANTES de otros scripts -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

---

#### 3. Configurar Eventos (2 hours)

**Evento 1: Form Submit**
```javascript
// En contact.js después de envío exitoso
gtag('event', 'form_submit', {
  'event_category': 'Contact',
  'event_label': 'Contact Form',
  'value': 1
});
```

**Evento 2: Scroll 90%**
```javascript
// En main.js
let scrollTracked = false;
window.addEventListener('scroll', function() {
  if (!scrollTracked && (window.scrollY + window.innerHeight) >= document.body.offsetHeight * 0.9) {
    gtag('event', 'scroll', {
      'event_category': 'Engagement',
      'event_label': 'Scroll 90%',
      'value': 90
    });
    scrollTracked = true;
  }
});
```

**Evento 3: Click CTA**
```javascript
// En hero.js y otros botones CTA
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', function() {
    gtag('event', 'cta_click', {
      'event_category': 'CTA',
      'event_label': this.textContent.trim(),
      'value': 1
    });
  });
});
```

---

#### 4. Configurar Conversiones (30 min)
En GA4:
1. Eventos → Crear evento → Marcar como conversión:
   - form_submit (principal)
   - cta_click
   - phone_click
   - email_click

---

### Día 11-12: Optimización Imágenes (6 horas)

#### 1. Descargar Imágenes (1 hora)
Descargar las 8 imágenes actuales de Unsplash:
- Hero background
- About team
- Service 1-5 images

Guardar en: `/temp-images/original/`

---

#### 2. Convertir a WebP (2 horas)
**Herramientas:**
- Squoosh: https://squoosh.app
- CloudConvert: https://cloudconvert.com/jpg-to-webp

**Settings Squoosh:**
- Formato: WebP
- Calidad: 80-85%
- Resize: Mantener proporciones
- Optimizar: Enabled

**Resultado esperado:**
- JPG 800KB → WebP 320KB (60% reducción)

Guardar en: `/assets/images/webp/`

---

#### 3. Crear Fallback JPG (1 hora)
Mantener versiones JPG optimizadas:
- Compresión: 75-80%
- Guardar en: `/assets/images/jpg/`

---

#### 4. Implementar picture Elements (2 horas)
```html
<!-- Hero Background -->
<picture>
  <source srcset="assets/images/webp/hero-bg.webp" type="image/webp">
  <source srcset="assets/images/jpg/hero-bg.jpg" type="image/jpeg">
  <img src="assets/images/jpg/hero-bg.jpg" 
       alt="Desarrollo de software empresarial en Perú - Tecnología moderna Metasoft Solutions"
       width="1920"
       height="1080"
       loading="eager">
</picture>

<!-- About Image -->
<picture>
  <source srcset="assets/images/webp/team-software-development.webp" type="image/webp">
  <source srcset="assets/images/jpg/team-software-development.jpg" type="image/jpeg">
  <img src="assets/images/jpg/team-software-development.jpg" 
       alt="Equipo desarrollo software Metasoft Solutions Lima Perú"
       width="1080"
       height="720"
       loading="lazy">
</picture>

<!-- Repetir para las 8 imágenes -->
```

---

### Checklist Final Semana 2

- [ ] Google My Business creado y completo
- [ ] GMB: 10 fotos subidas
- [ ] GMB: Descripción 750 caracteres
- [ ] GMB: Verificación iniciada (postal)
- [ ] GMB: Primeras 3 reseñas solicitadas
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a GSC
- [ ] Indexación solicitada manualmente
- [ ] Alertas configuradas
- [ ] Google Analytics 4 instalado
- [ ] GA4: 3 eventos configurados
- [ ] GA4: Conversiones marcadas
- [ ] 8 imágenes descargadas
- [ ] 8 imágenes convertidas a WebP
- [ ] 8 JPG optimizados como fallback
- [ ] 8 picture elements implementados
- [ ] Validar LCP <2.5s

**Resultado esperado:** SEO 75/100 → 82/100 (+9%)

---

## 🟡 SEMANA 3: Contenido y Schemas (20 horas)

### 🎯 Objetivo: SEO 82/100 → 88/100

---

### Día 15-17: Expansión de Contenido (12 horas)

#### 1. Sección "Por Qué Elegirnos" (4 horas)
**Ubicación:** Después de sección "Sobre Nosotros"

**Contenido (400 palabras):**
```html
<section id="por-que" class="why-choose">
  <div class="container">
    <div class="why-header">
      <h2>¿Por Qué Elegir Metasoft Solutions para tu Desarrollo de Software?</h2>
      <p class="why-intro">
        En un mercado saturado de proveedores, destacamos por nuestra combinación única 
        de tecnología moderna, procesos certificados y acompañamiento continuo.
      </p>
    </div>

    <div class="why-grid">
      <div class="why-card">
        <h3>Tecnología Moderna y Actualizada</h3>
        <p>Trabajamos con las últimas tecnologías: React, Node.js, Python, Flutter. 
        No usamos frameworks obsoletos que limiten la evolución de tu software.</p>
        <ul>
          <li>Stack tecnológico actualizado 2025</li>
          <li>Arquitecturas escalables cloud-native</li>
          <li>DevOps y CI/CD integrados</li>
        </ul>
      </div>

      <div class="why-card">
        <h3>Metodología Ágil Transparente</h3>
        <p>Aplicamos Scrum adaptado a proyectos de software empresarial. Entregas 
        iterativas cada 2 semanas con demo funcional.</p>
        <ul>
          <li>Sprints de 2 semanas</li>
          <li>Daily standups</li>
          <li>Retrospectivas y mejora continua</li>
        </ul>
      </div>

      <div class="why-card">
        <h3>Soporte Continuo Post-Lanzamiento</h3>
        <p>No te abandonamos después del deploy. Incluimos 3 meses de soporte 
        técnico, actualizaciones y resolución de incidencias.</p>
        <ul>
          <li>SLA de 24 horas para bugs críticos</li>
          <li>Actualizaciones de seguridad</li>
          <li>Capacitación de usuarios</li>
        </ul>
      </div>

      <div class="why-card">
        <h3>Código Limpio y Documentado</h3>
        <p>Entregamos código fuente completo, documentación técnica y diagramas 
        de arquitectura. Sin vendor lock-in, eres dueño al 100%.</p>
        <ul>
          <li>Repositorio Git privado</li>
          <li>Documentación API con Swagger</li>
          <li>Tests automatizados incluidos</li>
        </ul>
      </div>

      <div class="why-card">
        <h3>Presupuesto Fijo Sin Sorpresas</h3>
        <p>Cotización detallada con alcance claro. No hay costos ocultos ni 
        cambios inesperados en el presupuesto acordado.</p>
        <ul>
          <li>Contrato con alcance definido</li>
          <li>Change requests documentados</li>
          <li>Hitos de pago claros</li>
        </ul>
      </div>

      <div class="why-card">
        <h3>Enfoque en Resultados de Negocio</h3>
        <p>No solo desarrollamos código, resolvemos problemas de negocio. Cada 
        línea de código está diseñada para generar impacto real en tu empresa.</p>
        <ul>
          <li>ROI medible desde el primer sprint</li>
          <li>Métricas de éxito definidas al inicio</li>
          <li>Iteraciones basadas en feedback real</li>
        </ul>
      </div>
    </div>

    <div class="why-cta">
      <h3>¿Listo para Comenzar tu Proyecto de Software?</h3>
      <p>Agenda una consultoría gratuita de 30 minutos. Analizamos tu necesidad, 
      te asesoramos sobre la mejor solución técnica y entregamos una propuesta 
      detallada sin compromiso.</p>
      <button class="btn-primary" data-scroll-to="contacto">
        Solicitar Consultoría Gratuita
      </button>
    </div>
  </div>
</section>
```

**CSS necesario:** `why-choose.css` (crear nuevo archivo)

**Tiempo:** 4 horas (contenido + CSS + integración)

---

#### 2. Sección FAQ (6 horas)

**Ubicación:** Antes de sección "Contacto"

**Contenido (800 palabras + Schema):**
```html
<section id="faq" class="faq">
  <div class="container">
    <div class="faq-header">
      <h2>Preguntas Frecuentes sobre Desarrollo de Software</h2>
      <p class="faq-intro">
        Resolvemos las dudas más comunes sobre nuestros servicios, procesos 
        y metodología de trabajo.
      </p>
    </div>

    <div class="faq-grid">
      <!-- FAQ 1 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>¿Cuánto cuesta desarrollar un software a medida?</span>
          <svg class="faq-icon" width="24" height="24"><!-- icon --></svg>
        </button>
        <div class="faq-answer" hidden>
          <p>
            El costo depende de la complejidad, funcionalidades y tecnologías. 
            Como referencia:
          </p>
          <ul>
            <li><strong>Aplicación web básica:</strong> $3,000 - $8,000 USD</li>
            <li><strong>App móvil nativa:</strong> $5,000 - $15,000 USD</li>
            <li><strong>Software empresarial:</strong> $10,000 - $50,000+ USD</li>
            <li><strong>Plataforma SaaS:</strong> $20,000 - $100,000+ USD</li>
          </ul>
          <p>
            Ofrecemos cotización gratuita detallada después de la consultoría inicial. 
            Incluimos cronograma, entregables y forma de pago.
          </p>
        </div>
      </div>

      <!-- FAQ 2 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>¿Cuánto tiempo toma desarrollar un proyecto?</span>
          <svg class="faq-icon" width="24" height="24"><!-- icon --></svg>
        </button>
        <div class="faq-answer" hidden>
          <p>Tiempos promedio según tipo de proyecto:</p>
          <ul>
            <li><strong>Landing page corporativa:</strong> 2-4 semanas</li>
            <li><strong>Aplicación web CRUD:</strong> 6-12 semanas</li>
            <li><strong>App móvil (iOS + Android):</strong> 10-16 semanas</li>
            <li><strong>Software empresarial complejo:</strong> 20-40 semanas</li>
          </ul>
          <p>
            Trabajamos con sprints de 2 semanas. Recibes avances funcionales 
            cada sprint para validar y ajustar.
          </p>
        </div>
      </div>

      <!-- FAQ 3 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>¿Qué tecnologías utilizan?</span>
          <svg class="faq-icon" width="24" height="24"><!-- icon --></svg>
        </button>
        <div class="faq-answer" hidden>
          <p>Trabajamos con tecnologías modernas según las necesidades del proyecto:</p>
          <p><strong>Frontend:</strong></p>
          <ul>
            <li>React.js, Vue.js, Next.js para web</li>
            <li>React Native, Flutter para móviles</li>
            <li>HTML5, CSS3, JavaScript vanilla para sitios estáticos</li>
          </ul>
          <p><strong>Backend:</strong></p>
          <ul>
            <li>Node.js (Express, NestJS)</li>
            <li>Python (Django, FastAPI)</li>
            <li>.NET Core para aplicaciones enterprise</li>
          </ul>
          <p><strong>Bases de datos:</strong></p>
          <ul>
            <li>PostgreSQL, MySQL para relacionales</li>
            <li>MongoDB para NoSQL</li>
            <li>Redis para caché</li>
          </ul>
          <p><strong>Cloud:</strong> AWS, Google Cloud, Azure, Digital Ocean</p>
        </div>
      </div>

      <!-- FAQ 4 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>¿Dan soporte después del lanzamiento?</span>
          <svg class="faq-icon" width="24" height="24"><!-- icon --></svg>
        </button>
        <div class="faq-answer" hidden>
          <p>
            Sí, incluimos <strong>3 meses de soporte técnico gratuito</strong> 
            después del despliegue:
          </p>
          <ul>
            <li>Corrección de bugs sin costo</li>
            <li>Actualizaciones de seguridad</li>
            <li>Ajustes menores de UI/UX</li>
            <li>Soporte técnico por email/WhatsApp</li>
            <li>SLA de 24 horas para incidencias críticas</li>
          </ul>
          <p>
            Después de los 3 meses, ofrecemos planes de mantenimiento desde 
            $200/mes que incluyen:
          </p>
          <ul>
            <li>Monitoreo 24/7</li>
            <li>Backups automáticos</li>
            <li>Actualizaciones de dependencias</li>
            <li>10 horas de mejoras/mes</li>
          </ul>
        </div>
      </div>

      <!-- FAQ 5 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>¿Cómo es el proceso de trabajo?</span>
          <svg class="faq-icon" width="24" height="24"><!-- icon --></svg>
        </button>
        <div class="faq-answer" hidden>
          <p>Seguimos una metodología ágil en 6 fases:</p>
          <ol>
            <li><strong>Descubrimiento (1-2 semanas):</strong> Entendemos tu negocio, 
            usuarios y objetivos. Entregamos propuesta técnica y presupuesto.</li>
            <li><strong>Diseño (2-3 semanas):</strong> Creamos wireframes, prototipos 
            interactivos y arquitectura técnica.</li>
            <li><strong>Desarrollo (60-80% del tiempo):</strong> Sprints de 2 semanas 
            con demos funcionales cada sprint.</li>
            <li><strong>Pruebas (2 semanas):</strong> QA exhaustivo, tests automatizados 
            y corrección de bugs.</li>
            <li><strong>Despliegue (1 semana):</strong> Deploy en producción, DNS, 
            SSL, monitoreo.</li>
            <li><strong>Soporte (3 meses):</strong> Acompañamiento post-lanzamiento 
            incluido.</li>
          </ol>
          <p>
            Comunicación semanal obligatoria. Acceso a repositorio Git y 
            documentación en tiempo real.
          </p>
        </div>
      </div>

      <!-- FAQ 6 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>¿Puedo solicitar cambios durante el desarrollo?</span>
          <svg class="faq-icon" width="24" height="24"><!-- icon --></svg>
        </button>
        <div class="faq-answer" hidden>
          <p>
            Sí, los cambios son parte natural del desarrollo ágil. Distinguimos:
          </p>
          <p><strong>Cambios sin costo:</strong></p>
          <ul>
            <li>Ajustes dentro del alcance original</li>
            <li>Correcciones de bugs</li>
            <li>Mejoras de UX detectadas en testing</li>
          </ul>
          <p><strong>Cambios con costo (Change Requests):</strong></p>
          <ul>
            <li>Funcionalidades nuevas no contempladas</li>
            <li>Modificaciones de arquitectura</li>
            <li>Integraciones adicionales</li>
          </ul>
          <p>
            Cada change request se documenta, cotiza y aprueba antes de ejecutar. 
            Transparencia total en alcance y costos.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**FAQPage Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta desarrollar un software a medida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo depende de la complejidad, funcionalidades y tecnologías. Como referencia: Aplicación web básica: $3,000 - $8,000 USD, App móvil nativa: $5,000 - $15,000 USD, Software empresarial: $10,000 - $50,000+ USD, Plataforma SaaS: $20,000 - $100,000+ USD."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma desarrollar un proyecto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiempos promedio: Landing page 2-4 semanas, Aplicación web CRUD 6-12 semanas, App móvil iOS + Android 10-16 semanas, Software empresarial complejo 20-40 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tecnologías utilizan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con React.js, Vue.js, Next.js para web, React Native y Flutter para móviles, Node.js, Python y .NET Core para backend, PostgreSQL, MySQL y MongoDB para bases de datos, y AWS, Google Cloud y Azure para cloud."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dan soporte después del lanzamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Incluimos 3 meses de soporte técnico gratuito que cubre corrección de bugs, actualizaciones de seguridad, ajustes menores de UI/UX y soporte por email/WhatsApp con SLA de 24 horas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el proceso de trabajo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seguimos metodología ágil en 6 fases: Descubrimiento, Diseño, Desarrollo con sprints de 2 semanas, Pruebas QA, Despliegue y Soporte post-lanzamiento de 3 meses."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo solicitar cambios durante el desarrollo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, distinguimos cambios sin costo (ajustes dentro del alcance, bugs, mejoras UX) y cambios con costo (funcionalidades nuevas, cambios de arquitectura, integraciones adicionales). Cada change request se documenta y cotiza antes de ejecutar."
      }
    }
  ]
}
</script>
```

**JavaScript para acordeón:**
```javascript
// faq.js
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    const answer = button.nextElementSibling;
    answer.hidden = expanded;
  });
});
```

**Tiempo:** 6 horas (contenido + Schema + JS + CSS)

---

#### 3. Mejorar Contenido Existente (2 horas)

**Expansión de secciones actuales:**

**About section - agregar párrafo:**
```html
<p>
  Metasoft Solutions es una empresa joven peruana fundada en 2025, especializada 
  en desarrollo de software personalizado para PyMEs y startups. Ayudamos a empresas 
  a modernizar sus operaciones con tecnología de vanguardia: aplicaciones web 
  responsivas, apps móviles nativas, sistemas personalizados y plataformas SaaS escalables.
</p>
<p>
  Trabajamos con tecnologías modernas como React, Vue.js, Flutter, Node.js, Python 
  y arquitecturas cloud. Aplicamos metodología ágil Scrum con transparencia total: 
  entregas cada 2 semanas, demos funcionales y comunicación constante. Nuestro compromiso 
  es 100% con la calidad y resultados medibles.
</p>
```

**Services - expandir descripciones:**
Agregar 50-80 palabras por servicio con keywords técnicas.

---

### Día 17-18: Service Schemas (4 horas)

#### Service Schema Template
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Desarrollo de Software a Medida",
  "provider": {
    "@type": "Organization",
    "name": "Metasoft Solutions SAC"
  },
  "areaServed": "PE",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://metasoft.pe",
    "servicePhone": "+51-992-016-075",
    "serviceLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lima",
        "addressCountry": "PE"
      }
    }
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Businesses, Startups, Enterprises"
  },
  "category": "Software Development",
  "description": "Desarrollo de software empresarial personalizado con tecnología moderna",
  "offers": {
    "@type": "Offer",
    "price": "3000",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "3000",
      "priceCurrency": "USD",
      "description": "Desde $3,000 USD según complejidad"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Desarrollo",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aplicaciones Web",
          "description": "React, Vue.js, Angular"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aplicaciones Móviles",
          "description": "iOS, Android, React Native, Flutter"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Empresarial",
          "description": "ERP, CRM, sistemas a medida"
        }
      }
    ]
  }
}
</script>
```

Implementar 4 Service Schemas:
1. Desarrollo Software a Medida
2. Aplicaciones Móviles
3. Plataformas SaaS
4. Consultoría IT

**Tiempo:** 4 horas (1 hora cada schema + validaciones)

---

### Día 18-19: BreadcrumbList Schema (2 horas)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://metasoft.pe"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sobre Nosotros",
      "item": "https://metasoft.pe#nosotros"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Servicios",
      "item": "https://metasoft.pe#servicios"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Metodología",
      "item": "https://metasoft.pe#metodologia"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Valores",
      "item": "https://metasoft.pe#valores"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Contacto",
      "item": "https://metasoft.pe#contacto"
    }
  ]
}
</script>
```

---

### Día 19-20: Testing y Validaciones (2 horas)

#### Validar todos los schemas
1. Rich Results Test: https://search.google.com/test/rich-results
2. Schema Markup Validator: https://validator.schema.org
3. Verificar FAQPage aparece en preview
4. Verificar Service schemas detectados

#### Performance check
1. PageSpeed Insights: Verificar 85+
2. Lighthouse: Verificar SEO 90+
3. GTmetrix: Verificar Grade A

#### Content check
1. Contador de palabras: Verificar 2,000+
2. Densidad keywords: Verificar 1-2%
3. Lecturabilidad: Verificar Flesch >60

---

### Checklist Final Semana 3

- [ ] Sección "Por Qué Elegirnos" agregada (400 palabras)
- [ ] 6 tarjetas why-choose con contenido
- [ ] CSS why-choose.css creado
- [ ] Sección FAQ agregada (800 palabras)
- [ ] 6 preguntas frecuentes con respuestas
- [ ] FAQPage Schema implementado
- [ ] JavaScript acordeón FAQ funcional
- [ ] Contenido About expandido (+200 palabras)
- [ ] Descripciones Services expandidas (+400 palabras)
- [ ] 4 Service Schemas implementados
- [ ] BreadcrumbList Schema agregado
- [ ] Total palabras: 2,000+ ✅
- [ ] Schemas validados (7 total)
- [ ] Performance 85+ mantenido
- [ ] Lecturabilidad verificada

**Resultado esperado:** SEO 82/100 → 88/100 (+7%)

---

## 📅 SEMANA 4: Preparación para Crecimiento (16 horas)

### 🎯 Objetivo: SEO 88/100 → 90/100 + Setup Blog

---

### Día 22-23: Diseño Blog (8 horas)

#### 1. Crear blog.html (3 horas)
Estructura básica lista para futuros posts

#### 2. Crear template single-post.html (2 horas)
Template para artículos individuales

#### 3. CSS blog (2 horas)
Diseño moderno, legible, responsive

#### 4. Primer post (1 hora)
"Cómo Elegir una Empresa de Desarrollo de Software en Perú"
- 1,500+ palabras
- Keywords: desarrollo software peru, elegir empresa software
- Article Schema

---

### Día 23-24: Link Building Inicial (4 horas)

#### Registrar en Directorios
1. Clutch.co - Empresa desarrollo software
2. GoodFirms.co - Software development company
3. AppFutura - Desarrollo apps
4. DesignRush - Web development Peru
5. Páginas Amarillas Perú - Categoría software

#### Crear Perfiles Sociales
1. LinkedIn Company Page
2. Twitter Business
3. Facebook Page
4. GitHub Organization

---

### Día 24-25: Optimizaciones Finales (4 horas)

#### 1. Minificar CSS/JS (2 horas)
- Herramienta: cssnano, terser
- Crear versiones .min.css y .min.js
- Actualizar referencias en HTML

#### 2. Implementar Lazy Load Video (si hay) (1 hora)

#### 3. Agregar rel="noopener" a links externos (30 min)

#### 4. Verificar todos los enlaces internos (30 min)

---

### Checklist Final Semana 4

- [ ] blog.html creado
- [ ] single-post.html template
- [ ] CSS blog responsive
- [ ] Primer post publicado (1,500 palabras)
- [ ] Article Schema en post
- [ ] 5 directorios registrados
- [ ] Perfiles sociales creados
- [ ] CSS/JS minificados
- [ ] Lazy load optimizado
- [ ] rel="noopener" agregado
- [ ] Links internos verificados
- [ ] Sitemap actualizado con blog
- [ ] GSC: Blog enviado para indexación

**Resultado esperado:** SEO 88/100 → 90/100 (+2%)

---

## 📊 RESUMEN DE INVERSIÓN TOTAL

### Horas por Semana

| Semana | Foco | Horas | Costo ($30/h) |
|--------|------|-------|---------------|
| 1 | Fundamentos críticos | 40 | $1,200 |
| 2 | Google tools + imágenes | 20 | $600 |
| 3 | Contenido + schemas | 20 | $600 |
| 4 | Blog + link building | 16 | $480 |
| **TOTAL MES 1** | - | **96** | **$2,880** |

### Costos Adicionales Mes 1

| Ítem | Costo |
|------|-------|
| Diseñador (imágenes OG, Twitter, GMB) | $200-$400 |
| Herramientas SEO (Ahrefs/SEMrush trial) | $0 (trial) |
| GMB verificación | $0 |
| **TOTAL ADICIONAL** | **$200-$400** |

### INVERSIÓN TOTAL MES 1: $3,080 - $3,280

---

## � KPIs A MEDIR (Semanalmente)

### Semana 1
- [x] Páginas indexadas: 0 → 1
- [x] Schemas detectados: 0 → 7
- [x] CTR promedio: Establecer baseline

### Semana 2
- [x] Impresiones Google: Baseline → +50%
- [x] GMB views: 0 → 20+
- [x] GA4 eventos registrados: >10

### Semana 3
- [x] Posición promedio: 40+ → 30-35
- [x] Total palabras: 1,200 → 2,000+
- [x] FAQ rich snippet: Aparece en preview

### Semana 4
- [x] Backlinks: 5 → 10+
- [x] Blog post indexado
- [x] Tráfico orgánico: 50 → 100/mes

---

## 🚀 SIGUIENTE PASO

**¿Deseas que proceda con la implementación de SEMANA 1 (Fundamentos Críticos)?**

Incluye:
- ✅ Optimización meta tags completa
- ✅ 3 Schemas JSON-LD
- ✅ Open Graph + Twitter Cards completos
- ✅ Imágenes social media
- ✅ H1/H2 optimizados
- ✅ robots.txt corregido
- ✅ Alt text optimizado
- ✅ Todas las validaciones

**Tiempo:** 40 horas  
**Resultado:** SEO 58/100 → 75/100 (+29%)
