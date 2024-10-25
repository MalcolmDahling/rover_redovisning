import useBreakpoint from 'use-breakpoint';
import Paragraph from '../Paragraph/Paragraph';
import { FooterGridContainerStyle, FooterItemStyle, FooterLineStyle, FooterStyle } from './Footer.css';
import { Breakpoints } from '@/styles/variables';
import Heading from '../Heading/Heading';
import Socials from './Socials/Socials';

export default function Footer() {
  const { breakpoint } = useBreakpoint(Breakpoints);

  const headings = ['ADRESS', 'KONTAKT', 'Godkänd för F-skatt'];

  const text = [
    `Rovér Redovisning i Nacka
    Söderled 10
    132 51 SALTSJÖ-BOO`,

    `070-493 16 76
    pr@roverredovisning.se`,

    `Företaget har en policy kring personuppgifter/GPDR och personuppgiftbiträdesavtal med sina kunder.
    Kontakta oss för mer information kring hur vi hanterar personuppgifter.`,
  ];
  return (
    <footer className={FooterStyle()}>
      <div className={FooterLineStyle()}></div>
      <div className={FooterGridContainerStyle()}>
        {text.map((item, i) => (
          <div
            key={i}
            className={FooterItemStyle({ borderLeft: i !== 0 && breakpoint !== 'mobile' })}
          >
            <Heading
              type="h3"
              color="white"
              bold={true}
              fontSize="small"
              margin={false}
            >
              {headings[i]}
            </Heading>
            <Paragraph
              color="white"
              fontSize="small"
            >
              {item}
            </Paragraph>
          </div>
        ))}
      </div>

      <Socials></Socials>
    </footer>
  );
}
