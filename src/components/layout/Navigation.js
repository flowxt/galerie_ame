"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gérer le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonctions pour gérer le menu
  const openMenu = () => {
    console.log("Ouverture du menu");
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    console.log("Fermeture du menu");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    console.log("Toggle menu, état actuel:", isMenuOpen);
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  console.log("Rendu Navigation, isMenuOpen:", isMenuOpen);

  return (
    <>
      {/* Header Principal */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 z-40"
            : "bg-white/80 backdrop-blur-md border-b border-white/20 z-40"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
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

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Accueil
              </Link>
              <Link
                href="/portrait-d-ame"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                Portraits d&apos;Âme
              </Link>
              <Link
                href="/attrape-reves"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Attrape-rêves
              </Link>
              <Link
                href="/boutique"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                Boutique
              </Link>
              <Link
                href="/deja-realise"
                className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium"
              >
                Déjà réalisé
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg"
              >
                Contact
              </Link>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative z-50 p-3 rounded-lg bg-white shadow-lg border border-gray-200 text-gray-700 hover:text-blue-600"
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo-sansfond.png"
                  alt="Atelier Art'âme"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Art&apos;âme
                  </h2>
                  <p className="text-xs text-gray-500">Menu</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col p-6 space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/portrait-d-ame"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                Portraits d&apos;Âme
              </Link>
              <Link
                href="/attrape-reves"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Attrape-rêves
              </Link>
              <Link
                href="/boutique"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
              >
                Boutique
              </Link>
              <Link
                href="/deja-realise"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              >
                Déjà réalisé
              </Link>

              {/* Contact Button */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-center"
              >
                Nous Contacter
              </Link>
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                Atelier Art&apos;âme - Créations spirituelles
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
