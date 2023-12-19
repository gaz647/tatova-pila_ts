import "./Gallery.css";

const Gallery: React.FC = () => {
  const images = [
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
    "/pictures/profile-image-1.jpg",
    "/pictures/profile-image-2.jpg",
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
