import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const headerStyles = {
  container: style({
    alignItems: 'center',
    display: 'grid',
    gridGap: '.5rem',
    gridTemplate: '"title themeChanger" "nav nav"',
    justifyContent: 'space-between',
    justifyItems: 'center',
    paddingLeft: vars.space.vw,
    paddingRight: vars.space.vw,
    zIndex: 9,
    '@media': {
      'screen and (min-width: 768px)': {
        justifyItems: 'end',
        gridTemplate: '"title . nav themeChanger" auto / auto 1fr auto auto',
      }
    }
  }),
  title: style({
    gridArea: 'title',
    fontSize: vars.fontSizes.medium,
    fontWeight: vars.fontWeight.bold,
    marginTop: 0,
    marginBottom: 0,
    mixBlendMode: 'difference',
  })
}