import React from 'react';
import { HeadingMultiLineStyle, HeadingStyle } from './Heading.css';

type props = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
  color: 'black' | 'white';
  children: React.ReactNode;
  fontSize: 'small' | 'medium' | 'large';
  bold: boolean;
  margin?: boolean;
  onClick?: () => void;
  cursorPointer?: boolean;
  textShadow?: boolean;
  upperCase?: boolean;
  multiLine?: boolean;
};

export default function Heading(props: props) {
  const Component = props.type;
  let text = props.text;
  let multiLinetext: string[] = [];

  if (props.upperCase && text) {
    text = text.toUpperCase();
  }

  if (props.multiLine && text) {
    multiLinetext = text.split(' ');
  }

  return (
    <Component
      className={HeadingStyle({ type: props.type, color: props.color, fontSize: props.fontSize, bold: props.bold, margin: props.margin, cursorPointer: props.cursorPointer, textShadow: props.textShadow })}
      onClick={props.onClick}
    >
      {props.children}
      {multiLinetext.length > 0 ? (
        <div className={HeadingMultiLineStyle()}>
          {multiLinetext.map((item) => (
            <span key={Date.now() + item}>{item}</span>
          ))}
        </div>
      ) : (
        props.text
      )}
    </Component>
  );
}
