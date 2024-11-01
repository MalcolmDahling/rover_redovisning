import { Colors } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const HeaderStyle = recipe({
  base: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    boxSizing: 'border-box',

    zIndex: 1,
  },
});

export const HeaderContainerStyle = recipe({
  base: {
    width: '100%',
    maxWidth: 1200,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottom: `1px solid ${Colors.white}`,
  },
});
