import Paragraph from '@/components/Paragraph/Paragraph';
import { QuoteContainerStyle } from './Quote.css';

type props = {
  text: string;
  author: string;
};

export default function Quote(props: props) {
  return (
    <div className={QuoteContainerStyle()}>
      <Paragraph
        color="black"
        fontSize="medium"
      >
        {props.text}
      </Paragraph>
      <Paragraph
        color="black"
        fontSize="small"
        italic={true}
      >
        {props.author}
      </Paragraph>
    </div>
  );
}
