import { recipe } from '@vanilla-extract/recipes';

export const BackgroundStyle = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,

    filter: 'blur(12px)',
    transition: 'all 400ms',
  },

  variants: {
    hueRotate: {
      home: {
        filter: 'blur(12px) hue-rotate(0deg)',
      },
      company: {
        filter: 'blur(12px) hue-rotate(10deg)',
      },
      references: {
        filter: 'blur(12px) hue-rotate(20deg)',
      },
      contact: {
        filter: 'blur(12px) hue-rotate(30deg)',
      },
    },
  },
});
