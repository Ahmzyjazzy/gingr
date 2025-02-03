import type { Config } from 'tailwindcss';
import { heroui } from "@heroui/theme"

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ginger: {
          blue: "#0765EB",
          orange: "#DC851F",
          purple: "#775BE5",
          red: "#E01A4F",
          black: '#0C090D'
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config;