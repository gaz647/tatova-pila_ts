import "./ContactCard.css";

interface ContactCardProps {
  image?: string;
  name: string;
  phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ image, name, phone }) => {
  return (
    <div className="contact-card-container">
      <img className="contact-card-image" src={image} alt="" />

      <div>{name}</div>
      <div>{phone}</div>
    </div>
  );
};

export default ContactCard;
