import "./Gallery.css";

const Gallery: React.FC = () => {
  const images = [
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
    "src/assets/pictures/profile-image-1.jpg",
    "src/assets/pictures/profile-image-2.jpg",
  ];

  return (
    <div className="gallery">
      {images.map((oneImage) => {
        return <img src={oneImage} className="square"></img>;
      })}
    </div>
  );
};

export default Gallery;
