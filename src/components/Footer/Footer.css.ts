import { Colors, MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const FooterStyle = recipe({
  base: {
    width: '100%',
    paddingBottom: 20,

    backgroundColor: Colors.green,
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
    gridTemplateColumns: 'repeat(3, 250px)',
    gap: 15,
    justifyContent: 'space-between',

    '@media': {
      [MediaBreakpoints.tablet]: {
        gap: 10,
      },
      [MediaBreakpoints.mobile]: {
        gridTemplateColumns: '1fr',
      },
    },
  },
});

export const FooterItemStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,

    '@media': {
      [MediaBreakpoints.mobile]: {
        display: 'block',
      },
    },
  },
});

export const FooterTaxContainerStyle = recipe({
  base: {
    margin: 'auto',
    maxWidth: 1200,
    padding: 10,
  },
});
