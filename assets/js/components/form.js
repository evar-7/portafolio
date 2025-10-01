// assets/js/components/form.js
document.addEventListener('DOMContentLoaded', function() {
  const emailBtn = document.querySelector('.nav__link[href="#contactForm"]');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeFormBtn = document.getElementById('closeForm');
  const contactForm = document.querySelector('#contactForm form');

  if (emailBtn && modalOverlay && closeFormBtn) {
    emailBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modalOverlay.style.display = 'flex';
    });

    closeFormBtn.addEventListener('click', function() {
      modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
  }

  // Enviar datos del formulario al backend Flask
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const mensaje = document.getElementById('mensaje').value;

  fetch('https://portafolio-backend-oldh.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, correo, mensaje })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('¡Correo enviado correctamente!');
          contactForm.reset();
          modalOverlay.style.display = 'none';
        } else {
          alert('Error al enviar el correo: ' + data.message);
        }
      })
      .catch(error => {
        alert('Error de conexión: ' + error);
      });
    });
  }
});