'use client';

import { HamburgerContainerStyle, HamburgerLineStyle } from './Hamburger.css';
import { MenuModalToggleAtom } from '@/atoms/MenuModalToggleAtom';
import useBreakpoint from 'use-breakpoint';
import { Breakpoints } from '@/styles/variables';
import { useAtom } from 'jotai';

export default function Hamburger() {
  const { breakpoint } = useBreakpoint(Breakpoints);
  const [menuModalToggleAtom, setMenuModalToggleAtom] = useAtom(MenuModalToggleAtom);

  if (breakpoint !== 'desktop') {
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
  } else {
    return null;
  }
}
