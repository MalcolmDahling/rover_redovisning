import React from 'react';
import { ParagraphStyle } from './Paragraph.css';

type props = {
  children: React.ReactNode;
  color: 'black' | 'white';
  bold?: boolean;
  italic?: boolean;
  textShadow?: boolean;
  fontSize: 'xs' | 'small' | 'medium' | 'large';
  noMargin?: boolean;
};

export default function Paragraph(props: props) {
  const renderChildren = () => {
    if (typeof props.children === 'string') {
      return props.children.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    }

    return props.children;
  };

  return (
    <p
      className={ParagraphStyle({
        color: props.color,
        bold: props.bold,
        italic: props.italic,
        textShadow: props.textShadow,
        fontSize: props.fontSize,
        noMargin: props.noMargin,
      })}
    >
      {renderChildren()}
    </p>
  );
}
