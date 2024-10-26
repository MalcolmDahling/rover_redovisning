import { MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const SocialsContainerStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});
