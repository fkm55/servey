/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      // Define your custom colors here
      colors: {
        'neon-green': '#39ff14',
        'color picker': ' #2FC61F'
      },
    },
  },
  plugins: [],
}



// color: {
//   ZenGreen: '#39ff14',
// },