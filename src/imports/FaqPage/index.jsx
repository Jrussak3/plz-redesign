import { Navbar } from "../MainPage/sections/Navbar";
import { FooterLegalBarLeft, FooterLegalBarRight, FooterLegalBarCenter } from "../MainPage/sections/Footer";
import { DarkFooterSection } from "../MainPage/sections/DarkFooterSitemap";
import { FaqSection } from "./sections/FaqAccordion";

export default function FaqPage() {
  return (
    // pt clears the fixed Navbar (it grows with viewport width, up to 186px at 1800px+) so content never sits under it.
    <div className="bg-[#f3edff] content-stretch flex flex-col items-start relative size-full pt-[190px] md:pt-[80px]" data-name="FAQ page">
      <FaqSection />
      <FooterLegalBarLeft />
      <FooterLegalBarRight />
      <DarkFooterSection />
      <FooterLegalBarCenter />
      <Navbar />
    </div>
  );
}
