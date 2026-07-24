/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,jsx}",
    "./admin/**/*.{js,jsx}",
    "./shared/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a365d',
          orange: '#ed8936',
          emerald: '#38a169',
          light: '#f7fafc',
          dark: '#1a202c',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans SC"', 'sans-serif'],
      },
      borderRadius: {
        'app': '16px',
      }
    },
  },
  plugins: [],
}
