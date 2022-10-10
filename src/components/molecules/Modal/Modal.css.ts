import { style, styleVariants } from "@vanilla-extract/css";
import * as VEX from "@vanilla-extract/recipes";
import { vars } from '@/styles/vars/var.css';
import { hexToRGB } from "@/styles/mixin/hexToRGB";

export const modalStyles = {
  container: style({
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(1.8px)',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    left: 0,
    height: '100%',
    minWidth: '20rem',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
  }),
  button: style({
    display: 'inline-block',
    margin: 'auto 0 auto auto',
    order: 1,
    '@media': {
      'screen and (min-width: 768px)': {
        marginTop: 0,
        gridArea: '1 / 21 / 2 / 22',
      }
    }
  }),
  title: style({
    marginTop: vars.space.medium,
    order: 3,
    '@media': {
      'screen and (min-width: 768px)': {
        marginTop: 0,
        gridArea: '2 / 8 / 3 / 21',
      }
    }
  }),
  description: style({
    order: 4,
    overflowY: 'auto',
    '@media': {
      'screen and (min-width: 768px)': {
        gridArea: '3 / 8 / 12 / 22',
      }
    }
  }),
  link: style({
    order: 5,
    '@media': {
      'screen and (min-width: 768px)': {
        gridArea: '12 / 1 / 13 /22',
      }
    }

  }),
  media: style({
    position: 'relative',
    order: 2,
    width: '100%',
    '@media': {
      'screen and (min-width: 768px)': {
        gridArea: '2/ 1 / 12 / 8',
      }
    }
  }),
  categories: style({
    display: 'inline-flex',
    listStyle: `disc inside`,
    paddingLeft: 0,
    order: 6,
    '@media': {
      'screen and (min-width: 768px)': {
        gridArea: '13 / 1 / 14 /22',
      }
    }
  }),
  category: style({
    selectors: {
      '&:not(:first-of-type)': {
        marginLeft: vars.space.small
      }
    }
  })
}
export const modalRecipie = VEX.recipe({
  base: {
    backgroundColor: `rgba(${hexToRGB("#747678")}, .8)`,
    border: 'none',
    borderRadius: '.5rem',
    color: vars.grayScale[0],
    display: 'grid',
    fontWeight: vars.fontWeight.normal,
    fontSize: vars.fontSizes.regular,
    lineHeight: vars.lineHeights.large,
    textAlign: 'left',
    boxSizing: 'border-box',
    maxHeight: 'clamp(32.36rem, 95vh ,37.082rem)',
    padding: vars.space.large + vars.space.medium,
    position: 'relative',
    wordBreak: 'break-all',
    width: 'clamp(17.5rem, 100%, 60rem)',
    '@media': {
      'screen and (min-width: 768px)': {
        gap: '0 1rem',
        gridTemplate: 'repeat(13, auto)/repeat(21, 1fr)',
        marginLeft: vars.space.vw,
        marginRight: vars.space.vw
      }
    }
  },
  variants: {
    size: {
      'small': {
        height: 'calc(clamp(20rem, 100%, 60rem) * (13 / 21))',
        width: 'clamp(20rem, 100%, 60rem)',
      },
      'medium': {
        width: 'clamp(20rem, 100%, 60rem)',
        height: 'calc(clamp(20rem, 100%, 60rem) * (13 / 21))',
      }
    }
  }


})
export type modalVariants = VEX.RecipeVariants<typeof modalRecipie>;

