import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars/var.css';

export const navItemStyles = style({
  padding: vars.space.small + vars.space.medium,
  position: 'relative',
  selectors: {
    '&:not(:first-of-type)': {
      marginLeft: vars.space.small
    }
  }
});