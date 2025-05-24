import { client } from "./sanity";

// Récupérer toutes les œuvres d'art disponibles
export async function getArtworks() {
  const query = `*[_type == "artwork" && available == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    price,
    category,
    technique,
    available,
    featured,
    "image": image.asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    },
    "gallery": gallery[].asset->{
      _id,
      url
    }
  }`;

  return await client.fetch(query);
}

// Récupérer les œuvres par catégorie
export async function getArtworksByCategory(category) {
  const query = `*[_type == "artwork" && available == true && category == $category] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    price,
    category,
    technique,
    available,
    featured,
    "image": image.asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    }
  }`;

  return await client.fetch(query, { category });
}

// Récupérer les œuvres mises en avant
export async function getFeaturedArtworks() {
  const query = `*[_type == "artwork" && featured == true && available == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    price,
    category,
    technique,
    "image": image.asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    }
  }`;

  return await client.fetch(query);
}

// Récupérer une œuvre par son slug
export async function getArtworkBySlug(slug) {
  const query = `*[_type == "artwork" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    longDescription,
    price,
    category,
    technique,
    dimensions,
    available,
    featured,
    createdDate,
    tags,
    "image": image.asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    },
    "gallery": gallery[].asset->{
      _id,
      url
    }
  }`;

  return await client.fetch(query, { slug });
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
