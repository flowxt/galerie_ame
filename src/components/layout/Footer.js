import Link from "next/link";
import { Sparkles, Moon, Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Section principale */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Sparkles className="w-10 h-10 text-blue-400" />
                <Moon className="w-5 h-5 text-rose-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Atelier Art&apos;âme
                </h3>
                <p className="text-blue-200 text-sm">Création</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Nous créons des œuvres d&apos;art spirituelles uniques qui
              révèlent votre essence profonde et protègent vos énergies. Chaque
              création naît d&apos;une intention pure et d&apos;un processus
              méditatif.
            </p>

            <div className="flex items-center space-x-2 text-rose-300">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Créé avec amour et intention</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/portrait-d-ame"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                >
                  Portraits d&apos;Âme
                </Link>
              </li>
              <li>
                <Link
                  href="/attrape-reves"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
                >
                  Attrape-rêves
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique"
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-200"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  href="/deja-realise"
                  className="text-gray-300 hover:text-rose-300 transition-colors duration-200"
                >
                  Déjà réalisé
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">contact@atelier-artame.fr</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">+33 (0)6 XX XX XX XX</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  France
                  <br />
                  Créations spirituelles
                </span>
              </li>
            </ul>

            {/* CTA Contact */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Nous écrire
              </Link>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Atelier Art&apos;âme. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Créations artisanales uniques • Fait avec passion en France
              </p>
            </div>

            {/* Badges de confiance */}
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Matériaux naturels</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Fait main</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Pièces uniques</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500"></div>
    </footer>
  );
}
