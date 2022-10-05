import { createGlobalTheme, createGlobalThemeContract, createTheme, createThemeContract, style, assignVars, createVar } from "@vanilla-extract/css";

const global = createGlobalTheme("body", {
  space: {
    none: '0',
    small: '.5rem',
    regular: '1rem',
    medium: '1.5rem',
    large: '2.5rem',
    xlarge: '4rem',
    'vw': '6.25vw'
  },
  fonts: {
    heading: "Hiragino Kaku Gothic",
    body: "YakuHanJP, Noto Sans JP, Hiragino Kaku Gothic, Yu Gothic, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
  },
  fontSizes: {
    xxlarge: "clamp(1.70875rem, 1.2694rem + 1.9527vw, 2.441rem)", //2.441rem
    xlarge: "clamp(1.70875rem, 1.5622rem + 0.6513vw, 1.953rem)", //1.953rem
    large: "clamp(1.3675rem, 1.2502rem + 0.5213vw, 1.563rem)", //1.563rem
    medium: "clamp(1.09375rem, 1.0000rem + 0.4167vw, 1.25rem)",//1.09375rem to 1.25rem
    regular: "1rem",
    small: ".75rem",
  },
  fontWeight: {
    thin: "300",
    normal: "400",
    bold: "700"
  },
  lineHeights: {
    small: '1',
    medium: '1.3',
    large: '1.78',
  },
  grayScale: {
    '100': '#232122',
    '80': '#747678',
    '50': '#C0C0C2',
    '10': '#EBE8E4',
    '0': '#FAF7F4',
  }
})

const colors = createThemeContract({
  background: null,
  text: null,
  accent01: null,
  accent02: null,
})

export const vars = { ...global, colors };