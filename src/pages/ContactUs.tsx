import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="section-container relative  contact-us">
      <div className="text-container">
        <p>Ozvěte se nám a my Vám rádi nařežeme!</p>
        <br />
        <p>Honza 721223677</p>
        <p>Michal 608416830</p>
        <p>tatovapila@gmail.com</p>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
