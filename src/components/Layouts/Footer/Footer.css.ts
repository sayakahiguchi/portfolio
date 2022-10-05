import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const footerStyles = {
  container: style({
    marginTop: vars.space.xlarge,
    paddingLeft: vars.space.vw,
    paddingRight: vars.space.vw
  }),
  copyright: style({
    fontSize: vars.fontSizes.small,
    textAlign: 'center'
  })
}