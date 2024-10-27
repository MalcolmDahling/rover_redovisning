import { Colors, FontSize } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const ParagraphStyle = recipe({
  base: {
    margin: 0,
  },

  variants: {
    color: {
      black: {
        color: Colors.black,
      },
      white: {
        color: Colors.white,
      },
    },
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    textShadow: {
      true: {
        textShadow: '2px 2px 2px rgba(0,0,0,0.75)',
      },
    },
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
    noMargin: {
      true: {
        margin: 0,
      },
    },
  },
});
