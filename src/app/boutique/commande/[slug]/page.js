import Link from "next/link";
import { getArtworkBySlug } from "../../../../lib/sanity-queries";
import { urlFor } from "../../../../lib/sanity";
import Image from "next/image";
import ArtworkOrderForm from "../../../../components/ArtworkOrderForm";
import { notFound } from "next/navigation";

export default async function ArtworkOrderPage({ params }) {
  const artwork = await getArtworkBySlug(params.slug);

  if (!artwork) {
    notFound();
  }

  // Fonction pour formater le nom de la catégorie
  const getCategoryLabel = (category) => {
    const categoryLabels = {
      "portrait-ame": "Portraits d'Âme",
      original: "Œuvres Originales",
      reproduction: "Reproductions",
      custom: "Commandes Personnalisées",
    };
    return categoryLabels[category] || category;
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

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/boutique" className="hover:text-gray-800">
              Boutique
            </Link>
            <span>/</span>
            <Link
              href={`/boutique/${artwork.slug?.current}`}
              className="hover:text-gray-800"
            >
              {artwork.title}
            </Link>
            <span>/</span>
            <span className="text-gray-900">Commande</span>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-light text-gray-800 mb-8 text-center">
            Finaliser votre commande
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Résumé de l'œuvre */}
            <div>
              <h2 className="text-xl font-medium text-gray-800 mb-6">
                Résumé de votre commande
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg">
                {/* Image */}
                <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {artwork.image ? (
                    <Image
                      src={urlFor(artwork.image).width(400).height(300).url()}
                      alt={artwork.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <span className="text-gray-500">
                        Image de {artwork.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Détails */}
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                      {getCategoryLabel(artwork.category)}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-800">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{artwork.description}</p>

                  {/* Prix */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-800">
                        Prix :
                      </span>
                      <span className="text-2xl font-light text-gray-800">
                        {artwork.price}€
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                      <span>Livraison :</span>
                      <span className="text-green-600 font-medium">
                        Offerte
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between items-center font-medium">
                        <span>Total :</span>
                        <span className="text-xl text-gray-800">
                          {artwork.price}€
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations sur la livraison */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">
                  Informations de livraison
                </h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Livraison soignée et assurée</li>
                  <li>• Emballage professionnel pour œuvres d&apos;art</li>
                  <li>• Délai de livraison : 5-7 jours ouvrés</li>
                  <li>• Certificat d&apos;authenticité inclus</li>
                </ul>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <h2 className="text-xl font-medium text-gray-800 mb-6">
                Vos informations
              </h2>
              <ArtworkOrderForm artwork={artwork} />
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
