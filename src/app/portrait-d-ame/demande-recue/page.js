import Link from "next/link";
import {
  Sparkles,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Moon,
  MessageCircle,
  Clock,
  Palette,
  Gift,
} from "lucide-react";

export default function PortraitRequestReceived() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
        {/* Arrière-plan épuré */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-200/20 to-blue-200/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

          {/* Éléments spirituels discrets */}
          <div className="absolute top-1/4 left-1/4 text-rose-300 animate-float opacity-40">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-purple-300 animate-float animation-delay-700 opacity-40">
            <Star className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-pink-300 animate-float animation-delay-1000 opacity-30">
            <Heart className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Icône de confirmation élégante */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-gray-700 text-sm font-medium">
              Demande confirmée
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-800">
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">
              Votre demande a été reçue !
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Merci pour votre confiance. Nous sommes touchés par votre partage et
            avons hâte de commencer ce voyage artistique avec vous. ✨
          </p>
        </div>
      </section>

      {/* Section Prochaines Étapes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium text-sm">
                Prochaines Étapes
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Que se passe-t-il
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                maintenant ?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-sm">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Prise de contact
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Nous vous contactons dans les 24-48h pour organiser votre
                  consultation personnalisée et bienveillante.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-sm">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Consultation approfondie
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Échange d&apos;1h pour explorer votre essence et définir
                  l&apos;orientation artistique de votre portrait d&apos;âme.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-sm">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Palette className="w-5 h-5 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Création de votre œuvre
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Processus créatif de 3-4 semaines avec des mises à jour
                  régulières sur l&apos;avancement de votre portrait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Informations Importantes */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-yellow-200/50 shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-3 rounded-full">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-yellow-900">
                  Informations importantes
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-yellow-800">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Aucun paiement requis à cette étape
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Tarif finalisé ensemble lors de la consultation
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Email de confirmation dans quelques minutes
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Support disponible pour toute question
                    </span>
                  </div>
                </div>
              </div>
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
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
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

      {/* Section Actions */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              En attendant votre
              <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                {" "}
                consultation
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/boutique"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Découvrir d&apos;autres œuvres</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group bg-white/80 backdrop-blur-sm border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
              >
                <span className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Nous contacter</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Note personnelle de l'artiste */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 shadow-sm">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Message de l&apos;Artiste
                </h3>
              </div>

              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                &quot;Chaque portrait d&apos;âme est une aventure unique.
                J&apos;ai hâte de découvrir votre lumière intérieure et de la
                partager avec le monde à travers l&apos;art.&quot;
              </blockquote>

              <cite className="text-gray-600 font-medium">
                - L&apos;Artiste de l&apos;Atelier Art&apos;âme
              </cite>
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
