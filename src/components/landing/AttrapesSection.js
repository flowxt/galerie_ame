"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Moon,
  Feather,
  TreePine,
  ArrowRight,
  Shield,
  Heart,
  Sparkles,
} from "lucide-react";

export default function AttrapesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3 mb-6">
            <Moon className="w-5 h-5 text-purple-600" />
            <span className="text-purple-800 font-medium">
              Attrape-rêves Artisanaux
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
            Protégez vos{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
              rêves sacrés
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
            Chaque attrape-rêve est tissé avec intention, créé à la main avec
            des matériaux naturels pour capturer les énergies positives et
            protéger votre sommeil
          </p>
        </div>

        {/* Section principale - Véronique et son artisanat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Colonne gauche : Photos de création */}
          <div className="space-y-6">
            {/* Photo principale de Véronique créant */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/creation-attrape-reve.jpg"
                alt="Véronique créant un attrape-rêve"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">
                  Création d&apos;un attrape-rêve
                </p>
                <p className="text-xs opacity-90">Chaque détail compte</p>
              </div>
            </div>

            {/* Photos du processus */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/creation-attrape-reve2.jpg"
                  alt="Processus de création"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/vero-attrape-reve.jpg"
                  alt="Véronique avec ses créations"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Colonne droite : Présentation de l'artisanat */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-light text-gray-800 mb-6">
                L&apos;art traditionnel{" "}
                <span className="text-purple-600 font-medium">revisité</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-crimson">
                Inspirée par la tradition amérindienne, je crée chaque
                attrape-rêve dans le respect des techniques ancestrales, en y
                apportant ma touche artistique personnelle et mes intentions
                spirituelles.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-crimson">
                Plumes naturelles, perles authentiques, fils de qualité...
                Chaque matériau est choisi avec soin pour ses propriétés
                énergétiques et sa beauté naturelle.
              </p>

              {/* Caractéristiques */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200/50">
                  <Feather className="w-6 h-6 text-purple-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Matières naturelles
                  </h4>
                  <p className="text-sm text-gray-600">
                    Plumes, perles, fils authentiques
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
                  <Shield className="w-6 h-6 text-blue-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Protection énergétique
                  </h4>
                  <p className="text-sm text-gray-600">
                    Tissé avec intention bienveillante
                  </p>
                </div>
              </div>

              <Link
                href="/attrape-reves"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Moon className="w-5 h-5" />
                <span>Découvrir mes Attrape-rêves</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Galerie d'attrape-rêves réalisés */}
        <div className="mb-16">
          <h3 className="text-3xl font-playfair font-light text-gray-800 text-center mb-12">
            Mes{" "}
            <span className="text-purple-600 font-medium">
              créations d&apos;attrape-rêves
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Attrape-rêve 1 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/attrape-reve-bleu.jpg"
                alt="Attrape-rêve bleu créé par Véronique"
                width={300}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Attrape-rêve Bleu</p>
                  <p className="text-xs opacity-90">Sérénité & Protection</p>
                </div>
              </div>
            </div>

            {/* Attrape-rêve 2 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/attrape-reve-plume.jpg"
                alt="Attrape-rêve aux plumes créé par Véronique"
                width={300}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Attrape-rêve Plumes</p>
                  <p className="text-xs opacity-90">Légèreté spirituelle</p>
                </div>
              </div>
            </div>

            {/* Attrape-rêve 3 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/attrape-reve.jpeg"
                alt="Attrape-rêve artisanal créé par Véronique"
                width={300}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">
                    Attrape-rêve Traditionnel
                  </p>
                  <p className="text-xs opacity-90">Sagesse ancestrale</p>
                </div>
              </div>
            </div>

            {/* Attrape-rêve 4 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/attrape-reve1.jpeg"
                alt="Attrape-rêve unique créé par Véronique"
                width={300}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Attrape-rêve Unique</p>
                  <p className="text-xs opacity-90">Création personnalisée</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section bienfaits et tradition */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-purple-200/50 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Protection nocturne
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Filtrent les énergies négatives et ne laissent passer que les
                beaux rêves dans votre sommeil.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Feather className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Tradition respectée
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Créés selon les méthodes ancestrales, dans le respect de la
                culture amérindienne.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Énergie bienveillante
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Chaque création est imprégnée d&apos;intentions positives et
                d&apos;amour bienveillant.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white max-w-2xl mx-auto">
            <Moon className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-light mb-4">
              Protégez vos <span className="font-medium">rêves sacrés</span>
            </h3>
            <p className="text-purple-100 mb-8 leading-relaxed">
              Offrez-vous un attrape-rêve unique, créé spécialement pour vous
              avec intention et bienveillance.
            </p>
            <Link
              href="/attrape-reves"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <Sparkles className="w-5 h-5" />
              <span>Choisir mon Attrape-rêve</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
