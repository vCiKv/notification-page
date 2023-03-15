/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "notice-red":"hsl(1, 90%, 64%)",
        "info-blue":"hsl(219, 85%, 26%)",
        "light-blue":"hsl(210, 60%, 98%)",
        "dark-grey":"hsl(219, 12%, 42%)",
        "very-blue":" hsl(224, 21%, 14%)"
      }
    },
  },
  plugins: [],
}
