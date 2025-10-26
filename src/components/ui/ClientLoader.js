"use client";

import { useState, useEffect } from "react";
import SiteLoader from "./SiteLoader";

export default function ClientLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Vérifier si c'est la première visite de la session
    const hasVisited = sessionStorage.getItem("hasVisitedSite");
    
    if (!hasVisited) {
      // Première visite de la session - afficher le loader
      setIsLoading(true);
      // Marquer comme visité pour cette session
      sessionStorage.setItem("hasVisitedSite", "true");
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Éviter l'hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <>{isLoading && <SiteLoader onLoadingComplete={handleLoadingComplete} />}</>
  );
}
