import { style, styleVariants } from '@vanilla-extract/css';
import * as VEX from "@vanilla-extract/recipes";
import { vars } from '@/styles/vars/var.css';

const buttonStyle = {
  container: style({
    paddingTop: '1rem',
    width: 'max-content',
    selectors: {
      '&:not(:first-of-type)': {
        marginLeft: '.5rem',
      }
    }
  }),
  link: style({
    selectors: {
      '&::before': {
        content: '',
        left: 0,
        height: '100%',
        position: 'absolute',
        top: 0,
        width: '100%'
      }
    }
  })
};
export default buttonStyle

export const buttonRecipie = VEX.recipe({
  base: {
    alignItems: 'center',
    border: 'none',
    borderRadius: '.25rem',
    display: "inline-flex",
    fontSize: vars.fontSizes.regular,
    fontWeight: 700,
    justifyContent: 'center',
    lineHeight: vars.lineHeights.medium,
    paddingRight: vars.space.small,
    paddingLeft: vars.space.small,
    position: 'relative',
    transition: 'box-shadow 300ms ease-in-out',
    ':hover': {
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    },
  },
  variants: {
    display: {
      inline: {
        minWidth: '6rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
      },
      block: {
        minWidth: '8rem',
        paddingTop: vars.space.regular,
        paddingBottom: vars.space.regular,
      }
    },
    color: {
      accent: {
        backgroundColor: vars.colors.accent01,
        color: '#fefefe'
      },
      base: {
        backgroundColor: vars.colors.background,
        color: vars.colors.text
      },
      revert: {
        backgroundColor: vars.colors.text,
        color: vars.colors.background
      }
    },
    rounded: {
      true: {
        borderRadius: 999
      }
    },
    float: {
      true: {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
      }
    }
  },
  defaultVariants: {
    display: 'block',
    color: 'accent',
    rounded: false,
    float: false
  }

})
export type buttonVariants = VEX.RecipeVariants<typeof buttonRecipie>;

