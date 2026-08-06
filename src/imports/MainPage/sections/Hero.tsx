import heroSvgPaths from "../svg-kv3yk0jd26";
// Placeholder — swap these two for the dedicated mobile/desktop hero illustrations.
import imgHeroIllustrationMobile from "../4df8dc349d361968c54c12503812e18c684899e0.png";
import imgHeroIllustrationDesktop from "../4df8dc349d361968c54c12503812e18c684899e0.png";

function HeroHeadline() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Header">
      <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Top">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.25] not-italic relative min-w-0 text-[#22005d] text-[32px] sm:text-[40px] md:text-[56px] text-center whitespace-normal md:whitespace-nowrap md:shrink-0">Polska spółdzielcza aplikacja</p>
      </div>
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 h-auto md:h-[70px]">
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.25] not-italic relative min-w-0 text-[#22005d] text-[32px] sm:text-[40px] md:text-[56px] text-center whitespace-normal md:whitespace-nowrap md:shrink-0">dla Twojej organizacji</p>
        </div>
      </div>
    </div>
  );
}

function HeroCopyBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[20px] items-center relative shrink-0 px-[24px] md:px-0">
      <HeroHeadline />
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#22005d] text-[16px] sm:text-[18px] md:text-[24px] text-center w-full md:w-[min-content] md:min-w-full max-w-[600px]">Wszystkie narzędzia wspierające codzienną pracę w jednym miejscu. Pomagamy w budowaniu społeczności i usprawnieniu działania Twojej organizacji.</p>
    </div>
  );
}

function HeroButton({ label, href, backgroundClassName, textClassName }: { label: string; href?: string; backgroundClassName: string; textClassName: string }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href } : {})}
      className="content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[16px] shrink-0 w-full sm:w-auto"
    >
      <div aria-hidden className={`absolute inset-0 pointer-events-none rounded-[16px] ${backgroundClassName}`} />
      <p className={`[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] whitespace-nowrap ${textClassName}`}>{label}</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.25)]" />
    </Tag>
  );
}

function HeroButtonRow() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] md:gap-[40px] items-center sm:items-start pt-[16px] md:pt-[28px] relative shrink-0 w-full sm:w-auto px-[24px] sm:px-0" data-name="Buttons">
      <HeroButton label="Pobierz za darmo" href="#community-pricing" backgroundClassName="bg-[#ce002c]" textClassName="text-[#fffbff]" />
      <HeroButton label="Umów się na spotkanie" backgroundClassName="bg-white" textClassName="text-[#22005d]" />
    </div>
  );
}

function HeroContent() {
  return (
    <div
      className="relative min-[1800px]:-translate-x-1/2 content-stretch flex flex-col items-center min-[1800px]:absolute min-[1800px]:left-[calc(50%+0.5px)] min-[1800px]:top-[228px] z-10 pt-[200px] min-[1800px]:pt-0"
      data-name="Header"
    >
      <HeroCopyBlock />
      <HeroButtonRow />
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-[#e9ddff] min-h-[800px] min-[1800px]:min-h-[1256px] overflow-clip relative shrink-0 to-white w-full">
      <div className="hidden md:block absolute h-[172px] left-[1552px] top-[187px] w-[405px]" data-name="Path_70446">
        <svg className="absolute block inset-0 size-full" fill="none" height="172" preserveAspectRatio="none" viewBox="0 0 405 172" width="405">
          <path d={heroSvgPaths.p135be480} fill="var(--fill-0, #E9B2D9)" id="Path_70446" />
        </svg>
      </div>
      <HeroContent />
      <div className="hidden md:block absolute h-[152px] left-[51px] top-[314px] w-[358px]" data-name="Path_70446">
        <svg className="absolute block inset-0 size-full" fill="none" height="152" preserveAspectRatio="none" viewBox="0 0 358 152" width="358">
          <path d={heroSvgPaths.p3baca00} fill="var(--fill-0, #E9B2D9)" id="Path_70446" />
        </svg>
      </div>
      <div className="hidden md:block absolute h-[86px] left-[249px] top-[144px] w-[202px]" data-name="Path_70446">
        <svg className="absolute block inset-0 size-full" fill="none" height="86" preserveAspectRatio="none" viewBox="0 0 202 86" width="202">
          <path d={heroSvgPaths.p252f2380} fill="var(--fill-0, #E9B2D9)" id="Path_70446" />
        </svg>
      </div>
      {/* In normal flow (not absolute/cropped) so the full illustration always renders, at any width. */}
      <div className="relative w-full mt-[-32px] md:mt-[-228px] z-0" data-name="image 2">
        <img alt="" className="block md:hidden w-full h-auto object-contain pointer-events-none" src={imgHeroIllustrationMobile} />
        <img alt="" className="hidden md:block w-full h-auto object-contain pointer-events-none" src={imgHeroIllustrationDesktop} />
      </div>
    </div>
  );
}
