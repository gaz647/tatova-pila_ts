import "./ContactUs.css";
import { Helmet } from "react-helmet-async";
import ContactCard from "../components/ContactCard";
import HonzaImage from "../assets/pictures/profile-image-1.jpg";
import MichalImage from "../assets/pictures/profile-image-2.jpg";
import EmailImage from "../assets/pictures/email-image.jpg";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
  return (
    <div className="page-container padding relative ">
      <Helmet>
        <title>Kontakt</title>
      </Helmet>
      <div className="text-container fade-in-from-center">
        <h1 className="page-heading slide-in-left-heading">
          Ozvěte se a&nbsp;my Vám rádi nařežeme!
        </h1>

        <div className="contact-us-contact-cards-container">
          <div className="slide-in-right-contact-1">
            <ContactCard
              image={HonzaImage}
              name={"Honza"}
              phone="+420 721 223 677"
            />
          </div>
          <div className="slide-in-right-contact-2">
            <ContactCard
              image={MichalImage}
              name={"Michal"}
              phone="+420 608 416 830"
            />
          </div>
          <div className="slide-in-right-contact-3">
            <ContactCard image={EmailImage} email="tatovapila@gmail.com" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
