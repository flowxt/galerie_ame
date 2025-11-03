"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <>
      {/* Overlay de transition élégant */}
      <motion.div
        className="fixed inset-0 z-[60] pointer-events-none bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />

      {/* Contenu de la page avec animation fluide */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

