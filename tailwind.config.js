import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */

const CustomStyle = plugin(function ({addUtilities}){
  addUtilities({
 "rotate-y-180":{
  transform: "rotateY(180deg)"
 }
  })
})
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [CustomStyle],
}

