module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nogoon: '#4e4e4e',
        transWhite: 'rgba(255 , 255 , 255 , 0)',
        transBlack: 'rgba(0 , 0 , 0 , .4)',
        mainColor: '#0b0b0b',
        tabColor: '#fa0000'
      },
      fontFamily: {
        noto: ['"Noto Sans KR"', 'sans-serif'],
        open: ['"Open Sans"', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}