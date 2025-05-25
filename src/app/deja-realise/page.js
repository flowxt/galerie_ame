import Link from "next/link";
import Image from "next/image";
import { getSoldArtworks } from "../../lib/sanity-queries";
import { urlFor } from "../../lib/sanity";

export default async function DejaRealisePage() {
  const soldArtworks = await getSoldArtworks();

  // Fonction pour formater le nom de la catégorie
  const getCategoryLabel = (category) => {
    const categoryLabels = {
      "portrait-ame": "Portraits d'Âme",
      original: "Œuvres Originales",
      reproduction: "Reproductions",
      "attrape-reves": "Attrape-rêves",
      custom: "Commandes Personnalisées",
    };
    return categoryLabels[category] || category;
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
    });
  };

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
              className="text-gray-600 hover:text-gray-800 font-medium"
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
            <div className="text-6xl mr-4">✨</div>
            <h1 className="text-5xl font-light text-gray-800">Déjà réalisé</h1>
            <div className="text-6xl ml-4">🎨</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez les œuvres qui ont trouvé leur foyer et les témoignages de
            ceux qui vivent désormais avec ces créations uniques.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-yellow-800 text-sm">
              💡 <strong>Chaque pièce est unique</strong> - Ces œuvres ne sont
              plus disponibles à l&apos;achat, mais elles peuvent vous inspirer
              pour une commande personnalisée.
            </p>
          </div>
        </div>

        {/* Statistiques */}
        {soldArtworks && soldArtworks.length > 0 && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-light text-gray-800 mb-4">
                {soldArtworks.length} œuvre{soldArtworks.length > 1 ? "s" : ""}{" "}
                qui illuminent le quotidien
              </h2>
              <p className="text-gray-600">
                Autant de foyers touchés par l&apos;art et d&apos;histoires
                uniques qui continuent...
              </p>
            </div>
          </div>
        )}

        {/* Galerie des œuvres vendues */}
        {soldArtworks && soldArtworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {soldArtworks.map((artwork) => (
              <Link
                key={artwork._id}
                href={`/boutique/${artwork.slug?.current}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Image avec overlay "VENDU" */}
                <div className="relative h-64 bg-gray-100">
                  {artwork.image ? (
                    <Image
                      src={urlFor(artwork.image).width(400).height(300).url()}
                      alt={artwork.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-t-lg"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <span className="text-gray-500">
                        Image de {artwork.title}
                      </span>
                    </div>
                  )}
                  {/* Overlay vendu */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium transform -rotate-12">
                      ❌ VENDU
                    </div>
                  </div>
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-lg text-sm font-medium text-gray-800">
                    {getCategoryLabel(artwork.category)}
                  </div>
                  {/* Indicateur cliquable */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
                    👁️ Voir détails
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {artwork.description}
                  </p>

                  {/* Date de vente */}
                  <div className="text-sm text-gray-500 mb-4">
                    Réalisé en{" "}
                    {formatDate(artwork.soldDate || artwork.createdDate)}
                  </div>

                  {/* Témoignage si disponible */}
                  {artwork.buyerTestimonial && (
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <blockquote className="text-blue-800 italic text-sm">
                        &quot;{artwork.buyerTestimonial}&quot;
                      </blockquote>
                    </div>
                  )}

                  {/* Prix (pour inspiration) */}
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Prix de référence :</span>
                    <span className="font-medium">{artwork.price}€</span>
                  </div>

                  {/* Note pour cliquer */}
                  <div className="mt-3 text-center">
                    <span className="text-blue-600 text-sm hover:underline">
                      Cliquer pour voir tous les détails →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🌱</div>
            <h2 className="text-2xl font-light text-gray-800 mb-4">
              Premières créations en cours
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Cette galerie se remplira au fur et à mesure que nos œuvres
              trouvent leur foyer. Soyez parmi les premiers à découvrir nos
              créations !
            </p>
            <Link
              href="/boutique"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
            >
              Découvrir les œuvres disponibles
            </Link>
          </div>
        )}

        {/* Section inspiration pour commander */}
        {soldArtworks && soldArtworks.length > 0 && (
          <div className="mt-20 bg-gray-50 rounded-2xl p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                Inspiré par ces créations ?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Chaque œuvre est unique et ne peut être reproduite à
                l&apos;identique. Cependant, nous pouvons créer quelque chose
                d&apos;uniquement vôtre dans le même esprit.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Style similaire
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Nous pouvons nous inspirer du style qui vous plaît
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Personnalisation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Adaptation à vos goûts et votre espace
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💎</div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Exclusivité
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Votre œuvre sera tout aussi unique
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/portrait-d-ame/commande"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-medium"
                >
                  Commander un Portrait d&apos;Âme
                </Link>
                <Link
                  href="/contact"
                  className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Discuter d&apos;un projet personnalisé
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Témoignages généraux */}
        <div className="mt-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            Ce que disent nos collectionneurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                &quot;Mon portrait d&apos;âme trône dans mon salon et ne cesse
                d&apos;émerveiller mes invités. C&apos;est devenu une pièce de
                conversation incontournable.&quot;
              </blockquote>
              <cite className="text-gray-600 text-sm">- Émilie D.</cite>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                &quot;L&apos;attrape-rêves que j&apos;ai commandé protège
                vraiment mes nuits. Depuis que je l&apos;ai, mes rêves sont plus
                beaux et plus inspirants.&quot;
              </blockquote>
              <cite className="text-gray-600 text-sm">- Marc L.</cite>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                &quot;Une expérience artistique complète, de la consultation à
                la livraison. Mon œuvre est exactement ce dont j&apos;avais
                besoin dans ma vie.&quot;
              </blockquote>
              <cite className="text-gray-600 text-sm">- Sophie R.</cite>
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
