import { style, globalStyle, styleVariants } from '@vanilla-extract/css';
import * as VEX from "@vanilla-extract/recipes";
import { vars } from '@/styles/vars/var.css';

export const gridRecipie = VEX.recipe({
  base: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  variants: {
    display: {
      flex: {
        display: 'flex'
      },
      inline: {
        display: 'inline-flex'
      },
      grid: {
        display: 'grid'
      }
    },
    direction: {
      'row': {
        flexDirection: 'row'
      },
      'column': {
        flexDirection: 'column'
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center'
      },
      start: {
        justifyContent: 'flex-start'
      },
      end: {
        justifyContent: 'flex-end'
      },
      spaceAround: {
        justifyContent: 'space-around'
      },
      spaceBetween: {
        justifyContent: 'space-between'
      },
      spaceEvenly: {
        justifyContent: 'space-evenly'
      },

    },
    alignContent: {
      center: {
        alignContent: 'center'
      },
      start: {
        alignContent: 'flex-start'
      },
      end: {
        alignContent: 'flex-end'
      },
      spaceAround: {
        alignContent: 'space-around'
      },
      spaceBetween: {
        alignContent: 'space-between'
      },
      stretch: {
        alignContent: 'stretch'
      }
    },
    alignItems: {
      center: {
        alignItems: 'center'
      },
      start: {
        alignItems: 'flex-start'
      },
      end: {
        alignItems: 'flex-end'
      },
      stretch: {
        alignItems: 'stretch'
      },
      baseline: {
        alignItems: 'baseline'
      }
    },
    wrap: {
      'wrap': {
        flexWrap: 'wrap'
      },
      'nowrap': {
        flexWrap: 'nowrap'
      },
      'wrapReverse': {
        flexWrap: 'wrap-reverse'
      }
    },
    gridAutoFlow: {
      columnDence: {
        '@media': {
          'screen and (min-width: 768px)': {
            gridAutoFlow: 'column dense'
          }
        }
      }
    },
    gap: {
      'x-m': {
        gap: [`0 ${vars.space.medium}`]
      }
    },
    basis: {
      "1/2": {
        flexBasis: '50%'
      },
      "1/3": {
        flexBasis: 'calc(100% / 3)'
      },
      "1/4": {
        flexBasis: '25%'
      },
      "1/5": {
        flexBasis: '20%'
      },
      "100": {
        flexBasis: '100%'
      }
    },
  },
  defaultVariants: {
    display: 'flex',
  }

});
export type gridVariants = VEX.RecipeVariants<typeof gridRecipie>;
