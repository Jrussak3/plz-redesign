const ASSET = (name) => `/assets/icons/${name}`;

export const MODULE_CARDS = [
  { title: 'Tablica', description: 'Dziel się bieżącymi informacjami ze swoją społecznością, wraz z dokumentami i powiadomieniami na czas', icon: ASSET('tablica.svg') },
  { title: 'Czaty i kanały', description: 'Prowadź efektywną komunikację bez rozpraszaczy.', icon: ASSET('czat.svg') },
  { title: 'Galeria', description: 'Przeglądaj zdjęcia udostępniane w twojej społeczności', icon: ASSET('galeria.svg') },
  { title: 'Głosowania', description: 'Przeprowadzaj sprawne głosowania, np. podczas Walnych Zgromadzeń.', icon: ASSET('glosowania.svg') },
  { title: 'Raporty z głosowań', description: 'Generuj raporty akceptowane przez sądy rejestrowe (KRS)!', icon: ASSET('raporty-z-glosowan.svg') },
  { title: 'Ankiety', description: 'Przeprowadzaj błyskawiczne ankiety wśród swojej społeczności', icon: ASSET('ankiety.svg') },
  { title: 'Zadania', description: 'Widzisz na bieżąco, które zadania są w toku, a które już zakończone, bez konieczności pytania kogokolwiek osobiście.', icon: ASSET('zadania.svg') },
  { title: 'Załączanie pism i dokumentów', description: 'Wszystkie pisma i uchwały zostają w jednym miejscu, bez szukania w mailach czy różnych folderach', icon: ASSET('zalaczanie-pism-i-dokumentow.svg') },
  { title: 'Twój sklep', description: 'Prowadź e-sklep w ramach swojej społeczności', icon: ASSET('twoj-sklep.svg') },
  { title: 'Program lojalnościowy', description: 'Nagradzaj społeczność dedykowanym programem lojalnościowym', icon: ASSET('program-lojalnosciowy.svg') },
  { title: 'Karta członkowska', description: 'Nagradzaj punktami aktywność swoich członków', icon: ASSET('karta-czlonkowska.svg') },
  { title: 'Darowizny i składki', description: 'Pobieraj darowizny, składki i inne opłaty', icon: ASSET('darowizny.svg') },
  { title: 'Wydarzenia', description: 'Organizuj i przeprowadzaj wydarzenia od spotkań formalnych do zapisów na warsztaty i szkolenia', icon: ASSET('wydarzenia.svg') },
  { title: 'PLZ Web', description: 'Korzystaj z PLZ zarówno na telefonie, jak i komputerze', icon: ASSET('plz-web.svg') },
  { title: 'Asystent AI', description: 'Zyskaj wsparcie w prawie i automatyzuj codzienne zadania biurowe', icon: ASSET('asystent-ai.png') },
  { title: 'Odkrywaj', description: 'Korzystaj z zakładki Odkrywaj do promowania artykułów, wydarzeń i swojej społeczności', icon: ASSET('odkrywaj.svg') },
];

const MOBILE_ROW_TITLES = [
  ['Tablica', 'Głosowania', 'Załączanie pism i dokumentów', 'Ankiety', 'Raporty z głosowań', 'Odkrywaj'],
  ['Czat grupowy', 'Zadania', 'Wydarzenia', 'Darowizny i składki', 'Twój sklep', 'Odkrywaj'],
  ['Program lojalnościowy', 'Karta członkowska', 'PLZ Web', 'Asystent AI'],
];

function cardMarkup(card) {
  return `
    <div class="module-card" tabindex="0">
      <div class="module-card__icon"><img alt="" src="${card.icon}" /></div>
      <p class="module-card__title">${card.title}</p>
      <div class="module-card__tooltip">
        <p class="module-card__description">${card.description}</p>
      </div>
    </div>
  `;
}

function clampTooltipPosition(event) {
  const card = event.target.closest('.module-card');
  if (!card) return;
  const tooltip = card.querySelector('.module-card__tooltip');
  if (!tooltip) return;
  tooltip.style.removeProperty('--tooltip-shift');
  const margin = 12;
  const rect = tooltip.getBoundingClientRect();
  let shift = 0;
  if (rect.left < margin) shift = margin - rect.left;
  else if (rect.right > window.innerWidth - margin) shift = window.innerWidth - margin - rect.right;
  if (shift) tooltip.style.setProperty('--tooltip-shift', `${shift}px`);
}

export function renderModuleCards() {
  const desktopGrid = document.getElementById('modules-grid-desktop');
  if (desktopGrid) {
    desktopGrid.innerHTML = MODULE_CARDS.map(cardMarkup).join('');
    desktopGrid.addEventListener('mouseover', clampTooltipPosition);
    desktopGrid.addEventListener('focusin', clampTooltipPosition);
  }

  const cardsByTitle = new Map(MODULE_CARDS.map((c) => [c.title, c]));
  MOBILE_ROW_TITLES.forEach((titles, i) => {
    const mobileTrack = document.getElementById(`modules-track-mobile-${i + 1}`);
    if (!mobileTrack) return;
    mobileTrack.innerHTML = titles
      .map((title) => cardsByTitle.get(title))
      .filter(Boolean)
      .map((c) => `<div class="modules-carousel__slide">${cardMarkup(c)}</div>`)
      .join('');
  });
}
