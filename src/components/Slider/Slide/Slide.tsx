import Paragraph from '@/components/Paragraph/Paragraph';
import { SlideBackgroundImageStyle, SlideContainerStyle, SlideFlexContainerStyle, SlideImageStyle, SlideInnerContainerStyle, SlideTextContainerStyle } from './Slide.css';
import Heading from '@/components/Heading/Heading';
import { StoryblokType } from '@/types/storyblok';

export default function Slide(props: { slide: StoryblokType['slides'][number] }) {
  return (
    <div className={`keen-slider__slide ${SlideContainerStyle()}`}>
      {props.slide.background_image && (
        <img
          src={props.slide.background_image}
          className={SlideBackgroundImageStyle()}
          style={{ filter: `blur(${props.slide.background_image_blur}px)` }}
        ></img>
      )}

      <div className={SlideInnerContainerStyle()}>
        {props.slide.title && (
          <Heading
            type="h1"
            color={props.slide.text_color}
            fontSize={props.slide.font_size_heading}
            bold={false}
            textShadow={true}
          >
            {props.slide.title}
          </Heading>
        )}

        <div className={SlideFlexContainerStyle()}>
          {props.slide.text && (
            <div className={SlideTextContainerStyle()}>
              <Paragraph
                fontSize={props.slide.font_size_text}
                color={props.slide.text_color}
                textShadow={true}
              >
                {props.slide.text}
              </Paragraph>
            </div>
          )}

          {props.slide.image && (
            <img
              src={props.slide.image}
              className={SlideImageStyle()}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
