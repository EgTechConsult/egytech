import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "0",
    },
    screens: {
      "2xl": "1400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xs: "480px",
      xxl: "1920px",
    },
    fontFamily: {
      primary: "var(--font-jetBrainsMono)",
    },
    extend: {
      colors: {
        purple: "#532B88",
        background: "#2A1454",
        pink: "#f72585",
        font: {
          primary: "#F4EFFA",
          secondary: "#2A1454",
          primary_light: "#8651F6",
        },
        accent: {
          DEFAULT: "##9B72CF",
          hover: "#C8B1E4",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
