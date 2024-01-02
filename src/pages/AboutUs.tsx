import "./AboutUs.css";
import LogoCircle from "../assets/pictures/logo-white-circle.png";

const AboutUs: React.FC = () => {
  return (
    <div className="page-container about-us dis-flex-row-center">
      <div className="text-container">
        <div className="page-heading">Jsme pilaři a jsme z Litomyšle</div>

        <div className="text-container-text">
          Svou prací cílíme především na vlastníka lesa, jenž potřebuje pořezat
          svou kulatinu/výřezy na pilařské polotovary.
          <br />
          <br />
          <br />
          Disponujeme pojízdnou pásovou pilou, se kterou přijedeme přímo k vám a
          provedeme pořez dle vašeho přání.
          <br />
          <br />
          <br />
          Jedinou naší podmínkou je minimální množství kulatiny 5cbm v délce
          1.5-6m, do průměru 65cm a elektrická zásuvka na 380V.
          <br />
          <br />
          <br />
          Nemáte les? Nevadí! Dodáme vám z vlastního!
        </div>
        <br />

        <div className="page-sub-heading">
          Zkuste to s námi a náš „zubatý cirkus“ nařeže i Vám 🙂
        </div>
        <br />
        <div className="greeting-container">
          <div className="page-heading">Vaše </div>
          <img
            src={LogoCircle}
            alt="logo-tatova-pila"
            style={{ height: "90px", marginLeft: "1.5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
