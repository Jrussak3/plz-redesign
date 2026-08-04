import { Link } from "react-router";
import footerSvgPaths from "../svg-kv3yk0jd26";
import footerBackgroundImage from "../6e9ed4ffbdfe1b09de596482abafada69522af29.png";

const SITEMAP_LINKS: { label: string; to?: string }[] = [
  { label: "Cennik", to: "/cennik" },
  { label: "Wizja", to: "/vision" },
  { label: "O nas", to: "/about" },
  { label: "Zaufali nam", to: "/trusted" },
  { label: "FAQ", to: "/faq" },
];

function FooterSitemapBlock() {
  return (
    <div className="[word-break:break-word] relative md:absolute z-10 content-stretch flex flex-col gap-[16px] md:gap-[24px] items-center md:left-1/2 md:-translate-x-1/2 not-italic text-center text-white md:top-[235px] w-full md:w-[min(946px,90vw)] px-[24px] md:px-0 pt-[80px] md:pt-0">
      <div className="content-stretch flex flex-wrap font-['Poppins:Medium',sans-serif] gap-[16px] md:gap-[40px] items-center justify-center leading-[1.25] pb-[24px] md:pb-[40px] relative shrink-0 text-[15px] md:text-[24px] w-full">
        {SITEMAP_LINKS.map((link) => (
          <p key={link.label} className="min-w-[90px] md:min-w-[120px] relative shrink-0">
            {link.to ? <Link to={link.to}>{link.label}</Link> : link.label}
          </p>
        ))}
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[0] relative shrink-0 text-[15px] md:text-[18px] w-full md:min-w-full md:w-[min-content]">
        <span className="leading-[1.25]">{`Administratorem strony jest `}</span>
        <a className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.25] underline" href="https://plz.coop/" target="_blank">
          <span className="[text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://plz.coop/" target="_blank">
            PLZ Spółdzielnia
          </span>
        </a>
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[0] relative shrink-0 text-[15px] md:text-[18px] whitespace-normal md:whitespace-nowrap">
        <span className="leading-[1.25]">{`Zobacz też: `}</span>
        <a className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.25] underline" href="https://www.hub.coop/" target="_blank">
          <span className="[text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://www.hub.coop/" target="_blank">
            Centrum Technologii Spółdzielczych
          </span>
        </a>
      </p>
    </div>
  );
}

export function DarkFooterSection() {
  return (
    <div className="bg-gradient-to-b from-[#2b1171] min-h-[700px] md:h-[1156px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 to-[#31157d] w-full overflow-hidden" data-name="Group_2583">
      <FooterSitemapBlock />
      <div className="absolute bottom-0 md:bottom-auto md:-translate-x-1/2 md:left-1/2 md:top-[202px] h-[420px] md:h-[954px] w-full md:w-[1920px]" data-name="image 1">
        <div className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute bottom-0 h-full left-0 max-w-none w-full object-contain object-bottom" src={footerBackgroundImage} />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-[502px] h-[76px] left-[778px] w-[180px]" data-name="Path_70446">
        <svg className="absolute block inset-0 size-full" fill="none" height="76" preserveAspectRatio="none" viewBox="0 0 180 76" width="180">
          <path d={footerSvgPaths.p2f439d80} fill="var(--fill-0, #E9B2D9)" id="Path_70446" />
        </svg>
      </div>
      <div className="hidden md:block absolute h-[100px] left-[259px] top-[202px] w-[30px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="100" preserveAspectRatio="none" viewBox="0 0 30 100" width="30">
          <path d={footerSvgPaths.p110f42f0} fill="var(--fill-0, #D9D9D9)" id="Vector 3" />
        </svg>
      </div>
      <div className="hidden md:block absolute h-[100px] left-[1259px] top-[478px] w-[30px]">
        <div className="absolute inset-[-0.5%_-2.8%_-0.5%_-2.81%]">
          <svg className="block size-full" fill="none" height="101.002" preserveAspectRatio="none" viewBox="0 0 31.6809 101.002" width="31.6809">
            <g id="Vector 4">
              <path d={footerSvgPaths.p173abe80} fill="var(--fill-0, #D9D9D9)" />
              <path d={footerSvgPaths.p5dee80} stroke="var(--stroke-0, black)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="hidden md:block absolute h-[100px] left-[1710px] top-[135px] w-[30px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="100" preserveAspectRatio="none" viewBox="0 0 30 100" width="30">
          <path d={footerSvgPaths.p110f42f0} fill="var(--fill-0, #D9D9D9)" id="Vector 3" />
        </svg>
      </div>
      <div className="absolute flex h-[40px] md:h-[86px] items-center justify-center left-0 top-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <div className="h-[40px] md:h-[86px] relative w-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="86" preserveAspectRatio="none" viewBox="0 0 1920 86" width="1920">
              <path d={footerSvgPaths.p3aec0600} fill="var(--fill-0, #F3EDFF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
