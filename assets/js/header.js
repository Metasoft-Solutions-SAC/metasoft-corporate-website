/**
 * Header - Metasoft Solutions
 * Maneja la navegación y detección de sección activa
 * Refactorizado con mejores prácticas y detección precisa
 */

document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initMobileMenu();
    initKeyboardNavigation();
});

/**
 * Inicializar Header con detección de sección activa mejorada
 */
function initHeader() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    const header = document.querySelector('header');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    let currentActiveSection = null;
    let isScrollingProgrammatically = false;

    /**
     * Obtener altura dinámica del header
     */
    function getHeaderOffset() {
        return header ? header.offsetHeight : 80;
    }

    /**
     * Determinar qué sección está activa basándose en la posición del scroll
     */
    function updateActiveSection() {
        if (isScrollingProgrammatically) return;

        const headerOffset = getHeaderOffset();
        // Punto de referencia: mitad del viewport para mejor detección
        const viewportMiddle = window.scrollY + (window.innerHeight / 2);
        let newActiveSection = null;
        let bestMatch = null;
        let minDistance = Infinity;

        // Encontrar qué sección ocupa más espacio en el viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionMiddle = sectionTop + (section.offsetHeight / 2);

            // Calcular cuánto de la sección está visible
            const visibleStart = Math.max(sectionTop, window.scrollY + headerOffset);
            const visibleEnd = Math.min(sectionBottom, window.scrollY + window.innerHeight);
            const visibleHeight = Math.max(0, visibleEnd - visibleStart);

            // Si hay altura visible, calcular distancia al centro del viewport
            if (visibleHeight > 0) {
                const distance = Math.abs(viewportMiddle - sectionMiddle);
                
                // Priorizar la sección con menor distancia al centro del viewport
                if (distance < minDistance) {
                    minDistance = distance;
                    bestMatch = section.id;
                    
                    // Si el centro del viewport está dentro de esta sección, es match directo
                    if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
                        newActiveSection = section.id;
                    }
                }
            }
        });

        // Usar best match si no hay match directo
        if (!newActiveSection && bestMatch) {
            newActiveSection = bestMatch;
        }

        // Caso especial: inicio del documento (solo si estamos REALMENTE arriba)
        const firstSection = sections[0];
        if (firstSection) {
            const firstSectionStart = firstSection.offsetTop;
            const firstSectionHeight = firstSection.offsetHeight;
            
            // Solo activar inicio si estamos en el primer 30% de la primera sección
            if (window.scrollY < firstSectionStart + (firstSectionHeight * 0.3)) {
                newActiveSection = firstSection.id;
            }
        }

        // Caso especial: final del documento
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            newActiveSection = sections[sections.length - 1]?.id || newActiveSection;
        }

        // Actualizar solo si cambió
        if (newActiveSection && newActiveSection !== currentActiveSection) {
            currentActiveSection = newActiveSection;
            updateNavLinks(newActiveSection);
        }
    }

    /**
     * Actualizar estado activo de los enlaces
     */
    function updateNavLinks(activeSection) {
        navLinks.forEach(link => {
            const linkSection = link.getAttribute('data-section');
            if (linkSection === activeSection) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }

    /**
     * Scroll suave a una sección con offset correcto
     */
    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) return;

        isScrollingProgrammatically = true;
        const headerOffset = getHeaderOffset();
        const targetPosition = targetSection.offsetTop - headerOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Actualizar inmediatamente el link activo
        currentActiveSection = sectionId;
        updateNavLinks(sectionId);

        // Permitir detección automática después del scroll (reducido a 600ms)
        setTimeout(() => {
            isScrollingProgrammatically = false;
        }, 600);
        
        // Verificación adicional después de que termine el smooth scroll
        setTimeout(() => {
            if (!isScrollingProgrammatically) {
                updateActiveSection();
            }
        }, 800);
    }

    /**
     * Throttled scroll handler para optimizar performance
     */
    let scrollTimeout = null;
    let ticking = false;
    
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }

        // Debounce adicional para asegurar actualización final
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateActiveSection();
        }, 150);
    }

    // Event Listeners
    window.addEventListener('scroll', onScroll, { passive: true });

    // Click en logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-scroll-to') || 'inicio';
            scrollToSection(targetId);
        });
    }

    // Click en enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            if (targetId) {
                scrollToSection(targetId);
                
                // Cerrar menú móvil si está abierto
                const navMobile = document.querySelector('.nav-mobile');
                if (navMobile && navMobile.classList.contains('active')) {
                    const hamburger = document.querySelector('.hamburger');
                    const overlay = document.querySelector('.mobile-menu-overlay');
                    navMobile.classList.remove('active');
                    if (hamburger) hamburger.classList.remove('active');
                    if (overlay) overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // Inicializar en carga
    setTimeout(() => {
        updateActiveSection();
    }, 100);

    // Actualizar en resize (el header puede cambiar de tamaño)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateActiveSection();
        }, 250);
    }, { passive: true });
}

/**
 * Menú móvil (hamburguesa)
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMobile = document.querySelector('.nav-mobile');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (!hamburger || !navMobile) return;

    function openMenu() {
        navMobile.classList.add('active');
        hamburger.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus en el primer enlace del menú
        const firstLink = navMobile.querySelector('.nav-link-mobile');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 300);
        }
    }

    function closeMenu() {
        navMobile.classList.remove('active');
        hamburger.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
        hamburger.focus();
    }

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        if (navMobile.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Click en overlay para cerrar
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-link-mobile');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            
            // Scroll suave a la sección
            const targetId = link.getAttribute('data-section');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });

    // Cerrar menú al hacer click fuera (fallback si no hay overlay)
    if (!overlay) {
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
                closeMenu();
            }
        });
    }
}

/**
 * Keyboard Navigation
 */
function initKeyboardNavigation() {
    const navMobile = document.querySelector('.nav-mobile');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.mobile-menu-overlay');

    // Escape key para cerrar menú móvil
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMobile && navMobile.classList.contains('active')) {
            navMobile.classList.remove('active');
            hamburger.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
            hamburger.focus();
        }
    });

    // Tab trapping en menú móvil
    if (navMobile) {
        const focusableElements = navMobile.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        navMobile.addEventListener('keydown', function(e) {
            if (!navMobile.classList.contains('active')) return;

            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }

    // Enter en elementos clickeables
    document.querySelectorAll('[data-scroll-to], .logo').forEach(element => {
        element.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
    });

    // Navegación con flechas en menú
    const navLinks = document.querySelectorAll('.nav-link-mobile');
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (index + 1) % navLinks.length;
                navLinks[nextIndex].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
                navLinks[prevIndex].focus();
            }
        });
    });
}
