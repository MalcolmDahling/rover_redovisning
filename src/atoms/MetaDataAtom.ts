import { StoryblokType } from '@/types/storyblok';
import { atom } from 'jotai';

export const MetaDataAtom = atom<StoryblokType['meta_data']>({
  title: '',
  description: '',
  keywords: '',

  og_image: {
    filename: '',
  },

  canonical_url: '',
  apple_touch_icon: {
    filename: '',
  },
});
