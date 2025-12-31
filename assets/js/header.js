/**
 * Header - Metasoft Solutions
 * Refactored with simplified React-like structure
 */

document.addEventListener('DOMContentLoaded', function() {
    initHeader();
});

/**
 * Initialize Header with all functionality
 */
function initHeader() {
    // State
    let isMenuOpen = false;
    let activeSection = 'inicio';
    
    // Elements
    const header = document.querySelector('.header');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    const logo = document.querySelector('.logo');
    const sections = document.querySelectorAll('section[id]');
    
    if (!header || !mobileMenuButton || !navMobile) return;

    /**
     * Scroll to section smoothly
     */
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMenuOpen(false);
        }
    }

    /**
     * Set menu open/closed state
     */
    function setMenuOpen(open) {
        isMenuOpen = open;
        navMobile.classList.toggle('active', open);
        mobileMenuButton.setAttribute('aria-expanded', open.toString());
        mobileMenuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        
        // Prevent body scroll when menu is open on mobile
        if (window.innerWidth < 1024) {
            document.body.style.overflow = open ? 'hidden' : '';
        }
    }

    /**
     * Update active navigation links
     */
    function updateActiveSection(sectionId) {
        if (activeSection === sectionId) return;
        
        activeSection = sectionId;
        navLinks.forEach(link => {
            const linkSection = link.getAttribute('data-section');
            link.classList.toggle('active', linkSection === sectionId);
        });
    }

    /**
     * Determine which section is currently active based on scroll position
     */
    function detectActiveSection() {
        const headerHeight = header.offsetHeight;
        const scrollPosition = window.scrollY + headerHeight + 100;
        
        // Find the section that's currently in view
        let currentSection = 'inicio';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.id;
            }
        });
        
        // Special case: if at the very top, always show "inicio" as active
        if (window.scrollY < 100) {
            currentSection = 'inicio';
        }
        
        // Special case: if at the very bottom, show last section as active
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
                currentSection = lastSection.id;
            }
        }
        
        updateActiveSection(currentSection);
    }

    /**
     * Handle scroll with throttling
     */
    let scrollTimeout = null;
    let ticking = false;
    
    function handleScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                detectActiveSection();
                ticking = false;
            });
            ticking = true;
        }
        
        // Debounce for final update
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(detectActiveSection, 150);
    }

    /**
     * Event Listeners
     */
    
    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', () => {
        setMenuOpen(!isMenuOpen);
    });

    // Logo click
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = logo.getAttribute('data-section') || 'inicio';
            scrollToSection(targetSection);
        });
    }

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            if (targetSection) {
                scrollToSection(targetSection);
            }
        });
    });

    // Scroll detection
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize handling
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Close mobile menu if window is resized to desktop
            if (window.innerWidth >= 1024 && isMenuOpen) {
                setMenuOpen(false);
            }
            detectActiveSection();
        }, 250);
    }, { passive: true });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Close menu on Escape
        if (e.key === 'Escape' && isMenuOpen) {
            setMenuOpen(false);
            mobileMenuButton.focus();
        }
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (isMenuOpen && 
            !navMobile.contains(e.target) && 
            !mobileMenuButton.contains(e.target)) {
            setMenuOpen(false);
        }
    });

    /**
     * Initialize
     */
    setTimeout(() => {
        detectActiveSection();
    }, 100);
}
