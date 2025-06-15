"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Moon, Heart, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond avec Véronique */}
      <div className="absolute inset-0">
        <Image
          src="/images/veronique.jpg"
          alt="Véronique artiste créatrice"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradient pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Éléments spirituels flottants */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-white/30 animate-float">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-purple-300/40 animate-float animation-delay-700">
          <Moon className="w-7 h-7" />
        </div>
        <div className="absolute top-1/2 right-1/6 text-pink-300/30 animate-float animation-delay-1000">
          <Heart className="w-5 h-5" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-blue-300/30 animate-float animation-delay-500">
          <Star className="w-4 h-4" />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-left px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Colonne de texte */}
        <div className="text-white lg:pl-8">
          {/* Badge d'introduction */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">
              Créations spirituelles authentiques
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight">
            <span className="block mb-2">
              <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent font-medium">
                Portraits d&apos;âme
              </span>
            </span>
            <span className="block text-white/80 text-3xl md:text-4xl lg:text-5xl mb-2">
              & Attrape-rêves
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-white/70">
              créations spirituelles uniques
            </span>
          </h1>

          {/* Description vendeur */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed font-crimson">
            Révélez votre essence profonde et protégez vos rêves avec nos
            créations artisanales. Chaque œuvre porte une intention pure et
            accompagne votre évolution spirituelle.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/portrait-d-ame"
              className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <span className="flex items-center space-x-2 justify-center">
                <Sparkles className="w-5 h-5" />
                <span>Mes Portraits</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/attrape-reves"
              className="group bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              <span className="flex items-center space-x-2 justify-center">
                <Moon className="w-5 h-5" />
                <span>Mes Attrape-rêves</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Statistiques/valeurs */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1 font-playfair">
                15+
              </div>
              <div className="text-white/70 text-sm font-crimson">
                Portraits créés
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1 font-playfair">
                100%
              </div>
              <div className="text-white/70 text-sm font-crimson">
                Fait main
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1 font-playfair">
                ⭐ 5/5
              </div>
              <div className="text-white/70 text-sm font-crimson">
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Colonne d'images (masquée sur mobile pour éviter la redondance) */}
        <div className="hidden lg:block relative">
          {/* Cette colonne est optionnelle car l'image de fond montre déjà Véronique */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>

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
