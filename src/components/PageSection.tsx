import "./PageSection.css";
import { ReactNode } from "react";

interface PageSectionProps {
  id: string;
  image: string;
  hideNavbarOnClick: React.MouseEventHandler<HTMLElement> | undefined;
  hideNavbarOnTouchStart: React.TouchEventHandler<HTMLElement> | undefined;

  children?: ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({
  id,
  image,
  hideNavbarOnClick,
  hideNavbarOnTouchStart,
  children,
}) => {
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  return (
    <section
      className="page-section"
      id={id}
      style={sectionStyle}
      onClick={hideNavbarOnClick}
      onTouchStart={hideNavbarOnTouchStart}
    >
      {children}
    </section>
  );
};

export default PageSection;
