import React from "react";
import "./ContactCard.css";
import { useState } from "react";
const ContactCardDetails = React.lazy(() => import("./ContactCardDetails"));

interface ContactCardProps {
  image: string;
  name?: string;
  phone?: string;
  email?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  image,
  name,
  phone,
  email,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="contact-card-container">
      <img className="contact-card-image" src={image} alt="" />

      {name && (
        <div className="contact-card-name-email text-shadow-black">{name}</div>
      )}
      {email && (
        <div className="contact-card-name-email text-shadow-black">email</div>
      )}

      {!showDetails ? (
        <button
          className="contact-card-button"
          onClick={() => setShowDetails(true)}
        >
          Ukázat
        </button>
      ) : (
        <React.Suspense fallback={<div>..načítám</div>}>
          <ContactCardDetails phone={phone} email={email} />
        </React.Suspense>
      )}
    </div>
  );
};

export default ContactCard;
