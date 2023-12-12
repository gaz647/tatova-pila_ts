import "./AboutUs.css";
import LogoCircle from "../assets/pictures/logo-white-circle.png";

const AboutUs: React.FC = () => {
  return (
    <div className="page-container about-us dis-flex-row-center">
      <div className="text-container">
        <h1 className="text-shadow-black">Jsme pilaři a jsme z Litomyšle</h1>
        <br />
        <ul className="text-shadow-black">
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
        <h2 className="text-shadow-black">
          Zkuste to s námi a náš „zubatý cirkus“ nařeže i Vám 🙂
        </h2>
        <br />
        <div className="greeting-container">
          <h2 className="greeting-vase text-shadow-black">Vaše </h2>
          <img
            src={LogoCircle}
            alt="logo-tatova-pila"
            style={{ height: "70px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
