import { Inter, Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ClientLoader from "@/components/ui/ClientLoader";

// Police principale élégante
const inter = Inter({ subsets: ["latin"] });

// Police pour les titres - élégante et spirituelle
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Police pour les textes spirituels
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
});

export const metadata = {
  title:
    "Atelier Art'âme - Portraits d'âme spirituels et Attrape-rêves artisanaux",
  description:
    "Découvrez l'art spirituel unique de l'Atelier Art'âme. Portraits d'âme personnalisés et attrape-rêves artisanaux créés avec intention et matériaux naturels.",
  keywords:
    "portrait d'âme, attrape-rêves, art spirituel, création artisanale, développement personnel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} ${playfair.variable} ${crimson.variable}`}
      >
        <ClientLoader />
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
