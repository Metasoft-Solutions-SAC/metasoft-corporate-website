/**
 * Sistema de Internacionalización (i18n)
 * Metasoft Solutions - 2025
 * Soporte para Español e Inglés
 */

const translations = {
    es: {
        // Header/Navigation
        'nav.inicio': 'Inicio',
        'nav.nosotros': 'Nosotros',
        'nav.servicios': 'Servicios',
        'nav.metodologia': 'Metodología',
        'nav.valores': 'Valores',
        'nav.contacto': 'Contacto',
        
        // Hero Section
        'hero.badge': 'Desarrollo de Software Empresarial',
        'hero.title': 'Transformamos Ideas en',
        'hero.titleHighlight': 'Soluciones Digitales',
        'hero.titleEnd': 'de Alto Impacto',
        'hero.subtitle': 'Desarrollo de software a medida, aplicaciones móviles y plataformas web que impulsan el crecimiento de tu negocio con tecnología moderna y metodologías ágiles.',
        'hero.cta': 'Iniciar Proyecto',
        'hero.ctaSecondary': 'Ver Servicios',
        
        // About Section
        'about.badge': 'Sobre Nosotros',
        'about.title': 'Software que impulsa el crecimiento de tu negocio',
        'about.intro': 'Somos una empresa emergente de desarrollo de software especializada en crear soluciones personalizadas que resuelven problemas reales, simplifican operaciones y ayudan a tu empresa a crecer con tecnología moderna y metodologías ágiles.',
        'about.purposeTitle': 'Nuestro Propósito',
        'about.purpose': 'Democratizar el acceso a software empresarial de calidad para PyMEs y startups, ofreciendo soluciones que tradicionalmente solo estaban al alcance de grandes corporaciones.',
        'about.missionTitle': 'Nuestra Misión',
        'about.mission': 'Crear software que genere valor real y medible, priorizando la experiencia del usuario, la escalabilidad y el retorno de inversión.',
        'about.experienceTitle': 'Experiencia y Compromiso',
        'about.experience': 'Cada proyecto es una oportunidad para aplicar las mejores prácticas de la industria y ofrecer un servicio personalizado que se adapta a las necesidades específicas de cada cliente.',
        
        // Services Section
        'services.badge': 'Nuestros Servicios',
        'services.title': 'Servicios de Desarrollo de Software y Transformación Digital',
        'services.intro': 'Ofrecemos un portafolio integral de servicios diseñados para cubrir todas las necesidades tecnológicas de tu organización.',
        
        'services.custom.title': 'Desarrollo de Software a Medida',
        'services.custom.desc': 'Diseño y construcción de soluciones alineadas a los procesos específicos de cada organización, incluyendo su implementación y administración técnica.',
        'services.custom.feature1': 'Arquitectura escalable y moderna',
        'services.custom.feature2': 'Integración con sistemas existentes',
        'services.custom.feature3': 'Despliegue en cloud o on-premise',
        
        'services.mobile.title': 'Aplicaciones Móviles',
        'services.mobile.desc': 'Desarrollo de aplicaciones móviles modernas, con énfasis en usabilidad, estabilidad y rendimiento, junto con su despliegue y soporte continuo.',
        'services.mobile.feature1': 'iOS y Android nativo',
        'services.mobile.feature2': 'Apps híbridas con React Native/Flutter',
        'services.mobile.feature3': 'Integración con APIs y backends',
        
        'services.saas.title': 'Plataformas SaaS',
        'services.saas.desc': 'Construcción de plataformas de software como servicio, completamente administradas, incluyendo mantenimiento, actualizaciones y seguridad.',
        'services.saas.feature1': 'Multi-tenant architecture',
        'services.saas.feature2': 'Facturación y suscripciones',
        'services.saas.feature3': 'Analytics y dashboards',
        
        'services.consulting.title': 'Consultoría IT',
        'services.consulting.desc': 'Asesoramiento estratégico en tecnología, arquitectura de software y transformación digital para optimizar procesos.',
        'services.consulting.feature1': 'Auditoría de sistemas',
        'services.consulting.feature2': 'Roadmap tecnológico',
        'services.consulting.feature3': 'Capacitación de equipos',
        
        'services.web.title': 'Desarrollo Web',
        'services.web.desc': 'Sitios web corporativos, landing pages y aplicaciones web progresivas (PWA) optimizadas para conversión y SEO.',
        'services.web.feature1': 'Diseño responsive y moderno',
        'services.web.feature2': 'Optimización SEO',
        'services.web.feature3': 'Performance y seguridad',
        
        'services.ecommerce.title': 'E-commerce',
        'services.ecommerce.desc': 'Tiendas online completas con pasarelas de pago, gestión de inventario y análisis de ventas.',
        'services.ecommerce.feature1': 'Shopify, WooCommerce, custom',
        'services.ecommerce.feature2': 'Integración con logística',
        'services.ecommerce.feature3': 'CRM y marketing automation',
        
        // Methodology Section
        'methodology.badge': 'Cómo Trabajamos',
        'methodology.title': 'Metodología Ágil de Desarrollo de Software',
        'methodology.intro': 'Un proceso estructurado y transparente que maximiza el valor entregado, reduce la incertidumbre y asegura la sostenibilidad del software.',
        
        'methodology.discovery.title': 'Descubrimiento',
        'methodology.discovery.desc': 'Análisis del problema, usuarios y procesos.',
        'methodology.proposal.title': 'Propuesta',
        'methodology.proposal.desc': 'Definición de alcance, cronograma, presupuesto y criterios de éxito.',
        'methodology.design.title': 'Diseño',
        'methodology.design.desc': 'Elaboración de prototipos y definición funcional.',
        'methodology.construction.title': 'Construcción',
        'methodology.construction.desc': 'Desarrollo iterativo con entregas incrementales.',
        'methodology.testing.title': 'Pruebas y Salida',
        'methodology.testing.desc': 'QA, despliegue en producción y documentación.',
        'methodology.support.title': 'Acompañamiento',
        'methodology.support.desc': 'Soporte post-lanzamiento y evolución continua.',
        
        // Values Section
        'values.badge': 'Nuestros Valores',
        'values.title': 'Principios que Guían Nuestro Trabajo',
        'values.intro': 'Valores fundamentales que definen cómo trabajamos y nos relacionamos con nuestros clientes.',
        
        'values.quality.title': 'Calidad',
        'values.quality.desc': 'Código limpio, arquitectura sólida y pruebas exhaustivas.',
        'values.transparency.title': 'Transparencia',
        'values.transparency.desc': 'Comunicación abierta y honesta en todo momento.',
        'values.commitment.title': 'Compromiso',
        'values.commitment.desc': 'Dedicación total al éxito de cada proyecto.',
        'values.innovation.title': 'Innovación',
        'values.innovation.desc': 'Tecnología moderna y mejores prácticas actuales.',
        'values.collaboration.title': 'Colaboración',
        'values.collaboration.desc': 'Trabajo en equipo con clientes y stakeholders.',
        'values.excellence.title': 'Excelencia',
        'values.excellence.desc': 'Superación continua y atención al detalle.',
        
        // Contact Section
        'contact.badge': 'Contáctanos',
        'contact.title': 'Conversemos Sobre Tu Proyecto',
        'contact.subtitle': '¿Tienes una idea? ¿Necesitas un software a medida? Estamos aquí para ayudarte.',
        'contact.intro': 'Completa el formulario y te responderemos en menos de 24 horas con una propuesta inicial sin compromiso.',
        
        'contact.form.name': 'Nombre completo',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Teléfono (opcional)',
        'contact.form.company': 'Empresa',
        'contact.form.message': 'Cuéntanos sobre tu proyecto',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.form.sending': 'Enviando...',
        
        'contact.info.email': 'Email',
        'contact.info.phone': 'Teléfono',
        'contact.info.location': 'Ubicación',
        'contact.info.locationValue': 'Lima, Perú',
        'contact.info.hours': 'Horario',
        'contact.info.hoursValue': 'Lun - Vie: 9:00 AM - 6:00 PM',
        
        // Footer
        'footer.tagline': 'Transformando ideas en soluciones digitales',
        'footer.company': 'Empresa',
        'footer.services': 'Servicios',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacidad',
        'footer.terms': 'Términos',
        'footer.copyright': '© 2025 Metasoft Solutions SAC. Todos los derechos reservados.',
        'footer.followUs': 'Síguenos',
        
        // Buttons
        'btn.learnMore': 'Conocer Más',
        'btn.getStarted': 'Comenzar',
        'btn.contactUs': 'Contáctanos',
        'btn.viewMore': 'Ver Más',
        
        // Language Selector
        'lang.spanish': 'Español',
        'lang.english': 'English'
    },
    
    en: {
        // Header/Navigation
        'nav.inicio': 'Home',
        'nav.nosotros': 'About',
        'nav.servicios': 'Services',
        'nav.metodologia': 'Methodology',
        'nav.valores': 'Values',
        'nav.contacto': 'Contact',
        
        // Hero Section
        'hero.badge': 'Enterprise Software Development',
        'hero.title': 'We Transform Ideas into',
        'hero.titleHighlight': 'High-Impact',
        'hero.titleEnd': 'Digital Solutions',
        'hero.subtitle': 'Custom software development, mobile applications, and web platforms that drive your business growth with modern technology and agile methodologies.',
        'hero.cta': 'Start Project',
        'hero.ctaSecondary': 'View Services',
        
        // About Section
        'about.badge': 'About Us',
        'about.title': 'Software that drives your business growth',
        'about.intro': 'We are an emerging software development company specialized in creating custom solutions that solve real problems, simplify operations, and help your company grow with modern technology and agile methodologies.',
        'about.purposeTitle': 'Our Purpose',
        'about.purpose': 'Democratize access to quality enterprise software for SMEs and startups, offering solutions traditionally only available to large corporations.',
        'about.missionTitle': 'Our Mission',
        'about.mission': 'Create software that generates real and measurable value, prioritizing user experience, scalability, and return on investment.',
        'about.experienceTitle': 'Experience and Commitment',
        'about.experience': 'Each project is an opportunity to apply industry best practices and offer personalized service adapted to the specific needs of each client.',
        
        // Services Section
        'services.badge': 'Our Services',
        'services.title': 'Software Development and Digital Transformation Services',
        'services.intro': 'We offer a comprehensive portfolio of services designed to cover all your organization\'s technological needs.',
        
        'services.custom.title': 'Custom Software Development',
        'services.custom.desc': 'Design and construction of solutions aligned to specific organizational processes, including implementation and technical administration.',
        'services.custom.feature1': 'Scalable and modern architecture',
        'services.custom.feature2': 'Integration with existing systems',
        'services.custom.feature3': 'Cloud or on-premise deployment',
        
        'services.mobile.title': 'Mobile Applications',
        'services.mobile.desc': 'Modern mobile application development, with emphasis on usability, stability and performance, along with deployment and continuous support.',
        'services.mobile.feature1': 'Native iOS and Android',
        'services.mobile.feature2': 'Hybrid apps with React Native/Flutter',
        'services.mobile.feature3': 'API and backend integration',
        
        'services.saas.title': 'SaaS Platforms',
        'services.saas.desc': 'Construction of fully managed software as a service platforms, including maintenance, updates and security.',
        'services.saas.feature1': 'Multi-tenant architecture',
        'services.saas.feature2': 'Billing and subscriptions',
        'services.saas.feature3': 'Analytics and dashboards',
        
        'services.consulting.title': 'IT Consulting',
        'services.consulting.desc': 'Strategic technology consulting, software architecture and digital transformation to optimize processes.',
        'services.consulting.feature1': 'Systems audit',
        'services.consulting.feature2': 'Technology roadmap',
        'services.consulting.feature3': 'Team training',
        
        'services.web.title': 'Web Development',
        'services.web.desc': 'Corporate websites, landing pages and progressive web applications (PWA) optimized for conversion and SEO.',
        'services.web.feature1': 'Responsive and modern design',
        'services.web.feature2': 'SEO optimization',
        'services.web.feature3': 'Performance and security',
        
        'services.ecommerce.title': 'E-commerce',
        'services.ecommerce.desc': 'Complete online stores with payment gateways, inventory management and sales analytics.',
        'services.ecommerce.feature1': 'Shopify, WooCommerce, custom',
        'services.ecommerce.feature2': 'Logistics integration',
        'services.ecommerce.feature3': 'CRM and marketing automation',
        
        // Methodology Section
        'methodology.badge': 'How We Work',
        'methodology.title': 'Agile Software Development Methodology',
        'methodology.intro': 'A structured and transparent process that maximizes delivered value, reduces uncertainty and ensures software sustainability.',
        
        'methodology.discovery.title': 'Discovery',
        'methodology.discovery.desc': 'Analysis of the problem, users and processes.',
        'methodology.proposal.title': 'Proposal',
        'methodology.proposal.desc': 'Definition of scope, schedule, budget and success criteria.',
        'methodology.design.title': 'Design',
        'methodology.design.desc': 'Prototyping and functional definition.',
        'methodology.construction.title': 'Construction',
        'methodology.construction.desc': 'Iterative development with incremental deliveries.',
        'methodology.testing.title': 'Testing & Launch',
        'methodology.testing.desc': 'QA, production deployment and documentation.',
        'methodology.support.title': 'Support',
        'methodology.support.desc': 'Post-launch support and continuous evolution.',
        
        // Values Section
        'values.badge': 'Our Values',
        'values.title': 'Principles That Guide Our Work',
        'values.intro': 'Fundamental values that define how we work and relate with our clients.',
        
        'values.quality.title': 'Quality',
        'values.quality.desc': 'Clean code, solid architecture and thorough testing.',
        'values.transparency.title': 'Transparency',
        'values.transparency.desc': 'Open and honest communication at all times.',
        'values.commitment.title': 'Commitment',
        'values.commitment.desc': 'Total dedication to the success of each project.',
        'values.innovation.title': 'Innovation',
        'values.innovation.desc': 'Modern technology and current best practices.',
        'values.collaboration.title': 'Collaboration',
        'values.collaboration.desc': 'Teamwork with clients and stakeholders.',
        'values.excellence.title': 'Excellence',
        'values.excellence.desc': 'Continuous improvement and attention to detail.',
        
        // Contact Section
        'contact.badge': 'Contact Us',
        'contact.title': 'Let\'s Talk About Your Project',
        'contact.subtitle': 'Have an idea? Need custom software? We\'re here to help.',
        'contact.intro': 'Fill out the form and we\'ll respond within 24 hours with an initial proposal at no obligation.',
        
        'contact.form.name': 'Full name',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Phone (optional)',
        'contact.form.company': 'Company',
        'contact.form.message': 'Tell us about your project',
        'contact.form.submit': 'Send Message',
        'contact.form.sending': 'Sending...',
        
        'contact.info.email': 'Email',
        'contact.info.phone': 'Phone',
        'contact.info.location': 'Location',
        'contact.info.locationValue': 'Lima, Peru',
        'contact.info.hours': 'Hours',
        'contact.info.hoursValue': 'Mon - Fri: 9:00 AM - 6:00 PM',
        
        // Footer
        'footer.tagline': 'Transforming ideas into digital solutions',
        'footer.company': 'Company',
        'footer.services': 'Services',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms',
        'footer.copyright': '© 2025 Metasoft Solutions SAC. All rights reserved.',
        'footer.followUs': 'Follow Us',
        
        // Buttons
        'btn.learnMore': 'Learn More',
        'btn.getStarted': 'Get Started',
        'btn.contactUs': 'Contact Us',
        'btn.viewMore': 'View More',
        
        // Language Selector
        'lang.spanish': 'Español',
        'lang.english': 'English'
    }
};

// Sistema de i18n
class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectLanguage();
        this.translations = translations;
    }

    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('es') ? 'es' : 'en';
    }

    getStoredLanguage() {
        return localStorage.getItem('metasoft_lang');
    }

    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language "${lang}" not supported, falling back to Spanish`);
            lang = 'es';
        }
        
        this.currentLang = lang;
        localStorage.setItem('metasoft_lang', lang);
        document.documentElement.lang = lang;
        this.updatePageContent();
        this.updateLanguageSelector();
    }

    t(key) {
        return this.translations[this.currentLang][key] || key;
    }

    updatePageContent() {
        // Actualizar todos los elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Actualizar atributos aria-label
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            element.setAttribute('aria-label', this.t(key));
        });

        // Dispatch evento personalizado
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { lang: this.currentLang } 
        }));
    }

    updateLanguageSelector() {
        const buttons = document.querySelectorAll('[data-lang]');
        const flags = {
            'es': '🇪🇸',
            'en': '🇬🇧'
        };
        
        buttons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            const flag = flags[lang] || '';
            
            if (lang === this.currentLang) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
                button.setAttribute('aria-label', `${flag} ${lang === 'es' ? 'Español (activo)' : 'English (active)'}`);
            } else {
                button.classList.remove('active');
                button.setAttribute('aria-pressed', 'false');
                button.setAttribute('aria-label', `${flag} ${lang === 'es' ? 'Cambiar a Español' : 'Switch to English'}`);
            }
        });

        // Actualizar el atributo lang del documento
        document.documentElement.setAttribute('lang', this.currentLang);
        
        // Agregar indicador visual de idioma actual en el título del documento
        const currentFlag = flags[this.currentLang];
        const originalTitle = document.title.replace(/^🇪🇸|^🇬🇧/, '').trim();
        document.title = `${currentFlag} ${originalTitle}`;
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Instancia global
const i18n = new I18n();

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    i18n.setLanguage(i18n.currentLang);
    
    // Event listeners para botones de idioma
    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            i18n.setLanguage(lang);
        });
    });
});

// Exportar para uso global
window.i18n = i18n;
