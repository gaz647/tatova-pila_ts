import "./App.css";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import WhereWeWork from "./pages/WhereWeWork";
import WhatWeDontDo from "./pages/WhatWeDontDo";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
// import data from "./assets/data";
import { useState, useEffect } from "react";

function App() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const imageRowCount = 5;

  const imageSize = screenWidth / imageRowCount;

  const numberOfRows = Math.round(screenHeight / imageSize);

  const totalImageCount = imageRowCount * numberOfRows + 5;

  const [imagesToBePlaced, setImagesToBePlaced] = useState<string[]>([]);

  useEffect(() => {
    const images: string[] = [
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
    if (imagesToBePlaced.length === 0) {
      const newImagesToBePlaced: string[] = [];
      while (
        newImagesToBePlaced.length < totalImageCount &&
        images.length > 0
      ) {
        const randomIndex = Math.floor(Math.random() * images.length);

        if (!newImagesToBePlaced.includes(images[randomIndex])) {
          newImagesToBePlaced.push(images[randomIndex]);
        }
      }
      setImagesToBePlaced(newImagesToBePlaced);
    }
  }, [imagesToBePlaced, totalImageCount]);

  const [currentVisiblePageId, setCurrentVisiblePageId] = useState("0");

  useEffect(() => {
    const pageSections = document.querySelectorAll(".page-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentVisiblePageId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    pageSections.forEach((pageSection) => {
      observer.observe(pageSection);
    });

    return () => {
      pageSections.forEach((pageSection) => {
        observer.unobserve(pageSection);
      });
    };
  }, []);

  return (
    <div className="app">
      <Navbar currentVisiblePageId={currentVisiblePageId} />
      <PageSection id={"0"} image={"/about-us"} screenWidth={screenWidth}>
        <AboutUs />
      </PageSection>
      <PageSection id={"1"} image={"/what-we-do"} screenWidth={screenWidth}>
        <WhatWeDo />
      </PageSection>
      <PageSection id={"2"} image={"/where-we-work"} screenWidth={screenWidth}>
        <WhereWeWork />
      </PageSection>
      <PageSection
        id={"3"}
        image={"/what-we-dont-do"}
        screenWidth={screenWidth}
      >
        <WhatWeDontDo />
      </PageSection>
      <PageSection id={"4"}>
        <Gallery imagesToBePlaced={imagesToBePlaced} />
      </PageSection>
      <PageSection id={"5"} image={"/contact-us"} screenWidth={screenWidth}>
        <ContactUs />
      </PageSection>
    </div>
  );
}

export default App;
