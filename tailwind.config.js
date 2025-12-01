// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
          50: "#EEF3FF",
          100: "#DCE6FF",
          500: "#4A7DFF",
          600: "#2F64DB",
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
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#E5E7EB",
          300: "#D0D5DD",
          500: "#667085",
          700: "#344054",
        },

        // Add success, warning, error, etc.
        success: "#12B76A",
        danger: "#F04438",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"], // or your Figma font
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "4px",
      },

      boxShadow: {
        card: "0px 1px 3px rgba(16, 24, 40, 0.1)",
        soft: "0px 2px 4px rgba(0,0,0,0.06)",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
