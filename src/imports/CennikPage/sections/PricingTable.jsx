import { useEffect, useRef, useState } from "react";
import { PRICING_PLANS } from "../data/pricingPlans";

function CennikHeading() {
  return (
    <h1 className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.25] not-italic relative text-[28px] sm:text-[36px] md:text-[48px] text-center">
      <span className="text-[#22005d]">{"Cennik "}</span>
      <span className="bg-clip-text bg-gradient-to-r from-[#bf96c5] text-[transparent] to-[#4700c3]">PLZ</span>
    </h1>
  );
}

function CheckIcon() {
  return (
    <svg className="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#22005d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d="M3 3L13 13M13 3L3 13" stroke="#4b3d63" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function FeatureStatusIndicator({ feature }) {
  if (feature.status === "pill") {
    return (
      <span className="shrink-0 rounded-full bg-white px-[14px] py-[8px] text-[11px] font-['Poppins:SemiBold',sans-serif] leading-[1.3] text-[#22005d] text-center shadow-[0px_1px_3px_0px_rgba(51,51,51,0.3)] whitespace-nowrap">
        {feature.pillText}
      </span>
    );
  }
  return feature.status === "included" ? <CheckIcon /> : <CrossIcon />;
}

function FeatureRow({ feature }) {
  return (
    <div className="flex items-center justify-between gap-[12px] border-t border-[rgba(34,0,93,0.12)] py-[14px] first:border-t-0 first:pt-0">
      <span className="font-['Poppins:Regular',sans-serif] text-[13px] leading-[1.4] text-[#22005d]">{feature.label}</span>
      <FeatureStatusIndicator feature={feature} />
    </div>
  );
}

function PlanPrice({ plan }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="font-['Poppins:Bold',sans-serif] text-[#22005d] text-[34px] leading-[1.1]">
        {plan.priceMain}
        {plan.priceSuffix && <span className="font-['Poppins:SemiBold',sans-serif] text-[16px]"> {plan.priceSuffix}</span>}
      </p>
      <p className="font-['Poppins:Regular',sans-serif] text-[#22005d] text-[14px]">{plan.priceNote}</p>
    </div>
  );
}

const CARD_BACKGROUND = {
  podstawowy: "bg-gradient-to-br from-[#f5dd8f] via-[#dcbcbf] to-[#c6a4c9]",
  pro: "bg-gradient-to-b from-[#ece4f7] to-[#ddd1ef]",
  indywidualny: "bg-gradient-to-b from-[#e2d5ef] to-[#f2ecfa]",
};

function TryPlanButton() {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center rounded-[16px] bg-[#22005d] px-[24px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[15px] text-white transition-colors hover:bg-[#33007c]"
    >
      Wypróbuj
    </button>
  );
}

function PlanCardBody({ plan }) {
  return (
    <div className={`flex flex-1 flex-col gap-[24px] p-[28px] ${plan.featured ? "rounded-b-[21px]" : "rounded-[24px]"} ${CARD_BACKGROUND[plan.id]}`}>
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Poppins:Bold',sans-serif] text-[#22005d] text-[20px] leading-[1.3]">{plan.name}</p>
        <p className="font-['Poppins:Regular',sans-serif] text-[#22005d] text-[15px] leading-[1.4]">{plan.subtitle}</p>
      </div>
      <PlanPrice plan={plan} />
      <div className="flex flex-1 flex-col">
        {plan.features.map((feature) => (
          <FeatureRow key={feature.label} feature={feature} />
        ))}
      </div>
      <TryPlanButton />
    </div>
  );
}

function PlanCard({ plan, className = "" }) {
  if (!plan.featured) {
    return <div className={`flex flex-col shadow-[0px_10px_30px_0px_rgba(103,80,164,0.15)] rounded-[24px] ${className}`}>{<PlanCardBody plan={plan} />}</div>;
  }

  return (
    <div className={`flex flex-col md:-translate-y-[16px] rounded-[24px] border-[3px] border-[#db0b34] shadow-[0px_20px_40px_0px_rgba(103,80,164,0.25)] overflow-hidden ${className}`}>
      <div className="shrink-0 bg-[#db0b34] py-[14px] px-[16px] text-center">
        <p className="font-['Poppins:SemiBold',sans-serif] text-white text-[16px]">{plan.badge}</p>
      </div>
      <PlanCardBody plan={plan} />
    </div>
  );
}

function DesktopPricingRow() {
  return (
    <div className="hidden w-full max-w-[1300px] items-stretch justify-center gap-[40px] md:flex">
      {PRICING_PLANS.map((plan) => (
        <PlanCard key={plan.id} plan={plan} className="w-full max-w-[380px] md:flex-1" />
      ))}
    </div>
  );
}

function MobileCarouselCard({ plan, isActive, isPeek, width, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ width: `${width}px` }}
      className={`shrink-0 transition-all duration-500 ease-out ${
        isActive ? "opacity-100 scale-100" : isPeek ? "cursor-pointer opacity-50 scale-90 hover:opacity-75" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <PlanCard plan={plan} className="w-full" />
    </div>
  );
}

function ChevronIcon({ flipped }) {
  return (
    <svg className={flipped ? "rotate-180" : undefined} fill="none" height="24" viewBox="0 0 24 24" width="24">
      <path d="M15 18L9 12L15 6" stroke="#fffbff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function CarouselNavButton({ onClick, ariaLabel, flipped }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex size-[36px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] bg-[#6750a4] transition-colors hover:bg-[#573f8a]"
    >
      <ChevronIcon flipped={flipped} />
    </button>
  );
}

function MobilePricingCarousel() {
  const total = PRICING_PLANS.length;
  // Extended track = [clone of last, ...real plans, clone of first], so sliding past
  // either end still glides in the same direction before we snap back invisibly.
  const extended = [PRICING_PLANS[total - 1], ...PRICING_PLANS, PRICING_PLANS[0]];
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

  const slideWidth = Math.min(320, Math.round(containerWidth * 0.72));
  const gap = 12;
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
    <div className="flex w-full flex-col items-center md:hidden" data-name="Pricing carousel">
      <div ref={viewportRef} className="relative w-full overflow-hidden py-[8px]">
        <div
          className="flex items-stretch"
          style={{ gap: `${gap}px`, transform: `translateX(${translateX}px)`, transition: instant ? "none" : "transform 500ms ease-out" }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((plan, i) => {
            const distance = i - trackIndex;
            return (
              <MobileCarouselCard
                key={i}
                plan={plan}
                isActive={distance === 0}
                isPeek={Math.abs(distance) === 1}
                width={slideWidth}
                onClick={distance === 0 ? undefined : () => goTo(trackIndex + Math.sign(distance))}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center gap-[16px] pt-[24px]">
        <CarouselNavButton onClick={() => goTo(trackIndex - 1)} ariaLabel="Poprzedni pakiet" />
        <div className="flex items-center justify-center gap-[10px]">
          {PRICING_PLANS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i + 1)}
              aria-label={`Przejdź do pakietu ${i + 1}`}
              className="flex h-[24px] w-[24px] shrink-0 cursor-pointer items-center justify-center group"
            >
              <span className={`rounded-full bg-[#6750a4] transition-all duration-300 group-hover:opacity-100 ${i === activeIndex ? "size-[14px]" : "size-[10px] opacity-50"}`} />
            </button>
          ))}
        </div>
        <CarouselNavButton onClick={() => goTo(trackIndex + 1)} ariaLabel="Następny pakiet" flipped />
      </div>
    </div>
  );
}

export function PricingTableSection() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center gap-[48px] py-[60px] md:py-[100px] px-[24px] relative shrink-0 w-full" data-name="Cennik PLZ">
      <CennikHeading />
      <DesktopPricingRow />
      <MobilePricingCarousel />
    </div>
  );
}
