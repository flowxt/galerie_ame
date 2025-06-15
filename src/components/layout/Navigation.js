import Link from "next/link";
import Image from "next/image";
import { Sparkles, Moon } from "lucide-react";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logo-sansfond.png"
              alt="Atelier Art'âme"
              width={50}
              height={50}
              className="h-12 w-auto"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
                Atelier Art&apos;âme
              </h1>
              <p className="text-xs text-gray-500">Création</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/portrait-d-ame"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group"
            >
              Portraits d&apos;Âme
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/attrape-reves"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
            >
              Attrape-rêves
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/boutique"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium relative group"
            >
              Boutique
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/deja-realise"
              className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium relative group"
            >
              Déjà réalisé
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button (à implémenter si nécessaire) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
