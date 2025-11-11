"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PortraitOrderForm({ preselectedFormat = null }) {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations personnelles pour Portrait d&apos;âme
    firstName: "",
    lastName: "",
    maidenName: "",
    birthDate: "",
    birthPlace: "",
    email: "",
    phone: "",

    // Adresse de livraison
    address: "",
    addressComplement: "",
    postalCode: "",
    city: "",
    country: "France",

    // Format et budget
    format: "intime",
    budget: "240",

    // Communication et finalisation
    message: "",
    newsletter: false,
    terms: false,
    dataConsent: false,
  });

  const [errors, setErrors] = useState({});

  // Présélectionner le format depuis l'URL ou les props
  useEffect(() => {
    const formatBudgetMap = {
      intime: "240",
      elegant: "340",
      duo: "500",
    };

    // Priorité au prop preselectedFormat, sinon regarder l'URL
    const formatToUse = preselectedFormat || searchParams?.get("format");

    if (formatToUse && formatBudgetMap[formatToUse]) {
      setFormData((prev) => ({
        ...prev,
        format: formatToUse,
        budget: formatBudgetMap[formatToUse],
      }));
    }
  }, [searchParams, preselectedFormat]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Si on change le format, mettre à jour le budget automatiquement
    if (name === "format") {
      const formatBudgetMap = {
        intime: "240",
        elegant: "340",
        duo: "500",
      };
      setFormData((prev) => ({
        ...prev,
        format: value,
        budget: formatBudgetMap[value] || "240",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "Le prénom est obligatoire";
      if (!formData.lastName.trim())
        newErrors.lastName = "Le nom est obligatoire";
      if (!formData.birthDate.trim())
        newErrors.birthDate = "La date de naissance est obligatoire";
      if (!formData.birthPlace.trim())
        newErrors.birthPlace = "Le lieu de naissance est obligatoire";
      if (!formData.email.trim())
        newErrors.email = "L&apos;email est obligatoire";
      if (!formData.phone.trim())
        newErrors.phone = "Le téléphone est obligatoire";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email && !emailRegex.test(formData.email)) {
        newErrors.email = "Format d&apos;email invalide";
      }
    }

    if (step === 2) {
      if (!formData.address.trim())
        newErrors.address = "L&apos;adresse est obligatoire";
      if (!formData.postalCode.trim())
        newErrors.postalCode = "Le code postal est obligatoire";
      if (!formData.city.trim()) newErrors.city = "La ville est obligatoire";

      const postalCodeRegex = /^[0-9]{5}$/;
      if (formData.postalCode && !postalCodeRegex.test(formData.postalCode)) {
        newErrors.postalCode = "Code postal invalide (5 chiffres)";
      }
    }

    if (step === 3) {
      if (!formData.terms)
        newErrors.terms = "Vous devez accepter les conditions";
      if (!formData.dataConsent)
        newErrors.dataConsent = "Le consentement est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Mapper les formats aux IDs de produits Stripe
  const getStripeProductId = (format) => {
    const productIds = {
      intime: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PORTRAIT_INTIME,
      elegant: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PORTRAIT_ELEGANT,
      duo: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PORTRAIT_DUO,
    };
    return productIds[format];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(3)) return;

    setIsLoading(true);

    try {
      // Récupérer l'ID du produit Stripe en fonction du format choisi
      const productId = getStripeProductId(formData.format);

      if (!productId) {
        alert("Erreur : format de portrait non reconnu");
        setIsLoading(false);
        return;
      }

      // Envoyer l'email de notification avant la redirection vers Stripe
      try {
        await fetch("/api/send-portrait-order-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
      } catch (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError);
        // On continue même si l'email échoue
      }

      // Appeler l'API pour créer une session Stripe Checkout
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: productId,
          customerData: {
            ...formData,
            orderType: "portrait-ame",
          },
          successUrl: `${window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/portrait-d-ame#tarifs`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Erreur lors de la création de la session"
        );
      }

      // Rediriger vers Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("URL de paiement non reçue");
      }
    } catch (error) {
      console.error("Erreur lors de l&apos;envoi:", error);
      alert(
        "Erreur lors de la création du paiement. Veuillez réessayer ou contacter le support."
      );
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Informations personnelles
            </h3>
            <p className="text-gray-600 mb-6">
              Ces informations essentielles nous permettent de créer votre
              portrait d&apos;âme personnalisé.
            </p>

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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="maidenName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom de jeune fille (si applicable)
              </label>
              <input
                type="text"
                id="maidenName"
                name="maidenName"
                value={formData.maidenName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Votre nom de naissance"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date de naissance *
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.birthDate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.birthDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.birthDate}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="birthPlace"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Lieu de naissance *
                </label>
                <input
                  type="text"
                  id="birthPlace"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.birthPlace ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ville, pays"
                />
                {errors.birthPlace && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.birthPlace}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Adresse de livraison
            </h3>
            <p className="text-gray-600 mb-6">
              Votre portrait d&apos;âme vous sera envoyé avec livraison offerte.
            </p>

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
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
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
                Complément d&apos;adresse
              </label>
              <input
                type="text"
                id="addressComplement"
                name="addressComplement"
                value={formData.addressComplement}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.postalCode ? "border-red-500" : "border-gray-300"
                  }`}
                  maxLength="5"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.postalCode}
                  </p>
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Format et finalisation
            </h3>
            <p className="text-gray-600 mb-6">
              Choisissez le format de votre portrait d&apos;âme et finalisez
              votre commande.
            </p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Format de votre Portrait d&apos;Âme
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.format === "intime"
                      ? "border-rose-500 bg-rose-50"
                      : "border-gray-300 hover:border-rose-300"
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      format: "intime",
                      budget: "240",
                    }))
                  }
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-800">
                      Format Intime
                    </div>
                    <div className="text-sm text-gray-600 mb-2">30 x 40 cm</div>
                    <div className="text-2xl font-bold text-rose-600 mb-2">
                      240€
                    </div>
                    <div className="text-xs text-gray-500">
                      15-20h de travail
                    </div>
                  </div>
                </div>

                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.format === "elegant"
                      ? "border-rose-500 bg-rose-50"
                      : "border-gray-300 hover:border-rose-300"
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      format: "elegant",
                      budget: "340",
                    }))
                  }
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-800">
                      Format Élégant
                    </div>
                    <div className="text-sm text-gray-600 mb-2">50 x 70 cm</div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      340€
                    </div>
                    <div className="text-xs text-gray-500">
                      20-25h de travail
                    </div>
                  </div>
                </div>

                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.format === "duo"
                      ? "border-rose-500 bg-rose-50"
                      : "border-gray-300 hover:border-rose-300"
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      format: "duo",
                      budget: "500",
                    }))
                  }
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-800">
                      Format Duo
                    </div>
                    <div className="text-sm text-gray-600 mb-2">60 x 80 cm</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      500€
                    </div>
                    <div className="text-xs text-gray-500">
                      30-40h de travail
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-rose-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">
                Inclus avec votre Portrait d&apos;Âme
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  Clé USB avec éléments du tirage
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Signification des symboles
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Étapes de confection détaillées
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Rituel d&apos;accueil du portrait
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Certificat d&apos;authenticité
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Livraison offerte
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message libre (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Partagez-nous toute information supplémentaire..."
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-2 text-sm text-gray-600"
                >
                  Je souhaite recevoir des nouvelles de l&apos;atelier et des
                  témoignages
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="dataConsent"
                  name="dataConsent"
                  checked={formData.dataConsent}
                  onChange={handleChange}
                  className={`mt-1 h-4 w-4 text-rose-600 focus:ring-rose-500 rounded ${
                    errors.dataConsent ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <label
                  htmlFor="dataConsent"
                  className="ml-2 text-sm text-gray-600"
                >
                  J&apos;autorise l&apos;utilisation de mes informations pour la
                  création de mon portrait d&apos;âme *
                </label>
              </div>
              {errors.dataConsent && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dataConsent}
                </p>
              )}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className={`mt-1 h-4 w-4 text-rose-600 focus:ring-rose-500 rounded ${
                    errors.terms ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  J&apos;accepte les{" "}
                  <Link
                    href="/conditions"
                    className="text-rose-600 hover:underline"
                  >
                    conditions générales
                  </Link>{" "}
                  et la{" "}
                  <Link
                    href="/confidentialite"
                    className="text-rose-600 hover:underline"
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
          </div>
        );
    }
  };

  return (
    <div>
      {/* Indicateur d&apos;étapes */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step === currentStep
                    ? "bg-rose-600 border-rose-600 text-white"
                    : step < currentStep
                    ? "bg-green-500 border-green-500 text-white"
                    : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                {step < currentStep ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step
                )}
              </div>
              {step < 3 && (
                <div
                  className={`w-12 h-0.5 ml-4 ${
                    step < currentStep ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 text-sm text-gray-600 space-x-8">
          <span
            className={currentStep === 1 ? "font-medium text-rose-600" : ""}
          >
            Informations
          </span>
          <span
            className={currentStep === 2 ? "font-medium text-rose-600" : ""}
          >
            Livraison
          </span>
          <span
            className={currentStep === 3 ? "font-medium text-rose-600" : ""}
          >
            Format
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Précédent
            </button>
          )}

          <div className="ml-auto">
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-lg hover:from-rose-600 hover:to-purple-600 transition font-medium"
              >
                Suivant
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-lg hover:from-rose-600 hover:to-purple-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
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
                    Envoi en cours...
                  </>
                ) : (
                  "Commander mon portrait d'âme"
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
