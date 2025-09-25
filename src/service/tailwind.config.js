/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← escanea todos los componentes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // tipografía limpia
      },
      colors: {
        brand: {
          black: "#333333",
          white: "#ffffff",
          gray: "#f5f5f5",
        },
      },
      spacing: {
        "section-y": "4rem", // márgenes verticales para secciones
      },
    },
  },
  plugins: [],
};
