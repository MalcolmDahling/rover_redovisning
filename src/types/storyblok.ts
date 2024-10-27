export type StoryblokType = {
  contact_information: ContactInformation;
  footer: Footer;
  logo: Logo;
  slides: Slide[];
  website_name: WebsiteName;
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
  bottom_text: string;
  address_title: string;
  contact_title: string;
  visit_us_title: string;
};

type Logo = {
  _uid: string;
  image: {
    id: number;
    alt: string;
    name: string;
    focus: string;
    title: string;
    source: string;
    filename: string;
    copyright: string;
    fieldtype: string;
    meta_data: Record<string, any>;
    is_external_url: boolean;
  };
  component: string;
};

type Slide = {
  _uid: string;
  order: number;
  text: string;
  image: string;
  title: string;
  component: string;
  menu_title: string;
  text_color: 'black' | 'white';
  font_size_text: 'xs' | 'small' | 'medium' | 'large';
  background_image: string;
  font_size_heading: 'xs' | 'small' | 'medium' | 'large';
  background_image_blur: string;
};

type WebsiteName = {
  _uid: string;
  name: string;
  component: string;
};
