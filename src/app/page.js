import {
  getFeaturedTestimonials,
  getFeaturedArtworks,
} from "../lib/sanity-queries";

// Composants de la landing page
import HeroSection from "../components/landing/HeroSection";
import PortraitsSection from "../components/landing/PortraitsSection";
import AttrapesSection from "../components/landing/AttrapesSection";
import FAQSection from "../components/landing/FAQSection";

export default async function Home() {
  // Récupérer les témoignages et œuvres mises en avant
  const testimonials = await getFeaturedTestimonials();
  const featuredArtworks = await getFeaturedArtworks();

  return (
    <div className="min-h-screen">
      {/* Hero Section plein écran */}
      <HeroSection />

      {/* Section Portraits d'Âme */}
      <PortraitsSection />

      {/* Section Attrape-rêves */}
      <AttrapesSection />

      {/* Section FAQ */}
      <FAQSection />
    </div>
  );
}
