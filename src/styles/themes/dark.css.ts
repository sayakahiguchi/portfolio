import { createTheme } from '@vanilla-extract/css'
import { vars } from '@/styles/vars/var.css'

export const darkTheme = createTheme(vars.colors, {
  background: "#3D3E40",
  text: "#ECE8E6",
  accent01: "#919294",
  accent02: ""
});

