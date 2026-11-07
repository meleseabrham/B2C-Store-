/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5f8',
          100: '#e1eaf0',
          200: '#c5d7e3',
          300: '#9dbcd2',
          400: '#6f9cbd',
          500: '#537993', // header bar color from wireframe/mockup
          600: '#42637b',
          700: '#365166',
          800: '#2d4354',
          900: '#20323f',
          950: '#141f28',
        },
        surface: {
          sand: '#fbf8f3',
          warm: '#f7f4ee',
          cream: '#faf7f2',
          dark: '#1e3547'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        script: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}

