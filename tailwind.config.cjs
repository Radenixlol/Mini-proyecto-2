/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Google': "url(https://d2slcw3kip6qmk.cloudfront.net/app/common/3rd-party-logos/google-logo-2018-no-border.svg)",
        'Netflix_background':'url(https://images.lifestyleasia.com/wp-content/uploads/2019/11/01120945/netflix-image.jpg)',
      },
    },
  },
  plugins: [],
}
