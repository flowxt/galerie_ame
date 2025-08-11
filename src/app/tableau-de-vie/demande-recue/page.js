"use client";

import Link from "next/link";
import { CheckCircle, Compass, Heart, ArrowRight, Clock, Mail, Phone } from "lucide-react";

export default function TableauDeVieDemandeRecue() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          {/* Icône de succès */}
          <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
            Votre demande est
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              bien reçue
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Merci pour votre confiance ! Nous allons étudier votre demande avec attention et commencer l&apos;exploration de votre tableau de vie.
          </p>

          {/* Prochaines étapes */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Compass className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Prochaines étapes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Confirmation sous 24h
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous analysons votre questionnaire et vous confirmons la prise en charge de votre projet.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Consultation approfondie
                </h3>
                <p className="text-gray-600 text-sm">
                  Échange personnel de 1h30 à 2h pour explorer votre histoire en profondeur.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Création méditative
                </h3>
                <p className="text-gray-600 text-sm">
                  Réalisation de votre tableau de vie unique avec amour et intention (4-6 semaines).
                </p>
              </div>
            </div>
          </div>

          {/* Informations importantes */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Informations importantes
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Délai de création</p>
                    <p className="text-gray-600 text-sm">4 à 6 semaines après la consultation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Communication</p>
                    <p className="text-gray-600 text-sm">Suivi régulier par email pendant la création</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Livraison</p>
                    <p className="text-gray-600 text-sm">Offerte partout en France avec assurance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Support</p>
                    <p className="text-gray-600 text-sm">Accompagnement personnel tout au long du processus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact et actions */}
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Une question ? N&apos;hésitez pas à nous contacter
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-full hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Nous contacter</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/tableau-de-vie"
                  className="group bg-white border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Compass className="w-5 h-5" />
                    <span>En savoir plus</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Numéro de référence de votre demande : #TDV-{Date.now().toString().slice(-6)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
