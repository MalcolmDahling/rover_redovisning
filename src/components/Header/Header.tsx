'use client';

import useBreakpoint from 'use-breakpoint';
import Heading from '../Heading/Heading';
import { HeaderContainerStyle, HeaderStyle } from './Header.css';
import MenuDesktop from './MenuDesktop/MenuDesktop';
import { Breakpoints } from '@/styles/variables';
import Logo from '../Logo/Logo';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';
import { StoryblokType } from '@/types/storyblok';
import { useAtom } from 'jotai';

export default function Header(props: { website_name: StoryblokType['website_name']; slides: StoryblokType['slides']; logo: StoryblokType['logo'] }) {
  const [moveToSlideAtom, setMoveToSlideAtom] = useAtom(MoveToSlideAtom);
  const { breakpoint } = useBreakpoint(Breakpoints);

  if (!breakpoint) {
    return null;
  }

  return (
    <header className={HeaderStyle()}>
      <div className={HeaderContainerStyle()}>
        <Heading
          type="h2"
          text={props.website_name.name}
          upperCase={true}
          multiLine={true}
          color="white"
          fontSize={breakpoint === 'mobile' ? 'medium' : 'large'}
          bold={true}
          onClick={() => setMoveToSlideAtom({ index: 0, date: Date.now() })}
          cursorPointer={true}
        >
          <Logo logo={props.logo}></Logo>
        </Heading>
        {breakpoint === 'desktop' && <MenuDesktop slides={props.slides}></MenuDesktop>}
      </div>
    </header>
  );
}
