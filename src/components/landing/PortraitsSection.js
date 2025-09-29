"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Heart, Eye, Palette } from "lucide-react";

export default function PortraitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-rose-600" />
            <span className="text-rose-800 font-medium">
              Portraits d&apos;Âme
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
            Révélez votre{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-medium">
              essence profonde
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
            Chaque portrait d&apos;âme est une œuvre unique, réalisée dans
            l&apos;intuition et la sensibilité. Au-delà des traits physiques, il
            révèle l&apos;essence intérieure, les couleurs vibratoires et la
            lumière singulière de chaque être.
          </p>
        </div>

        {/* Section principale avec Véronique et ses œuvres */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Colonne gauche : À propos de Véronique */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-light text-gray-800 mb-6">
                Présentation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-crimson">
                Artiste intuitive et passionnée, depuis l&apos;enfance la
                création est mon langage. À travers Atelier Art&apos;âme, je
                fais dialoguer couleurs, symboles et ressentis pour donner
                naissance à des créations vibrantes et uniques.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-crimson">
                Chaque œuvre naît d&apos;une méditation, d&apos;une
                contemplation de votre essence. Je laisse votre âme guider mes
                pinceaux pour révéler votre véritable lumière.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-crimson">
                Mon approche combine expression artistique et connexion
                spirituelle profonde, afin d&apos;offrir des œuvres porteuses de
                sens, d&apos;énergie et d&apos;harmonie.
              </p>

              {/* Valeurs/approche */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-rose-200/50">
                  <Heart className="w-6 h-6 text-rose-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Avec le cœur
                  </h4>
                  <p className="text-sm text-gray-600">
                    Chaque création porte mon intention bienveillante
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200/50">
                  <Eye className="w-6 h-6 text-purple-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Vision intuitive
                  </h4>
                  <p className="text-sm text-gray-600">
                    Je perçois votre essence au-delà des apparences
                  </p>
                </div>
              </div>

              <Link
                href="/portrait-d-ame"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Palette className="w-5 h-5" />
                <span>Commander votre Portrait</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Colonne droite : Une seule photo de Véronique */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md">
              <Image
                src="/images/vero-realisation.jpg"
                alt="Véronique créant un portrait d'âme"
                width={400}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Véronique</p>
                <p className="text-sm opacity-90">Artiste créatrice</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-rose-200/50 shadow-lg max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-rose-500 mx-auto mb-6" />
            <h3 className="text-2xl font-light text-gray-800 mb-4">
              Prêt(e) à découvrir votre{" "}
              <span className="text-rose-600 font-medium">
                portrait d&apos;âme
              </span>{" "}
              ?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Laissez-moi révéler votre beauté intérieure à travers une création
              unique qui vous accompagnera toute votre vie.
            </p>
            <Link
              href="/portrait-d-ame"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <Heart className="w-5 h-5" />
              <span>Commander mon Portrait d&apos;Âme</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
