import { atom } from 'recoil';

export const MoveToSlideAtom = atom<{ index: number; date: number }>({
  key: 'MoveToSlideAtom',
  default: {
    index: 0,
    date: Date.now(),
  },
});
