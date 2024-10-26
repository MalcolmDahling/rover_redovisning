import { MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const SocialsContainerStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,

    '@media': {
      [MediaBreakpoints.mobile]: {
        flexDirection: 'column',
      },
    },
  },
});
