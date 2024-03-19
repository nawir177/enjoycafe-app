/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        'primary': '#eb580e',
      }
    
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

