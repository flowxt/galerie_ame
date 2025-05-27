"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Moon, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
      {/* Arrière-plan épuré */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Formes douces simplifiées */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-purple-200/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        {/* Quelques éléments spirituels discrets */}
        <div className="absolute top-1/4 left-1/4 text-rose-300 animate-float opacity-40">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-purple-300 animate-float animation-delay-700 opacity-40">
          <Moon className="w-6 h-6" />
        </div>
        <div className="absolute top-1/2 right-1/6 text-pink-300 animate-float animation-delay-1000 opacity-30">
          <Heart className="w-4 h-4" />
        </div>
      </div>

      {/* Contenu principal épuré */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge d'introduction simplifié */}
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-rose-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span className="text-gray-700 text-sm font-medium">
            Créations spirituelles uniques
          </span>
        </div>

        {/* Nom de l'atelier sur une ligne */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
            Atelier Art&apos;âme
          </h2>
        </div>

        {/* H1 SEO-optimisé et évocateur */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-800">
          <span className="block mb-2">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-medium">
              Portraits d&apos;âme spirituels
            </span>
          </span>
          <span className="block text-gray-600 text-3xl md:text-4xl lg:text-5xl mb-2">
            et
          </span>
          <span className="block">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Attrape-rêves artisanaux
            </span>
          </span>
        </h1>

        {/* Sous-titre épuré */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Révélez votre essence profonde à travers l&apos;art spirituel. Chaque
          création capture votre beauté intérieure et protège vos énergies.
        </p>

        {/* Boutons d'action simplifiés */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/portrait-d-ame"
            className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
          >
            <span className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Découvrir les Portraits d&apos;Âme</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/attrape-reves"
            className="group bg-white/80 backdrop-blur-sm border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
          >
            <span className="flex items-center space-x-2">
              <Moon className="w-5 h-5" />
              <span>Explorer les Attrape-rêves</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Indicateurs de valeur épurés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/30 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Créations Uniques
              </h3>
              <p className="text-gray-600 text-sm">
                Œuvres uniques nées d&apos;une inspiration pure
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Fait avec Intention
              </h3>
              <p className="text-gray-600 text-sm">
                Chaque pièce porte une énergie bienveillante
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/30 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Matériaux Naturels
              </h3>
              <p className="text-gray-600 text-sm">
                Éléments authentiques récoltés en conscience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator discret */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-5 h-8 border-2 border-purple-300 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <div className="w-0.5 h-2 bg-purple-400 rounded-full mt-1.5 animate-pulse"></div>
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
