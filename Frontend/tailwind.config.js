/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      colors: {
        themeColor: '#38afff',
        themeColorHover: '#78baff' // Replace with your desired hex color
      },
    },
  },
};
