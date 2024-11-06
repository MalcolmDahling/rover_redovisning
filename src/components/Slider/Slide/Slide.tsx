import { SlideBackgroundImageStyle, SlideContainerStyle, SlideHeadingContainerStyle, SlideImageStyle, SlideInnerContainerStyle, SlideLinkStyle, SlideTextContainerStyle } from './Slide.css';
import { StoryblokType } from '@/types/storyblok';
import { useAtom } from 'jotai';
import { FooterHeightAtom } from '@/atoms/FooterHeightAtom';
import { render, MARK_LINK } from 'storyblok-rich-text-react-renderer';
import { isValidElement } from 'react';
import tinycolor from 'tinycolor2';

export default function Slide(props: { slide: StoryblokType['slides'][number] }) {
  const [footerHeightAtom, setFooterHeightAtom] = useAtom(FooterHeightAtom);

  return (
    <div className={`keen-slider__slide ${SlideContainerStyle()}`}>
      {props.slide.background_image && (
        <img
          src={props.slide.background_image}
          className={SlideBackgroundImageStyle()}
          style={{ filter: `blur(${props.slide.background_image_blur}px)` }}
        ></img>
      )}

      <div className={SlideInnerContainerStyle({ fontSize: props.slide.font_size_heading })}>
        <div style={{ height: 123 }}></div>

        <div className={SlideHeadingContainerStyle()}>{props.slide.heading && render(props.slide.heading)}</div>

        <div className={SlideTextContainerStyle({ fontSize: props.slide.font_size_text })}>
          {props.slide.image && props.slide.image.filename && (
            <img
              src={props.slide.image.filename}
              className={SlideImageStyle()}
              style={{ width: `${props.slide.image_width}px` }}
            ></img>
          )}
          {props.slide.text &&
            render(props.slide.text, {
              markResolvers: {
                [MARK_LINK]: (children, props) => {
                  let linkColor = isValidElement(children) && children.props?.style?.color ? children.props.style.color : 'inherit';
                  linkColor = tinycolor(linkColor);

                  return (
                    <a
                      {...props}
                      target="_blank"
                      className={SlideLinkStyle()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderBottom = `2px solid ${linkColor}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderBottom = '2px solid transparent';
                      }}
                    >
                      {children}
                    </a>
                  );
                },
              },
            })}
        </div>

        <div style={{ height: 265 }}></div>
      </div>
    </div>
  );
}
