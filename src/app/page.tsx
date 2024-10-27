'use server';

import Footer from '@/components/Footer/Footer';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import MenuModal from '@/components/MenuModal/MenuModal';
import Slider from '@/components/Slider/Slider';
import Wrapper from '@/components/Wrapper/Wrapper';

export default async function Index() {
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/storyblok' : `${process.env.URL}/api/storyblok`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  const data = await res.json();
  console.log(data);

  return (
    <Wrapper>
      <Header></Header>
      <Main>
        <Slider></Slider>
      </Main>
      <MenuModal></MenuModal>
      <Hamburger></Hamburger>
      <Footer></Footer>
    </Wrapper>
  );
}
