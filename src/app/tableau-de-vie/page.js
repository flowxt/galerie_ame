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
  Moon,
  Palette,
  Camera,
  TreePine,
  Compass,
  Gift,
  Archive,
  CheckCircle,
  Award,
  Stamp,
  Truck,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export default function TableauDeVie() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/art.jpg"
            alt="Tableau de vie spirituel créé par l'Atelier Art'âme"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
        </div>

        {/* Éléments spirituels flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-white/20 animate-float">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-teal-300/30 animate-float animation-delay-700">
            <Star className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-blue-300/20 animate-float animation-delay-1000">
            <Heart className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Compass className="w-4 h-4 text-teal-300" />
            <span className="text-white text-sm font-medium">
              Cartographie de votre essence
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent font-medium">
              Tableaux de vie spirituels
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson">
            Explorez les méandres de votre existence à travers une création
            artistique unique qui révèle votre parcours, vos défis et vos
            aspirations les plus profondes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/tableau-de-vie/commande"
              className="group bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <span className="flex items-center space-x-2">
                <Compass className="w-5 h-5" />
                <span>Commander mon Tableau de Vie</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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

      {/* Section Qu&apos;est-ce qu&apos;un Tableau de Vie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image du tableau de vie */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/vero-realisation.jpg"
                    alt="Tableau de vie spirituel réalisé par Véronique"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Compass className="w-5 h-5 text-teal-300" />
                      <span className="font-semibold text-lg">
                        Tableau de Vie
                      </span>
                    </div>
                    <p className="text-teal-100 text-sm">
                      Cartographie spirituelle par Véronique
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
                Unique
              </div>
            </div>

            {/* Explication */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-light text-gray-800 mb-6">
                  Qu&apos;est-ce qu&apos;un
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Tableau de Vie
                  </span>{" "}
                  ?
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 font-crimson">
                  Un tableau de vie est une exploration artistique complète de
                  votre parcours existentiel. Cette création révèle les moments
                  clés, les défis surmontés, les leçons apprises et les
                  aspirations qui dessinent la carte unique de votre existence.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-2 rounded-xl">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Exploration Profonde
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Révèle votre histoire personnelle, vos valeurs fondamentales
                    et les événements qui ont façonné votre identité actuelle.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl">
                      <Compass className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Navigation Existentielle
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Cartographie vos défis actuels, vos aspirations futures et
                    les ressources intérieures pour naviguer votre chemin de
                    vie.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-xl">
                      <TreePine className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Croissance Continue
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Accompagne votre évolution personnelle en révélant les
                    patterns récurrents et les opportunités de transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus Créatif */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-100 rounded-full px-6 py-2 mb-6">
              <Brush className="w-5 h-5 text-teal-600" />
              <span className="text-teal-800 font-medium text-sm">
                Processus Créatif
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Le Voyage de Votre
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Tableau de Vie
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un processus approfondi en quatre étapes qui honore la complexité
              et la richesse de votre parcours existentiel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Exploration Biographique
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Questionnaire approfondi sur votre parcours, vos valeurs, vos
                  défis et vos aspirations les plus profondes.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Consultation Intuitive
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Échange personnel pour approfondir votre histoire et
                  identifier les thèmes centraux de votre existence.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Création Méditative
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Réalisation artistique en état méditatif, laissant votre
                  essence guider la création de votre cartographie spirituelle.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Transmission & Intégration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Explication détaillée des symboles et guidance pour intégrer
                  les révélations dans votre évolution personnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-6 py-3 mb-6">
              <Camera className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-800 font-medium">Galerie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
              Tableaux de vie
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-medium">
                {" "}
                réalisés
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
              Découvrez quelques créations qui ont révélé la cartographie
              spirituelle de leurs propriétaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/vero-realisation.jpg"
                  alt="Tableau de vie - Cartographie spirituelle"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Tableau de Vie</p>
                    <p className="text-xs opacity-90">
                      Cartographie existentielle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/vero-portrait2.jpg"
                  alt="Tableau de vie - Évolution personnelle"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Tableau de Vie</p>
                    <p className="text-xs opacity-90">
                      Chemin d&apos;évolution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/regard-vero.jpg"
                  alt="Tableau de vie - Essence révélée"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Tableau de Vie</p>
                    <p className="text-xs opacity-90">Regard intérieur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Inclusions & Authenticité */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-6 py-2 mb-6">
              <Gift className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-800 font-medium text-sm">
                Inclusions Premium
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
              Votre tableau de vie
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                complet
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
              Chaque tableau de vie est accompagné d&apos;éléments exclusifs qui
              enrichissent votre compréhension spirituelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Clé USB & Contenu Digital */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Archive className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Clé USB Spirituelle
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    Contenu exclusif inclus
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Éléments du tableau
                    </p>
                    <p className="text-sm text-gray-600">
                      Détail de chaque symbole, couleur et énergie présents dans
                      votre tableau de vie
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Significations spirituelles
                    </p>
                    <p className="text-sm text-gray-600">
                      Interprétation énergétique et symbolique de votre parcours
                      de vie
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Processus créatif
                    </p>
                    <p className="text-sm text-gray-600">
                      Étapes de channeling et de création intuitive de votre
                      tableau
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Guide d&apos;intégration
                    </p>
                    <p className="text-sm text-gray-600">
                      Conseils pour accueillir et travailler avec l&apos;énergie
                      de votre tableau
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificat & Garanties */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-teal-200/50 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Certificat d&apos;Authenticité
                  </h3>
                  <p className="text-teal-600 font-medium">
                    Création unique certifiée
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Stamp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Authenticité garantie
                    </p>
                    <p className="text-sm text-gray-600">
                      Certificat officiel attestant du caractère unique de votre
                      tableau
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Accompagnement dédié
                    </p>
                    <p className="text-sm text-gray-600">
                      Suivi personnalisé tout au long de votre parcours
                      spirituel
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Qualité spirituelle
                    </p>
                    <p className="text-sm text-gray-600">
                      Engagement sur l&apos;authenticité de chaque création
                      intuitive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50 shadow-sm max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Une expérience spirituelle documentée
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Votre tableau de vie transcende la simple œuvre d&apos;art :
                c&apos;est une carte spirituelle de votre âme, accompagnée de
                tous les éléments pour comprendre et intégrer ses messages
                profonds.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Livraison offerte</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Contenu spirituel inclus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Certificat d&apos;authenticité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Accompagnement dédié</span>
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
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Fréquentes
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quelle est la différence entre un Portrait d&apos;Âme et un
                Tableau de Vie ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Le Portrait d&apos;Âme révèle votre essence profonde à un moment
                donné, tandis que le Tableau de Vie explore votre parcours
                complet : passé, présent et aspirations futures. C'est une
                cartographie plus complète de votre existence.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Combien de temps prend la création d&apos;un Tableau de Vie ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Le processus complet s&apos;étend sur 4 à 6 semaines, incluant
                le questionnaire approfondi, la consultation personnalisée, la
                création méditative et la transmission des enseignements. Ce
                délai permet une exploration en profondeur.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Comment se déroule la consultation personnalisée ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                La consultation peut se faire par visioconférence, téléphone ou
                en personne selon vos préférences. C&apos;est un moment
                d&apos;échange profond où nous explorons ensemble les thèmes
                centraux de votre existence pour guider la création.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Prêt à Explorer Votre Parcours ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Entamez ce voyage vers la découverte de votre cartographie
              existentielle unique et révélez les trésors cachés de votre
              histoire personnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tableau-de-vie/commande"
                className="group bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Compass className="w-5 h-5" />
                  <span>Commander mon Tableau de Vie</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
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
