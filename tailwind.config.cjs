/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        ds: {
          bg: '#050816',
          bgSoft: '#0b1020',
          accent: '#38bdf8',
          accentSoft: '#0ea5e9',
          muted: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
};