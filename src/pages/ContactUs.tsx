import "./ContactUs.css";
import ContactCard from "../components/ContactCard";
import HonzaImage from "../assets/pictures/profile-image-1.jpg";
import MichalImage from "../assets/pictures/profile-image-2.jpg";
import EmailImage from "../assets/pictures/email-image.jpg";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
  return (
    <div className="page-container-last-page relative">
      <div id="fb-root"></div>
      <div className="text-container">
        <div className="page-heading">Ozvěte se a my Vám rádi nařežeme!</div>

        <div className="contact-us-contact-cards-container">
          <ContactCard
            image={HonzaImage}
            name={"Honza"}
            phone="+420 721 223 677"
          />
          <ContactCard
            image={MichalImage}
            name={"Michal"}
            phone="+420 608 416 830"
          />
          <ContactCard image={EmailImage} email="tatovapila@gmail.com" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
