// assets/js/components/form.js
document.addEventListener('DOMContentLoaded', function() {
  const emailBtn = document.querySelector('.nav__link[href="#contactForm"]');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeFormBtn = document.getElementById('closeForm');

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
});