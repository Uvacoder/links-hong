module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "url('/static/images/background.jpg')",
      },
      fontFamily: {
        noto: ['Noto Sans TC', 'Inter'],
      },
    },
  },
  plugins: [],
}
