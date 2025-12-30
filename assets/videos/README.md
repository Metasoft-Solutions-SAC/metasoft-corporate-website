# Carpeta de videos

Almacena aquí los archivos de video del sitio web.

## Formatos recomendados:
- **MP4** (H.264): Mejor compatibilidad
- **WebM** (VP9): Mejor compresión
- **OGG** (Theora): Fallback adicional

## Ejemplo de uso en HTML:

```html
<video controls width="100%">
    <source src="../assets/videos/mi-video.mp4" type="video/mp4">
    <source src="../assets/videos/mi-video.webm" type="video/webm">
    Tu navegador no soporta el elemento video.
</video>
```

## Video de fondo:

```html
<video autoplay muted loop class="bg-video">
    <source src="../assets/videos/background.mp4" type="video/mp4">
</video>
```

## Optimización:
- Comprimir videos antes de subirlos
- Usar herramientas como HandBrake o FFmpeg
- Considerar usar servicios de hosting de video (YouTube, Vimeo) para videos largos
- Usar lazy loading para videos no esenciales

## Recursos:
- [HandBrake](https://handbrake.fr/) - Compresor de video gratuito
- [CloudConvert](https://cloudconvert.com/) - Conversión online
- [FFmpeg](https://ffmpeg.org/) - Herramienta de línea de comandos

