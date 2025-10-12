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
    <section className="py-20 bg-gradient-to-br from-emerald-50/50 via-teal-50/50 to-cyan-50/50 relative overflow-hidden">
      {/* Patterns décoratifs améliorés */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-1000"></div>
      </div>

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

            {/* Points clés avec glassmorphism */}
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-5 border border-emerald-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
                    <TreePine className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Introspection
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      Un questionnaire pour revisiter vos expériences, vos défis
                      et vos aspirations profondes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-teal-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Connexion intuitive
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      Un échange subtil qui permet de capter l&apos;essence de
                      votre parcours de vie.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-cyan-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Création Méditative
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      Votre essence inspire couleurs et symboles, donnant
                      naissance à une cartographie spirituelle unique.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-purple-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-purple group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Révélation & Transmission
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      Votre tableau vous est remis comme une création unique,
                      accompagnée d&apos;une lecture symbolique claire et
                      accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA amélioré */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tableau-de-vie"
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full shadow-glow-blue hover:shadow-spiritual transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-base font-medium inline-flex items-center justify-center space-x-2 btn-spiritual overflow-hidden"
              >
                <Compass className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Découvrir</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <Link
                href="/tableau-de-vie/commande"
                className="group glass-card border-2 border-emerald-300 text-emerald-700 hover:border-emerald-400 px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-base font-medium shadow-elegant hover:shadow-spiritual inline-flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Commander</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
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

        {/* Description complète améliorée */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-12 border border-emerald-200/50 shadow-spiritual max-w-4xl mx-auto hover-lift transition-all duration-500 group">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-blue group-hover:scale-110 transition-transform duration-500">
              <Compass className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-playfair font-semibold text-gray-800 mb-6">
              Le Tableau de Vie Spirituel
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-crimson text-lg">
              Le Tableau de Vie Spirituel est une œuvre intime, un miroir sacré
              qui reflète la danse de votre chemin intérieur. À travers un
              questionnaire pensé comme une invitation à l&apos;introspection,
              vous ouvrez la porte à vos souvenirs, vos défis, vos rêves et vos
              aspirations profondes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 font-crimson text-lg">
              De ces confidences naît une alchimie : je me relie à votre essence
              et, guidée par l&apos;intuition, je laisse émerger des couleurs,
              des formes et des symboles porteurs de sens. Chaque geste traduit
              une étape, une force, une lumière de votre histoire.
            </p>
            <p className="text-gray-600 leading-relaxed font-crimson text-lg">
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
