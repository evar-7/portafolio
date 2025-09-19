// Archivo principal de JavaScript para el portafolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portafolio cargado correctamente');
    
    // Inicializar todos los componentes
    initComponents();
});

// Función para inicializar todos los componentes
function initComponents() {
    try {
        // Inicializar navegación
        if (typeof Navigation !== 'undefined') {
            new Navigation();
            console.log('✓ Navegación inicializada');
        }

        // Inicializar menú móvil
        if (typeof MobileMenu !== 'undefined') {
            new MobileMenu();
            console.log('✓ Menú móvil inicializado');
        }

        // Inicializar animaciones
        if (typeof Animations !== 'undefined') {
            new Animations();
            console.log('✓ Animaciones inicializadas');
        }

        // Inicializar partículas
        if (typeof ParticlesManager !== 'undefined') {
            window.particlesManager = new ParticlesManager();
            console.log('✓ Partículas inicializadas');
        }

        // Configurar eventos globales
        setupGlobalEvents();
        
        console.log('✓ Todos los componentes inicializados correctamente');
        
    } catch (error) {
        console.error('Error al inicializar componentes:', error);
    }
}

// Configurar eventos globales
function setupGlobalEvents() {
    // Evento de scroll optimizado
    let scrollTimeout;
    window.addEventListener('scroll', Helpers.throttle(() => {
        // Disparar evento personalizado de scroll
        window.dispatchEvent(new CustomEvent(EVENTS.SCROLL_START));
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            window.dispatchEvent(new CustomEvent(EVENTS.SCROLL_END));
        }, 150);
    }, CONFIG.SCROLL.THROTTLE_DELAY));

    // Evento de redimensionamiento de ventana
    window.addEventListener('resize', Helpers.debounce(() => {
        console.log('Ventana redimensionada:', Helpers.getScreenSize());
    }, 250));

    // Evento de carga completa
    window.addEventListener('load', () => {
        console.log('Página completamente cargada');
        document.body.classList.add('loaded');
    });
}
