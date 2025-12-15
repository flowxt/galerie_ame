export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://atelierartame.com",
    name: "Atelier Art'âme",
    description:
      "Créations spirituelles uniques : Portraits d'Âme, Tableaux de Vie et Attrape-rêves artisanaux par Véronique",
    url: "https://atelierartame.com",
    logo: "https://atelierartame.com/images/logo-sansfond.png",
    image: "https://atelierartame.com/images/art.jpg",
    telephone: "+33632215288",
    email: "contact@atelierartame.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint Sixt",
      addressRegion: "Haute-Savoie",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.0644",
      longitude: "6.3896",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "€€",
    sameAs: [
      "https://www.instagram.com/atelierartame/",
      "https://www.facebook.com/profile.php?id=61581605606918",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services spirituels",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Portrait d'Âme",
            description:
              "Photographie énergétique de votre être au présent, révélant votre vibration profonde",
            provider: {
              "@type": "LocalBusiness",
              name: "Atelier Art'âme",
            },
            areaServed: "FR",
            offers: [
              {
                "@type": "Offer",
                name: "Portrait d'Âme - Format Intime",
                price: "240",
                priceCurrency: "EUR",
              },
              {
                "@type": "Offer",
                name: "Portrait d'Âme - Format Élégant",
                price: "340",
                priceCurrency: "EUR",
              },
              {
                "@type": "Offer",
                name: "Portrait d'Âme - Format Duo",
                price: "400",
                priceCurrency: "EUR",
              },
            ],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tableau de Vie",
            description:
              "Co-création spirituelle retraçant votre parcours intérieur, vos transformations et aspirations",
            provider: {
              "@type": "LocalBusiness",
              name: "Atelier Art'âme",
            },
            areaServed: "FR",
            offers: [
              {
                "@type": "Offer",
                name: "Tableau de Vie - Format Intime",
                price: "240",
                priceCurrency: "EUR",
              },
              {
                "@type": "Offer",
                name: "Tableau de Vie - Format Élégant",
                price: "340",
                priceCurrency: "EUR",
              },
              {
                "@type": "Offer",
                name: "Tableau de Vie - Format Premium",
                price: "500",
                priceCurrency: "EUR",
              },
            ],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Attrape-rêves artisanaux",
            description:
              "Créations artisanales uniques avec matériaux naturels et plumes authentiques",
            provider: {
              "@type": "LocalBusiness",
              name: "Atelier Art'âme",
            },
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

