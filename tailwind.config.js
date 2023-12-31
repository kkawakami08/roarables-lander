/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-red": "#E96854",
        "brand-red-dark": "#E33F26",
        "brand-yellow": "#EBD53C",
        "brand-purple": "#473144",
        "brand-purple-light": "#60435C",
        "brand-blue": "#BFD1E5",
        "brand-blue-light": "#E2EAF3",
        "brand-green": "#696047",
        "brand-green-light": "#928563",
      },
    },
  },
  plugins: [],
};
