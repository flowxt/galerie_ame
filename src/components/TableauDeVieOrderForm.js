"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Compass,
  TreePine,
  Heart,
  ArrowRight,
  BookOpen,
  Star,
} from "lucide-react";

export default function TableauDeVieOrderForm({ preselectedFormat = null }) {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    profession: "",

    // Adresse
    address: "",
    addressComplement: "",
    postalCode: "",
    city: "",
    country: "France",

    // Questions sur la personnalité et le parcours de vie
    personalityDescription: "",
    lifeValues: "",
    currentChallenges: "",
    aspirations: "",
    significantMoments: "",
    emotionalState: "",
    spiritualPath: "",

    // Questions spécifiques au Tableau de Vie
    lifeTransitions: "",
    learnings: "",
    relationshipPatterns: "",
    careerPath: "",
    familyDynamics: "",
    healthJourney: "",
    creativityExpression: "",

    // Préférences artistiques
    colorPreferences: "",
    stylePreferences: "",
    symbolsImportant: "",
    avoidElements: "",

    // Informations sur le projet
    portraitPurpose: "",
    shareWithOthers: "",
    timeline: "",
    format: "intime",
    budget: "240",

    // Communication
    consultationPreference: "",
    availableHours: "",
    communicationStyle: "",

    // Consentements
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
      premium: "500",
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
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

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
      if (!formData.email.trim()) newErrors.email = "L'email est obligatoire";
      if (!formData.phone.trim())
        newErrors.phone = "Le téléphone est obligatoire";
      if (!formData.age.trim()) newErrors.age = "L'âge est obligatoire";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email && !emailRegex.test(formData.email)) {
        newErrors.email = "Format d&apos;email invalide";
      }
    }

    if (step === 2) {
      if (!formData.address.trim())
        newErrors.address = "L'adresse est obligatoire";
      if (!formData.postalCode.trim())
        newErrors.postalCode = "Le code postal est obligatoire";
      if (!formData.city.trim()) newErrors.city = "La ville est obligatoire";

      const postalCodeRegex = /^[0-9]{5}$/;
      if (formData.postalCode && !postalCodeRegex.test(formData.postalCode)) {
        newErrors.postalCode = "Code postal invalide (5 chiffres)";
      }
    }

    if (step === 3) {
      if (!formData.personalityDescription.trim())
        newErrors.personalityDescription =
          "Cette question est importante pour votre tableau";
      if (!formData.lifeValues.trim())
        newErrors.lifeValues = "Partagez vos valeurs principales";
      if (!formData.aspirations.trim())
        newErrors.aspirations = "Vos aspirations nous aident à vous comprendre";
    }

    if (step === 4) {
      if (!formData.lifeTransitions.trim())
        newErrors.lifeTransitions = "Cette information enrichit votre tableau";
      if (!formData.significantMoments.trim())
        newErrors.significantMoments = "Les moments marquants sont essentiels";
    }

    if (step === 6) {
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
      setCurrentStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Mapper les formats aux IDs de produits Stripe
  const getStripeProductId = (format) => {
    const productIds = {
      intime: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_TABLEAU_INTIME,
      elegant: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_TABLEAU_ELEGANT,
      premium: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_TABLEAU_PREMIUM,
    };
    return productIds[format];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(6)) return;

    setIsLoading(true);

    try {
      // Récupérer l'ID du produit Stripe en fonction du format choisi
      const productId = getStripeProductId(formData.format);

      if (!productId) {
        alert("Erreur : format de tableau non reconnu");
        setIsLoading(false);
        return;
      }

      // Envoyer l'email de notification avant la redirection vers Stripe
      try {
        await fetch("/api/send-tableau-order-email", {
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
            orderType: "tableau-de-vie",
          },
          successUrl: `${process.env.NEXT_PUBLIC_BASE_URL || window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL || window.location.origin}/tableau-de-vie#tarifs`,
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
      console.error("Erreur lors de l'envoi:", error);
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Âge *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="18"
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="profession"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Profession / Activité
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Votre activité principale"
                />
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
              Votre tableau de vie vous sera envoyé avec livraison offerte.
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
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
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
              Votre essence profonde
            </h3>
            <p className="text-gray-600 mb-6">
              Ces questions nous aident à comprendre qui vous êtes vraiment pour
              créer votre tableau de vie authentique.
            </p>

            <div>
              <label
                htmlFor="personalityDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Comment vous décririez-vous en quelques mots ? *
              </label>
              <textarea
                id="personalityDescription"
                name="personalityDescription"
                rows="4"
                value={formData.personalityDescription}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                  errors.personalityDescription
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Partagez votre personnalité, vos traits de caractère, ce qui vous définit..."
              />
              {errors.personalityDescription && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.personalityDescription}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="lifeValues"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quelles sont vos valeurs principales dans la vie ? *
              </label>
              <textarea
                id="lifeValues"
                name="lifeValues"
                rows="3"
                value={formData.lifeValues}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                  errors.lifeValues ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Liberté, famille, créativité, justice, amour, authenticité..."
              />
              {errors.lifeValues && (
                <p className="text-red-500 text-sm mt-1">{errors.lifeValues}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="currentChallenges"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quels défis traversez-vous actuellement ?
              </label>
              <textarea
                id="currentChallenges"
                name="currentChallenges"
                rows="3"
                value={formData.currentChallenges}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Transitions de vie, questionnements, épreuves..."
              />
            </div>

            <div>
              <label
                htmlFor="aspirations"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quels sont vos rêves et aspirations ? *
              </label>
              <textarea
                id="aspirations"
                name="aspirations"
                rows="3"
                value={formData.aspirations}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                  errors.aspirations ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Vos projets, vos envies profondes, ce vers quoi vous tendez..."
              />
              {errors.aspirations && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.aspirations}
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Votre parcours de vie
            </h3>
            <p className="text-gray-600 mb-6">
              Explorons ensemble les moments marquants et les transitions qui
              ont façonné votre existence.
            </p>

            <div>
              <label
                htmlFor="significantMoments"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quels sont les moments les plus marquants de votre vie ? *
              </label>
              <textarea
                id="significantMoments"
                name="significantMoments"
                rows="4"
                value={formData.significantMoments}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                  errors.significantMoments
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Événements qui vous ont transformé, révélations, tournants..."
              />
              {errors.significantMoments && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.significantMoments}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="lifeTransitions"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quelles transitions importantes avez-vous vécues ? *
              </label>
              <textarea
                id="lifeTransitions"
                name="lifeTransitions"
                rows="3"
                value={formData.lifeTransitions}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                  errors.lifeTransitions ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Changements de carrière, déménagements, relations, perte d'un proche..."
              />
              {errors.lifeTransitions && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lifeTransitions}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="learnings"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quelles leçons importantes avez-vous apprises ?
              </label>
              <textarea
                id="learnings"
                name="learnings"
                rows="3"
                value={formData.learnings}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Sagesse acquise, compréhensions profondes, révélations..."
              />
            </div>

            <div>
              <label
                htmlFor="relationshipPatterns"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Comment décririez-vous vos relations importantes ?
              </label>
              <textarea
                id="relationshipPatterns"
                name="relationshipPatterns"
                rows="3"
                value={formData.relationshipPatterns}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Famille, amitié, amour, patterns relationnels..."
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Préférences créatives et projet
            </h3>

            <div>
              <label
                htmlFor="colorPreferences"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Couleurs qui vous attirent ou vous représentent
              </label>
              <input
                type="text"
                id="colorPreferences"
                name="colorPreferences"
                value={formData.colorPreferences}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Bleu océan, rouge passion, vert forêt, dorés..."
              />
            </div>

            <div>
              <label
                htmlFor="symbolsImportant"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Symboles ou éléments importants pour vous
              </label>
              <textarea
                id="symbolsImportant"
                name="symbolsImportant"
                rows="3"
                value={formData.symbolsImportant}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Animaux, éléments naturels, objets spirituels, formes géométriques..."
              />
            </div>

            <div>
              <label
                htmlFor="emotionalState"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Comment vous sentez-vous en ce moment dans votre vie ?
              </label>
              <textarea
                id="emotionalState"
                name="emotionalState"
                rows="3"
                value={formData.emotionalState}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Votre état émotionnel, votre énergie actuelle..."
              />
            </div>

            <div>
              <label
                htmlFor="spiritualPath"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Avez-vous un cheminement spirituel particulier ?
              </label>
              <textarea
                id="spiritualPath"
                name="spiritualPath"
                rows="3"
                value={formData.spiritualPath}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Méditation, religion, philosophie, développement personnel..."
              />
            </div>

            <div>
              <label
                htmlFor="portraitPurpose"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Dans quel but souhaitez-vous ce tableau de vie ?
              </label>
              <select
                id="portraitPurpose"
                name="portraitPurpose"
                value={formData.portraitPurpose}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Sélectionnez...</option>
                <option value="bilan-vie">Faire un bilan de ma vie</option>
                <option value="transition">
                  Marquer une transition importante
                </option>
                <option value="cadeau">Cadeau pour un proche</option>
                <option value="healing">Processus de guérison</option>
                <option value="autre">Autre raison</option>
              </select>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Finalisation
            </h3>

            <div>
              <label
                htmlFor="consultationPreference"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Préférence pour la consultation approfondie
              </label>
              <select
                id="consultationPreference"
                name="consultationPreference"
                value={formData.consultationPreference}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Sélectionnez...</option>
                <option value="video">Visioconférence</option>
                <option value="phone">Téléphone</option>
                <option value="presence">En personne (si possible)</option>
                <option value="email">Échanges par email approfondis</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="availableHours"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Créneaux de disponibilité
              </label>
              <input
                type="text"
                id="availableHours"
                name="availableHours"
                value={formData.availableHours}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Ex: Semaine 18h-20h, Weekend matin"
              />
            </div>

            <div>
              <label
                htmlFor="format"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Formule souhaitée
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.format === "intime"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300 hover:border-orange-300"
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
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      240€
                    </div>
                  </div>
                </div>

                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.format === "elegant"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-300 hover:border-purple-300"
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
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      340€
                    </div>
                  </div>
                </div>

                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.format === "premium"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      format: "premium",
                      budget: "500",
                    }))
                  }
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-800">
                      Format Premium
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      500€
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">
                Inclus avec votre Tableau de Vie
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Clé USB avec éléments du tirage
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Signification des symboles
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Étapes de confection détaillées
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Guide d&apos;intégration personnelle
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Certificat d&apos;authenticité
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Livraison offerte
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message libre
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Tout ce que vous souhaitez nous partager d'autre..."
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
                  className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
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
                  className={`mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 rounded ${
                    errors.dataConsent ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <label
                  htmlFor="dataConsent"
                  className="ml-2 text-sm text-gray-600"
                >
                  J&apos;autorise l&apos;utilisation de mes informations pour la
                  création de mon tableau de vie *
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
                  className={`mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 rounded ${
                    errors.terms ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  J&apos;accepte les{" "}
                  <Link
                    href="/conditions"
                    className="text-teal-600 hover:underline"
                  >
                    conditions générales
                  </Link>{" "}
                  et la{" "}
                  <Link
                    href="/confidentialite"
                    className="text-teal-600 hover:underline"
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-teal-100 rounded-full px-6 py-2 mb-6">
            <Compass className="w-5 h-5 text-teal-600" />
            <span className="text-teal-800 font-medium text-sm">Commande</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
            Votre
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Tableau de Vie
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embarquons ensemble dans cette exploration profonde de votre
            parcours existentiel
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Indicateur d&apos;étapes */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      step === currentStep
                        ? "bg-teal-600 border-teal-600 text-white"
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
                  {step < 6 && (
                    <div
                      className={`w-12 h-0.5 ml-2 ${
                        step < currentStep ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 text-sm text-gray-600 space-x-4">
              <span
                className={currentStep === 1 ? "font-medium text-teal-600" : ""}
              >
                Contact
              </span>
              <span
                className={currentStep === 2 ? "font-medium text-teal-600" : ""}
              >
                Livraison
              </span>
              <span
                className={currentStep === 3 ? "font-medium text-teal-600" : ""}
              >
                Essence
              </span>
              <span
                className={currentStep === 4 ? "font-medium text-teal-600" : ""}
              >
                Parcours
              </span>
              <span
                className={currentStep === 5 ? "font-medium text-teal-600" : ""}
              >
                Créatif
              </span>
              <span
                className={currentStep === 6 ? "font-medium text-teal-600" : ""}
              >
                Finalisation
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
                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition font-medium"
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
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
                      "Commander mon Tableau de Vie"
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
