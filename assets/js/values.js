/**
 * Values Section - Metasoft Solutions
 * Maneja las animaciones de entrada y efectos interactivos
 */

document.addEventListener('DOMContentLoaded', function() {
    initValuesAnimations();
});

/**
 * Inicializar animaciones de la sección Values
 */
function initValuesAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-100px 0px -100px 0px'
    };

    // Animar header
    const header = document.querySelector('.values-header');
    if (header) {
        animateOnScroll(header, observerOptions, 0);
    }

    // Animar value cards con delays incrementales
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        animateOnScroll(card, observerOptions, 0.1 + (index * 0.05));
    });

    // Animar sección de diferenciadores
    const differentiators = document.querySelector('.values-differentiators');
    if (differentiators) {
        animateOnScroll(differentiators, observerOptions, 0.5);
    }

    // Animar header de métricas
    const metricsHeader = document.querySelector('.metrics-header');
    if (metricsHeader) {
        animateOnScroll(metricsHeader, observerOptions, 0.7);
    }

    // Animar metric cards con delays incrementales
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach((card, index) => {
        animateOnScroll(card, observerOptions, 0.8 + (index * 0.1));
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
