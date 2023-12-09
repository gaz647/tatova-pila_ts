import "./AboutUs.css";
import LogoCircle from "../assets/pictures/logo-white-circle.png";

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
          <li>Nemáte les? Nevadí! Dodáme vám z vlastního!</li>
        </ul>
        <br />
        <h3>Zkuste to s námi a náš „zubatý cirkus“ nařeže i Vám {`:)`}</h3>
        <div className="greeting-container">
          <h3 className="greeting-vase">Vaše </h3>
          <img
            src={LogoCircle}
            alt="logo-tatova-pila"
            style={{ height: "60px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
