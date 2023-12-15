import "./PageSection.css";
import { ReactNode, useState, useEffect } from "react";

interface PageSectionProps {
  id: string;
  image: string;
  screenWidth: number;
  children: ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({
  id,
  image,
  screenWidth,
  children,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurredImage = `url(${image}-blurred.jpg)`;

  const mainImage =
    screenWidth < 1000 ? `url(${image}-small.jpg)` : `${image}-big.jpg`;

  const bigImage = `${image}-big.jpg`;

  console.log(screenWidth);

  useEffect(() => {
    const imgElement: HTMLImageElement | null = document.querySelector(
      ".page-section .background-image"
    );

    const handleImageLoad = () => {
      setIsImageLoaded(true);
      console.log("loaded");
    };

    if (imgElement) {
      if (imgElement.complete) {
        setIsImageLoaded(true);
      } else {
        imgElement.addEventListener("load", handleImageLoad);
      }
    }

    return () => {
      // Cleanup the event listener when the component unmounts
      imgElement?.removeEventListener("load", handleImageLoad);
    };
  }, []);

  return (
    <section className="page-section" id={id}>
      <div
        className={`blur-container ${isImageLoaded && "blur-container-loaded"}`}
        style={{ backgroundImage: blurredImage }}
      >
        <img
          className={`background-image ${
            isImageLoaded && "background-image-loaded"
          }`}
          src={bigImage}
          alt=""
          loading="lazy"
        />
      </div>
      {children}
    </section>
  );
};

export default PageSection;
