/**
 * Contact Section - Metasoft Solutions
 * Maneja el formulario de contacto, validación y animaciones
 */

document.addEventListener('DOMContentLoaded', function() {
    initContactAnimations();
    initContactForm();
});

/**
 * Inicializar animaciones de la sección Contact
 */
function initContactAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-100px 0px -100px 0px'
    };

    // Animar header
    const header = document.querySelector('.contact-header');
    if (header) {
        animateOnScroll(header, observerOptions, 0);
    }

    // Animar sección de información
    const infoSection = document.querySelector('.contact-info-section');
    if (infoSection) {
        animateOnScroll(infoSection, observerOptions, 0.2);
    }

    // Animar sección del formulario
    const formSection = document.querySelector('.contact-form-section');
    if (formSection) {
        animateOnScroll(formSection, observerOptions, 0.3);
    }
}

/**
 * Inicializar formulario de contacto
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');
    
    // Validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    // Envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar todos los campos
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            handleFormSubmit(form);
        }
    });
}

/**
 * Validar un campo del formulario
 * @param {HTMLElement} field - Campo a validar
 * @returns {boolean} - True si el campo es válido
 */
function validateField(field) {
    const errorSpan = field.parentElement.querySelector('.form-error');
    let errorMessage = '';

    // Validar campos requeridos
    if (field.hasAttribute('required') && !field.value.trim()) {
        errorMessage = 'Este campo es obligatorio';
    }
    // Validar email
    else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            errorMessage = 'Email inválido';
        }
    }
    // Validar nombre
    else if (field.name === 'name' && field.value && field.value.length < 2) {
        errorMessage = 'Nombre muy corto';
    }

    // Mostrar u ocultar error
    if (errorMessage) {
        field.classList.add('error');
        if (errorSpan) {
            errorSpan.textContent = errorMessage;
            errorSpan.classList.add('show');
        }
        return false;
    } else {
        field.classList.remove('error');
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.classList.remove('show');
        }
        return true;
    }
}

/**
 * Manejar el envío del formulario
 * @param {HTMLFormElement} form - Formulario a enviar
 */
function handleFormSubmit(form) {
    const formContainer = form.parentElement;
    const successMessage = formContainer.querySelector('.contact-success');

    // Simular envío (en producción, aquí iría la llamada a la API)
    console.log('Formulario enviado:', {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        phone: form.phone.value,
        message: form.message.value
    });

    // Ocultar formulario y mostrar mensaje de éxito
    form.style.display = 'none';
    successMessage.style.display = 'flex';

    // Resetear formulario después de 3 segundos
    setTimeout(() => {
        form.reset();
        form.style.display = 'flex';
        successMessage.style.display = 'none';
        
        // Limpiar clases de error
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.classList.remove('error');
            const errorSpan = input.parentElement.querySelector('.form-error');
            if (errorSpan) {
                errorSpan.textContent = '';
                errorSpan.classList.remove('show');
            }
        });
    }, 3000);
}

/**
 * Animar elemento cuando es visible en el viewport
 * @param {HTMLElement} element - Elemento a animar
 * @param {Object} options - Opciones del Intersection Observer
 * @param {number} delay - Retraso en segundos antes de animar
 */
function animateOnScroll(element, options, delay = 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay * 1000);
                
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(element);
}
