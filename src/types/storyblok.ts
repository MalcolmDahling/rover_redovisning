export type StoryblokType = {
  contact_information: ContactInformation;
  footer: Footer;
  logo: Logo;
  slides: Slide[];
  website_name: WebsiteName;
  favicon: Favicon;
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
  text: {
    type: string;
    content: {
      type: string;
      content: {
        text: string;
        type: string;
      }[];
    }[];
  }[];
  image: {
    filename: string;
  };
  heading: string;
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
};
