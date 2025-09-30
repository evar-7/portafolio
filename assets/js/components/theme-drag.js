// === DRAG & DROP para el theme switch con snap a los bordes ===
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggleOverlay');
    if (!themeToggle) return;

    // Variables para controlar el arrastre
    let isDragging = false;
    let startX, startY, offsetX, offsetY;
    let moved = false; // Para saber si hubo movimiento

    // Posición inicial (pegado a la derecha por defecto)
    themeToggle.style.position = 'fixed';
    themeToggle.style.top = '7rem';
    themeToggle.style.right = '2rem';
    themeToggle.style.left = '';
    themeToggle.style.zIndex = 1000;

    // Inicia el arrastre
    function onMouseDown(e) {
        isDragging = true;
        moved = false;
        startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        const rect = themeToggle.getBoundingClientRect();
        offsetX = startX - rect.left;
        offsetY = startY - rect.top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('touchmove', onMouseMove, { passive: false });
        document.addEventListener('touchend', onMouseUp);
    }

    // Mueve el switch mientras se arrastra
    function onMouseMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        moved = true;
        const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
        let left = clientX - offsetX;
        let top = clientY - offsetY;
        // Limita el movimiento dentro de la ventana
        left = Math.max(0, Math.min(window.innerWidth - themeToggle.offsetWidth, left));
        top = Math.max(0, Math.min(window.innerHeight - themeToggle.offsetHeight, top));
        themeToggle.style.left = left + 'px';
        themeToggle.style.top = top + 'px';
        themeToggle.style.right = '';
    }

    // Al soltar, siempre se pega al lado más cercano (izquierda o derecha)
    function onMouseUp(e) {
        if (!isDragging) return;
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);

        // Snap SOLO a izquierda o derecha, nunca al centro
        const rect = themeToggle.getBoundingClientRect();
        if (rect.left < window.innerWidth / 2) {
            // Pega a la izquierda
            themeToggle.style.left = '2rem';
            themeToggle.style.right = '';
        } else {
            // Pega a la derecha
            themeToggle.style.right = '2rem';
            themeToggle.style.left = '';
        }
    }

    // Evita activar el switch si hubo drag
    const switchBtn = document.getElementById('themeSwitch');
    if (switchBtn) {
        switchBtn.addEventListener('click', function (e) {
            if (moved) {
                // Si hubo movimiento, no activar el cambio de tema
                e.stopImmediatePropagation();
                e.preventDefault();
                moved = false;
                return false;
            }
            // Si no hubo drag, se permite el click normalmente
        }, true);
    }

    // Listeners para mouse y touch
    themeToggle.addEventListener('mousedown', onMouseDown);
    themeToggle.addEventListener('touchstart', onMouseDown, { passive: false });
});
