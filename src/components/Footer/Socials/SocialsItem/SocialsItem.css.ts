import { Colors } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const SocialsItemContainerStyle = recipe({
  base: {
    width: 246,
    height: 68,
    padding: 10,

    display: 'flex',
    alignItems: 'center',
    gap: 10,

    boxSizing: 'border-box',
    backgroundColor: Colors.white,
    borderRadius: 15,
    border: '2px solid transparent',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'all 250ms',
    boxShadow: `4px 4px 4px rgba(0,0,0,0.25)`,

    ':hover': {
      border: `2px solid ${Colors.black}`,
    },
  },
});

export const SocialsItemImageStyle = recipe({
  base: {
    width: 48,
  },
});
