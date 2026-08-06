import imgWizja1 from "../images/wizja-1.svg";
import imgWizja2 from "../images/wizja-2.svg";

function VisionRow({ children }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-[24px] md:gap-[48px] w-full">
      {children}
    </div>
  );
}

function VisionRowCell({ minWidthZero = false, className = "", children }) {
  return (
    <div
      className={`flex flex-1 items-center justify-center p-[12px] md:p-[24px]${
        minWidthZero ? " min-w-0" : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}

function VisionImage({ src }) {
  return <img alt="" className="w-full max-w-[400px] md:max-w-none" src={src} />;
}

function VisionStatementRow() {
  return (
    <VisionRow>
      <VisionRowCell>
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] not-italic relative text-[#22005d] text-[28px] md:text-[42px] lg:text-[52px] leading-[1.25] text-center md:text-left">
          Wszystko czego potrzebuje Twoja społeczność masz w jednej aplikacji!
        </p>
      </VisionRowCell>
      <VisionRowCell minWidthZero>
        <VisionImage src={imgWizja1} />
      </VisionRowCell>
    </VisionRow>
  );
}

function VisionHighlight() {
  return (
    <span
      className="inline [box-decoration-break:clone]"
      style={{
        backgroundImage: "linear-gradient(180deg, #fff5ad, #fff5ad 150%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 45%",
        backgroundPosition: "0% 85%",
      }}
    >
      wspólne wartości, takie jak: zaufanie, współpraca, zrównoważony rozwój, przejrzystość i solidarność.
    </span>
  );
}

function VisionCopyRow() {
  return (
    <VisionRow>
      <VisionRowCell minWidthZero>
        <VisionImage src={imgWizja2} />
      </VisionRowCell>
      <VisionRowCell className="flex-col">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] not-italic relative text-[#22005d] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.4] tracking-[0.01em] text-center md:text-left mb-[24px] md:mb-[64px]">
          Człowiek jest istotą społeczną dążącą do współpracy. Stwierdzenie to ma, głębokie konsekwencje ekonomiczne,
          społeczne i kulturowe. W świecie, w którym globalna ekonomia i nowe technologie umożliwiły nieskrępowany
          przepływ kapitału, pracy i wiedzy, zwykli ludzie utracili wpływ na kształt miejsc w których żyją i pracują.
          Dlatego powinniśmy kreować przyszłość takimi narzędziami i mechanizmami, które pozwolą zmienić relacje
          między sferą ekonomiczną i społeczną, dając siłę wspólnotom. Wierzymy, że budowa sprawiedliwego świata
          opiera się na zrównoważonej i zakorzenionej lokalnie gospodarce, która służy dobrostanowi całej społeczności
          i nikogo nie wyklucza. PLZ to narzędzie technologiczne, które pozwala budować relacje współpracy oparte na
          zaufaniu oraz dobrze zarządzać lokalnymi zasobami.
        </p>
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] not-italic relative text-[#22005d] text-[20px] md:text-[28px] lg:text-[32px] leading-[1.6] tracking-[0.01em] uppercase text-center md:text-left">
          {"Dzięki PLZ możesz budować z nami nową lokalność w oparciu o "}
          <VisionHighlight />
        </p>
      </VisionRowCell>
    </VisionRow>
  );
}

export function VisionSection() {
  return (
    <div className="flex w-full flex-col items-center gap-[48px] md:gap-[80px] px-[12px] md:px-[64px] pb-[64px] pt-[24px] md:pt-[64px] mx-auto max-w-[1500px]" data-name="Wizja">
      <VisionStatementRow />
      <VisionCopyRow />
    </div>
  );
}
