import "./PageSection.css";
import { ReactNode } from "react";

interface PageSectionProps {
  id: string;
  image: string;
  children?: ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ id, image, children }) => {
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
    <section className="section" id={id} style={sectionStyle}>
      {children}
    </section>
  );
};

export default PageSection;
