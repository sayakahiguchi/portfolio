import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/vars/var.css';

export const CardListStyle = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  marginTop: '1.5rem 0',
  marginLeft: '-6.25vw',
  marginRight: '-6.25vw',
  listStyle: 'none',
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  paddingLeft: 0,
  scrollSnapType: 'x mandatory',
  '@media': {
    'screen and (min-width: 1024px)': {
      flexFlow: 'row wrap',
      marginLeft: 0,
      marginRight: 0
    }
  }
})