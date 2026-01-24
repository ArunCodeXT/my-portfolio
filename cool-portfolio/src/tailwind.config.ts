/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#10B981",
          greenDark: "#059669",
          purple: "#8B5CF6",
          purpleDark: "#7C3AED",
        },
      },
    },
  },
  plugins: [],
};
