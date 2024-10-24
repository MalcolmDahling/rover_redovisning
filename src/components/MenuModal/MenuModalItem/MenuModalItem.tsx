import { MenuModalItemStyle } from './MenuModalItem.css';

type props = {
  text: string;
  onClick: () => void;
};

export default function MenuModalItem(props: props) {
  return (
    <button
      className={MenuModalItemStyle()}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
