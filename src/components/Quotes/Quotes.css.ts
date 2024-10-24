import { MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const QuotesContainerStyle = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 20,

    '@media': {
      [MediaBreakpoints.tablet]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [MediaBreakpoints.mobile]: {
        gridTemplateColumns: '1fr',
      },
    },
  },
});
