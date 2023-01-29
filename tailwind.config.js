/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        main: ['Righteous', 'cursive'],
        heading: ['B612 Mono', 'monospace'],
      },
    },
  },
  plugins: [
    {
      autoprefixer: {},
      'postcss-import': {},
      '@tailwindcss/jit': {},
    },
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
};
