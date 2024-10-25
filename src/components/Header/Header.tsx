'use client';

import useBreakpoint from 'use-breakpoint';
import Heading from '../Heading/Heading';
import { HeaderContainerStyle, HeaderStyle } from './Header.css';
import MenuDesktop from './MenuDesktop/MenuDesktop';
import { Breakpoints } from '@/styles/variables';
import Logo from '../Logo/Logo';
import { useRecoilState } from 'recoil';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';

export default function Header() {
  const [moveToSlideAtom, setMoveToSlideAtom] = useRecoilState(MoveToSlideAtom);
  const { breakpoint } = useBreakpoint(Breakpoints);

  if (!breakpoint) {
    return null;
  }

  return (
    <header className={HeaderStyle()}>
      <div className={HeaderContainerStyle()}>
        <Heading
          type="h2"
          text="ROVÉR"
          text2="REDOVISNING"
          color="white"
          fontSize={breakpoint === 'mobile' ? 'medium' : 'large'}
          bold={true}
          onClick={() => setMoveToSlideAtom({ index: 0, date: Date.now() })}
          cursorPointer={true}
        >
          <Logo></Logo>
        </Heading>
        {breakpoint === 'desktop' && <MenuDesktop></MenuDesktop>}
      </div>
    </header>
  );
}
