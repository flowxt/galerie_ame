import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Palette,
  Eye,
  Clock,
  CheckCircle,
  MessageCircle,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import { getSoldArtworks } from "../../lib/sanity-queries";
import { urlFor } from "../../lib/sanity";

export default async function DejaRealisePage() {
  const soldArtworks = await getSoldArtworks();

  // Fonction pour formater le nom de la catégorie
  const getCategoryLabel = (category) => {
    const categoryLabels = {
      "portrait-ame": "Portraits d'Âme",
      "tableau-de-vie": "Tableau de Vie",
      "attrape-reves": "Attrape-rêves",
      "tableau-intuitif": "Tableau Intuitif",
      original: "Œuvres Originales",
      reproduction: "Reproductions",
      custom: "Commandes Personnalisées",
    };
    return categoryLabels[category] || category;
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/portrait-dame.jpg"
            alt="Portrait d'âme réalisé par Véronique"
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
            <Award className="w-4 h-4 text-amber-300" />
            <span className="text-white text-sm font-medium">
              Œuvres qui ont trouvé leur foyer
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent font-medium">
              Galerie des Créations Trouvées
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-crimson">
            Découvrez les œuvres qui illuminent désormais le quotidien de leurs
            propriétaires et les témoignages de ceux qui vivent avec ces
            créations uniques.
          </p>

          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span className="text-white font-semibold">Pièces Uniques</span>
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <p className="text-white/90 text-sm">
              Ces œuvres ne sont plus disponibles à l&apos;achat, mais elles
              peuvent vous inspirer pour une commande personnalisée.
            </p>
          </div>

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

      {/* Section Statistiques */}
      {soldArtworks && soldArtworks.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-6 py-2 mb-6">
                <Users className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-medium text-sm">
                  Impact Spirituel
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent font-medium">
                  {soldArtworks.length}
                </span>{" "}
                œuvre{soldArtworks.length > 1 ? "s" : ""} qui illuminent le
                quotidien
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Autant de foyers touchés par l&apos;art spirituel et
                d&apos;histoires uniques qui continuent de s&apos;écrire...
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Section Galerie */}
      <section
        id="galerie"
        className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
      >
        <div className="container mx-auto px-4">
          {soldArtworks && soldArtworks.length > 0 ? (
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-6 py-2 mb-6">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span className="text-amber-800 font-medium text-sm">
                    Créations Trouvées
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  Nos
                  <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                    {" "}
                    œuvres adoptées
                  </span>
                </h2>

                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Heart className="w-4 h-4" />
                  <span className="text-lg">
                    {soldArtworks.length} création
                    {soldArtworks.length > 1 ? "s" : ""} qui illumine
                    {soldArtworks.length > 1 ? "nt" : ""} des foyers
                  </span>
                  <Heart className="w-4 h-4" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {soldArtworks.map((artwork) => (
                  <Link
                    key={artwork._id}
                    href={`/boutique/${artwork.slug?.current}`}
                    className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {/* Image avec overlay "ADOPTÉ" */}
                    <div className="relative h-64 bg-gray-100">
                      {artwork.image ? (
                        <Image
                          src={urlFor(artwork.image)
                            .width(400)
                            .height(300)
                            .url()}
                          alt={artwork.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-t-2xl"
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center">
                          <span className="text-gray-500">
                            Image de {artwork.title}
                          </span>
                        </div>
                      )}

                      {/* Overlay adopté */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-4">
                        <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium transform rotate-3 shadow-lg">
                          ✨ ADOPTÉ
                        </div>
                      </div>

                      {/* Badge catégorie */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                        {getCategoryLabel(artwork.category)}
                      </div>

                      {/* Indicateur cliquable */}
                      <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-3 h-3 inline mr-1" />
                        Détails
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {artwork.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {artwork.description}
                      </p>

                      {/* Date de création */}
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>
                          Réalisé en{" "}
                          {formatDate(artwork.soldDate || artwork.createdDate)}
                        </span>
                      </div>

                      {/* Témoignage si disponible */}
                      {artwork.buyerTestimonial && (
                        <div className="bg-amber-50 border border-amber-200/50 p-4 rounded-xl mb-4">
                          <blockquote className="text-amber-800 italic text-sm leading-relaxed">
                            &quot;{artwork.buyerTestimonial}&quot;
                          </blockquote>
                        </div>
                      )}

                      {/* Prix de référence */}
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                        <span>Prix de référence :</span>
                        <span className="font-semibold text-amber-600">
                          {artwork.price}€
                        </span>
                      </div>

                      {/* Note pour cliquer */}
                      <div className="text-center">
                        <span className="text-amber-600 text-sm group-hover:underline transition-all">
                          Voir tous les détails →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                Premières créations
                <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  {" "}
                  en cours
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Cette galerie se remplira au fur et à mesure que nos œuvres
                trouvent leur foyer. Soyez parmi les premiers à découvrir nos
                créations !
              </p>

              <Link
                href="/boutique"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium whitespace-nowrap"
              >
                <Eye className="w-5 h-5" />
                <span>Découvrir les œuvres disponibles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Section Inspiration */}
      {soldArtworks && soldArtworks.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-2 mb-6">
                  <Palette className="w-5 h-5 text-rose-600" />
                  <span className="text-rose-800 font-medium text-sm">
                    Inspiration Créative
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  Inspiré par ces
                  <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                    {" "}
                    créations ?
                  </span>
                </h2>

                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Chaque œuvre est unique et ne peut être reproduite à
                  l&apos;identique. Cependant, nous pouvons créer quelque chose
                  d&apos;uniquement vôtre dans le même esprit.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Style Similaire
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nous pouvons nous inspirer du style et de l&apos;énergie
                      qui vous touchent le plus.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Personnalisation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Adaptation complète à vos goûts, votre espace et votre
                      énergie personnelle.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Exclusivité
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Votre œuvre sera tout aussi unique et portera votre
                      signature énergétique.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/portrait-d-ame/commande"
                  className="group bg-gradient-to-r from-rose-500 to-amber-500 text-white px-10 py-5 rounded-full hover:from-rose-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-medium"
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
                    <span>Discuter d&apos;un projet personnalisé</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
              Ce que disent nos
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                {" "}
                collectionneurs
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
    </div>
  );
}
