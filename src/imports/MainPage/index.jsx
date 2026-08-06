import { HeroSection } from "./sections/Hero";
import { ValuesSection } from "./sections/ValuesSection";
import { ModulyGridSection } from "./sections/ModulyGrid";
import { PersonaSwitcherSection } from "./sections/PersonaSwitcher";
import { PricingCtaSection } from "./sections/PricingCta";
import { TestimonialsSection } from "./sections/Testimonials";
import { FooterLegalBarLeft, FooterLegalBarRight, FooterLegalBarCenter } from "./sections/Footer";
import { CommunityPricingCtaSection } from "./sections/CommunityPricingCta";
import { DarkFooterSection } from "./sections/DarkFooterSitemap";
import { Navbar } from "./sections/Navbar";

export default function MainPage() {
  return (
    <div className="bg-[#f3edff] content-stretch flex flex-col items-start relative size-full" data-name="Main page">
      <HeroSection />
      <ModulyGridSection />
      <ValuesSection />
      <PersonaSwitcherSection />
      <PricingCtaSection />
      <TestimonialsSection />
      <FooterLegalBarLeft />
      <FooterLegalBarRight />
      <CommunityPricingCtaSection />
      <DarkFooterSection />
      <FooterLegalBarCenter />
      <Navbar />
    </div>
  );
}
