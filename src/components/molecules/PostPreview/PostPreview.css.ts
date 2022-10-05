import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const postPreview = {
  wrapper: style({
    alignContent: 'start',
    display: 'grid',
    padding: [vars.space.small + vars.space.regular],
    gap: [`0 ${vars.space.small}`],
    gridTemplate: 'repeat(2, auto) / 1fr 2fr',
    gridTemplateAreas: "'media title''media date'",
    selectors: {
      '&:first-child': {
        gap: [`${vars.space.small} 0`],
        gridTemplate: 'repeat(4, auto) / 1fr',
        gridTemplateAreas: "'media''title''date''excerpt'",
      }
    },
    '@media': {
      'screen and (min-width: 1024px)': {
        gridArea: 'auto / span 16',
        gridTemplate: ' repeat(3, auto) / 30.2% 69.8%',
        gridTemplateAreas: "'media title''media date''media excerpt'",
        padding: vars.space.medium,
        selectors: {
          '&:first-child': {
            gap: 0,
            gridArea: '1 / 1 / 2 / 21',
            gridTemplate: 'none',
            gridTemplateAreas: "'media''title''date''excerpt'",
          },
          '&:not(:first-child):nth-child(-n + 2)': {
            gridArea: 'auto / span 13',
            gridTemplate: 'none',
            gridTemplateAreas: "'media''title''date''excerpt'",
          },
        },
      }
    },

  }),
  title: style({
    fontSize: vars.fontSizes.medium,
    gridArea: 'title',
    marginTop: 0,
    marginBottom: 0,
    '@media': {
      'screen and (min-width: 1024px)': {
        marginTop: vars.space.regular
      }
    }
  }),
  date: style({
    gridArea: 'date',
    marginBottom: 0,
    marginTop: 0,
    '@media': {
      'screen and (min-width: 1024px)': {
        marginTop: vars.space.small
      }
    }
  }),
  excerpt: style({
    display: 'none',
    gridArea: 'excerpt',
    marginTop: 0,
    marginBottom: 0,
    '@media': {
      'screen and (min-width: 1024px)': {
        display: 'block',
        marginTop: vars.space.small
      }
    }
  }),
  media: style({
    alignSelf: 'center',
    gridArea: 'media'
  })
}