"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

export default function AttrapesRevesPage() {
  // Refs pour les animations
  const philosophyRef = useRef(null);
  const galleryRef = useRef(null);
  const questionnaireRef = useRef(null);

  // InView hooks
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const questionnaireInView = useInView(questionnaireRef, { once: true, margin: "-100px" });

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
      <section ref={philosophyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={philosophyInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-teal-100 rounded-full px-6 py-2 mb-6"
            >
              <TreePine className="w-5 h-5 text-teal-600" />
              <span className="text-teal-800 font-medium text-sm">
                Art Ancestral Revisité
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6"
            >
              L&apos;essence de nos
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                créations
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson"
            >
              Chaque attrape-rêves naît d&apos;une méditation profonde et porte
              une intention particulière pour votre protection et bien-être.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-center"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-center"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="text-center"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Galerie d&apos;Attrape-Rêves Uniques */}
      <section
        ref={galleryRef}
        id="creations"
        className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={galleryInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-2 mb-6"
            >
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium text-sm">
                Créations Uniques
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
            >
              Nos
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                attrape-rêves uniques
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Créations artisanales uniques qui protègent vos nuits et filtrent
              les énergies négatives pour des rêves apaisants.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Partagez-nous vos souhaits et créons ensemble
                l&apos;attrape-rêves qui vous ressemble.
              </p>

              <Link
                href="#questionnaire"
                className="group bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium inline-flex items-center justify-center space-x-2"
              >
                <Palette className="w-5 h-5" />
                <span>Commander le mien</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Questionnaire */}
      <section ref={questionnaireRef} id="questionnaire" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={questionnaireInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6"
              >
                <MessageCircle className="w-5 h-5 text-purple-600" />
                <span className="text-purple-800 font-medium text-sm">
                  Questionnaire Personnalisé
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={questionnaireInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
              >
                Créons ensemble votre
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  attrape-rêves unique
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={questionnaireInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Partagez-nous vos souhaits et vos intentions pour que nous
                puissions créer l&apos;attrape-rêves qui vous correspond
                parfaitement.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={questionnaireInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 shadow-lg"
            >
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
                    Décrivez-nous votre projet d&apos;attrape-rêves *
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
                    <p>
                      • <strong>Étape 1</strong> : Vous nous envoyez votre
                      demande
                    </p>
                    <p>
                      • <strong>Étape 2</strong> : Nous vous recontactons pour
                      discuter des détails
                    </p>
                    <p>
                      • <strong>Étape 3</strong> : Création de votre
                      attrape-rêves unique (2-3 semaines)
                    </p>
                    <p>
                      • <strong>Étape 4</strong> : Livraison offerte avec guide
                      d&apos;utilisation
                    </p>
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
                    Nous vous recontacterons sous 24h pour discuter de votre
                    projet
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
