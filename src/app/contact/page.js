"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MessageCircle,
  Heart,
  Star,
  ArrowRight,
  Mail,
  Clock,
  CheckCircle,
  Sparkles,
  User,
  Send,
  HelpCircle,
  Users,
  Palette,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implémenter EmailJS
    console.log("Données du formulaire:", formData);

    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Arrière-plan épuré */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-purple-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-200/20 to-indigo-200/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

          {/* Éléments spirituels discrets */}
          <div className="absolute top-1/4 left-1/4 text-indigo-300 animate-float opacity-40">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-purple-300 animate-float animation-delay-700 opacity-40">
            <Heart className="w-5 h-5" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-pink-400 animate-float animation-delay-1000 opacity-30">
            <Star className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-indigo-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <MessageCircle className="w-4 h-4 text-indigo-500" />
            <span className="text-gray-700 text-sm font-medium">
              Échangeons ensemble
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-800">
            <span className="block bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent font-medium">
              Contactez-nous
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Vous avez des questions sur nos créations spirituelles ou souhaitez
            commencer votre parcours artistique ? Nous serions ravis
            d&apos;échanger avec vous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#formulaire"
              className="group bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              <span className="flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Envoyer un Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="#informations"
              className="group bg-white/80 backdrop-blur-sm border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
            >
              <span className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5" />
                <span>Informations Pratiques</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Formulaire et Informations */}
      <section id="formulaire" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Formulaire de Contact */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-6 py-2 mb-6">
                  <Send className="w-5 h-5 text-indigo-600" />
                  <span className="text-indigo-800 font-medium text-sm">
                    Formulaire de Contact
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
                  Envoyez-nous un
                  <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                    {" "}
                    message
                  </span>
                </h2>

                {submitStatus === "success" && (
                  <div className="bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-2xl p-6 mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800 font-semibold">
                        Message envoyé !
                      </span>
                    </div>
                    <p className="text-green-700 text-sm">
                      Merci pour votre message ! Nous vous répondrons dans les
                      plus brefs délais.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Prénom *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nom *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                        placeholder="Parlez-nous de votre projet, vos questions ou simplement dites-nous bonjour..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-4 rounded-xl hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg font-medium"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>
                        {isSubmitting
                          ? "Envoi en cours..."
                          : "Envoyer le message"}
                      </span>
                    </span>
                  </button>
                </form>
              </div>

              {/* Informations de Contact */}
              <div id="informations">
                <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-6 py-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-pink-800 font-medium text-sm">
                    Informations Pratiques
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
                  Informations de
                  <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}
                    contact
                  </span>
                </h2>

                <div className="space-y-8">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-200/50 shadow-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-3 rounded-xl">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Réponse Rapide
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Nous répondons généralement dans les 24 heures. Pour les
                      commandes urgentes, n&apos;hésitez pas à le mentionner
                      dans votre message.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50 shadow-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-r from-pink-500 to-indigo-500 p-3 rounded-xl">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Consultation Gratuite
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Nous proposons une consultation gratuite de 30 minutes
                      pour discuter de votre projet de portrait d&apos;âme et
                      répondre à vos questions.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-200/50 shadow-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-r from-indigo-600 to-pink-600 p-3 rounded-xl">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Suivi Personnalisé
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Chaque client bénéficie d&apos;un suivi personnalisé tout
                      au long du processus créatif, de la commande à la
                      livraison.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
                <HelpCircle className="w-5 h-5 text-purple-600" />
                <span className="text-purple-800 font-medium text-sm">
                  Questions Fréquentes
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Réponses à vos
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  questions
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Trouvez rapidement les réponses aux questions les plus courantes
                sur nos créations spirituelles.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Questions les plus fréquentes
              </h3>
              <div className="space-y-4">
                <Link
                  href="/portrait-d-ame#faq"
                  className="group flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-all"
                >
                  <span className="text-gray-700 group-hover:text-purple-700">
                    Comment fonctionne le processus de création ?
                  </span>
                  <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portrait-d-ame#faq"
                  className="group flex items-center justify-between p-4 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-all"
                >
                  <span className="text-gray-700 group-hover:text-indigo-700">
                    Combien de temps prend la réalisation ?
                  </span>
                  <ArrowRight className="w-5 h-5 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portrait-d-ame#faq"
                  className="group flex items-center justify-between p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-all"
                >
                  <span className="text-gray-700 group-hover:text-pink-700">
                    Quels sont les tarifs des créations ?
                  </span>
                  <ArrowRight className="w-5 h-5 text-pink-500 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/attrape-reves#creation-sur-mesure"
                  className="group flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-all"
                >
                  <span className="text-gray-700 group-hover:text-purple-700">
                    Puis-je personnaliser un attrape-rêves ?
                  </span>
                  <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-6 py-2 mb-6">
              <Palette className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-800 font-medium text-sm">
                Commencez votre Parcours
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Prêt à découvrir votre
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                art spirituel ?
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explorez nos créations ou commandez votre œuvre personnalisée pour
              commencer votre voyage artistique et spirituel.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/portrait-d-ame/commande"
                className="group bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-10 py-5 rounded-full hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-medium"
              >
                <span className="flex items-center space-x-3">
                  <Heart className="w-6 h-6" />
                  <span>Commander un Portrait d&apos;Âme</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/boutique"
                className="group bg-white border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-sm"
              >
                <span className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6" />
                  <span>Découvrir la Boutique</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
