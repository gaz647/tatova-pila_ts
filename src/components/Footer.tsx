import "./Footer.css";
import LogoMadeInLitomysl from "../assets/pictures/made-in-litomysl-white.png";
import { TbWorldWww } from "react-icons/tb";
import LogoBezStarosti from "../assets/pictures/bez-starosti.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="https://madeinlitomysl.cz/">
        <img
          src={LogoMadeInLitomysl}
          alt="logo-made-in-litomysl"
          className="made-in-litomysl"
        />
      </a>
      <a href="https://gaz647.net/">
        <div className="gaz647-logo">
          <TbWorldWww className="gaz47-logo-planet" />
          <p className="gaz647-logo-text">
            by: <span className="gaz-logo-text-bold">gaz647</span>
          </p>
        </div>
      </a>
      <a href="https://www.bezstarosti-video.cz/">
        <img
          src={LogoBezStarosti}
          alt="logo-bez-starosti"
          className="bez-starosti"
        />
      </a>
    </footer>
  );
};

export default Footer;
