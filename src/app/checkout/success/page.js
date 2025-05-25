"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutSuccess() {
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Portraits d&apos;Âme
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Accueil
            </Link>
            <Link
              href="/portrait-d-ame"
              className="text-gray-600 hover:text-gray-800"
            >
              Portraits d&apos;Âme
            </Link>
            <Link
              href="/boutique"
              className="text-gray-600 hover:text-gray-800"
            >
              Boutique
            </Link>
            <Link
              href="/attrape-reves"
              className="text-gray-600 hover:text-gray-800"
            >
              Attrape-rêves
            </Link>
            <Link
              href="/deja-realise"
              className="text-gray-600 hover:text-gray-800"
            >
              Déjà réalisé
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icône de succès */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          {/* Message principal */}
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            Paiement réussi ! 🎉
          </h1>

          {isSimulation && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                🔧 <strong>Mode simulation</strong> - Aucun paiement réel
                n&apos;a été effectué
              </p>
            </div>
          )}

          <p className="text-xl text-gray-600 mb-8">
            Merci pour votre achat ! Votre commande a été confirmée et vous
            recevrez bientôt un email de confirmation.
          </p>

          {/* Statut de mise à jour de l'œuvre */}
          {artworkId && (
            <div className="mb-8">
              {artworkUpdated ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    ✅ Œuvre automatiquement retirée de la vente
                  </p>
                </div>
              ) : updateError ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    ⚠️ L&apos;œuvre sera retirée de la vente prochainement
                  </p>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    🔄 Mise à jour en cours...
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Prochaines étapes */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              Que se passe-t-il maintenant ?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                  1
                </span>
                <div>
                  <h3 className="font-medium text-gray-800">
                    Confirmation par email
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Vous recevrez un email de confirmation dans les prochaines
                    minutes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                  2
                </span>
                <div>
                  <h3 className="font-medium text-gray-800">
                    Préparation de l&apos;envoi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Votre œuvre sera soigneusement emballée et expédiée sous 2-3
                    jours
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                  3
                </span>
                <div>
                  <h3 className="font-medium text-gray-800">
                    Livraison sécurisée
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Livraison assurée avec certificat d&apos;authenticité inclus
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boutique"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
            >
              Continuer mes achats
            </Link>
            <Link
              href="/deja-realise"
              className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Voir la galerie des œuvres vendues
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Nous contacter
            </Link>
          </div>

          {/* Note sur l'unicité */}
          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-medium text-yellow-900 mb-2">
              🎨 Félicitations !
            </h3>
            <p className="text-yellow-800 text-sm">
              Vous venez d&apos;acquérir une œuvre unique qui n&apos;existe
              qu&apos;en un seul exemplaire. Elle rejoindra bientôt notre
              galerie des créations trouvées.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 Portraits d&apos;Âme. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
