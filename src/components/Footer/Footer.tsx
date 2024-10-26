import useBreakpoint from 'use-breakpoint';
import Paragraph from '../Paragraph/Paragraph';
import { FooterGridContainerStyle, FooterItemStyle, FooterStyle, FooterTaxContainerStyle } from './Footer.css';
import { Breakpoints } from '@/styles/variables';
import Heading from '../Heading/Heading';
import Socials from './Socials/Socials';

export default function Footer() {
  const { breakpoint } = useBreakpoint(Breakpoints);

  const headings = ['ADRESS', 'KONTAKT'];

  const text = [
    `Rovér Redovisning i Nacka
    Söderled 10
    132 51 SALTSJÖ-BOO`,

    `070-493 16 76
    pr@roverredovisning.se`,
  ];

  return (
    <footer className={FooterStyle()}>
      <div className={FooterGridContainerStyle()}>
        {text.map((item, i) => (
          <div
            key={i}
            className={FooterItemStyle()}
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
        <Socials></Socials>
      </div>

      <div className={FooterTaxContainerStyle()}>
        <Paragraph
          color="white"
          fontSize="xs"
        >
          Godkänd för F-skatt.
          <br />
          Företaget har en policy kring personuppgifter/GPDR och personuppgiftbiträdesavtal med sina kunder. Kontakta oss för mer information kring hur vi hanterar personuppgifter
        </Paragraph>
      </div>
    </footer>
  );
}
