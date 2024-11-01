import Heading from '@/components/Heading/Heading';
import { SocialsBottomContainerStyle, SocialsContainerStyle } from './Socials.css';
import SocialsItem from './SocialsItem/SocialsItem';
import { StoryblokType } from '@/types/storyblok';

export default function Socials(props: { visit_us_title: StoryblokType['footer']['visit_us_title']; visit_us_items: StoryblokType['footer']['visit_us'] }) {
  return (
    <div className={SocialsContainerStyle()}>
      <Heading
        type="h3"
        color="white"
        bold={true}
        fontSize="small"
        margin={false}
      >
        {props.visit_us_title}
      </Heading>
      <div className={SocialsBottomContainerStyle()}>
        {props.visit_us_items.map((item) => (
          <SocialsItem
            key={item.name}
            visit_us_items={item}
          ></SocialsItem>
        ))}
      </div>
    </div>
  );
}
