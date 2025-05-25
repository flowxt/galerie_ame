"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce qu'un Portrait d'Âme exactement ?",
      answer:
        "Un Portrait d'Âme est une création artistique unique qui révèle votre essence profonde à travers l'art intuitif. Contrairement à un portrait traditionnel, il ne représente pas votre apparence physique mais capture votre énergie, vos aspirations et votre beauté intérieure. Chaque portrait naît d'une consultation personnalisée et d'un processus créatif méditatif qui révèle des aspects authentiques de votre être.",
    },
    {
      question:
        "Comment se déroule la création d'un attrape-rêves personnalisé ?",
      answer:
        "La création commence par une discussion pour comprendre vos intentions et besoins énergétiques. Je sélectionne ensuite des matériaux naturels en fonction de votre profil : couleurs, plumes, perles et symboles qui vous correspondent. Chaque élément est choisi avec intention et l'attrape-rêves est confectionné dans un état méditatif, garantissant qu'il porte les bonnes énergies pour votre protection et bien-être.",
    },
    {
      question: "Combien de temps faut-il pour recevoir ma commande ?",
      answer:
        "Pour un Portrait d'Âme, comptez 3-4 semaines incluant la consultation, la création méditative et les finitions. Les attrape-rêves demandent 2-3 semaines selon la complexité. Chaque œuvre étant unique et créée à la main avec intention, ce délai permet de respecter le processus créatif naturel et d'assurer la qualité spirituelle de votre pièce.",
    },
    {
      question: "Les matériaux utilisés sont-ils authentiques et respectueux ?",
      answer:
        "Absolument ! Je travaille exclusivement avec des matériaux naturels et éthiques : plumes récoltées respectueusement, perles en bois naturel, fils de coton biologique, et éléments collectés en conscience. Chaque matériau est choisi pour ses propriétés énergétiques et son authenticité. La démarche respecte les traditions ancestrales tout en honorant la nature.",
    },
    {
      question:
        "Puis-je offrir un Portrait d'Âme ou un attrape-rêves en cadeau ?",
      answer:
        "C'est un cadeau magnifique et profondément significatif ! Pour un Portrait d'Âme, je peux travailler avec vous pour comprendre l'essence de la personne, ou proposer un bon cadeau pour qu'elle participe à la consultation. Pour les attrape-rêves, je peux créer une pièce basée sur les énergies que vous souhaitez transmettre. Chaque cadeau est accompagné d'une explication de sa signification spirituelle.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800 font-medium text-sm">
              Questions Fréquentes
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-6">
            Tout ce que vous devez
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              savoir
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les réponses aux questions les plus courantes sur nos
            créations spirituelles et notre processus artistique.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 mb-4 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Une autre question ?
            </h3>
            <p className="text-gray-600 mb-6">
              N&apos;hésitez pas à nous contacter pour toute question
              spécifique. Nous serions ravis de vous accompagner dans votre
              démarche spirituelle.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
