import "./Gallery.css";

interface GalleryProps {
  screenWidth: number;
  screenHeight: number;
}

const Gallery: React.FC<GalleryProps> = ({ screenWidth, screenHeight }) => {
  const images = [
    "/gallery-bg-image-1.jpg",
    "/gallery-bg-image-2.jpg",
    "/gallery-bg-image-3.jpg",
    "/gallery-bg-image-4.jpg",
    "/gallery-bg-image-5.jpg",
    "/gallery-bg-image-6.jpg",
    "/gallery-bg-image-7.jpg",
    "/gallery-bg-image-8.jpg",
    "/gallery-bg-image-9.jpg",
    "/gallery-bg-image-10.jpg",
    "/gallery-bg-image-11.jpg",
    "/gallery-bg-image-12.jpg",
    "/gallery-bg-image-13.jpg",
    "/gallery-bg-image-14.jpg",
    "/gallery-bg-image-15.jpg",
    "/gallery-bg-image-16.jpg",
    "/gallery-bg-image-17.jpg",
    "/gallery-bg-image-18.jpg",
    "/gallery-bg-image-19.jpg",
    "/gallery-bg-image-20.jpg",
    "/gallery-bg-image-21.jpg",
    "/gallery-bg-image-22.jpg",
    "/gallery-bg-image-23.jpg",
    "/gallery-bg-image-24.jpg",
    "/gallery-bg-image-25.jpg",
    "/gallery-bg-image-26.jpg",
    "/gallery-bg-image-27.jpg",
    "/gallery-bg-image-28.jpg",
    "/gallery-bg-image-29.jpg",
    "/gallery-bg-image-30.jpg",
    "/gallery-bg-image-31.jpg",
    "/gallery-bg-image-32.jpg",
    "/gallery-bg-image-33.jpg",
    "/gallery-bg-image-34.jpg",
    "/gallery-bg-image-35.jpg",
    "/gallery-bg-image-36.jpg",
    "/gallery-bg-image-37.jpg",
    "/gallery-bg-image-38.jpg",
    "/gallery-bg-image-39.jpg",
    "/gallery-bg-image-40.jpg",
    "/gallery-bg-image-41.jpg",
    "/gallery-bg-image-42.jpg",
    "/gallery-bg-image-43.jpg",
    "/gallery-bg-image-44.jpg",
    "/gallery-bg-image-45.jpg",
  ];

  const imageRowCount = 5;

  const imageSize = screenWidth / imageRowCount;

  const numberOfRows = Math.round(screenHeight / imageSize);

  const totalImageCount = imageRowCount * numberOfRows + 5;

  const imagesToBePlaced: string[] = [];

  while (imagesToBePlaced.length < totalImageCount && images.length > 0) {
    const randomIndex = Math.floor(Math.random() * images.length);

    if (!imagesToBePlaced.includes(images[randomIndex])) {
      imagesToBePlaced.push(images[randomIndex]);
    }
  }

  return (
    <div className="gallery">
      {imagesToBePlaced.map((oneImage) => {
        return (
          <img src={oneImage} className="gallery-img" key={oneImage}></img>
        );
      })}
    </div>
  );
};

export default Gallery;
