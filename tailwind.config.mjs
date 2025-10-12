/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        spiritual: {
          rose: "#f43f5e",
          purple: "#a855f7",
          blue: "#3b82f6",
          teal: "#14b8a6",
          gold: "#f59e0b",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        crimson: ["var(--font-crimson)", "serif"],
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        scaleIn: "scaleIn 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)",
        elegant: "0 10px 40px rgba(0, 0, 0, 0.08)",
        spiritual: "0 20px 60px rgba(168, 85, 247, 0.15)",
        "glow-rose": "0 0 30px rgba(244, 63, 94, 0.3)",
        "glow-purple": "0 0 30px rgba(168, 85, 247, 0.3)",
        "glow-blue": "0 0 30px rgba(59, 130, 246, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
