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

export const SlideInnerContainerStyle = recipe({
  base: {
    maxWidth: 1200,
    width: '100vw',
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 20,
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
    justifyContent: 'flex-start',
    gap: 20,

    userSelect: 'text',

    '@media': {
      [MediaBreakpoints.desktop]: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },
      [MediaBreakpoints.tablet]: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      [MediaBreakpoints.mobile]: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    },
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

export const SlideTextContainerStyle = recipe({
  base: {
    userSelect: 'text',

    '@media': {
      [MediaBreakpoints.desktop]: {
        flexGrow: 1,
        flexBasis: '50%',
      },
    },
  },
});

export const SlideImageStyle = recipe({
  base: {
    width: '100%',

    '@media': {
      [MediaBreakpoints.desktop]: {
        flexBasis: '40%',
      },
      [MediaBreakpoints.tablet]: {
        maxWidth: 500,
      },
      [MediaBreakpoints.mobile]: {
        maxWidth: '100%',
      },
    },
  },
});
