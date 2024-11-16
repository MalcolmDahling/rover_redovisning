'use client';

import { MetaDataAtom } from '@/atoms/MetaDataAtom';
import { StoryblokType } from '@/types/storyblok';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export default function SetMetaData(props: StoryblokType['metaData']) {
  const [metaDataAtom, setMetaDataAtom] = useAtom(MetaDataAtom);

  useEffect(() => {
    setMetaDataAtom(props);
  }, []);

  return <></>;
}
