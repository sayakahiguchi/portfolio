import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const ListStyles = {
  container: style({
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    paddingLeft: 0,
    paddingTop: vars.space.medium,
  }),
  item: style({
    flex: '0 0 calc(100% / 3)',
    position: 'relative',
    '@media': {
      'screen and (min-width: 768px)': {
        flex: '1 0 auto',
      }
    },
    selectors: {
      '&:not(:first-of-type)': {
        paddingLeft: vars.space.small
      }
    }
  })
};