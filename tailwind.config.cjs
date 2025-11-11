/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary: Archivo, Secondary: Inter
        sans: ['Archivo', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', "Segoe UI", 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      colors: {
        brand: '#6b6bf0'
      }
    },
  },
  plugins: [],
}
