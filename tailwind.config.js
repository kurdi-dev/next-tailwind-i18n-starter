module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#121212",
      },
      fontFamily: {
        body: ['"IBM Plex Sans Arabic"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
