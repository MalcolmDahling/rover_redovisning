import Footer from '@/components/Footer/Footer';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import MenuModal from '@/components/MenuModal/MenuModal';
import Slider from '@/components/Slider/Slider';
import Wrapper from '@/components/Wrapper/Wrapper';
import { StoryblokType } from '@/types/storyblok';

export const revalidate = 60;

export default async function Index() {
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/storyblok' : `${process.env.URL}/api/storyblok`;
  const res = await fetch(url);
  const data: StoryblokType = await res.json();

  // function logFilenames(obj: any): void {
  //   if (Array.isArray(obj)) {
  //     obj.forEach(logFilenames);
  //   } else if (obj && typeof obj === 'object') {
  //     for (const key in obj) {
  //       if (key === 'filename' && typeof obj[key] === 'string') {
  //         console.log(obj[key]);
  //       } else {
  //         logFilenames(obj[key]);
  //       }
  //     }
  //   }
  // }

  //logFilenames(data);

  return (
    <Wrapper>
      <Header
        meta_data={data.meta_data}
        slides={data.slides}
        logo={data.logo}
      ></Header>
      <Main>
        <Slider slides={data.slides}></Slider>
      </Main>
      <MenuModal slides={data.slides}></MenuModal>
      <Hamburger></Hamburger>
      <Footer
        footer={data.footer}
        contact_information={data.contact_information}
      ></Footer>
    </Wrapper>
  );
}
