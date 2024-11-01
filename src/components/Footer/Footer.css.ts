import { Colors, FontSize, MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const FooterStyle = recipe({
  base: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
  },
});

export const FooterGridContainerStyle = recipe({
  base: {
    margin: 'auto',
    maxWidth: 1200,
    padding: 10,

    display: 'flex',
    gap: 15,
    justifyContent: 'space-between',

    borderTop: `1px solid ${Colors.white}`,

    '@media': {
      [MediaBreakpoints.tablet]: {},
      [MediaBreakpoints.mobile]: {
        flexDirection: 'column',
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

export const FooterAddressStyle = recipe({
  base: {
    color: 'white',
    fontStyle: 'normal',
    fontSize: FontSize.xs,
  },
});

export const FooterLinkStyle = recipe({
  base: {
    color: Colors.white,
    textDecorationColor: 'transparent',
    transition: 'all 250ms',

    ':hover': {
      textDecorationColor: Colors.white,
    },
  },
});
