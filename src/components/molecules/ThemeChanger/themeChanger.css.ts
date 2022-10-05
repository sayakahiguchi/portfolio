import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const themeChangerStyles = ({
  wrapper: style({
    gridArea: 'themeChanger',
    position: 'relative'
  }),
  field: style({
    backgroundColor: vars.colors.background,
    left: '50%',
    position: 'absolute',
    top: '100%',
    transform: 'translateX(-50%)',
    width: 'max-content',
    maxHeight: 0,
    overflow: 'hidden',
    visibility: 'collapse',
  }),
  is_active: style({
    width: 'max-content',
    maxHeight: '100vh',
    overflow: 'visible',
    visibility: 'visible',
    zIndex: '99'
  }),
  button: style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: vars.space.small + vars.space.small,
    width: '100%',
  }),
  input: style({
    cursor: 'pointer',
    margin: 0,
    visibility: 'collapse',
    width: 0
  }),
  label: style({
    width: '100%',
  }),
  icon: style({
    display: 'inline-block',
    height: vars.fontSizes.medium,
    paddingRight: vars.space.small,
    position: 'relative',
    verticalAlign: 'middle',
    width: [`calc(${vars.fontSizes.medium} + ${vars.space.small})`],
  })
})