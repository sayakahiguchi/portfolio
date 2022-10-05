import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/vars/var.css';
import { hexToRGB } from '@/styles/mixin/hexToRGB';

export const CardStyle = {
  item: style({
    alignSelf: 'stretch',
    display: 'flex',
    flex: '0 0 61.8vw',
    flexFlow: 'column nowrap',
    padding: vars.space.medium + vars.space.small,
    scrollSnapAlign: 'center',
    '@media': {
      'screen and (min-width: 768px)': {
        flex: '0 0 calc(100% / 4)',
      }
    },
    selectors: {
      '&:first-of-type': {
        marginLeft: vars.space.vw,
        '@media': {
          'screen and (min-width: 768px)': {
            marginLeft: 0
          }
        }
      },
      '&:last-of-type': {
        marginRight: vars.space.vw,
        '@media': {
          'screen and (min-width: 768px)': {
            marginRight: 0
          }
        }
      }
    }
  }),
  title: style({
    fontSize: vars.fontSizes.medium,
    marginBottom: 0,
    order: 2
  }),
  description: style({
    margin: 'auto 0 0',
    order: 3,
    paddingTop: vars.space.small
  }),
  media: style({
    position: 'relative',
    order: 1,


  }),
  categories: style({
    order: 4,
    paddingLeft: '1rem',
    listStyle: 'url(/assets/Icon/tag.svg)'
  }),
  icon: style({
    left: '100%',
    position: 'absolute',
    top: '100%',
    transform: 'translate(-100%, -100%)',
    selectors: {
      '&::after': {
        backgroundColor: `rgba(${hexToRGB('#747678')}, .1)`,
        borderRadius: '9999px',
      }
    }
  })
}