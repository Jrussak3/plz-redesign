import imgQrCode from "../../../Assets/qr_cth.jpg";
import { StoreBadgeRow } from "./AppBadges";
import { GRADIENT_LILAC, GRADIENT_PEACH } from "./shared";

function PricingCtaHeadlineBlock() {
  return (
    <div className="flex flex-col items-center gap-[16px] px-[24px] text-center">
      <h2 className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.25] not-italic text-[#22005d] text-[26px] sm:text-[32px] md:text-[48px]">
        Dołącz do społeczności lub stwórz własną
      </h2>
      <p className="max-w-[640px] font-['Poppins:Medium',sans-serif] text-[15px] md:text-[18px] leading-[1.5] text-[rgba(34,0,93,0.6)]">
        PLZ jest w 100% darmowy dla członków społeczności i oferuje pełen pakiet możliwości dla liderów.
      </p>
    </div>
  );
}

function ChoiceCard({ title, description, buttonLabel, gradientClassName }) {
  return (
    <div className={`flex flex-1 flex-col gap-[24px] rounded-[24px] p-[28px] md:p-[36px] ${gradientClassName}`}>
      <div className="flex flex-col gap-[12px]">
        <h3 className="font-['Poppins:Bold',sans-serif] text-[20px] md:text-[24px] leading-[1.3] text-[#22005d]">{title}</h3>
        <p className="font-['Poppins:Regular',sans-serif] text-[15px] md:text-[16px] leading-[1.5] text-[#22005d]">{description}</p>
      </div>
      <button
        type="button"
        className="flex w-fit items-center justify-center rounded-[16px] bg-white px-[24px] py-[16px] font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#22005d] shadow-[0px_3px_10px_0px_rgba(51,51,51,0.15)] transition-opacity hover:opacity-90"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

function ChoiceCardsRow() {
  return (
    <div className="flex w-full max-w-[1200px] flex-col gap-[24px] md:flex-row">
      <ChoiceCard
        title="Chcę dołączyć do społeczności"
        description={
          <>
            Bądź w kontakcie z ludźmi i korzystaj ze wszystkich funkcji społecznościowych <span className="font-['Poppins:SemiBold',sans-serif]">całkowicie za darmo</span>.
          </>
        }
        buttonLabel="Pobierz aplikację"
        gradientClassName={GRADIENT_LILAC}
      />
      <ChoiceCard
        title="Chcę założyć własną społeczność"
        description={
          <>
            <span className="font-['Poppins:SemiBold',sans-serif]">Rozwijaj potencjał swojej społeczności</span> i dopasuj aplikację do swoich potrzeb we współpracy z PLZ.
          </>
        }
        buttonLabel="Rozpocznij darmowy miesiąc próbny"
        gradientClassName={GRADIENT_PEACH}
      />
    </div>
  );
}

function QrCodeCard() {
  return (
    <div className="flex size-[120px] shrink-0 items-center justify-center overflow-clip rounded-[20px] bg-white p-[10px]">
      <img alt="" className="size-full object-contain" src={imgQrCode} />
    </div>
  );
}

function DownloadBanner() {
  return (
    <div className="flex w-full max-w-[1200px] flex-col items-center gap-[24px] rounded-[24px] bg-[#22005d] p-[28px] sm:flex-row sm:items-center md:p-[40px]">
      <QrCodeCard />
      <div className="flex flex-col items-center gap-[16px] sm:items-start">
        <h3 className="font-['Poppins:Bold',sans-serif] text-[22px] md:text-[32px] leading-[1.25] text-white">Pobierz aplikację za darmo</h3>
        <StoreBadgeRow />
      </div>
    </div>
  );
}

export function PricingCtaSection() {
  return (
    <div id="community-pricing" className="bg-white content-stretch flex flex-col gap-[40px] items-center justify-center pb-[40px] pt-[60px] md:pb-[80px] md:pt-[120px] px-[24px] relative rounded-[12px] shrink-0 w-full scroll-mt-[100px] md:scroll-mt-[140px]" data-name="div.price-list-module--banner--2390c">
      <PricingCtaHeadlineBlock />
      <ChoiceCardsRow />
      <DownloadBanner />
    </div>
  );
}
