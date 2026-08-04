const FOOTER_LEGAL_LINKS = ["Polityka prywatności", "Przeciwdziałanie napastowaniu i CSAM"];

function FooterLegalBar({ className }: { className: string }) {
  return (
    <div className={className} data-name="div.footer-module--Footer--9c8fa">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="div.footer-module--container--c231e">
        <div className="content-stretch flex flex-wrap items-center justify-center gap-x-2 gap-y-1 relative shrink-0 text-center" data-name="div.footer-module--content--90752">
          <div className="content-stretch flex items-start justify-center pr-[9.98px] relative shrink-0" data-name="span.footer-module--copyright--060f5">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[normal]">© Copyright 2026 Z GO S.A. Wszelkie prawa zastrzeżone.</p>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">|</p>
          </div>
          {FOOTER_LEGAL_LINKS.map((link) => (
            <div key={link} className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="a.footer-module--privacy-policy--a957c:margin">
              <div className="content-stretch flex h-[21px] items-start relative shrink-0" data-name="Component 3">
                <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span">
                  <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[normal]">{link}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// The Figma export duplicated this legal-links bar 3x, absolutely-positioned
// left/right/center, rather than reusing one component — kept as 3 call sites
// (same as the original layout) but backed by a single implementation.
export function FooterLegalBarLeft() {
  return (
    <FooterLegalBar className="hidden md:flex md:absolute md:bottom-0 content-stretch drop-shadow-[0px_0px_2.5px_rgba(51,51,51,0.3)] flex-col items-start md:left-0 px-[24px] md:px-[210px] py-[16px] md:py-[25px] w-full md:w-[1920px]" />
  );
}

export function FooterLegalBarRight() {
  return (
    <FooterLegalBar className="hidden md:flex md:absolute md:bottom-0 content-stretch drop-shadow-[0px_0px_2.5px_rgba(51,51,51,0.3)] flex-col items-start px-[24px] md:px-[210px] py-[16px] md:py-[25px] md:right-0 w-full md:w-[1920px]" />
  );
}

export function FooterLegalBarCenter() {
  return (
    <FooterLegalBar className="md:-translate-x-1/2 relative md:absolute md:bottom-0 content-stretch drop-shadow-[0px_0px_2.5px_rgba(51,51,51,0.3)] flex flex-col items-start md:left-[calc(50%-4px)] px-[24px] md:px-[210px] py-[16px] md:py-[25px] w-full md:w-[1920px]" />
  );
}
