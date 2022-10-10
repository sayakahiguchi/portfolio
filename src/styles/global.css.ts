import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css'

globalStyle('html', {
  scrollBehavior: 'smooth'
})
globalStyle('body', {
  margin: 0,
  fontFamily: vars.fonts.body,
  fontSize: '100%',
  background: vars.colors.background,
  color: vars.colors.text,
  minHeight: "100vh",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box"
});

globalStyle('h1', {
  fontSize: vars.fontSizes.medium,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeights.medium,
  marginBottom: 0
});
globalStyle('h2', {
  fontSize: vars.fontSizes.xlarge,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeights.medium,
  marginBottom: vars.space.medium
});
globalStyle('h3', {
  fontSize: vars.fontSizes.large,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeights.medium,
  marginBottom: 0
});
globalStyle('h4', {
  fontSize: vars.fontSizes.medium,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeights.medium,
  marginBottom: 0
});
globalStyle('p', {
  fontSize: vars.fontSizes.regular,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeights.medium
});
globalStyle('small', {
  fontSize: vars.fontSizes.small,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeights.medium
});

globalStyle('ul', {
  marginTop: 0,
  marginBottom: 0
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none'
});

globalStyle('button', {
  cursor: 'pointer',
  minHeight: '2rem',
  minWidth: '2rem',
  padding: 0,
  position: 'relative'
})

globalStyle('button::after', {
  content: '',
  display: 'block',
  height: 'calc(100% + 1rem)',
  left: '-.5rem',
  top: '-.5rem',
  position: 'absolute',
  width: 'calc(100% + 1rem)',
})

export const media = style({
  position: 'relative'
});

globalStyle(`${media} > img`, {
  width: '100%',
  height: '100%'
});

globalStyle('svg', {
  fill: 'none',
  left: 0,
  height: '100%',
  maxWidth: '100%',
  position: 'absolute',
  top: 0
});