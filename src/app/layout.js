import { Inter, Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

// Police principale élégante
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Police pour les titres - élégante et spirituelle
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Police pour les textes spirituels
const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
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
        className={`${inter.variable} ${playfair.variable} ${crimson.variable} font-inter antialiased`}
      >
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
