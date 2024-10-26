'use client';

import React from 'react';
import { WrapperStyle } from './Wrapper.css';
import useBreakpoint from 'use-breakpoint';
import { Breakpoints } from '@/styles/variables';

type props = {
  children: React.ReactNode;
};

export default function Wrapper(props: props) {
  const { breakpoint } = useBreakpoint(Breakpoints);

  if (!breakpoint) {
    return null;
  }

  return <div className={WrapperStyle()}>{props.children}</div>;
}
