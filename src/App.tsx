import "./App.css";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
// import AboutUs from "./pages/AboutUs";
import AboutUs_2 from "./pages/AboutUs_2";
import WhatWeDo from "./pages/WhatWeDo";
import WhereWeWork from "./pages/WhereWeWork";
// import WhatWeDontDo from "./pages/WhatWeDontDo";
// import Gallery from "./pages/Gallery";
import Gallery_2 from "./pages/Gallery_2";
import ContactUs from "./pages/ContactUs";
// import data from "./assets/data";
import { useState, useEffect } from "react";

function App() {
  const screenWidth = window.innerWidth;
  // const screenHeight = window.innerHeight;

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
      <PageSection id={"0"} image={"/gallery"} screenWidth={screenWidth}>
        <AboutUs_2 />
      </PageSection>
      <PageSection id={"1"} image={"/what-we-do"} screenWidth={screenWidth}>
        <WhatWeDo />
      </PageSection>
      <PageSection id={"2"} image={"/where-we-work"} screenWidth={screenWidth}>
        <WhereWeWork />
      </PageSection>
      {/* <PageSection
        id={"3"}
        image={"/what-we-dont-do"}
        screenWidth={screenWidth}
      >
        <WhatWeDontDo />
      </PageSection> */}
      <PageSection id={"3"} image={"/about-us"} screenWidth={screenWidth}>
        <Gallery_2 />
      </PageSection>
      <PageSection id={"4"} image={"/contact-us-2"} screenWidth={screenWidth}>
        <ContactUs />
      </PageSection>
    </div>
  );
}

export default App;
