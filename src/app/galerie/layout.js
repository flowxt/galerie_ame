export const metadata = {
  title: "Galerie - Nos Créations Spirituelles",
  description:
    "Explorez notre galerie d'œuvres spirituelles réalisées par Véronique. Portraits d'Âme, Tableaux de Vie, Attrape-rêves et créations intuitives. Chaque œuvre raconte une histoire unique et porte une énergie particulière. Laissez-vous inspirer.",
  keywords: [
    "galerie art spirituel",
    "œuvres réalisées",
    "portfolio spirituel",
    "créations intuitives",
    "exemples portraits d'âme",
    "réalisations artistiques",
  ],
  openGraph: {
    title: "Galerie - Nos Créations Spirituelles",
    description:
      "Explorez notre galerie d'œuvres spirituelles. Portraits d'Âme, Tableaux de Vie et créations intuitives.",
    url: "https://atelierartame.com/galerie",
    images: [
      {
        url: "/images/art.jpg",
        width: 1200,
        height: 630,
        alt: "Galerie des créations - Atelier Art'âme",
      },
    ],
  },
  alternates: {
    canonical: "https://atelierartame.com/galerie",
  },
};

export default function GalerieLayout({ children }) {
  return children;
}

