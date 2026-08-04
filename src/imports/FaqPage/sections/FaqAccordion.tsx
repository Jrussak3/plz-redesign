import { useState } from "react";
import { FAQ_CATEGORIES, type FaqItem } from "../data/faqData";
import imgFaqCtaIllustration from "@/Assets/Illustration.png";

function FaqHeader() {
  return (
    <div className="flex w-full flex-col items-center gap-[16px] px-[24px] text-center">
      <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] tracking-[0.08em] uppercase text-[#6750a4]">Centrum pomocy</p>
      <h1 className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.25] not-italic relative text-[28px] sm:text-[36px] md:text-[48px]">
        <span className="text-[#22005d]">{"Najczęściej zadawane pytania "}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#bf96c5] text-[transparent] to-[#4700c3]">(FAQ)</span>
      </h1>
      <p className="max-w-[640px] font-['Poppins:Regular',sans-serif] text-[16px] md:text-[18px] leading-[1.5] text-[#707070]">
        Masz pytania dotyczące działania aplikacji, bezpieczeństwa Twoich danych lub paneli społeczności? Znajdź odpowiedzi poniżej.
      </p>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d="M5 8L10 13L15 8" stroke="#8b8b8b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d="M4 10L8 6L12 10" stroke="#fffbff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function FaqAnswer({ answer }: { answer: string }) {
  const lines = answer.split("\n").filter(Boolean);
  return (
    <div className="flex flex-col gap-[8px] pt-[12px] font-['Poppins:Regular',sans-serif] text-[14px] md:text-[15px] leading-[1.6] text-[#333]">
      {lines.map((line, i) =>
        line.trim().startsWith("-") ? (
          <p key={i} className="pl-[16px]">
            {line.trim()}
          </p>
        ) : (
          <p key={i}>{line}</p>
        ),
      )}
    </div>
  );
}

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`w-full rounded-[12px] px-[20px] py-[16px] shadow-[0px_1px_4px_0px_rgba(51,51,51,0.15)] transition-colors duration-300 ${isOpen ? "bg-white" : "bg-white/40"}`}>
      <button type="button" onClick={onToggle} aria-expanded={isOpen} className="flex w-full cursor-pointer items-center justify-between gap-[16px] text-left">
        <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] md:text-[16px] leading-[1.4] text-[#22005d]">{item.question}</span>
        <span
          className={`flex size-[28px] shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? "bg-[#6750a4]" : "bg-transparent"}`}
        >
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </button>
      {item.answer && (
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <FaqAnswer answer={item.answer} />
          </div>
        </div>
      )}
    </div>
  );
}

function FaqCategoryBlock({ categoryIndex }: { categoryIndex: number }) {
  const category = FAQ_CATEGORIES[categoryIndex];
  const defaultOpenIndex = Math.max(0, category.items.findIndex((item) => item.answer.trim().length > 0));
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set([defaultOpenIndex]));

  const toggle = (i: number) => {
    setOpenIndices((current) => {
      const next = new Set(current);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div className="flex w-full flex-col gap-[16px]">
      <div className="flex flex-col gap-[6px]">
        <p className="font-['Poppins:Bold',sans-serif] text-[14px] tracking-[0.05em] uppercase text-[#22005d]">{category.title}</p>
        <div className="h-[3px] w-[40px] rounded-full bg-[#6750a4]" />
      </div>
      <div className="flex flex-col gap-[12px]">
        {category.items.map((item, i) => (
          <FaqRow key={item.question} item={item} isOpen={openIndices.has(i)} onToggle={() => toggle(i)} />
        ))}
      </div>
    </div>
  );
}

function FaqCtaCard() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[80px] items-start md:items-end justify-center overflow-clip px-[24px] md:px-[48px] py-[32px] md:py-[64px] relative rounded-[24px] shrink-0 w-full bg-gradient-to-br from-[#e2d5ef] to-[#f3edff]">
      <div className="flex flex-1 md:flex-[4_0_0] lg:flex-[1_0_0] flex-col items-start gap-[20px] min-w-px">
        <h2 className="font-['Poppins:Bold',sans-serif] text-[24px] md:text-[32px] leading-[1.25] text-[#22005d]">Nadal nie znalazłeś odpowiedzi?</h2>
        <div className="relative flex items-center justify-center rounded-[16px] bg-white px-[32px] py-[16px] font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#22005d] shadow-[0px_3px_10px_0px_rgba(51,51,51,0.15)]">
          Skontaktuj się
        </div>
      </div>
      <div className="hidden md:block md:flex-[1_0_0] h-[160px] min-w-px relative" />
      <div className="hidden md:block md:absolute md:aspect-[835/429] md:bottom-0 md:right-0 md:w-[45%]">
        <img alt="" className="absolute inset-0 max-w-none object-contain object-bottom pointer-events-none size-full" src={imgFaqCtaIllustration} />
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-[48px] px-[16px] md:px-[24px] py-[24px] md:py-[64px]" data-name="FAQ">
      <FaqHeader />
      <div className="flex w-full flex-col gap-[40px]">
        {FAQ_CATEGORIES.map((_, i) => (
          <FaqCategoryBlock key={i} categoryIndex={i} />
        ))}
      </div>
      <FaqCtaCard />
    </div>
  );
}
