import React from 'react';
import { HeadingMultiLineStyle, HeadingStyle } from './Heading.css';

type props = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
  text2?: string;
  color: 'black' | 'white';
  children: React.ReactNode;
  fontSize: 'small' | 'medium' | 'large';
  bold: boolean;
  margin?: boolean;
  onClick?: () => void;
  cursorPointer?: boolean;
};

export default function Heading(props: props) {
  const Component = props.type;

  return (
    <Component
      className={HeadingStyle({ type: props.type, color: props.color, fontSize: props.fontSize, bold: props.bold, margin: props.margin, cursorPointer: props.cursorPointer })}
      onClick={props.onClick}
    >
      {props.children}
      <div className={HeadingMultiLineStyle()}>
        <span>{props.text}</span>
        {props.text2 && <span>{props.text2}</span>}
      </div>
    </Component>
  );
}
