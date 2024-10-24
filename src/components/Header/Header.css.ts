import { Colors } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const HeaderStyle = recipe({
  base: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    boxSizing: 'border-box',

    zIndex: 1,

    backgroundColor: Colors.green,
    borderBottom: `2px solid ${Colors.darkGray}`,
  },
});

export const HeaderContainerStyle = recipe({
  base: {
    width: '100%',
    maxWidth: 1200,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
