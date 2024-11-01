'use client';

import { FooterAddressStyle, FooterGridContainerStyle, FooterItemStyle, FooterLinkStyle, FooterStyle } from './Footer.css';
import Heading from '../Heading/Heading';
import Socials from './Socials/Socials';
import { StoryblokType } from '@/types/storyblok';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { FooterHeightAtom } from '@/atoms/FooterHeightAtom';

export default function Footer(props: { footer: StoryblokType['footer']; contact_information: StoryblokType['contact_information'] }) {
  const [footerHeightAtom, setFooterHeightAtom] = useAtom(FooterHeightAtom);
  const ref = useRef<HTMLDivElement>(null);

  function handleResize() {
    if (!ref.current) return;

    setFooterHeightAtom(ref.current.getBoundingClientRect().height);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer
      ref={ref}
      className={FooterStyle()}
    >
      <div className={FooterGridContainerStyle()}>
        <div className={FooterItemStyle()}>
          <Heading
            type="h3"
            color="white"
            bold={true}
            fontSize="small"
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
    </footer>
  );
}
