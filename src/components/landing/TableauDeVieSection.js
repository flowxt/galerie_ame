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
                Une œuvre unique co-créée avec vous. À partir de vos expériences
                et de mon approche intuitive, il révèle les symboles et les
                couleurs qui reflètent votre chemin intérieur.
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
                    Introspection
                  </h3>
                  <p className="text-gray-600">
                    Un questionnaire pour revisiter vos expériences, vos défis
                    et vos aspirations profondes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Connexion intuitive
                  </h3>
                  <p className="text-gray-600">
                    Un échange subtil qui permet de capter l&apos;essence de
                    votre parcours de vie.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Création Méditative
                  </h3>
                  <p className="text-gray-600">
                    Votre essence inspire couleurs et symboles, donnant
                    naissance à une cartographie spirituelle unique.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Révélation & Transmission
                  </h3>
                  <p className="text-gray-600">
                    Votre tableau vous est remis comme une création unique,
                    accompagnée d&apos;une lecture symbolique claire et
                    accessible.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tableau-de-vie"
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-base font-medium inline-flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4" />
                <span>Découvrir</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tableau-de-vie/commande"
                className="group bg-white/80 backdrop-blur-sm border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-base font-medium shadow-sm inline-flex items-center justify-center space-x-2"
              >
                <Heart className="w-4 h-4" />
                <span>Commander</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image d'un questionnaire ou placeholder */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md">
              <div className="aspect-[4/5] relative bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Questionnaire Introspectif
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Un voyage au cœur de votre être pour révéler votre essence
                    unique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description complète */}
        <div className="mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Le Tableau de Vie Spirituel
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le Tableau de Vie Spirituel est une œuvre intime, un miroir sacré
              qui reflète la danse de votre chemin intérieur. À travers un
              questionnaire pensé comme une invitation à l&apos;introspection,
              vous ouvrez la porte à vos souvenirs, vos défis, vos rêves et vos
              aspirations profondes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              De ces confidences naît une alchimie : je me relie à votre essence
              et, guidée par l&apos;intuition, je laisse émerger des couleurs,
              des formes et des symboles porteurs de sens. Chaque geste traduit
              une étape, une force, une lumière de votre histoire.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ainsi s&apos;ancre une création unique et vivante, co-créée avec
              vous. Un tableau qui vous accompagne comme un compagnon
              d&apos;âme, vous inspire dans vos élans, et vous relie à la beauté
              de votre parcours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
