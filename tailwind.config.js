/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'0px', 
      'md':'700px',
      'lg':'1024px'
    },
    extend: {
      fontFamily:{
        Lato:['Lato', 'sans-serif'],
        montserrat:['montserrat', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif'],
        Quicksand:['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}