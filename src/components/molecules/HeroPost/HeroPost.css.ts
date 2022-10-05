import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const heroPostStyles = {
  container: style({
    width: 'clamp(18.75rem, 100%, 60rem)',
    margin: vars.space.xlarge + ' auto auto 0',
    paddingLeft: vars.space.vw,
    paddingRight: vars.space.vw
  }),
  title: style({
    fontSize: vars.fontSizes.large,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: vars.space.large
  }),
  paragraph: style({
    marginTop: 0,
    marginBottom: 0,
    paddingTop: vars.space.medium
  })

}