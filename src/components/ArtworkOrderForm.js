"use client";

import { useState } from "react";
import Link from "next/link";
import { urlFor } from "../lib/sanity";

export default function ArtworkOrderForm({ artwork }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Adresse de livraison
    address: "",
    addressComplement: "",
    postalCode: "",
    city: "",
    country: "France",

    // Options
    message: "",
    newsletter: false,
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Effacer l'erreur si le champ est modifié
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation des champs obligatoires
    if (!formData.firstName.trim())
      newErrors.firstName = "Le prénom est obligatoire";
    if (!formData.lastName.trim())
      newErrors.lastName = "Le nom est obligatoire";
    if (!formData.email.trim())
      newErrors.email = "L&apos;email est obligatoire";
    if (!formData.phone.trim())
      newErrors.phone = "Le téléphone est obligatoire";
    if (!formData.address.trim())
      newErrors.address = "L&apos;adresse est obligatoire";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Le code postal est obligatoire";
    if (!formData.city.trim()) newErrors.city = "La ville est obligatoire";
    if (!formData.terms) newErrors.terms = "Vous devez accepter les conditions";

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Format d&apos;email invalide";
    }

    // Validation code postal français
    const postalCodeRegex = /^[0-9]{5}$/;
    if (formData.postalCode && !postalCodeRegex.test(formData.postalCode)) {
      newErrors.postalCode = "Code postal invalide (5 chiffres)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // D'abord, réserver l'œuvre
      const reserveResponse = await fetch("/api/update-artwork-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          artworkId: artwork._id,
          status: "reserved",
        }),
      });

      if (!reserveResponse.ok) {
        throw new Error("Impossible de réserver cette œuvre");
      }

      // Préparer les données pour Stripe avec les informations client
      const orderData = {
        artwork: {
          _id: artwork._id,
          title: artwork.title,
          description: artwork.description,
          price: artwork.price,
          image: artwork.image
            ? urlFor(artwork.image).width(400).height(300).url()
            : null,
        },
        customer: formData,
        orderType: "artwork",
      };

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (data.error) {
        // Si erreur, remettre l'œuvre disponible
        await fetch("/api/update-artwork-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            artworkId: artwork._id,
            status: "available",
          }),
        });
        throw new Error(data.error);
      }

      if (data.url) {
        // Rediriger vers Stripe Checkout avec les infos client
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Erreur lors de la commande:", error);

      // En cas d'erreur, remettre l'œuvre disponible
      try {
        await fetch("/api/update-artwork-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            artworkId: artwork._id,
            status: "available",
          }),
        });
      } catch (revertError) {
        console.error("Erreur lors de la remise à disposition:", revertError);
      }

      alert("Erreur lors de la commande. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Informations personnelles */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Informations personnelles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Prénom *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Votre prénom"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Votre nom"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="06 12 34 56 78"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Adresse de livraison */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Adresse de livraison
        </h3>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Adresse *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="123 Rue de la Paix"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="addressComplement"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Complément d'adresse
            </label>
            <input
              type="text"
              id="addressComplement"
              name="addressComplement"
              value={formData.addressComplement}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="Appartement, étage, bâtiment..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Code postal *
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                  errors.postalCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="75001"
                maxLength="5"
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ville *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Paris"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Message optionnel */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message ou demandes particulières
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          placeholder="Précisions sur la livraison, questions sur l'œuvre..."
        />
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
          />
          <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
            Je souhaite recevoir la newsletter avec les nouvelles œuvres et
            actualités de l&apos;artiste
          </label>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className={`mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 rounded ${
              errors.terms ? "border-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            J&apos;accepte les{" "}
            <Link href="/conditions" className="text-gray-800 hover:underline">
              conditions générales de vente
            </Link>{" "}
            et la{" "}
            <Link
              href="/confidentialite"
              className="text-gray-800 hover:underline"
            >
              politique de confidentialité
            </Link>{" "}
            *
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
        )}
      </div>

      {/* Bouton de soumission */}
      <div className="pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg hover:bg-gray-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Traitement en cours...
            </>
          ) : (
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              Procéder au paiement sécurisé
            </>
          )}
        </button>

        <p className="text-center text-sm text-gray-500 mt-3">
          Paiement sécurisé par Stripe • Satisfait ou remboursé 14 jours
        </p>
      </div>
    </form>
  );
}
