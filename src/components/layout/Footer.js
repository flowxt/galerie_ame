import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-rose-50 via-blue-50 to-purple-50 text-gray-700">
      <div className="container mx-auto px-4 py-16">
        {/* Section principale */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/images/logo-sansfond.png"
                  alt="Logo Atelier Art'âme"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                  Atelier Art&apos;âme
                </h3>
                <p className="text-rose-400 text-sm">Création</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Nous créons des œuvres d&apos;art spirituelles uniques qui
              révèlent votre essence profonde et protègent vos énergies. Chaque
              création naît d&apos;une intention pure et d&apos;un processus
              méditatif.
            </p>

            <div className="flex items-center space-x-2 text-rose-500">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Créé avec amour et intention</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-700">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-rose-500 transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/portrait-d-ame"
                  className="text-gray-600 hover:text-purple-500 transition-colors duration-200"
                >
                  Portraits d&apos;Âme
                </Link>
              </li>
              <li>
                <Link
                  href="/tableau-de-vie"
                  className="text-gray-600 hover:text-teal-500 transition-colors duration-200"
                >
                  Tableau de Vie
                </Link>
              </li>
              <li>
                <Link
                  href="/attrape-reves"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                >
                  Attrape-rêves
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique"
                  className="text-gray-600 hover:text-teal-500 transition-colors duration-200"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="text-gray-600 hover:text-rose-500 transition-colors duration-200"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-700">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-sm">contact@atelierartame.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">06 32 21 52 88</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Saint Sixt, France
                  <br />
                  Créations spirituelles uniques
                </span>
              </li>
            </ul>

            {/* CTA Contact */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-rose-400 to-purple-400 text-white px-6 py-3 rounded-full hover:from-rose-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 text-sm font-medium shadow-md"
              >
                <Mail className="w-4 h-4 mr-2" />
                Nous écrire
              </Link>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-700 mb-3">
                Suivez-nous
              </h5>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/atelierartame/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="Instagram Atelier Art'âme"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581605606918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="Facebook Atelier Art'âme"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                &copy; 2025 Atelier Art&apos;âme. Tous droits réservés.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Créations artisanales uniques • Fait avec passion en France
              </p>
            </div>

            {/* Badges de confiance */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>Matériaux naturels</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Fait main</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                <span>Pièces uniques</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                <span>Livraison offerte</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-300 via-purple-300 to-blue-300 opacity-50"></div>
    </footer>
  );
}
