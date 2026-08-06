const ASSET = (name) => `/assets/${name}`;

export const MODULE_CARDS = [
  { title: 'Tablica', description: 'Dziel się bieżącymi informacjami ze swoją społecznością, wraz z dokumentami i powiadomieniami na czas', icon: ASSET('tablica.svg') },
  { title: 'Czat grupowy', description: 'Prowadź efektywną komunikację bez rozpraszaczy.', icon: ASSET('czat.svg') },
  { title: 'Galeria', description: 'Przeglądaj zdjęcia udostępniane w twojej społeczności', icon: ASSET('galeria.svg') },
  { title: 'Głosowania', description: 'Przeprowadzaj sprawne głosowania, np. podczas Walnych Zgromadzeń.', icon: ASSET('glosowania.svg') },
  { title: 'Zadania', description: 'Widzisz na bieżąco, które zadania są w toku, a które już zakończone, bez konieczności pytania kogokolwiek osobiście.', icon: ASSET('zadania.svg') },
  { title: 'Załączanie pism i dokumentów', description: 'Wszystkie pisma i uchwały zostają w jednym miejscu, bez szukania w mailach czy różnych folderach', icon: ASSET('zalaczanie pism i dokumentow.svg') },
  { title: 'Darowizny i składki członkowskie', description: 'Obsługa darowizn, składek i pobierania opłat za pomocą Autopay', icon: ASSET('darowizny.svg') },
  { title: 'Twój sklep', description: 'Możliwość e-sklepu w ramach danej społeczności', icon: ASSET('twoj sklep.svg') },
  { title: 'Program lojalnościowy', description: 'Obsługa dedykowanego programu lojalnościowego', icon: ASSET('program lojalnosciowy.svg') },
  { title: 'Ankiety', description: 'Przeprowadzaj błyskawiczne sondaże wśród swojej społeczności', icon: ASSET('ankiety.svg') },
  { title: 'Raporty z głosowań', description: 'Generuj raporty respektowane przez KRS', icon: ASSET('raporty z glosowan.svg') },
  { title: 'Karta członkowska', description: 'Dzięki której członkowie mogą zdobywać punkty za aktywność', icon: ASSET('karta czlonkowska.svg') },
  { title: 'Wydarzenia', description: 'Funkcje wspierające organizowanie i przeprowadzanie wydarzeń', icon: ASSET('wydarzenia.svg') },
  { title: 'PLZ Web', description: 'Pozwala na korzystanie z PLZ zarówno na telefonie, jak i komputerze', icon: ASSET('plz web.svg') },
  { title: 'Asystent AI', description: 'Oferujący wsparcie w kwestiach związanych z prawem pracy', icon: ASSET('asystent ai.svg') },
  { title: 'Odkrywaj', description: 'Korzystaj z zakładki odkrywaj do promocji organizacji', icon: ASSET('odkrywaj.svg') },
];

function cardMarkup(card) {
  return `
    <div class="module-card">
      <img alt="" src="${card.icon}" />
      <p class="module-card__title">${card.title}</p>
      <p class="module-card__description">${card.description}</p>
    </div>
  `;
}

export function renderModuleCards() {
  const desktopGrid = document.getElementById('modules-grid-desktop');
  const mobileTrack = document.getElementById('modules-track-mobile');
  if (desktopGrid) desktopGrid.innerHTML = MODULE_CARDS.map(cardMarkup).join('');
  if (mobileTrack) mobileTrack.innerHTML = MODULE_CARDS.map((c) => `<div class="modules-carousel__slide">${cardMarkup(c)}</div>`).join('');
}
