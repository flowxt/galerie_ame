import { client } from "./sanity";

// Requête pour récupérer toutes les œuvres disponibles (statut available)
export async function getArtworks() {
  return client.fetch(`
    *[_type == "artwork" && status == "available"] | order(createdDate desc) {
      _id,
      title,
      slug,
      category,
      status,
      image,
      gallery,
      description,
      longDescription,
      price,
      technique,
      dimensions,
      materials,
      createdDate,
      featured,
      tags,
      customizationOptions
    }
  `);
}

// Requête pour récupérer les œuvres par catégorie (disponibles uniquement)
export async function getArtworksByCategory(category) {
  return client.fetch(
    `
    *[_type == "artwork" && category == $category && status == "available"] | order(createdDate desc) {
      _id,
      title,
      slug,
      category,
      status,
      image,
      gallery,
      description,
      longDescription,
      price,
      technique,
      dimensions,
      materials,
      createdDate,
      featured,
      tags,
      customizationOptions
    }
  `,
    { category }
  );
}

// Requête pour récupérer une œuvre par son slug (tous statuts)
export async function getArtworkBySlug(slug) {
  return client.fetch(
    `
    *[_type == "artwork" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      status,
      image,
      gallery,
      description,
      longDescription,
      price,
      technique,
      dimensions,
      materials,
      createdDate,
      soldDate,
      buyerTestimonial,
      featured,
      tags,
      customizationOptions
    }
  `,
    { slug }
  );
}

// Requête pour récupérer les œuvres vendues (pour la galerie "Déjà réalisé")
export async function getSoldArtworks() {
  return client.fetch(`
    *[_type == "artwork" && status == "sold" && !hidden] | order(soldDate desc) {
      _id,
      title,
      slug,
      category,
      status,
      image,
      gallery,
      description,
      longDescription,
      price,
      technique,
      dimensions,
      materials,
      createdDate,
      soldDate,
      buyerTestimonial,
      featured,
      tags,
      customizationOptions
    }
  `);
}

// Requête pour récupérer les œuvres mises en avant (disponibles)
export async function getFeaturedArtworks() {
  return client.fetch(`
    *[_type == "artwork" && featured == true && status == "available"] | order(createdDate desc) {
      _id,
      title,
      slug,
      category,
      status,
      image,
      gallery,
      description,
      longDescription,
      price,
      technique,
      dimensions,
      materials,
      createdDate,
      featured,
      tags,
      customizationOptions
    }
  `);
}

// Requête pour récupérer les attrape-rêves disponibles
export async function getDreamCatchers() {
  return getArtworksByCategory("attrape-reves");
}

// Fonction pour mettre à jour le statut d'une œuvre (utilisée après achat)
export async function updateArtworkStatus(artworkId, status, soldDate = null) {
  const updateData = {
    status: status,
  };

  if (status === "sold" && soldDate) {
    updateData.soldDate = soldDate;
  }

  return client.patch(artworkId).set(updateData).commit();
}

// Statistiques pour le dashboard admin
export async function getArtworkStats() {
  return client.fetch(`
    {
      "total": count(*[_type == "artwork"]),
      "available": count(*[_type == "artwork" && status == "available"]),
      "reserved": count(*[_type == "artwork" && status == "reserved"]),
      "sold": count(*[_type == "artwork" && status == "sold"]),
      "byCategory": {
        "portraitAme": count(*[_type == "artwork" && category == "portrait-ame"]),
        "original": count(*[_type == "artwork" && category == "original"]),
        "reproduction": count(*[_type == "artwork" && category == "reproduction"]),
        "attrapesReves": count(*[_type == "artwork" && category == "attrape-reves"]),
        "custom": count(*[_type == "artwork" && category == "custom"])
      }
    }
  `);
}

// Récupérer les témoignages pour la page d'accueil
export async function getFeaturedTestimonials() {
  const query = `*[_type == "testimonial" && featured == true] | order(date desc) {
    _id,
    initials,
    quote,
    rating,
    date
  }`;

  return await client.fetch(query);
}

// Récupérer tous les témoignages
export async function getTestimonials() {
  const query = `*[_type == "testimonial"] | order(date desc) {
    _id,
    name,
    initials,
    quote,
    rating,
    date,
    artworkRelated->{
      title,
      slug
    }
  }`;

  return await client.fetch(query);
}

// Récupérer le contenu d'une page
export async function getPageContent(pageType) {
  const query = `*[_type == "page" && pageType == $pageType][0] {
    _id,
    title,
    heroSection,
    content,
    seo
  }`;

  return await client.fetch(query, { pageType });
}
