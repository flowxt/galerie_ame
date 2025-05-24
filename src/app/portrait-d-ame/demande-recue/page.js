import Link from "next/link";

export default function PortraitRequestReceived() {
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
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon de confirmation */}
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
            Votre demande a été reçue ! 🎨
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Merci pour votre confiance. Nous sommes touchés par votre partage et
            avons hâte de commencer ce voyage artistique avec vous.
          </p>

          {/* Prochaines étapes */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6">
              Que se passe-t-il maintenant ?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Prise de contact
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Nous vous contactons dans les 24-48h pour organiser votre
                    consultation personnalisée.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Consultation approfondie
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Échange d&apos;1h pour explorer votre essence et définir
                    l&apos;orientation artistique.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Création de votre œuvre
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Processus créatif de 2-4 semaines avec des mises à jour
                    régulières.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Informations importantes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-medium text-yellow-900 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Informations importantes
            </h3>
            <ul className="text-yellow-800 text-sm space-y-2">
              <li>• Aucun paiement n&apos;est requis à cette étape</li>
              <li>
                • Nous finaliserons ensemble les détails et le tarif lors de la
                consultation
              </li>
              <li>
                • Vous recevrez un email de confirmation dans quelques minutes
              </li>
              <li>
                • N&apos;hésitez pas à nous contacter si vous avez des questions
              </li>
            </ul>
          </div>

          {/* Témoignage */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <blockquote className="text-gray-700 italic mb-4">
              &quot;Mon portrait d&apos;âme a révélé des aspects de ma
              personnalité que je n&apos;avais jamais vus. C&apos;est comme si
              l&apos;artiste avait capturé mon essence profonde et l&apos;avait
              transformée en beauté.&quot;
            </blockquote>
            <cite className="text-gray-600 text-sm">
              - Marie L., Portrait d&apos;Âme 2024
            </cite>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boutique"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
            >
              Découvrir d&apos;autres œuvres
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Nous contacter
            </Link>
          </div>

          {/* Note personnelle */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 italic">
              &quot;Chaque portrait d&apos;âme est une aventure unique.
              J&apos;ai hâte de découvrir votre lumière intérieure et de la
              partager avec le monde.&quot;
            </p>
            <p className="text-gray-700 font-medium mt-2">- L&apos;Artiste</p>
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
