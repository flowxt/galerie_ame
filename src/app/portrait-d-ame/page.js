import Link from "next/link";
import PortraitOrderButton from "../../components/PortraitOrderButton";

export default function PortraitDame() {
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-800 mb-6">
            Les Portraits d&apos;Âme
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expérience artistique unique qui révèle la beauté profonde et
            authentique de votre essence intérieure à travers l&apos;art du
            portrait.
          </p>
        </div>

        {/* Explanation Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Qu&apos;est-ce qu&apos;un Portrait d&apos;Âme ?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Un portrait d&apos;âme va bien au-delà de la simple
                représentation physique. C&apos;est une exploration artistique
                qui capture l&apos;essence unique de votre être, vos émotions
                profondes et votre personnalité authentique.
              </p>
              <p>
                À travers un processus créatif intuitif, chaque portrait révèle
                des aspects cachés de votre personnalité, créant une œuvre
                d&apos;art qui vous accompagnera dans votre développement
                personnel.
              </p>
              <p>
                Cette approche artistique unique combine technique
                traditionnelle et perception spirituelle pour créer une œuvre
                qui résonne avec votre âme.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">
              Exemple de Portrait d&apos;Âme
            </span>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            Le Processus Créatif
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Consultation
              </h3>
              <p className="text-gray-600">
                Un entretien approfondi pour comprendre votre essence et vos
                aspirations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Création
              </h3>
              <p className="text-gray-600">
                Un processus artistique intuitif qui laisse émerger votre
                véritable nature.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Révélation
              </h3>
              <p className="text-gray-600">
                La découverte de votre portrait d&apos;âme, miroir de votre
                essence profonde.
              </p>
            </div>
          </div>
        </div>

        {/* Examples Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            Exemples de Portraits d&apos;Âme
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Portrait 1</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Portrait 2</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Portrait 3</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            Questions Fréquentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Combien de temps prend la création d&apos;un portrait d&apos;âme
                ?
              </h3>
              <p className="text-gray-600">
                Le processus complet prend généralement entre 2 à 4 semaines,
                incluant la consultation initiale, la création artistique et les
                éventuels ajustements.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Faut-il poser physiquement pour le portrait ?
              </h3>
              <p className="text-gray-600">
                Non, le portrait d&apos;âme se base sur votre essence plutôt que
                sur votre apparence physique. Une consultation approfondie
                suffit à capturer votre énergie unique.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Quels matériaux sont utilisés ?
              </h3>
              <p className="text-gray-600">
                Chaque portrait est unique et peut utiliser différents médiums
                selon l&apos;inspiration : aquarelle, pastel, huile, ou
                techniques mixtes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-light mb-4">
            Commandez Votre Portrait d&apos;Âme
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Prêt à découvrir votre essence profonde ? Commencez votre voyage
            artistique et spirituel dès aujourd&apos;hui.
          </p>
          <div className="space-y-4">
            <p className="text-2xl font-light text-white">À partir de 299€</p>
            <PortraitOrderButton />
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
