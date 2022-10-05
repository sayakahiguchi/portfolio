import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const postHeaderStyle = {
  wrapper: style({
    position: 'relative',
    marginLeft: vars.space.vw,
    marginRight: vars.space.vw,
  }),

}