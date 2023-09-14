import daisyUi from 'daisyui'


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  theme: {
    extend: {},
  },
  plugins: [daisyUi, require('flowbite/plugin')]
}

