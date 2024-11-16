'use client';

import { FaviconsAtom } from '@/atoms/FaviconsAtom';
import { MetaDataAtom } from '@/atoms/MetaDataAtom';
import '@/styles/global.css';
import { useAtom } from 'jotai';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [faviconsAtom, setFaviconsAtom] = useAtom(FaviconsAtom);
  const [metaDataAtom, setMetaDataAtom] = useAtom(MetaDataAtom);

  return (
    <html lang="sv">
      <head>
        <meta
          name="author"
          content="Malcolm Dahling and Jonas Sahlström"
        ></meta>
        <title>{metaDataAtom.title}</title>
        <meta
          name="description"
          content={metaDataAtom.description}
        ></meta>
        <meta
          name="keywords"
          content={metaDataAtom.keywords}
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

        {metaDataAtom.canonical_url && (
          <link
            rel="canonical"
            href={metaDataAtom.canonical_url}
          ></link>
        )}

        <link
          rel="preconnect"
          href="https://api.storyblok.com/v2/cdn/"
        ></link>

        <meta
          property="og:title"
          content={metaDataAtom.title}
        ></meta>
        <meta
          property="og:description"
          content={metaDataAtom.description}
        ></meta>
        <meta
          property="og:image"
          content={metaDataAtom.og_image.filename}
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
          content={metaDataAtom.canonical_url}
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
          content={metaDataAtom.title}
        ></meta>
        <meta
          name="twitter:description"
          content={metaDataAtom.description}
        ></meta>
        <meta
          name="twitter:image"
          content={metaDataAtom.og_image.filename}
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
          content={metaDataAtom.title}
        ></meta>
        {metaDataAtom.apple_touch_icon.filename && (
          <link
            rel="apple-touch-icon"
            href={metaDataAtom.apple_touch_icon.filename}
          ></link>
        )}
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
          href={faviconsAtom[0]}
          sizes="any"
        />
        <link
          rel="icon"
          type="image/png"
          href={faviconsAtom[1]}
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href={faviconsAtom[2]}
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href={faviconsAtom[3]}
          sizes="48x48"
        ></link>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: metaDataAtom.title,
            description: metaDataAtom.description,
            url: metaDataAtom.canonical_url,
          })}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
