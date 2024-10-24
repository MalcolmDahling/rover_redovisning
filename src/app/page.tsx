'use client';

import Footer from '@/components/Footer/Footer';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import MenuModal from '@/components/MenuModal/MenuModal';
import Slider from '@/components/Slider/Slider';
import Wrapper from '@/components/Wrapper/Wrapper';
import { Breakpoints } from '@/styles/variables';
import useBreakpoint from 'use-breakpoint';

export default function Index() {
  const { breakpoint } = useBreakpoint(Breakpoints);

  if (!breakpoint) {
    return null;
  }

  return (
    <Wrapper>
      <Header></Header>
      <Main>
        <Slider></Slider>
      </Main>

      <MenuModal></MenuModal>
      {breakpoint !== 'desktop' && <Hamburger></Hamburger>}

      <Footer></Footer>
    </Wrapper>
  );
}
