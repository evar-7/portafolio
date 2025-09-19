// Componente de animaciones
class Animations {
    constructor() {
        this.animatedElements = document.querySelectorAll('[data-animate]');
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
    }

    // Configurar animaciones al hacer scroll
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        this.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Configurar efectos de hover
    setupHoverEffects() {
        const cards = document.querySelectorAll('.project-card, .skill-card, .contact-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    // Animación de aparición gradual
    fadeIn(element, duration = 500) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = performance.now();
        
        function animate(currentTime) {
            let elapsed = currentTime - start;
            let progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }

    // Animación de deslizamiento
    slideIn(element, direction = 'up', duration = 500) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        const transforms = {
            up: 'translateY(30px)',
            down: 'translateY(-30px)',
            left: 'translateX(30px)',
            right: 'translateX(-30px)'
        };
        
        element.style.transform = transforms[direction];
        
        let start = performance.now();
        
        function animate(currentTime) {
            let elapsed = currentTime - start;
            let progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = progress;
            element.style.transform = `translate${direction === 'up' || direction === 'down' ? 'Y' : 'X'}(0)`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }
}

// Exportar para uso en main.js
window.Animations = Animations;
