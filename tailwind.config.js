/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'go3': ['go3', 'sans-serief'],
        'notosansjp': ['notosansjp', 'sans-serief'],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        sitetheme: {
          "primary": "#FEFCE8",
          "secondary": "#422006",
          "accent": "#FFDD32",
          "neutral": "#854D0E"
        },
      },
    ],
  },
}

