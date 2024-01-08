import "./PageSection.css";
import React from "react";
import ChangePageBtn from "../components/ChangePageBtn";
import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageSectionProps {
  image?: string;
  screenWidth?: number;
  scrollTo?: number;
  children: ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({
  image,
  screenWidth,
  scrollTo,
  children,
}) => {
  // ----------------- REDIRECTING BUTTONS
  //
  const currentPageUrl = useLocation().pathname;

  const [previousPageBtnUrl, setPreviousPageBtnUrl] = useState<string | null>(
    null
  );
  const [nextPageBtnUrl, setNextPageBtnUrl] = useState<string | null>(null);

  useEffect(() => {
    const locations = [
      "/",
      "/co-delame",
      "/kde-pracujeme",
      "/za-kolik",
      "/galerie",
      "/kontakt",
    ];

    const currentPageUrlLocationsIndex = locations.indexOf(currentPageUrl);

    if (currentPageUrlLocationsIndex && currentPageUrlLocationsIndex === 0) {
      setNextPageBtnUrl(locations[currentPageUrlLocationsIndex + 1]);
    } else if (
      currentPageUrlLocationsIndex &&
      currentPageUrlLocationsIndex === locations.length
    ) {
      setPreviousPageBtnUrl(locations[currentPageUrlLocationsIndex - 1]);
    } else {
      setPreviousPageBtnUrl(locations[currentPageUrlLocationsIndex - 1]);
      setNextPageBtnUrl(locations[currentPageUrlLocationsIndex + 1]);
    }
  }, [currentPageUrl, nextPageBtnUrl, previousPageBtnUrl]);
  //
  // -------------------------------------------------------------------------

  // ----------------- IMAGES
  //
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurredImage =
    screenWidth && screenWidth < 500
      ? `url(${image}-mobile-blurred.jpg)`
      : `url(${image}-big-blurred.jpg)`;

  const mainImage =
    screenWidth && screenWidth < 500
      ? `${image}-mobile.jpg`
      : `${image}-big.jpg`;

  //
  // -------------------------------------------------------------------------

  // ----------------- SCROLL POSITION SETTING
  //
  scrollTo && window.scrollTo(0, scrollTo);
  //
  // -------------------------------------------------------------------------

  return (
    <section className="page-section relative">
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
            onLoad={() => {
              setIsImageLoaded(true);
            }}
          />
        </div>
      )}
      <ChangePageBtn type={"previous"} page={previousPageBtnUrl} />
      {isImageLoaded && <>{children}</>}

      <ChangePageBtn type={"next"} page={nextPageBtnUrl} />
    </section>
  );
};

export default PageSection;
