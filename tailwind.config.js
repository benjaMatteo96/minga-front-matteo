/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('./images/home-bg.svg')",
        'image-mobile':"url('./images/home-mobile.svg')",
        'footer-image':"url('./images/footer/footer-img.svg')"
        
    },
  },
  plugins: [],
}
}
