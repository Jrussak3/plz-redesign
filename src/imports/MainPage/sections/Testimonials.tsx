import { useEffect, useRef, useState } from "react";
import testimonialsSvgPaths from "../svg-kv3yk0jd26";
import { type Testimonial, TESTIMONIALS } from "../data/testimonials";

function TestimonialsHeadline() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] min-w-full not-italic relative z-0 shrink-0 text-[#22005d] text-[0px] text-center max-w-[90vw] md:w-[min-content] whitespace-pre-wrap">
        <span className="leading-[1.25] text-[28px] sm:text-[36px] md:text-[56px]">
          {`Zobacz, jak inni `}
          <br aria-hidden />
        </span>
        <span className="relative inline-block leading-[1.25] text-[28px] sm:text-[36px] md:text-[56px]">
          <span className="hidden md:block absolute -z-10 h-[190%] left-[-15%] top-[-45%] w-[130%] pointer-events-none" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="137" preserveAspectRatio="none" viewBox="0 0 259 137" width="259">
              <path d={testimonialsSvgPaths.p18e93100} fill="var(--fill-0, #FFD1D1)" id="Vector" />
            </svg>
          </span>
          <span className="relative">zyskali</span>
        </span>
        <span className="bg-clip-text bg-gradient-to-r from-[#bf96c5] leading-[1.25] text-[28px] sm:text-[36px] md:text-[56px] text-[transparent] to-[#4700c3]">{` `}</span>
        <span className="leading-[1.25] text-[28px] sm:text-[36px] md:text-[56px]">dzięki</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#bf96c5] leading-[1.25] text-[28px] sm:text-[36px] md:text-[56px] text-[transparent] to-[#4700c3]">{` PLZ`}</span>
      </p>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  isActive,
  isPeek,
  width,
  onClick,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  isPeek: boolean;
  width: number;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{ width: `${width}px` }}
      className={`bg-white content-stretch flex flex-col min-h-[420px] md:h-[582px] items-start justify-between p-[24px] md:p-[40px] relative rounded-[24px] shadow-[0px_20px_25px_0px_rgba(131,153,214,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 transition-all duration-500 ease-out ${
        isActive
          ? "opacity-100 scale-100"
          : isPeek
            ? "opacity-50 scale-90 cursor-pointer hover:opacity-75 hover:scale-[0.92]"
            : "opacity-0 scale-75 pointer-events-none"
      }`}
      data-name="div.carousel-wrapper"
    >
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[16px] md:gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#333] text-[15px] md:text-[18px] w-full" data-name="p">
        {testimonial.paragraphs.map((paragraph, i) => (
          <div key={i} className="flex flex-col justify-center relative shrink-0 w-full">
            <p className="leading-[normal] whitespace-pre-wrap">{paragraph}</p>
          </div>
        ))}
      </div>
      <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
        <div className={`relative shrink-0 ${testimonial.logoClassName}`} data-name="logo">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={testimonial.logoSrc} />
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
          <p className="leading-[normal] whitespace-pre">{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ flipped }: { flipped?: boolean }) {
  return (
    <div className={flipped ? "-scale-y-100 flex-none rotate-180" : undefined}>
      <div className="overflow-clip relative size-[24px]" data-name="mingcute:left-line">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <g id="Group">
            <g id="Vector" />
            <path clipRule="evenodd" d={testimonialsSvgPaths.p47c1732} fill="var(--fill-0, #FFFBFF)" fillRule="evenodd" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const total = TESTIMONIALS.length;
  // Extended track = [clone of last, ...real slides, clone of first], so sliding past
  // either end still glides in the same direction before we snap back invisibly.
  const extended = [TESTIMONIALS[total - 1], ...TESTIMONIALS, TESTIMONIALS[0]];
  const [trackIndex, setTrackIndex] = useState(1);
  const [instant, setInstant] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1920);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeIndex = (trackIndex - 1 + total) % total;

  // Measured, not hardcoded, so the same slide/peek/translate math works at any
  // viewport width instead of assuming a fixed 1920px desktop canvas.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const isMobile = containerWidth < 768;
  const slideWidth = Math.min(800, Math.round(containerWidth * (isMobile ? 0.86 : 0.92)));
  const gap = isMobile ? 20 : 80;
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
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Testimonials">
      <div ref={viewportRef} className="overflow-hidden relative shrink-0 w-full py-[20px]" data-name="div.how-others-use-app-cards-module--sliderWrapper--e7925">
        <div
          className="flex items-center"
          style={{
            gap: `${gap}px`,
            transform: `translateX(${translateX}px)`,
            transition: instant ? "none" : "transform 500ms ease-out",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((testimonial, i) => {
            const distance = i - trackIndex;
            return (
              <TestimonialCard
                key={i}
                testimonial={testimonial}
                isActive={distance === 0}
                isPeek={Math.abs(distance) === 1}
                width={slideWidth}
                onClick={distance === 0 ? undefined : () => goTo(trackIndex + Math.sign(distance))}
              />
            );
          })}
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] md:gap-[40px] items-center justify-center pt-[40px] md:pt-[80px] relative shrink-0 w-full px-[24px]">
        <button
          type="button"
          onClick={() => goTo(trackIndex - 1)}
          aria-label="Poprzednia opinia"
          className="bg-[#6750a4] content-stretch cursor-pointer flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px] transition-colors hover:bg-[#573f8a]"
        >
          <ChevronIcon />
        </button>
        <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-name="div.swiper-pagination">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i + 1)}
              aria-label={`Przejdź do opinii ${i + 1}`}
              className="content-stretch cursor-pointer flex flex-col h-[30px] items-center justify-center px-[4px] relative shrink-0 w-[38px]"
            >
              <div className={`bg-[#6750a4] relative rounded-[15px] shrink-0 transition-all duration-300 ${i === activeIndex ? "size-[30px]" : "size-[20px]"}`} data-name="span.swiper-pagination-bullet">
                <div aria-hidden className="absolute border-2 border-[#fffbff] border-solid inset-0 pointer-events-none rounded-[15px]" />
              </div>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(trackIndex + 1)}
          aria-label="Następna opinia"
          className="bg-[#6750a4] content-stretch cursor-pointer flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px] transition-colors hover:bg-[#573f8a]"
        >
          <ChevronIcon flipped />
        </button>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-white gap-[40px] md:gap-[80px] items-center py-[60px] md:py-[120px] px-[24px] relative shrink-0 to-[#f3edff] via-1/2 via-[#fce7e5] w-full">
      <TestimonialsHeadline />
      <TestimonialsCarousel />
    </div>
  );
}
