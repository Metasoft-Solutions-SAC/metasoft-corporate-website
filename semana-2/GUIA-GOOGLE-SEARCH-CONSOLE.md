# 🔍 Google Search Console: Guía de Configuración

**Objetivo:** Configurar GSC para monitorear SEO y indexación  
**Tiempo estimado:** 1 hora (incluyendo verificación)  
**Impacto:** Visibilidad completa de rendimiento orgánico

---

## 🎯 PASO 1: Crear Cuenta Google Search Console

### 1.1 Acceder a GSC

```
🔗 https://search.google.com/search-console
```

1. Click en **"Empezar ahora"** o **"Start now"**
2. Iniciar sesión con Gmail (usar `contacto@metasoft.pe` si tienes)
3. Si no tienes cuenta corporativa, puedes usar Gmail personal

**Nota:** Puedes agregar usuarios adicionales después.

---

### 1.2 Agregar Propiedad

Tienes 2 opciones:

#### Opción A: Prefijo de URL (Recomendada)
```
URL: https://metasoft.pe
```
- Monitorea SOLO `https://metasoft.pe`
- Más específico
- No incluye subdominios

#### Opción B: Dominio
```
Dominio: metasoft.pe
```
- Monitorea `http://`, `https://`, `www.`, subdominios
- Requiere verificación DNS
- Más complejo

**Recomendación:** Usar **Prefijo de URL** (`https://metasoft.pe`)

---

## 🎯 PASO 2: Verificar Propiedad

Google ofrece 5 métodos de verificación:

### Método 1: Etiqueta HTML (Recomendado) ✅

**Ya preparado en index.html:**

```html
<!-- Línea 20 de index.html -->
<!-- <meta name="google-site-verification" content="TU_CODIGO_AQUI" /> -->
```

**Pasos:**

1. En GSC → Método **"Etiqueta HTML"**
2. Google muestra código:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ456...">
   ```
3. Copiar SOLO el código (ABC123XYZ456...)
4. Abrir `index.html` en editor
5. Buscar línea 27 (comentario GSC)
6. Descomentar y reemplazar:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ456">
   ```
7. Guardar archivo
8. Subir a servidor (GitHub Pages, hosting, etc)
9. Volver a GSC → Click **"Verificar"**

**Ventajas:**
- ✅ Rápido (5 minutos)
- ✅ Ya preparado en código
- ✅ No requiere acceso a DNS

---

### Método 2: Archivo HTML (Alternativa)

1. GSC → Método **"Archivo HTML"**
2. Descargar archivo `google1234567890abcdef.html`
3. Subir archivo a raíz del sitio:
   ```
   https://metasoft.pe/google1234567890abcdef.html
   ```
4. Verificar que archivo sea accesible (abrir URL en navegador)
5. Volver a GSC → Click **"Verificar"**

**Ventaja:** No requiere editar código  
**Desventaja:** Archivo adicional

---

### Método 3: Registro DNS (Complejo)

Requiere acceso a DNS del dominio (donde registraste metasoft.pe).

1. GSC → Método **"Dominio"**
2. Google muestra registro TXT:
   ```
   google-site-verification=ABC123XYZ456...
   ```
3. Ir al proveedor de dominio (GoDaddy, Namecheap, etc)
4. DNS Settings → Agregar registro TXT:
   ```
   Host: @
   Type: TXT
   Value: google-site-verification=ABC123XYZ456...
   TTL: 3600
   ```
5. Guardar (puede tardar 24-48h en propagarse)
6. Volver a GSC → Click **"Verificar"**

**Solo usar si:** Ya tienes dominio propio configurado.

---

### Método 4: Google Analytics (Si ya tienes GA4)

Si configuraste GA4 primero:

1. GSC → Método **"Google Analytics"**
2. GSC detecta automáticamente si tienes GA4 activo
3. Click **"Verificar"**

**Ventaja:** Instantáneo  
**Requisito:** GA4 ya instalado y funcionando

---

### Método 5: Google Tag Manager (Si usas GTM)

Solo si usas Tag Manager (no aplica para este proyecto).

---

## 🎯 PASO 3: Enviar Sitemap

### 3.1 Crear sitemap.xml

Crear archivo en raíz del proyecto:

**Ruta:** `c:\Users\janov\Desktop\develop\metasoft-corporate-website\sitemap.xml`

**Contenido:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Página principal -->
  <url>
    <loc>https://metasoft.pe/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Secciones importantes (anclas) -->
  <url>
    <loc>https://metasoft.pe/#nosotros</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://metasoft.pe/#servicios</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://metasoft.pe/#metodologia</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://metasoft.pe/#valores</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://metasoft.pe/#contacto</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
</urlset>
```

**Nota sobre `lastmod`:**
- Actualizar fecha a **hoy** en formato `YYYY-MM-DD`
- Cambiar cada vez que actualices contenido

---

### 3.2 Validar sitemap.xml

**Opción A: Validador XML Online**

```
🔗 https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

1. Subir `sitemap.xml` al servidor
2. Ingresar URL: `https://metasoft.pe/sitemap.xml`
3. Click **"Validate"**
4. Debe mostrar: ✅ "Valid Sitemap"

**Opción B: Abrir en navegador**

```
https://metasoft.pe/sitemap.xml
```

- Debe mostrar XML formateado (no error 404)
- Verificar que todas las URLs sean accesibles

---

### 3.3 Enviar Sitemap a GSC

1. En GSC → Menú izquierdo → **"Sitemaps"**
2. Ingresar URL del sitemap:
   ```
   https://metasoft.pe/sitemap.xml
   ```
3. Click **"Enviar"** o **"Submit"**
4. Estado debe cambiar a: **"Éxito"** (puede tardar 1-2 horas)

**Resultado esperado:**
```
Estado: Éxito
URLs descubiertas: 6
URLs indexadas: 6 (tras 24-48h)
```

---

## 🎯 PASO 4: Solicitar Indexación

### 4.1 Inspeccionar URL Principal

1. GSC → Barra superior → Inspeccionar URL:
   ```
   https://metasoft.pe
   ```
2. Google muestra estado:
   - **"La URL está en Google"** → ✅ Ya indexada
   - **"La URL no está en Google"** → ⚠️ No indexada

---

### 4.2 Solicitar Indexación Manual

Si no está indexada:

1. Click **"Solicitar indexación"** o **"Request indexing"**
2. Google rastrea la página (tarda 1-2 minutos)
3. Resultado:
   - **"Indexación solicitada"** → ✅ Google indexará en 24-48h
   - **"Error"** → Ver errores y corregir

---

### 4.3 Solicitar Indexación de Secciones

Repetir proceso para cada sección:

```
https://metasoft.pe/#nosotros
https://metasoft.pe/#servicios
https://metasoft.pe/#metodologia
https://metasoft.pe/#valores
https://metasoft.pe/#contacto
```

**Nota:** Como es SPA, Google indexa principalmente la URL base.

---

## 🎯 PASO 5: Configurar Ajustes Importantes

### 5.1 Configurar Segmentación Geográfica

1. GSC → **"Configuración"** (engranaje)
2. **"Segmentación geográfica"**
3. Seleccionar: **"Perú"** 🇵🇪
4. Guardar

**Impacto:** Google prioriza tu sitio en búsquedas desde Perú.

---

### 5.2 Establecer Dominio Preferido

1. **"Configuración"** → **"Configuración de rastreo"**
2. Verificar que se use `https://` (no `http://`)
3. Si tienes `www.metasoft.pe`, decidir cuál es principal

**Recomendación:** Usar `https://metasoft.pe` (sin www)

---

### 5.3 Velocidad de Rastreo (Opcional)

Por defecto Google decide automáticamente.

Si quieres mayor velocidad:
1. **"Configuración"** → **"Velocidad de rastreo"**
2. Seleccionar **"Mayor velocidad"**

**Cuidado:** Solo si servidor soporta tráfico alto.

---

## 🎯 PASO 6: Monitorear Métricas Clave

### 6.1 Rendimiento de Búsqueda

**GSC → "Rendimiento"**

Métricas principales:
```
Clics totales:       Cuántas personas hicieron click en tu resultado
Impresiones:         Cuántas veces apareció tu sitio en resultados
CTR (Click-Through): Clics / Impresiones (%)
Posición promedio:   Ranking promedio en Google
```

**Objetivos Mes 1:**
```
Impresiones:   500-1,000
Clics:         20-50
CTR:           4-5%
Posición:      15-25 (primera y segunda página)
```

**Objetivos Mes 3:**
```
Impresiones:   2,000-5,000
Clics:         150-300
CTR:           6-8%
Posición:      8-15 (primera página)
```

---

### 6.2 Páginas Indexadas

**GSC → "Cobertura"**

Verificar:
- ✅ **"Válido"**: 6 URLs (todas las secciones)
- ⚠️ **"Excluido"**: 0 URLs
- ❌ **"Error"**: 0 URLs

**Si hay errores:**
1. Click en categoría de error
2. Ver URLs afectadas
3. Corregir problema
4. Solicitar validación

---

### 6.3 Core Web Vitals

**GSC → "Experiencia" → "Core Web Vitals"**

Métricas:
```
LCP (Largest Contentful Paint):  <2.5s ✅
FID (First Input Delay):          <100ms ✅
CLS (Cumulative Layout Shift):    <0.1 ✅
```

**Estado esperado:** Todas las URLs en **"Buena"** (verde)

Si hay URLs en **"Necesita mejoras"** (amarillo):
- Revisar imágenes WebP
- Verificar lazy loading
- Optimizar JavaScript

---

### 6.4 Usabilidad Móvil

**GSC → "Experiencia" → "Usabilidad móvil"**

Verificar:
- ✅ **"Buena"**: Todas las URLs
- ❌ **"Problemas"**: 0 URLs

**Problemas comunes:**
- Texto demasiado pequeño
- Elementos táctiles muy juntos
- Contenido más ancho que pantalla
- Viewport no configurado

**Todos resueltos en Week 1** con meta viewport responsive.

---

### 6.5 Acciones Manuales

**GSC → "Acciones manuales"**

Estado esperado:
```
✅ "No se han detectado problemas"
```

**Si hay penalización manual:**
- Leer descripción detallada
- Corregir problema
- Solicitar revisión

**Causas comunes:**
- Spam
- Enlaces no naturales
- Contenido duplicado
- Cloaking

**Metasoft:** No debería tener ninguna (sitio nuevo).

---

## 🎯 PASO 7: Configurar Alertas por Email

### 7.1 Activar Notificaciones

1. GSC → **"Configuración"** → **"Usuarios y permisos"**
2. Verificar tu email esté agregado
3. GSC envía automáticamente alertas por:
   - Errores críticos de indexación
   - Penalizaciones manuales
   - Problemas de seguridad
   - Spam detectado

---

### 7.2 Agregar Usuarios Adicionales

Si trabajas en equipo:

1. **"Configuración"** → **"Usuarios y permisos"**
2. Click **"Agregar usuario"**
3. Ingresar email del colaborador
4. Seleccionar permisos:
   - **Propietario completo:** Control total
   - **Completo:** Ver y editar
   - **Restringido:** Solo ver datos

---

## 🎯 PASO 8: Integración con Google Analytics

### 8.1 Vincular GSC con GA4

**Requisito:** GA4 ya configurado (ver GUIA-GOOGLE-ANALYTICS.md)

**Pasos en GA4:**

1. GA4 → **"Administrar"** → **"Vínculos de Search Console"**
2. Click **"Vincular"**
3. Seleccionar propiedad GSC: `https://metasoft.pe`
4. Confirmar vinculación

**Ventaja:** Datos de búsqueda orgánica en informes GA4.

---

### 8.2 Verificar Datos en GA4

Tras 24-48h:

1. GA4 → **"Informes"** → **"Adquisición"** → **"Tráfico de Search Console"**
2. Deberías ver:
   - Consultas de búsqueda
   - Páginas de destino
   - Países
   - Dispositivos

---

## 📊 Checklist Validación GSC

### Configuración Inicial
- [ ] Cuenta GSC creada con email corporativo
- [ ] Propiedad agregada: `https://metasoft.pe`
- [ ] Método de verificación seleccionado
- [ ] Meta tag GSC agregado a index.html (si etiqueta HTML)
- [ ] Sitio subido al servidor
- [ ] Verificación completada en GSC (✅ "Verificado")

### Sitemap y Indexación
- [ ] sitemap.xml creado con 6 URLs
- [ ] sitemap.xml validado (XML correcto)
- [ ] sitemap.xml subido a raíz del sitio
- [ ] Sitemap enviado a GSC
- [ ] Estado sitemap: "Éxito"
- [ ] Indexación solicitada para URL principal
- [ ] Inspeccionar URL: "La URL está en Google" (tras 24-48h)

### Configuración Avanzada
- [ ] Segmentación geográfica: Perú 🇵🇪
- [ ] Dominio preferido: `https://` (sin www)
- [ ] Notificaciones por email activadas
- [ ] Usuarios adicionales agregados (si aplica)

### Integración
- [ ] GSC vinculado con GA4
- [ ] Datos de búsqueda visibles en GA4 (tras 48h)

### Métricas Iniciales (Revisar tras 7 días)
- [ ] Rendimiento: 0 → 50-100 impresiones
- [ ] Cobertura: 6 URLs válidas
- [ ] Core Web Vitals: Todas "Buena" ✅
- [ ] Usabilidad móvil: Sin problemas
- [ ] Acciones manuales: Sin penalizaciones

---

## 🆘 Problemas Comunes

### "No puedo verificar la propiedad"
**Causa:** Meta tag no está en `<head>` o sitio no subido  
**Solución:** 
1. Verificar que meta tag esté en línea 20-30 de index.html
2. Confirmar que sitio esté en servidor (no localhost)
3. Abrir `https://metasoft.pe` y hacer "Ver código fuente" (Ctrl+U)
4. Buscar `google-site-verification` en código

### "Sitemap da error"
**Causa:** XML mal formado o URLs incorrectas  
**Solución:**
1. Validar XML en https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Verificar que `<lastmod>` use formato `YYYY-MM-DD`
3. Confirmar que todas las URLs sean accesibles (200 OK)

### "No aparecen impresiones tras 7 días"
**Causa:** Sitio muy nuevo, Google aún indexando  
**Solución:**
1. Solicitar indexación manualmente (Inspeccionar URL)
2. Verificar que robots.txt NO bloquee Googlebot
3. Revisar que sitemap esté correctamente enviado
4. Esperar 14 días (puede tardar en sitios nuevos)

### "Core Web Vitals en rojo"
**Causa:** Imágenes no optimizadas o JavaScript bloqueante  
**Solución:**
1. Implementar imágenes WebP (GUIA-OPTIMIZACION-IMAGENES.md)
2. Verificar `loading="lazy"` en imágenes
3. Revisar que CSS/JS estén minificados

---

## 🔗 Recursos

**Google Search Console:**
- 🔗 https://search.google.com/search-console

**Documentación Oficial:**
- 🔗 https://support.google.com/webmasters

**Generador Sitemap:**
- 🔗 https://www.xml-sitemaps.com/

**Validador Sitemap:**
- 🔗 https://www.xml-sitemaps.com/validate-xml-sitemap.html

**Rich Results Test:**
- 🔗 https://search.google.com/test/rich-results

---

**Tiempo total:** 1 hora  
**Revisión:** Diaria (primeros 7 días), luego semanal  
**Resultado:** Visibilidad completa de rendimiento SEO orgánico ✅
