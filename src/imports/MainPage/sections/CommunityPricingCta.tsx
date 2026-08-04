import { Link } from "react-router";
import imgCommunityPricingIllustration from "@/Assets/Illustration.png";

function CommunityPricingCopy() {
  return (
    <div className="content-stretch flex flex-1 md:flex-[4_0_0] lg:flex-[1_0_0] flex-col gap-[24px] md:gap-[40px] items-start justify-center min-w-px relative w-full md:w-auto" data-name="Text">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#22005d] text-[0px] w-full">
        <span className="leading-[1.25] text-[26px] sm:text-[32px] md:text-[48px]">Twoja</span>
        <span className="leading-[1.25] text-[26px] sm:text-[32px] md:text-[48px]">{` społeczność `}</span>
        <span className="leading-[1.25] text-[26px] sm:text-[32px] md:text-[48px]">w</span>
        <span className="leading-[1.25] text-[26px] sm:text-[32px] md:text-[48px]">{` PLZ już od `}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#bf96c5] leading-[1.25] text-[26px] sm:text-[32px] md:text-[48px] text-[transparent] to-[#4700c3]">90 zł miesięcznie</span>
      </p>
      <Link
        to="/cennik"
        className="content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[16px] shrink-0 transition-opacity hover:opacity-90"
        data-name="Button"
      >
        <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#22005d] text-[18px] whitespace-nowrap">Zobacz cennik</p>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.25)]" />
      </Link>
    </div>
  );
}

function CommunityPricingCardSpacer() {
  return <div className="hidden md:block md:flex-[1_0_0] h-[223px] min-w-px relative" />;
}

function CommunityPricingCard() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[120px] items-start md:items-end justify-center overflow-clip px-[24px] md:px-[80px] py-[40px] md:py-[120px] relative rounded-[24px] shrink-0 w-full md:max-w-[1550px] bg-gradient-to-br from-[#e2d5ef] to-[#f3edff]"
      data-name="Wrapper"
    >
      <CommunityPricingCopy />
      <CommunityPricingCardSpacer />
      <div className="hidden md:block md:absolute md:aspect-[835/429] md:bottom-0 md:right-0 md:w-[53.87%]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-contain object-bottom pointer-events-none size-full" src={imgCommunityPricingIllustration} />
      </div>
    </div>
  );
}

export function CommunityPricingCtaSection() {
  return (
    <div
      id="community-pricing"
      className="bg-[#f5edfd] content-stretch flex h-auto md:h-[540px] items-start justify-center relative shrink-0 w-full px-[24px] py-[40px] md:py-0 scroll-mt-[100px] md:scroll-mt-[140px]"
      data-name="Container"
    >
      <CommunityPricingCard />
    </div>
  );
}
