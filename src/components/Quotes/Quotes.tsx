import Quote from './Quote/Quote';
import { QuotesContainerStyle } from './Quotes.css';

export default function Quotes() {
  const data = [
    {
      text: 'Mycket bra och alltid tillgänglig. Fick ordning på mitt företag 🙏',
      author: '-Urban Sjöqvist, MD PhD, Senior Consultant in Gastroenterology & Hepatology, CEO Urban Gastro AB ',
    },
    {
      text: 'Flyttade från Orust till huvudstaden... letade därför upp en redovisningsbyrå här uppe. Hittade Rovér som är kanonbra! Alltid anträffbar och snabba svar när man har frågor! Kan varmt rekommendera Rovér Redovisning!',
      author: '-Per Tärnklev, VD Merengue Charter AB & Orust Marin Design AB',
    },
    {
      text: 'I mitt arbete med försäkringsförmedling är det mycket laga regler som ska vara rätt. Samtidigt ska redovisningen vara korrekt. Då är det lättast att ta hjälp med bokföringen av de som är bäst på det. Därför var valet av Rovér Redovisning en skön avlastning.',
      author: '-Henry Rude, Ägare AB HR Försäkring och Finans',
    },
  ];

  return (
    <div className={QuotesContainerStyle()}>
      {data.map((item) => (
        <Quote
          key={Math.random()}
          text={item.text}
          author={item.author}
        ></Quote>
      ))}
    </div>
  );
}
