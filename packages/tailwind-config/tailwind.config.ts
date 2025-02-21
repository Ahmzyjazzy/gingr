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
    addCommonColors: true, // If true, the common heroui colors (e.g. "blue", "green", "purple") will replace the TailwindCSS default colors.
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
    themes: {
      light: {
        colors: {
          /** Semantic colors -> https://www.heroui.com/docs/customization/colors */
          background: "#FFFFFF", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
          // ... rest of the colors
          // Layout => background, foreground, divider, focus
          // Content => content1, content2, content3, content4
          // Base => default, primary, secondary, success, warning, danger
          // Default => default-50 to 900
          // primary, seconday, success, warning, danger, 
          primary: {
            50: "#e6f1fe",
            100: "#cce3fd",
            200: "#99c7fb",
            300: "#66aaf9",
            400: "#338ef7",
            500: "#775BE5",
            600: "#005bc4",
            700: "#004493",
            800: "#002e62",
            900: "#001731",
            foreground: "#FFFFFF",
            DEFAULT: "#775BE5",
          },
          secondary: {
            50: "#f2eafa",
            100: "#e4d4f4",
            200: "#c9a9e9",
            300: "#ae7ede",
            400: "#9353d3",
            500: "#7828c8",
            600: "#6020a0",
            700: "#481878",
            800: "#301050",
            900: "#180828",
          },
          success: {
            50: "#e8faf0",
            100: "#d1f4e0",
            200: "#a2e9c1",
            300: "#74dfa2",
            400: "#45d483",
            500: "#17c964",
            600: "#12a150",
            700: "#0e793c",
            800: "#095028",
            900: "#052814",
          },
          warning: {
            50: "#fefce8",
            100: "#fdedd3",
            200: "#fbdba7",
            300: "#f9c97c",
            400: "#f7b750",
            500: "#f5a524",
            600: "#c4841d",
            700: "#936316",
            800: "#62420e",
            900: "#312107",
          },
          danger: {
            50: "#fee7ef",
            100: "#fdd0df",
            200: "#faa0bf",
            300: "#f871a0",
            400: "#f54180",
            500: "#f31260",
            600: "#c20e4d",
            700: "#920b3a",
            800: "#610726",
            900: "#310413",
          },
        },
      },
      dark: {
        colors: {
          /** Semantic colors -> https://www.heroui.com/docs/customization/colors */
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            50: "#001731",
            100: "#002e62",
            200: "#004493",
            300: "#005bc4",
            400: "#006FEE",
            500: "#338ef7",
            600: "#66aaf9",
            700: "#99c7fb",
            800: "#cce3fd",
            900: "#e6f1fe",
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
          secondary: {
            50: "#180828",
            100: "#301050",
            200: "#481878",
            300: "#6020a0",
            400: "#7828c8",
            500: "#9353d3",
            600: "#ae7ede",
            700: "#c9a9e9",
            800: "#e4d4f4",
            900: "#f2eafa",
          },
          success: {
            50: "#052814",
            100: "#095028",
            200: "#0e793c",
            300: "#12a150",
            400: "#17c964",
            500: "#45d483",
            600: "#74dfa2",
            700: "#a2e9c1",
            800: "#d1f4e0",
            900: "#e8faf0",
          },
          warning: {
            50: "#312107",
            100: "#62420e",
            200: "#936316",
            300: "#c4841d",
            400: "#f5a524",
            500: "#f7b750",
            600: "#f9c97c",
            700: "#fbdba7",
            800: "#fdedd3",
            900: "#fefce8",
          },
          danger: {
            50: "#310413",
            100: "#610726",
            200: "#920b3a",
            300: "#c20e4d",
            400: "#f31260",
            500: "#f54180",
            600: "#f871a0",
            700: "#faa0bf",
            800: "#fdd0df",
            900: "#fee7ef",
          },
        },
        // ... rest of the colors
      },
      mytheme: {
        // custom theme
        // extend: "light",
        colors: {
          background: "#FFFFFF", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
          primary: {
            DEFAULT: "#775BE5",
            foreground: "#FFFFFF",
          },
          focus: "#775BE5",
        },
      },
      'mytheme-dark': {
        // custom theme
        // extend: "dark",
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            DEFAULT: "#f31260",
            foreground: "#FFFFFF",
          },
          focus: "#f31260",
        },
      },
    }
  })],
} satisfies Config;