export function initNavbar() {
  const panel = document.querySelector('[data-navbar-panel]');
  const openBtn = document.querySelector('[data-navbar-open]');
  const closeBtn = document.querySelector('[data-navbar-close]');
  const overlay = panel?.querySelector('[data-navbar-overlay]');
  const drawerLinks = panel?.querySelectorAll('a');

  if (!panel || !openBtn) return;

  const setOpen = (open) => {
    panel.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    openBtn.setAttribute('aria-expanded', String(open));
    openBtn.querySelector('.menu-icon')?.classList.toggle('menu-icon--open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  openBtn.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
  closeBtn?.addEventListener('click', () => setOpen(false));
  overlay?.addEventListener('click', () => setOpen(false));
  drawerLinks?.forEach((link) => link.addEventListener('click', () => setOpen(false)));
}
