import useBreakpoint from 'use-breakpoint';
import Paragraph from '../Paragraph/Paragraph';
import { FooterGridContainerStyle, FooterItemStyle, FooterLineStyle, FooterStyle } from './Footer.css';
import { Breakpoints } from '@/styles/variables';

export default function Footer() {
  const { breakpoint } = useBreakpoint(Breakpoints);

  const text = [
    `Rovér Redovisning i Nacka
    Söderled 10
    132 51 SALTSJÖ-BOO`,

    `070-493 16 76
    pr@roverredovisning.se`,

    `Godkänd för F-skatt
    
    Företaget har en policy kring personuppgifter/GPDR och personuppgiftbiträdesavtal med sina kunder.
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
            <Paragraph
              color="white"
              fontSize="small"
            >
              {item}
            </Paragraph>
          </div>
        ))}
      </div>
    </footer>
  );
}
