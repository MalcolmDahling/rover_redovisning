import { recipe } from '@vanilla-extract/recipes';

export const LoadingContainerStyle = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    transition: 'opacity 400ms',
  },

  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});
