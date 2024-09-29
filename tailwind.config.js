/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#010E2A',
          dark: '#010E2A',
          light: '#262E42',
        },
        secondary: {
          DEFAULT: '#FFB901',
         
        },
      },
    },
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    }

  },
  plugins: [],
}
