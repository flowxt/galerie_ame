"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

export default function ArtworkCard({ artwork }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleStripeCheckout = async (artwork) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          artwork: {
            _id: artwork._id,
            title: artwork.title,
            description: artwork.description,
            price: artwork.price,
            image: artwork.image
              ? urlFor(artwork.image).width(400).height(300).url()
              : null,
          },
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.url) {
        // Rediriger vers Stripe Checkout ou page de succès simulée
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Erreur lors du checkout:", error);
      alert("Erreur lors de la commande. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

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
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative h-64 bg-gray-100">
        <Link href={`/boutique/${artwork.slug?.current}`}>
          {artwork.image ? (
            <Image
              src={urlFor(artwork.image).width(400).height(300).url()}
              alt={artwork.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ) : (
            <div className="h-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="text-gray-500">Image de {artwork.title}</span>
            </div>
          )}
        </Link>

        {/* Badges de statut */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {artwork.featured && (
            <div className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-lg text-sm font-medium">
              ⭐ Coup de cœur
            </div>
          )}

          {artwork.status === "sold" && (
            <div className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
              ❌ VENDU
            </div>
          )}

          {artwork.status === "reserved" && (
            <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
              🔶 RÉSERVÉ
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {getCategoryLabel(artwork.category)}
          </span>
          {artwork.technique && (
            <span className="text-sm text-gray-500 ml-2">
              • {artwork.technique}
            </span>
          )}
        </div>
        <Link href={`/boutique/${artwork.slug?.current}`}>
          <h3 className="text-xl font-medium text-gray-800 mb-2 hover:text-gray-600 transition cursor-pointer">
            {artwork.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{artwork.description}</p>

        {/* Prix */}
        <div className="mb-4">
          <span className="text-2xl font-light text-gray-800">
            {artwork.price}€
          </span>
          {artwork.status !== "available" && (
            <span className="text-sm text-gray-500 ml-2">(Non disponible)</span>
          )}
        </div>

        {/* Boutons */}
        <div className="flex gap-3">
          <Link
            href={`/boutique/${artwork.slug?.current}`}
            className="flex-1 border border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-center text-sm font-medium"
          >
            {artwork.status === "available"
              ? "En savoir plus"
              : "Voir les détails"}
          </Link>

          {artwork.status === "available" ? (
            <button
              onClick={() =>
                (window.location.href = `/boutique/commande/${artwork.slug?.current}`)
              }
              disabled={isLoading}
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm font-medium"
            >
              Commander
            </button>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed text-sm font-medium"
            >
              {artwork.status === "sold" ? "Vendu" : "Réservé"}
            </button>
          )}
        </div>

        {/* Message pour œuvres non disponibles */}
        {artwork.status !== "available" && (
          <div className="mt-3 text-center">
            <Link
              href="/contact"
              className="text-xs text-gray-600 hover:text-gray-800 border-b border-dotted border-gray-400 hover:border-gray-600"
            >
              💡 Intéressé par une création similaire ?
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
