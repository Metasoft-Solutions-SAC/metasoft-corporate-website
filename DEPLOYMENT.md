# Guía de Deployment en Vercel

## Problema: Estilos no se aplican en Vercel

Si los estilos no se están aplicando correctamente en la versión deployada en Vercel, sigue estos pasos:

### 1. Limpiar Caché de Vercel

```bash
# En el proyecto de Vercel, ir a:
Settings → Functions → Clear Cache
```

O desde la línea de comandos:

```bash
vercel --force
```

### 2. Verificar archivos en el repositorio

Asegúrate de que todos los archivos CSS estén commiteados:

```bash
git status
git add assets/css/*.css
git commit -m "Update CSS styles"
git push origin main
```

### 3. Forzar rebuild en Vercel

En el dashboard de Vercel:
1. Ve a "Deployments"
2. Haz clic en el deployment más reciente
3. Haz clic en "Redeploy"
4. Marca la opción "Use existing Build Cache" como **NO**

### 4. Verificar que no haya conflictos de caché

Los archivos CSS ahora incluyen `?v=2.0` para evitar problemas de caché del navegador.

Si haces cambios en CSS en el futuro, incrementa este número:
```html
<link rel="stylesheet" href="assets/css/header.css?v=2.1">
```

### 5. Limpiar caché del navegador

Después del deployment:
- Chrome: Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)
- Firefox: Ctrl + F5 (Windows) / Cmd + Shift + R (Mac)
- Safari: Cmd + Option + R

### 6. Verificar en modo incógnito

Abre el sitio en una ventana de incógnito para asegurarte de que no hay problemas de caché local.

## Configuración actual

- **Cache-Control**: 1 hora (3600 segundos) con revalidación
- **CSS Versioning**: v=2.0 para cache busting
- **Fallbacks**: Todos los estilos críticos tienen valores fallback

## Cambios realizados

1. ✅ Agregados archivos CSS faltantes (why-choose.css, faq.css)
2. ✅ Actualizado vercel.json con caché menos agresivo
3. ✅ Agregado versionado a los archivos CSS (?v=2.0)
4. ✅ Agregados valores fallback en header.css para evitar problemas de carga
5. ✅ Ajustado IntersectionObserver para mejor soporte móvil

## Próximos deployments

Cada vez que hagas cambios en CSS:
1. Incrementa la versión en index.html
2. Commit y push
3. Vercel rebuildeará automáticamente
