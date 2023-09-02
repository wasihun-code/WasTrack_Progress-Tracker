/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGreyish: '#E1E1E1',
        mediumCyan: '#2699A9',
        lightCyan: '#59A0C8',
        darkCyan: '#5680A7',
      },
    },
  },
  plugins: [],
};
