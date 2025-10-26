"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Eye,
  ArrowRight,
  Brush,
  Star,
  Gift,
  Archive,
  CheckCircle,
  Award,
  Stamp,
  Truck,
  ShieldCheck,
  Moon,
  Palette,
  Camera,
} from "lucide-react";
import PortraitOrderButton from "../../components/PortraitOrderButton";
import { Vortex } from "../../components/ui/Vortex";

export default function PortraitDame() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond - Portrait d&apos;âme */}
        <div className="absolute inset-0">
          <Image
            src="/images/portrait-dame.jpg"
            alt="Portrait d'âme spirituel créé par l'Atelier Art'âme"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>

        {/* Éléments spirituels flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-white/20 animate-float">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-purple-300/30 animate-float animation-delay-700">
            <Star className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-pink-300/20 animate-float animation-delay-1000">
            <Heart className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-rose-300" />
            <span className="text-white text-sm font-medium">
              Art spirituel personnalisé
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent font-medium">
              Portraits d&apos;âme spirituels
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson">
            Révélez votre essence profonde à travers l&apos;art spirituel.
            Chaque portrait capture votre beauté intérieure et accompagne votre
            évolution personnelle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PortraitOrderButton />
            <Link
              href="/boutique"
              className="group bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Voir les Œuvres</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Qu&apos;est-ce qu&apos;un Portrait d&apos;Âme */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-rose-50/30 to-purple-50/30">
        {/* Éléments décoratifs spirituels en arrière-plan */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-rose-200/40 animate-float">
            <Sparkles className="w-16 h-16" />
          </div>
          <div className="absolute bottom-32 right-20 text-purple-200/40 animate-float animation-delay-700">
            <Star className="w-20 h-20" />
          </div>
          <div className="absolute top-1/2 left-1/4 text-pink-200/30 animate-float animation-delay-1000">
            <Heart className="w-12 h-12" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-purple-200/30 animate-float">
            <Moon className="w-14 h-14" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* En-tête de section centré */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 backdrop-blur-sm border border-rose-200/50 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-rose-600" />
              <span className="text-gray-800 text-sm font-semibold">
                Découvrez l&apos;Art de l&apos;Âme
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-playfair font-light text-gray-800 mb-8 leading-tight">
              Qu&apos;est-ce qu&apos;un
              <span className="block mt-2 bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
                Portrait d&apos;Âme
              </span>
              ?
            </h2>

            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-crimson">
              Un portrait d&apos;âme va bien au-delà de la simple représentation
              physique. C&apos;est une exploration artistique profonde qui capture
              l&apos;essence unique de votre être, vos émotions cachées et votre
              personnalité authentique à travers l&apos;art spirituel.
            </p>
          </div>

          {/* Grille principale avec images et caractéristiques */}
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center max-w-7xl mx-auto mb-20">
            {/* Colonne gauche : Galerie artistique */}
            <div className="relative order-2 lg:order-1">
              <div className="relative grid grid-cols-2 gap-6">
                {/* Grande image principale */}
                <div className="col-span-2 group">
                  <div className="relative bg-gradient-to-br from-rose-100 via-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src="/images/portrait-dame2.jpg"
                        alt="Portrait d'âme spirituel - Création unique"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-2xl transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      <div className="absolute bottom-8 left-8 right-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                            <Sparkles className="w-6 h-6 text-rose-300" />
                          </div>
                          <span className="font-semibold text-2xl drop-shadow-lg">
                            Portrait d&apos;Âme
                          </span>
                        </div>
                        <p className="text-rose-100 text-base drop-shadow-md">
                          Votre essence révélée par l&apos;art
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deuxième image - plus petite */}
                <div className="group">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-4 shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                    <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src="/images/vie-3.jpeg"
                        alt="Portrait d'âme spirituel - Détail"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    </div>
                  </div>
                </div>

                {/* Badge créations uniques */}
                <div className="flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md border-2 border-rose-200 rounded-2xl p-6 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Palette className="w-10 h-10 text-rose-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-800 text-lg mb-1">
                      Créations
                    </p>
                    <p className="text-rose-600 font-bold text-xl">Uniques</p>
                  </div>
                </div>
              </div>

              {/* Badge flottant */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-2xl text-base font-bold shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                ✨ Art Spirituel
              </div>
            </div>

            {/* Colonne droite : Caractéristiques */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Vision Spirituelle */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border-2 border-rose-100 shadow-xl hover:shadow-2xl hover:border-rose-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-playfair">
                      Vision Spirituelle
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Révèle des aspects cachés de votre personnalité et de votre
                      chemin de vie à travers des symboles profonds et des couleurs
                      intuitives porteuses de sens.
                    </p>
                  </div>
                </div>
              </div>

              {/* Création Méditative */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border-2 border-purple-100 shadow-xl hover:shadow-2xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Brush className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-playfair">
                      Création Méditative
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Chaque trait naît d&apos;un état méditatif profond,
                      permettant à votre essence authentique de s&apos;exprimer
                      naturellement et librement sur la toile.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accompagnement Personnel */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border-2 border-blue-100 shadow-xl hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-playfair">
                      Accompagnement Personnel
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Votre portrait devient un miroir sacré de votre âme, vous
                      accompagnant avec douceur dans votre développement personnel
                      et votre découverte de soi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bande de citation inspirante */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-lg border border-white/50 rounded-3xl p-12 shadow-2xl text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-rose-500 to-purple-500 p-4 rounded-full">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic mb-6 leading-relaxed font-crimson">
                &ldquo;Chaque portrait d&apos;âme est une fenêtre ouverte sur
                l&apos;invisible, une célébration de votre lumière intérieure et de
                votre chemin unique.&rdquo;
              </blockquote>
              <p className="text-gray-600 font-medium text-lg">
                - Véronique, Artiste spirituelle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus Créatif */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
              <Brush className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium text-sm">
                Processus Créatif
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Le Voyage de Votre
              <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                {" "}
                Portrait d&apos;Âme
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un processus en trois étapes qui honore votre unicité et révèle la
              beauté profonde de votre être intérieur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Connexion Spirituelle
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dans un espace sacré et bienveillant, je me relie à votre
                  essence et aux énergies qui vous habitent. Ce temps de
                  connexion intérieure ouvre la voie à la création de votre
                  portrait d&apos;âme.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Création Méditative
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  En état méditatif, je laisse les couleurs, les formes et les
                  symboles émerger spontanément. Votre âme se révèle alors dans
                  une œuvre intuitive et unique.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Révélation & Transmission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Votre portrait vous est remis avec une lecture des symboles et
                  des énergies qui se sont manifestés au cours de la création.
                  Une invitation à contempler et à vous reconnecter à votre être
                  profond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Inclusions & Authenticité */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-6 py-2 mb-6">
              <Gift className="w-5 h-5 text-amber-600" />
              <span className="text-amber-800 font-medium text-sm">
                Inclusions Premium
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
              Votre portrait d&apos;âme
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {" "}
                complet
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
              Chaque portrait d&apos;âme est accompagné d&apos;éléments
              exclusifs qui enrichissent votre expérience spirituelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Clé USB & Contenu Digital */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Archive className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Clé USB Spirituelle
                  </h3>
                  <p className="text-amber-600 font-medium">
                    Contenu exclusif inclus
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Éléments du portrait
                    </p>
                    <p className="text-sm text-gray-600">
                      Détail de chaque symbole, couleur et forme utilisés dans
                      votre création
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Significations profondes
                    </p>
                    <p className="text-sm text-gray-600">
                      Interprétation spirituelle et symbolique de votre portrait
                      d&apos;âme
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Étapes de création
                    </p>
                    <p className="text-sm text-gray-600">
                      Processus méditatif et énergétique de votre portrait
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Rituel d&apos;accueil
                    </p>
                    <p className="text-sm text-gray-600">
                      Guide pour recevoir et intégrer l&apos;énergie de votre
                      portrait
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificat & Garanties */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Certificat d&apos;Authenticité
                  </h3>
                  <p className="text-orange-600 font-medium">
                    Pièce unique certifiée
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Stamp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Authenticité garantie
                    </p>
                    <p className="text-sm text-gray-600">
                      Certificat officiel attestant de l&apos;unicité de votre
                      œuvre
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Livraison sécurisée
                    </p>
                    <p className="text-sm text-gray-600">
                      Envoi soigné et gratuit partout en France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Suivi personnalisé
                    </p>
                    <p className="text-sm text-gray-600">
                      Accompagnement dédié tout au long du processus
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Satisfaction garantie
                    </p>
                    <p className="text-sm text-gray-600">
                      Engagement qualité sur chaque création d&apos;âme
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-sm max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Une expérience complète et authentique
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Votre portrait d&apos;âme est bien plus qu&apos;une œuvre
                d&apos;art : c&apos;est un voyage spirituel documenté et
                accompagné, livré avec tout ce qui vous permettra de comprendre
                et d&apos;intégrer pleinement votre création d&apos;âme.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Livraison offerte</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Contenu exclusif inclus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Certificat d&apos;authenticité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Suivi personnalisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Questions
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Fréquentes
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Combien de temps prend la création d&apos;un portrait d&apos;âme
                ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Le processus complet d&apos;un Portrait d&apos;Âme s&apos;étend
                généralement sur 3 à 4 semaines. Ce temps inclut la consultation
                initiale, la connexion intuitive, la création méditative ainsi
                que la préparation d&apos;un contenu qui documente
                l&apos;ensemble du travail réalisé autour de votre œuvre. Chaque
                création suit son propre rythme : ce délai, indicatif, peut
                évoluer afin de respecter pleinement le processus naturel et
                d&apos;honorer l&apos;émergence juste et authentique de votre
                portrait.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Faut-il poser physiquement pour le portrait ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Non. Le Portrait d&apos;Âme ne cherche pas à reproduire vos
                traits mais à révéler votre essence. Un court échange et, si
                nécessaire, quelques photos suffisent pour que je capte votre
                énergie et la transpose en couleurs, formes et symboles.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quels matériaux et techniques sont utilisés ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Les Portraits d&apos;Âme sont principalement réalisés à
                l&apos;acrylique sur toile, pour offrir intensité et profondeur
                aux couleurs. Selon l&apos;inspiration, j&apos;explore aussi
                d&apos;autres médiums comme l&apos;aquarelle ou les pastels, et
                j&apos;intègre parfois des éléments naturels tels que le bois,
                les pierres, les végétaux pour enrichir l&apos;œuvre de leur
                vibration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-2 mb-6">
                <Palette className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800 font-medium text-sm">
                  Tarifs Portraits d&apos;Âme
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Investissement pour votre
                <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Portrait d&apos;Âme
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Chaque œuvre est créée avec amour et intention, incluant
                consultation personnalisée et accompagnement complet.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Format 30x40cm */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-rose-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Brush className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Format Intime
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-rose-600 mb-2">
                      240€
                    </div>
                    <div className="text-gray-600 text-lg">30 x 40 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                      15-20h de travail
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                      Création méditative unique
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                      Explication des symboles
                    </li>
                  </ul>
                </div>
              </div>

              {/* Format 50x70cm */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Le plus choisi
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Format Élégant
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      340€
                    </div>
                    <div className="text-gray-600 text-lg">50 x 70 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      20-25h de travail
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      Création méditative unique
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      Explication des symboles
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      Format idéal pour décoration
                    </li>
                  </ul>
                </div>
              </div>

              {/* Duo 60x80cm */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Format Duo
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      500€
                    </div>
                    <div className="text-gray-600 text-lg">60 x 80 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      30-40h de travail
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      Portrait de couple
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      Création méditative unique
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      Format grand impact
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Note personnalisée */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Palette className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Demande Spéciale ?
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vous souhaitez un format différent, des dimensions spécifiques
                ou avez une demande particulière ?
                <br />
                Contactez-nous pour un devis personnalisé adapté à vos besoins.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 rounded-full hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                <span>Demande personnalisée</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Prêt à Découvrir Votre Essence ?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Commencez votre voyage vers la découverte de votre âme véritable à
              travers l&apos;art spirituel personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PortraitOrderButton />
              <Link
                href="/contact"
                className="group bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Poser une Question</span>
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
