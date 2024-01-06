import "./Gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { images } from "../galleryImagesData";

const Gallery: React.FC = () => {
  const startIndex = Math.floor(Math.random() * 45);

  return (
    <div className="page-container  darker-background relative fade-in-from-center">
      <div className="gallery-carousel-container">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          autoPlay={true}
          startIndex={startIndex}
          swipeThreshold={10}
          lazyLoad={true}
        />
      </div>
    </div>
  );
};

export default Gallery;
