/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',

  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],

  theme: {
    extend: {
      screens: {
        'sm-md': '450px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // 'inter' is the custom name, you can name it whatever you want
      },
    },
  },
  plugins: [],
}
