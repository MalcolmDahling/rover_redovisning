import { atom } from 'recoil';

export const MenuAtom = atom<'home' | 'company' | 'references' | 'contact'>({
  key: 'MenuAtom',
  default: 'home',
});
