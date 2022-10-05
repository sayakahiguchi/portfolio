import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const coverImageStyles = {
  wrapper: style({
    position: 'relative',
    '::before': {
      content: '',
      float: 'left',
      paddingTop: 'calc((9/21)*100%)',
    },
    '::after': {
      content: '',
      display: 'block',
      clear: 'both'
    },
  }),
  content: style({
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  })
};