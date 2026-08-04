import cloudAsset from "../../../Assets/cloud_asset.svg";

type IntroCardData = {
  title: string;
  description: string;
  gradientClassName: string;
  rotateClassName: string;
};

const INTRO_CARDS: IntroCardData[] = [
  {
    title: "Niezależność od cyfrowych gigantów",
    description: "Wdrażamy polskie rozwiązania chmurowe. Nie bazujemy na szkodliwych algorytmach wielkich firm technologicznych.",
    gradientClassName: "bg-gradient-to-br from-[#e2d5ef] to-[#f3edff]",
    rotateClassName: "md:-rotate-3",
  },
  {
    title: "Polska spółdzielcza aplikacja",
    description: "Poprzez PLZ wspieramy budowanie relacji opartych na zaufaniu rozwój organizacji w oparciu o lokalne zasoby.",
    gradientClassName: "bg-gradient-to-br from-[#e5b9d6] to-[#eed3e6]",
    rotateClassName: "",
  },
  {
    title: "Uniwersalna aplikacja dla twojej organizacji",
    description: "PLZ zbiera wszystkie narzędzia przydatne w prowadzeniu społeczności w jednym miejscu. Cały czas rozwijamy naszą ofertę w odpowiedzi na realne potrzeby użytkowników.",
    gradientClassName: "bg-gradient-to-br from-[#fbe0c4] to-[#fdeee1]",
    rotateClassName: "md:rotate-3",
  },
];

function IntroCard({ title, description, gradientClassName, rotateClassName }: IntroCardData) {
  return (
    <div
      className={`flex aspect-square w-full flex-1 flex-col items-center justify-center gap-[16px] rounded-[24px] p-[28px] text-center shadow-[0px_20px_25px_0px_rgba(131,153,214,0.15),0px_8px_10px_0px_rgba(0,0,0,0.08)] transition-transform hover:rotate-0 md:p-[32px] ${rotateClassName} ${gradientClassName}`}
    >
      <h3 className="font-['Poppins:Bold',sans-serif] text-[18px] md:text-[20px] leading-[1.3] text-[#22005d]">{title}</h3>
      <p className="font-['Poppins:Medium',sans-serif] text-[14px] md:text-[15px] leading-[1.5] text-[#22005d]">{description}</p>
    </div>
  );
}

function IntroCardsRow() {
  return (
    <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-[24px] md:flex-row md:gap-[60px]">
      {INTRO_CARDS.map((card) => (
        <IntroCard key={card.title} {...card} />
      ))}
    </div>
  );
}

export function SwiperIntroSection() {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-center overflow-hidden bg-gradient-to-b from-[#f5efff] via-[#fff0ef] to-[#f5efff] py-[80px] md:py-[140px] px-[24px]">
      <img alt="" className="pointer-events-none absolute left-0 top-0 w-[160px] md:w-[220px]" src={cloudAsset} />
      <img alt="" className="pointer-events-none absolute bottom-0 right-0 w-[160px] rotate-180 md:w-[220px]" src={cloudAsset} />
      <IntroCardsRow />
    </div>
  );
}
