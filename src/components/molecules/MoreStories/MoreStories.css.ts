import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const moreStories = {
  container: style({
    display: 'grid',
    paddingTop: vars.space.large,
    '@media': {
      'screen and (min-width: 1024px)': {
        grid: 'auto-flow dense / repeat(33, 1fr)',
        paddingLeft: vars.space.vw,
        paddingRight: vars.space.vw,
      }
    },
  }),
  title: style({
    paddingLeft: vars.space.vw,
    marginTop: vars.space.xlarge,
    paddingRight: vars.space.vw,
    fontSize: vars.fontSizes.xlarge,
    textTransform: 'capitalize',
  })
}