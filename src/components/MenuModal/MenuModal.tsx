'use client';

import { useRecoilState } from 'recoil';
import { MenuModalContainerStyle } from './MenuModal.css';
import { MenuModalToggleAtom } from '@/atoms/MenuModalToggleAtom';
import MenuModalItem from './MenuModalItem/MenuModalItem';
import useBreakpoint from 'use-breakpoint';
import { Breakpoints } from '@/styles/variables';
import { useEffect } from 'react';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';
import { StoryblokType } from '@/types/storyblok';

export default function MenuModal(props: { slides: StoryblokType['slides'] }) {
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
      {props.slides.map((item) => (
        <MenuModalItem
          key={item.menu_title}
          text={`• ${item.menu_title}`}
          onClick={() => handleClick(item.order)}
        ></MenuModalItem>
      ))}
    </div>
  );
}
