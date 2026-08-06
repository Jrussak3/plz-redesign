import { useEffect, useRef, useState } from "react";

const VALUE_CARDS = [
  {
    title: "Niezależność od cyfrowych gigantów",
    description: "Wdrażamy polskie rozwiązania chmurowe. Nie bazujemy na szkodliwych algorytmach wielkich firm technologicznych.",
  },
  {
    title: "Polska spółdzielcza aplikacja",
    description: "Poprzez PLZ wspieramy budowanie relacji opartych na zaufaniu rozwój organizacji w oparciu o lokalne zasoby.",
  },
  {
    title: "Uniwersalna aplikacja dla twojej organizacji",
    description: "PLZ zbiera wszystkie narzędzia przydatne w prowadzeniu społeczności w jednym miejscu. Cały czas rozwijamy naszą ofertę w odpowiedzi na realne potrzeby użytkowników.",
  },
];

function ValueCardBody({
  title,
  description,
  titleClassName = "text-[11px] sm:text-[16px] md:text-[20px] min-h-0 sm:min-h-[50px]",
  descriptionClassName = "text-[9px] sm:text-[12px] md:text-[14px]",
}) {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center gap-[8px] rounded-[12px] bg-white p-[8px] shadow-[0px_20px_25px_0px_rgba(131,153,214,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] sm:gap-[10px] sm:p-[24px] md:gap-[16px] md:rounded-[24px] md:p-[32px]">
      <div className={`flex w-full flex-col justify-center text-center font-['Poppins:SemiBold',sans-serif] leading-[1.25] text-[#22005d] ${titleClassName}`}>
        <p className="leading-[1.25]">{title}</p>
      </div>
      <p className={`w-full text-center font-['Poppins:Regular',sans-serif] leading-[1.3] sm:leading-[1.5] text-[rgba(34,0,93,0.5)] ${descriptionClassName}`}>{description}</p>
    </div>
  );
}

function ValueCardsRow() {
  return (
    <div className="hidden w-full max-w-[1200px] gap-[60px] md:flex">
      {VALUE_CARDS.map((card) => (
        <div key={card.title} className="flex-1">
          <ValueCardBody {...card} />
        </div>
      ))}
    </div>
  );
}

function ChevronIcon({ flipped }) {
  return (
    <svg className={flipped ? "rotate-180" : undefined} fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d="M15 18L9 12L15 6" stroke="#fffbff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MobileValueCarouselCard({ card, isActive, isPeek, width, instant, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ width: `${width}px` }}
      className={`shrink-0 transition-all ease-out ${instant ? "duration-0" : "duration-500"} ${
        isActive ? "opacity-100 scale-100" : isPeek ? "cursor-pointer opacity-50 scale-90 hover:opacity-75 hover:scale-[0.92]" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <ValueCardBody {...card} titleClassName="text-[22px]" descriptionClassName="text-[15px]" />
    </div>
  );
}

function MobileValuesCarousel() {
  const total = VALUE_CARDS.length;
  // Extended track = [clone of last, ...real cards, clone of first], so sliding past
  // either end still glides in the same direction before we snap back invisibly.
  const extended = [VALUE_CARDS[total - 1], ...VALUE_CARDS, VALUE_CARDS[0]];
  const [trackIndex, setTrackIndex] = useState(1);
  const [instant, setInstant] = useState(false);
  const [containerWidth, setContainerWidth] = useState(390);
  const viewportRef = useRef(null);
  const activeIndex = (trackIndex - 1 + total) % total;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const slideWidth = Math.round(containerWidth * 0.7);
  const gap = 20;
  const step = slideWidth + gap;

  const goTo = (next) => {
    setInstant(false);
    setTrackIndex(next);
  };

  const handleTransitionEnd = () => {
    if (trackIndex === 0) {
      setInstant(true);
      setTrackIndex(total);
    } else if (trackIndex === total + 1) {
      setInstant(true);
      setTrackIndex(1);
    }
  };

  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  const translateX = containerWidth / 2 - (trackIndex * step + slideWidth / 2);

  return (
    <div className="flex w-full flex-col items-center gap-[24px] md:hidden" data-name="Wartości carousel">
      <div ref={viewportRef} className="relative w-full overflow-hidden py-[20px]">
        <div
          className="flex items-center"
          style={{ gap: `${gap}px`, transform: `translateX(${translateX}px)`, transition: instant ? "none" : "transform 500ms ease-out" }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((card, i) => {
            const distance = i - trackIndex;
            return (
              <MobileValueCarouselCard
                key={i}
                card={card}
                isActive={distance === 0}
                isPeek={Math.abs(distance) === 1}
                width={slideWidth}
                instant={instant}
                onClick={distance === 0 ? undefined : () => goTo(trackIndex + Math.sign(distance))}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center gap-[16px]">
        <button
          type="button"
          onClick={() => goTo(trackIndex - 1)}
          aria-label="Poprzednia wartość"
          className="flex size-[36px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] bg-[#6750a4] transition-colors hover:bg-[#573f8a]"
        >
          <ChevronIcon />
        </button>
        <div className="flex items-center justify-center gap-[20px]">
          {VALUE_CARDS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i + 1)}
              aria-label={`Przejdź do wartości ${i + 1}`}
              className="group flex h-[30px] w-[38px] shrink-0 cursor-pointer flex-col items-center justify-center px-[4px]"
            >
              <div className={`relative shrink-0 rounded-[15px] bg-[#6750a4] transition-all duration-300 group-hover:bg-[#573f8a] ${i === activeIndex ? "size-[30px]" : "size-[20px]"}`}>
                <div aria-hidden className="absolute inset-0 rounded-[15px] border-2 border-solid border-[#fffbff] pointer-events-none" />
              </div>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(trackIndex + 1)}
          aria-label="Następna wartość"
          className="flex size-[36px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] bg-[#6750a4] transition-colors hover:bg-[#573f8a]"
        >
          <ChevronIcon flipped />
        </button>
      </div>
    </div>
  );
}

export function ValuesSection() {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-center bg-gradient-to-b from-[#f5efff] via-[#fff0ef] to-[#f5efff] py-[60px] px-[24px] md:py-[140px]">
      <div className="w-full max-w-[1200px]">
        <ValueCardsRow />
        <MobileValuesCarousel />
      </div>
    </div>
  );
}
