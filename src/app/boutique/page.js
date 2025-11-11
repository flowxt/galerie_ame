"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Palette,
  Eye,
  ShoppingBag,
  MessageCircle,
  Loader2,
} from "lucide-react";
import Image from "next/image";

export default function Boutique() {
  // État
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Refs pour les animations
  const collectionRef = useRef(null);
  const customRef = useRef(null);

  // InView hooks
  const collectionInView = useInView(collectionRef, { once: true, margin: "-100px" });
  const customInView = useInView(customRef, { once: true, margin: "-100px" });

  // Récupérer les produits au chargement
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch("/api/products");
        const data = await response.json();

        if (data.success) {
          setProducts(data.products);
        } else {
          setError("Impossible de charger les produits");
        }
      } catch (err) {
        console.error("Erreur:", err);
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Fonction pour acheter un produit
  const handleBuyProduct = async (productId) => {
    try {
      const response = await fetch("/api/checkout-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur lors de la création du paiement");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/art.jpg"
            alt="Art spirituel de Véronique"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
        </div>

        {/* Éléments spirituels flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-white/30 animate-float">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-purple-300/40 animate-float animation-delay-700">
            <Heart className="w-5 h-5" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-rose-300/30 animate-float animation-delay-1000">
            <Star className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg"
          >
            <ShoppingBag className="w-4 h-4 text-purple-300" />
            <span className="text-white text-sm font-medium">
              Œuvres d&apos;art spirituelles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white"
          >
            <span className="block bg-gradient-to-r from-purple-300 to-rose-300 bg-clip-text text-transparent font-medium">
              Boutique d&apos;Art Spirituel
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson"
          >
            Découvrez notre collection d&apos;œuvres uniques. Chaque création
            porte en elle une énergie particulière et une intention spirituelle
            profonde.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#collection"
              className="group bg-gradient-to-r from-purple-500 to-rose-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Découvrir la Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/portrait-d-ame#tarifs"
              className="group bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Création Sur Mesure</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Collection */}
      <section
        ref={collectionRef}
        id="collection"
        className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={collectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
              <ShoppingBag className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium text-sm">
                Notre Collection
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Œuvres
              <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                {" "}
                Disponibles
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection d&apos;œuvres spirituelles uniques,
              créées avec intention et amour.
            </p>
          </motion.div>

          {/* Chargement */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <Loader2 className="w-12 h-12 text-purple-600 animate-spin mb-4" />
              <p className="text-gray-600 text-lg">
                Chargement des œuvres...
              </p>
            </motion.div>
          )}

          {/* Erreur */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-red-600 text-lg mb-8">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-purple-500 to-rose-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-rose-600 transition-all duration-300"
              >
                Réessayer
              </button>
            </motion.div>
          )}

          {/* Grille de produits */}
          {!loading && !error && products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={collectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={collectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-rose-100">
                        <Palette className="w-20 h-20 text-purple-300" />
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-2xl font-playfair font-medium text-gray-800 mb-3">
                      {product.name}
                    </h3>

                    {product.description && (
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      {product.price && (
                        <span className="text-3xl font-light text-purple-600">
                          {product.price.formatted}
                        </span>
                      )}

                      <button
                        onClick={() => handleBuyProduct(product.id)}
                        className="group/btn bg-gradient-to-r from-purple-500 to-rose-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                      >
                        <span className="flex items-center space-x-2">
                          <ShoppingBag className="w-4 h-4" />
                          <span>Acheter</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Aucun produit */}
          {!loading && !error && products.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingBag className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-2xl font-light text-gray-800 mb-4">
                Aucune œuvre disponible pour le moment
              </h3>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Revenez bientôt pour découvrir nos nouvelles créations, ou
                commandez une œuvre personnalisée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/portrait-d-ame#tarifs"
                  className="group bg-gradient-to-r from-purple-500 to-rose-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Commander un Portrait d&apos;Âme</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group bg-white/80 backdrop-blur-sm border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Nous Contacter</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section Création Sur Mesure */}
      <section ref={customRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={customInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-2 mb-6">
              <Palette className="w-5 h-5 text-rose-600" />
              <span className="text-rose-800 font-medium text-sm">
                Création Personnalisée
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Vous ne trouvez pas
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                ce que vous cherchez ?
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous pour discuter d&apos;une création sur mesure qui
              vous ressemble.
            </p>

            <Link
              href="/contact"
              className="group bg-gradient-to-r from-rose-500 to-purple-500 text-white px-10 py-5 rounded-full hover:from-rose-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-xl inline-flex items-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Nous Contacter</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
