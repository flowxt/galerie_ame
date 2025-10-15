"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Moon, Heart, Star } from "lucide-react";
import { Vortex } from "../ui/Vortex";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-rose-50/50 to-purple-50/50">
      {/* Patterns décoratifs subtils */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-1000"></div>
      </div>

      {/* Contenu principal centré */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-12">
        {/* Signature artistique avec animation - espace en haut pour éviter collision navbar */}
        <div className="inline-flex items-center space-x-2 glass-card border border-rose-200/50 rounded-full px-8 py-4 mb-16 shadow-elegant hover-lift animate-fadeInUp">
          <Sparkles className="w-5 h-5 text-rose-500 animate-pulse" />
          <span className="text-gray-700 font-medium">
            Atelier Art&apos;âme : L&apos;art comme boussole intérieure
          </span>
          <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
        </div>

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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-light mb-8 leading-tight text-center animate-fadeInUp animation-delay-200">
              <span className="block text-gray-800 mb-6">Révélez votre</span>
              <span className="block mb-6">
                <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium animate-shimmer">
                  Essence Spirituelle
                </span>
              </span>
              <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 flex items-center justify-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-2">
                  <Heart className="w-8 h-8 text-rose-400 animate-pulse" />
                  Portraits d&apos;Âme
                </span>
                <span className="text-gray-400">•</span>
                <span>Tableau de vie</span>
                <span className="text-gray-400">•</span>
                <span className="inline-flex items-center gap-2">
                  <Moon className="w-8 h-8 text-purple-400 animate-pulse animation-delay-500" />
                  Attrape-rêves
                </span>
              </div>
            </h1>

            {/* Description avec animation */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-crimson animate-fadeInUp animation-delay-300">
              Créations spirituelles personnalisées pour révéler votre âme et
              protéger vos rêves.
              <br />
              <span className="inline-flex items-center gap-2 mt-2">
                Chaque œuvre est unique et porte une intention pure
                <Star className="w-5 h-5 text-gold-400 fill-gold-400 animate-pulse" />
              </span>
            </p>
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
