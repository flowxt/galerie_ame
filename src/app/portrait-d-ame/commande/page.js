"use client";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  ArrowRight,
  Brush,
  User,
  MessageCircle,
  Palette,
  Star,
} from "lucide-react";
import PortraitOrderForm from "../../../components/PortraitOrderForm";

export default function PortraitOrderPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-rose-50 to-purple-50">
        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Breadcrumb élégant */}
          <nav className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 text-sm text-gray-600">
              <Link
                href="/portrait-d-ame"
                className="hover:text-rose-600 transition-colors"
              >
                Portraits d&apos;Âme
              </Link>
              <span>/</span>
              <span className="text-rose-600 font-medium">Commande</span>
            </div>
          </nav>

          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-rose-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <Brush className="w-4 h-4 text-rose-500" />
            <span className="text-gray-700 text-sm font-medium">
              Commande personnalisée
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-gray-800">
            <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-medium">
              Commandez votre Portrait d&apos;Âme
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson">
            Partagez-nous votre histoire pour que nous puissions créer une œuvre
            unique qui révèle votre essence profonde et accompagne votre
            évolution.
          </p>

          {/* Info consultation */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-sm max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold text-blue-900">
                Consultation personnalisée incluse
              </h2>
            </div>
            <p className="text-blue-800 text-sm leading-relaxed">
              Après validation de votre commande, nous vous contactons dans les
              24-48h pour organiser une consultation approfondie qui permettra
              de capturer votre essence unique.
            </p>
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-2 mb-6">
                <Palette className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800 font-medium text-sm">
                  Tarifs Portraits d&apos;Âme
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
                Investissement pour votre
                <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Portrait d&apos;Âme
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Chaque œuvre est créée avec amour et intention, incluant
                consultation personnalisée et accompagnement complet.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Format 30x40cm */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-rose-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Brush className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Format Intime
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-rose-600 mb-2">
                      180€
                    </div>
                    <div className="text-gray-600 text-lg">30 x 40 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                      Consultation personnalisée
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                      Création méditative unique
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                      Explication des symboles
                    </li>
                  </ul>
                </div>
              </div>

              {/* Format 50x70cm */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Le plus choisi
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Format Élégant
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      280€
                    </div>
                    <div className="text-gray-600 text-lg">50 x 70 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      Consultation personnalisée
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      Création méditative unique
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      Explication des symboles
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      Format idéal pour décoration
                    </li>
                  </ul>
                </div>
              </div>

              {/* Duo 60x80cm */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Format Duo
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      380€
                    </div>
                    <div className="text-gray-600 text-lg">60 x 80 cm</div>
                  </div>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      Consultation personnalisée
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      Portrait de couple/famille
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      Création méditative unique
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      Format grand impact
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Note personnalisée */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Palette className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Demande Spéciale ?
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vous souhaitez un format différent, des dimensions spécifiques
                ou avez une demande particulière ?
                <br />
                Contactez-nous pour un devis personnalisé adapté à vos besoins.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 rounded-full hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                <span>Demande personnalisée</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-2 mb-6">
                <User className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800 font-medium text-sm">
                  Votre Histoire
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-playfair font-light text-gray-800 mb-6">
                Partagez-nous votre
                <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  essence unique
                </span>
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-crimson">
                Plus vous nous en direz sur vous, plus votre portrait d&apos;âme
                sera fidèle à votre véritable nature.
              </p>
            </div>

            {/* Formulaire dans une carte élégante */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl">
              <PortraitOrderForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed font-crimson">
                &quot;Mon portrait d&apos;âme a révélé des aspects de ma
                personnalité que je n&apos;avais jamais vus. C&apos;est comme si
                l&apos;artiste avait capturé mon essence profonde et
                l&apos;avait transformée en beauté.&quot;
              </blockquote>

              <cite className="text-gray-600 font-medium">
                - Marie L., Portrait d&apos;Âme 2024
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
