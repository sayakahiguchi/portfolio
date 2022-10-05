import { style, styleVariants } from '@vanilla-extract/css';
import * as VEX from "@vanilla-extract/recipes";
import { vars } from '@/styles/vars/var.css';

export const gridItemRecipie = VEX.recipe({
  base: {
    width: 'fit-content'
  },
  variants: {
    alignSelf: {
      baseline: {
        alignSelf: 'baseline'
      }
    },
    basis: {
      2: {
        flexBasis: '50%'
      },
      3: {
        flexBasis: 'calc(100% / 3)'
      },
      100: {
        flexBasis: '100%'
      }
    },
    shrink: {
      0: {
        flexShrink: 0
      }
    },
    grow: {
      1: {
        flexGrow: 1
      }
    },
    gridColumn: {
      '1/2': {
        '@media': {
          'screen and (min-width: 768px)': {
            gridColumn: '1/2'
          }
        }
      },
      '2/3': {
        '@media': {
          'screen and (min-width: 768px)': {
            gridColumn: '2/3'
          }
        }
      },
    },
    gridRow: {
      '1/2': {
        gridRow: '1 / 2'
      },
      '1/4': {
        gridRow: '1/2',
        '@media': {
          'screen and (min-width: 768px)': {
            gridRow: '1/4'
          }
        }
      },
    },
    gap: {
      'x-m': {
        paddingLeft: vars.space.medium
      }
    },
    order: {
      1: {
        order: 1
      },
      2: {
        order: 2
      },
      3: {
        order: 3
      },
      4: {
        order: 4
      },
      5: {
        order: 5
      }
    }
  }
})
export type gridItemVariants = VEX.RecipeVariants<typeof gridItemRecipie>;
