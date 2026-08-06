// Shared "peek" carousel behavior: an active centered slide, with the immediate
// neighbors visible at reduced opacity/scale, looping infinitely via an
// extended track ([clone of last, ...real, clone of first]).
export function createPeekCarousel({ viewport, track, slideClass, slideSelector, prevBtn, nextBtn, dotsContainer, slideWidthRatio, gap, minSlideWidth, maxSlideWidth }) {
  const slides = Array.from(track.querySelectorAll(slideSelector));
  const total = slides.length;

  // Clone first/last slides so looping past either end glides smoothly
  // before snapping back invisibly.
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[total - 1].cloneNode(true);
  track.insertBefore(lastClone, slides[0]);
  track.appendChild(firstClone);

  const allSlides = Array.from(track.children);
  let trackIndex = 1;
  let instant = false;
  let containerWidth = viewport.clientWidth || 390;

  const ro = new ResizeObserver(([entry]) => {
    containerWidth = entry.contentRect.width;
    render();
  });
  ro.observe(viewport);

  const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('[data-dot]')) : [];

  function slideWidth() {
    const computed = Math.round(containerWidth * slideWidthRatio);
    if (maxSlideWidth) return Math.min(maxSlideWidth, computed);
    if (minSlideWidth) return Math.max(minSlideWidth, computed);
    return computed;
  }

  function goTo(next) {
    instant = false;
    trackIndex = next;
    render();
  }

  function render() {
    const width = slideWidth();
    const step = width + gap;
    const translateX = containerWidth / 2 - (trackIndex * step + width / 2);
    track.style.gap = `${gap}px`;
    track.style.transition = instant ? 'none' : 'transform 500ms ease-out';
    track.style.transform = `translateX(${translateX}px)`;

    allSlides.forEach((slide, i) => {
      const distance = i - trackIndex;
      slide.style.width = `${width}px`;
      slide.classList.toggle('is-instant', instant);
      slide.classList.toggle('is-active', distance === 0);
      slide.classList.toggle('is-peek', Math.abs(distance) === 1);
      slide.classList.toggle('is-hidden', Math.abs(distance) > 1);
      slide.onclick = distance === 0 ? null : () => goTo(trackIndex + Math.sign(distance));
    });

    const activeIndex = ((trackIndex - 1) % total + total) % total;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIndex));
  }

  track.addEventListener('transitionend', () => {
    if (trackIndex === 0) {
      instant = true;
      trackIndex = total;
      render();
      requestAnimationFrame(() => {
        instant = false;
      });
    } else if (trackIndex === total + 1) {
      instant = true;
      trackIndex = 1;
      render();
      requestAnimationFrame(() => {
        instant = false;
      });
    }
  });

  prevBtn?.addEventListener('click', () => goTo(trackIndex - 1));
  nextBtn?.addEventListener('click', () => goTo(trackIndex + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i + 1)));

  render();
}
