import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShoppingCart,
  CheckCircle,
  Truck,
  Shield,
  Award,
  Heart,
  Sparkles,
  Package,
  Clock,
  Star,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { getArtworkBySlug } from "../../../../lib/sanity-queries";
import { urlFor } from "../../../../lib/sanity";
import ArtworkOrderForm from "../../../../components/ArtworkOrderForm";
import { notFound } from "next/navigation";

export default async function ArtworkOrderPage({ params }) {
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

  // Déterminer la palette de couleurs selon la catégorie
  const getCategoryColors = (category) => {
    switch (category) {
      case "portrait-ame":
        return {
          gradient: "from-rose-50 via-purple-50 to-blue-50",
          badge: "bg-rose-100 text-rose-800",
          primary: "from-rose-500 to-purple-500",
        };
      case "attrape-reves":
        return {
          gradient: "from-blue-50 via-teal-50 to-blue-50",
          badge: "bg-blue-100 text-blue-800",
          primary: "from-blue-500 to-teal-500",
        };
      default:
        return {
          gradient: "from-purple-50 via-pink-50 to-rose-50",
          badge: "bg-purple-100 text-purple-800",
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
            <ShoppingCart className="w-6 h-6" />
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
              <Link
                href={`/boutique/${artwork.slug?.current}`}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                {artwork.title}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800 font-medium">Commande</span>
            </div>
          </nav>

          {/* Titre et badge */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 rounded-full px-6 py-3 mb-8">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Finaliser votre commande</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-800">
              <span
                className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent font-medium`}
              >
                Dernière étape
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vous êtes sur le point d&apos;acquérir une œuvre unique qui
              illuminera votre quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Section Principale */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Résumé de l'œuvre */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-8">
                  <Package className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-800 font-medium text-sm">
                    Résumé de votre commande
                  </span>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg">
                  {/* Image */}
                  <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden mb-6">
                    {artwork.image ? (
                      <Image
                        src={urlFor(artwork.image).width(500).height(400).url()}
                        alt={artwork.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-2xl"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <span className="text-gray-500">
                          Image de {artwork.title}
                        </span>
                      </div>
                    )}

                    {/* Badge catégorie sur l'image */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`${colors.badge} rounded-full px-3 py-1 text-xs font-medium`}
                      >
                        {getCategoryLabel(artwork.category)}
                      </div>
                    </div>
                  </div>

                  {/* Détails */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {artwork.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {artwork.description}
                    </p>

                    {/* Prix */}
                    <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">
                            Prix de l&apos;œuvre :
                          </span>
                          <span className="text-2xl font-light text-gray-800">
                            {artwork.price}€
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Livraison :</span>
                          <span className="text-green-600 font-semibold flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4" />
                            <span>Offerte</span>
                          </span>
                        </div>
                        <div className="border-t border-gray-200 pt-3">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-800">
                              Total :
                            </span>
                            <span className="text-3xl font-light text-gray-800">
                              {artwork.price}€
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations sur la livraison */}
                <div className="mt-8">
                  <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
                    <Truck className="w-4 h-4 text-green-600" />
                    <span className="text-green-800 font-medium text-sm">
                      Informations de livraison
                    </span>
                  </div>

                  <div className="bg-green-50/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50">
                    <div className="grid gap-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">
                          Livraison soignée et assurée
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Package className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">
                          Emballage professionnel pour œuvres d&apos;art
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">
                          Délai de livraison : 5-7 jours ouvrés
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">
                          Certificat d&apos;authenticité inclus
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-8">
                  <CreditCard className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-800 font-medium text-sm">
                    Vos informations
                  </span>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg">
                  <ArtworkOrderForm artwork={artwork} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Confiance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium text-sm">
                Achat en toute confiance
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">
              Pourquoi choisir
              <span
                className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
              >
                {" "}
                l&apos;Atelier Art&apos;âme ?
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Paiement Sécurisé
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transactions protégées par Stripe avec chiffrement SSL de
                    niveau bancaire.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Œuvres Uniques
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque création est une pièce unique, impossible à
                    reproduire à l&apos;identique.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Créé avec Amour
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Processus créatif méditatif et intentionnel pour une énergie
                    positive.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center space-x-2 bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-6 py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-medium whitespace-nowrap"
              >
                <span className="hidden sm:inline">
                  Une question ? Contactez-nous
                </span>
                <span className="sm:hidden">Contactez-nous</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
