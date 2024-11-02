import { SlideBackgroundImageStyle, SlideContainerStyle, SlideFlexContainerStyle, SlideInnerContainerStyle } from './Slide.css';
import { StoryblokType } from '@/types/storyblok';
import { useAtom } from 'jotai';
import { FooterHeightAtom } from '@/atoms/FooterHeightAtom';
import { render } from 'storyblok-rich-text-react-renderer';
import Heading from '@/components/Heading/Heading';

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

      <div className={SlideInnerContainerStyle()}>
        <div style={{ height: 123 }}></div>

        {props.slide.title && render(props.slide.title)}

        <div className={SlideFlexContainerStyle()}>{props.slide.text && render(props.slide.text)}</div>

        <div style={{ height: 265 }}></div>
      </div>
    </div>
  );
}
