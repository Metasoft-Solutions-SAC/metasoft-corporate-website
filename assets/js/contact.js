/**
 * Contact Section - Metasoft Solutions
 * Maneja el formulario de contacto y validación (las animaciones se gestionan globalmente en main.js)
 */

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

/**
 * Inicializar formulario de contacto
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');
    
    // Marcar campos requeridos
    inputs.forEach(input => {
        if (input.hasAttribute('required')) {
            const label = input.parentElement.querySelector('label');
            if (label && !label.classList.contains('required')) {
                label.classList.add('required');
            }
        }
    });
    
    // Validación en tiempo real mejorada
    inputs.forEach(input => {
        let hasBlurred = false;
        
        input.addEventListener('blur', function() {
            hasBlurred = true;
            validateFieldEnhanced(this);
        });

        input.addEventListener('input', function() {
            if (hasBlurred) {
                validateFieldEnhanced(this);
            }
            
            // Limpiar error al escribir
            if (this.classList.contains('error')) {
                validateFieldEnhanced(this);
            }
        });
        
        // Accesibilidad: anunciar errores
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            validateFieldEnhanced(this);
        });
    });

    // Envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar todos los campos
        let isValid = true;
        inputs.forEach(input => {
            if (!validateFieldEnhanced(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Focus en el primer campo con error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.focus();
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            if (window.showToast) {
                window.showToast('Por favor, corrige los errores en el formulario', 'error');
            }
            return;
        }

        handleFormSubmit(form);
    });
}

/**
 * Validar un campo del formulario (Enhanced)
 * @param {HTMLElement} field - Campo a validar
 * @returns {boolean} - True si el campo es válido
 */
function validateFieldEnhanced(field) {
    const errorSpan = field.parentElement.querySelector('.form-error');
    let errorMessage = '';
    let isValid = true;

    // Validar campos requeridos
    if (field.hasAttribute('required') && !field.value.trim()) {
        errorMessage = 'Este campo es obligatorio';
        isValid = false;
    }
    // Validar email
    else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            errorMessage = 'Por favor, ingresa un email válido';
            isValid = false;
        }
    }
    // Validar nombre (mínimo 2 caracteres)
    else if (field.name === 'name' && field.value && field.value.length < 2) {
        errorMessage = 'El nombre debe tener al menos 2 caracteres';
        isValid = false;
    }
    // Validar teléfono (si tiene contenido)
    else if (field.name === 'phone' && field.value) {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(field.value)) {
            errorMessage = 'Por favor, ingresa un teléfono válido';
            isValid = false;
        }
    }
    // Validar mensaje (mínimo 10 caracteres)
    else if (field.name === 'message' && field.value && field.value.length < 10) {
        errorMessage = 'El mensaje debe tener al menos 10 caracteres';
        isValid = false;
    }

    // Mostrar/ocultar error
    if (!isValid) {
        field.classList.add('error');
        field.classList.remove('valid');
        if (errorSpan) {
            errorSpan.textContent = errorMessage;
            errorSpan.classList.add('show');
        }
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorSpan?.id || '');
    } else {
        field.classList.remove('error');
        if (field.value) {
            field.classList.add('valid');
        } else {
            field.classList.remove('valid');
        }
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.classList.remove('show');
        }
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
    }

    return isValid;
}

/**
 * Validar un campo del formulario (Legacy - mantener por compatibilidad)
 * @param {HTMLElement} field - Campo a validar
 * @returns {boolean} - True si el campo es válido
 */
function validateField(field) {
    return validateFieldEnhanced(field);
}

/**
 * Manejar el envío del formulario usando API proxy segura
 * @param {HTMLFormElement} form - Formulario a enviar
 */
async function handleFormSubmit(form) {
    const formContainer = form.parentElement;
    const successMessage = formContainer.querySelector('.contact-success');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Loading state
    if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
    }

    // Preparar datos del formulario como JSON
    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        company: form.company?.value.trim() || '',
        phone: form.phone?.value.trim() || '',
        message: form.message.value.trim()
    };

    try {
        // Enviar a API proxy interna (oculta la API key)
        // La API maneja validación, sanitización y rate limiting
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        
        // Process response from our API

        // Remover loading state
        if (submitBtn) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }

        if (response.ok && result.success) {
            // Éxito - Email enviado
            
            if (window.showToast) {
                window.showToast('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
            }

            // Ocultar formulario y mostrar mensaje de éxito
            form.style.display = 'none';
            successMessage.style.display = 'flex';

            // Resetear formulario después de 5 segundos
            setTimeout(() => {
                form.reset();
                form.style.display = 'flex';
                successMessage.style.display = 'none';
                
                // Limpiar clases de validación
                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.classList.remove('error', 'valid');
                    const errorSpan = input.parentElement.querySelector('.form-error');
                    if (errorSpan) {
                        errorSpan.textContent = '';
                        errorSpan.classList.remove('show');
                    }
                });
            }, 5000);
        } else {
            // Error de la API o rate limiting
            const errorMessage = response.status === 429
                ? `Has alcanzado el límite de envíos. ${result.message || 'Intenta más tarde.'}`
                : result.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
            
            throw new Error(errorMessage);
        }

    } catch (error) {
        // Error al enviar formulario - log error for debugging only in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.error('Error al enviar formulario:', error);
        }
        
        // Remover loading state
        if (submitBtn) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }

        // Mostrar error al usuario
        if (window.showToast) {
            window.showToast(
                error.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente a janover@metasoft.pe',
                'error',
                7000 // 7 segundos para que puedan leer
            );
        } else {
            alert(error.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.');
        }
    }
}


