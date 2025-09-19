// Constantes y configuraciones del proyecto
const CONFIG = {
    // Configuración de animaciones
    ANIMATION: {
        DURATION: 500,
        EASING: 'ease-in-out',
        DELAY: 100
    },

    // Configuración de scroll
    SCROLL: {
        OFFSET: 80, // Offset para navegación fija
        SMOOTH_DURATION: 800,
        THROTTLE_DELAY: 16 // ~60fps
    },

    // Configuración de breakpoints (debe coincidir con SCSS)
    BREAKPOINTS: {
        MOBILE: 768,
        TABLET: 1024,
        DESKTOP: 1200
    },

    // Configuración de menú móvil
    MOBILE_MENU: {
        ANIMATION_DURATION: 300,
        BACKDROP_OPACITY: 0.5
    },

    // Configuración de notificaciones
    NOTIFICATION: {
        DURATION: 3000,
        POSITION: {
            TOP: 20,
            RIGHT: 20
        }
    },

    // Configuración de lazy loading
    LAZY_LOADING: {
        THRESHOLD: 0.1,
        ROOT_MARGIN: '50px'
    }
};

// Selectores CSS comunes
const SELECTORS = {
    // Navegación
    NAV_LINKS: '.nav__link[href^="#"]',
    MOBILE_TOGGLE: '.header__mobile-toggle',
    MOBILE_NAV: '.nav-mobile',
    
    // Secciones
    SECTIONS: 'section[id]',
    
    // Cards y elementos animables
    CARDS: '.project-card, .skill-card, .contact-card',
    ANIMATED_ELEMENTS: '[data-animate]',
    
    // Botones
    BUTTONS: '.btn, .btn-primary, .btn-secondary',
    
    // Formularios
    FORMS: 'form',
    INPUTS: 'input, textarea, select'
};

// Clases CSS para animaciones
const ANIMATION_CLASSES = {
    FADE_IN: 'fade-in',
    SLIDE_UP: 'slide-up',
    SLIDE_DOWN: 'slide-down',
    SLIDE_LEFT: 'slide-left',
    SLIDE_RIGHT: 'slide-right',
    SCALE_IN: 'scale-in',
    ROTATE_IN: 'rotate-in',
    BOUNCE_IN: 'bounce-in'
};

// Eventos personalizados
const EVENTS = {
    NAVIGATION_READY: 'navigation:ready',
    MOBILE_MENU_OPEN: 'mobileMenu:open',
    MOBILE_MENU_CLOSE: 'mobileMenu:close',
    SCROLL_START: 'scroll:start',
    SCROLL_END: 'scroll:end',
    ANIMATION_COMPLETE: 'animation:complete'
};

// Mensajes y textos
const MESSAGES = {
    LOADING: 'Cargando...',
    ERROR: 'Ha ocurrido un error',
    SUCCESS: 'Operación exitosa',
    COPIED: 'Copiado al portapapeles',
    FORM_SENT: 'Formulario enviado correctamente',
    FORM_ERROR: 'Error al enviar el formulario'
};

// URLs y endpoints
const URLS = {
    GITHUB: 'https://github.com/evar-7',
    LINKEDIN: 'https://linkedin.com/in/erickvargas7',
    EMAIL: 'L.ev.var52@gmail.com',
    WHATSAPP: 'https://wa.me/50687190591'
};

// Exportar para uso en otros archivos
window.CONFIG = CONFIG;
window.SELECTORS = SELECTORS;
window.ANIMATION_CLASSES = ANIMATION_CLASSES;
window.EVENTS = EVENTS;
window.MESSAGES = MESSAGES;
window.URLS = URLS;
