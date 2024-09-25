/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add your content paths here
  ],
  theme: {
    extend: {
      // You can add custom configurations here, like colors or fonts
    },
  },
  plugins: [
    daisyui,  // Adding daisyUI plugin
  ],
  darkMode: 'class',  // Enable dark mode with the 'class' strategy
};
