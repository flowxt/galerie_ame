"use client";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Eye,
  ArrowRight,
  Brush,
  Star,
  Moon,
  User,
  MessageCircle,
} from "lucide-react";
import PortraitOrderForm from "../../../components/PortraitOrderForm";

export default function PortraitOrderPage() {
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

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-800">
            <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-medium">
              Commandez votre Portrait d&apos;Âme
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
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

      {/* Section Processus Créatif */}
      <section className="py-20 bg-white">
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
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Consultation Spirituelle
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Entretien approfondi pour comprendre votre personnalité, vos
                  aspirations et votre histoire unique lors d&apos;un échange
                  bienveillant.
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
                  Processus artistique intuitif de 3-4 semaines pour laisser
                  émerger votre véritable essence à travers les couleurs et les
                  formes.
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
                  Présentation de votre portrait d&apos;âme unique avec
                  explication des symboles et énergies révélés durant la
                  création.
                </p>
              </div>
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

              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                Partagez-nous votre
                <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  essence unique
                </span>
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
