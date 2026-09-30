import { initNavbar } from './navbar.js';

initNavbar();

// ---------- FAQ accordion ----------
function initFaqAccordion() {
  const toggles = document.querySelectorAll('.faq-row__toggle');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const row = toggle.closest('.faq-row');
      if (!row) return;
      const isOpen = row.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

initFaqAccordion();
