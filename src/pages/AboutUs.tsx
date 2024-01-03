import "./AboutUs.css";
import LogoCircle from "../assets/pictures/logo-white-circle.png";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us relative">
      <div className="text-container">
        <div className="page-heading">Jsme pilaři a jsme z Litomyšle</div>

        <div className="text-container-text">
          <div className="text-container-text-sentence">
            Svou prací cílíme především na vlastníka lesa, jenž potřebuje
            pořezat svou kulatinu/výřezy na pilařské polotovary.
          </div>
          <div className="text-container-text-sentence">
            Disponujeme pojízdnou pásovou pilou, se kterou přijedeme přímo k vám
            a provedeme pořez dle vašeho přání.
          </div>
          <div className="text-container-text-sentence">
            Jedinou naší podmínkou je minimální množství kulatiny 5cbm v délce
            1.5-6m, do průměru 65cm a elektrická zásuvka na 380V.
          </div>
          <div className="text-container-text-sentence">
            Nemáte les? Nevadí. Dodáme vám z vlastního.
          </div>
        </div>
        <br />

        <div className="page-sub-heading" style={{ margin: 0 }}>
          Zkuste to s námi a náš „zubatý cirkus“ nařeže i Vám 🙂
        </div>
        <br />
        <div className="greeting-container-2">
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
