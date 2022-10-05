import { style, styleVariants } from "@vanilla-extract/css";
import * as VEX from "@vanilla-extract/recipes";
import { vars } from '@/styles/vars/var.css';
import TagIcon from '@assets/Icon/tag.svg'
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
    left: '100%',
    padding: '1rem',
    position: 'absolute',
    top: 0,
    transform: 'translateX(-100%)'
  }),
  title: style({
    marginTop: vars.space.medium,
    order: 2,
    '@media': {
      'screen and (min-width: 768px)': {
        marginTop: 0,
        gridArea: '1 / 8 / 3 / 22',
      }
    }
  }),
  description: style({
    order: 3,
    overflowY: 'auto',
    '@media': {
      'screen and (min-width: 768px)': {
        gridArea: '3 / 8 / 13 / 22',
      }
    }
  }),
  media: style({
    position: 'relative',
    order: 1,
    width: '100%',
    '@media': {
      'screen and (min-width: 768px)': {
        gridArea: '1/ 1 / 13 / 8',
      }
    }
  }),
  categories: style({
    display: 'inline-flex',
    listStyle: `url("${TagIcon.src}") inside`,
    paddingLeft: 0,
    order: 4,
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
    color: vars.grayScale[0],
    display: 'grid',
    fontWeight: vars.fontWeight.normal,
    fontSize: vars.fontSizes.regular,
    lineHeight: vars.lineHeights.large,
    textAlign: 'left',
    border: 'none',
    borderRadius: '.5rem',
    boxSizing: 'border-box',
    padding: vars.space.large + vars.space.medium,
    position: 'relative',
    wordBreak: 'break-all',
    width: 'clamp(17.5rem, 100%, 60rem)',
    '@media': {
      'screen and (min-width: 768px)': {
        gap: '0 1rem',
        gridTemplate: 'repeat(13, 1fr)/repeat(21, 1fr)',
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

