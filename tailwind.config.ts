import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          800: "#1F2937",
          900: "#111827",
        },

        "dark-teal": {
          DEFAULT: "#00695c",
          100: "#CCDFDC",
          200: "#99BFB9",
          300: "#669F97",
          400: "#338074",
          500: "#00695c",
          600: "#00564C",
          700: "#00453D",
          800: "#00342E",
          900: "#00231F",
        },

        "sage-green": {
          DEFAULT: "#8bc34a",
          100: "#EFF7E1",
          200: "#DEEFC3",
          300: "#CEE8A5",
          400: "#BDE087",
          500: "#8bc34a",
          600: "#729F3C",
          700: "#5A7D2F",
          800: "#425C23",
          900: "#2B3B17",
        },

        "light-green": {
          DEFAULT: "#cddc39",
          100: "#F9FBDC",
          200: "#F3F8B9",
          300: "#ECF496",
          400: "#E6F172",
          500: "#cddc39",
          600: "#A8B42E",
          700: "#858F24",
          800: "#626A1B",
          900: "#404612",
        },

        "pale-pink": {
          DEFAULT: "#f06292",
          100: "#FEE8F0",
          200: "#FDD1E1",
          300: "#FBBAD2",
          400: "#FAA4C3",
          500: "#f06292",
          600: "#C65077",
          700: "#9C405E",
          800: "#733046",
          900: "#49202D",
        },

        "off-white": {
          DEFAULT: "#f5f5f5",
          100: "#FEFEFE",
          200: "#FDFDFD",
          300: "#FBFBFB",
          400: "#F8F8F8",
          500: "#f5f5f5",
          600: "#C9C9C9",
          700: "#9E9E9E",
          800: "#747474",
          900: "#494949",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
