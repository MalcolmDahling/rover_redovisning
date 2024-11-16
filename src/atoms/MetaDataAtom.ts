import { StoryblokType } from '@/types/storyblok';
import { atom } from 'jotai';

export const MetaDataAtom = atom<StoryblokType['meta_data']>({
  title: '',
  description: '',
  keywords: '',
  canonical_url: '',
});
