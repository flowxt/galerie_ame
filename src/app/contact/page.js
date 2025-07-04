"use client";

import Link from "next/link";
import Image from "next/image";
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
  ChevronDown,
  ChevronUp,
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
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Comment fonctionne le processus de création ?",
      answer:
        "Le processus commence par un échange personnalisé pour comprendre votre essence. Ensuite, je crée intuitivement votre portrait d'âme en utilisant différentes techniques artistiques. Le processus prend généralement 2-3 semaines et inclut des photos d'étapes pour vous tenir informé.",
    },
    {
      id: 2,
      question: "Combien de temps prend la réalisation ?",
      answer:
        "Un portrait d'âme prend entre 15 à 21 jours ouvrés. Les attrape-rêves personnalisés nécessitent 7 à 10 jours. Pour les commandes urgentes, contactez-nous pour étudier les possibilités.",
    },
    {
      id: 3,
      question: "Quels sont les tarifs des créations ?",
      answer:
        "Les portraits d'âme commencent à partir de 150€. Les attrape-rêves personnalisés débutent à 80€. Les tarifs varient selon la taille, la complexité et les matériaux choisis. Contactez-nous pour un devis personnalisé.",
    },
    {
      id: 4,
      question: "Puis-je personnaliser un attrape-rêves ?",
      answer:
        "Absolument ! Nous créons des attrape-rêves sur-mesure selon vos intentions, couleurs préférées, et éléments symboliques. Chaque création est unique et adaptée à votre énergie personnelle.",
    },
    {
      id: 5,
      question: "Livrez-vous partout en France ?",
      answer:
        "Oui, nous livrons dans toute la France via Colissimo avec suivi. Les œuvres sont soigneusement emballées pour garantir leur protection. La livraison est gratuite à partir de 100€ d'achat.",
    },
    {
      id: 6,
      question: "Que faire si je ne suis pas satisfait ?",
      answer:
        "Votre satisfaction est notre priorité. Si l'œuvre ne correspond pas à vos attentes, nous proposons des ajustements ou un remboursement dans les 14 jours. Chaque création étant unique, nous privilégions le dialogue pour trouver une solution.",
    },
  ];

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

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/vero-bw.jpg"
            alt="Véronique artiste - Contactez-nous"
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
            <MessageCircle className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-purple-300/40 animate-float animation-delay-700">
            <Heart className="w-5 h-5" />
          </div>
          <div className="absolute top-1/2 right-1/6 text-pink-300/30 animate-float animation-delay-1000">
            <Star className="w-4 h-4" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <MessageCircle className="w-4 h-4 text-indigo-300" />
            <span className="text-white text-sm font-medium">
              Échangeons ensemble
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white">
            <span className="block bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent font-medium">
              Contactez-nous
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson">
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
              className="group bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
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

                <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-8">
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
                {faqData.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-all text-left"
                    >
                      <span className="text-gray-800 font-medium pr-4">
                        {faq.question}
                      </span>
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
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
