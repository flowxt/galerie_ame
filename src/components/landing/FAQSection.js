"use client";

import Link from "next/link";
import { Sparkles, Heart, ArrowRight, Palette, Moon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-purple-50/30 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6 leading-tight">
              Prête à révéler votre
              <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
                {" "}
                essence spirituelle
              </span>{" "}
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
              Commencez votre voyage vers la découverte de votre âme véritable à
              travers l&apos;art spirituel personnalisé.
            </p>
          </motion.div>

          {/* Grille de CTAs */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/portrait-d-ame#tarifs"
                className="group glass-card rounded-3xl p-8 border border-rose-200/50 hover-lift shadow-soft hover:shadow-elegant transition-all duration-500 block"
              >
                <div className="bg-gradient-to-br from-rose-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-rose group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  Portrait d&apos;Âme
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-crimson leading-relaxed">
                  Révélez votre essence profonde
                </p>
                <div className="inline-flex items-center text-rose-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                  <span>Commander</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/tableau-de-vie#tarifs"
                className="group glass-card rounded-3xl p-8 border border-blue-200/50 hover-lift shadow-soft hover:shadow-elegant transition-all duration-500 block"
              >
                <div className="bg-gradient-to-br from-blue-500 to-violet-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-blue group-hover:scale-110 transition-transform duration-500">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  Tableau de Vie
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-crimson leading-relaxed">
                  Cartographie de votre parcours
                </p>
                <div className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                  <span>Commander</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/attrape-reves"
                className="group glass-card rounded-3xl p-8 border border-purple-200/50 hover-lift shadow-soft hover:shadow-elegant transition-all duration-500 block"
              >
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-purple group-hover:scale-110 transition-transform duration-500">
                  <Moon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                  Attrape-rêves
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-crimson leading-relaxed">
                  Protégez vos rêves sacrés
                </p>
                <div className="inline-flex items-center text-purple-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
