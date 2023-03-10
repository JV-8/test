/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    containers:{
      center: false,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },

  extend: {
    margin: {
        1: '14px',
        2: '16px',
        3: '18px',
        4: '20px'
        }
      }
    },
  plugins: [],
}
