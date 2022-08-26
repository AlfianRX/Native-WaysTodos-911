/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}","./Container..{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'profile-photo': "url('https://res.cloudinary.com/alfiancloud/image/upload/v1661230359/cld-sample.jpg')",
      }
    },
  },
  plugins: [],
}
