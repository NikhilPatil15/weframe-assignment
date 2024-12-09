import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
          inter:['Inter','sans-serif'],
          geist:['Geist','sans-serif'],
          poppins:['Poppins','sans-serif'],
          playfair:['Playfair Display', 'sans-serif'],
          epilogue:['Epilogue','sans-serif'],
          montserrat:['Montserrat','sans-serif'],
          grotesk:['Host Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
