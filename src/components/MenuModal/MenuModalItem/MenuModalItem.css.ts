import { Colors, FontSize } from '@/styles/variables';
import { recipe } from '@vanilla-extract/recipes';

export const MenuModalItemStyle = recipe({
  base: {
    width: 'fit-content',
    padding: 5,

    fontSize: FontSize.large,
    color: Colors.black,
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textAlign: 'start',
  },
});
