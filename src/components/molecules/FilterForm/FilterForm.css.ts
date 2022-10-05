import { vars } from '@/styles/vars/var.css'
import { style } from '@vanilla-extract/css'

const FilterFormStyles = {
  container: style({
    display: 'inline-flex'
  }),
  input: style({
    cursor: 'pointer',
    padding: vars.space.small + vars.space.regular,
    selectors: {
      '&:not(:first-child)': {
        marginLeft: vars.space.small
      }
    }
  }),
  inputActive: style({
    background: vars.colors.accent01,
    borderRadius: '9999px',
    color: vars.colors.background,
    fontWeight: vars.fontWeight.bold
  })
}
export default FilterFormStyles