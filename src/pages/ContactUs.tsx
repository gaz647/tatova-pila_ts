import "./ContactUs.css";
import ContactCard from "../components/ContactCard";
import HonzaImage from "../assets/pictures/profile-image.png";

const ContactUs = () => {
  return (
    <div className="page-container contact-us dis-flex-row-center relative">
      <div id="fb-root"></div>
      <div className="text-container">
        <div className="page-heading">Kontakt</div>
        <h2 className="contact-us-heading text-shadow-black">
          Ozvěte se nám a my Vám rádi nařežeme!
        </h2>
        <br />
        <div className="contact-us-contact-cards-container">
          <ContactCard image={HonzaImage} name={"Honza"} phone="721 223 677" />
          <ContactCard image={HonzaImage} name={"Michal"} phone="608 416 830" />
        </div>

        <h2 className="text-shadow-black">tatovapila@gmail.com</h2>
      </div>
    </div>
  );
};

export default ContactUs;
