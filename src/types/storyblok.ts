import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

export type StoryblokType = {
  contact_information: ContactInformation;
  footer: Footer;
  logo: Logo;
  slides: Slide[];
  favicon: Favicon;
  meta_data: MetaData;
};

type ContactInformation = {
  _uid: string;
  email: string;
  address: string;
  zipcode: string;
  component: string;
  org_number: string;
  company_name: string;
  phone_number: string;
};

type Footer = {
  _uid: string;
  visit_us: {
    link: string;
    name: string;
    image: string;
  }[];
  component: string;
  address_title: string;
  contact_title: string;
  visit_us_title: string;
};

type Logo = {
  _uid: string;
  image: {
    filename: string;
  };
  component: string;
};

type Slide = {
  _uid: string;
  order: number;
  text: StoryblokRichtext;
  image: {
    filename: string;
  };
  image_width: string;
  heading: StoryblokRichtext;
  component: string;
  menu_title: string;
  text_color: 'black' | 'white';
  font_size_text: 'xs' | 'small' | 'medium' | 'large';
  background_image: {
    filename: string;
  };
  font_size_heading: 'xs' | 'small' | 'medium' | 'large';
  background_image_blur: string;
  bottom_images?: {
    filename: string;
  }[];
};

type Favicon = {
  _uid: string;
  component: string;
  favicon_16x16: {
    filename: string;
  };
  favicon_32x32: {
    filename: string;
  };
  favicon_48x48: {
    filename: string;
  };
  favicon_svg: {
    filename: string;
  };
};

type MetaData = {
  title: string;
  description: string;
  keywords: string;

  canonical_url: string;

  og_image: {
    filename: string;
  };
  apple_touch_icon: {
    filename: string;
  };
};
