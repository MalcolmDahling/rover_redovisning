import '@/styles/global.css';
import { StoryblokType } from '@/types/storyblok';
import React from 'react';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/storyblok' : `${process.env.URL}/api/storyblok`;
  const res = await fetch(url);
  const data: StoryblokType = await res.json();

  return (
    <html lang="sv">
      <head>
        <meta
          name="google-site-verification"
          content="FqJT5i-3mgzYbeR59gzAhdHjASLvUOK4LDiNizKWobc"
        />

        <meta
          name="facebook-domain-verification"
          content="14nfbcimjlq988o2n4z3hem2c2numv"
        />

        <meta
          name="author"
          content="Jonas Sahlström and Malcolm Dahling"
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
          property="og:site_name"
          content={data.meta_data.title}
        ></meta>
        <meta
          property="og:description"
          content={data.meta_data.description}
        ></meta>
        <meta
          property="og:image"
          content={data.meta_data.og_image.filename}
        ></meta>
        <meta
          property="og:image:alt"
          content="Rovér Redovisning"
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
          content={data.meta_data.og_image.filename}
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
          href={data.meta_data.apple_touch_icon.filename}
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
          href={data.favicon.favicon_svg.filename}
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

        {/*PRELOAD IMAGES*/}
        {data.slides.map((item, i) => (
          <React.Fragment key={item._uid + i}>
            {item.background_image.filename && (
              <link
                rel="preload"
                as="image"
                href={item.background_image.filename}
              ></link>
            )}
            {item.image.filename && (
              <link
                rel="preload"
                as="image"
                href={item.image.filename}
              ></link>
            )}
          </React.Fragment>
        ))}

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: data.meta_data.title,
            description: data.meta_data.description,
            url: data.meta_data.canonical_url,
          })}
        </script>
      </head>

      <body>{children}</body>
    </html>
  );
}
