/**
 * Services Section - Metasoft Solutions
 * Maneja el botón CTA (las animaciones se gestionan globalmente en main.js)
 */

document.addEventListener('DOMContentLoaded', function() {
    initServicesCTA();
});

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


