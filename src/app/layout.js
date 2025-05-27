import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
