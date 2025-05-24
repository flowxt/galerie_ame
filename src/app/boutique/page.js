import Link from "next/link";
import { getArtworks } from "../../lib/sanity-queries";
import ArtworkCard from "../../components/ArtworkCard";

export default async function Boutique() {
  // Récupérer les œuvres depuis Sanity
  const artworks = await getArtworks();

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
              className="text-gray-600 hover:text-gray-800 font-medium"
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-800 mb-6">Boutique</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre collection d&apos;œuvres disponibles. Chaque
            portrait est unique et porte en lui une énergie particulière.
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg">
              Tous
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
              Portraits d&apos;Âme
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
              Œuvres Originales
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
              Reproductions
            </button>
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artworks && artworks.length > 0 ? (
            artworks.map((artwork) => (
              <ArtworkCard key={artwork._id} artwork={artwork} />
            ))
          ) : (
            // Fallback si pas d'œuvres dans Sanity
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600 text-lg mb-4">
                Aucune œuvre disponible pour le moment.
              </p>
              <p className="text-gray-500">
                Connectez-vous au studio Sanity pour ajouter des œuvres à votre
                boutique.
              </p>
            </div>
          )}
        </div>

        {/* Custom Order Section */}
        <div className="text-center bg-gray-50 p-12 rounded-lg">
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Commandez votre portrait d&apos;âme personnalisé ou contactez-nous
            pour discuter d&apos;une création sur mesure.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/portrait-d-ame"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Commander un Portrait d&apos;Âme
            </Link>
            <Link
              href="/contact"
              className="border border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Nous Contacter
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
