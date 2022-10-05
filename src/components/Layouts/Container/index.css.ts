import { style, globalStyle, styleVariants } from '@vanilla-extract/css';
import * as VEX from "@vanilla-extract/recipes";
import { vars } from '@/styles/vars/var.css';

export const containerStyle = ({
  title: style({
    fontWeight: '700'
  })
})

export const containerRecipie = VEX.recipe({
  variants: {
    marginMediumVw: {
      x: {
        paddingLeft: '30.2vw',
        paddingRight: '30.2vw'
      },
      y: {
        paddingBottom: '30.2vw',
        paddingTop: '30.2vw'
      },
      left: {
        '@media': {
          'screen and (min-width: 1024px)': {
            margin: 'auto 0 auto 30.2vw',
          }
        },
      },
      right: {
        paddingRight: '30.2vw'
      }
    },
  },
});
export type containerVariants = VEX.RecipeVariants<typeof containerRecipie>;
