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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        website: {
          primary: "#5C6AC4",
          secondary: "#EEF0F9",
          accent: "#37cdbe",
          neutral: "#84919C",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s 3 ease-in-out",
      },
    },
  },
};
