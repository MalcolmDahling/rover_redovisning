import { Colors, FontSize, MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const HeadingStyle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    letterSpacing: 5,

    '@media': {
      [MediaBreakpoints.mobile]: {
        letterSpacing: 1,
      },
    },
  },

  variants: {
    type: {
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
    },
    color: {
      black: {
        color: Colors.black,
      },
      white: {
        color: Colors.white,
      },
    },
    fontSize: {
      small: {
        fontSize: FontSize.small,
      },
      medium: {
        fontSize: FontSize.medium,
      },
      large: {
        fontSize: FontSize.large,
      },
    },
    bold: {
      true: {
        fontWeight: 'bold',
      },
      false: {
        fontWeight: 'normal',
      },
    },
  },
});

export const HeadingMultiLineStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});
