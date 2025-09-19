// Componente del menú móvil
class MobileMenu {
    constructor() {
        this.mobileToggle = document.querySelector('.header__mobile-toggle');
        this.mobileNav = document.querySelector('.nav-mobile');
        this.navLinks = document.querySelectorAll('.nav-mobile .nav__link');
        this.init();
    }

    init() {
        if (this.mobileToggle && this.mobileNav) {
            this.setupToggle();
            this.setupCloseOnLinkClick();
            this.setupCloseOnOutsideClick();
        }
    }

    // Configurar el botón de toggle del menú móvil
    setupToggle() {
        this.mobileToggle.addEventListener('click', () => {
            this.toggleMenu();
        });
    }

    // Configurar cierre del menú al hacer clic en un enlace
    setupCloseOnLinkClick() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
    }

    // Configurar cierre del menú al hacer clic fuera
    setupCloseOnOutsideClick() {
        document.addEventListener('click', (e) => {
            if (this.mobileNav.classList.contains('active') && 
                !this.mobileNav.contains(e.target) && 
                !this.mobileToggle.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    // Alternar el menú móvil
    toggleMenu() {
        this.mobileNav.classList.toggle('active');
        this.mobileToggle.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (this.mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Cerrar el menú móvil
    closeMenu() {
        this.mobileNav.classList.remove('active');
        this.mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Exportar para uso en main.js
window.MobileMenu = MobileMenu;
