/**
 * Services Section - Metasoft Solutions
 * Maneja las animaciones de entrada y el botón CTA
 */

document.addEventListener('DOMContentLoaded', function() {
    initServicesAnimations();
    initServicesCTA();
});

/**
 * Inicializar animaciones de la sección Services
 */
function initServicesAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-100px 0px -100px 0px'
    };

    // Animar header
    const header = document.querySelector('.services-header');
    if (header) {
        animateOnScroll(header, observerOptions, 0);
    }

    // Animar service cards con delays incrementales
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        animateOnScroll(card, observerOptions, 0.1 + (index * 0.1));
    });

    // Animar CTA
    const cta = document.querySelector('.services-cta');
    if (cta) {
        animateOnScroll(cta, observerOptions, 0.6);
    }
}

/**
 * Inicializar botón CTA de servicios
 */
function initServicesCTA() {
    const ctaButton = document.querySelector('.btn-cta');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
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
