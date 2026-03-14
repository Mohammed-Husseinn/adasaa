/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Cairo"', '"Tajawal"', '"Noto Sans Arabic"', '"Segoe UI"', 'Tahoma', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
