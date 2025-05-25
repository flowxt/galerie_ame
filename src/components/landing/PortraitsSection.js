import Link from "next/link";
import { Sparkles, Heart, Eye, ArrowRight, Brush } from "lucide-react";

export default function PortraitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-800 font-medium text-sm">
              Portraits d&apos;Âme
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-6">
            Révélez votre
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              essence véritable
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un portrait d&apos;âme est bien plus qu&apos;une simple œuvre
            d&apos;art. C&apos;est une exploration spirituelle qui révèle les
            facettes les plus authentiques de votre être.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Contenu explicatif */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Consultation Personnalisée
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Chaque portrait commence par une discussion profonde pour
                comprendre votre essence, vos aspirations et les énergies qui
                vous animent. Cette connexion spirituelle guide tout le
                processus créatif.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-pink-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-2xl">
                  <Brush className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Création Intuitive
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                À travers l&apos;aquarelle et les techniques mixtes, votre
                portrait prend vie de manière organique, révélant des aspects de
                vous-même que vous n&apos;aviez peut-être jamais perçus.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-rose-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-rose-500 to-purple-500 p-3 rounded-2xl">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Transformation Personnelle
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Plus qu&apos;un objet décoratif, votre portrait devient un
                miroir de votre âme, vous accompagnant dans votre évolution
                personnelle et votre découverte de soi.
              </p>
            </div>
          </div>

          {/* Visuel / Galerie d'exemples */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Exemple 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Portrait Spirituel
                  </h4>
                  <p className="text-gray-600 text-xs mt-2">
                    Aquarelle & Intuition
                  </p>
                </div>

                {/* Exemple 2 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
                  <div className="h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl mb-4 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-pink-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Essence Révélée
                  </h4>
                  <p className="text-gray-600 text-xs mt-2">
                    Techniques Mixtes
                  </p>
                </div>

                {/* Exemple 3 - Centré */}
                <div className="col-span-2 bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="h-24 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-xl mb-4 flex items-center justify-center">
                    <Eye className="w-10 h-10 text-purple-600 mr-2" />
                    <Sparkles className="w-8 h-8 text-pink-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-center">
                    Miroir de l&apos;Âme
                  </h4>
                  <p className="text-gray-600 text-xs mt-2 text-center">
                    Révélation & Beauté Intérieure
                  </p>
                </div>
              </div>
            </div>

            {/* Badge d'authenticité */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
              100% Unique
            </div>
          </div>
        </div>

        {/* Processus étape par étape */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-purple-100 mb-16">
          <h3 className="text-3xl font-light text-gray-800 text-center mb-12">
            Le Voyage de Votre Portrait d&apos;Âme
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Connexion Spirituelle
              </h4>
              <p className="text-gray-600">
                Nous explorons ensemble votre essence, vos rêves et les énergies
                qui vous habitent lors d&apos;une consultation personnalisée
                approfondie.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Création Méditative
              </h4>
              <p className="text-gray-600">
                Dans un état méditatif, votre portrait prend forme de manière
                intuitive, laissant votre âme s&apos;exprimer à travers les
                couleurs et les formes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Révélation & Livraison
              </h4>
              <p className="text-gray-600">
                Votre portrait unique vous est remis avec une explication des
                symboles et énergies qui se sont manifestés durant la création.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Prêt à Découvrir Votre Essence ?
            </h3>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Commencez votre voyage vers la découverte de votre âme véritable à
              travers l&apos;art spirituel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portrait-d-ame/commande"
                className="group bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-6 h-6" />
                  <span>Commander Mon Portrait d&apos;Âme</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/portrait-d-ame"
                className="group border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Eye className="w-6 h-6" />
                  <span>En Savoir Plus</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
