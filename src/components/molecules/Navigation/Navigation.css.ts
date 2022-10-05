import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const navigationtyles = {
  container: style({
    gridArea: 'auto / span 2',
    '@media': {
      'screen and (min-width: 768px)': {
        gridArea: 'nav'
      }
    }
  }),
  content: style({
    display: 'flex',
    gridArea: 'nav',
    listStyle: 'none',
    paddingLeft: 0,
  }),
};