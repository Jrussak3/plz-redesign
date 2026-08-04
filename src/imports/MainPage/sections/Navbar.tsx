import { useState } from "react";
import { Link } from "react-router";
import navbarSvgPaths from "../svg-kv3yk0jd26";

const NAV_LINKS: { label: string; to?: string }[] = [
  { label: "Wizja", to: "/vision" },
  { label: "O nas", to: "/about" },
  { label: "Zaufali nam", to: "/trusted" },
  { label: "Cennik", to: "/cennik" },
  { label: "FAQ", to: "/faq" },
];

function NavLogo() {
  return (
    <Link to="/" className="aspect-[140/140] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 transition-opacity hover:opacity-80" data-name="image">
      <div className="overflow-clip relative shrink-0 size-[140px] md:size-[clamp(64px,7.44px_+_7.364vw,140px)]" data-name="Component 1">
        <div className="absolute inset-[6.37%_69.99%_53%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="56.8777" preserveAspectRatio="none" viewBox="0 0 42.0172 56.8777" width="42.0172">
            <path d={navbarSvgPaths.p7faea80} fill="var(--fill-0, #DB0B34)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[6.37%_37.78%_53%_36.85%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="56.8777" preserveAspectRatio="none" viewBox="0 0 35.51 56.8777" width="35.51">
            <path d={navbarSvgPaths.p2d4c2200} fill="var(--fill-0, #DB0B34)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[6.37%_0_53%_65.76%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="56.8777" preserveAspectRatio="none" viewBox="0 0 47.9392 56.8777" width="47.9392">
            <path d={navbarSvgPaths.p28e71f00} fill="var(--fill-0, #DB0B34)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[72.33%_15.09%_6.37%_12.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="29.8088" preserveAspectRatio="none" viewBox="0 0 101.552 29.8088" width="101.552">
            <path d={navbarSvgPaths.p2e5fb80} fill="var(--fill-0, #DB0B34)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[60.34%_27.12%_23.49%_24.55%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="22.6387" preserveAspectRatio="none" viewBox="0 0 67.6621 22.6387" width="67.6621">
            <path d={navbarSvgPaths.p1fae2640} fill="var(--fill-0, #DB0B34)" id="Vector" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function NavCtaButtons() {
  return (
    <div className="flex gap-[40px] md:gap-[clamp(12px,-8.84px_+_2.713vw,40px)] h-[80px] md:h-[clamp(40px,10.23px_+_3.876vw,80px)] items-center relative shrink-0">
      <div className="bg-[#fffbff] content-stretch cursor-pointer flex h-[64px] md:h-[clamp(36px,15.16px_+_2.713vw,64px)] items-center justify-center min-h-[40px] min-w-[180px] md:min-w-[clamp(110px,57.91px_+_6.783vw,180px)] pb-[7.12px] md:pb-[clamp(4px,1.68px_+_0.302vw,7.12px)] pt-[5.88px] md:pt-[clamp(3px,0.86px_+_0.279vw,5.88px)] px-[5px] relative rounded-[24px] shrink-0 transition-colors hover:bg-[#f3edff]" data-name="Component 5">
        <div className="absolute inset-0 rounded-[20px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="a.MuiButtonBase-root:shadow" />
        <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#22005d] text-[15px] md:text-[clamp(11px,8.02px_+_0.388vw,15px)] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[26.25px]">panel partnera</p>
        </div>
      </div>
      <div className="bg-[#db0b34] content-stretch cursor-pointer flex h-[64px] md:h-[clamp(36px,15.16px_+_2.713vw,64px)] items-center justify-center min-h-[40px] min-w-[180px] md:min-w-[clamp(110px,57.91px_+_6.783vw,180px)] pb-[7.12px] md:pb-[clamp(4px,1.68px_+_0.302vw,7.12px)] pt-[5.88px] md:pt-[clamp(3px,0.86px_+_0.279vw,5.88px)] px-[16px] relative rounded-[24px] shrink-0 transition-colors hover:bg-[#b8092b]" data-name="Component 7">
        <div className="absolute inset-0 rounded-[20px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="a.MuiButtonBase-root:shadow" />
        <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] md:text-[clamp(11px,8.02px_+_0.388vw,15px)] text-center text-white tracking-[1px] uppercase">
          <p className="leading-[26.25px]">zaloguj się do plz web</p>
        </div>
      </div>
    </div>
  );
}

function NavLink({ label, to }: { label: string; to?: string }) {
  const content = (
    <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[18px] md:text-[clamp(13px,9.28px_+_0.484vw,18px)] text-black whitespace-nowrap transition-colors hover:text-[#6750a4]">
      {label}
    </p>
  );

  return (
    <div className="content-stretch flex h-[79px] md:h-[clamp(40px,10.98px_+_3.779vw,79px)] items-center justify-center pb-[18px] md:pb-[clamp(10px,4.05px_+_0.775vw,18px)] pt-[21px] md:pt-[clamp(9px,0.07px_+_1.163vw,21px)] px-[24px] md:px-[clamp(10px,-0.42px_+_1.357vw,24px)] relative shrink-0" data-name="Navbar-segment">
      {to ? <Link to={to}>{content}</Link> : content}
    </div>
  );
}

// Below md the full nav doesn't fit even shrunk, so it collapses into a
// hamburger + dropdown. From md up it stays fully visible, shrinking fluidly
// (via clamp()) until it reaches its exact full-size Figma dimensions at 1800px+.
function DesktopNavLinks() {
  return (
    <div className="hidden md:flex md:-translate-x-1/2 md:absolute bg-[rgba(255,255,255,0.5)] content-stretch items-center justify-center md:left-1/2 px-[24px] rounded-[999px] min-[1800px]:top-0 shrink-0" data-name="Navbar">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.label} label={link.label} to={link.to} />
      ))}
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-[6px] size-[24px]">
      <span className={`block h-[2px] w-full rounded-full bg-[#22005d] transition-transform duration-200 ${open ? "translate-y-[8px] rotate-45" : ""}`} />
      <span className={`block h-[2px] w-full rounded-full bg-[#22005d] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
      <span className={`block h-[2px] w-full rounded-full bg-[#22005d] transition-transform duration-200 ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
    </div>
  );
}

function MobileMenuPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div
      className="md:hidden absolute left-0 top-full w-full bg-white shadow-[0px_8px_10px_0px_rgba(0,0,0,0.14)] flex flex-col items-center max-h-[calc(100vh-100px)] overflow-y-auto"
      onClick={onNavigate}
    >
      {NAV_LINKS.map((link) => (
        <NavLink key={link.label} label={link.label} to={link.to} />
      ))}
      <div className="flex flex-col items-center gap-[16px] py-[24px]">
        <NavCtaButtons />
      </div>
    </div>
  );
}

function NavbarContent({ menuOpen, onToggleMenu }: { menuOpen: boolean; onToggleMenu: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full min-[1800px]:w-[1756px] px-[16px] min-[1800px]:px-0">
      <NavLogo />
      <DesktopNavLinks />
      <div className="hidden md:flex">
        <NavCtaButtons />
      </div>
      <button
        type="button"
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-label="Menu"
        className="flex md:hidden items-center justify-center bg-[rgba(255,255,255,0.5)] rounded-full size-[48px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(255,255,255,0.8)]"
      >
        <MenuIcon open={menuOpen} />
      </button>
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="fixed min-[1800px]:absolute content-stretch flex flex-col h-auto min-[1800px]:h-[186px] items-center justify-center min-[1800px]:justify-end left-0 top-0 w-full min-[1800px]:w-[1918px] z-50 py-[16px] min-[1800px]:py-0 bg-transparent"
      data-name="Navbar"
    >
      <NavbarContent menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} />
      {menuOpen && <MobileMenuPanel onNavigate={() => setMenuOpen(false)} />}
    </div>
  );
}
