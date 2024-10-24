import { Colors, MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const FooterStyle = recipe({
  base: {
    width: '100%',

    backgroundColor: Colors.darkGray,
  },
});

export const FooterLineStyle = recipe({
  base: {
    borderTop: `2px solid ${Colors.lightGray}`,
  },
});

export const FooterGridContainerStyle = recipe({
  base: {
    margin: 'auto',
    maxWidth: 1200,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 2fr',
    gap: 15,

    '@media': {
      [MediaBreakpoints.mobile]: {
        gridTemplateColumns: '1fr',
      },
    },
  },
});

export const FooterItemStyle = recipe({
  base: {
    flexBasis: '33%',

    display: 'flex',
    alignItems: 'end',

    '@media': {
      [MediaBreakpoints.mobile]: {
        display: 'block',
      },
    },
  },

  variants: {
    borderLeft: {
      true: {
        // borderLeft: `2px solid ${Colors.white}`,
      },
    },
  },
});
