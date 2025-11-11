import { Inter, Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ClientLoader from "@/components/ui/ClientLoader";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://atelierartame.com"),
  title: {
    default: "Atelier Art'âme - Portraits d'Âme & Tableaux de Vie Spirituels",
    template: "%s | Atelier Art'âme",
  },
  description:
    "Créations spirituelles uniques par Véronique : Portraits d'Âme, Tableaux de Vie et Attrape-rêves artisanaux. Art intuitif pour révéler votre essence et accompagner votre chemin de vie. Livraison partout en France.",
  keywords: [
    "portrait d'âme",
    "tableau de vie",
    "attrape-rêves",
    "art spirituel",
    "création artisanale",
    "développement personnel",
    "coaching spirituel",
    "art intuitif",
    "peinture énergétique",
    "guidance spirituelle",
    "Saint Sixt",
    "Haute-Savoie",
  ],
  authors: [{ name: "Véronique - Atelier Art'âme" }],
  creator: "Atelier Art'âme",
  publisher: "Atelier Art'âme",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://atelierartame.com",
    siteName: "Atelier Art'âme",
    title: "Atelier Art'âme - Portraits d'Âme & Tableaux de Vie Spirituels",
    description:
      "Créations spirituelles uniques : Portraits d'Âme, Tableaux de Vie et Attrape-rêves artisanaux. Art intuitif pour révéler votre essence.",
    images: [
      {
        url: "/images/art.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier Art'âme - Créations spirituelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Art'âme - Portraits d'Âme & Tableaux de Vie Spirituels",
    description:
      "Créations spirituelles uniques : Portraits d'Âme, Tableaux de Vie et Attrape-rêves artisanaux.",
    images: ["/images/art.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "nCI6GIs7AQSq6l7WRzNvFmODJ8VIqMEc3jHMVCeAcDo",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  alternates: {
    canonical: "https://atelierartame.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.className} ${playfair.variable} ${crimson.variable}`}
      >
        <ClientLoader />
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
