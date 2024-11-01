'use client';

import { FaviconsAtom } from '@/atoms/FaviconsAtom';
import '@/styles/global.css';
import { useAtom } from 'jotai';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [faviconsAtom, setFaviconsAtom] = useAtom(FaviconsAtom);

  return (
    <html lang="en">
      <head>
        <title>Rovér Redovisning</title>
        <link
          rel="icon"
          type="image/png"
          href={faviconsAtom[0]}
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href={faviconsAtom[1]}
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href={faviconsAtom[2]}
          sizes="48x48"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
