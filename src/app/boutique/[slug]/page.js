import Link from "next/link";
import Image from "next/image";
import { getArtworkBySlug } from "../../../lib/sanity-queries";
import { urlFor } from "../../../lib/sanity";
import ArtworkGallery from "../../../components/ArtworkGallery";
import ArtworkPurchaseButton from "../../../components/ArtworkPurchaseButton";
import { notFound } from "next/navigation";

export default async function ArtworkDetail({ params }) {
  const artwork = await getArtworkBySlug(params.slug);

  if (!artwork) {
    notFound();
  }

  // Fonction pour formater le nom de la catégorie
  const getCategoryLabel = (category) => {
    const categoryLabels = {
      "portrait-ame": "Portraits d'Âme",
      original: "Œuvres Originales",
      reproduction: "Reproductions",
      custom: "Commandes Personnalisées",
    };
    return categoryLabels[category] || category;
  };

  // Fonction pour formater la technique
  const getTechniqueLabel = (technique) => {
    const techniqueLabels = {
      watercolor: "Aquarelle",
      pastel: "Pastel",
      oil: "Huile",
      acrylic: "Acrylique",
      mixed: "Techniques mixtes",
    };
    return techniqueLabels[technique] || technique;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Portraits d&apos;Âme
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Accueil
            </Link>
            <Link
              href="/portrait-d-ame"
              className="text-gray-600 hover:text-gray-800"
            >
              Portraits d&apos;Âme
            </Link>
            <Link
              href="/boutique"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Boutique
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/boutique" className="hover:text-gray-800">
              Boutique
            </Link>
            <span>/</span>
            <span className="text-gray-900">{artwork.title}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div>
            <ArtworkGallery artwork={artwork} />
          </div>

          {/* Details Section */}
          <div>
            {/* Category and Featured Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                {getCategoryLabel(artwork.category)}
              </span>
              {artwork.featured && (
                <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-lg text-sm font-medium">
                  ⭐ Coup de cœur
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-light text-gray-800 mb-4">
              {artwork.title}
            </h1>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-light text-gray-800">
                {artwork.price}€
              </span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {artwork.description}
              </p>
              {artwork.longDescription && (
                <p className="text-gray-600 leading-relaxed">
                  {artwork.longDescription}
                </p>
              )}
            </div>

            {/* Technical Details */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Détails techniques
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {artwork.technique && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Technique :</span>
                    <span className="font-medium">
                      {getTechniqueLabel(artwork.technique)}
                    </span>
                  </div>
                )}
                {artwork.dimensions &&
                  (artwork.dimensions.width || artwork.dimensions.height) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dimensions :</span>
                      <span className="font-medium">
                        {artwork.dimensions.width && artwork.dimensions.height
                          ? `${artwork.dimensions.width} × ${artwork.dimensions.height} cm`
                          : artwork.dimensions.width
                          ? `${artwork.dimensions.width} cm (largeur)`
                          : `${artwork.dimensions.height} cm (hauteur)`}
                      </span>
                    </div>
                  )}
                {artwork.createdDate && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date de création :</span>
                    <span className="font-medium">
                      {new Date(artwork.createdDate).toLocaleDateString(
                        "fr-FR",
                        {
                          year: "numeric",
                          month: "long",
                        }
                      )}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Disponibilité :</span>
                  <span
                    className={`font-medium ${
                      artwork.available ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {artwork.available ? "Disponible" : "Vendu"}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {artwork.tags && artwork.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Mots-clés
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Purchase Section */}
            <div className="mb-8">
              {artwork.available ? (
                <ArtworkPurchaseButton artwork={artwork} />
              ) : (
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-600 mb-2">
                    Cette œuvre n&apos;est plus disponible
                  </p>
                  <Link
                    href="/contact"
                    className="text-gray-800 hover:underline"
                  >
                    Contactez-nous pour des œuvres similaires
                  </Link>
                </div>
              )}
            </div>

            {/* Back to Shop */}
            <div className="text-center">
              <Link
                href="/boutique"
                className="inline-flex items-center text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                Retour à la boutique
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 Portraits d&apos;Âme. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
