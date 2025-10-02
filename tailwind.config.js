/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7f2ff",
          100: "#efe5ff",
          200: "#d9c5ff",
          300: "#b694ff",
          400: "#9666ff",
          500: "#7c40ff",  // subtle purple accent
          600: "#6a2ae6",
          700: "#571fbd",
          800: "#451a95",
          900: "#391779"
        }
      }
    }
  },
  plugins: []
};