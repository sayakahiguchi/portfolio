import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import * as VEX from "@vanilla-extract/recipes";
import { vars } from '@/styles/vars/var.css';

const IconStyle = ({
  item: style({
    fontFamily: "'object-fit: cover', sans-serif"
  })
})
export default IconStyle

globalStyle(`${IconStyle} > svg`, {
  fill: 'none'
})

export const iconRecipie = VEX.recipe({
  base: {
    background: 'transparent',
    border: 'none',
    padding: 'none',
    position: 'relative',
    height: 'max-content',
    selectors: {
      '&::before': {
        content: '',
        float: 'left',
      },
      '&::after': {
        content: '',
        display: 'block',
        clear: 'both'
      },
    }
  },
  variants: {
    display: {
      inline: {
        display: 'inline-block'
      },
      block: {
        display: 'block'
      }
    },
    aspectRatio: {
      square: {
        selectors: {
          '&::before': {
            paddingTop: '100%'
          },
        }
      },
      '3/4': {
        selectors: {
          '&::before': {
            paddingTop: 'calc(( 3 / 4 ) * 100%)'
          }
        }
      },
      '9/16': {
        selectors: {
          '&::before': {
            paddingTop: 'calc(( 9 / 16 ) * 100%)'
          }
        }
      }
    },
    rounded: {
      true: {
        borderRadius: '999px',
        overflow: 'hidden',
      }
    },
    size: {
      small: {
        width: [`calc((${vars.fontSizes.small} * ${vars.lineHeights.medium}) * 2)`]
      },
      regular: {
        width: [`calc((${vars.fontSizes.regular} * ${vars.lineHeights.medium}) * 2)`]
      },
      medium: {
        width: [`calc((${vars.fontSizes.medium} * ${vars.lineHeights.medium}) * 2)`]
      },
      large: {
        width: [`calc((${vars.fontSizes.large} * ${vars.lineHeights.medium}) * 2)`]
      },
      xlarge: {
        width: [`calc((${vars.fontSizes.xlarge} * ${vars.lineHeights.medium}) * 2)`]
      }
    }
  },
  defaultVariants: {
    aspectRatio: 'square',
    display: 'block',
    size: 'small'
  }
})
export type iconVariants = VEX.RecipeVariants<typeof iconRecipie>;
