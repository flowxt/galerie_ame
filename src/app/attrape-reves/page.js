import Link from "next/link";
import Image from "next/image";

import {
  Sparkles,
  Heart,
  Moon,
  ArrowRight,
  Star,
  Feather,
  Shield,
  TreePine,
  MessageCircle,
  Palette,
  Clock,
  CheckCircle,
} from "lucide-react";
import { getDreamCatchers } from "../../lib/sanity-queries";
import ArtworkCard from "../../components/ArtworkCard";

export default async function AttrapesRevesPage() {
  const dreamCatchers = await getDreamCatchers();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/attrape-reve-bleu.jpg"
            alt="Attrape-rêves artisanal bleu"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
        </div>

        {/* Éléments spirituels flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-white/30 animate-float">
            <Moon className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-blue-300/40 animate-float animation-delay-700">
            <Feather className="w-5 h-5" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-teal-300/30 animate-float animation-delay-1000">
            <Star className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Moon className="w-4 h-4 text-blue-300" />
            <span className="text-white text-sm font-medium">
              Créations artisanales protectrices
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent font-medium">
              Attrape-rêves artisanaux
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson">
            Protégez vos plus beaux songes avec nos créations artisanales
            uniques. Chaque attrape-rêves est confectionné à la main avec
            intention et matériaux naturels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#creations"
              className="group bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <span className="flex items-center space-x-2">
                <Moon className="w-5 h-5" />
                <span>Découvrir les Créations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/contact"
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

      {/* Section Philosophie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-100 rounded-full px-6 py-2 mb-6">
              <TreePine className="w-5 h-5 text-teal-600" />
              <span className="text-teal-800 font-medium text-sm">
                Art Ancestral Revisité
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
              L&apos;essence de nos
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                créations
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
              Chaque attrape-rêves naît d&apos;une méditation profonde et porte
              une intention particulière pour votre protection et bien-être.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Feather className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Matériaux Naturels
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Plumes authentiques, perles de bois naturel, fils de coton
                  biologique et éléments récoltés en conscience et respect.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-teal-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Création Intuitive
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Chaque attrape-rêves naît d&apos;une méditation profonde et
                  porte une énergie particulière pour votre protection
                  spirituelle.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Pièces Uniques
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aucune reproduction possible - chaque création est une œuvre
                  d&apos;art unique qui vous accompagne dans vos rêves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie d'Attrape-Rêves Uniques */}
      <section
        id="creations"
        className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium text-sm">
                Créations Uniques
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Nos
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                attrape-rêves uniques
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Chaque attrape-rêves présenté ici est une pièce unique créée avec intention. 
              Ils ne sont pas disponibles à la vente mais peuvent vous inspirer pour votre propre création personnalisée.
            </p>
          </div>

          {/* Galerie d'inspiration */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square relative">
                <Image
                  src="/images/attrape-reve-bleu.jpg"
                  alt="Attrape-rêves bleu unique"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Attrape-Rêves Océan</p>
                    <p className="text-xs opacity-90">Protection des eaux profondes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square relative">
                <Image
                  src="/images/attrape-reve-plume.jpg"
                  alt="Attrape-rêves aux plumes naturelles"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Attrape-Rêves Naturel</p>
                    <p className="text-xs opacity-90">Connexion aux éléments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square relative">
                <Image
                  src="/images/vero-attrape-reve.jpg"
                  alt="Attrape-rêves artisanal unique"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Attrape-Rêves Spirituel</p>
                    <p className="text-xs opacity-90">Énergie de protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ces créations vous inspirent ? Partagez-nous vos souhaits et créons ensemble 
              l'attrape-rêves qui vous ressemble.
            </p>
            
            <Link
              href="#questionnaire"
              className="group bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-base font-medium inline-flex items-center justify-center space-x-2"
            >
              <Palette className="w-4 h-4" />
              <span>Commander le mien</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Questionnaire */}
      <section id="questionnaire" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
                <MessageCircle className="w-5 h-5 text-purple-600" />
                <span className="text-purple-800 font-medium text-sm">
                  Questionnaire Personnalisé
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Créons ensemble votre
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  attrape-rêves unique
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Partagez-nous vos souhaits et vos intentions pour que nous puissions créer l'attrape-rêves qui vous correspond parfaitement.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 shadow-lg">
              <form className="space-y-6">
                {/* Informations de contact */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre prénom *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                {/* Message simple */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez-nous votre projet d'attrape-rêves *
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Partagez-nous vos souhaits : intentions, couleurs préférées, taille souhaitée, où il sera placé, éléments particuliers..."
                  ></textarea>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-blue-200">
                  <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Comment ça se passe ?
                  </h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• <strong>Étape 1</strong> : Vous nous envoyez votre demande</p>
                    <p>• <strong>Étape 2</strong> : Nous vous recontactons pour discuter des détails</p>
                    <p>• <strong>Étape 3</strong> : Création de votre attrape-rêves unique (2-3 semaines)</p>
                    <p>• <strong>Étape 4</strong> : Livraison offerte avec guide d'utilisation</p>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-medium"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Moon className="w-5 h-5" />
                      <span>Envoyer ma demande</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    Nous vous recontacterons sous 24h pour discuter de votre projet
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-2 mb-6">
              <Heart className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium text-sm">
                Témoignages
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              L&apos;expérience de nos
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                clients
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                &quot;Mon attrape-rêves est magnifique ! Depuis que je l&apos;ai
                installé, mes nuits sont plus paisibles et mes rêves plus
                inspirants. Une création qui porte vraiment une belle
                énergie.&quot;
              </blockquote>

              <div className="text-center">
                <cite className="text-gray-600 font-medium">- Sarah M.</cite>
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
                &quot;Une création sur mesure qui dépasse toutes mes attentes.
                L&apos;artiste a vraiment capturé l&apos;essence de ma demande
                et créé quelque chose d&apos;unique et de puissant.&quot;
              </blockquote>

              <div className="text-center">
                <cite className="text-gray-600 font-medium">- Thomas L.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
