import { FooterAddressStyle, FooterBottomLinkStyle, FooterBottomTextStyle, FooterFlexContainerStyle, FooterItemStyle, FooterLinkStyle, FooterStyle } from './Footer.css';
import Heading from '../Heading/Heading';
import Socials from './Socials/Socials';
import { StoryblokType } from '@/types/storyblok';

export default function Footer(props: { footer: StoryblokType['footer']; contact_information: StoryblokType['contact_information'] }) {
  return (
    <footer className={FooterStyle()}>
      <div className={FooterFlexContainerStyle()}>
        <div className={FooterItemStyle()}>
          <Heading
            type="h3"
            color="white"
            bold={true}
            fontSize="xs"
            margin={false}
          >
            {props.footer.address_title}
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
            fontSize="xs"
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

      <div className={FooterBottomTextStyle()}>
        2024 - Hemsidan är utvecklad av{' '}
        <a
          className={FooterBottomLinkStyle()}
          href="https://www.linkedin.com/in/malcolm-dahling-175841222/"
          target="_blank"
        >
          Malcolm Dahling
        </a>
        <span> och </span>
        <a
          className={FooterBottomLinkStyle()}
          href="https://www.linkedin.com/in/jonas-sahlstr%C3%B6m-888209135/"
          target="_blank"
        >
          Jonas Sahlström
        </a>
      </div>
    </footer>
  );
}
