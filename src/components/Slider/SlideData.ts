type data = {
  title: string;
  text: string;
  imageURL: string;
  backgroundImageURL: string;
  textColor: 'black' | 'white';
  backgroundColor: string;
  blurBackgroundImage: boolean;
  fontSize: 'small' | 'medium' | 'large';
};

export const data: data[] = [
  {
    title: 'HEM',
    text: `
      Ni fokuserar på det ni brinner för - er kärnverksamhet. Vi tar hand om ert företags redovisning och skattehantering, det vill säga det ni egentligen inte har tid med.

      Rover Redovisning är byrån som specialiserat sig på redovisning i det lilla företaget. Fåmansbolag utan, eller med bara någon enstaka anställd, är vår kärnkundkrets. Bland våra befintliga kunder märks exempelvis läkare, start-ups eller konsulter av olika slag.
      
      Vi är ett löpande stöd för dig som småföretagare kring redovisning och skatt. Vi skapar effektiva arbetssätt med den avancerade teknik som finns idag i form av digitalisering och automatisering. Framförallt har vi koll på tekniska frågor inom bolagsbeskattning, och våra råd har hjälpt våra kunder spara pengar genom att kunna fatta de mest skatteeffektiva besluten.
      
      Vårt fokus är det personliga mötet där du som kund har en kontinuitet med samma kontaktperson hos oss. I en bransch där stora byråer ofta har omsättning på personal och assistenter som byts ut, är våra kunder nöjda med att alltid veta vem de kan bolla frågor med från vår sida.
      
      Vi befinner oss i Nacka, men vi jobbar digitalt och har kunder i hela landet.`,
    imageURL: '/images/bild0.jpg',
    backgroundImageURL: '/images/background.jpg',
    textColor: 'white',
    backgroundColor: '',
    blurBackgroundImage: true,
    fontSize: 'small',
  },
  {
    title: 'VÅRA TJÄNSTER/FÖRETAGET',
    text: `Texten är inte klar för denna sida, men här ska det stå vad företaget erbjuder, priser mm: 
          
          Bla bla bla. Vi har bla bla bla.
                
          Olika tjänster & priser: 
                
          Bla bla bla.`,
    imageURL: '',
    backgroundImageURL: '/images/2.jpg',
    textColor: 'white',
    backgroundColor: '#063970',
    blurBackgroundImage: true,
    fontSize: 'small',
  },
  {
    title: 'REFERENSER',
    text: `"Mycket bra och alltid tillgänglig. Fick ordning på mitt företag.🙏” 
          - Urban Sjöqvist, MD PhD, Senior Consultant in Gastroenterology & Hepatology, CEO Urban Gastro AB
          
          Rovér Redovisning har stöttat mitt företag kring redovisning och skatt sedan många år. Paulin återkopplar snabbt vid frågor och sköter allt löpande administrativt arbete så att jag kan fokusera på min kärnverksamhet. 
          -Rodrigo Garay, NGO Factory AB, Founder, Impact Entrepreneur Consultant, Investor. 

          "I mitt arbete med försäkringsförmedling är det mycket lagar och regler som ska vara rätt. Samtidigt ska redovisningen vara korrekt. Då är det lättast att ta hjälp med bokföringen av de som är bäst på det. Därför var valet av Rovér Redovisning en skön avlastning."
          -Henry Rude, Ägare AB HR Försäkring och Finans

          ”Rovér Redovisning hjälpte mig att starta mitt aktiebolag och har fortsatt sköta bokföring, löner och skatteverkets rutiner sedan dess. Paulin lyssnar, guidar och åtgärdar så jag kan driva mitt företag på ett enkelt sätt”.
          -David Ohlén, Narkosläkare, konsult. Ägare av Morphysio AB.

          (Inväntar en till referens) `,
    imageURL: '',
    backgroundImageURL: '/images/3.jpg',
    textColor: 'white',
    backgroundColor: 'black',
    blurBackgroundImage: true,
    fontSize: 'small',
  },
  {
    title: 'KONTAKT',
    text: `Rovér Redovisning i Nacka
          Söderled 10 

          132 51 SALTSJÖ-BOO

          070-493 16 76

          pr@roverredovisning.se

          Org nr:690919-5049

          Godkänd för F-skatt
          
          Företaget har en policy kring personuppgifter/GPDR och personuppgiftbiträdesavtal med sina kunder. Kontakta oss för mer information kring hur vi hanterar personuppgifter.
          
          MAILFORMULÄR HÄR?`,
    imageURL: '',
    backgroundImageURL: '/images/5.jpg',
    textColor: 'white',
    backgroundColor: '#1e81b0',
    blurBackgroundImage: true,
    fontSize: 'small',
  },
];
