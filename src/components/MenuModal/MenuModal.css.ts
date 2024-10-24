import { recipe } from '@vanilla-extract/recipes';

export const MenuModalContainerStyle = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    padding: 20,
    paddingTop: 100,
    zIndex: 1,

    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    backgroundColor: 'white',
    transition: 'opacity 250ms',
  },

  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
  },
});
