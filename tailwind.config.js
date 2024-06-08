/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",   ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px 15px rgba(0, 0, 0, 2)',
      },
      shadowBlue: {
        "hover-blue":"2px 0px 2px blue",
      },
    },
  },
  plugins: [],
}

