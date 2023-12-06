import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="text-container">
        <h1>Jsme pilaři a jsme z Litomyšle</h1>
        <br />
        <ul>
          <li>Zabýváme se výrobou stavebního řeziva.</li>
          <br />
          <li>
            Naše hlavní zaměření je spotřebitel - malovlastník lesa, který
            potřebuje pořez u něho doma.
          </li>
          <br />
          <li>Zabýváme se výrobou stavebního řeziva.</li>
          <br />
          <li>
            Disponujeme pojízdnou pásovou pilou, se kterou přijedeme přímo k Vám
            a pořežeme přímo u Vás ve dvoře.
          </li>
          <br />
          <li>Stačí nám k tomu jen elektrická zásuvka na 380V.</li>
          <br />
          <li>Délka pořezu od 1,5m do 6m, průměr do 65cm.</li>
          <br />
          <li>Na místě provádíme pořez s co nejvyšší výtěžností.</li>
          <br />
          <li>Preferujeme pořez minimálne nad 5cbm v kulatině.</li>
          <br />
          <li>
            Nebráníme se „speciálním“ přáním týkající se pořezu, variabilitu nám
            naše pila umožňuje.
          </li>
          <br />
          <li>
            Máme i vlastní les, tedy jsme schopni z vlastních zdrojů dodat
            stavební řezivo, jakýkoliv sortiment.
          </li>
          <br />
          <li>Práce se dřevem a s lidmi nás baví.</li>
        </ul>
        <h3>Zkuste to s námi a náš „zubatý cirkus“ nařeže i Vám {`:)`}</h3>
        <h3>Vaše Tátova Pila</h3>
      </div>
    </div>
  );
};

export default AboutUs;
