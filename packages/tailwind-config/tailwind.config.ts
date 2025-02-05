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
  plugins: [heroui({
    prefix: "gingr",
    addCommonColors: true,
    defaultTheme: 'light',
    defaultExtendTheme: 'light',
    layout: {
      hoverOpacity: 0.8,
      disabledOpacity: 0.5,
      dividerWeight: '1px',
      fontSize: {
        tiny: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.125rem',
        // DEFAULT: "1rem",
      },
      lineHeight: {
        tiny: '1rem',
        small: '1.25rem',
        medium: '1.5rem',
        large: '1.75rem',
        // DEFAULT: "1.5rem",
      },
      radius: {
        small: '0.25rem',
        medium: '0.5rem',
        large: '0.75rem',
      },
      borderWidth: {
        small: '1px',
        medium: '2px',
        large: '3px',
      },
      boxShadow: {
        small: '0px 0px 5px 0px rgb(0 0 0 / 0.01), 0px 2px 10px 0px rgb(0 0 0 / 0.06)',
        medium: '0px 0px 15px 0px rgb(0 0 0 / 0.02), 0px 2px 30px 0px rgb(0 0 0 / 0.08)',
        large: '0px 0px 30px 0px rgb(0 0 0 / 0.03), 0px 30px 60px 0px rgb(0 0 0 / 0.12)',
      },
    },
  })],
} satisfies Config;