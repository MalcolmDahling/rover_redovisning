import { StoryblokType } from '@/types/storyblok';
import { atom } from 'jotai';

export const MetaDataAtom = atom<StoryblokType['meta_data']>({
  title: '',
  description: '',
  keywords: '',

  og_title: '',
  og_description: '',
  og_url: '',
  og_type: '',
  og_image: {
    filename: '',
  },

  canonical_url: '',
  apple_touch_icon: {
    filename: '',
  },
  apple_mobile_web_app_title: '',

  twitter_title: '',
  twitter_description: '',
  twitter_card: '',
  twitter_image: {
    filename: '',
  },
});
