import Link from "next/link";
import PortraitOrderForm from "../../../components/PortraitOrderForm";

export default function PortraitOrderPage() {
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
              className="text-gray-600 hover:text-gray-800 font-medium"
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

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/portrait-d-ame" className="hover:text-gray-800">
              Portraits d&apos;Âme
            </Link>
            <span>/</span>
            <span className="text-gray-900">Commande</span>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-gray-800 mb-4">
              Commandez votre Portrait d&apos;Âme
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Partagez-nous vos informations pour que nous puissions créer une
              œuvre unique qui révèle votre essence profonde.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
              <h2 className="text-lg font-medium text-blue-900 mb-2">
                📞 Consultation personnalisée incluse
              </h2>
              <p className="text-blue-800 text-sm">
                Après validation de votre commande, nous vous contactons dans
                les 24-48h pour organiser une consultation approfondie qui
                permettra de capturer votre essence unique.
              </p>
            </div>
          </div>

          {/* Processus créatif */}
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">
              Le processus créatif
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600 text-sm">
                  Entretien approfondi pour comprendre votre personnalité, vos
                  aspirations et votre histoire unique.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Création
                </h3>
                <p className="text-gray-600 text-sm">
                  Processus artistique intuitif de 2-4 semaines pour laisser
                  émerger votre véritable essence.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Révélation
                </h3>
                <p className="text-gray-600 text-sm">
                  Présentation de votre portrait d&apos;âme et échange sur les
                  éléments révélés.
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">
              Partagez-nous votre histoire
            </h2>
            <PortraitOrderForm />
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
