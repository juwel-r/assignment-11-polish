/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f321fb",
        secondary:"#f78f14"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
