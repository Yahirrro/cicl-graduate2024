import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "*": {
    fontFamily:
      "var(--font-basically-a-sans-serif), Aoto Gothic Regular, var(--font-noto-sans-jp), sans-serif",
    fontFeatureSettings: '"palt" on',
    fontStyle: "normal",
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        flashIn: {
          from: {
            filter: "brightness(1.1)",
          },
          to: {
            filter: "brightness(1)",
          },
        },
      },
      tokens: {
        colors: {
          background: {
            value: "#002243",
          },
          text: {
            value: "rgb(12, 43, 116)",
          },
          text60: {
            value: "rgba(12, 43, 116, 0.6)",
          },
        },
        fontSizes: {
          extraSmall: {
            value: "12px",
          },
          small: {
            value: "14px",
          },
        },
      },
      textStyles: {
        demiBold: {
          value: {
            fontFamily:
              "var(--font-basically-a-sans-serif), Aoto Gothic DemiBold, var(--font-noto-sans-jp), sans-serif",
          },
        },

        extraSmall: {
          value: {
            fontSize: "extraSmall",
            fontStyle: "normal",
            fontWeight: 470,
            lineHeight: "125% /* 15px */",
            letterSpacing: "0.05rem",
            textTransform: "uppercase",
          },
        },
        small: {
          value: {
            fontSize: "small",
            fontStyle: "normal",
            fontWeight: 470,
            lineHeight: "125% /* 15px */",
            letterSpacing: "0.05rem",
            textTransform: "uppercase",
          },
        },
      },
    },
  },

  globalCss,

  // The output directory for your css system
  jsxFramework: "react",
});
