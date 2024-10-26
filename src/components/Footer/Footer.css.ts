import { Colors, MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const FooterStyle = recipe({
  base: {
    width: '100%',
    paddingBottom: 20,

    backgroundColor: Colors.green,
  },
});

export const FooterLineStyle = recipe({
  base: {
    borderTop: `2px solid ${Colors.darkGray}`,
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
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: 15,

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

export const FooterItemStyle = recipe({
  base: {
    flexBasis: '33%',

    display: 'flex',
    flexDirection: 'column',
    gap: 10,

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
