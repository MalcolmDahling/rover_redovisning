import Facebook from './Facebook/Facebook';
import Instagram from './Instagram/Instagram';
import { SocialsContainerStyle, SocialsItemStyle } from './Socials.css';

export default function Socials() {
  return (
    <div className={SocialsContainerStyle()}>
      <div className={SocialsItemStyle()}>
        <Facebook></Facebook>
      </div>
      <div className={SocialsItemStyle()}>
        <Instagram></Instagram>
      </div>
    </div>
  );
}
