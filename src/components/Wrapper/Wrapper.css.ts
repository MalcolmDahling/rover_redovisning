import { recipe } from '@vanilla-extract/recipes';

export const WrapperStyle = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    minHeight: '100vh',

    display: 'flex',
    flexDirection: 'column',
  },
});
