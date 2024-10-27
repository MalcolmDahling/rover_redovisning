import Paragraph from '../Paragraph/Paragraph';
import { FooterAddressStyle, FooterGridContainerStyle, FooterItemStyle, FooterLinkStyle, FooterStyle, FooterTaxContainerStyle } from './Footer.css';
import Heading from '../Heading/Heading';
import Socials from './Socials/Socials';
import { StoryblokType } from '@/types/storyblok';

export default function Footer(props: { footer: StoryblokType['footer']; contact_information: StoryblokType['contact_information'] }) {
  return (
    <footer className={FooterStyle()}>
      <div className={FooterGridContainerStyle()}>
        <div className={FooterItemStyle()}>
          <Heading
            type="h3"
            color="white"
            bold={true}
            fontSize="small"
            margin={false}
          >
            {props.footer.adress_title}
          </Heading>

          <address className={FooterAddressStyle()}>
            {props.contact_information.company_name}
            <br />
            {props.contact_information.address}
            <br />
            {props.contact_information.zipcode}
          </address>
        </div>

        <div className={FooterItemStyle()}>
          <Heading
            type="h3"
            color="white"
            bold={true}
            fontSize="small"
            margin={false}
          >
            {props.footer.contact_title}
          </Heading>

          <address className={FooterAddressStyle()}>
            <a
              className={FooterLinkStyle()}
              href={`tel:${props.contact_information.phone_number}`}
            >
              {props.contact_information.phone_number}
            </a>
            <br />
            <a
              className={FooterLinkStyle()}
              target="_blank"
              href={`mailto:${props.contact_information.email}`}
            >
              {props.contact_information.email}
            </a>
          </address>
        </div>

        <Socials
          visit_us_title={props.footer.visit_us_title}
          visit_us_items={props.footer.visit_us}
        ></Socials>
      </div>

      <div className={FooterTaxContainerStyle()}>
        <Paragraph
          color="white"
          fontSize="xs"
        >
          {props.footer.bottom_text}
        </Paragraph>
      </div>
    </footer>
  );
}
