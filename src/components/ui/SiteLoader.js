"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SiteLoader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animation de la barre de progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Petite pause avant de disparaître
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500); // Temps pour l'animation de sortie
          }, 300);
          return 100;
        }
        return prev + 2; // Progression de 2% toutes les 60ms = ~3 secondes
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-white via-blue-50 to-purple-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo principal */}
      <div className="mb-12 relative">
        {/* Effet de rayonnement subtil */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl scale-150 animate-pulse"></div>

        {/* Logo */}
        <div
          className="relative z-10 transform transition-all duration-1000 ease-out"
          style={{
            animation: "logoEntrance 2s ease-out",
          }}
        >
          <Image
            src="/images/logo-sansfond.png"
            alt="Atelier Art'âme"
            width={280}
            height={280}
            className="h-80 w-auto drop-shadow-xl"
            priority
          />
        </div>
      </div>

      {/* Texte de chargement */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-playfair font-light text-gray-700 mb-2">
          Atelier Art&apos;âme
        </h2>
        <p className="text-gray-500 font-crimson">
          Préparation de votre expérience spirituelle...
        </p>
      </div>

      {/* Barre de progression */}
      <div className="w-80 max-w-[90vw]">
        <div className="bg-white/50 backdrop-blur-sm rounded-full h-3 shadow-inner border border-white/30">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Effet de brillance qui passe */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Pourcentage */}
        <div className="text-center mt-3">
          <span className="text-sm text-gray-600 font-medium">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Petites étoiles flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-blue-300 animate-float opacity-60">
          <div className="text-2xl">✨</div>
        </div>
        <div
          className="absolute top-1/3 right-1/4 text-purple-300 animate-float opacity-60"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-xl">⭐</div>
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-pink-300 animate-float opacity-60"
          style={{ animationDelay: "2s" }}
        >
          <div className="text-2xl">✨</div>
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 text-blue-300 animate-float opacity-60"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="text-xl">🌟</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes logoEntrance {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-10deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
