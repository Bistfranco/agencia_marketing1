/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "celestial-button":'#47b8cf',
        "span-header-color":'#ff5960',
        "case-card-color": '#f3f3f3'
      }
    },
    bosShadow: {
      navbar: "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
    }
  },
  plugins: [],
}

