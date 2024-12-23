/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#6a78ff",
        secondary:"#",
        third:"#d8f8f2"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
