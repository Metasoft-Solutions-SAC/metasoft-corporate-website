# 🔍 Validaciones SEO - Enlaces Rápidos

Usa estos enlaces para validar las implementaciones de SEO Semana 1.

---

## 🎯 Validadores Principales

### 1. Schema.org Rich Results Test
**Qué valida:** Schemas JSON-LD (Organization, LocalBusiness, WebSite)

```
🔗 https://search.google.com/test/rich-results

Pasos:
1. Ingresar: https://metasoft.pe
2. Click "Test URL"
3. Esperar análisis (30 segundos)
4. Verificar: "✓ 3 valid items detected"
5. Expandir cada schema y revisar campos
6. Capturar screenshot

Esperado:
✅ Organization schema
✅ LocalBusiness schema  
✅ WebSite schema
```

---

### 2. Facebook Sharing Debugger
**Qué valida:** Open Graph tags (11 tags)

```
🔗 https://developers.facebook.com/tools/debug/

Pasos:
1. Ingresar: https://metasoft.pe
2. Click "Debug"
3. Revisar preview de imagen y textos
4. Si no aparece imagen: Click "Scrape Again"
5. Verificar título: "Desarrollo de Software a Medida en Perú | Metasoft"
6. Verificar descripción completa
7. Verificar imagen 1200x630px

Esperado:
✅ Imagen og-image.jpg visible
✅ Título optimizado
✅ Descripción 155 caracteres
✅ URL canónica correcta
```

**Nota:** Si la imagen no aparece, es porque aún no has creado og-image.jpg.  
Ver: `/assets/images/SOCIAL-IMAGES-README.md`

---

### 3. Twitter Card Validator
**Qué valida:** Twitter Cards tags (7 tags)

```
🔗 https://cards-dev.twitter.com/validator

Pasos:
1. Ingresar: https://metasoft.pe
2. Click "Preview card"
3. Revisar preview tipo "Summary Card with Large Image"
4. Verificar imagen twitter-card.jpg (1200x600px)
5. Verificar título y descripción

Esperado:
✅ Card type: Summary Large Image
✅ Imagen twitter-card.jpg visible
✅ Título: "Desarrollo de Software a Medida en Perú"
✅ Descripción optimizada
```

**Nota:** Requiere haber creado twitter-card.jpg primero.

---

### 4. LinkedIn Post Inspector
**Qué valida:** Open Graph (LinkedIn usa OG tags)

```
🔗 https://www.linkedin.com/post-inspector/

Pasos:
1. Ingresar: https://metasoft.pe
2. Click "Inspect"
3. Revisar preview
4. Verificar imagen y textos

Esperado:
✅ Preview con imagen og-image.jpg
✅ Título completo
✅ Descripción visible
```

---

## 🚀 Validadores de Performance

### 5. PageSpeed Insights
**Qué valida:** Performance, SEO, Best Practices, Accessibility

```
🔗 https://pagespeed.web.dev/

Pasos:
1. Ingresar: https://metasoft.pe
2. Click "Analyze"
3. Revisar tabs: Mobile y Desktop
4. Revisar scores de cada categoría

Esperado (Desktop):
✅ Performance: 85+ (Bueno)
✅ Accessibility: 95+ (Excelente)
✅ Best Practices: 90+ (Excelente)
✅ SEO: 90+ (Excelente) ⬅️ CRÍTICO

Esperado (Mobile):
✅ Performance: 75+ (Aceptable)
✅ SEO: 90+ (Excelente)

Acciones si SEO < 90:
- Revisar meta description presente
- Verificar viewport configurado
- Confirmar robots.txt no bloquea
```

---

### 6. Google Mobile-Friendly Test
**Qué valida:** Responsividad móvil

```
🔗 https://search.google.com/test/mobile-friendly

Pasos:
1. Ingresar: https://metasoft.pe
2. Click "Test URL"
3. Esperar resultado (30 segundos)

Esperado:
✅ "Page is mobile-friendly"
✅ Screenshot móvil se ve correcto
✅ Sin problemas de usabilidad
```

---

## 🛠️ Validadores Técnicos

### 7. W3C HTML Validator
**Qué valida:** Sintaxis HTML correcta

```
🔗 https://validator.w3.org/

Pasos:
1. Ingresar: https://metasoft.pe
2. Click "Check"
3. Revisar errores y advertencias

Aceptable:
⚠️ Warnings sobre schemas JSON-LD (normal)
❌ 0 errores críticos HTML
```

---

### 8. Schema Markup Validator
**Qué valida:** Sintaxis JSON-LD

```
🔗 https://validator.schema.org/

Pasos:
1. Copiar código JSON-LD de index.html
2. Pegar en validator
3. Click "Run Test"

Esperado:
✅ 0 errors
✅ Schemas válidos
```

---

### 9. JSON Lint (Validador JSON)
**Qué valida:** Sintaxis JSON correcta

```
🔗 https://jsonlint.com/

Pasos:
1. Copiar cada bloque <script type="application/ld+json">
2. Pegar en JSONLint
3. Click "Validate JSON"

Esperado:
✅ "Valid JSON"
```

---

## 📊 Validadores de Seguridad

### 10. SSL Checker
**Qué valida:** Certificado HTTPS

```
🔗 https://www.sslshopper.com/ssl-checker.html

Pasos:
1. Ingresar: metasoft.pe
2. Click "Check SSL"

Esperado:
✅ Valid certificate
✅ Not expired
✅ Trusted issuer
```

---

## 🔎 Validadores de Indexación

### 11. Google Index Check
**Qué valida:** Páginas indexadas

```
Buscar en Google:
site:metasoft.pe

Esperado:
1 resultado (página principal)

Nota: Puede tardar 7-14 días en indexar después de implementar mejoras.
```

---

### 12. Bing Index Check
**Qué valida:** Indexación en Bing

```
Buscar en Bing:
site:metasoft.pe

Esperado:
1 resultado
```

---

## 🎨 Validadores de Imágenes

### 13. Squoosh (Optimizador)
**Qué hace:** Optimiza imágenes

```
🔗 https://squoosh.app/

Pasos:
1. Subir og-image.jpg
2. Ajustar calidad a 80-85%
3. Verificar peso < 300 KB
4. Descargar optimizado
```

---

### 14. TinyPNG
**Qué hace:** Comprime PNG/JPG

```
🔗 https://tinypng.com/

Pasos:
1. Subir imágenes
2. Esperar compresión
3. Descargar versiones optimizadas
```

---

## 📱 Validadores de Redes Sociales

### 15. WhatsApp Link Preview
**Qué valida:** Preview en WhatsApp

```
Pasos:
1. Abrir WhatsApp (web o móvil)
2. Enviar a ti mismo: https://metasoft.pe
3. Verificar preview aparece con imagen

Esperado:
✅ Imagen og-image.jpg visible
✅ Título visible
✅ Descripción visible
```

---

### 16. Slack Link Unfurling
**Qué valida:** Preview en Slack

```
Pasos:
1. Abrir Slack
2. Pegar URL: https://metasoft.pe
3. Verificar preview se expande

Esperado:
✅ Imagen og-image.jpg
✅ Título y descripción
```

---

## 📋 Checklist de Validación

### Pre-Validación
- [ ] Sitio desplegado en producción
- [ ] og-image.jpg creado y subido
- [ ] twitter-card.jpg creado y subido
- [ ] Cache limpiado (Ctrl + Shift + R)

### Validaciones Obligatorias
- [ ] Rich Results Test (schemas)
- [ ] PageSpeed Insights (SEO 90+)
- [ ] Mobile-Friendly Test
- [ ] Facebook Debugger
- [ ] Twitter Card Validator

### Validaciones Opcionales
- [ ] LinkedIn Inspector
- [ ] W3C Validator
- [ ] SSL Checker
- [ ] WhatsApp preview
- [ ] Google Index Check

### Post-Validación
- [ ] Screenshots guardados
- [ ] Errores documentados
- [ ] Correcciones aplicadas
- [ ] Re-validación después de fixes

---

## 🆘 Troubleshooting Rápido

### "Schema not detected"
```
Causa: Error sintaxis JSON
Solución:
1. Copiar JSON a jsonlint.com
2. Corregir errores
3. Validar nuevamente
```

### "Image not found (404)"
```
Causa: Imagen no existe o ruta incorrecta
Solución:
1. Verificar archivo existe en /assets/images/
2. Verificar nombre exacto (case-sensitive)
3. Verificar URL completa en meta tag
```

### "Facebook shows old image"
```
Causa: Cache de Facebook
Solución:
1. Facebook Debugger
2. Click "Scrape Again"
3. Esperar 5 minutos
4. Probar en incógnito
```

### "SEO score low"
```
Causa: Múltiples factores
Solución:
1. Revisar meta description presente
2. Verificar title < 60 caracteres
3. Confirmar H1 presente
4. Validar robots.txt no bloquea
```

---

## 📞 Soporte

Si algún validador falla:
1. Capturar screenshot del error
2. Revisar consola del navegador (F12)
3. Verificar sintaxis en validator correspondiente
4. Consultar documentación oficial
5. Preguntar en comunidad de desarrolladores

---

**Última actualización:** 30 diciembre 2025
