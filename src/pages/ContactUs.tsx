import "./ContactUs.css";
import ContactCard from "../components/ContactCard";
import HonzaImage from "../assets/pictures/profile-image-1.jpg";
import MichalImage from "../assets/pictures/profile-image-2.jpg";
import EmailImage from "../assets/pictures/email-image.jpg";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
  return (
    <div className="page-container padding relative fade-in-from-center">
      <div className="text-container">
        <div className="page-heading">Ozvěte se a my Vám rádi nařežeme!</div>

        <div className="contact-us-contact-cards-container">
          <div className="contact-card-1">
            <ContactCard
              image={HonzaImage}
              name={"Honza"}
              phone="+420 721 223 677"
            />
          </div>
          <div className="contact-card-2">
            <ContactCard
              image={MichalImage}
              name={"Michal"}
              phone="+420 608 416 830"
            />
          </div>
          <div className="contact-card-3">
            <ContactCard image={EmailImage} email="tatovapila@gmail.com" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
