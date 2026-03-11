/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const brandColors = {
  50: '#96DCE9',
  100: '#71CBEE',
  200: '#57A0F5',
  300: '#3787F4',
  400: '#205DE8',
  500: '#1C4BAA',
  600: '#0F32C9',
  700: '#07269D',
  800: '#081861',
  900: '#050A25',
  950: '#000000',
};

const brandAccent = {
  50: '#A2DB98',
  100: '#A2DB98',
  200: '#A2DB98',
  300: '#A2DB98',
  400: '#A2DB98',
  500: '#A2DB98',
  600: '#A2DB98',
  700: '#A2DB98',
  800: '#A2DB98',
  900: '#A2DB98',
  950: '#A2DB98',
};

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: brandColors,
        blue: brandColors,
        sky: brandColors,
        neutral: brandColors,
        gray: brandColors,
        slate: brandColors,
        amber: brandAccent,

        // light mode colors
        bgPrimaryAccent: brandColors[500],
        bgSecondaryAccent: brandColors[400],
        bgprimary: brandColors[950],
        bgSecondary: brandColors[900],
        bgTertiary: brandColors[800],
        textprimary: colors.white,
        textSecondary: brandColors[200],
        textMainAccent1: brandColors[500],
        textMainAccent2: brandColors[400],
        textMainAccent3: brandAccent[500],

        //dark mode colors
        darkBgPrimary: "#ffffff",
        darkBgPrimaryAccent: brandColors[200],
        darkBgSecondaryAccent: brandColors[300],
        darkBackgroundSecondary: brandColors[100],
        darkBgSecondary: brandColors[50],
        darkBgTertiary: brandColors[100],
        darkTextPrimary: brandColors[950],
        darkTextSecondary: brandColors[800],
        darkTextMainAccent1: brandColors[500],
        darkTextMainAccent2: brandColors[400],
        darkTextMainAccent3: brandAccent[500],
      },
      animation: {
        pulseSoft: "pulseSoft 2.5s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [],
};
