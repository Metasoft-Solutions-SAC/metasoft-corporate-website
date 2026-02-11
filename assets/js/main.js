/**
 * JavaScript principal del sitio
 * Maneja la interactividad y funcionalidades generales
 * (Efectos de scroll, validación de formularios, notificaciones)
 */

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // Inicializar módulos generales
    initSectionAnimations();
    initScrollEffects();
    initFormValidation();
    
    // Inicializar mejoras UX
    initScrollProgress();
    initScrollToTop();
    initToastNotifications();
    initAccessibilityFeatures();
    initReducedMotion();
    initImageLoading();
    preventFOUC();

    // ✅ All scripts initialized successfully
});

/**
 * Inicializar animaciones de secciones con Intersection Observer
 */
function initSectionAnimations() {
    // Verificar soporte del navegador
    if (!('IntersectionObserver' in window)) {
        // Fallback: mostrar todas las secciones inmediatamente
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('is-visible');
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
        return;
    }

    // Ajustar rootMargin según el tamaño de pantalla
    const isMobile = window.innerWidth < 768;
    const observerOptions = {
        root: null,
        rootMargin: isMobile ? '0px' : '-80px',
        threshold: isMobile ? 0.05 : 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Analytics: trackear vista de sección
                if (typeof gtag !== 'undefined') {
                    const sectionId = entry.target.id || 'unknown';
                    gtag('event', 'section_view', {
                        'section_name': sectionId,
                        'event_category': 'engagement'
                    });
                }
                
                // Opcional: dejar de observar después de animar
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todas las secciones excepto hero
    document.querySelectorAll('section:not(.hero)').forEach(section => {
        observer.observe(section);
    });

    // Hero siempre visible desde el inicio
    const heroSection = document.querySelector('section.hero');
    if (heroSection) {
        heroSection.classList.add('is-visible');
    }
}

/**
 * Lazy loading mejorado para imágenes
 */
function initImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                img.classList.add('loaded');
            });
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

/* ========================================
   UX ENHANCEMENTS - Global Functions
   ======================================== */

/**
 * Scroll Progress Indicator
 */
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    function updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (!scrollBtn) return;

    function toggleScrollBtn() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleScrollBtn);

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Quitar el foco de cualquier elemento activo para evitar que aparezca el skip-to-content
        setTimeout(() => {
            document.activeElement?.blur();
        }, 100);
    });

    toggleScrollBtn();
}

/**
 * Toast Notifications System
 */
let toastContainer;

function initToastNotifications() {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    toastContainer.setAttribute('role', 'region');
    toastContainer.setAttribute('aria-label', 'Notificaciones');
    toastContainer.setAttribute('aria-live', 'polite');
    document.body.appendChild(toastContainer);
}

function showToast(message, type = 'info', duration = 5000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');
    
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };

    const titles = {
        success: 'Éxito',
        error: 'Error',
        info: 'Información'
    };

    toast.innerHTML = `
        <div class="toast-icon">${icons[type]}</div>
        <div class="toast-content">
            <div class="toast-title">${titles[type]}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" aria-label="Cerrar notificación">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));

    if (duration > 0) {
        setTimeout(() => removeToast(toast), duration);
    }

    return toast;
}

function removeToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
        if (toast.parentElement) {
            toast.parentElement.removeChild(toast);
        }
    }, 300);
}

/**
 * Accessibility Features
 */
function initAccessibilityFeatures() {
    // Skip to content functionality
    const skipLink = document.querySelector('.skip-to-content');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.setAttribute('tabindex', '-1');
                mainContent.focus();
                mainContent.removeAttribute('tabindex');
            }
        });
    }

    // Anunciar navegación para lectores de pantalla
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            announceForScreenReader(`Navegando a sección ${section}`);
        });
    });
}

/**
 * Anunciar para lectores de pantalla
 */
function announceForScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

/**
 * Prefers Reduced Motion Support
 */
function initReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleReducedMotion(e) {
        if (e.matches) {
            document.documentElement.style.setProperty('--transition-base', 'none');
            document.documentElement.style.setProperty('--transition-fast', 'none');
            console.log('🎬 Reduced motion mode activated');
        } else {
            document.documentElement.style.setProperty('--transition-base', 'all 0.3s ease');
            document.documentElement.style.setProperty('--transition-fast', 'all 0.15s ease');
        }
    }

    handleReducedMotion(prefersReducedMotion);
    prefersReducedMotion.addEventListener('change', handleReducedMotion);
}

/**
 * Prevención de FOUC (Flash of Unstyled Content)
 */
function preventFOUC() {
    window.addEventListener('load', function() {
        document.documentElement.classList.remove('loading');
        document.documentElement.classList.add('loaded');
    });

    if (document.readyState === 'loading') {
        document.documentElement.classList.add('loading');
    }
}

/**
 * Throttle para optimizar scroll
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export para uso global
window.showToast = showToast;
window.announceForScreenReader = announceForScreenReader;
