/**
 * Methodology Section - Metasoft Solutions
 * Maneja las animaciones de entrada para las fases y principios
 */

document.addEventListener('DOMContentLoaded', function() {
    initMethodologyAnimations();
});

/**
 * Inicializar animaciones de la sección Methodology
 */
function initMethodologyAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-100px 0px -100px 0px'
    };

    // Animar header
    const header = document.querySelector('.methodology-header');
    if (header) {
        animateOnScroll(header, observerOptions, 0);
    }

    // Animar phase cards con delays incrementales
    const phaseCards = document.querySelectorAll('.phase-card');
    phaseCards.forEach((card, index) => {
        animateOnScroll(card, observerOptions, 0.1 + (index * 0.1));
    });

    // Animar principios
    const principles = document.querySelector('.methodology-principles');
    if (principles) {
        animateOnScroll(principles, observerOptions, 0.7);
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
