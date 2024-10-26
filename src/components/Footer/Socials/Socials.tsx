import { SocialsContainerStyle } from './Socials.css';
import SocialsItem from './SocialsItem/SocialsItem';

export default function Socials() {
  const socials = [
    {
      name: 'Rovér Redovisning',
      url: 'https://www.facebook.com/roverredovisning.se',
      imageUrl: '/images/socials/facebook.webp',
    },
    {
      name: 'roverredovisning',
      url: 'https://www.instagram.com/roverredovisning/',
      imageUrl: '/images/socials/instagram.webp',
    },
  ];

  return (
    <div className={SocialsContainerStyle()}>
      {socials.map((item) => (
        <SocialsItem {...item}></SocialsItem>
      ))}
    </div>
  );
}
