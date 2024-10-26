import Footer from '@/components/Footer/Footer';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import MenuModal from '@/components/MenuModal/MenuModal';
import Slider from '@/components/Slider/Slider';
import Wrapper from '@/components/Wrapper/Wrapper';

export default async function Index() {
  console.log('Vercel URL:', process.env.VERCEL_URL);

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
