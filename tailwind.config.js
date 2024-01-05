// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'stolzl-Bold': ['Stolzl-Bold', 'sans-serif'],
        'Stolzl-Medium': ['Stolzl-Medium', 'sans-serif'],
        'Stolzl-Regular': ['Stolzl-Regular', 'sans-serif'],
        'stolzl-Book': ['Stolzl-Book', 'sans-serif'],
        'Stolzl-Light': ['Stolzl-Light', 'sans-serif']
      },
      boxShadow: {
        'xl': '0 2px 6px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
