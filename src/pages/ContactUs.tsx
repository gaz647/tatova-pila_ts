import "./ContactUs.css";
import { useEffect } from "react";
import ContactCard from "../components/ContactCard";
import HonzaImage from "../assets/pictures/profile-image.png";
import FacebookPage from "../components/FacebookPage";

const ContactUs = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      <div className="text-container">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61554686402211"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/profile.php?id=61554686402211"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/profile.php?id=61554686402211">
              Tátova Pila
            </a>
          </blockquote>
        </div>
      </div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/profile.php?id=61554686402211"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/profile.php?id=61554686402211"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/profile.php?id=61554686402211">
            Tátova Pila
          </a>
        </blockquote>
      </div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0"
        nonce="VQ43Bv10"
      ></script>
      <FacebookPage />
      <div className="facebook-page-container">
        <FacebookPage />
      </div>
    </div>
  );
};

export default ContactUs;
