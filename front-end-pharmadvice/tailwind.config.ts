import type { Config } from 'tailwindcss'
import tailColor from "tailwindcss/colors";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
        transparent: tailColor.transparent,
        current: tailColor.current,
        white: tailColor.white,
        secondaryText: "#8640F9",
        input: "#EAEBFD",

        blue: {
          light: '#6B4EE6',
          dark: '#0C4DCB',
        },
        pink: {
          light: '#E1DCFA',
          DEFAULT: '#BEB0F2',
          dark: '#ED6C6C',
          darkLight: '#F19090',
        },
        gray: {
          darkvar1: '#131313',
          darkvar2: '#444752',
          dark: '#333333',
          DEFAULT: '#000000',
          light: '#D9D9D9',
          lightest: '#9A9A9A',
          verylight: '#F2F8FF',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
