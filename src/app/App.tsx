import { Routes, Route } from "react-router";
import MainPage from "@/imports/MainPage/index";
import AboutPage from "@/imports/AboutPage/index";
import TrustedPage from "@/imports/TrustedPage/index";
import CennikPage from "@/imports/CennikPage/index";
import VisionPage from "@/imports/VisionPage/index";
import FaqPage from "@/imports/FaqPage/index";
import ScrollToTop from "@/app/ScrollToTop";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trusted" element={<TrustedPage />} />
        <Route path="/cennik" element={<CennikPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </div>
  );
}
