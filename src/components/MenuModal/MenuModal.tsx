'use client';

import { useRecoilState } from 'recoil';
import { MenuModalContainerStyle } from './MenuModal.css';
import { MenuModalToggleAtom } from '@/atoms/MenuModalToggleAtom';
import MenuModalItem from './MenuModalItem/MenuModalItem';
import useBreakpoint from 'use-breakpoint';
import { Breakpoints } from '@/styles/variables';
import { useEffect } from 'react';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';

export default function MenuModal() {
  const [menuModalToggleAtom, setMenuModalToggleAtom] = useRecoilState(MenuModalToggleAtom);
  const [moveToSlideAtom, setMoveToSlideAtom] = useRecoilState(MoveToSlideAtom);

  const { breakpoint } = useBreakpoint(Breakpoints);

  useEffect(() => {
    if (breakpoint !== 'mobile') {
      setMenuModalToggleAtom(false);
    }
  }, [breakpoint]);

  function handleClick(index: number) {
    setMoveToSlideAtom({ index: index, date: Date.now() });
    setMenuModalToggleAtom(false);
  }

  return (
    <div className={MenuModalContainerStyle({ show: menuModalToggleAtom })}>
      <MenuModalItem
        text="• HEM"
        onClick={() => handleClick(0)}
      ></MenuModalItem>
      <MenuModalItem
        text="• VÅRA TJÄNSTER/FÖRETAGET"
        onClick={() => handleClick(1)}
      ></MenuModalItem>
      <MenuModalItem
        text="• REFERENSER"
        onClick={() => handleClick(2)}
      ></MenuModalItem>
      <MenuModalItem
        text="• KONTAKT"
        onClick={() => handleClick(3)}
      ></MenuModalItem>
    </div>
  );
}
