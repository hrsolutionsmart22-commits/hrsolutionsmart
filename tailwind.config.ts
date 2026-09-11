/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#1a2b4a",
          900: "#1e3a8a",
          800: "#1e40af",
          700: "#4338ca",
        },
      },
    },
  },
  plugins: [],
};
