import { MenuDesktopButtonStyle } from './MenuDesktopButton.css';

type props = {
  text: string;
  selected: boolean;
  onClick: () => void;
};

export default function MenuDesktopButton(props: props) {
  return (
    <button
      className={MenuDesktopButtonStyle({ selected: props.selected })}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
