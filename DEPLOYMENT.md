# Metasoft Corporate Website - Deployment Guide

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Configurar despliegue en Vercel"
   git push origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración

3. **Configuración automática:**
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (dejar vacío)
   - Output Directory: `./`

4. **Deploy:**
   - Click en "Deploy"
   - Tu sitio estará disponible en: `https://tu-proyecto.vercel.app`

### Opción 2: Despliegue con Vercel CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Desplegar:**
   ```bash
   vercel
   ```

4. **Desplegar a producción:**
   ```bash
   vercel --prod
   ```

## 📋 Configuración Incluida

El archivo `vercel.json` incluye:

- ✅ Configuración de headers de seguridad
- ✅ Cache optimizado para assets estáticos (1 año)
- ✅ URLs limpias sin `.html`
- ✅ Redirecciones automáticas
- ✅ Protección XSS y clickjacking

## 🌐 Dominio Personalizado

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

## 🔄 Despliegues Automáticos

Una vez conectado con GitHub, cada push a `main` desplegará automáticamente:
- ✅ Preview deployments para pull requests
- ✅ Production deployment para rama main
- ✅ Rollback instantáneo a versiones anteriores

## 📊 Monitoreo

Vercel proporciona:
- Analytics de tráfico
- Core Web Vitals
- Logs en tiempo real
- Métricas de rendimiento

## 🔐 Variables de Entorno

Si necesitas configurar variables:
1. Project Settings → Environment Variables
2. Agrega tus variables
3. Redeploy el proyecto

---

**Tu sitio estará disponible en:**
- Preview: `https://tu-proyecto-[hash].vercel.app`
- Production: `https://tu-proyecto.vercel.app`
