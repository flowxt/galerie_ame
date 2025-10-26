"use client";

import { useEffect, Suspense } from "react";
import { X } from "lucide-react";
import PortraitOrderForm from "./PortraitOrderForm";

export default function PortraitOrderModal({ isOpen, onClose, selectedFormat }) {
  // Empêcher le scroll quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay avec blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Conteneur de la modale */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Contenu du formulaire */}
        <div className="p-8 md:p-12">
          <Suspense
            fallback={
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Chargement...</p>
              </div>
            }
          >
            <PortraitOrderForm preselectedFormat={selectedFormat} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

