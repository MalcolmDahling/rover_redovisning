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
    gap: 20,

    userSelect: 'text',

    selectors: {
      'p &': {
        margin: 0,
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
