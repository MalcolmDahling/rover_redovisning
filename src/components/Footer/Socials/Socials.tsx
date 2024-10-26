import Heading from '@/components/Heading/Heading';
import { SocialsContainerStyle } from './Socials.css';
import SocialsItem from './SocialsItem/SocialsItem';

export default function Socials() {
  const socials = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/roverredovisning.se',
      imageUrl: '/images/socials/facebook.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/roverredovisning/',
      imageUrl: '/images/socials/instagram.png',
    },
  ];

  return (
    <div className={SocialsContainerStyle()}>
      <Heading
        type="h3"
        color="white"
        bold={true}
        fontSize="small"
        margin={false}
      >
        BESÖK OSS PÅ
      </Heading>
      {socials.map((item) => (
        <SocialsItem
          key={item.name}
          {...item}
        ></SocialsItem>
      ))}
    </div>
  );
}
