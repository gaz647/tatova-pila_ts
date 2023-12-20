import "./Gallery.css";

interface GalleryProps {
  imagesToBePlaced: string[];
}

const Gallery: React.FC<GalleryProps> = ({ imagesToBePlaced }) => {
  return (
    <div className="gallery">
      {imagesToBePlaced.map((oneImage) => {
        return <img src={oneImage} className="gallery-img"></img>;
      })}
    </div>
  );
};

export default Gallery;
