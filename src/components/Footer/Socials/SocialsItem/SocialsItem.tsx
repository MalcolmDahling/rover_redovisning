import Paragraph from '@/components/Paragraph/Paragraph';
import { SocialsItemLinkStyle, SocialsItemImageStyle } from './SocialsItem.css';
import { StoryblokType } from '@/types/storyblok';

export default function SocialsItem(props: { visit_us_items: StoryblokType['footer']['visit_us'][number] }) {
  return (
    <a
      className={SocialsItemLinkStyle()}
      href={props.visit_us_items.link}
      target="_blank"
    >
      <img
        src={props.visit_us_items.image}
        className={SocialsItemImageStyle()}
      ></img>
      <Paragraph
        color="white"
        fontSize="small"
      >
        {props.visit_us_items.name}
      </Paragraph>
    </a>
  );
}
