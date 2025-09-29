"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Moon } from "lucide-react";
import { Vortex } from "../ui/Vortex";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-rose-50 to-purple-50">
      {/* Contenu principal centré */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Signature artistique */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-rose-200 rounded-full px-8 py-4 mb-12 shadow-lg">
          <Sparkles className="w-5 h-5 text-rose-500" />
          <span className="text-gray-700 font-medium">
            Atelier Art'âme : l'art inspiré par l'âme
          </span>
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

          {/* Titre principal */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-light mb-8 leading-tight text-center">
              <span className="block text-gray-800 mb-6">Révélez votre</span>
              <span className="block mb-6">
                <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-medium">
                  Essence Spirituelle
                </span>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-gray-600">
                Portraits d&apos;Âme • Tableau de vie • Attrape-rêves
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-crimson">
              Créations spirituelles personnalisées pour révéler votre âme et
              protéger vos rêves.
              <br />
              Chaque œuvre est unique et porte une intention pure.
            </p>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Link
            href="/portrait-d-ame"
            className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-5 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
          >
            <span className="flex items-center space-x-3 justify-center">
              <Sparkles className="w-6 h-6" />
              <span>Mes Portraits d&apos;Âme</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/tableau-de-vie"
            className="group bg-white/80 backdrop-blur-sm border-2 border-purple-300 text-gray-700 hover:bg-purple-50 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
          >
            <span className="flex items-center space-x-3 justify-center">
              <Moon className="w-6 h-6" />
              <span>Tableau de Vie</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Statistiques épurées */}
        <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2 font-playfair">
              15+
            </div>
            <div className="text-gray-500 font-crimson">Portraits créés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2 font-playfair">
              100%
            </div>
            <div className="text-gray-500 font-crimson">Fait main</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2 font-playfair">
              ⭐ 5/5
            </div>
            <div className="text-gray-500 font-crimson">Satisfaction</div>
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
