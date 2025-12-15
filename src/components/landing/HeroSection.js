"use client";
import Link from "next/link";
import { Sparkles, Moon, Heart, Star } from "lucide-react";
import { Vortex } from "../ui/Vortex";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-rose-50/50 to-purple-50/50">
      {/* Patterns décoratifs subtils avec animation */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-700"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-1000"
        />
      </div>

      {/* Contenu principal centré */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-12">
        {/* Signature artistique avec animation - espace en haut pour éviter collision navbar */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 glass-card border border-rose-200/50 rounded-full px-8 py-4 mb-16 shadow-elegant hover-lift"
        >
          <Sparkles className="w-5 h-5 text-rose-500 animate-pulse" />
          <span className="text-gray-700 font-medium">
            Atelier Art&apos;âme : L&apos;art comme boussole intérieure
          </span>
          <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
        </motion.div>

        {/* Zone avec vortex pour titre + description */}
        <div className="relative w-full">
          <Vortex
            backgroundColor="transparent"
            rangeY={400}
            particleCount={300}
            baseHue={320}
            baseSpeed={0.03}
            rangeSpeed={0.6}
            baseRadius={0.5}
            rangeRadius={1}
            containerClassName="absolute inset-0 w-full h-full"
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </Vortex>

          {/* Titre principal avec animation */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-light mb-8 leading-tight text-center">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="block text-gray-800 mb-6"
              >
                Révélez votre
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="block mb-8"
              >
                <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium animate-shimmer">
                  Essence Spirituelle
                </span>
              </motion.span>
            </h1>

            {/* Tags des services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-3 flex-wrap mb-10"
            >
              <Link
                href="/portrait-d-ame"
                className="group inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-rose-200 rounded-full px-5 py-2.5 hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <Heart className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 font-medium text-sm">Portraits d&apos;Âme</span>
              </Link>

              <Link
                href="/tableau-de-vie"
                className="group inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-5 py-2.5 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 font-medium text-sm">Tableau de Vie</span>
              </Link>

              <Link
                href="/attrape-reves"
                className="group inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-5 py-2.5 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <Moon className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 font-medium text-sm">Attrape-rêves</span>
              </Link>
            </motion.div>

            {/* Description avec animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-crimson"
            >
              Créations spirituelles personnalisées pour révéler votre âme et
              protéger vos rêves.
              <br />
              <span className="inline-flex items-center gap-2 mt-2">
                Chaque œuvre est unique et porte une intention pure
                <Star className="w-5 h-5 text-gold-400 fill-gold-400 animate-pulse" />
              </span>
            </motion.p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
