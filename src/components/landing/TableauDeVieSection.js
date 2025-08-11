"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  TreePine,
  Sparkles,
  ArrowRight,
  Heart,
  Eye,
  BookOpen,
} from "lucide-react";

export default function TableauDeVieSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-300/20 to-transparent rounded-full -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-teal-300/20 to-transparent rounded-full translate-x-30 translate-y-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-6 py-2 mb-6">
                <Compass className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800 font-medium text-sm">
                  Nouveau Service
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6 leading-tight">
                Tableaux de vie
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
                  {" "}
                  spirituels
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed font-crimson mb-8">
                Découvrez votre parcours d&apos;âme à travers une création 
                intuitive qui révèle les énergies, les leçons et les potentiels 
                de votre chemin de vie.
              </p>
            </div>

            {/* Points clés */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Analyse énergétique complète
                  </h3>
                  <p className="text-gray-600">
                    Exploration approfondie de votre essence, vos défis, vos aspirations 
                    et votre mission d&apos;âme.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Création intuitive guidée
                  </h3>
                  <p className="text-gray-600">
                    Œuvre channelée qui transcrit visuellement les informations 
                    reçues lors de votre consultation spirituelle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Guide spirituel inclus
                  </h3>
                  <p className="text-gray-600">
                    Documentation complète avec significations, interprétations 
                    et conseils pour votre évolution personnelle.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tableau-de-vie"
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium inline-flex items-center justify-center space-x-2"
              >
                <Compass className="w-5 h-5" />
                <span>Découvrir les Tableaux de Vie</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tableau-de-vie/commande"
                className="group bg-white/80 backdrop-blur-sm border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm inline-flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Commander le mien</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Galerie d'images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/vero-portrait.jpg"
                    alt="Tableau de vie spirituel - Énergie féminine"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Essence Spirituelle</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Sparkles className="w-3 h-3" />
                        <span className="text-xs">Énergie révélée</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square relative">
                  <Image
                    src="/images/vero-realisation.jpg"
                    alt="Processus de création d'un tableau de vie"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Création Intuitive</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <TreePine className="w-3 h-3" />
                        <span className="text-xs">Processus méditatif</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square relative">
                  <Image
                    src="/images/vero-portrait2.jpg"
                    alt="Tableau de vie - Parcours d'âme révélé"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Parcours d&apos;Âme</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Compass className="w-3 h-3" />
                        <span className="text-xs">Mission révélée</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/regard-vero.jpg"
                    alt="Regard spirituel - Connexion profonde"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Connexion Profonde</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Eye className="w-3 h-3" />
                        <span className="text-xs">Vision spirituelle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section informative */}
        <div className="mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Une nouvelle approche spirituelle
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Les Tableaux de Vie représentent l&apos;évolution naturelle de notre approche artistique. 
              Ils offrent une perspective plus large sur votre parcours spirituel, intégrant les 
              différentes phases de votre évolution et les leçons de votre âme.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="font-medium text-gray-800">Questionnaire approfondi</p>
                <p className="text-gray-600 text-xs mt-1">Exploration complète de votre être</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="font-medium text-gray-800">Création channelée</p>
                <p className="text-gray-600 text-xs mt-1">4-6 semaines de processus intuitif</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="font-medium text-gray-800">Guide complet</p>
                <p className="text-gray-600 text-xs mt-1">Clé USB + certificat d&apos;authenticité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
