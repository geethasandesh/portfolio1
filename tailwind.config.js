module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleYellow: '#FFF9E6', // Custom pale yellow color
      },
      boxShadow: {
        'light': '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom light shadow
        'strong': '0 8px 12px rgba(0, 0, 0, 0.3)', // Custom stronger shadow
      },
    },
  },
  plugins: [],
};
