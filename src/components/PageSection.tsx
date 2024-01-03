import "./PageSection.css";
import { ReactNode, useState, useEffect } from "react";

interface PageSectionProps {
  image?: string;
  screenWidth?: number;
  children: ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({
  image,
  screenWidth,
  children,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurredImage =
    screenWidth && screenWidth < 500
      ? `url(${image}-mobile-blurred.jpg)`
      : `url(${image}-big-blurred.jpg)`;

  const mainImage =
    screenWidth && screenWidth < 500
      ? `${image}-mobile.jpg`
      : `${image}-big.jpg`;

  useEffect(() => {
    const imgElement: HTMLImageElement | null = document.querySelector(
      ".page-section .background-image"
    );

    const handleImageLoad = () => {
      setIsImageLoaded(true);
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
    <section className="page-section">
      {image && (
        <div
          className={`blur-container ${
            isImageLoaded && "blur-container-loaded"
          }`}
          style={{ backgroundImage: blurredImage }}
        >
          <img
            className={`background-image ${
              isImageLoaded && "background-image-loaded"
            }`}
            src={mainImage}
            alt=""
            loading="lazy"
          />
        </div>
      )}
      {children}
    </section>
  );
};

export default PageSection;
