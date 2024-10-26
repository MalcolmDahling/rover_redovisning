import { atom } from 'recoil';

export const MenuAtom = atom<'home' | 'company' | 'services' | 'references' | 'contact'>({
  key: 'MenuAtom',
  default: 'home',
});
