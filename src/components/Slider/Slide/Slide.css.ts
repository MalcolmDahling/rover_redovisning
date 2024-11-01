import { MediaBreakpoints } from '@/styles/variables';
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
});

export const SlideFlexContainerStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
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
