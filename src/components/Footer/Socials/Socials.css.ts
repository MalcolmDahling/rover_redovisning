import { recipe } from '@vanilla-extract/recipes';

export const SocialsContainerStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});

export const SocialsBottomContainerStyle = recipe({
  base: {
    display: 'flex',
    gap: 10,
  },
});
