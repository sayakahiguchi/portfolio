import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const wrapperStyle = {
  title: style({
    fontSize: vars.fontSizes.xlarge,
    fontWeight: vars.fontWeight.bold,
    marginTop: vars.space.xlarge,
    textTransform: 'capitalize'
  }),
  wrapper: style({
    paddingLeft: vars.space.vw,
    paddingRight: vars.space.vw,
  })
};