import Link from "next/link";
import { ArrowRight, Sparkles, Moon, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      {/* Étoiles animées en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 text-rose-300 text-3xl animate-pulse">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-32 right-1/4 text-blue-300 text-2xl animate-pulse animation-delay-700">
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-1/3 text-rose-200 text-xl animate-pulse animation-delay-1000">
          <Moon className="w-7 h-7" />
        </div>
        <div className="absolute top-1/3 right-1/5 text-purple-300 text-lg animate-pulse animation-delay-500">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-blue-200 text-2xl animate-pulse animation-delay-300">
          <Star className="w-6 h-6" />
        </div>

        {/* Particules lumineuses */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/20 to-blue-500/20 blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge d'introduction */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 text-blue-100">
          <Sparkles className="w-5 h-5 text-rose-300" />
          <span className="text-sm font-medium">
            Révélez l&apos;art de votre âme
          </span>
          <Moon className="w-5 h-5 text-blue-300" />
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-rose-200 via-white to-blue-200 bg-clip-text text-transparent">
            Atelier
          </span>
          <span className="block bg-gradient-to-r from-blue-300 via-purple-200 to-rose-300 bg-clip-text text-transparent mt-2">
            Art&apos;âme
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Explorez l&apos;art unique qui capture votre essence profonde à
          travers des
          <span className="text-rose-300 font-medium">
            {" "}
            portraits d&apos;âme spirituels
          </span>{" "}
          et des
          <span className="text-blue-300 font-medium">
            {" "}
            attrape-rêves artisanaux
          </span>
          . Chaque création révèle votre beauté intérieure authentique.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="/portrait-d-ame"
            className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-5 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-rose-500/25 text-lg font-semibold"
          >
            <span className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6" />
              <span>Découvrir les Portraits d&apos;Âme</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/attrape-reves"
            className="group border-2 border-blue-300 text-blue-100 hover:bg-blue-800/50 backdrop-blur-sm px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
          >
            <span className="flex items-center space-x-3">
              <Moon className="w-6 h-6" />
              <span>Explorer les Attrape-rêves</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Indicateurs de valeur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Créations Uniques
              </h3>
              <p className="text-blue-200 text-sm">
                Chaque œuvre est unique et ne peut être reproduite
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Fait avec Intention
              </h3>
              <p className="text-blue-200 text-sm">
                Chaque pièce naît d'une méditation profonde
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🌙</div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Matériaux Naturels
              </h3>
              <p className="text-blue-200 text-sm">
                Éléments authentiques récoltés en conscience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
