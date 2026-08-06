import { initNavbar } from './navbar.js';
import { createPeekCarousel } from './carousel.js';

initNavbar();

function setup(id, opts) {
  const viewport = document.querySelector(`[data-carousel="${id}"]`);
  if (!viewport) return;
  const track = viewport.querySelector('[data-carousel-track]');
  const wrapper = viewport.closest('[data-carousel-wrapper]');
  createPeekCarousel({
    viewport,
    track,
    slideSelector: ':scope > *',
    prevBtn: wrapper?.querySelector('[data-carousel-prev]'),
    nextBtn: wrapper?.querySelector('[data-carousel-next]'),
    dotsContainer: wrapper?.querySelector('[data-carousel-dots]'),
    gap: opts.gap,
    slideWidthRatio: opts.ratio,
    minSlideWidth: opts.min,
    maxSlideWidth: opts.max,
  });
}

setup('pricing-mobile', { ratio: 0.72, gap: 12, max: 320 });
