'use client';

import { useRecoilState } from 'recoil';
import { HamburgerContainerStyle, HamburgerLineStyle } from './Hamburger.css';
import { MenuModalToggleAtom } from '@/atoms/MenuModalToggleAtom';

export default function Hamburger() {
  const [menuModalToggleAtom, setMenuModalToggleAtom] = useRecoilState(MenuModalToggleAtom);

  return (
    <button
      className={HamburgerContainerStyle()}
      onClick={() => setMenuModalToggleAtom((prev) => !prev)}
    >
      <div className={HamburgerLineStyle({ color: menuModalToggleAtom ? 'black' : 'white', rotate: menuModalToggleAtom ? 'right' : undefined })}></div>
      <div className={HamburgerLineStyle({ color: menuModalToggleAtom ? 'black' : 'white', show: menuModalToggleAtom ? false : true })}></div>
      <div className={HamburgerLineStyle({ color: menuModalToggleAtom ? 'black' : 'white', rotate: menuModalToggleAtom ? 'left' : undefined })}></div>
    </button>
  );
}
