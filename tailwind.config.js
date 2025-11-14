/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // deckt components, pages, sections usw. ab
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f5f8ff',
          100: '#e9efff',
          200: '#cddcff',
          300: '#a8c0ff',
          400: '#7ea1ff',
          500: '#4d7dff',
          600: '#325fe6',
          700: '#2848b4',
          800: '#213a8f',
          900: '#1c316f',
        },
        accent: {
          50:  '#fff8f5',
          100: '#ffeae1',
          200: '#ffd0bf',
          300: '#ffab8d',
          400: '#ff7c51',
          500: '#ff5a26',
          600: '#e04316',
          700: '#b43515',
          800: '#8c2b16',
          900: '#6e2414',
        },
      },
    },
  },
  plugins: [],
}