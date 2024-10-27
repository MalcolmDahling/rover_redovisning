'use client';

import useBreakpoint from 'use-breakpoint';
import { LogoStyle } from './Logo.css';
import { Breakpoints } from '@/styles/variables';
import { StoryblokType } from '@/types/storyblok';

export default function Logo(props: { logo: StoryblokType['logo'] }) {
  const { breakpoint } = useBreakpoint(Breakpoints);

  return (
    <img
      src={props.logo.image.filename}
      className={LogoStyle({ media: breakpoint === 'mobile' ? 'mobile' : 'desktop' })}
    ></img>
  );
}
