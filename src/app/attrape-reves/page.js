import Link from "next/link";
import Image from "next/image";
import { getDreamCatchers } from "../../lib/sanity-queries";
import ArtworkCard from "../../components/ArtworkCard";

export default async function AttrapesRevesPage() {
  const dreamCatchers = await getDreamCatchers();

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
              className="text-gray-600 hover:text-gray-800 font-medium"
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

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="text-6xl mr-4">🌙</div>
            <h1 className="text-5xl font-light text-gray-800">Attrape-rêves</h1>
            <div className="text-6xl ml-4">✨</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Créations artisanales uniques pour protéger vos nuits et capturer
            vos plus beaux songes. Chaque attrape-rêves est confectionné à la
            main avec des matériaux naturels et une intention particulière.
          </p>
        </div>

        {/* Philosophie */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">
              L&apos;art ancestral revisité
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🪶</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Matériaux naturels
                </h3>
                <p className="text-gray-600 text-sm">
                  Plumes authentiques, perles de bois, fils de coton naturel et
                  éléments récoltés en conscience
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Création intuitive
                </h3>
                <p className="text-gray-600 text-sm">
                  Chaque attrape-rêves naît d&apos;une méditation et porte une
                  énergie particulière
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💫</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Pièces uniques
                </h3>
                <p className="text-gray-600 text-sm">
                  Aucune reproduction possible - chaque création est une œuvre
                  d&apos;art unique
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des attrape-rêves */}
        {dreamCatchers && dreamCatchers.length > 0 ? (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-light text-gray-800">
                Créations disponibles
              </h2>
              <div className="text-sm text-gray-600">
                {dreamCatchers.length} pièce
                {dreamCatchers.length > 1 ? "s" : ""} unique
                {dreamCatchers.length > 1 ? "s" : ""} disponible
                {dreamCatchers.length > 1 ? "s" : ""}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dreamCatchers.map((dreamCatcher) => (
                <ArtworkCard key={dreamCatcher._id} artwork={dreamCatcher} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🌸</div>
            <h2 className="text-2xl font-light text-gray-800 mb-4">
              Nouvelles créations en cours
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous préparons de nouveaux attrape-rêves magiques. En attendant,
              vous pouvez commander une création personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
              >
                Commander une création sur mesure
              </Link>
              <Link
                href="/boutique"
                className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Découvrir nos autres œuvres
              </Link>
            </div>
          </div>
        )}

        {/* Section personnalisation */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Création sur mesure
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Vous rêvez d&apos;un attrape-rêves unique qui vous ressemble ?
              Partagez-nous vos intentions, vos couleurs préférées et vos
              éléments symboliques.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Options disponibles :
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Tailles de 15cm à 40cm de diamètre
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Choix des couleurs et matériaux
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Intégration de pierres naturelles
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Symboles personnalisés
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Le processus :
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">1.</span>
                    <span>Consultation pour définir vos intentions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">2.</span>
                    <span>Création méditatve sur 1-2 semaines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">3.</span>
                    <span>Purification et bénédiction de l&apos;œuvre</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">4.</span>
                    <span>Livraison avec guide d&apos;utilisation</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-medium"
            >
              <span className="mr-2">🌙</span>
              Discuter de mon projet
            </Link>
          </div>
        </div>

        {/* Témoignages */}
        <div className="mt-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            Témoignages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <blockquote className="text-gray-700 italic mb-4">
                &quot;Mon attrape-rêves est magnifique ! Depuis que je l&apos;ai
                installé, mes nuits sont plus paisibles et mes rêves plus
                inspirants.&quot;
              </blockquote>
              <cite className="text-gray-600 text-sm">- Sarah M.</cite>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <blockquote className="text-gray-700 italic mb-4">
                &quot;Une création sur mesure qui dépasse toutes mes attentes.
                L&apos;artiste a vraiment capturé l&apos;essence de ma
                demande.&quot;
              </blockquote>
              <cite className="text-gray-600 text-sm">- Thomas L.</cite>
            </div>
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
