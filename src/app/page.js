import Link from "next/link";
import {
  getFeaturedTestimonials,
  getFeaturedArtworks,
} from "../lib/sanity-queries";

export default async function Home() {
  // Récupérer les témoignages et œuvres mises en avant
  const testimonials = await getFeaturedTestimonials();
  const featuredArtworks = await getFeaturedArtworks();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Portraits d&apos;Âme
          </h1>
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

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-800 mb-6">
            Révélez l&apos;essence de votre âme
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez l&apos;art unique des portraits d&apos;âme, où chaque
            trait révèle la beauté profonde et authentique de votre être
            intérieur.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/portrait-d-ame"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Découvrir les Portraits d&apos;Âme
            </Link>
            <Link
              href="/boutique"
              className="border border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Voir la Boutique
            </Link>
          </div>
        </div>

        {/* Presentation Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-light text-gray-800 mb-6">
              L&apos;Art de Capturer l&apos;Âme
            </h3>
            <p className="text-gray-600 mb-4">
              Chaque portrait d&apos;âme est une exploration profonde de votre
              essence unique. À travers une approche artistique intuitive, nous
              révélons les aspects les plus authentiques de votre personnalité.
            </p>
            <p className="text-gray-600">
              Plus qu&apos;un simple portrait, c&apos;est un miroir de votre âme
              qui vous accompagnera dans votre parcours de découverte de soi.
            </p>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image d&apos;exemple à venir</span>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-light text-gray-800 mb-8">
            Témoignages
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials && testimonials.length > 0 ? (
              testimonials.slice(0, 3).map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-gray-800 font-medium">
                    - {testimonial.initials}
                  </p>
                </div>
              ))
            ) : (
              // Témoignages par défaut si rien dans Sanity
              <>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 italic mb-4">
                    &quot;Mon portrait d&apos;âme m&apos;a révélé des aspects de
                    moi que je n&apos;avais jamais vus...&quot;
                  </p>
                  <p className="text-gray-800 font-medium">- Marie L.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 italic mb-4">
                    &quot;Une expérience artistique transformatrice qui continue
                    de m&apos;inspirer...&quot;
                  </p>
                  <p className="text-gray-800 font-medium">- Pierre D.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 italic mb-4">
                    &quot;L&apos;artiste a su capturer quelque chose
                    d&apos;indescriptible...&quot;
                  </p>
                  <p className="text-gray-800 font-medium">- Sophie M.</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800 text-white p-12 rounded-lg">
          <h3 className="text-3xl font-light mb-4">
            Prêt pour votre Portrait d&apos;Âme ?
          </h3>
          <p className="text-gray-300 mb-6">
            Commencez votre voyage vers la découverte de votre essence véritable
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Nous Contacter
          </Link>
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
