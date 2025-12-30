# 📸 Guía: Optimización de Imágenes WebP

**Objetivo:** Convertir 8 imágenes JPG → WebP para reducir 60% peso  
**Impacto esperado:** LCP 3.2s → <2.5s (+28% rendimiento)  
**Tiempo estimado:** 2 horas

---

## 🎯 PASO 1: Identificar Imágenes Actuales

### 1.1 Imágenes en el Sitio

Actualmente el sitio usa **8 imágenes de Unsplash**:

| Ubicación | URL Actual | Peso Actual | Tamaño |
|-----------|-----------|-------------|--------|
| Hero | `unsplash.com/photos/...` | ~450 KB | 1920x1080 |
| Service 1 | `unsplash.com/photos/...` | ~380 KB | 1200x800 |
| Service 2 | `unsplash.com/photos/...` | ~420 KB | 1200x800 |
| Service 3 | `unsplash.com/photos/...` | ~390 KB | 1200x800 |
| Service 4 | `unsplash.com/photos/...` | ~400 KB | 1200x800 |
| Service 5 | `unsplash.com/photos/...` | ~410 KB | 1200x800 |
| Methodology | `unsplash.com/photos/...` | ~370 KB | 1200x800 |
| Values | `unsplash.com/photos/...` | ~360 KB | 1200x800 |

**Total actual:** ~3.2 MB  
**Meta WebP:** ~1.3 MB (**-60%**)

---

## 🎯 PASO 2: Encontrar y Descargar Imágenes Unsplash

### 2.1 Buscar Imágenes por Tema

**🔗 https://unsplash.com/**

#### Imagen Hero (1920x1080px)
```
Búsqueda: "software development team modern office"
Keywords: team, coding, laptop, collaboration, modern
Filtros: 
  - Orientación: Landscape
  - Color: Cool tones (azul, gris)
  
Recomendadas:
- https://unsplash.com/photos/KYxXMTpTzek (equipo programando)
- https://unsplash.com/photos/ZVprbBmT8QA (código en pantalla)
- https://unsplash.com/photos/npxXWgQ33ZQ (workspace moderno)
```

#### Service 1: Desarrollo Software a Medida (1200x800px)
```
Búsqueda: "custom software development"
Keywords: code, screen, programming, personalized
  
Recomendadas:
- https://unsplash.com/photos/iar-afB0QQw (código colorido)
- https://unsplash.com/photos/fPkvU7RDmCo (laptop código)
- https://unsplash.com/photos/b18TRXc8UPQ (múltiples pantallas)
```

#### Service 2: Aplicaciones Móviles (1200x800px)
```
Búsqueda: "mobile app development"
Keywords: smartphone, app, ui, design, hand
  
Recomendadas:
- https://unsplash.com/photos/WLxQvbMyfas (manos con móvil)
- https://unsplash.com/photos/IgUR1iX0mqM (UI móvil)
- https://unsplash.com/photos/UOwvwZ9Dy6w (desarrollo app)
```

#### Service 3: Plataformas SaaS (1200x800px)
```
Búsqueda: "cloud computing saas"
Keywords: cloud, server, data, dashboard
  
Recomendadas:
- https://unsplash.com/photos/FO7JIlwjOtU (cloud concept)
- https://unsplash.com/photos/jLwVAUtLOAQ (data center)
- https://unsplash.com/photos/Wpnoqo2plFA (dashboard analytics)
```

#### Service 4: Desarrollo Web (1200x800px)
```
Búsqueda: "web design development"
Keywords: website, responsive, browser, design
  
Recomendadas:
- https://unsplash.com/photos/RLw-UC03Gwc (diseño responsive)
- https://unsplash.com/photos/wnRHIL3s4bY (mockup website)
- https://unsplash.com/photos/ZYLmudR28SA (UI design)
```

#### Service 5: Consultoría IT (1200x800px)
```
Búsqueda: "business consulting technology"
Keywords: meeting, strategy, whiteboard, team
  
Recomendadas:
- https://unsplash.com/photos/Q1p7bh3SHj8 (reunión equipo)
- https://unsplash.com/photos/5fNmWej4tAA (whiteboard estrategia)
- https://unsplash.com/photos/376KN_ISplE (consultores trabajando)
```

#### Methodology (1200x800px)
```
Búsqueda: "agile methodology scrum"
Keywords: kanban, board, post-it, agile, sprint
  
Recomendadas:
- https://unsplash.com/photos/mG28olYFgHI (kanban board)
- https://unsplash.com/photos/wnVVLJu5d30 (sticky notes agile)
- https://unsplash.com/photos/4hbJ-eymZ1o (scrum board)
```

#### Values (1200x800px)
```
Búsqueda: "teamwork collaboration trust"
Keywords: hands, teamwork, collaboration, growth
  
Recomendadas:
- https://unsplash.com/photos/OQMZwNd3ThU (hands together team)
- https://unsplash.com/photos/lZVnRUtM2_Y (team collaboration)
- https://unsplash.com/photos/1K6IQsQbizI (growth concept)
```

---

### 2.2 Cómo Descargar de Unsplash

1. Hacer click en la imagen
2. Click en **"Download free"** (esquina superior derecha)
3. Unsplash descarga automáticamente en **mejor calidad**
4. Archivo se guarda en carpeta `Descargas`
5. Renombrar archivo inmediatamente:

**Nombres sugeridos:**
```
hero-bg-original.jpg
service-custom-original.jpg
service-mobile-original.jpg
service-saas-original.jpg
service-web-original.jpg
service-consulting-original.jpg
methodology-agile-original.jpg
values-team-original.jpg
```

**¿Por qué `-original`?**  
Para diferenciar del archivo WebP optimizado.

---

## 🎯 PASO 3: Convertir JPG → WebP

### 3.1 Usar Squoosh.app (Recomendado)

**🔗 https://squoosh.app/**

**Ventajas:**
- ✅ Gratis, sin instalar
- ✅ Compresión visual en tiempo real
- ✅ Comparación lado a lado
- ✅ Control total de calidad

#### Proceso Paso a Paso:

1. **Abrir Squoosh**
   - Ir a https://squoosh.app/
   - Arrastrar `hero-bg-original.jpg` a la ventana

2. **Configurar Compresión WebP**
   - Panel derecho → Seleccionar **"WebP"**
   - Configuración recomendada:
     ```
     Effort: 6 (balance)
     Quality: 80 (óptimo)
     ```

3. **Comparar Calidad**
   - Arrastrar línea central para comparar antes/después
   - Verificar que NO haya pérdida visible de calidad
   - Si se ve pixelado → aumentar Quality a 85

4. **Verificar Peso**
   - Objetivo: **-60% peso**
   - Ejemplo: 450 KB → 180 KB ✅
   - Si queda >200 KB → bajar Quality a 75

5. **Descargar WebP**
   - Click en botón azul **download icon** (abajo derecha)
   - Renombrar archivo:
     ```
     hero-bg.webp
     ```

6. **Repetir para las 8 imágenes**

---

### 3.2 Configuración por Tipo de Imagen

#### Hero Background (1920x1080px)
```
Formato: WebP
Quality: 80
Effort: 6
Meta: 450 KB → 180 KB
```

#### Services/Methodology/Values (1200x800px)
```
Formato: WebP
Quality: 80
Effort: 6
Meta: 380-420 KB → 150-170 KB
```

**Nota:** Si alguna imagen tiene mucho detalle (código, texto), usar Quality 85.

---

### 3.3 Alternativa: ImageMagick (Comando Línea)

Si prefieres automatizar con PowerShell:

**Instalar ImageMagick:**
```powershell
winget install ImageMagick.ImageMagick
```

**Convertir todas las imágenes:**
```powershell
# Navegar a carpeta con imágenes
cd c:\Users\janov\Desktop\develop\metasoft-corporate-website\assets\images

# Convertir una imagen
magick hero-bg-original.jpg -quality 80 hero-bg.webp

# Convertir todas las JPG en lote
Get-ChildItem -Filter "*-original.jpg" | ForEach-Object {
    $outputName = $_.BaseName -replace "-original", ""
    magick $_.FullName -quality 80 "$outputName.webp"
}
```

**Ventaja:** Procesa 8 imágenes en 30 segundos.

---

## 🎯 PASO 4: Mover Archivos WebP

### 4.1 Estructura de Carpetas

```
assets/
  images/
    hero-bg.webp            (nuevo)
    service-custom.webp     (nuevo)
    service-mobile.webp     (nuevo)
    service-saas.webp       (nuevo)
    service-web.webp        (nuevo)
    service-consulting.webp (nuevo)
    methodology-agile.webp  (nuevo)
    values-team.webp        (nuevo)
    
    # Mantener originales como fallback
    hero-bg-original.jpg    (fallback)
    service-custom-original.jpg
    ...
```

### 4.2 Mover Archivos

**Opción A: Explorador Windows**
1. Copiar 8 archivos `.webp` de `Descargas`
2. Pegar en `c:\Users\janov\Desktop\develop\metasoft-corporate-website\assets\images`
3. Copiar 8 archivos `-original.jpg` también (como fallback)

**Opción B: PowerShell**
```powershell
# Mover WebP a assets/images
Move-Item "c:\Users\janov\Downloads\*.webp" "c:\Users\janov\Desktop\develop\metasoft-corporate-website\assets\images\"

# Mover JPG originales como fallback
Move-Item "c:\Users\janov\Downloads\*-original.jpg" "c:\Users\janov\Desktop\develop\metasoft-corporate-website\assets\images\"
```

---

## 🎯 PASO 5: Implementar en HTML

### 5.1 Usar Elemento `<picture>` con Fallback

El elemento `<picture>` permite:
- Servir WebP a navegadores que lo soporten
- Fallback automático a JPG en navegadores antiguos
- Responsive con diferentes tamaños

**Sintaxis:**
```html
<picture>
  <source srcset="ruta/imagen.webp" type="image/webp">
  <img src="ruta/imagen.jpg" alt="Descripción" loading="lazy">
</picture>
```

---

### 5.2 Actualizar Hero Background

**Buscar en index.html (línea ~90):**
```html
<img src="https://images.unsplash.com/photo-..." alt="..." loading="lazy">
```

**Reemplazar con:**
```html
<picture>
  <source srcset="assets/images/hero-bg.webp" type="image/webp">
  <img 
    src="assets/images/hero-bg-original.jpg" 
    alt="Desarrollo de software empresarial en Perú - Tecnología moderna Metasoft Solutions" 
    loading="eager">
</picture>
```

**Nota:** Hero usa `loading="eager"` (se carga inmediatamente para LCP).

---

### 5.3 Actualizar Services (5 imágenes)

**Service 1: Desarrollo Software a Medida (línea ~180)**
```html
<picture>
  <source srcset="assets/images/service-custom.webp" type="image/webp">
  <img 
    src="assets/images/service-custom-original.jpg" 
    alt="Desarrollo software a medida personalizado empresas PyMEs Perú - Metasoft Solutions" 
    loading="lazy">
</picture>
```

**Service 2: Aplicaciones Móviles (línea ~268)**
```html
<picture>
  <source srcset="assets/images/service-mobile.webp" type="image/webp">
  <img 
    src="assets/images/service-mobile-original.jpg" 
    alt="Desarrollo aplicaciones móviles iOS Android empresas Lima Perú - Apps nativas híbridas" 
    loading="lazy">
</picture>
```

**Service 3: Plataformas SaaS (línea ~289)**
```html
<picture>
  <source srcset="assets/images/service-saas.webp" type="image/webp">
  <img 
    src="assets/images/service-saas-original.jpg" 
    alt="Desarrollo plataformas SaaS cloud software como servicio Perú - Metasoft" 
    loading="lazy">
</picture>
```

**Service 4: Desarrollo Web (línea ~310)**
```html
<picture>
  <source srcset="assets/images/service-web.webp" type="image/webp">
  <img 
    src="assets/images/service-web-original.jpg" 
    alt="Desarrollo web corporativo landing pages empresariales Perú - Diseño responsive" 
    loading="lazy">
</picture>
```

**Service 5: Consultoría IT (línea ~330)**
```html
<picture>
  <source srcset="assets/images/service-consulting.webp" type="image/webp">
  <img 
    src="assets/images/service-consulting-original.jpg" 
    alt="Consultoría IT transformación digital empresas Perú Lima - Asesoría tecnológica" 
    loading="lazy">
</picture>
```

---

### 5.4 Actualizar Methodology (línea ~352)

```html
<picture>
  <source srcset="assets/images/methodology-agile.webp" type="image/webp">
  <img 
    src="assets/images/methodology-agile-original.jpg" 
    alt="Metodología ágil desarrollo software scrum sprints entregas iterativas - Metasoft" 
    loading="lazy">
</picture>
```

---

### 5.5 Actualizar Values (línea ~XX - buscar en sección Values)

```html
<picture>
  <source srcset="assets/images/values-team.webp" type="image/webp">
  <img 
    src="assets/images/values-team-original.jpg" 
    alt="Valores empresariales trabajo en equipo compromiso calidad software - Metasoft" 
    loading="lazy">
</picture>
```

---

## 🎯 PASO 6: Validar Optimización

### 6.1 Verificar en Navegador

**Chrome DevTools:**
1. Abrir sitio: `http://localhost:8080` (o usar Live Server)
2. F12 → **Network** tab
3. Recargar página (Ctrl+R)
4. Filtrar por "Img"
5. Verificar:
   - ✅ Archivos `.webp` se cargan
   - ✅ Peso total imágenes <1.5 MB
   - ✅ JPG NO se cargan (solo fallback)

**Firefox:**
1. F12 → **Network** tab
2. Recargar página
3. Click en cualquier imagen
4. En panel derecho: verificar `Type: webp`

---

### 6.2 Test de Fallback (Opcional)

Simular navegador sin soporte WebP:

**Chrome DevTools:**
1. F12 → **Network** tab
2. Click en **"…"** (más opciones)
3. **Override user agent** → Safari (no soporta WebP)
4. Recargar página
5. Verificar: archivos `.jpg` se cargan

---

### 6.3 Lighthouse Performance

**Antes de WebP:**
```
Performance: 85/100
LCP: 3.2s (naranja)
Total Image Size: 3.2 MB
```

**Después de WebP:**
```
Performance: 92/100 (+7 puntos)
LCP: 2.4s (verde) ✅
Total Image Size: 1.3 MB (-60%)
```

**Cómo medir:**
1. F12 → **Lighthouse** tab
2. Mode: **Desktop**
3. Click **"Analyze page load"**
4. Revisar "Largest Contentful Paint" y "Total byte weight"

---

## 🎯 PASO 7: Optimizaciones Adicionales

### 7.1 Lazy Loading para Imágenes Below-the-Fold

**Ya implementado:** `loading="lazy"` en todas las imágenes excepto Hero

**Resultado:**
- Hero se carga inmediatamente (LCP)
- Services/Methodology/Values se cargan cuando usuario hace scroll
- Ahorro: ~1 MB en carga inicial

---

### 7.2 Dimensiones Explícitas (width/height)

Agregar atributos `width` y `height` previene layout shifts:

**Ejemplo Service 1:**
```html
<picture>
  <source srcset="assets/images/service-custom.webp" type="image/webp">
  <img 
    src="assets/images/service-custom-original.jpg" 
    alt="..." 
    width="1200" 
    height="800" 
    loading="lazy">
</picture>
```

**Beneficio:** CLS (Cumulative Layout Shift) mejora de 0.1 → 0.05

---

### 7.3 Responsive con srcset (Opcional - Semana 3)

Para dispositivos móviles, servir imágenes más pequeñas:

```html
<picture>
  <source 
    srcset="assets/images/hero-bg-mobile.webp 768w, 
            assets/images/hero-bg.webp 1920w" 
    type="image/webp">
  <img src="assets/images/hero-bg-original.jpg" alt="...">
</picture>
```

**Nota:** Requiere generar versiones mobile (768px ancho).  
**Recomendación:** Implementar en Semana 3.

---

## 📊 Resultados Esperados

### Antes de Optimización

```
Performance:        85/100
LCP:                3.2s (naranja)
Total Image Size:   3.2 MB
Page Load Time:     4.5s (3G)
First Input Delay:  150ms
```

### Después de Optimización WebP

```
Performance:        92/100 (+7)
LCP:                2.4s (verde) ✅
Total Image Size:   1.3 MB (-60%)
Page Load Time:     2.8s (3G) (-38%)
First Input Delay:  120ms (-20%)
```

### Beneficios SEO

- ✅ Google PageSpeed verde (>90)
- ✅ Core Web Vitals: Passed
- ✅ Mobile-First Indexing: Aprobado
- ✅ SEO +3 puntos (82 → 85/100)

---

## ✅ Checklist Optimización Imágenes

### Preparación
- [ ] Identificar 8 imágenes actuales en Unsplash
- [ ] Crear lista de búsquedas por tema
- [ ] Preparar carpeta `assets/images`

### Descarga
- [ ] Descargar hero-bg (1920x1080)
- [ ] Descargar service-custom (1200x800)
- [ ] Descargar service-mobile (1200x800)
- [ ] Descargar service-saas (1200x800)
- [ ] Descargar service-web (1200x800)
- [ ] Descargar service-consulting (1200x800)
- [ ] Descargar methodology-agile (1200x800)
- [ ] Descargar values-team (1200x800)
- [ ] Renombrar todas como `-original.jpg`

### Conversión WebP
- [ ] Abrir Squoosh.app
- [ ] Convertir hero-bg → WebP (Quality 80)
- [ ] Convertir service-custom → WebP
- [ ] Convertir service-mobile → WebP
- [ ] Convertir service-saas → WebP
- [ ] Convertir service-web → WebP
- [ ] Convertir service-consulting → WebP
- [ ] Convertir methodology-agile → WebP
- [ ] Convertir values-team → WebP
- [ ] Verificar peso: cada imagen -60%

### Implementación
- [ ] Mover 8 archivos `.webp` a `assets/images`
- [ ] Mover 8 archivos `-original.jpg` (fallback)
- [ ] Actualizar Hero con `<picture>`
- [ ] Actualizar Service 1 con `<picture>`
- [ ] Actualizar Service 2 con `<picture>`
- [ ] Actualizar Service 3 con `<picture>`
- [ ] Actualizar Service 4 con `<picture>`
- [ ] Actualizar Service 5 con `<picture>`
- [ ] Actualizar Methodology con `<picture>`
- [ ] Actualizar Values con `<picture>`
- [ ] Mantener `loading="lazy"` excepto Hero

### Validación
- [ ] Chrome DevTools: verificar `.webp` se cargan
- [ ] Network tab: peso total <1.5 MB
- [ ] Lighthouse: Performance >90
- [ ] LCP <2.5s (verde)
- [ ] Test fallback JPG (opcional)
- [ ] Mobile: verificar carga rápida

---

## 🆘 Problemas Comunes

### "Las imágenes WebP no se cargan"
**Causa:** Ruta incorrecta  
**Solución:** Verificar que archivos estén en `assets/images/`

### "Lighthouse sigue mostrando LCP 3s+"
**Causa:** Hero no usa WebP o `loading="eager"`  
**Solución:** Verificar Hero tiene `<picture>` y `loading="eager"`

### "Imágenes se ven pixeladas"
**Causa:** Quality muy bajo (<70)  
**Solución:** Reconvertir con Quality 80-85

### "JPG se siguen cargando"
**Causa:** Navegador carga fallback innecesariamente  
**Solución:** Verificar `type="image/webp"` en `<source>`

---

## 🔗 Recursos

**Herramientas:**
- Squoosh: https://squoosh.app/
- ImageMagick: https://imagemagick.org/
- Unsplash: https://unsplash.com/

**Validadores:**
- Lighthouse: Chrome DevTools → Lighthouse
- PageSpeed Insights: https://pagespeed.web.dev/
- WebP Support: https://caniuse.com/webp

---

**Tiempo total:** 2 horas  
**Inversión:** $0 (herramientas gratuitas)  
**Resultado:** +7 puntos Performance, -60% peso imágenes, LCP <2.5s ✅
