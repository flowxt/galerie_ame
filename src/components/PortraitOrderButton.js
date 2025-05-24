"use client";

import { useState } from "react";

export default function PortraitOrderButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePortraitOrder = () => {
    window.location.href = "/portrait-d-ame/commande";
  };

  return (
    <button
      onClick={handlePortraitOrder}
      className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-medium flex items-center justify-center mx-auto"
    >
      Commander Mon Portrait d&apos;Âme
    </button>
  );
}
