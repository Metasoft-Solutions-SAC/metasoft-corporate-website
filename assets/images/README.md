# Carpeta de imágenes

Almacena aquí todas las imágenes del sitio web.

## Estructura sugerida:

```
images/
├── logo.svg              # Logo de la empresa
├── favicon.png           # Favicon
├── hero/                 # Imágenes hero sections
├── features/             # Iconos y imágenes de características
├── team/                 # Fotos del equipo
├── portfolio/            # Imágenes de proyectos
├── blog/                 # Imágenes para artículos
└── icons/                # Iconos e íconos SVG
```

## Formatos recomendados:

### Para fotografías:
- **WebP**: Mejor compresión (usar con fallback)
- **JPEG**: Alta compatibilidad
- **PNG**: Para imágenes con transparencia

### Para gráficos e iconos:
- **SVG**: Escalable, tamaño pequeño, ideal para logos e iconos
- **PNG**: Para iconos con transparencia

## Ejemplo de uso con fallback:

```html
<picture>
    <source srcset="imagen.webp" type="image/webp">
    <source srcset="imagen.jpg" type="image/jpeg">
    <img src="imagen.jpg" alt="Descripción" loading="lazy">
</picture>
```

## Optimización:

### Herramientas online:
- [TinyPNG](https://tinypng.com/) - Compresión PNG y JPEG
- [Squoosh](https://squoosh.app/) - Compresión y conversión
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimización SVG

### Herramientas de línea de comandos:
- ImageMagick
- OptiPNG
- JPEGoptim

## Mejores prácticas:

1. **Siempre usar atributo alt**: `<img src="..." alt="Descripción clara">`
2. **Lazy loading**: `<img src="..." loading="lazy">`
3. **Responsive images**: Usar `srcset` para diferentes resoluciones
4. **Tamaño apropiado**: No usar imágenes más grandes de lo necesario
5. **Compresión**: Comprimir antes de subir al sitio

## Ejemplo responsive:

```html
<img 
    srcset="imagen-small.jpg 400w,
            imagen-medium.jpg 800w,
            imagen-large.jpg 1200w"
    sizes="(max-width: 600px) 400px,
           (max-width: 900px) 800px,
           1200px"
    src="imagen-medium.jpg"
    alt="Descripción">
```

