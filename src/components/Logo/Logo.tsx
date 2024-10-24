'use client';

import useBreakpoint from 'use-breakpoint';
import { LogoStyle } from './Logo.css';
import { Breakpoints } from '@/styles/variables';

export default function Logo() {
  const { breakpoint } = useBreakpoint(Breakpoints);

  return (
    <img
      src="/images/logo_white.png"
      className={LogoStyle({ media: breakpoint === 'mobile' ? 'mobile' : 'desktop' })}
    ></img>
  );
}
