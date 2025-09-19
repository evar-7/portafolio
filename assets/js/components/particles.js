// Componente de partículas con estilo circuitos
class ParticlesManager {
    constructor() {
        this.particlesConfig = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00ff6a" // Color verde neón para circuitos
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00ff6a",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        };
        
        this.init();
    }

    init() {
        if (typeof particlesJS !== 'undefined') {
            this.initParticles();
        } else {
            console.warn('Particles.js no está cargado');
        }
    }

    initParticles() {
        try {
            particlesJS('particles-js', this.particlesConfig, () => {
                console.log('✓ Partículas inicializadas correctamente');
            });
        } catch (error) {
            console.error('Error al inicializar partículas:', error);
        }
    }

    // Método para actualizar la configuración de partículas
    updateConfig(newConfig) {
        this.particlesConfig = { ...this.particlesConfig, ...newConfig };
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }

    // Método para cambiar el color de las partículas
    changeColor(color) {
        this.updateConfig({
            particles: {
                color: { value: color },
                line_linked: { color: color }
            }
        });
    }

    // Método para cambiar la velocidad de las partículas
    changeSpeed(speed) {
        this.updateConfig({
            particles: {
                move: { speed: speed }
            }
        });
    }

    // Método para cambiar la densidad de partículas
    changeDensity(number) {
        this.updateConfig({
            particles: {
                number: { value: number }
            }
        });
    }

    // Método para pausar/reanudar las partículas
    toggleParticles() {
        if (window.pJSDom && window.pJSDom[0]) {
            const pJS = window.pJSDom[0].pJS;
            if (pJS.particles.move.enable) {
                pJS.particles.move.enable = false;
                pJS.fn.particlesRefresh();
            } else {
                pJS.particles.move.enable = true;
                pJS.fn.particlesRefresh();
            }
        }
    }

    // Método para destruir las partículas
    destroy() {
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.fn.vendors.densityAutoParticles();
            window.pJSDom[0].pJS.fn.vendors.densityAutoParticles();
        }
    }
}

// Configuración específica para tema de circuitos
const CIRCUIT_CONFIG = {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#00ff6a"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#00ff6a",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.8
                }
            },
            push: {
                particles_nb: 3
            }
        }
    },
    retina_detect: true
};

// Exportar para uso en main.js
window.ParticlesManager = ParticlesManager;
window.CIRCUIT_CONFIG = CIRCUIT_CONFIG;
