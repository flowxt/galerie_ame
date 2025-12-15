export const metadata = {
  title: "Boutique - Œuvres Spirituelles Disponibles",
  description:
    "Découvrez notre boutique en ligne d'œuvres spirituelles. Tableaux intuitifs, attrape-rêves artisanaux et bons cadeaux disponibles. Chaque création porte une énergie unique. Paiement sécurisé et livraison offerte en France.",
  keywords: [
    "boutique spirituelle",
    "tableaux intuitifs",
    "attrape-rêves",
    "bons cadeaux",
    "œuvres spirituelles",
    "art intuitif",
    "créations disponibles",
  ],
  openGraph: {
    title: "Boutique - Œuvres Spirituelles Disponibles",
    description:
      "Découvrez nos créations disponibles : tableaux intuitifs, attrape-rêves et bons cadeaux. Paiement sécurisé.",
    url: "https://atelierartame.com/boutique",
    images: [
      {
        url: "https://atelierartame.com/images/art.jpg",
        width: 1200,
        height: 630,
        alt: "Boutique Atelier Art'âme",
      },
    ],
  },
  alternates: {
    canonical: "https://atelierartame.com/boutique",
  },
};

export default function BoutiqueLayout({ children }) {
  return children;
}

