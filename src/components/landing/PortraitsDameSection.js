"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  ArrowRight,
  Palette,
  Eye,
  Brush,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function PortraitsDameSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const images = [
    {
      src: "/images/portrait-ame1.jpg",
      alt: "Portrait d'âme spirituel - Création 1",
      color: "rose",
    },
    {
      src: "/images/portrait-ame2.jpg",
      alt: "Portrait d'âme spirituel - Création 2",
      color: "purple",
    },
    {
      src: "/images/portrait-ame3.jpg",
      alt: "Portrait d'âme spirituel - Création 3",
      color: "pink",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-rose-50/50 via-purple-50/50 to-pink-50/50 relative overflow-hidden"
    >
      {/* Patterns décoratifs améliorés */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800 font-medium text-sm">
                  Portraits d&apos;Âme
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6 leading-tight">
                Révélez votre
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-medium">
                  {" "}
                  essence profonde
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed font-crimson mb-8">
                Chaque portrait d&apos;âme est une œuvre unique, réalisée dans
                l&apos;intuition et la sensibilité. Au-delà des traits
                physiques, il révèle l&apos;essence intérieure, les couleurs
                vibratoires et la lumière singulière de chaque être.
              </p>
            </div>

            {/* Points clés avec glassmorphism */}
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-5 border border-rose-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-rose group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Connexion Spirituelle
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      Dans un espace sacré et bienveillant, je me relie à votre
                      essence et aux énergies qui vous habitent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-purple-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-purple group-hover:scale-110 transition-transform duration-300">
                    <Brush className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Création Méditative
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      En état méditatif, je laisse les couleurs, les formes et
                      les symboles émerger spontanément de votre âme.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-pink-200/50 hover-lift group shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-rose group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                      Révélation & Transmission
                    </h3>
                    <p className="text-gray-600 font-crimson leading-relaxed">
                      Votre portrait vous est remis avec une lecture des
                      symboles et énergies manifestés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA amélioré */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portrait-d-ame"
                className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-glow-rose hover:shadow-glow-purple transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-base font-medium inline-flex items-center justify-center space-x-2 btn-spiritual overflow-hidden"
              >
                <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Découvrir</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <Link
                href="/portrait-d-ame#tarifs"
                className="group glass-card border-2 border-rose-300 text-rose-700 hover:border-rose-400 px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-base font-medium shadow-elegant hover:shadow-spiritual inline-flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Commander</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Carrousel de photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-2xl mx-auto lg:mx-0"
          >
            {/* Image principale */}
            <div className="relative aspect-[3/4] max-h-[700px] rounded-3xl overflow-hidden shadow-spiritual">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </motion.div>
              </AnimatePresence>

              {/* Badge du numéro */}
              <div className="absolute top-6 right-6 glass-card px-4 py-2 rounded-full border border-white/30">
                <span className="text-white font-medium text-sm">
                  {currentImage + 1} / {images.length}
                </span>
              </div>

              {/* Boutons de navigation - À l'intérieur de l'image */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/40 transition-all duration-300 group shadow-elegant hover:scale-110 z-10"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-rose-500 transition-colors" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/40 transition-all duration-300 group shadow-elegant hover:scale-110 z-10"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-rose-500 transition-colors" />
              </button>
            </div>

            {/* Indicateurs de points */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImage
                      ? "w-8 h-3 bg-gradient-to-r from-rose-500 to-pink-500 shadow-glow-rose"
                      : "w-3 h-3 bg-gray-300 hover:bg-rose-300"
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
