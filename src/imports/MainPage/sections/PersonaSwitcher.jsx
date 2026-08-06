import { useState } from "react";
import personaSwitcherSvgPaths from "../svg-kv3yk0jd26";
import { PERSONAS, PERSONA_ORDER } from "../data/personas";

function PersonaIntroHeadline() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] max-w-full flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[0] min-w-0 not-italic relative z-0 text-[#22005d] text-[28px] sm:text-[36px] md:text-[56px] text-center">
        <span className="leading-[1.25]">{`Jak nasi `}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#bf96c5] leading-[1.25] text-[transparent] to-[#4700c3]">klienci</span>
        <span className="leading-[1.25]">{` korzystają z `}</span>
        <span className="relative inline-block leading-[1.25]">
          <span className="hidden md:block absolute -z-10 h-[210%] left-[-105%] top-[-55%] w-[290%] pointer-events-none" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="144" preserveAspectRatio="none" viewBox="0 0 321 144" width="321">
              <path d={personaSwitcherSvgPaths.p33e08100} fill="var(--fill-0, #FFD1D1)" id="Vector" />
            </svg>
          </span>
          <span className="relative">{`PLZ?`}</span>
        </span>
      </p>
    </div>
  );
}

function PersonaAvatar({ persona }) {
  return (
    <div className={`bg-[rgba(34,0,93,0.1)] overflow-clip relative rounded-[999px] shrink-0 ${persona.wrapperClass}`} data-name="Header">
      <div className={`absolute contents ${persona.outerClipClass}`} data-name="Clip path group">
        <div className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat ${persona.innerClipClass}`} style={{ maskImage: `url("${persona.mask}")` }}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={persona.avatar} />
        </div>
      </div>
    </div>
  );
}

function PersonaButton({ persona, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={
        isActive
          ? "bg-[#22005d] content-stretch cursor-pointer flex items-center justify-center min-h-[44px] md:min-h-[72px] py-[8px] md:py-[16px] relative rounded-[100px] shadow-[0px_20px_25px_0px_rgba(131,153,214,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-auto md:w-full transition-colors hover:bg-[#33007c]"
          : "bg-white content-stretch cursor-pointer flex items-center justify-center min-h-[44px] md:min-h-[64.79999542236328px] py-[8px] md:py-[14.4px] relative rounded-[90px] shadow-[0px_18px_22.5px_0px_rgba(131,153,214,0.1),0px_7.2px_9px_0px_rgba(0,0,0,0.1)] shrink-0 w-auto md:w-[90%] transition-shadow hover:shadow-[0px_20px_25px_0px_rgba(131,153,214,0.15),0px_8px_10px_0px_rgba(0,0,0,0.15)]"
      }
      data-name="LABEL"
    >
      <p
        className={`[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-center whitespace-nowrap px-[12px] md:px-[16px] ${
          isActive ? "text-[#fffbff] text-[18px] md:text-[20px]" : "text-[#22005d] text-[18px] md:text-[18px]"
        }`}
      >
        {persona.name}, {persona.role}
      </p>
    </button>
  );
}

function PersonaList({ active, onSelect }) {
  return (
    <div
      className="flex flex-row md:flex-col gap-[8px] md:gap-[40px] items-center max-w-[1550px] relative shrink-0 w-full md:w-[clamp(220px,30vw,400px)] overflow-x-auto md:overflow-visible pb-[4px] md:pb-0"
      data-name="Wrapper"
    >
      {PERSONA_ORDER.map((key) => (
        <PersonaButton key={key} persona={PERSONAS[key]} isActive={key === active} onSelect={() => onSelect(key)} />
      ))}
    </div>
  );
}

export function PersonaSwitcherSection() {
  const [active, setActive] = useState("adam");
  const persona = PERSONAS[active];

  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f3edff] gap-[40px] md:gap-[80px] items-center justify-center py-[60px] md:py-[120px] px-[24px] relative shrink-0 to-white w-full" data-name="Nasi klienci">
      <PersonaIntroHeadline />
      <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[80px] items-center justify-center relative shrink-0 w-full max-w-[1200px]" data-name="Cards">
        <PersonaList active={active} onSelect={setActive} />
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-start min-h-[520px] p-[24px] md:p-[40px] relative rounded-[24px] shadow-[0px_20px_25px_0px_rgba(131,153,214,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-full md:w-auto md:flex-1 md:min-w-0" data-name="Personas">
          <div className="content-stretch flex gap-[20px] md:gap-[40px] items-center relative shrink-0">
            <PersonaAvatar persona={persona} />
            <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 text-[#22005d] whitespace-nowrap">
              <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-[24px] md:text-[32px]">
                <p className="leading-[normal]">{persona.name}</p>
              </div>
              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[16px] md:text-[18px]">
                <p className="leading-[normal]">{persona.role}</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#22005d] text-[16px] w-full">
            {persona.paragraphs.map((paragraph, index) => (
              <div key={index} className="flex flex-col justify-center relative shrink-0 w-full">
                <p className="leading-[normal]">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
