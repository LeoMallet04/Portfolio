/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sections-color': '#0F0000',
        'name-color': '#992A2A',
        'alternative-text-color': '#8F0505',
      }
    },
  },
  plugins: [],
}

