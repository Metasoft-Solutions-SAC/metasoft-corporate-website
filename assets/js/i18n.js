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
        'hero.badge': 'Desarrollo de Software a Tu Medida',
        'hero.title': 'Tecnología que impulsa',
        'hero.titleHighlight': 'tus metas',
        'hero.subtitle': 'Creamos software personalizado que simplifica tus procesos, ahorra tiempo y hace crecer tu negocio de forma sostenible.',
        'hero.cta': 'Iniciar Proyecto',
        'hero.ctaSecondary': 'Conocer Servicios',
        'hero.stat1': 'Tecnologías Modernas',
        'hero.stat2': 'Soluciones Personalizadas',
        'hero.stat3': 'Compromiso con Calidad',
        
        // About Section
        'about.badge': 'Sobre Nosotros',
        'about.title': 'Software que impulsa el crecimiento de tu negocio',
        'about.intro': 'Somos una empresa peruana emergente de desarrollo de software especializada en crear soluciones personalizadas que resuelven problemas reales, simplifican operaciones y ayudan a tu empresa a crecer con tecnología moderna y metodologías ágiles.',
        'about.purposeTitle': 'Nuestro Propósito: Transformación Digital para Empresas y Emprendedores',
        'about.purpose': 'Crear software que facilite el trabajo diario, reduzca tareas repetitivas y permita que tu equipo se enfoque en lo que realmente importa: hacer crecer tu negocio.',
        'about.purpose2': 'Creemos que la tecnología debe ser simple, confiable y generar resultados visibles. Nuestro trabajo tiene éxito cuando el tuyo funciona mejor.',
        'about.feature1Title': 'Enfoque en Resultados Medibles',
        'about.feature1Desc': 'Priorizamos soluciones que aporten valor desde etapas tempranas y puedan sostenerse en el tiempo, con entregas progresivas y criterios de calidad claramente definidos.',
        'about.feature2Title': 'Soporte y Acompañamiento Continuo',
        'about.feature2Desc': 'Mantenemos una relación activa con el cliente antes, durante y después del lanzamiento del producto, asegurando su evolución y sostenibilidad.',
        'about.feature3Title': 'Arquitectura Escalable y Segura',
        'about.feature3Desc': 'Construimos software seguro, escalable y sostenible, diseñado considerando su evolución futura y evitando dependencias innecesarias.',
        
        // Services Section
        'services.badge': 'Nuestros Servicios',
        'services.title': 'Servicios de Desarrollo de Software a Medida y Transformación Digital en Perú',
        'services.intro': 'Ofrecemos un portafolio integral de servicios diseñados para cubrir todas las necesidades tecnológicas de tu organización.',
        
        'services.custom.title': 'Desarrollo de Software a Medida para Empresas',
        'services.custom.desc': 'Diseño y construcción de soluciones alineadas a los procesos específicos de cada organización, incluyendo su implementación y administración técnica.',
        
        'services.mobile.title': 'Desarrollo de Aplicaciones Móviles Multiplataforma',
        'services.mobile.desc': 'Desarrollo de aplicaciones móviles modernas, con énfasis en usabilidad, estabilidad y rendimiento, junto con su despliegue y soporte continuo.',
        
        'services.saas.title': 'Desarrollo de Plataformas SaaS en la Nube',
        'services.saas.desc': 'Construcción de plataformas de software como servicio, completamente administradas, incluyendo mantenimiento, actualizaciones y seguridad.',
        
        'services.consulting.title': 'Consultoría IT y Transformación Digital Empresarial',
        'services.consulting.desc': 'Asesoría en decisiones tecnológicas, diseño de arquitecturas y modernización de procesos, con un enfoque estratégico y sostenible.',
        
        'services.web.title': 'Diseño y Desarrollo de Sitios Web Corporativos',
        'services.web.desc': 'Sitios web corporativos, landing pages y aplicaciones web progresivas (PWA) optimizadas para conversión, SEO y experiencia de usuario.',
        
        'services.ecommerce.title': 'Desarrollo de Tiendas Online E-commerce',
        'services.ecommerce.desc': 'Tiendas online completas con pasarelas de pago, gestión de inventario, integración logística y análisis de ventas.',
        
        'services.cta.title': '¿No encuentras lo que buscas?',
        'services.cta.desc': 'Cada proyecto es único. Conversemos sobre tus necesidades específicas y diseñemos juntos la solución ideal para tu organización.',
        
        // Methodology Section
        'methodology.badge': 'Cómo Trabajamos',
        'methodology.title': 'Metodología Ágil de Desarrollo de Software: Proceso Certificado y Transparente',
        'methodology.intro': 'Un proceso estructurado y transparente que maximiza el valor entregado, reduce la incertidumbre y asegura la sostenibilidad del software.',
        
        'methodology.discovery.title': '1. Descubrimiento y Análisis',
        'methodology.discovery.desc': 'Análisis del problema, usuarios y procesos.',
        'methodology.proposal.title': '2. Propuesta Técnica',
        'methodology.proposal.desc': 'Definición de alcance, cronograma, presupuesto y criterios de éxito.',
        'methodology.design.title': '3. Diseño UX/UI',
        'methodology.design.desc': 'Elaboración de prototipos y definición funcional.',
        'methodology.construction.title': '4. Desarrollo Ágil',
        'methodology.construction.desc': 'Desarrollo iterativo mediante metodologías ágiles.',
        'methodology.testing.title': '5. Testing y Despliegue',
        'methodology.testing.desc': 'Aseguramiento de calidad, despliegue y capacitación.',
        'methodology.support.title': '6. Soporte y Mantenimiento',
        'methodology.support.desc': 'Soporte, mantenimiento y evolución del producto.',
        'methodology.principle1.title': 'Claridad',
        'methodology.principle1.desc': 'Definición precisa de alcance, plazos y costos desde el inicio.',
        'methodology.principle2.title': 'Confianza',
        'methodology.principle2.desc': 'Aplicación de buenas prácticas y responsabilidad sobre lo entregado.',
        'methodology.principle3.title': 'Evolución',
        'methodology.principle3.desc': 'Acompañamiento del software a lo largo de su vida útil.',
        
        // Values Section
        'values.badge': 'Nuestros Valores',
        'values.title': 'Valores Corporativos y Compromiso con la Excelencia en Desarrollo de Software',
        'values.intro': 'Nuestros valores institucionales son la base de cada proyecto y la garantía de una relación profesional duradera.',
        
        'values.customer.title': 'Enfoque Customer-Centric',
        'values.customer.desc': 'Comprensión profunda del negocio y alineación con objetivos estratégicos.',
        'values.quality.title': 'Calidad Asegurada (QA)',
        'values.quality.desc': 'Búsqueda de excelencia funcional que aporte valor real y sostenible.',
        'values.responsibility.title': 'Responsabilidad',
        'values.responsibility.desc': 'Cumplimiento riguroso de compromisos y transparencia en la comunicación.',
        'values.transparency.title': 'Transparencia',
        'values.transparency.desc': 'Comunicación clara, honesta y contextualizada en todas las etapas.',
        'values.continuous.title': 'Mejora Continua (Kaizen)',
        'values.continuous.desc': 'Aprendizaje e iteración constante para optimizar resultados.',
        'values.commitment.title': 'Compromiso',
        'values.commitment.desc': 'Dedicación genuina al éxito de cada proyecto y cliente.',
        'values.differentiators.title': 'Elementos Diferenciadores',
        'values.differentiators.subtitle': 'Lo que nos distingue en cada proyecto que emprendemos',
        'values.differentiator1.title': 'Acompañamiento continuo',
        'values.differentiator1.desc': 'Relación activa antes, durante y después del lanzamiento.',
        'values.differentiator2.title': 'Comunicación clara',
        'values.differentiator2.desc': 'Avances y decisiones técnicas explicadas en términos comprensibles.',
        'values.differentiator3.title': 'Enfoque en mantenibilidad',
        'values.differentiator3.desc': 'Software diseñado para evolucionar sin dependencias innecesarias.',
        'values.differentiator4.title': 'Entrega incremental',
        'values.differentiator4.desc': 'Trabajo organizado en etapas que permiten validar y mejorar.',
        'values.metrics.title': 'Medición de Impacto',
        'values.metrics.subtitle': 'Evaluamos el éxito de nuestros proyectos mediante indicadores concretos',
        'values.metric1.label': 'Reducción en tareas manuales',
        'values.metric2.label': 'Disminución de errores operativos',
        'values.metric3.label': 'Mejora en tiempos de respuesta',
        'values.metric4.label': 'Control y trazabilidad',
        
        // Contact Section
        'contact.badge': 'Contáctanos',
        'contact.title': 'Cotización Gratis: Solicita Presupuesto para Tu Proyecto de Software',
        'contact.subtitle': '¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.',
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
        'hero.badge': 'Custom Software Development',
        'hero.title': 'Technology that drives',
        'hero.titleHighlight': 'your goals',
        'hero.subtitle': 'We create custom software that simplifies your processes, saves time and grows your business sustainably.',
        'hero.cta': 'Start Project',
        'hero.ctaSecondary': 'View Services',
        'hero.stat1': 'Modern Technologies',
        'hero.stat2': 'Custom Solutions',
        'hero.stat3': 'Commitment to Quality',
        
        // About Section
        'about.badge': 'About Us',
        'about.title': 'Software that drives your business growth',
        'about.intro': 'We are a Peruvian emerging software development company specialized in creating custom solutions that solve real problems, simplify operations, and help your company grow with modern technology and agile methodologies.',
        'about.purposeTitle': 'Our Purpose: Digital Transformation for Companies and Entrepreneurs',
        'about.purpose': 'Create software that facilitates daily work, reduces repetitive tasks and allows your team to focus on what really matters: growing your business.',
        'about.purpose2': 'We believe that technology should be simple, reliable and generate visible results. Our work succeeds when yours works better.',
        'about.feature1Title': 'Focus on Measurable Results',
        'about.feature1Desc': 'We prioritize solutions that provide value from early stages and can be sustained over time, with progressive deliveries and clearly defined quality criteria.',
        'about.feature2Title': 'Continuous Support and Guidance',
        'about.feature2Desc': 'We maintain an active relationship with the client before, during and after the product launch, ensuring its evolution and sustainability.',
        'about.feature3Title': 'Scalable and Secure Architecture',
        'about.feature3Desc': 'We build secure, scalable and sustainable software, designed considering its future evolution and avoiding unnecessary dependencies.',
        
        // Services Section
        'services.badge': 'Our Services',
        'services.title': 'Custom Software Development and Digital Transformation Services in Peru',
        'services.intro': 'We offer a comprehensive portfolio of services designed to cover all your organization\'s technological needs.',
        
        'services.custom.title': 'Custom Software Development for Businesses',
        'services.custom.desc': 'Design and construction of solutions aligned to specific organizational processes, including implementation and technical administration.',
        
        'services.mobile.title': 'Cross-Platform Mobile Application Development',
        'services.mobile.desc': 'Modern mobile application development, with emphasis on usability, stability and performance, along with deployment and continuous support.',
        
        'services.saas.title': 'Cloud-Based SaaS Platform Development',
        'services.saas.desc': 'Construction of fully managed software as a service platforms, including maintenance, updates and security.',
        
        'services.consulting.title': 'IT Consulting and Enterprise Digital Transformation',
        'services.consulting.desc': 'Advisory on technology decisions, architecture design and process modernization, with a strategic and sustainable approach.',
        
        'services.web.title': 'Corporate Website Design and Development',
        'services.web.desc': 'Corporate websites, landing pages and progressive web applications (PWA) optimized for conversion, SEO and user experience.',
        
        'services.ecommerce.title': 'E-commerce Online Store Development',
        'services.ecommerce.desc': 'Complete online stores with payment gateways, inventory management, logistics integration and sales analytics.',
        
        'services.cta.title': 'Can\'t find what you\'re looking for?',
        'services.cta.desc': 'Each project is unique. Let\'s talk about your specific needs and design the ideal solution for your organization together.',
        
        // Methodology Section
        'methodology.badge': 'How We Work',
        'methodology.title': 'Agile Software Development Methodology: Certified and Transparent Process',
        'methodology.intro': 'A structured and transparent process that maximizes delivered value, reduces uncertainty and ensures software sustainability.',
        
        'methodology.discovery.title': '1. Discovery and Analysis',
        'methodology.discovery.desc': 'Analysis of the problem, users and processes.',
        'methodology.proposal.title': '2. Technical Proposal',
        'methodology.proposal.desc': 'Definition of scope, schedule, budget and success criteria.',
        'methodology.design.title': '3. UX/UI Design',
        'methodology.design.desc': 'Prototyping and functional definition.',
        'methodology.construction.title': '4. Agile Development',
        'methodology.construction.desc': 'Iterative development through agile methodologies.',
        'methodology.testing.title': '5. Testing & Deployment',
        'methodology.testing.desc': 'Quality assurance, deployment and training.',
        'methodology.support.title': '6. Support & Maintenance',
        'methodology.support.desc': 'Support, maintenance and product evolution.',
        'methodology.principle1.title': 'Clarity',
        'methodology.principle1.desc': 'Precise definition of scope, deadlines and costs from the start.',
        'methodology.principle2.title': 'Trust',
        'methodology.principle2.desc': 'Application of best practices and responsibility for what is delivered.',
        'methodology.principle3.title': 'Evolution',
        'methodology.principle3.desc': 'Software support throughout its useful life.',
        
        // Values Section
        'values.badge': 'Our Values',
        'values.title': 'Corporate Values and Commitment to Excellence in Software Development',
        'values.intro': 'Our institutional values are the foundation of each project and the guarantee of a lasting professional relationship.',
        
        'values.customer.title': 'Customer-Centric Approach',
        'values.customer.desc': 'Deep understanding of the business and alignment with strategic objectives.',
        'values.quality.title': 'Assured Quality (QA)',
        'values.quality.desc': 'Pursuit of functional excellence that provides real and sustainable value.',
        'values.responsibility.title': 'Responsibility',
        'values.responsibility.desc': 'Rigorous fulfillment of commitments and transparency in communication.',
        'values.transparency.title': 'Transparency',
        'values.transparency.desc': 'Clear, honest and contextualized communication at all stages.',
        'values.continuous.title': 'Continuous Improvement (Kaizen)',
        'values.continuous.desc': 'Constant learning and iteration to optimize results.',
        'values.commitment.title': 'Commitment',
        'values.commitment.desc': 'Genuine dedication to the success of each project and client.',
        'values.differentiators.title': 'Differentiating Elements',
        'values.differentiators.subtitle': 'What distinguishes us in every project we undertake',
        'values.differentiator1.title': 'Continuous support',
        'values.differentiator1.desc': 'Active relationship before, during and after launch.',
        'values.differentiator2.title': 'Clear communication',
        'values.differentiator2.desc': 'Progress and technical decisions explained in understandable terms.',
        'values.differentiator3.title': 'Focus on maintainability',
        'values.differentiator3.desc': 'Software designed to evolve without unnecessary dependencies.',
        'values.differentiator4.title': 'Incremental delivery',
        'values.differentiator4.desc': 'Work organized in stages that allow validation and improvement.',
        'values.metrics.title': 'Impact Measurement',
        'values.metrics.subtitle': 'We evaluate the success of our projects through concrete indicators',
        'values.metric1.label': 'Reduction in manual tasks',
        'values.metric2.label': 'Decrease in operational errors',
        'values.metric3.label': 'Improvement in response times',
        'values.metric4.label': 'Control and traceability',
        
        // Contact Section
        'contact.badge': 'Contact Us',
        'contact.title': 'Free Quote: Request Budget for Your Software Project',
        'contact.subtitle': 'Do you have a project in mind? Let\'s talk about how we can help you achieve your technology goals.',
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
            // Language not supported, fallback to Spanish
            lang = 'es';
        }
        
        this.currentLang = lang;
        localStorage.setItem('metasoft_lang', lang);
        document.documentElement.lang = lang;
        this.updatePageContent();
        this.updateLanguageSelector();
    }

    t(key) {
        const translation = this.translations[this.currentLang]?.[key];
        if (!translation) {
            // Translation missing for key, return key as fallback
            return key;
        }
        return translation;
    }

    updatePageContent() {
        // Actualizar todos los elementos con data-i18n
        const elements = document.querySelectorAll('[data-i18n]');
        // Updating elements with translations
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (!key) return;
            
            const translation = this.t(key);
            
            // No actualizar si la traducción es la misma que la clave (error)
            if (translation === key) {
                // Translation not found, keeping original key
            }
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Actualizar atributos aria-label
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            if (key) {
                element.setAttribute('aria-label', this.t(key));
            }
        });

        // Dispatch evento personalizado
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { lang: this.currentLang } 
        }));
        
        // i18n: Content updated successfully
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

// Exportar para uso global inmediatamente
window.i18n = i18n;

// Función de inicialización
function initI18n() {
    // Initialize i18n system
    i18n.setLanguage(i18n.currentLang);
    
    // Event listeners para botones de idioma
    const langButtons = document.querySelectorAll('[data-lang]');
    // Initialize language buttons
    
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            i18n.setLanguage(lang);
        });
    });
    
    // i18n system initialized successfully
}

// Inicializar lo antes posible
if (document.readyState === 'loading') {
    // DOM aún está cargando
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    // DOM ya está listo, ejecutar inmediatamente
    initI18n();
}
