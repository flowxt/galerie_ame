import Link from "next/link";
import {
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Palette,
  Eye,
  ShoppingBag,
  Filter,
  MessageCircle,
  Brush,
} from "lucide-react";
import { getArtworks } from "../../lib/sanity-queries";
import ArtworkCard from "../../components/ArtworkCard";

export default async function Boutique() {
  // Récupérer les œuvres depuis Sanity
  const artworks = await getArtworks();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
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
          <div className="absolute top-1/2 right-1/6 text-rose-400 animate-float animation-delay-1000 opacity-30">
            <Star className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <ShoppingBag className="w-4 h-4 text-purple-500" />
            <span className="text-gray-700 text-sm font-medium">
              Œuvres d&apos;art spirituelles
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-800">
            <span className="block bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent font-medium">
              Boutique d&apos;Art Spirituel
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
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
              className="group bg-white/80 backdrop-blur-sm border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
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

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Types d&apos;
              <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                œuvres disponibles
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chaque catégorie d&apos;œuvre répond à des besoins spirituels
              différents et porte une intention particulière.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Portraits d&apos;Âme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Créations personnalisées qui révèlent l&apos;essence
                  spirituelle unique de chaque être.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Œuvres Originales
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Créations uniques nées de méditations profondes et
                  d&apos;inspirations spirituelles.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Reproductions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Impressions haute qualité d&apos;œuvres spirituelles pour
                  partager l&apos;énergie créative.
                </p>
              </div>
            </div>
          </div>

          {/* Filtres */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full p-2">
              <Filter className="w-4 h-4 text-gray-500 ml-2" />
              <button className="px-6 py-2 bg-purple-500 text-white rounded-full text-sm font-medium">
                Toutes
              </button>
              <button className="px-6 py-2 text-gray-600 hover:bg-white hover:shadow-sm rounded-full text-sm font-medium transition-all">
                Portraits d&apos;Âme
              </button>
              <button className="px-6 py-2 text-gray-600 hover:bg-white hover:shadow-sm rounded-full text-sm font-medium transition-all">
                Originales
              </button>
              <button className="px-6 py-2 text-gray-600 hover:bg-white hover:shadow-sm rounded-full text-sm font-medium transition-all">
                Reproductions
              </button>
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
