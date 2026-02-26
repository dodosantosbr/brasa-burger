/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#FF3C38",        // vermelho mais moderno
        primaryDark: "#E10600",
        
        background: "#0F0F0F",
        surface: "#1C1C1C",
        surfaceLight: "#242424",

        cheddar: "#FFB703",

        textPrimary: "#F5F5F5",
        textSecondary: "#9CA3AF",
      },

      borderRadius: {
        xl2: "1.5rem",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.3)",
        glow: "0 0 20px rgba(255,60,56,0.4)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}