import { style } from '@vanilla-extract/css';

const postLayoutStyle = ({
  container: style({
    display: 'grid',
    '@media': {
      'screen and (min-width: 1280px)': {
      }
    }
  })
})

export default postLayoutStyle