/**
 * JavaScript principal del sitio
 * Maneja la interactividad y funcionalidades generales
 * (Efectos de scroll, validación de formularios, notificaciones)
 */

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // Inicializar módulos generales
    initScrollEffects();
    initSmoothScroll();
    initFormValidation();

    console.log('Metasoft Corporate Website - Main scripts initialized');
});

/**
 * Inicializar Header con detección de sección activa
 */
function initHeader() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -60% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Actualizar links activos
                navLinks.forEach(link => {
                    const linkSection = link.getAttribute('data-section');
                    if (linkSection === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
}

/**
 * Menú móvil (hamburguesa)
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMobile = document.querySelector('.nav-mobile');

    if (!hamburger || !navMobile) return;

    hamburger.addEventListener('click', function() {
        navMobile.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-link-mobile');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
            navMobile.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

/**
 * Efectos al hacer scroll
 */
function initScrollEffects() {
    const header = document.querySelector('.header');

    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Añadir sombra al header al hacer scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer para animaciones de elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos que queremos animar
    const animatedElements = document.querySelectorAll('.feature-card, .footer-section');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Scroll suave para anclas
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Ignorar si es solo "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Validación de formularios
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');

            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid) {
                console.log('Formulario válido, enviar datos...');
                // Aquí iría la lógica para enviar el formulario
                showNotification('Mensaje enviado correctamente', 'success');
                form.reset();
            }
        });

        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    });
}

/**
 * Validar un campo individual
 */
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remover mensaje de error previo
    removeError(field);

    // Validar campo requerido
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Este campo es obligatorio';
    }

    // Validar email
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Email no válido';
        }
    }

    // Validar teléfono
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Teléfono no válido';
        }
    }

    // Mostrar error si no es válido
    if (!isValid) {
        showError(field, errorMessage);
    }

    return isValid;
}

/**
 * Mostrar error en un campo
 */
function showError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

/**
 * Remover error de un campo
 */
function removeError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

/**
 * Mostrar notificación
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 100);

    // Remover después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Utilidad: Debounce para optimizar eventos que se disparan frecuentemente
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
