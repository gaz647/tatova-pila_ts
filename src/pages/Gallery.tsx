import "./Gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { images } from "../galleryImagesData";
import { useParams } from "react-router-dom";

const Gallery: React.FC = () => {
  const urlParam = useParams();
  const { myParam } = urlParam;

  const startIndex =
    myParam && myParam.includes("woodChipper")
      ? 45
      : Math.floor(Math.random() * 45);

  return (
    <div className="page-container darker-background relative">
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
