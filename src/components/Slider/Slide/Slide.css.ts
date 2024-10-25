import { MediaBreakpoints } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const SlideContainerStyle = recipe({
  base: {
    position: 'relative',
    width: '100vw',
    flexShrink: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',
  },
});

export const SlideInnerContainerStyle = recipe({
  base: {
    maxWidth: 1200,
    width: '100vw',
    padding: 10,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SlideFlexContainerStyle = recipe({
  base: {
    display: 'flex',
    gap: 20,

    '@media': {
      [MediaBreakpoints.desktop]: {
        justifyContent: 'space-between',
        alignItems: 'center',
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

  variants: {
    blurBackgroundImage: {
      true: {
        filter: 'blur(12px)',
      },
    },
  },
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
        flexBasis: '50%',
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
