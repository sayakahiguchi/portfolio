import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/vars/var.css'

const profileStyles = ({
  container: style({
    alignItems: 'center',
    display: 'grid',
    gap: `0 ${vars.space.small}`,
    gridTemplate: 'repeat(3, auto) / auto 1fr',
    gridTemplateAreas: "'icon title''description description''button button'",
    justifyContent: 'start',
    '@media': {
      'screen and (min-width: 768px)': {
        alignItems: 'start',
        gridTemplateAreas: "'icon title''icon description''. button'",
      }
    }
  }),
  title: style({
    gridArea: 'title',
    marginTop: 0
  }),
  description: style({
    gridArea: 'description'
  }),
  icon: style({
    gridArea: 'icon'
  }),
  button: style({
    gridArea: 'button'
  })
})

export default profileStyles