"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  MapPin,
  Phone,
  Facebook,
  Instagram,
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

  // Refs pour les animations
  const formRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  // InView hooks
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const faqData = [
    {
      id: 1,
      question:
        "Quelle est la différence entre un Portrait d'Âme et un Tableau de Vie ?",
      answer:
        "Le Portrait d'Âme est une \"photographie énergétique\" de votre essence au présent : il montre la vibration de votre Être. Le Tableau de Vie, lui, est co-créé avec vous ; il retrace votre parcours intérieur, vos clés de transformation, vos cycles, vos ressources et vos aspirations profondes. Là où le Portrait révèle l'Être, le Tableau raconte le chemin.",
    },
    {
      id: 2,
      question: "Est-ce que tout peut se faire à distance ?",
      answer:
        "La connexion énergétique ne dépend pas du lieu physique. Que vous soyez près de moi ou à l'autre bout du monde, l'œuvre est réalisée de la même manière : je me relie à votre essence, puis l'expression picturale se manifeste. Si vous le souhaitez, un échange par téléphone ou visio peut accompagner la démarche.",
    },
    {
      id: 3,
      question: "Est-ce qu'il faut avoir une croyance particulière ?",
      answer:
        "Cette démarche n'appartient à aucune religion, ni à un système de croyances. Elle s'adresse autant aux personnes spirituelles qu'aux personnes simplement en recherche d'alignement, de douceur ou de sens. Il ne s'agit pas de croire \"quelque chose\", mais de se relier à sa propre présence intérieure.",
    },
    {
      id: 4,
      question: "En quoi cela peut-il m'aider sur mon chemin ?",
      answer:
        "Le Portrait d'Âme ou le Tableau de Vie peut devenir un repère intérieur, un ancrage. Il rappelle votre lumière quand vous traversez des zones d'ombre, met en évidence vos ressources et soutient vos transitions. Beaucoup de personnes témoignent d'un sentiment de reconnexion, de clarification, ou même d'un regain d'élan créateur.",
    },
    {
      id: 5,
      question: "Est-il possible d'offrir un Portrait d'Âme en cadeau ?",
      answer:
        "Un Portrait d'Âme ne peut pas être commandé « pour » quelqu'un : dans ma démarche, l'élan doit venir de la personne elle-même. Il est toutefois possible d'offrir un bon cadeau, afin que la personne soit libre de choisir le moment juste pour elle, lorsque l'appel intérieur se présente. Par choix, je ne réalise pas de Portraits d'Âme pour les enfants pour le moment : leur essence est encore en plein déploiement, et je souhaite honorer ce temps de maturation intérieure sans projeter une lecture spirituelle avant qu'elle ne naisse d'elle-même.",
    },
    {
      id: 6,
      question: "Que trouve-t-on dans ta boutique ?",
      answer:
        "Dans la boutique, vous trouverez mes tableaux intuitifs, mes attrape-rêves et les bons cadeaux. Un tableau intuitif est une œuvre créée sans modèle et sans intention définie à l'avance : je me laisse guider par le ressenti du moment, les couleurs, les formes et l'élan intérieur. Ce ne sont pas des créations reliées à une personne en particulier, mais l'expression d'une énergie, d'une ambiance ou d'une émotion, qui prend forme naturellement et spontanément.",
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
            src="/images/fond-contact.jpeg"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-indigo-300" />
            <span className="text-white text-sm font-medium">
              Échangeons ensemble
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light mb-8 leading-tight text-white"
          >
            <span className="block bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent font-medium">
              Contactez-nous
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-crimson"
          >
            Vous avez des questions sur nos créations spirituelles ou souhaitez
            commencer votre parcours artistique ? Nous serions ravis
            d&apos;échanger avec vous.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Section Formulaire et Informations */}
      <section ref={formRef} id="formulaire" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Formulaire de Contact */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
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
              </motion.div>

              {/* Informations de Contact */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                id="informations"
              >
                <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-6 py-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-pink-800 font-medium text-sm">
                    Informations de contact
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
                  Informations de
                  <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}
                    contact
                  </span>
                </h2>

                <p className="text-lg text-gray-600 mb-8 italic">
                  Je suis à votre écoute pour toute demande, projet ou question
                </p>

                <div className="space-y-6">
                  {/* Atelier Art'âme */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-200/50 shadow-sm">
                    <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                      Atelier Art&apos;âme
                    </h3>

                    <div className="space-y-4">
                      {/* Email */}
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-2 rounded-lg">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <a
                            href="mailto:contact@atelierartame.com"
                            className="text-gray-800 hover:text-indigo-600 transition-colors font-medium"
                          >
                            contact@atelierartame.com
                          </a>
                        </div>
                      </div>

                      {/* Téléphone */}
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-pink-500 to-indigo-500 p-2 rounded-lg">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Téléphone</p>
                          <a
                            href="tel:+33632215288"
                            className="text-gray-800 hover:text-indigo-600 transition-colors font-medium"
                          >
                            06 32 21 52 88
                          </a>
                        </div>
                      </div>

                      {/* Localisation */}
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-indigo-600 to-pink-600 p-2 rounded-lg">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Localisation</p>
                          <p className="text-gray-800 font-medium">
                            Saint Sixt, France
                          </p>
                        </div>
                      </div>

                      {/* Délai de réponse */}
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Délai de réponse
                          </p>
                          <p className="text-gray-800 font-medium">24 à 48h</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Réseaux Sociaux */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                      Suivez-nous
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-r from-indigo-500 to-pink-500 p-4 rounded-xl hover:from-indigo-600 hover:to-pink-600 transition-all transform hover:scale-110 shadow-lg"
                      >
                        <Facebook className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-110 shadow-lg"
                      >
                        <Instagram className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section
        ref={faqRef}
        className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 shadow-sm"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section ref={ctaRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
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
              Explorez nos créations pour commencer votre voyage artistique et
              spirituel.
            </p>

            <div className="flex justify-center">
              <Link
                href="/boutique"
                className="group bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-10 py-5 rounded-full hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-medium"
              >
                <span className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6" />
                  <span>Découvrir la Boutique</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
