import { vars } from '@/styles/vars/var.css';
import { style } from '@vanilla-extract/css';

export const AvatarStyle = ({
  container: style({
    height: `calc((${vars.fontSizes.large} * ${vars.lineHeights.medium}) * 3)`,
    position: 'relative',
    width: `calc((${vars.fontSizes.large} * ${vars.lineHeights.medium}) * 3)`,
  }),
  image: style({
    clipPath: 'url(#blob)',
  }),
  clip: style({
    height: 0,
    width: 0,
  })
})