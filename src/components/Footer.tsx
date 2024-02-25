import "./Footer.css";
import LogoMadeInLitomysl from "../assets/pictures/made-in-litomysl-white.png";

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
      <a href="https://gaz647.net/" className="gaz-647">
        gaz647.net
      </a>
    </footer>
  );
};

export default Footer;
