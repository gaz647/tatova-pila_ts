import "./ContactCardDetails.css";

interface ContactCardDetailsProps {
  phone?: string;
  email?: string;
}

const ContactCardDetails: React.FC<ContactCardDetailsProps> = ({
  phone,
  email,
}) => {
  return (
    <>
      {phone && (
        <div className="text-shadow-black contact-card-details-phone-email">
          {phone}
        </div>
      )}
      {email && (
        <a
          className="text-shadow-black contact-card-details-phone-email"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      )}
    </>
  );
};

export default ContactCardDetails;
