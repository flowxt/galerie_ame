import Link from "next/link";
import Image from "next/image";
import {
  Moon,
  Feather,
  TreePine,
  ArrowRight,
  Shield,
  Heart,
} from "lucide-react";

export default function AttrapesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-2 mb-6">
            <Moon className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">
              Attrape-rêves Artisanaux
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-6">
            Protégez vos
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              plus beaux songes
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos attrape-rêves sont confectionnés à la main avec intention,
            utilisant des matériaux naturels pour capturer les énergies
            positives et protéger vos nuits.
          </p>
        </div>

        {/* Section avec vraies photos */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Attrape-rêves Amour */}
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/attrape-reve.jpeg"
                  alt="Attrape-rêves Amour avec plumes blanches et roses"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-5 h-5 text-rose-300" />
                    <span className="font-semibold text-lg">
                      Attrape-rêves &quot;Amour&quot;
                    </span>
                  </div>
                  <p className="text-rose-100 text-sm">
                    Plumes blanches & roses
                  </p>
                </div>
              </div>
            </div>

            {/* Badge de création */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
              Fait Main
            </div>
          </div>

          {/* Description Amour */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-rose-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="w-6 h-6 text-rose-500 mr-3" />
                L&apos;Énergie de l&apos;Amour
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cet attrape-rêves délicat capture l&apos;essence de l&apos;amour
                universel. Ses plumes blanches symbolisent la pureté des
                intentions, tandis que les touches roses évoquent la tendresse
                et la compassion.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Feather className="w-4 h-4 text-rose-400 mr-2" />
                  Plumes naturelles blanches et roses
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-rose-400 mr-2" />
                  Protection des relations amoureuses
                </li>
                <li className="flex items-center">
                  <Moon className="w-4 h-4 text-rose-400 mr-2" />
                  Favorise les rêves de connexion
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Attrape-rêves Arbre de Vie - Ordre inversé */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Description Arbre de Vie */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <TreePine className="w-6 h-6 text-blue-600 mr-3" />
                L&apos;Arbre de Vie Sacré
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ce magnifique attrape-rêves intègre le symbole universel de
                l&apos;Arbre de Vie, représentant la connexion entre la terre et
                le ciel, l&apos;enracinement et l&apos;élévation spirituelle.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <TreePine className="w-4 h-4 text-blue-400 mr-2" />
                  Motif Arbre de Vie en bois naturel
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />
                  Équilibre et harmonie énergétique
                </li>
                <li className="flex items-center">
                  <Moon className="w-4 h-4 text-blue-400 mr-2" />
                  Ancrage et croissance spirituelle
                </li>
              </ul>
            </div>
          </div>

          {/* Attrape-rêves Arbre de Vie */}
          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/attrape-reve1.jpeg"
                  alt="Attrape-rêves Arbre de Vie avec motifs sacrés"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <TreePine className="w-5 h-5 text-blue-300" />
                    <span className="font-semibold text-lg">
                      Attrape-rêves &quot;Arbre de Vie&quot;
                    </span>
                  </div>
                  <p className="text-blue-100 text-sm">
                    Motifs sacrés & Harmonie
                  </p>
                </div>
              </div>
            </div>

            {/* Badge de spiritualité */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
              Sacré
            </div>
          </div>
        </div>

        {/* Section avantages */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-blue-100 mb-16">
          <h3 className="text-3xl font-light text-gray-800 text-center mb-12">
            Pourquoi Choisir Nos Attrape-rêves ?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Feather className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Matériaux Authentiques
              </h4>
              <p className="text-gray-600">
                Plumes véritables, perles de bois naturel, fils de coton
                biologique et éléments récoltés avec respect et conscience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Créé avec Intention
              </h4>
              <p className="text-gray-600">
                Chaque attrape-rêves naît d&apos;une méditation profonde et
                porte une intention spécifique pour votre bien-être et
                protection.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Protection Spirituelle
              </h4>
              <p className="text-gray-600">
                Tradition millénaire respectée pour filtrer les énergies
                négatives et favoriser les rêves paisibles et inspirants.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Prêt à Protéger Vos Rêves ?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Découvrez notre collection d&apos;attrape-rêves artisanaux et
              trouvez celui qui résonnera avec votre âme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/attrape-reves"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Moon className="w-6 h-6" />
                  <span>Découvrir la Collection</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/boutique"
                className="group border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Shield className="w-6 h-6" />
                  <span>Voir Toutes les Œuvres</span>
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
