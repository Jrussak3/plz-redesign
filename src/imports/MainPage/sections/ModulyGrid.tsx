import { useEffect, useRef, useState } from "react";
import svgPaths from "../svg-kv3yk0jd26";
import votingIcon from "../../../Assets/glosowania.svg";
import pollsIcon from "../../../Assets/ankiety.svg";
import votingReportsIcon from "../../../Assets/raporty z glosowan.svg";
import tasksIcon from "../../../Assets/zadania.svg";
import groupChatIcon from "../../../Assets/czat.svg";
import donationsIcon from "../../../Assets/darowizny.svg";
import documentsIcon from "../../../Assets/zalaczanie pism i dokumentow.svg";
import galleryIcon from "../../../Assets/galeria.svg";
import storeIcon from "../../../Assets/twoj sklep.svg";
import loyaltyProgramIcon from "../../../Assets/program lojalnosciowy.svg";
import memberCardIcon from "../../../Assets/karta czlonkowska.svg";
import eventsIcon from "../../../Assets/wydarzenia.svg";
import desktopAppIcon from "../../../Assets/plz web.svg";
import aiAssistantIcon from "../../../Assets/asystent ai.svg";
import boardIcon from "../../../Assets/tablica.svg";
import discoverIcon from "../../../Assets/odkrywaj.svg";

function CommunityIntroHeadline() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Header">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[0] min-w-px not-italic relative z-0 text-[#22005d] text-[0px] text-center">
        <span className="leading-[1.25] text-[28px] sm:text-[36px] md:text-[56px]">{`Twoja `}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#bf96c5] leading-[1.25] text-[28px] sm:text-[36px] md:text-[56px] text-[transparent] to-[#4700c3]">{`społeczność `}</span>
        <span className="relative inline-block leading-[1.25] text-[28px] sm:text-[36px] md:text-[56px] text-[rgba(34,0,93,0.75)]">
          <span className="hidden md:block absolute -z-10 h-[10%] left-[2%] top-[100%] w-[96%] pointer-events-none" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 488 15" width="488">
              <path d={svgPaths.p3686a0} fill="var(--fill-0, #B9AFE0)" id="Vector" />
            </svg>
          </span>
          <span className="relative">w jednym miejscu</span>
        </span>
      </p>
    </div>
  );
}

export function CommunityIntroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <CommunityIntroHeadline />
      <div className="font-['Poppins:Medium',sans-serif] leading-[0] not-italic opacity-80 relative shrink-0 text-[16px] sm:text-[18px] md:text-[24px] text-[rgba(34,0,93,0.75)] text-center max-w-[700px]">
        <p className="leading-[1.25] mb-0">W PLZ masz wszystko pod ręką: narzędzia do komunikacji i aktywizacji Twojej społeczności, zarządzania i przydzielania zadań oraz automatyzacji formalności</p>
      </div>
    </div>
  );
}

type ModuleCardData = {
  title: string;
  description: string;
  icon: string;
  paddingClassName: string;
};

const MODULE_CARDS: ModuleCardData[] = [
  { title: "Tablica", description: "Dziel się bieżącymi informacjami ze swoją społecznością, wraz z dokumentami i powiadomieniami na czas", icon: boardIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
  { title: "Czat grupowy", description: "Prowadź efektywną komunikację bez rozpraszaczy.", icon: groupChatIcon, paddingClassName: "px-[4px] sm:px-[10px]" },
  { title: "Galeria", description: "Przeglądaj zdjęcia udostępniane w twojej społeczności", icon: galleryIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
  { title: "Głosowania", description: "Przeprowadzaj sprawne głosowania, np. podczas Walnych Zgromadzeń.", icon: votingIcon, paddingClassName: "px-[4px] sm:px-[12px]" },
  { title: "Zadania", description: "Widzisz na bieżąco, które zadania są w toku, a które już zakończone, bez konieczności pytania kogokolwiek osobiście.", icon: tasksIcon, paddingClassName: "px-[4px] sm:px-[12px]" },
  { title: "Załączanie pism i dokumentów", description: "Wszystkie pisma i uchwały zostają w jednym miejscu, bez szukania w mailach czy różnych folderach", icon: documentsIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
  { title: "Darowizny i składki członkowskie", description: "Obsługa darowizn, składek i pobierania opłat za pomocą Autopay", icon: donationsIcon, paddingClassName: "px-[4px] sm:px-[12px]" },
  { title: "Twój sklep", description: "Możliwość e-sklepu w ramach danej społeczności", icon: storeIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
  { title: "Program lojalnościowy", description: "Obsługa dedykowanego programu lojalnościowego", icon: loyaltyProgramIcon, paddingClassName: "px-[4px] sm:px-[12px]" },
  { title: "Ankiety", description: "Przeprowadzaj błyskawiczne sondaże wśród swojej społeczności", icon: pollsIcon, paddingClassName: "px-[4px] sm:px-[12px]" },
  { title: "Raporty z głosowań", description: "Generuj raporty respektowane przez KRS", icon: votingReportsIcon, paddingClassName: "px-[4px] sm:px-[12px]" },
  { title: "Karta członkowska", description: "Dzięki której członkowie mogą zdobywać punkty za aktywność", icon: memberCardIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
  { title: "Wydarzenia", description: "Funkcje wspierające organizowanie i przeprowadzanie wydarzeń", icon: eventsIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
  { title: "PLZ Web", description: "Pozwala na korzystanie z PLZ zarówno na telefonie, jak i komputerze", icon: desktopAppIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
  { title: "Asystent AI", description: "Oferujący wsparcie w kwestiach związanych z prawem pracy", icon: aiAssistantIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
  { title: "Odkrywaj", description: "Korzystaj z zakładki odkrywaj do promocji organizacji", icon: discoverIcon, paddingClassName: "px-[4px] sm:px-[20px]" },
];

function ModuleCard({
  title,
  description,
  titleClassName = "text-[11px] sm:text-[16px] md:text-[20px] min-h-0 sm:min-h-[50px]",
  descriptionClassName = "text-[9px] sm:text-[12px] md:text-[14px]",
}: {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full">
      <div className={`flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#22005d] w-full ${titleClassName}`}>
        <p className="leading-[1.25]">{title}</p>
      </div>
      <p className={`font-['Poppins:Regular',sans-serif] leading-[1.3] sm:leading-[1.5] relative shrink-0 text-[rgba(34,0,93,0.5)] w-full ${descriptionClassName}`}>{description}</p>
    </div>
  );
}

function ModuleCardBody({
  title,
  description,
  icon,
  paddingClassName,
  className = "",
  minHeightClassName = "min-h-[110px] sm:min-h-[160px] md:min-h-[264px]",
  iconClassName = "size-[36px] sm:size-[60px]",
  titleClassName,
  descriptionClassName,
}: ModuleCardData & {
  className?: string;
  minHeightClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div
      className={`bg-white content-stretch flex flex-col gap-[4px] sm:gap-[10px] items-center justify-center ${minHeightClassName} ${paddingClassName} py-[8px] sm:py-[24px] relative rounded-[12px] md:rounded-[24px] shadow-[0px_20px_25px_0px_rgba(131,153,214,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-full ${className}`}
    >
      <img alt="" src={icon} className={`shrink-0 ${iconClassName}`} />
      <ModuleCard title={title} description={description} titleClassName={titleClassName} descriptionClassName={descriptionClassName} />
    </div>
  );
}

function ModuleCardsGrid() {
  return (
    <div className="hidden md:flex md:flex-wrap gap-[40px_20px] items-start justify-center max-w-[1550px] relative shrink-0 w-full" data-name="Moduły">
      {MODULE_CARDS.map((card) => (
        <ModuleCardBody key={card.title} {...card} className="md:w-[210px]" />
      ))}
    </div>
  );
}

function ChevronIcon({ flipped }: { flipped?: boolean }) {
  return (
    <svg className={flipped ? "rotate-180" : undefined} fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d="M15 18L9 12L15 6" stroke="#fffbff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MobileModuleCarouselCard({
  card,
  isActive,
  isPeek,
  width,
  onClick,
}: {
  card: ModuleCardData;
  isActive: boolean;
  isPeek: boolean;
  width: number;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{ width: `${width}px` }}
      className={`shrink-0 transition-all duration-500 ease-out ${
        isActive ? "opacity-100 scale-100" : isPeek ? "cursor-pointer opacity-40 scale-90 hover:opacity-60" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <ModuleCardBody
        {...card}
        minHeightClassName="min-h-[264px]"
        iconClassName="size-[80px]"
        titleClassName="text-[22px]"
        descriptionClassName="text-[15px]"
      />
    </div>
  );
}

function MobileModulesCarousel() {
  const total = MODULE_CARDS.length;
  // Extended track = [clone of last, ...real cards, clone of first], so sliding past
  // either end still glides in the same direction before we snap back invisibly.
  const extended = [MODULE_CARDS[total - 1], ...MODULE_CARDS, MODULE_CARDS[0]];
  const [trackIndex, setTrackIndex] = useState(1);
  const [instant, setInstant] = useState(false);
  const [containerWidth, setContainerWidth] = useState(390);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const slideWidth = Math.min(240, Math.round(containerWidth * 0.62));
  const gap = 12;
  const step = slideWidth + gap;

  const goTo = (next: number) => {
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
    <div className="flex w-full flex-col items-center gap-[24px] md:hidden" data-name="Moduły carousel">
      <div ref={viewportRef} className="relative w-full overflow-hidden py-[8px]">
        <div
          className="flex items-stretch"
          style={{ gap: `${gap}px`, transform: `translateX(${translateX}px)`, transition: instant ? "none" : "transform 500ms ease-out" }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((card, i) => {
            const distance = i - trackIndex;
            return (
              <MobileModuleCarouselCard
                key={i}
                card={card}
                isActive={distance === 0}
                isPeek={Math.abs(distance) === 1}
                width={slideWidth}
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
          aria-label="Poprzedni moduł"
          className="flex size-[36px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] bg-[#6750a4] transition-colors hover:bg-[#573f8a]"
        >
          <ChevronIcon />
        </button>
        <button
          type="button"
          onClick={() => goTo(trackIndex + 1)}
          aria-label="Następny moduł"
          className="flex size-[36px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] bg-[#6750a4] transition-colors hover:bg-[#573f8a]"
        >
          <ChevronIcon flipped />
        </button>
      </div>
    </div>
  );
}

export function ModulyGridSection() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-white gap-[40px] md:gap-[80px] items-center py-[60px] md:py-[120px] px-[24px] relative shrink-0 to-[#f3edff] via-[#ffe7e2] via-[37.5%] w-full">
      <CommunityIntroSection />
      <ModuleCardsGrid />
      <MobileModulesCarousel />
    </div>
  );
}
