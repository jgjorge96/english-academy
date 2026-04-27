// NAV
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('is-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ACCORDEON
document.querySelectorAll('.accordion-header').forEach(function (header) {
  header.addEventListener('click', function () {
    var item = header.parentElement;
    var isOpen = item.classList.contains('open');

    // Cerrar todos los ítems abiertos
    document.querySelectorAll('.accordion-item.open').forEach(function (el) {
      el.classList.remove('open');
    });

    // Abrir el ítem clicado si estaba cerrado
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});