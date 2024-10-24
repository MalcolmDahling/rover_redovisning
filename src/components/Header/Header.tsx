'use client';

import useBreakpoint from 'use-breakpoint';
import Heading from '../Heading/Heading';
import { HeaderContainerStyle, HeaderStyle } from './Header.css';
import MenuDesktop from './MenuDesktop/MenuDesktop';
import { Breakpoints } from '@/styles/variables';
import Logo from '../Logo/Logo';

export default function Header() {
  const { breakpoint } = useBreakpoint(Breakpoints);

  if (!breakpoint) {
    return null;
  }

  return (
    <header className={HeaderStyle()}>
      <div className={HeaderContainerStyle()}>
        <Heading
          type="h1"
          text="ROVÉR"
          text2="REDOVISNING"
          color="white"
          fontSize={breakpoint === 'mobile' ? 'medium' : 'large'}
          bold={true}
        >
          <Logo></Logo>
        </Heading>
        {breakpoint === 'desktop' && <MenuDesktop></MenuDesktop>}
      </div>
    </header>
  );
}
