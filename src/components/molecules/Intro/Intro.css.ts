import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/vars/var.css';

export const introStyle = {
  container: style({
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    height: '61.8vh',
    margin: 'auto 0 auto auto',
    paddingLeft: vars.space.vw,
    paddingRight: vars.space.vw,
    paddingTop: '15.1vw',
    position: 'relative',
  }),
  title: style({
    color: vars.colors.text,
    fontSize: vars.fontSizes.xxlarge,
    fontWeight: vars.fontWeight.bold,
    marginBottom: 0,
  }),
  description: style({
    alignSelf: 'flex-end',
    mixBlendMode: 'color-burn',
    zIndex: 1
  }),
  background: style({
    left: '100%',
    position: 'absolute',
    top: 0,
    transform: 'translateX(-100%)',
    width: '100%',
    height: '100vw',
    zIndex: 0,
    '@media': {
      'screen and (min-width: 1024px)': {
        height: '61.8vw',
        left: 0,
        transform: 'translate(0, -50%)',
        top: '50%'
      }
    }
  })
}

