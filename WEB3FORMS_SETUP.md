# 📧 Configuración de Web3Forms para el Formulario de Contacto

## ✅ Pasos para Activar el Envío de Emails

### 1. Registrarse en Web3Forms (GRATIS)

1. Ve a: **https://web3forms.com**
2. Haz clic en "Get Started" o "Sign Up"
3. Regístrate con tu email o cuenta de GitHub/Google
4. Confirma tu email

### 2. Obtener tu Access Key

1. Una vez dentro del dashboard, haz clic en "**Create New Form**"
2. Configura:
   - **Form Name:** Metasoft Contact Form
   - **Email:** contacto@metasoft.pe
   - **Other settings:** Deja los valores por defecto
3. Haz clic en "**Create Form**"
4. **Copia el Access Key** que te generan (algo como: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 3. Actualizar el Código

Abre el archivo: `assets/js/contact.js`

Busca la línea **28** que dice:
```javascript
formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
```

Reemplaza `YOUR_WEB3FORMS_ACCESS_KEY` con tu Access Key:
```javascript
formData.append('access_key', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890');
```

### 4. Guardar y Probar

1. Guarda el archivo
2. Sube los cambios a tu repositorio
3. Vercel lo desplegará automáticamente
4. Prueba el formulario en tu sitio web

---

## 📊 Plan Gratuito de Web3Forms

✅ **250 emails al mes gratis**  
✅ Sin límite de formularios  
✅ Sin marca de agua  
✅ Respuesta automática opcional  
✅ Archivo adjuntos  
✅ Protección contra spam  
✅ Dashboard con estadísticas  

---

## 🔧 Configuración Opcional (Recomendada)

### Activar Protección Anti-Spam

En el dashboard de Web3Forms:
1. Ve a tu formulario
2. Activa "**Bot Protection**"
3. Activa "**Honeypot Protection**"

### Configurar Respuesta Automática

Puedes enviar un email automático al usuario que envió el formulario:
1. En el dashboard, ve a "**Email Settings**"
2. Activa "**Auto Response**"
3. Personaliza el mensaje

### Notificaciones

Puedes añadir más emails para recibir las notificaciones:
1. Ve a "**Email Settings**"
2. Agrega emails adicionales en "**CC/BCC**"

---

## 🚀 Ejemplo de Email que Recibirás

```
De: Formulario Web Metasoft
Para: contacto@metasoft.pe
Asunto: Nuevo contacto desde la web: Juan Pérez

━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre: Juan Pérez
Email: juan@empresa.com
Empresa: Tech Solutions SAC
Teléfono: +51 999 999 999

Mensaje:
Hola, estoy interesado en desarrollar una 
aplicación web para mi empresa...

━━━━━━━━━━━━━━━━━━━━━━━━━━
Enviado desde: metasoft.pe
```

---

## 🆘 Solución de Problemas

### El formulario no envía emails

1. **Verifica el Access Key**: Asegúrate de que copiaste correctamente el access key
2. **Revisa la consola**: Abre las DevTools (F12) y busca errores en la consola
3. **Verifica el email**: Asegúrate de que contacto@metasoft.pe esté verificado en Web3Forms
4. **Revisa spam**: Los primeros emails pueden caer en spam

### Error: "Invalid Access Key"

- El access key está mal copiado o no existe
- Genera un nuevo access key en el dashboard

### Los emails no llegan a contacto@metasoft.pe

- Verifica que el email esté verificado en Web3Forms
- Revisa la carpeta de spam/correo no deseado
- En el dashboard, verifica en "Email Logs" si se enviaron

---

## 📚 Recursos Adicionales

- Documentación oficial: https://docs.web3forms.com
- Ejemplos: https://web3forms.com/examples
- API Reference: https://docs.web3forms.com/api-reference
- Soporte: support@web3forms.com

---

## 🔄 Alternativas si Necesitas Más Emails

Si necesitas más de 250 emails al mes:

1. **Plan Pro de Web3Forms**: $7/mes - 2,500 emails
2. **EmailJS**: 200 emails/mes gratis
3. **Formspree**: 50 emails/mes gratis, $10/mes para más
4. **SendGrid**: 100 emails/día gratis
5. **Implementar backend propio** (Node.js + Nodemailer)

---

✨ **¡Listo! Tu formulario ahora enviará emails reales a contacto@metasoft.pe**
