"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <>
      {/* Effet de rideau qui descend lors du changement de page */}
      <motion.div
        className="fixed inset-0 z-[60] pointer-events-none"
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          background: "linear-gradient(135deg, rgba(249, 168, 212, 0.95) 0%, rgba(216, 180, 254, 0.95) 50%, rgba(191, 219, 254, 0.95) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Étoiles scintillantes pendant la transition */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/3 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            ⭐
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/3 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            💫
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            ✨
          </motion.div>
        </div>
      </motion.div>

      {/* Contenu de la page avec animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

