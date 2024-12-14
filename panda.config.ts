import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "*": {
    fontFamily:
      "var(--font-basically-a-sans-serif), Aoto Gothic Regular, Noto Sans JP",
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
      tokens: {
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
  outdir: "styled-system",
});
