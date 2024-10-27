import { atom } from 'recoil';

export const MenuAtom = atom<string>({
  key: 'MenuAtom',
  default: 'HEM',
});
