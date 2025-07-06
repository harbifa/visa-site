/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif', 'Amiri', 'Noto Sans Arabic', 'Cairo', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
