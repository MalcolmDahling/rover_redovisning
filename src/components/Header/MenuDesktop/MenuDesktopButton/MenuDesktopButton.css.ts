import { Colors, FontSize } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const MenuDesktopButtonStyle = recipe({
  base: {
    fontSize: FontSize.small,
    color: Colors.white,
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'opacity 250ms',

    ':hover': {
      opacity: 1,
    },

    ':focus': {
      opacity: 1,
    },
  },

  variants: {
    selected: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0.5,
      },
    },
  },
});
