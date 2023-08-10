/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],

  theme: {
    extend: {
      screens: {
        'sm-md': '450px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // 'inter' is the custom name, you can name it whatever you want
      },
    },
  },
  plugins: [],
}
