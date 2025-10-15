"use client";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, ArrowRight, Palette, Eye, Brush } from "lucide-react";

export default function PortraitsDameSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50/50 via-purple-50/50 to-pink-50/50 relative overflow-hidden">
      {/* Patterns décoratifs améliorés */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800 font-medium text-sm">
                  Portraits d&apos;Âme
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6 leading-tight">
                Révélez votre
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-medium">
                  {" "}
                  essence profonde
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed font-crimson mb-8">
                Chaque portrait d&apos;âme est une œuvre unique, réalisée dans
                l&apos;intuition et la sensibilité. Au-delà des traits
                physiques, il révèle l&apos;essence intérieure, les couleurs
                vibratoires et la lumière singulière de chaque être.
              </p>
            </div>

            {/* Points clés avec glassmorphism */}
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-5 border border-rose-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-rose group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Connexion Spirituelle
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      Dans un espace sacré et bienveillant, je me relie à votre
                      essence et aux énergies qui vous habitent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-purple-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-purple group-hover:scale-110 transition-transform duration-300">
                    <Brush className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Création Méditative
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      En état méditatif, je laisse les couleurs, les formes et
                      les symboles émerger spontanément de votre âme.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-pink-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-rose group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Révélation & Transmission
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      Votre portrait vous est remis avec une lecture des
                      symboles et énergies manifestés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA amélioré */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portrait-d-ame"
                className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-glow-rose hover:shadow-glow-purple transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-base font-medium inline-flex items-center justify-center space-x-2 btn-spiritual overflow-hidden"
              >
                <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Découvrir</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <Link
                href="/portrait-d-ame/commande"
                className="group glass-card border-2 border-rose-300 text-rose-700 hover:border-rose-400 px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-base font-medium shadow-elegant hover:shadow-spiritual inline-flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Commander</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Galerie de 3 photos */}
          <div className="grid grid-cols-1 gap-6">
            <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-spiritual transition-all duration-500 hover-lift">
              <Image
                src="/images/portrait-ame1.jpg"
                alt="Portrait d'âme spirituel - Création 1"
                width={600}
                height={400}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/60 via-rose-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-spiritual transition-all duration-500 hover-lift">
              <Image
                src="/images/portrait-ame2.jpg"
                alt="Portrait d'âme spirituel - Création 2"
                width={600}
                height={400}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/60 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-spiritual transition-all duration-500 hover-lift">
              <Image
                src="/images/portrait-ame3.jpg"
                alt="Portrait d'âme spirituel - Création 3"
                width={600}
                height={400}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/60 via-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
