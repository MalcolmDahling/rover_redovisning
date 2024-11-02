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

      <div className={SlideInnerContainerStyle({ fontSize: props.slide.font_size_heading })}>
        <div style={{ height: 123 }}></div>

        {props.slide.heading && render(props.slide.heading)}

        <div className={SlideFlexContainerStyle({ fontSize: props.slide.font_size_text })}>{props.slide.text && render(props.slide.text)}</div>

        <div style={{ height: 265 }}></div>
      </div>
    </div>
  );
}
