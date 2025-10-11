/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Azul profundo para botones
        secondary: '#F59E0B', // Dorado para acentos
        neutral: '#F3F4F6', // Gris claro para fondos
      },
    },
  },
  plugins: [],
}