import { Colors } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const HamburgerContainerStyle = recipe({
  base: {
    position: 'fixed',
    top: 25,
    right: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    zIndex: 1,

    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
});

export const HamburgerLineStyle = recipe({
  base: {
    position: 'relative',
    width: 50,
    height: 5,
    borderRadius: 100,

    transition: 'all 250ms',
    transformOrigin: 'center',
  },

  variants: {
    color: {
      white: {
        backgroundColor: Colors.white,
        boxShadow: '0 0 6px black',
      },
      black: {
        backgroundColor: Colors.black,
      },
    },

    rotate: {
      right: {
        transform: 'translateY(15px) rotate(45deg)',
      },
      left: {
        transform: 'translateY(-15px) rotate(-45deg)',
      },
    },

    show: {
      false: {
        opacity: 0,
      },
    },
  },
});
