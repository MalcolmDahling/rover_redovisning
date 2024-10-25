import { recipe } from '@vanilla-extract/recipes';

export const InstagramContainerStyle = recipe({
  base: {
    position: 'relative',
  },
});

export const InstagramInnerContainerStyle = recipe({
  base: {
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
