import daisyUi from 'daisyui'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  theme: {
    extend: {},
  },
  plugins: [daisyUi],
}

