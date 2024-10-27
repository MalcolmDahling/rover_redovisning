import { Colors } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const SocialsItemLinkStyle = recipe({
  base: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    gap: 10,

    color: 'transparent',
    transition: 'all 250ms',

    ':hover': {
      color: Colors.white,
    },
  },
});

export const SocialsItemImageStyle = recipe({
  base: {
    width: 36,
  },
});
