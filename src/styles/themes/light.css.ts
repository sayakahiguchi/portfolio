import { createTheme } from '@vanilla-extract/css'
import { vars } from '@/styles/vars/var.css'

export const lightTheme = createTheme(vars.colors, {
  background: "#f9f6f4",
  text: "#222021",
  accent01: "#919294",
  accent02: "#BFBFC1"
})

