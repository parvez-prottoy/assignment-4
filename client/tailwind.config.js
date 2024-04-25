/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "cls-1": "rgba(90, 103, 186, 1)",
        "cls-2": "rgba(241, 242, 247, 1)",
        "cls-3": "rgba(8, 36, 49, 1)",
        "cls-4": "rgba(166, 171, 200, 1)",
        "cls-5": "rgba(112, 127, 221, 1)",
        "cls-6": "rgba(200, 203, 217, 1)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
