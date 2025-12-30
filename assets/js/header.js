/**
 * Header - Metasoft Solutions
 * Maneja la navegación y detección de sección activa
 */

document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initMobileMenu();
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

    // Scroll suave para el logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
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

    // Scroll suave para links de navegación desktop
    const desktopLinks = document.querySelectorAll('.nav-link');
    desktopLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
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
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navMobile.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Scroll suave a la sección
            const targetId = link.getAttribute('data-section');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
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
