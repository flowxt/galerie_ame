// Composants de la landing page
import HeroSection from "../components/landing/HeroSection";
import PortraitsSection from "../components/landing/PortraitsSection";
import PortraitsDameSection from "../components/landing/PortraitsDameSection";
import TableauDeVieSection from "../components/landing/TableauDeVieSection";
import AttrapesSection from "../components/landing/AttrapesSection";
import FAQSection from "../components/landing/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section plein écran */}
      <HeroSection />

      {/* Section Présentation */}
      <PortraitsSection />

      {/* Section Portraits d'Âme */}
      <PortraitsDameSection />

      {/* Section Tableau de Vie */}
      <TableauDeVieSection />

      {/* Section Attrape-rêves */}
      <AttrapesSection />

      {/* Section FAQ */}
      <FAQSection />
    </div>
  );
}
