import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const postTitleStyle = style({
  fontSize: vars.fontSizes.large,
  left: '50%',
  paddingLeft: vars.space.vw,
  paddingRight: vars.space.vw,
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  order: '1'
})