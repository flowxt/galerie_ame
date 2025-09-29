"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Palette,
  Eye,
  MessageCircle,
} from "lucide-react";

export default function GaleriePage() {
  // Photos d'œuvres réalisées (sans lien avec Sanity)
  const artworksGallery = [
    {
      id: 1,
      src: "/images/portrait-dame.jpg",
      title: "Portrait d'Âme Féminine",
      category: "Portrait d'Âme",
      description: "Révélation de l'essence féminine profonde"
    },
    {
      id: 2,
      src: "/images/portrait-dame2.jpg",
      title: "Lumière Intérieure",
      category: "Portrait d'Âme",
      description: "Capturation de la lumière spirituelle"
    },
    {
      id: 3,
      src: "/images/portrait-dame3.jpg",
      title: "Beauté Authentique",
      category: "Portrait d'Âme",
      description: "Expression de la vérité intérieure"
    },
    {
      id: 4,
      src: "/images/vero-portrait.jpg",
      title: "Énergie Créatrice",
      category: "Portrait d'Âme",
      description: "Révélation de la force créative"
    },
    {
      id: 5,
      src: "/images/vero-portrait2.jpg",
      title: "Chemin d'Évolution",
      category: "Tableau de Vie",
      description: "Cartographie spirituelle personnelle"
    },
    {
      id: 6,
      src: "/images/attrape-reve-bleu.jpg",
      title: "Protecteur Océan",
      category: "Attrape-rêves",
      description: "Création artisanale aux tons apaisants"
    },
    {
      id: 7,
      src: "/images/attrape-reve-plume.jpg",
      title: "Gardien des Rêves",
      category: "Attrape-rêves",
      description: "Tissage traditionnel aux plumes naturelles"
    },
    {
      id: 8,
      src: "/images/art.jpg",
      title: "Œuvre Spirituelle",
      category: "Création Intuitive",
      description: "Expression libre de l'énergie créatrice"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/vero-realisation.jpg"
            alt="Galerie des créations de Véronique"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
        </div>

        {/* Éléments spirituels flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-white/30 animate-float">
            <Star className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-amber-300/40 animate-float animation-delay-700">
            <Heart className="w-5 h-5" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-rose-300/30 animate-float animation-delay-1000">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Palette className="w-4 h-4 text-amber-300" />
            <span className="text-white text-sm font-medium">
              Œuvres spirituelles créées avec amour
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent font-medium">
              Galerie de Créations
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-crimson">
            Découvrez mes créations spirituelles qui ont déjà illuminé le quotidien de leurs propriétaires. Chaque œuvre raconte une histoire unique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#galerie"
              className="group bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Découvrir la Galerie</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/portrait-d-ame/commande"
              className="group bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>M&apos;Inspirer pour ma Commande</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section id="galerie" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-6 py-2 mb-6">
              <Palette className="w-5 h-5 text-amber-600" />
              <span className="text-amber-800 font-medium text-sm">
                Créations Réalisées
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Mes
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                {" "}
                œuvres spirituelles
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chaque création porte une énergie unique et raconte l'histoire d'une âme. Laissez-vous inspirer pour votre propre commande personnalisée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {artworksGallery.map((artwork) => (
              <div
                key={artwork.id}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={artwork.src}
                    alt={artwork.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    {artwork.category}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-amber-50/30 to-rose-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-2 mb-6">
              <Heart className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium text-sm">
                Témoignages
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Ce que disent mes
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                {" "}
                clients
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-center">
                &quot;Mon portrait d&apos;âme trône dans mon salon et ne cesse
                d&apos;émerveiller mes invités. C&apos;est devenu une pièce de
                conversation incontournable.&quot;
              </blockquote>

              <div className="text-center">
                <cite className="text-gray-600 font-medium">- Émilie D.</cite>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-center">
                &quot;L&apos;attrape-rêves que j&apos;ai commandé protège
                vraiment mes nuits. Depuis que je l&apos;ai, mes rêves sont plus
                beaux et plus inspirants.&quot;
              </blockquote>

              <div className="text-center">
                <cite className="text-gray-600 font-medium">- Marc L.</cite>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-center">
                &quot;Une expérience artistique complète, de la consultation à
                la livraison. Mon œuvre est exactement ce dont j&apos;avais
                besoin dans ma vie.&quot;
              </blockquote>

              <div className="text-center">
                <cite className="text-gray-600 font-medium">- Sophie R.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-purple-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Inspiré par ces créations ?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Commencez votre propre voyage artistique et spirituel avec une création unique qui vous ressemble.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portrait-d-ame/commande"
                className="group bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Commander mon Portrait d&apos;Âme</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="group bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <span className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Discuter d&apos;un projet</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}