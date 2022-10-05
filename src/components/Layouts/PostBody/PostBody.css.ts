import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const postBodyStyle = ({
  wrapper: style({
    width: 'calc(clamp(17.5rem, 100%, 60rem) + ' + vars.space.vw + '*2)',
    marginTop: vars.space.xlarge,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: vars.space.vw,
    paddingRight: vars.space.vw,
  })
})