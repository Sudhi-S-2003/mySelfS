// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
      },
      background: {
        primary: "var(--primary)",
      },
      backgroundImage: {
        'secondary-gradient': 'linear-gradient(to right, #e02884, #2786d6)',
      },
    },
  },
  plugins: [],
} satisfies Config;
