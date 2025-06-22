"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Eye,
  ArrowRight,
  Brush,
  Star,
  Moon,
  Palette,
  Camera,
} from "lucide-react";
import PortraitOrderButton from "../../components/PortraitOrderButton";
import { Vortex } from "../../components/ui/Vortex";

export default function PortraitDame() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond - Portrait d'âme */}
        <div className="absolute inset-0">
          <Image
            src="/images/portrait-dame.jpg"
            alt="Portrait d'âme spirituel créé par l'Atelier Art'âme"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>

        {/* Éléments spirituels flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-white/20 animate-float">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-purple-300/30 animate-float animation-delay-700">
            <Star className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-pink-300/20 animate-float animation-delay-1000">
            <Heart className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-rose-300" />
            <span className="text-white text-sm font-medium">
              Art spirituel personnalisé
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent font-medium">
              Portraits d&apos;âme spirituels
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson">
            Révélez votre essence profonde à travers l&apos;art spirituel.
            Chaque portrait capture votre beauté intérieure et accompagne votre
            évolution personnelle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PortraitOrderButton />
            <Link
              href="/boutique"
              className="group bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Voir les Œuvres</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Qu'est-ce qu'un Portrait d'Âme */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image du portrait d'âme */}
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-100 to-purple-100 rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/portrait-dame2.jpg"
                    alt="Portrait d'âme spirituel réalisé par Véronique"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-5 h-5 text-rose-300" />
                      <span className="font-semibold text-lg">
                        Portrait d&apos;Âme
                      </span>
                    </div>
                    <p className="text-rose-100 text-sm">
                      Essence révélée par Véronique
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
                Unique
              </div>
            </div>

            {/* Explication */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-light text-gray-800 mb-6">
                  Qu&apos;est-ce qu&apos;un
                  <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Portrait d&apos;Âme
                  </span>{" "}
                  ?
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 font-crimson">
                  Un portrait d&apos;âme va bien au-delà de la simple
                  représentation physique. C&apos;est une exploration artistique
                  qui capture l&apos;essence unique de votre être, vos émotions
                  profondes et votre personnalité authentique.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 rounded-xl">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Vision Spirituelle
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Révèle des aspects cachés de votre personnalité et de votre
                    chemin de vie à travers des symboles et des couleurs
                    intuitives.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl">
                      <Brush className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Création Méditative
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Chaque trait naît d&apos;un état méditatif profond,
                    permettant à votre essence de s&apos;exprimer naturellement
                    sur la toile.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Accompagnement Personnel
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Votre portrait devient un miroir de votre âme, vous
                    accompagnant dans votre développement personnel et votre
                    découverte de soi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie de Portraits Réalisés */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-3 mb-6">
              <Camera className="w-5 h-5 text-rose-600" />
              <span className="text-rose-800 font-medium">Galerie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
              Portraits d&apos;âme
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent font-medium">
                {" "}
                réalisés
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-crimson">
              Découvrez quelques-unes des créations qui ont révélé
              l&apos;essence profonde de leurs propriétaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Portrait 1 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/portrait-dame.jpg"
                  alt="Portrait d'âme - Essence féminine révélée"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Portrait d&apos;Âme</p>
                    <p className="text-xs opacity-90">
                      Essence féminine révélée
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait 2 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/portrait-dame2.jpg"
                  alt="Portrait d'âme - Lumière intérieure"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Portrait d&apos;Âme</p>
                    <p className="text-xs opacity-90">Lumière intérieure</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait 3 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/portrait-dame3.jpg"
                  alt="Portrait d'âme - Beauté authentique"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Portrait d&apos;Âme</p>
                    <p className="text-xs opacity-90">Beauté authentique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus Créatif */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
              <Brush className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium text-sm">
                Processus Créatif
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Le Voyage de Votre
              <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                {" "}
                Portrait d&apos;Âme
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un processus en trois étapes qui honore votre unicité et révèle la
              beauté profonde de votre être intérieur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Connexion Spirituelle
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous explorons ensemble votre essence, vos rêves et les
                  énergies qui vous habitent lors d&apos;une consultation
                  personnalisée approfondie.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Création Méditative
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dans un état méditatif, votre portrait prend forme de manière
                  intuitive, laissant votre âme s&apos;exprimer à travers les
                  couleurs et les formes.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Révélation & Livraison
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Votre portrait unique vous est remis avec une explication des
                  symboles et énergies qui se sont manifestés durant la
                  création.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Questions
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Fréquentes
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Combien de temps prend la création d&apos;un portrait d&apos;âme
                ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Le processus complet prend généralement entre 3 à 4 semaines,
                incluant la consultation initiale, la création artistique
                méditative et les finitions. Ce délai permet de respecter le
                processus créatif naturel.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Faut-il poser physiquement pour le portrait ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Non, le portrait d&apos;âme se base sur votre essence plutôt que
                sur votre apparence physique. Une consultation approfondie et
                quelques photos de référence suffisent à capturer votre énergie
                unique.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quels matériaux et techniques sont utilisés ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque portrait est unique et peut utiliser différents médiums
                selon l&apos;inspiration : aquarelle, pastels, techniques
                mixtes, avec parfois l&apos;ajout d&apos;éléments naturels comme
                des paillettes dorées ou des pigments minéraux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Prêt à Découvrir Votre Essence ?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Commencez votre voyage vers la découverte de votre âme véritable à
              travers l&apos;art spirituel personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PortraitOrderButton />
              <Link
                href="/contact"
                className="group bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Poser une Question</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
