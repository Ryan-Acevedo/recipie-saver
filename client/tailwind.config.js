/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "myColor": {
          "50": "#f0f1ff",
          "100": "#e4e5ff",
          "200": "#cdcfff",
          "300": "#a5a5ff",
          "400": "#7973ff",
          "500": "#4e3aff",
          "600": "#3913ff",
          "700": "#2701ff",
          "800": "#2000d7",
          "900": "#1f03bd",
          "950": "#0c0078"
        }
      }
    },
  },
  plugins: [],
}

