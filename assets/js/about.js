/**
 * About Section - Metasoft Solutions
 * Maneja las animaciones de entrada cuando la sección es visible
 */

document.addEventListener('DOMContentLoaded', function() {
    initAboutAnimations();
});

/**
 * Inicializar animaciones de la sección About
 */
function initAboutAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-100px 0px -100px 0px'
    };

    // Animar header
    const header = document.querySelector('.about-header');
    if (header) {
        animateOnScroll(header, observerOptions, 0);
    }

    // Animar imagen
    const image = document.querySelector('.about-image');
    if (image) {
        animateOnScroll(image, observerOptions, 0.2);
    }

    // Animar texto
    const text = document.querySelector('.about-text');
    if (text) {
        animateOnScroll(text, observerOptions, 0.4);
    }

    // Animar feature cards con delays incrementales
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        animateOnScroll(card, observerOptions, 0.2 + (index * 0.1));
    });
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
