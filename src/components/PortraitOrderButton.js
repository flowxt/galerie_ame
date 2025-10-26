"use client";

import { useState } from "react";

export default function PortraitOrderButton({ onClick = null }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePortraitOrder = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = "/portrait-d-ame#tarifs";
    }
  };

  return (
    <button
      onClick={handlePortraitOrder}
      className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-medium flex items-center justify-center mx-auto"
    >
      Commander mon portrait d&apos;âme
    </button>
  );
}
