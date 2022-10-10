import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const postHeaderStyle = {
  wrapper: style({
    position: 'relative',
    marginLeft: vars.space.vw,
    marginRight: vars.space.vw,
  }),
  content: style({
    left: '50%',
    mixBlendMode: 'difference',
    paddingLeft: vars.space.vw,
    paddingRight: vars.space.vw,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  })

}