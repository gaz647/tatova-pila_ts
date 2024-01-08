import "./AboutUs.css";
import LogoCircle from "../assets/pictures/logo-white-circle.png";

const AboutUs: React.FC = () => {
  return (
    <div className="page-container padding-first-page darker-background relative">
      <div className="text-container fade-in-from-center">
        <div className="page-heading slide-in-left-heading">
          Jsme pilaři a jsme z Litomyšle
        </div>

        <div className="text-container-text">
          <div className="text-container-text-sentence slide-in-right-text-sentence-1">
            Svou prací cílíme především na vlastníka lesa, jenž potřebuje
            pořezat svou kulatinu/výřezy na pilařské polotovary.
          </div>
          <div className="text-container-text-sentence slide-in-right-text-sentence-2">
            Disponujeme pojízdnou pásovou pilou, se kterou přijedeme přímo k vám
            a provedeme pořez dle vašeho přání.
          </div>
          <div className="text-container-text-sentence slide-in-right-text-sentence-3">
            Jedinou naší podmínkou je minimální množství kulatiny 5cbm v délce
            1.5-6m, do průměru 65cm a elektrická zásuvka na 380V.
          </div>
          <div className="text-container-text-sentence slide-in-right-text-sentence-4">
            Nemáte les? Nevadí. Dodáme vám z vlastního.
          </div>
        </div>
        <br />

        <div
          className="page-sub-heading slide-in-right-text-sentence-5"
          style={{ margin: 0 }}
        >
          Zkuste to s námi a náš „zubatý cirkus“ nařeže i Vám 🙂
        </div>
        <br />
        <div className="greeting-container-2">
          <img
            className="greeting-container-2-logo"
            src={LogoCircle}
            alt="logo-tatova-pila"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
