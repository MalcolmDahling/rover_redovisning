import { recipe } from '@vanilla-extract/recipes';

export const SocialsContainerStyle = recipe({
  base: {
    margin: 'auto',
    maxWidth: 1200,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
    marginBottom: 10,
    overflow: 'hidden',
  },
});

export const SocialsItemStyle = recipe({
  base: {
    width: '100%',
    maxWidth: 340,
    height: 130,
  },
});
