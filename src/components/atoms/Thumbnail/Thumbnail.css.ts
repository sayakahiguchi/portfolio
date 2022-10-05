import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/vars/var.css';

export const ThumbnailStyle = {
  wrapper: style({
    position: 'relative',
    selectors: {
      '&::before': {
        content: '',
        float: 'left',
        paddingTop: '56.25%',
      },
      '&::after': {
        content: '',
        display: 'block',
        clear: 'both'
      },
      // '& > :first-child': {
      //   height: '100%',
      //   left: 0,
      //   position: 'absolute',
      //   top: 0,
      //   width: '100%'
      // }
    }
  }),
  content: style({
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
  })
}