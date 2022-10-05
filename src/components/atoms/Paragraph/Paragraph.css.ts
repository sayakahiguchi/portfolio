import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const paragraphStyles = style({
  fontSize: vars.fontSizes.regular,
  lineHeight: vars.lineHeights.large,
  maxWidth: '60rem',
  marginBottom: 0,
  marginTop: vars.space.regular,
})