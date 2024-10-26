import Paragraph from '@/components/Paragraph/Paragraph';
import { SocialsItemContainerStyle, SocialsItemImageStyle } from './SocialsItem.css';

type props = {
  name: string;
  url: string;
  imageUrl: string;
};

export default function SocialsItem(props: props) {
  return (
    <a
      className={SocialsItemContainerStyle()}
      href={props.url}
      target="_blank"
    >
      <img
        src={props.imageUrl}
        className={SocialsItemImageStyle()}
      ></img>
      <Paragraph
        color="black"
        fontSize="small"
      >
        {props.name}
      </Paragraph>
    </a>
  );
}
