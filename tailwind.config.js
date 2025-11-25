/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false, // Bloquea el modo oscuro
  theme: {
    extend: {
        colors: {
          primary: '#038C7F',
          'primary-dark': '#027368',
          secondary: '#F59E0B', // Dorado para acentos
          neutral: '#F3F4F6', // Gris claro para fondos
      },
    },
  },
  plugins: [],
}