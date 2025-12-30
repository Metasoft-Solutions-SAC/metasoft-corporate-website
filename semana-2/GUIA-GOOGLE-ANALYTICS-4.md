# 📊 Google Analytics 4: Guía de Implementación

**Objetivo:** Configurar GA4 para tracking de conversiones y eventos  
**Tiempo estimado:** 1.5 horas  
**Impacto:** Medición precisa de ROI y comportamiento de usuarios

---

## 🎯 PASO 1: Crear Cuenta Google Analytics 4

### 1.1 Acceder a Google Analytics

```
🔗 https://analytics.google.com
```

1. Iniciar sesión con Gmail (preferir `contacto@metasoft.pe`)
2. Si ya tienes cuenta Analytics antigua (Universal Analytics):
   - Click **"Administrador"** (engranaje abajo izquierda)
   - Click **"Crear propiedad"**
3. Si es primera vez:
   - Click **"Empezar a medir"**

---

### 1.2 Configurar Cuenta

**Nombre de cuenta:**
```
Metasoft Solutions
```

**Configuración de datos compartidos:**
- [x] Recomendaciones de Google
- [x] Especialistas de cuentas de Google
- [x] Asistencia técnica
- [ ] Google Marketing Platform (dejar desmarcado)

Click **"Siguiente"**

---

### 1.3 Crear Propiedad GA4

**Nombre de propiedad:**
```
Metasoft Corporate Website
```

**Zona horaria:**
```
(GMT-05:00) Hora de Perú
```

**Moneda:**
```
Nuevo Sol Peruano (PEN)
```

**Opciones avanzadas:**
- NO crear propiedad Universal Analytics (obsoleto desde julio 2023)
- Solo usar GA4

Click **"Siguiente"**

---

### 1.4 Configurar Detalles del Negocio

**Sector:**
```
Ordenadores y electrónica → Software
```

**Tamaño de la empresa:**
```
Pequeña (1-10 empleados)
```

**Intención de uso:** (Seleccionar 3)
- [x] Analizar el comportamiento de los usuarios
- [x] Medir conversiones
- [x] Optimizar la eficacia de marketing

Click **"Crear"**

---

### 1.5 Aceptar Términos

1. Seleccionar país: **Perú**
2. Leer términos de servicio
3. Marcar:
   - [x] Acepto el Acuerdo de Procesamiento de Datos
   - [x] Acepto los Términos de Servicio
4. Click **"Acepto"**

---

## 🎯 PASO 2: Configurar Flujo de Datos Web

### 2.1 Crear Flujo de Datos

Después de crear propiedad, GA4 te pedirá configurar recopilación de datos.

1. Seleccionar plataforma: **Web**
2. Configurar flujo de datos web:

**URL del sitio web:**
```
https://metasoft.pe
```

**Nombre del flujo:**
```
Metasoft Corporate Website
```

**Medición mejorada:**
- [x] Activar medición mejorada (recomendado)

Click **"Crear flujo"**

---

### 2.2 Copiar ID de Medición

GA4 mostrará los detalles del flujo de datos.

**Buscar:** "ID de medición"

```
Formato: G-XXXXXXXXXX
Ejemplo: G-ABC12DEF34
```

**¡COPIAR ESTE CÓDIGO!** Lo necesitarás para el paso siguiente.

---

## 🎯 PASO 3: Instalar Código GA4 en Sitio Web

### 3.1 Código gtag.js Ya Preparado

El código GA4 ya está comentado en `index.html` (líneas 29-42).

**Pasos:**

1. Abrir `index.html` en editor
2. Buscar líneas 29-42:
   ```html
   <!-- Google Analytics 4 (GA4) -->
   <!-- INSTRUCCIONES: ... -->
   <!-- 
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
   -->
   ```

3. **Descomentar** todo el bloque (eliminar `<!--` y `-->`)

4. **Reemplazar** `G-XXXXXXXXXX` (aparece 2 veces) con tu ID real:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC12DEF34"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-ABC12DEF34', {
       'anonymize_ip': true,
       'cookie_flags': 'SameSite=None;Secure'
     });
   </script>
   ```

5. **Guardar** archivo

6. **Subir** a servidor (GitHub Pages, hosting, etc.)

---

### 3.2 Configuración de Privacidad

El código incluye 2 configuraciones importantes:

```javascript
'anonymize_ip': true
```
- Anonimiza IPs para cumplir GDPR/LGPD
- Requerido en Europa, recomendado en Perú

```javascript
'cookie_flags': 'SameSite=None;Secure'
```
- Permite cookies en iframes
- Requiere HTTPS (ya configurado)

---

## 🎯 PASO 4: Verificar Instalación

### 4.1 Prueba en Tiempo Real

1. **Subir** sitio con código GA4 activado
2. Abrir sitio: `https://metasoft.pe`
3. En GA4 → Menú izquierdo → **"Informes"** → **"Tiempo real"**
4. Debería aparecer: **"1 usuario activo ahora"** (tú)

**Esperar 30-60 segundos** para que aparezcan datos.

**Si aparece tu visita:** ✅ Instalación correcta  
**Si no aparece:** ⚠️ Ir a sección "Problemas Comunes"

---

### 4.2 Verificar con Google Tag Assistant

**Chrome Extension (Recomendado):**

1. Instalar extensión: **Tag Assistant (by Google)**
   ```
   🔗 https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-google
   ```

2. Abrir `https://metasoft.pe`
3. Click en icono Tag Assistant (esquina superior derecha)
4. Click **"Enable"** → **"Record"**
5. Recargar página
6. Tag Assistant debe mostrar:
   ```
   ✅ Google Analytics 4 (GA4)
   ID: G-ABC12DEF34
   Estado: Working
   ```

---

### 4.3 Verificar en Código Fuente

**Método manual:**

1. Abrir `https://metasoft.pe`
2. Click derecho → **"Ver código fuente"** (Ctrl+U)
3. Buscar (Ctrl+F): `gtag.js`
4. Verificar que aparezca tu ID: `G-ABC12DEF34`
5. Verificar que NO esté comentado (`<!--` ... `-->`)

---

## 🎯 PASO 5: Configurar Eventos Personalizados

GA4 automáticamente rastrea eventos básicos (page_view, scroll, etc.), pero configuraremos 3 eventos clave para conversiones.

### 5.1 Evento: form_submit (Formulario Contacto)

**Objetivo:** Medir cuántas personas envían el formulario.

**Editar:** `assets/js/contact.js`

**Buscar función de envío de formulario** (aproximadamente línea 50-80):

```javascript
// Ejemplo actual (puede variar):
function handleSubmit(event) {
    event.preventDefault();
    // ... validación ...
    
    // ⬇️ AGREGAR AQUÍ (antes del fetch):
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'event_category': 'Contacto',
            'event_label': 'Formulario Principal',
            'value': 1
        });
    }
    
    // ... código de envío ...
}
```

**Ubicación exacta:**
- Justo ANTES de enviar formulario
- DESPUÉS de validación exitosa
- DENTRO del `if` de validación

---

### 5.2 Evento: cta_click (Botones CTA)

**Objetivo:** Medir clicks en botones principales.

**Editar:** `assets/js/main.js`

**Agregar al final del archivo:**

```javascript
// ========================================
// Google Analytics 4 - Event Tracking
// ========================================

/**
 * Track CTA button clicks
 */
function trackCTAClicks() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .cta-button, [data-cta]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (typeof gtag !== 'undefined') {
                const buttonText = this.textContent.trim();
                const buttonHref = this.getAttribute('href') || 'No link';
                
                gtag('event', 'cta_click', {
                    'event_category': 'CTA',
                    'event_label': buttonText,
                    'button_url': buttonHref
                });
            }
        });
    });
}

/**
 * Track 90% scroll depth (high engagement)
 */
function trackScrollDepth() {
    let scrolled90 = false;
    
    window.addEventListener('scroll', function() {
        if (scrolled90) return;
        
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercent >= 90) {
            scrolled90 = true;
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll', {
                    'event_category': 'Engagement',
                    'event_label': '90% Scroll',
                    'percent_scrolled': 90
                });
            }
        }
    });
}

// Initialize tracking when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        trackCTAClicks();
        trackScrollDepth();
    });
} else {
    trackCTAClicks();
    trackScrollDepth();
}
```

---

### 5.3 Guardar y Probar Eventos

1. **Guardar** `contact.js` y `main.js`
2. **Subir** archivos al servidor
3. **Probar** eventos:

**Test form_submit:**
1. Abrir `https://metasoft.pe#contacto`
2. Llenar formulario
3. Enviar
4. GA4 → Tiempo real → Eventos → Debe aparecer `form_submit`

**Test cta_click:**
1. Click en cualquier botón principal
2. GA4 → Tiempo real → Eventos → Debe aparecer `cta_click`

**Test scroll:**
1. Hacer scroll hasta el final de la página
2. GA4 → Tiempo real → Eventos → Debe aparecer `scroll`

---

## 🎯 PASO 6: Configurar Conversiones

### 6.1 Marcar form_submit como Conversión

1. GA4 → **"Configurar"** → **"Eventos"**
2. Esperar 24h hasta que aparezca evento `form_submit`
3. Cuando aparezca:
   - Toggle **"Marcar como conversión"** → **ON**
4. Repetir para `cta_click` (opcional)

**Resultado:** GA4 contabilizará formularios enviados como conversiones.

---

### 6.2 Crear Audiencias

**Audiencia 1: Usuarios Comprometidos**

1. GA4 → **"Configurar"** → **"Audiencias"**
2. Click **"+ Nueva audiencia"**
3. **"Crear audiencia personalizada"**
4. Configuración:
   ```
   Nombre: Usuarios Comprometidos
   
   Condiciones:
   - scroll (90%) en los últimos 7 días
   - O cta_click en los últimos 7 días
   - O session_duration > 60 segundos
   ```
5. Guardar

**Audiencia 2: Conversores (Lead Qualified)**

```
Nombre: Lead Qualified

Condiciones:
- form_submit (cualquier momento)
```

**Uso:** Remarketing en Google Ads, análisis de cohortes.

---

## 🎯 PASO 7: Configurar Informes Personalizados

### 7.1 Informe: Embudo de Conversión

1. GA4 → **"Explorar"**
2. **"Análisis de embudo"**
3. Configurar pasos:
   ```
   Paso 1: page_view (Landing)
   Paso 2: scroll (90% - Engagement)
   Paso 3: cta_click (Interés)
   Paso 4: form_submit (Conversión)
   ```
4. Guardar como: **"Embudo Conversión Website"**

**Resultado:** Visualiza dónde pierdes usuarios.

---

### 7.2 Informe: Fuentes de Tráfico Más Valiosas

1. **"Explorar"** → **"Análisis de rutas"**
2. Configurar:
   ```
   Dimensión inicial: Fuente/medio
   Evento final: form_submit
   ```
3. Guardar como: **"Mejores Canales de Conversión"**

**Resultado:** Identifica qué canales traen más leads.

---

## 🎯 PASO 8: Integrar con Google Search Console

### 8.1 Vincular GSC con GA4

**Requisito:** GSC ya verificado (ver GUIA-GOOGLE-SEARCH-CONSOLE.md)

**Pasos:**

1. GA4 → **"Administrador"** → **"Vínculos de Search Console"**
2. Click **"Vincular"**
3. Seleccionar propiedad GSC: `https://metasoft.pe`
4. Confirmar vinculación

---

### 8.2 Verificar Datos GSC en GA4

Tras 24-48h:

1. GA4 → **"Informes"** → **"Adquisición"** → **"Búsqueda de Google"**
2. Deberías ver:
   - Consultas de búsqueda
   - Impresiones
   - Clics
   - CTR
   - Posición promedio

---

## 🎯 PASO 9: Configurar Google Ads (Opcional)

Si planeas hacer campañas pagadas:

### 9.1 Vincular Google Ads

1. GA4 → **"Administrador"** → **"Vínculos de Google Ads"**
2. Click **"Vincular"**
3. Seleccionar cuenta Google Ads
4. Activar:
   - [x] Importación de conversiones
   - [x] Remarketing
   - [x] Personalización de anuncios
5. Confirmar

---

### 9.2 Importar Conversiones a Google Ads

1. Google Ads → **"Herramientas"** → **"Conversiones"**
2. Click **"Importar"**
3. Seleccionar: **Google Analytics 4**
4. Seleccionar conversiones:
   - [x] form_submit
5. Importar

**Resultado:** Google Ads optimizará campañas según leads reales.

---

## 📊 Métricas Clave a Monitorear

### Dashboard Semanal

```
Usuarios:               100-200 (Mes 1) → 500-1,000 (Mes 3)
Sesiones:               150-300 (Mes 1) → 800-1,500 (Mes 3)
Tasa rebote:            <60% (objetivo <50%)
Duración promedio:      >1 minuto (objetivo >2 min)
Páginas por sesión:     >2 (objetivo >3)
```

### Conversiones

```
form_submit:            5-10/mes (Mes 1) → 30-50/mes (Mes 3)
Tasa conversión:        3-5% (Mes 1) → 5-8% (Mes 3)
cta_click:              50-100/mes → 200-400/mes
scroll (90%):           30-50/mes → 150-300/mes
```

### Canales de Adquisición

```
Organic Search:         40-50% (principal)
Direct:                 20-30%
Social:                 10-20%
Referral:               5-10%
Paid (si usas):         10-20%
```

---

## ✅ Checklist GA4

### Configuración Inicial
- [ ] Cuenta GA4 creada: "Metasoft Solutions"
- [ ] Propiedad creada: "Metasoft Corporate Website"
- [ ] Zona horaria: Perú (GMT-05:00)
- [ ] Moneda: PEN (Nuevo Sol)
- [ ] Flujo de datos web creado
- [ ] ID de medición copiado: G-XXXXXXXXXX

### Instalación Código
- [ ] Código gtag.js descomentado en index.html
- [ ] ID reemplazado (2 ubicaciones)
- [ ] anonymize_ip configurado
- [ ] cookie_flags configurado
- [ ] Archivo subido al servidor
- [ ] Verificado en Tiempo Real (✅ 1 usuario activo)

### Eventos Personalizados
- [ ] form_submit implementado en contact.js
- [ ] cta_click implementado en main.js
- [ ] scroll (90%) implementado en main.js
- [ ] Eventos testeados en Tiempo Real
- [ ] form_submit marcado como conversión
- [ ] Audiencias creadas (Comprometidos, Lead Qualified)

### Informes y Análisis
- [ ] Informe Embudo de Conversión creado
- [ ] Informe Mejores Canales creado
- [ ] GSC vinculado con GA4
- [ ] Datos GSC visibles en GA4 (tras 48h)

### Integraciones Opcionales
- [ ] Google Ads vinculado (si aplica)
- [ ] Conversiones importadas a Ads (si aplica)

---

## 🆘 Problemas Comunes

### "No aparezco en Tiempo Real"
**Causas:**
1. Código comentado o ID incorrecto
2. AdBlocker bloqueando gtag.js
3. Navegador en modo incógnito con cookies desactivadas
4. Sitio en localhost (no subido al servidor)

**Solución:**
1. Verificar código fuente: buscar `gtag.js?id=G-`
2. Desactivar AdBlocker temporalmente
3. Abrir en navegador normal (no incógnito)
4. Confirmar que sitio esté en `https://metasoft.pe`

---

### "Eventos no aparecen en GA4"
**Causas:**
1. Función `gtag()` no definida (código base no cargado)
2. Eventos definidos ANTES de que gtag.js cargue
3. Errores JavaScript bloqueando ejecución

**Solución:**
1. Verificar que `gtag.js` esté en `<head>`, antes de otros scripts
2. Usar `if (typeof gtag !== 'undefined')` siempre
3. Abrir consola JavaScript (F12) y buscar errores

---

### "form_submit no se registra"
**Causa:** Evento disparado DESPUÉS de redirección  
**Solución:** Disparar evento ANTES de `window.location.href`

```javascript
// ❌ INCORRECTO
window.location.href = '/gracias';
gtag('event', 'form_submit'); // nunca se ejecuta

// ✅ CORRECTO
gtag('event', 'form_submit');
setTimeout(() => {
    window.location.href = '/gracias';
}, 300); // espera 300ms
```

---

## 🔗 Recursos

**Google Analytics 4:**
- 🔗 https://analytics.google.com

**Documentación Oficial:**
- 🔗 https://support.google.com/analytics

**Tag Assistant (Chrome):**
- 🔗 https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-google

**GA4 Event Builder:**
- 🔗 https://ga-dev-tools.web.app/ga4/event-builder/

**GA4 vs UA Comparison:**
- 🔗 https://support.google.com/analytics/answer/11583528

---

**Tiempo total:** 1.5 horas  
**Revisión:** Semanal (primeros 30 días), luego mensual  
**Resultado:** Tracking completo de conversiones y ROI medible ✅
