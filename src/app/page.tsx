import Footer from '@/components/Footer/Footer';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import MenuModal from '@/components/MenuModal/MenuModal';
import Slider from '@/components/Slider/Slider';
import Wrapper from '@/components/Wrapper/Wrapper';
import { StoryblokType } from '@/types/storyblok';
import Head from 'next/head';

export const revalidate = 60;

export default async function Index() {
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/storyblok' : `${process.env.URL}/api/storyblok`;
  const res = await fetch(url);
  const data: StoryblokType = await res.json();

  return (
    <>
      <Head>
        <meta
          name="author"
          content="Malcolm Dahling and Jonas Sahlström"
        ></meta>
        <title>{data.meta_data.title}</title>
        <meta
          name="description"
          content={data.meta_data.description}
        ></meta>
        <meta
          name="keywords"
          content={data.meta_data.keywords}
        ></meta>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta
          name="theme-color"
          content="#ffffff"
        ></meta>
        <meta
          name="robots"
          content="index, follow"
        ></meta>

        {data.meta_data.canonical_url && (
          <link
            rel="canonical"
            href={data.meta_data.canonical_url}
          ></link>
        )}

        <link
          rel="preconnect"
          href="https://api.storyblok.com/v2/cdn/"
        ></link>

        <meta
          property="og:title"
          content={data.meta_data.title}
        ></meta>
        <meta
          property="og:description"
          content={data.meta_data.description}
        ></meta>
        <meta
          property="og:image"
          content={data.meta_data.canonical_url + '/images/og_image.webp'}
        ></meta>
        <meta
          property="og:image:width"
          content="1200"
        ></meta>
        <meta
          property="og:image:height"
          content="630"
        ></meta>
        <meta
          property="og:url"
          content={data.meta_data.canonical_url}
        ></meta>
        <meta
          property="og:type"
          content="website"
        ></meta>
        <meta
          property="og:locale"
          content="sv_SE"
        ></meta>

        <meta
          name="twitter:card"
          content="summary_large_image"
        ></meta>
        <meta
          name="twitter:title"
          content={data.meta_data.title}
        ></meta>
        <meta
          name="twitter:description"
          content={data.meta_data.description}
        ></meta>
        <meta
          name="twitter:image"
          content={data.meta_data.canonical_url + '/images/og_image.webp'}
        ></meta>
        <meta
          name="twitter:text:title"
          content={data.meta_data.title}
        ></meta>

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
        ></meta>
        <meta
          name="referrer"
          content="no-referrer"
        ></meta>
        <meta
          name="mobile-web-app-capable"
          content="yes"
        ></meta>
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        ></meta>
        <meta
          name="apple-mobile-web-app-title"
          content={data.meta_data.title}
        ></meta>

        <link
          rel="apple-touch-icon"
          href={data.meta_data.canonical_url + '/images/apple_touch_icon.png'}
        ></link>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        ></meta>

        <meta
          name="color-scheme"
          content="light"
        ></meta>

        <link
          rel="icon"
          type="image/svg+xml"
          href={data.favicon.svg_favicon.filename}
          sizes="any"
        />
        <link
          rel="icon"
          type="image/png"
          href={data.favicon.favicon_16x16.filename}
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href={data.favicon.favicon_32x32.filename}
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href={data.favicon.favicon_48x48.filename}
          sizes="48x48"
        ></link>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: data.meta_data.title,
            description: data.meta_data.description,
            url: data.meta_data.canonical_url,
          })}
        </script>
      </Head>

      <Wrapper>
        <Header
          website_name={data.website_name}
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
    </>
  );
}
