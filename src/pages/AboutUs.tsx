import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <section className="section-container about-us">
      <div className="text-container">
        <h1>Jsme pilaři a jsme z Litomyšle</h1>
        <br />
        <ul>
          <li>
            Svou prací cílíme především na vlastníka lesa, jenž potřebuje
            pořezat svou kulatinu/výřezy na pilařské polotovary.{" "}
          </li>
          <br />
          <li>
            Disponujeme pojízdnou pásovou pilou, se kterou přijedeme přímo k vám
            a provedeme pořez dle vašeho přání.
          </li>
          <br />
          <li>
            Jedinou naší podmínkou je minimální množství kulatiny 5cbm v délce
            1.5-6m, do průměru 65cm a elektrická zásuvka na 380V.
          </li>
          <br />
          <li>Nemáte les? nevadí! Dodáme vám z vlastního!</li>
        </ul>
        <br />
        <p>Zkuste to s námi a náš „zubatý cirkus“ nařeže i Vám {`:)`}</p>
        <h3>Vaše Tátova Pila</h3>
      </div>
    </section>
  );
};

export default AboutUs;
