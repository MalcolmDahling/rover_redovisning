import Paragraph from '@/components/Paragraph/Paragraph';
import { SlideBackgroundImageStyle, SlideContainerStyle, SlideFlexContainerStyle, SlideImageStyle, SlideInnerContainerStyle, SlideTextContainerStyle } from './Slide.css';
import Heading from '@/components/Heading/Heading';
type props = {
  title: string;
  text: string;
  imageURL: string;
  backgroundImageURL: string;
  textColor: 'black' | 'white';
  backgroundColor: string;
  blurBackgroundImage: boolean;
  fontSize: 'small' | 'medium' | 'large';
};

export default function Slide(props: props) {
  return (
    <div className={`keen-slider__slide ${SlideContainerStyle()}`}>
      {props.backgroundImageURL && (
        <img
          src={props.backgroundImageURL}
          className={SlideBackgroundImageStyle({ blurBackgroundImage: props.blurBackgroundImage })}
        ></img>
      )}

      <div className={SlideInnerContainerStyle()}>
        {props.title && (
          <Heading
            type="h2"
            color={props.textColor}
            fontSize={props.fontSize}
            bold={false}
          >
            {props.title}
          </Heading>
        )}

        <div className={SlideFlexContainerStyle()}>
          {props.text && (
            <div className={SlideTextContainerStyle()}>
              <Paragraph
                fontSize={props.fontSize}
                color={props.textColor}
              >
                {props.text}
              </Paragraph>
            </div>
          )}

          {props.imageURL && (
            <img
              src={props.imageURL}
              className={SlideImageStyle()}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
