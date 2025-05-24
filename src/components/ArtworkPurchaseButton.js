"use client";

import { useState } from "react";
import { urlFor } from "../lib/sanity";

export default function ArtworkPurchaseButton({ artwork }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleStripeCheckout = async () => {
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

  return (
    <div className="space-y-4">
      {/* Prix et bouton principal */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-light text-gray-800">
            Prix : {artwork.price}€
          </span>
          <span className="text-sm text-gray-600">Livraison offerte</span>
        </div>

        <button
          onClick={() =>
            (window.location.href = `/boutique/commande/${artwork.slug?.current}`)
          }
          disabled={isLoading}
          className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg hover:bg-gray-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <>
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m.6 5l-1.4-7M7 13L5.6 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
              ></path>
            </svg>
            Commander cette œuvre
          </>
        </button>
      </div>

      {/* Informations complémentaires */}
      <div className="text-sm text-gray-600 space-y-2">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-green-600"
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
          <span>Paiement sécurisé par Stripe</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-green-600"
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
          <span>Livraison soignée et assurée</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-green-600"
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
          <span>Certificat d&apos;authenticité inclus</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-green-600"
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
          <span>Satisfait ou remboursé 14 jours</span>
        </div>
      </div>

      {/* Contact pour questions */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-600 mb-2">
          Une question sur cette œuvre ?
        </p>
        <a
          href="/contact"
          className="text-gray-800 hover:underline text-sm font-medium"
        >
          Contactez l&apos;artiste →
        </a>
      </div>
    </div>
  );
}
