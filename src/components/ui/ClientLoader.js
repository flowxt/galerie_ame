"use client";

import { useState, useEffect } from "react";
import SiteLoader from "./SiteLoader";

export default function ClientLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
