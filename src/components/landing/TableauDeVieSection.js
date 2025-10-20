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
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TableauDeVieSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50/50 via-violet-50/50 to-orange-50/50 relative overflow-hidden">
      {/* Patterns décoratifs améliorés */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-2 mb-6">
                <Compass className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium text-sm">
                  Nouveau Service
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6 leading-tight">
                Tableaux de vie
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-medium">
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
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card rounded-2xl p-5 border border-blue-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card rounded-2xl p-5 border border-violet-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-purple group-hover:scale-110 transition-transform duration-300">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card rounded-2xl p-5 border border-orange-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass-card rounded-2xl p-5 border border-indigo-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-purple group-hover:scale-110 transition-transform duration-300">
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
              </motion.div>
            </div>

            {/* CTA amélioré */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/tableau-de-vie"
                className="group bg-gradient-to-r from-blue-500 to-violet-500 text-white px-8 py-4 rounded-full shadow-glow-blue hover:shadow-glow-purple transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-base font-medium inline-flex items-center justify-center space-x-2 btn-spiritual overflow-hidden"
              >
                <Compass className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Découvrir</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <Link
                href="/tableau-de-vie/commande"
                className="group glass-card border-2 border-orange-300 text-orange-700 hover:border-orange-400 px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-base font-medium shadow-elegant hover:shadow-spiritual inline-flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Commander</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Galerie avec les photos et le questionnaire */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Photos des tableaux de vie */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative rounded-3xl overflow-hidden shadow-spiritual hover-lift transition-all duration-500">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/vie-1.jpeg"
                    alt="Tableau de vie spirituel - Exemple 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-spiritual hover-lift transition-all duration-500">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/vie-2.jpeg"
                    alt="Tableau de vie spirituel - Exemple 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Questionnaire introspectif */}
            <div className="flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-spiritual max-w-md hover-lift transition-all duration-500">
                <div className="aspect-[4/5] relative bg-gradient-to-br from-blue-100 via-violet-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="bg-gradient-to-br from-blue-500 to-violet-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-blue">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">
                      Questionnaire Introspectif
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-crimson">
                      Un voyage au cœur de votre être pour révéler votre essence
                      unique
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
