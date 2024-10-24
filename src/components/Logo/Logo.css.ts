import { recipe } from '@vanilla-extract/recipes';

export const LogoStyle = recipe({
  base: {},

  variants: {
    media: {
      desktop: {
        width: 68,
        height: 68,
      },
      mobile: {
        width: 56,
        height: 56,
      },
    },
  },
});
