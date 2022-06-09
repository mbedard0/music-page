/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFFFFF",
          "secondary": "#152747",
          "accent": "#513448",
          "neutral": "#171618",
          "base-100": "#09090B",
          "info": "#66C7FF",
          "success": "#87D039",
          "warning": "#E3D664",
          "error": "#FF7070",
        },
      },
    ],
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
