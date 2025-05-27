import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  Heart,
  Eye,
  Palette,
  Calendar,
  Ruler,
  Tag,
  ShoppingCart,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Award,
  ArrowRight,
} from "lucide-react";
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

  // Déterminer la palette de couleurs selon la catégorie
  const getCategoryColors = (category) => {
    switch (category) {
      case "portrait-ame":
        return {
          gradient: "from-rose-50 via-purple-50 to-blue-50",
          badge: "bg-rose-100 text-rose-800",
          accent: "rose",
          primary: "from-rose-500 to-purple-500",
        };
      case "attrape-reves":
        return {
          gradient: "from-blue-50 via-teal-50 to-blue-50",
          badge: "bg-blue-100 text-blue-800",
          accent: "blue",
          primary: "from-blue-500 to-teal-500",
        };
      default:
        return {
          gradient: "from-purple-50 via-pink-50 to-rose-50",
          badge: "bg-purple-100 text-purple-800",
          accent: "purple",
          primary: "from-purple-500 to-rose-500",
        };
    }
  };

  const colors = getCategoryColors(artwork.category);

  return (
    <div className="min-h-screen">
      {/* Hero Section avec Breadcrumb */}
      <section
        className={`relative py-20 bg-gradient-to-br ${colors.gradient}`}
      >
        {/* Arrière-plan épuré */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-rose-200/20 to-purple-200/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

          {/* Éléments spirituels discrets */}
          <div className="absolute top-1/4 left-1/4 text-purple-300 animate-float opacity-40">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-pink-300 animate-float animation-delay-700 opacity-40">
            <Heart className="w-5 h-5" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Breadcrumb élégant */}
          <nav className="mb-8">
            <div className="flex items-center space-x-3 text-sm">
              <Link
                href="/boutique"
                className="group flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 hover:bg-white/80 transition-all"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-gray-700">Boutique</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800 font-medium">{artwork.title}</span>
            </div>
          </nav>

          {/* Bandeau pour œuvres vendues/réservées */}
          {artwork.status !== "available" && (
            <div className="mb-8">
              {artwork.status === "sold" ? (
                <div className="bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-rose-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-red-900">
                        Cette œuvre a trouvé son foyer
                      </h3>
                      <p className="text-red-700">
                        Cette pièce unique a été adoptée
                        {artwork.soldDate &&
                          ` le ${new Date(artwork.soldDate).toLocaleDateString(
                            "fr-FR"
                          )}`}
                      </p>
                    </div>
                  </div>
                  <p className="text-red-600 text-sm">
                    Contactez-nous si vous recherchez une création similaire
                    dans le même esprit.
                  </p>
                </div>
              ) : (
                <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">
                        Cette œuvre est réservée
                      </h3>
                      <p className="text-amber-700">
                        Cette pièce est actuellement en cours de réservation
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Titre et badges */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div
                className={`inline-flex items-center space-x-2 ${colors.badge} rounded-full px-4 py-2`}
              >
                <Palette className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {getCategoryLabel(artwork.category)}
                </span>
              </div>
              {artwork.featured && (
                <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 rounded-full px-4 py-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Coup de cœur</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-800">
              <span
                className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent font-medium`}
              >
                {artwork.title}
              </span>
            </h1>

            <div className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              {artwork.price}€
            </div>
          </div>
        </div>
      </section>

      {/* Section Principale */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Galerie d'Images */}
              <div>
                <div className="sticky top-8">
                  <ArtworkGallery artwork={artwork} />
                </div>
              </div>

              {/* Détails de l'Œuvre */}
              <div className="space-y-12">
                {/* Description */}
                <div>
                  <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-800 font-medium text-sm">
                      Description
                    </span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {artwork.description}
                    </p>
                    {artwork.longDescription && (
                      <p className="text-gray-600 leading-relaxed">
                        {artwork.longDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Détails Techniques */}
                <div>
                  <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                    <Ruler className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800 font-medium text-sm">
                      Détails Techniques
                    </span>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
                    <div className="grid gap-6">
                      {artwork.technique && (
                        <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-center space-x-3">
                            <Palette className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-600 font-medium">
                              Technique
                            </span>
                          </div>
                          <span className="text-gray-800 font-semibold">
                            {getTechniqueLabel(artwork.technique)}
                          </span>
                        </div>
                      )}

                      {artwork.dimensions &&
                        (artwork.dimensions.width ||
                          artwork.dimensions.height) && (
                          <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                            <div className="flex items-center space-x-3">
                              <Ruler className="w-5 h-5 text-gray-400" />
                              <span className="text-gray-600 font-medium">
                                Dimensions
                              </span>
                            </div>
                            <span className="text-gray-800 font-semibold">
                              {artwork.dimensions.width &&
                              artwork.dimensions.height
                                ? `${artwork.dimensions.width} × ${artwork.dimensions.height} cm`
                                : artwork.dimensions.width
                                ? `${artwork.dimensions.width} cm (largeur)`
                                : `${artwork.dimensions.height} cm (hauteur)`}
                            </span>
                          </div>
                        )}

                      {artwork.createdDate && (
                        <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-600 font-medium">
                              Date de création
                            </span>
                          </div>
                          <span className="text-gray-800 font-semibold">
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

                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-600 font-medium">
                            Disponibilité
                          </span>
                        </div>
                        <span
                          className={`font-semibold px-3 py-1 rounded-full text-sm ${
                            artwork.status === "available"
                              ? "bg-green-100 text-green-700"
                              : artwork.status === "reserved"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {artwork.status === "available"
                            ? "Disponible"
                            : artwork.status === "reserved"
                            ? "Réservé"
                            : "Adopté"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mots-clés */}
                {artwork.tags && artwork.tags.length > 0 && (
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
                      <Tag className="w-4 h-4 text-purple-600" />
                      <span className="text-purple-800 font-medium text-sm">
                        Mots-clés
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {artwork.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section Achat */}
                <div>
                  <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
                    <ShoppingCart className="w-4 h-4 text-green-600" />
                    <span className="text-green-800 font-medium text-sm">
                      {artwork.status === "available"
                        ? "Acquisition"
                        : "Contact"}
                    </span>
                  </div>

                  {artwork.status === "available" ? (
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-sm">
                      <ArtworkPurchaseButton artwork={artwork} />
                    </div>
                  ) : (
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm text-center">
                      <div className="mb-6">
                        <p className="text-gray-700 mb-4">
                          {artwork.status === "sold"
                            ? "Cette œuvre a trouvé son foyer, mais nous pouvons créer quelque chose d'unique pour vous dans le même esprit."
                            : "Cette œuvre est actuellement réservée. Contactez-nous pour plus d'informations."}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          href="/contact"
                          className={`group bg-gradient-to-r ${colors.primary} text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium`}
                        >
                          <span className="flex items-center justify-center space-x-2">
                            <MessageCircle className="w-5 h-5" />
                            <span>
                              {artwork.status === "sold"
                                ? "Demander une création similaire"
                                : "Nous contacter"}
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>

                        {artwork.status === "sold" && (
                          <Link
                            href="/portrait-d-ame/commande"
                            className="group bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
                          >
                            <span className="flex items-center justify-center space-x-2">
                              <Heart className="w-5 h-5" />
                              <span>Commander un Portrait d&apos;Âme</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-2 mb-8">
              <Eye className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium text-sm">
                Continuer l&apos;Exploration
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">
              Découvrez d&apos;autres
              <span
                className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
              >
                {" "}
                créations
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/boutique"
                className={`group bg-gradient-to-r ${colors.primary} text-white px-10 py-5 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-medium`}
              >
                <span className="flex items-center space-x-3">
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                  <span>Retour à la Boutique</span>
                </span>
              </Link>

              <Link
                href="/deja-realise"
                className="group bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
              >
                <span className="flex items-center space-x-3">
                  <Award className="w-6 h-6" />
                  <span>Créations Trouvées</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
