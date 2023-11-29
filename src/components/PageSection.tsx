import "./PageSection.css";

interface PageSectionProps {
  id: string;
  title: string;
  text: string;
  image: string;
}

const PageSection: React.FC<PageSectionProps> = ({
  id,
  title,
  text,
  image,
}) => {
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
    <section id={id} style={sectionStyle}>
      <div className="page-section-title">{title}</div>
      <div className="page-section-text">{text}</div>
    </section>
  );
};

export default PageSection;
