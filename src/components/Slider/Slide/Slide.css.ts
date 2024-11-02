import { FontSize, MediaBreakpoints } from '@/styles/variables';
import { globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const SlideContainerStyle = recipe({
  base: {
    position: 'relative',
    width: '100vw',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',

    '@media': {
      [MediaBreakpoints.tablet]: {
        alignItems: 'flex-start',
      },
      [MediaBreakpoints.mobile]: {
        alignItems: 'flex-start',
      },
    },
  },
});

export const SlideInnerContainerStyle = recipe({
  base: {
    maxWidth: 1200,
    width: '100vw',
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 10,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    fontSize: {
      xs: {
        fontSize: FontSize.xs,
      },
      small: {
        fontSize: FontSize.small,
      },
      medium: { fontSize: FontSize.medium },
      large: {
        fontSize: FontSize.large,
      },
    },
  },
});

globalStyle(`${SlideInnerContainerStyle()} > *`, {
  textShadow: '2px 2px 2px black',
});

export const SlideFlexContainerStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 20,

    userSelect: 'text',
  },

  variants: {
    fontSize: {
      xs: {
        fontSize: FontSize.xs,
      },
      small: {
        fontSize: FontSize.small,
      },
      medium: { fontSize: FontSize.medium },
      large: {
        fontSize: FontSize.large,
      },
    },
  },
});

globalStyle(`${SlideFlexContainerStyle()} > *`, {
  margin: 0,

  textShadow: '2px 2px 2px black',
});

export const SlideBackgroundImageStyle = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: 'auto',
    minWidth: 1920,
    zIndex: -1,
  },
});
