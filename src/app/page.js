// Composants de la landing page
import HeroSection from "../components/landing/HeroSection";
import PortraitsSection from "../components/landing/PortraitsSection";
import PortraitsDameSection from "../components/landing/PortraitsDameSection";
import TableauDeVieSection from "../components/landing/TableauDeVieSection";
import AttrapesSection from "../components/landing/AttrapesSection";
import FAQSection from "../components/landing/FAQSection";

export const metadata = {
  title: "Accueil - Créations Spirituelles & Art Intuitif",
  description:
    "Bienvenue à l'Atelier Art'âme par Véronique. Découvrez nos créations spirituelles uniques : Portraits d'Âme pour révéler votre essence, Tableaux de Vie pour cartographier votre parcours, et Attrape-rêves artisanaux. Art intuitif & énergétique à Saint Sixt.",
  openGraph: {
    title: "Atelier Art'âme - Créations Spirituelles & Art Intuitif",
    description:
      "Découvrez nos créations spirituelles uniques : Portraits d'Âme, Tableaux de Vie et Attrape-rêves artisanaux.",
    url: "https://atelierartame.com",
    images: [
      {
        url: "/images/art.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier Art'âme - Créations spirituelles",
      },
    ],
  },
  alternates: {
    canonical: "https://atelierartame.com",
  },
};

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
