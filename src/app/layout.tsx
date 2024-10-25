'use client';

import '@/styles/global.css';
import { RecoilRoot } from 'recoil';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <html lang="en">
        <head>
          <title>Rovér Redovisning</title>
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon_16x16.png"
            sizes="16x16"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon_32x32.png"
            sizes="32x32"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon_48x48.png"
            sizes="48x48"
          ></link>
        </head>

        <body>{children}</body>
      </html>
    </RecoilRoot>
  );
}
