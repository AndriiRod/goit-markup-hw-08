document.body.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.closest('#menu-open') || e.target.closest('#menu-close')) toggleMenu();
  if (e.target.closest('[data-modal-open]') || e.target.closest('[data-modal-close]'))
    toggleModal();
}

function toggleOverflow() {
  document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'visible' : 'hidden';
}

function toggleMenu() {
  document.body.classList.toggle('mobile-menu__show');
  toggleOverflow();
}

function toggleModal() {
  document.body.classList.toggle('show-modal');
  toggleOverflow();
}
