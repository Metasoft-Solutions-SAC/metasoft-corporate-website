/**
 * Hero Section - Metasoft Solutions
 * Maneja los contadores animados y botones de scroll
 */

document.addEventListener('DOMContentLoaded', function() {
    initHeroCounters();
    initScrollButtons();
});

/**
 * Contadores animados del Hero
 */
function initHeroCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    if (counters.length === 0) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    const suffix = element.textContent.includes('%') ? '%' : '+';

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };

    requestAnimationFrame(updateCounter);
}

/**
 * Botones de scroll del Hero
 */
function initScrollButtons() {
    const scrollButtons = document.querySelectorAll('[data-scroll-to]');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
