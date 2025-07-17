// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure your content path is correct
    ],
    theme: {
      extend: {
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'], // Add Manrope font family
          poppins: ['Poppins', 'sans-serif'], // Add Poppins font family
        },
      },
    },
    plugins: [require('tailwind-scrollbar')],
  }
  