import "./Footer.css";
import LogoMadeInLitomysl from "../assets/pictures/made-in-litomysl-white.png";

const Footer = () => {
  return (
    <section className="footer">
      <a href="https://madeinlitomysl.cz/">
        <img
          src={LogoMadeInLitomysl}
          alt="logo-made-in-litomysl"
          className="made-in-litomysl"
        />
      </a>
      <a href="https://gaz647.eu/" className="gaz-647">
        gaz647.eu
      </a>
    </section>
  );
};

export default Footer;
