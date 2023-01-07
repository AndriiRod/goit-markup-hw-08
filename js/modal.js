(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  const isOpen = !refs.modal.classList.contains('is-hidden');
  const scrollLockMethod = !isOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  function toggleModal() {
    bodyScrollLock[scrollLockMethod](document.body);
    refs.modal.classList.toggle('is-hidden');
  }
})();
