import Footer from "../components/Footer";
import "./ContactUs.css";
import ContactCard from "../components/ContactCard";
import HonzaImage from "../assets/pictures/profile-image.png";

const ContactUs = () => {
  return (
    <section className="section-container relative  contact-us">
      <div className="text-container">
        <div className="page-heading">Kontakt</div>
        <h3 className="contact-us-heading">
          Ozvěte se nám a my Vám rádi nařežeme!
        </h3>
        <br />
        <div className="contact-us-contact-cards-container">
          <ContactCard image={HonzaImage} name={"Honza"} phone="721 223 677" />
          <ContactCard image={HonzaImage} name={"Michal"} phone="608 416 830" />
        </div>

        <h3>tatovapila@gmail.com</h3>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
