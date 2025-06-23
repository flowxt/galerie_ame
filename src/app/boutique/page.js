import Link from "next/link";
import {
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Palette,
  Eye,
  ShoppingBag,
  MessageCircle,
  Brush,
} from "lucide-react";
import { getArtworks } from "../../lib/sanity-queries";
import ArtworkCard from "../../components/ArtworkCard";
import Image from "next/image";

export default async function Boutique() {
  // Récupérer les œuvres depuis Sanity
  const artworks = await getArtworks();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/art.jpg"
            alt="Art spirituel de Véronique"
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
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-purple-300/40 animate-float animation-delay-700">
            <Heart className="w-5 h-5" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-rose-300/30 animate-float animation-delay-1000">
            <Star className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <ShoppingBag className="w-4 h-4 text-purple-300" />
            <span className="text-white text-sm font-medium">
              Œuvres d&apos;art spirituelles
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-purple-300 to-rose-300 bg-clip-text text-transparent font-medium">
              Boutique d&apos;Art Spirituel
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson">
            Découvrez notre collection d&apos;œuvres uniques. Chaque création
            porte en elle une énergie particulière et une intention spirituelle
            profonde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#collection"
              className="group bg-gradient-to-r from-purple-500 to-rose-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Découvrir la Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/portrait-d-ame/commande"
              className="group bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Création Sur Mesure</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Types d'Œuvres */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
              <Brush className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium text-sm">
                Nos Créations
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
              Types d&apos;
              <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                œuvres disponibles
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
              Chaque catégorie d&apos;œuvre répond à des besoins spirituels
              différents et porte une intention particulière.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Attrape-Rêves Spirituels
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Créations artisanales uniques qui protègent vos nuits et
                  filtrent les énergies négatives pour des rêves apaisants.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Tableaux Intuitifs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Œuvres originales nées de méditations profondes, chaque toile
                  porte une énergie particulière et une intention spirituelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Collection */}
      <section
        id="collection"
        className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50"
      >
        <div className="container mx-auto px-4">
          {artworks && artworks.length > 0 ? (
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
                  <ShoppingBag className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-800 font-medium text-sm">
                    Collection Disponible
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  Nos
                  <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                    {" "}
                    œuvres d&apos;art
                  </span>
                </h2>

                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-lg">
                    {artworks.length} œuvre{artworks.length > 1 ? "s" : ""}{" "}
                    unique{artworks.length > 1 ? "s" : ""} disponible
                    {artworks.length > 1 ? "s" : ""}
                  </span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {artworks.map((artwork) => (
                  <ArtworkCard key={artwork._id} artwork={artwork} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <Palette className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                Nouvelles œuvres
                <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                  {" "}
                  en création
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Nous préparons de nouvelles créations spirituelles avec
                intention et amour. En attendant, vous pouvez commander une
                œuvre personnalisée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/portrait-d-ame/commande"
                  className="group bg-gradient-to-r from-purple-500 to-rose-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Commander un Portrait d&apos;Âme</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group bg-white/80 backdrop-blur-sm border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Discuter d&apos;un projet</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section Création Sur Mesure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-2 mb-6">
              <Palette className="w-5 h-5 text-rose-600" />
              <span className="text-rose-800 font-medium text-sm">
                Création Personnalisée
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Vous ne trouvez pas
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                ce que vous cherchez ?
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Commandez votre portrait d&apos;âme personnalisé ou contactez-nous
              pour discuter d&apos;une création sur mesure qui vous ressemble.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/portrait-d-ame/commande"
                className="group bg-gradient-to-r from-rose-500 to-purple-500 text-white px-10 py-5 rounded-full hover:from-rose-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-medium"
              >
                <span className="flex items-center space-x-3">
                  <Heart className="w-6 h-6" />
                  <span>Commander un Portrait d&apos;Âme</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group bg-white border-2 border-rose-300 text-rose-700 hover:bg-rose-50 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
              >
                <span className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6" />
                  <span>Nous Contacter</span>
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
