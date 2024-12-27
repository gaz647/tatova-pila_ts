import "./AboutUs.css";
import LogoCircle from "../assets/pictures/logo-white-circle.png";

const AboutUs: React.FC = () => {
  return (
    <div className="page-container padding-first-page darker-background relative">
      <main className="text-container fade-in-from-center">
        <h1 className="page-heading slide-in-left-heading">
          Jsme pilaři a&nbsp;jsme z Litomyšle
        </h1>

        <div className="text-container-text">
          <p className="text-container-text-sentence slide-in-right-text-sentence-1">
            Svou prací cílíme především na vlastníka lesa, jenž potřebuje
            pořezat svou kulatinu/výřezy na pilařské polotovary.
          </p>
          <p className="text-container-text-sentence slide-in-right-text-sentence-2">
            Disponujeme pojízdnou pásovou pilou, se kterou přijedeme přímo k vám
            a provedeme pořez dle vašeho přání.
          </p>
          <p className="text-container-text-sentence slide-in-right-text-sentence-3">
            Jedinou naší podmínkou je minimální množství kulatiny 5cbm v délce
            1.5-6m, do průměru 65cm a elektrická zásuvka na 380V.
          </p>
          <p className="text-container-text-sentence slide-in-right-text-sentence-4">
            Nemáte les? Nevadí. Dodáme vám z vlastního.
          </p>
        </div>
        <br />

        <p
          className="page-sub-heading slide-in-right-text-sentence-5"
          style={{ margin: 0 }}
        >
          Zkuste to s námi a náš „zubatý cirkus“ nařeže i Vám 🙂
        </p>
        <br />
        <div className="greeting-container-2">
          <img
            className="greeting-container-2-logo"
            src={LogoCircle}
            alt="logo-tatova-pila"
          />
        </div>
        <iframe
          className="yt-video"
          src="https://www.youtube-nocookie.com/embed/pJ8_mqcVVrQ?si=mewUhgtuPtwwKf2U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </main>
    </div>
  );
};

export default AboutUs;
