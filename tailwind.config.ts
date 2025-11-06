import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0e27",
          secondary: "#111827",
        },
        foreground: {
          DEFAULT: "#f0f4f8",
          secondary: "#cbd5e1",
        },
        primary: {
          DEFAULT: "#06b6d4",
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        accent: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          pink: "#ec4899",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-primary": "radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
        "glow-secondary": "radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(6, 182, 212, 0.3)",
        "glow-md": "0 0 20px rgba(6, 182, 212, 0.4)",
        "glow-lg": "0 0 30px rgba(6, 182, 212, 0.5)",
        "glow-xl": "0 0 40px rgba(6, 182, 212, 0.6)",
        "glow-violet-sm": "0 0 10px rgba(139, 92, 246, 0.3)",
        "glow-violet-md": "0 0 20px rgba(139, 92, 246, 0.4)",
        "glow-violet-lg": "0 0 30px rgba(139, 92, 246, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient": "gradient 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.8)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;