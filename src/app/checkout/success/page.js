"use client";

import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle,
  Heart,
  Star,
  ArrowRight,
  Mail,
  Package,
  Shield,
  Sparkles,
  Eye,
  MessageCircle,
  Award,
  Clock,
} from "lucide-react";

// Composant séparé pour gérer useSearchParams
function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id");
  const artworkId = searchParams?.get("artwork_id");
  const [artworkUpdated, setArtworkUpdated] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const isSimulation = sessionId?.startsWith("cs_test_simulation_");

  useEffect(() => {
    // Mettre à jour le statut de l'œuvre après un paiement réussi
    const updateArtworkStatus = async () => {
      if (!artworkId || artworkUpdated) return;

      try {
        const response = await fetch("/api/update-artwork-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            artworkId: artworkId,
            status: "sold",
            soldDate: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          setArtworkUpdated(true);
          console.log("✅ Œuvre marquée comme vendue");
        } else {
          throw new Error("Erreur lors de la mise à jour");
        }
      } catch (error) {
        console.error("❌ Erreur lors de la mise à jour du statut:", error);
        setUpdateError(error.message);
      }
    };

    updateArtworkStatus();
  }, [artworkId, artworkUpdated]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        {/* Arrière-plan épuré */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-200/20 to-green-200/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

          {/* Éléments spirituels discrets */}
          <div className="absolute top-1/4 left-1/4 text-green-300 animate-float opacity-40">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-emerald-300 animate-float animation-delay-700 opacity-40">
            <Heart className="w-5 h-5" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-teal-400 animate-float animation-delay-1000 opacity-30">
            <Star className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Icône de succès */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <Award className="w-4 h-4 text-green-500" />
            <span className="text-gray-700 text-sm font-medium">
              Commande confirmée
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-800">
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">
              Paiement Réussi ! 🎉
            </span>
          </h1>

          {isSimulation && (
            <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-semibold">
                  Mode Simulation
                </span>
              </div>
              <p className="text-blue-700 text-sm">
                Aucun paiement réel n&apos;a été effectué - Test de
                fonctionnalité
              </p>
            </div>
          )}

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Merci pour votre achat ! Votre commande a été confirmée et vous
            recevrez bientôt un email de confirmation avec tous les détails.
          </p>

          {/* Statut de mise à jour de l'œuvre */}
          {artworkId && (
            <div className="mb-12 max-w-2xl mx-auto">
              {artworkUpdated ? (
                <div className="bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-2xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-semibold">
                      Mise à jour automatique
                    </span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Œuvre automatiquement retirée de la vente et ajoutée à la
                    galerie des créations trouvées
                  </p>
                </div>
              ) : updateError ? (
                <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-800 font-semibold">
                      Mise à jour en cours
                    </span>
                  </div>
                  <p className="text-amber-700 text-sm">
                    L&apos;œuvre sera retirée de la vente prochainement
                  </p>
                </div>
              ) : (
                <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800 font-semibold">
                      Traitement en cours
                    </span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Mise à jour du statut de l&apos;œuvre...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Section Prochaines Étapes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-6 py-2 mb-6">
                <Package className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800 font-medium text-sm">
                  Processus de Livraison
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Que se passe-t-il
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  {" "}
                  maintenant ?
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Votre œuvre d&apos;art spirituelle va être préparée avec soin
                pour rejoindre votre foyer.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Confirmation par Email
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vous recevrez un email de confirmation dans les prochaines
                    minutes avec tous les détails.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Préparation de l&apos;Envoi
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Votre œuvre sera soigneusement emballée et expédiée sous 2-3
                    jours ouvrés.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Livraison Sécurisée
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Livraison assurée avec certificat d&apos;authenticité et
                    guide spirituel inclus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Actions */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-6 py-2 mb-6">
              <Heart className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-medium text-sm">
                Continuez l&apos;Expérience
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-12">
              Et
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                maintenant ?
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/boutique"
                className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-5 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-medium"
              >
                <span className="flex items-center space-x-3">
                  <Eye className="w-6 h-6" />
                  <span>Continuer mes Achats</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/deja-realise"
                className="group bg-white/80 backdrop-blur-sm border-2 border-green-300 text-green-700 hover:bg-green-50 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
              >
                <span className="flex items-center space-x-3">
                  <Award className="w-6 h-6" />
                  <span>Voir la Galerie des Créations Trouvées</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center space-x-3 bg-white border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Nous Contacter</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Félicitations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-3xl p-12">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                🎨 Félicitations !
              </h3>

              <p className="text-amber-800 leading-relaxed mb-6">
                Vous venez d&apos;acquérir une œuvre unique qui n&apos;existe
                qu&apos;en un seul exemplaire. Elle rejoindra bientôt notre
                galerie des créations trouvées et illuminera votre quotidien.
              </p>

              <div className="flex items-center justify-center space-x-2 text-amber-700">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Merci de faire partie de l&apos;aventure Art&apos;âme
                </span>
                <Heart className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CheckoutSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement...</p>
          </div>
        </div>
      }
    >
      <CheckoutSuccessContent />
    </Suspense>
  );
}
