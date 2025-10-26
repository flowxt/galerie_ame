"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  // Refs pour les animations
  const explanationRef = useRef(null);
  const processRef = useRef(null);
  const inclusionsRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  // InView hooks
  const explanationInView = useInView(explanationRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const inclusionsInView = useInView(inclusionsRef, { once: true, margin: "-100px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/tableauvie1.jpeg"
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
          <div className="absolute bottom-1/3 right-1/4 text-orange-300/30 animate-float animation-delay-700">
            <Star className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-purple-300/20 animate-float animation-delay-1000">
            <Heart className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Compass className="w-4 h-4 text-orange-300" />
            <span className="text-white text-sm font-medium">
              Cartographie de votre essence
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-orange-300 via-purple-300 to-blue-300 bg-clip-text text-transparent font-medium">
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
              className="group bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
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
      <section ref={explanationRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image du tableau de vie */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={explanationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-100 via-purple-100 to-blue-100 rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/tableauvie2.jpeg"
                    alt="Tableau de vie spirituel réalisé par Véronique"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Compass className="w-5 h-5 text-orange-300" />
                      <span className="font-semibold text-lg">
                        Tableau de Vie
                      </span>
                    </div>
                    <p className="text-orange-100 text-sm">
                      Cartographie spirituelle par Véronique
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
                Unique
              </div>
            </motion.div>

            {/* Explication */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={explanationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-light text-gray-800 mb-6">
                  Le Tableau de Vie
                  <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Spirituel
                  </span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 font-crimson">
                  Le Tableau de Vie Spirituel est une œuvre intime, un miroir
                  sacré qui reflète la danse de votre chemin intérieur. À
                  travers un questionnaire pensé comme une invitation à
                  l&apos;introspection, vous ouvrez la porte à vos souvenirs,
                  vos défis, vos rêves et vos aspirations profondes.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 font-crimson">
                  De ces confidences naît une alchimie : je me relie à votre
                  essence et, guidée par l&apos;intuition, je laisse émerger des
                  couleurs, des formes et des symboles porteurs de sens. Chaque
                  geste traduit une étape, une force, une lumière de votre
                  histoire.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 font-crimson">
                  Ainsi s&apos;ancre une création unique et vivante, co-créée
                  avec vous. Un tableau qui vous accompagne comme un compagnon
                  d&apos;âme, vous inspire dans vos élans, et vous relie à la
                  beauté de votre parcours.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-purple-500 p-2 rounded-xl">
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

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl">
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

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Processus Créatif */}
      <section ref={processRef} className="py-20 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={processInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-6 py-2 mb-6"
            >
              <Brush className="w-5 h-5 text-orange-600" />
              <span className="text-orange-800 font-medium text-sm">
                Processus Créatif
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
            >
              Le Voyage de Votre
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Tableau de Vie
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Un processus approfondi en quatre étapes qui honore la complexité
              et la richesse de votre parcours existentiel.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Exploration Biographique
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Questionnaire approfondi sur votre parcours, vos valeurs, vos
                  défis et vos aspirations les plus profondes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-amber-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Consultation Intuitive
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Échange personnel pour approfondir votre histoire et
                  identifier les thèmes centraux de votre existence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Consultation Personnalisée
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Échange approfondi pour explorer vos symboles personnels et
                  cocréer ensemble la direction artistique de votre tableau.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Transmission & Intégration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Explication détaillée des symboles et guidance pour intégrer
                  les révélations dans votre évolution personnelle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Inclusions & Authenticité */}
      <section ref={inclusionsRef} className="py-20 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={inclusionsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6"
            >
              <Gift className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium text-sm">
                Inclusions Premium
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inclusionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6"
            >
              Votre tableau de vie
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                complet
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inclusionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson"
            >
              Chaque tableau de vie est accompagné d&apos;éléments exclusifs qui
              enrichissent votre compréhension spirituelle.
            </motion.p>
          </div>

          {/* CTA Encart "Une expérience spirituelle documentée" */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inclusionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-orange-50 via-purple-50 to-blue-100 backdrop-blur-sm rounded-3xl p-10 md:p-12 border-2 border-purple-200/50 shadow-xl max-w-6xl mx-auto overflow-hidden relative">
              {/* Éléments décoratifs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* Titre et description */}
                <div className="text-center mb-10">
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 font-playfair">
                    Une expérience spirituelle documentée
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-crimson max-w-4xl mx-auto">
                    Votre tableau de vie transcende la simple œuvre d&apos;art :
                    c&apos;est une carte spirituelle de votre âme, accompagnée
                    de tous les éléments pour comprendre et intégrer ses
                    messages profonds.
                  </p>
                </div>

                {/* Grille 2x2 des avantages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-lg">
                        Livraison offerte
                      </p>
                      <p className="text-sm text-gray-600">
                        Envoi gratuit en France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                      <Archive className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-lg">
                        Contenu spirituel inclus
                      </p>
                      <p className="text-sm text-gray-600">
                        Clé USB spirituelle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-lg">
                        Certificat d&apos;authenticité
                      </p>
                      <p className="text-sm text-gray-600">
                        Pièce unique certifiée
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-lg">
                        Accompagnement dédié
                      </p>
                      <p className="text-sm text-gray-600">
                        Suivi personnalisé
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Clé USB & Contenu Digital */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inclusionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Archive className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Clé USB Spirituelle
                  </h3>
                  <p className="text-orange-600 font-medium">
                    Contenu exclusif inclus
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
            </motion.div>

            {/* Certificat & Garanties */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inclusionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Certificat d&apos;Authenticité
                  </h3>
                  <p className="text-purple-600 font-medium">
                    Création unique certifiée
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section ref={pricingRef} className="py-20 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={pricingInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6"
              >
                <Palette className="w-5 h-5 text-purple-600" />
                <span className="text-purple-800 font-medium text-sm">
                  Tarifs Tableaux de Vie
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
              >
                Investissement pour votre
                <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Tableau de Vie
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Chaque œuvre est créée avec amour et intention, dans une
                connexion authentique à votre énergie.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Format Intime */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border-2 border-orange-200/50 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.5)] transition-all duration-500 transform hover:scale-110 hover:border-orange-400 hover:bg-white/90 hover:backdrop-blur-xl cursor-pointer hover:z-10 overflow-hidden"
              >
                {/* Effet de brillance qui passe au hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                {/* Glow effect derrière la carte */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/20 group-hover:to-amber-500/20 blur-xl transition-all duration-500 -z-10"></div>

                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500">
                    <Brush className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    Format Intime
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                      240€
                    </div>
                    <div className="text-gray-600 text-lg">30 x 40 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-orange-500 mr-2 group-hover:animate-pulse" />
                      10-15h de travail
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-orange-500 mr-2 group-hover:animate-pulse" />
                      Exploration approfondie
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-orange-500 mr-2 group-hover:animate-pulse" />
                      Cartographie spirituelle
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Format Élégant */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border-2 border-purple-200/50 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)] transition-all duration-500 transform hover:scale-110 hover:border-purple-400 hover:bg-white/90 hover:backdrop-blur-xl cursor-pointer hover:z-10 overflow-hidden"
              >
                {/* Effet de brillance qui passe au hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                {/* Glow effect derrière la carte */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/20 group-hover:to-violet-500/20 blur-xl transition-all duration-500 -z-10"></div>

                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-violet-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Format Élégant
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                      340€
                    </div>
                    <div className="text-gray-600 text-lg">50 x 70 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2 group-hover:animate-pulse" />
                      15-20h de travail
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2 group-hover:animate-pulse" />
                      Exploration approfondie
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2 group-hover:animate-pulse" />
                      Cartographie spirituelle
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2 group-hover:animate-pulse" />
                      Format idéal pour décoration
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Format Premium */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border-2 border-blue-200/50 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] transition-all duration-500 transform hover:scale-110 hover:border-blue-400 hover:bg-white/90 hover:backdrop-blur-xl cursor-pointer hover:z-10 overflow-hidden"
              >
                {/* Effet de brillance qui passe au hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                {/* Glow effect derrière la carte */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 blur-xl transition-all duration-500 -z-10"></div>

                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Format Premium
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                      500€
                    </div>
                    <div className="text-gray-600 text-lg">60 x 80 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2 group-hover:animate-pulse" />
                      20-30h de travail
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2 group-hover:animate-pulse" />
                      Exploration approfondie
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2 group-hover:animate-pulse" />
                      Cartographie spirituelle
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2 group-hover:animate-pulse" />
                      Format grand impact
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Note personnalisée */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Palette className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Demande Spéciale ?
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Vous souhaitez un format différent ou un tableau de vie pour
                plusieurs personnes ? Contactez-moi pour discuter de votre
                projet unique.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
            >
              Questions
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Fréquentes
              </span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quelle est la différence entre un Portrait d&apos;Âme et un
                Tableau de Vie Spirituel ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Le Portrait d&apos;Âme reflète votre essence profonde dans
                l&apos;instant présent. C&apos;est une œuvre intuitive qui capte
                vos vibrations et symbolise la lumière de votre être, telle
                qu&apos;elle se manifeste aujourd&apos;hui.
                <br />
                <br />
                Le Tableau de Vie Spirituel, lui, s&apos;ancre dans la globalité
                de votre parcours. Il intègre vos expériences, vos défis et vos
                aspirations, pour devenir un miroir vivant de votre chemin
                intérieur et un guide pour vos élans à venir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Combien de temps prend la création d&apos;un Tableau de Vie ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                La réalisation d&apos;un Tableau de Vie Spirituel demande en
                moyenne 4 à 6 semaines. Ce temps inclut l&apos;exploration
                introspective via le questionnaire, la connexion intuitive, la
                création méditative ainsi que la préparation du contenu associé.
                Chaque tableau suit son propre rythme : ce délai est donc
                indicatif et peut évoluer afin de respecter pleinement le
                processus naturel et l&apos;émergence juste de votre œuvre.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Comment se déroule la consultation personnalisée ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Après avoir complété le questionnaire, nous prenons un temps
                d&apos;échange — en visioconférence, par téléphone ou en
                personne. Cet entretien permet d&apos;approfondir certains
                points, de préciser vos ressentis et de laisser émerger les
                thèmes essentiels qui guideront la création.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-orange-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-12 border border-white/20 shadow-xl"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-playfair font-light text-white mb-4"
              >
                Prêt à Explorer Votre Parcours ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto font-crimson"
              >
                Entamez ce voyage vers la découverte de votre cartographie
                existentielle unique et révélez les trésors cachés de votre
                histoire personnelle.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  href="/tableau-de-vie/commande"
                  className="group bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 text-base font-medium shadow-lg"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Compass className="w-5 h-5" />
                    <span>Commander mon Tableau de Vie</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 hover:border-white/60 px-8 py-3 rounded-full transition-all duration-300 text-base font-medium shadow-lg"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Poser une Question</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
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
