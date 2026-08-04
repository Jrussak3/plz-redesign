import pricingCtaSvgPaths from "../svg-kv3yk0jd26";
import imgImage from "../cee9d377f5b58e01bb09e55c8be801287e116dae.png";
import { StoreBadgeRow } from "./AppBadges";

function PricingCtaHeadlineBlock() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.price-list-module--banner-container--94d8b">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[24px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative z-0 shrink-0 text-[#22005d] text-[0px] text-center whitespace-normal md:whitespace-nowrap">
            <p className="leading-[1.5] mb-0 text-[26px] sm:text-[32px] md:text-[48px]">
              {`Skorzystaj z `}
              <span className="relative inline-block">
                <span className="hidden md:block absolute -z-10 h-[200%] left-[-5%] top-[-95%] w-[120%] pointer-events-none" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="124" preserveAspectRatio="none" viewBox="0 0 307 124" width="307">
                    <path d={pricingCtaSvgPaths.p1523eb80} fill="var(--fill-0, #FFE576)" id="Vector" />
                  </svg>
                </span>
                <span className="relative">30-dniowego</span>
              </span>
            </p>
            <p className="bg-clip-text bg-gradient-to-r from-[#bf96c5] leading-[1.5] text-[26px] sm:text-[32px] md:text-[48px] text-[transparent] to-[#4700c3]">bezpłatnego okresu próbnego</p>
          </div>
          <StoreBadgeRow />
        </div>
      </div>
    </div>
  );
}

function PricingTryItImage() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
      </div>
    </div>
  );
}

function QrCodeCard() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[20px] shrink-0" data-name="div.price-list-module--try-it--0adf1">
      <PricingTryItImage />
    </div>
  );
}

function PricingDownloadCard() {
  return (
    <div className="bg-[#f3eaf8] content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[20px] shrink-0">
      <QrCodeCard />
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[1.25] min-w-full not-italic relative shrink-0 text-[#22005d] text-[16px] text-center w-[min-content]">{`Pobierz aplikację `}</p>
    </div>
  );
}

export function PricingCtaSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[25px] items-center justify-center pb-[40px] pt-[60px] md:pb-[80px] md:pt-[120px] px-[24px] relative rounded-[12px] shrink-0 w-full" data-name="div.price-list-module--banner--2390c">
      <PricingCtaHeadlineBlock />
      <PricingDownloadCard />
      <div className="hidden md:flex absolute h-[87.053px] items-center justify-center left-[calc(50%-260px)] top-[calc(50%+20px)] w-[108.979px]">
        <div className="-scale-y-100 flex-none rotate-30">
          <div className="h-[41.801px] relative w-[101.705px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="41.8015" preserveAspectRatio="none" viewBox="0 0 101.705 41.8015" width="101.705">
              <path d={pricingCtaSvgPaths.p3d14900} fill="var(--fill-0, #231F20)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
