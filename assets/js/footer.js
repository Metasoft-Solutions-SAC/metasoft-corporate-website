/**
 * Footer - Metasoft Solutions
 * Maneja el scroll suave de los enlaces y actualiza el año dinámicamente
 */

document.addEventListener('DOMContentLoaded', function() {
    initFooter();
});

/**
 * Inicializar funcionalidades del Footer
 */
function initFooter() {
    updateYear();
    initFooterScrollLinks();
}

/**
 * Actualizar el año actual dinámicamente
 */
function updateYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Inicializar scroll suave para los enlaces del footer
 */
function initFooterScrollLinks() {
    const scrollLinks = document.querySelectorAll('.footer-links a[data-scroll]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo manejar enlaces de ancla (#)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}
