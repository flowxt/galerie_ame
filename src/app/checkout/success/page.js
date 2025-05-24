import Link from "next/link";

export default function CheckoutSuccess({ searchParams }) {
  const sessionId = searchParams?.session_id;
  const isSimulation = sessionId?.startsWith("cs_test_simulation_");

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
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
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

          {/* Success Message */}
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            {isSimulation
              ? "Commande simulée avec succès !"
              : "Commande confirmée !"}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {isSimulation
              ? "Votre commande a été simulée avec succès. En production, le paiement serait traité par Stripe."
              : "Merci pour votre commande ! Vous allez recevoir un email de confirmation dans quelques instants."}
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Détails de la commande
            </h2>
            {sessionId && (
              <p className="text-gray-600 mb-2">
                <span className="font-medium">ID de session :</span> {sessionId}
              </p>
            )}
            {isSimulation && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Mode développement :</strong> Cette commande est
                  simulée. Les vraies clés Stripe seront intégrées en
                  production.
                </p>
              </div>
            )}
          </div>

          {/* Next Steps */}
          <div className="text-left bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Prochaines étapes
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">1.</span>
                <span>
                  Vous recevrez un email de confirmation avec les détails de
                  votre commande
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">2.</span>
                <span>
                  L&apos;artiste vous contactera dans les 24-48h pour organiser
                  la consultation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">3.</span>
                <span>
                  Le processus créatif commencera selon vos disponibilités
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">4.</span>
                <span>
                  Vous recevrez des mises à jour régulières sur
                  l&apos;avancement de votre œuvre
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Link
              href="/boutique"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Retour à la boutique
            </Link>
            <Link
              href="/contact"
              className="border border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Nous contacter
            </Link>
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
