/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#F7EBDE',
        accent: '#654236',
        rareAccent: '#14281D',
      },
      fontFamily: {
        rockwell: ['Rockwell', 'serif'],
      },
    },
  },
  plugins: [],
};
