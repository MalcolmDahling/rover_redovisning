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
    height: '100%',
    minWidth: 1920,
    zIndex: -1,
  },
});

export const SlideInnerContainerStyle = recipe({
  base: {
    maxWidth: 1200,
    width: '100vw',
    padding: 10,
    paddingBottom: 30,

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

globalStyle(`${SlideInnerContainerStyle()}  *`, {
  textShadow: '2px 2px 2px black',
});

export const SlideHeadingContainerStyle = recipe({
  base: {
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
});

export const SlideTextContainerStyle = recipe({
  base: {
    userSelect: 'text',

    '@media': {
      [MediaBreakpoints.desktop]: {
        textAlign: 'justify',
      },
      [MediaBreakpoints.tablet]: {
        textAlign: 'justify',
      },
      [MediaBreakpoints.mobile]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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

globalStyle(`${SlideTextContainerStyle()} > *`, {
  margin: 10,
});

export const SlideImageStyle = recipe({
  base: {
    '@media': {
      [MediaBreakpoints.desktop]: {
        paddingLeft: 10,
        float: 'right',
      },
      [MediaBreakpoints.tablet]: {
        paddingLeft: 10,
        float: 'right',
      },
      [MediaBreakpoints.mobile]: {
        alignSelf: 'center',
        maxWidth: 275,
      },
    },
  },
});

export const SlideLinkStyle = recipe({
  base: {
    textDecorationLine: 'none',
    borderBottom: '2px solid transparent',

    transition: 'all 250ms',
  },
});
