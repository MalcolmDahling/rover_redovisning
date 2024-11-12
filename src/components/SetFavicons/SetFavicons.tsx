'use client';

import { FaviconsAtom } from '@/atoms/FaviconsAtom';
import { StoryblokType } from '@/types/storyblok';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export default function SetFavicons(props: StoryblokType['favicon']) {
  const [faviconsAtom, setFaviconsAtom] = useAtom(FaviconsAtom);

  useEffect(() => {
    setFaviconsAtom([props.svg_favicon.filename, props.favicon_16x16.filename, props.favicon_32x32.filename, props.favicon_48x48.filename]);
  }, []);
  return <></>;
}
