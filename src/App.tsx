// import WhatWeDontDo from "./pages/WhatWeDontDo";
// import data from "./assets/data";
import "./App.css";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import WhereWeWork from "./pages/WhereWeWork";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
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
      <PageSection id={"0"} image={"/about-us"} screenWidth={screenWidth}>
        <AboutUs />
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
      <PageSection id={"3"} image={"/pricing"} screenWidth={screenWidth}>
        <Pricing />
      </PageSection>
      <PageSection id={"4"} image={"/gallery"} screenWidth={screenWidth}>
        <Gallery />
      </PageSection>
      <PageSection id={"5"} image={"/contact-us"} screenWidth={screenWidth}>
        <ContactUs />
      </PageSection>
    </div>
  );
}

export default App;
